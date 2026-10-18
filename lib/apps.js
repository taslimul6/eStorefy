import fs from "node:fs";
import path from "node:path";
const root = path.join(process.cwd(), "data/apps");
const text = (v) => (typeof v === "string" ? v.trim() : "");
export const list = (v) => (Array.isArray(v) ? v : []);
export function safeUrl(v) {
  try {
    const u = new URL(v);
    return ["https:", "http:"].includes(u.protocol) ? u.href : null;
  } catch {
    return null;
  }
}
const slug = (v) =>
  text(v)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
function files(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name))
    .flatMap((f) =>
      f.isDirectory()
        ? files(path.join(dir, f.name))
        : f.name.endsWith(".json")
          ? [path.join(dir, f.name)]
          : [],
    );
}
let cached;
export function getAppDirectory() {
  if (cached) return cached;
  const categories = files(root)
    .map((file) => {
      const data = JSON.parse(fs.readFileSync(file, "utf8"));
      const c = data.category;
      if (!text(c?.name)) throw new Error(`Missing category name: ${file}`);
      const categorySlug = slug(c.slug || c.name);
      const seen = new Set();
      const apps = list(data.apps)
        .filter((a) => text(a?.name))
        .map((a) => {
          const appSlug = slug(a.slug || a.name);
          if (!appSlug || seen.has(appSlug))
            throw new Error(`Duplicate/empty app slug: ${file}: ${appSlug}`);
          seen.add(appSlug);
          return {
            ...a,
            slug: appSlug,
            identity:
              safeUrl(a.links?.canonical_app_store_url) ||
              safeUrl(a.links?.app_store_url) ||
              text(a.id) ||
              appSlug,
            path: `/apps/${categorySlug}/${appSlug}`,
          };
        });
      return {
        ...c,
        slug: categorySlug,
        path: `/apps/${categorySlug}`,
        apps,
        dataset: data.dataset,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
  const seen = new Set();
  const occurrences = new Map();
  for (const c of categories) {
    if (!c.slug || seen.has(c.slug)) throw new Error(`Duplicate category: ${c.slug}`);
    seen.add(c.slug);
    for (const a of c.apps) {
      const entries = occurrences.get(a.identity) || [];
      entries.push({ c, a });
      occurrences.set(a.identity, entries);
    }
  }
  for (const entries of occurrences.values()) {
    entries.sort((x, y) => x.a.path.localeCompare(y.a.path));
    const primary =
      entries.find((e) =>
        entries.every((x) => x.a.discovery?.primary_category_id === e.c.id),
      ) || entries[0];
    for (const { a } of entries) a.canonicalPath = primary.a.path;
  }
  cached = {
    categories,
    uniqueAppCount: occurrences.size,
    listingCount: categories.reduce((n, c) => n + c.apps.length, 0),
  };
  return cached;
}
export const getCategory = (s) => getAppDirectory().categories.find((c) => c.slug === s);
export function appSummary(a) {
  return {
    name: a.name,
    path: a.path,
    description: text(a.overview?.description_short),
    logo: safeUrl(a.media?.logo_url),
    rating:
      typeof a.rating?.value === "number" && a.rating.value >= 0 && a.rating.value <= 5
        ? a.rating.value
        : null,
    reviews:
      Number.isInteger(a.rating?.review_count) && a.rating.review_count >= 0
        ? a.rating.review_count
        : null,
    pricing: text(a.pricing?.listing_label),
    features: list(a.features_and_compatibility?.structured_features)
      .map((f) => text(f.label))
      .filter(Boolean)
      .slice(0, 4),
  };
}
export function getAppsSitemap() {
  const { categories } = getAppDirectory();
  return [
    { path: "/apps" },
    ...categories.filter((c) => c.apps.length).map((c) => ({ path: c.path })),
    ...categories.flatMap((c) =>
      c.apps
        .filter((a) => a.path === a.canonicalPath)
        .map((a) => ({ path: a.path, date: a.research?.source?.retrieved_at })),
    ),
  ];
}
