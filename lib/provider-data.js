import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";

export const text = (value) => (typeof value === "string" ? value.trim() : "");
const list = (value) => (Array.isArray(value) ? value : []);
const strings = (value) => [...new Set(list(value).map(text).filter(Boolean))];
export function slug(value) {
  return text(value)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
export function sourceUrl(value) {
  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol) ? url.href : null;
  } catch {
    return null;
  }
}
export function validDate(value) {
  const date = text(value).slice(0, 10);
  return /^\d{4}-\d{2}-\d{2}$/.test(date) && !Number.isNaN(Date.parse(date))
    ? date
    : null;
}
export function websiteKey(value) {
  const url = sourceUrl(value);
  if (!url) return null;
  const parsed = new URL(url);
  return `${parsed.hostname.replace(/^www\./, "")}${parsed.pathname.replace(/\/$/, "")}`.toLowerCase();
}
export function providerKeys(agency) {
  const profile =
    agency.shopify?.partnerProfileUrl || agency.shopify?.partnerDirectoryUrl;
  return [
    websiteKey(agency.website),
    /\/partners\/directory\/partner\/[^/]+/.test(profile || "")
      ? websiteKey(profile)
      : null,
  ].filter(Boolean);
}

/** Fill sparse legacy fields; retain the original detailed claims and their observation dates. */
function supplement(primary, extra) {
  if (primary == null || primary === "") return extra;
  if (Array.isArray(primary)) return primary.length ? primary : extra;
  if (
    typeof primary === "object" &&
    extra &&
    typeof extra === "object" &&
    !Array.isArray(extra)
  ) {
    const merged = { ...extra };
    for (const key of Object.keys(primary))
      merged[key] = supplement(primary[key], extra[key]);
    return merged;
  }
  return primary;
}
function combineSources(first, second) {
  const seen = new Set();
  return [...list(first), ...list(second)].filter((s) => {
    const key = `${s.url}|${s.observedAt}|${s.type}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
export function normalizeProvider(raw, metadata) {
  const location = raw.location || {};
  const contact = raw.contact || {};
  const quality = raw.dataQuality || {};
  const sources = list(raw.sources)
    .filter((s) => sourceUrl(s?.url))
    .map((s) => ({
      ...s,
      url: sourceUrl(s.url),
      type: text(s.type) || "published_source",
      supports: strings(s.supports),
      observedAt: validDate(s.observedAt),
    }));
  const dates = [
    quality.observedAt,
    quality.researchedAt,
    quality.researchDate,
    ...sources.map((s) => s.observedAt),
  ]
    .map(validDate)
    .filter(Boolean)
    .sort();
  const description = text(raw.description) || text(raw.shortDescription);
  const faqs = list(raw.faqs).filter((q) => text(q?.question) && text(q?.answer));
  return {
    ...raw,
    importedRecordIds: [
      ...new Set(
        [...(raw.importedRecordIds || []), raw.id || `name:${raw.name}`].filter(Boolean),
      ),
    ],
    id:
      slug(raw.id || raw.name) ||
      `provider-${createHash("sha256")
        .update(String(raw.id || raw.name))
        .digest("hex")
        .slice(0, 10)}`,
    name: text(raw.name),
    website: sourceUrl(raw.website),
    description,
    longDescription: text(raw.longDescription),
    entityType: text(raw.entityType) || "agency",
    location: {
      ...location,
      relationship: text(location.relationship) || "source_reported",
      country: text(location.country) || metadata.country,
      countryCode: text(location.countryCode) || metadata.countryCode,
      region: text(location.region) || metadata.region || null,
    },
    contact: {
      ...contact,
      otherEmails: strings(contact.otherEmails),
      otherPhones: strings(contact.otherPhones),
    },
    shopify: {
      ...raw.shopify,
      partnerDirectoryUrl: sourceUrl(
        raw.shopify?.partnerDirectoryUrl || raw.shopify?.partnerProfileUrl,
      ),
    },
    services: strings(raw.services),
    industries: strings(raw.industries),
    languages: strings(raw.languages),
    technologies: strings(raw.technologies),
    supportedMarkets: strings(raw.supportedMarkets),
    ratings: list(raw.ratings)
      .filter(
        (r) => Number.isFinite(r?.value) && r.value >= 0 && r.value <= (r.scale || 5),
      )
      .map((r) => ({ ...r, scale: r.scale || 5, observedAt: validDate(r.observedAt) })),
    pricing: {
      projectMinimum: null,
      selectedServices: null,
      hourlyRate: null,
      ...raw.pricing,
    },
    portfolio: list(raw.portfolio)
      .map((item) => ({ ...item, client: text(item.client || item.name) }))
      .filter((item) => item.client),
    whatTheyDo: list(raw.whatTheyDo).map((item) => ({
      ...item,
      name: text(item.name || item.service),
    })),
    faqs,
    sources,
    dataQuality: {
      ...quality,
      observedAt: dates.at(-1) || validDate(metadata.researchedAt),
      notes: strings(quality.notes),
    },
    editorialNote:
      text(raw.editorialNote) ||
      (/generated|editorial/.test(raw.longDescriptionSourceType || "")
        ? "Editorial overview based on the cited research; not a quotation or independent verification."
        : ""),
    // Research completeness chooses the best canonical record, not robots eligibility.
    researchComplete: Boolean(
      description && strings(raw.services).length && sources.length,
    ),
    indexable: true,
  };
}

/** Read the current per-city snapshot only. Historical copies and unmapped rows are not live listings. */
export function loadProviderCities(legacyCities) {
  const root = path.join(process.cwd(), "data/providers/cities");
  const datasets = fs
    .readdirSync(root)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(root, f), "utf8")))
    .sort((a, b) => a.metadata.priorityRank - b.metadata.priorityRank);
  const registry = legacyCities.map((city) => ({
    ...city,
    dataset: structuredClone(city.dataset),
  }));
  const key = (m) => `${slug(m.city)}:${m.countryCode || "US"}`;
  const byPlace = new Map(registry.map((city) => [key(city.dataset.metadata), city]));
  const usedRoutes = new Set(registry.map((city) => city.route));
  for (const incoming of datasets) {
    const metadata = incoming.metadata;
    const existing = byPlace.get(key(metadata));
    if (existing) {
      for (const extra of incoming.agencies) {
        const tokens = providerKeys(extra);
        const previous = existing.dataset.agencies.find(
          (a) =>
            providerKeys(a).some((k) => tokens.includes(k)) ||
            ((!a.website || !extra.website) && slug(a.name) === slug(extra.name)) ||
            a.id === extra.id,
        );
        if (previous) {
          const merged = supplement(previous, extra);
          merged.sources = combineSources(previous.sources, extra.sources);
          merged.importedRecordIds = [
            ...new Set([...(previous.importedRecordIds || []), extra.id]),
          ];
          merged.importedResearch = {
            source: "06-enriched-current",
            id: extra.id,
            observedAt: metadata.latestEnrichmentDate || metadata.researchedAt,
          };
          Object.assign(previous, merged);
        } else existing.dataset.agencies.push(extra);
      }
      existing.dataset.metadata = {
        ...metadata,
        ...existing.dataset.metadata,
        country: metadata.country,
        countryCode: metadata.countryCode,
        region: metadata.region,
        latestEnrichmentDate: metadata.latestEnrichmentDate,
        researchedAt: [
          metadata.researchedAt,
          metadata.latestEnrichmentDate,
          existing.dataset.metadata.researchedAt,
        ]
          .filter(Boolean)
          .sort()
          .at(-1),
      };
      continue;
    }
    const base =
      slug(metadata.directorySlug) || `shopify-agency-in-${slug(metadata.city)}`;
    let route = base;
    if (usedRoutes.has(route)) route = `${base}-${metadata.countryCode.toLowerCase()}`;
    if (usedRoutes.has(route)) route = `${route}-${slug(metadata.region)}`;
    usedRoutes.add(route);
    const city = {
      id: route.replace(/^shopify-agency-in-/, ""),
      route,
      dataset: incoming,
    };
    registry.push(city);
    byPlace.set(key(metadata), city);
  }
  for (const city of registry) {
    const used = new Set();
    const records = [];
    for (const raw of city.dataset.agencies.filter((a) => text(a.name))) {
      const record = normalizeProvider(raw, city.dataset.metadata);
      const keys = providerKeys(record);
      const existing = records.find(
        (a) =>
          providerKeys(a).some((key) => keys.includes(key)) ||
          ((!a.website || !record.website) &&
            text(a.name).normalize("NFKC").toLowerCase() ===
              text(record.name).normalize("NFKC").toLowerCase()),
      );
      if (existing) {
        const merged = supplement(existing, record);
        merged.sources = combineSources(existing.sources, record.sources);
        merged.importedRecordIds = [
          ...new Set([...existing.importedRecordIds, ...record.importedRecordIds]),
        ];
        Object.assign(existing, normalizeProvider(merged, city.dataset.metadata));
        continue;
      }
      let id = record.id;
      let suffix = 2;
      while (used.has(id)) id = `${record.id}-${suffix++}`;
      used.add(id);
      records.push({ ...record, id });
    }
    city.dataset.agencies = records;
    city.dataset.metadata.agencyCount = records.length;
  }
  return registry;
}
