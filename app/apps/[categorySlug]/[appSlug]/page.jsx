import PartnerLink from "@/components/shared/PartnerLink";
import AdPlaceholder from "@/components/apps/AdPlaceholder";
import AppCard from "@/components/apps/AppCard";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAppDirectory, getCategory, list, safeUrl, appSummary } from "@/lib/apps";
import { absoluteUrl } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { Faq, External, JsonLd } from "@/components/apps/Content";
import AppImage from "@/components/apps/AppImage";
export const dynamicParams = false;
export function generateStaticParams() {
  return getAppDirectory().categories.flatMap((c) =>
    c.apps.map((a) => ({ categorySlug: c.slug, appSlug: a.slug })),
  );
}
async function resolve(params) {
  const p = await params;
  const c = getCategory(p.categorySlug);
  return { c, a: c?.apps.find((a) => a.slug === p.appSlug) };
}
export async function generateMetadata({ params }) {
  const { a, c } = await resolve(params);
  if (!a) return {};
  const summary = appSummary(a);
  return pageMetadata({
    title: `${a.name} — Shopify ${c.name} App`,
    description:
      summary.description ||
      `Research ${a.name}, a Shopify app listed for ${c.name.toLowerCase()}. Review captured features, pricing, setup guidance and source links.`,
    path: a.canonicalPath,
    keywords: [
      a.name,
      `${a.name} Shopify app`,
      `Shopify ${c.name} apps`,
      `${a.name} pricing`,
      `${a.name} features`,
      ...summary.features.slice(0, 3),
    ],
  });
}

export default async function Page({ params }) {
  const { c, a } = await resolve(params);
  if (!a) notFound();
  const s = appSummary(a);
  const features = list(a.features_and_compatibility?.structured_features).filter(
    (f) => f?.label,
  );
  const integrations = list(a.features_and_compatibility?.works_with);
  const plans = list(a.pricing?.plans);
  const source = a.research?.source;
  const date =
    source?.retrieved_at && !isNaN(Date.parse(source.retrieved_at))
      ? new Date(source.retrieved_at).toISOString().slice(0, 10)
      : null;
  const steps = list(a.guidance?.how_to_use?.steps).filter((v) => typeof v === "string");
  return (
    <>
      <nav className="apps-crumb" aria-label="Breadcrumb">
        <Link href="/apps">Apps</Link> / <Link href={c.path}>{c.name}</Link> / {a.name}
      </nav>
      <div className="apps-hero">
        <AppImage src={s.logo} name={a.name} />
        <p className="apps-kicker">SHOPIFY APP PROFILE</p>
        <h1>{a.name}</h1>
        {s.description && <p>{s.description}</p>}
        <small>
          {a.research?.description_provenance?.short || "Editorial summary"} · Review
          required
        </small>
        <div className="apps-facts">
          {s.rating !== null && (
            <span>
              ★ {s.rating} / 5{" "}
              {s.reviews !== null && `· ${s.reviews.toLocaleString()} reviews`}
            </span>
          )}
          {s.pricing && <span>{s.pricing}</span>}
          {date && <span>Last checked {date}</span>}
        </div>
        <PartnerLink className="apps-button">Check this app ↗</PartnerLink>
      </div>
      <nav className="app-section-nav" aria-label="On this page">
        {a.overview?.description_long && <a href="#overview">Overview</a>}
        {(s.pricing || plans.length > 0) && <a href="#pricing">Pricing</a>}
        {features.length > 0 && <a href="#features">Features</a>}
        <a href={c.path}>Browse category ↗</a>
      </nav>
      <div className="apps-detail-grid">
        <div>
          {a.overview?.description_long && (
            <section className="apps-panel">
              <h2 id="overview">About this app</h2>
              <p>{a.overview.description_long}</p>
              <small>
                {a.research?.description_provenance?.long ||
                  "Editorial description · Review required"}
              </small>
            </section>
          )}
          {(s.pricing || plans.length > 0) && (
            <section className="apps-panel">
              <h2 id="pricing">Pricing and plans</h2>
              <p>{s.pricing}</p>
              <div className="apps-grid">
                {plans.map((plan, i) => (
                  <div className="apps-plan" key={i}>
                    <h3>{plan.name}</h3>
                    {plan.price_display && <p>{plan.price_display}</p>}
                    {list(plan.additional_charge_notes).map((note, j) => (
                      <p key={j}>{note}</p>
                    ))}
                    {plan.trial_days > 0 && <p>{plan.trial_days}-day trial</p>}
                  </div>
                ))}
              </div>
              <p>
                Recorded listing information; confirm current pricing and usage charges
                before installing.
              </p>
              <PartnerLink>Check app plans ↗</PartnerLink>
            </section>
          )}
          {features.length > 0 && (
            <section className="apps-panel">
              <h2 id="features">Listed features</h2>
              <div className="apps-tags">
                {features.map((f, i) => (
                  <span key={i}>{f.label}</span>
                ))}
              </div>
            </section>
          )}
          {integrations.length > 0 && (
            <section className="apps-panel">
              <h2>Works with</h2>
              <p>{integrations.join(", ")}</p>
            </section>
          )}
          {steps.length > 0 && (
            <section className="apps-panel">
              <h2>General setup guidance</h2>
              <p className="apps-notice">
                Editorial draft — general outline, not verified app-specific developer
                instructions. Confirm these steps against the developer documentation.
              </p>
              <ol>
                {steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
              {list(a.guidance?.how_to_use?.documentation_urls).map((url) => (
                <p key={url}>
                  <External url={url}>Documentation</External>
                </p>
              ))}
            </section>
          )}
          <Faq items={a.guidance?.faq} />
          {list(a.media?.screenshot_urls).filter(safeUrl).length > 0 && (
            <section className="apps-panel">
              <h2>Listing screenshots</h2>
              <div className="apps-gallery">
                {a.media.screenshot_urls.filter(safeUrl).map((url, i) => (
                  <AppImage key={i} src={url} name={a.name} screenshot />
                ))}
              </div>
            </section>
          )}
        </div>
        <aside className="apps-detail-aside">
          <AdPlaceholder />
          <AdPlaceholder />
        </aside>
      </div>
      <section className="related-apps">
        <div className="section-heading-row">
          <div>
            <p className="apps-kicker">KEEP EXPLORING</p>
            <h2>More apps for {c.name.toLowerCase()}</h2>
          </div>
          <Link href={c.path}>View category ↗</Link>
        </div>
        <p>Other apps listed in the same category; shown alphabetically.</p>
        <div className="apps-grid">
          {c.apps
            .filter((other) => other.identity !== a.identity)
            .sort((x, y) => x.name.localeCompare(y.name))
            .slice(0, 6)
            .map((other) => (
              <AppCard key={other.path} app={appSummary(other)} />
            ))}
        </div>
      </section>
      <JsonLd
        value={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: `${a.name} Shopify app`,
          url: absoluteUrl(a.canonicalPath),
          ...(s.description ? { description: s.description } : {}),
          mainEntity: {
            "@type": "SoftwareApplication",
            "@id": `${absoluteUrl(a.canonicalPath)}#app`,
            name: a.name,
            applicationCategory: "BusinessApplication",
            applicationSubCategory: c.name,
            url: safeUrl(a.links?.app_store_url) || absoluteUrl(a.canonicalPath),
            ...(s.description ? { description: s.description } : {}),
            ...(s.logo ? { image: s.logo } : {}),
          },
        }}
      />
      <JsonLd
        value={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { name: "Apps", item: absoluteUrl("/apps") },
            { name: c.name, item: absoluteUrl(c.path) },
            { name: a.name, item: absoluteUrl(a.path) },
          ].map((x, i) => ({ "@type": "ListItem", position: i + 1, ...x })),
        }}
      />
    </>
  );
}
