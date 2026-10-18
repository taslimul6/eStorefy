import Link from "next/link";
import { notFound } from "next/navigation";
import { getAppDirectory, getCategory, appSummary } from "@/lib/apps";
import { absoluteUrl } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import Explorer from "@/components/apps/Explorer";
import { Faq, External, JsonLd } from "@/components/apps/Content";
export const dynamicParams = false;
export function generateStaticParams() {
  return getAppDirectory().categories.map((c) => ({ categorySlug: c.slug }));
}
export async function generateMetadata({ params }) {
  const c = getCategory((await params).categorySlug);
  if (!c) return {};
  const title = `Best Shopify ${c.name} Apps`;
  const description = `Compare ${c.apps.length} Shopify ${c.name.toLowerCase()} apps. Explore captured features, pricing, ratings and setup guidance to research options for your store.`;
  return pageMetadata({
    title,
    description,
    path: c.path,
    keywords: [
      `Shopify ${c.name} apps`,
      `best Shopify ${c.name} apps`,
      `${c.name} app pricing`,
      `${c.name} app features`,
      c.group,
    ],
  });
}
export default async function Page({ params }) {
  const c = getCategory((await params).categorySlug);
  if (!c) notFound();
  return (
    <>
      <nav className="apps-crumb" aria-label="Breadcrumb">
        <Link href="/apps">Apps</Link> / {c.name}
      </nav>
      <div className="apps-hero">
        <p className="apps-kicker">{c.group}</p>
        <h1>
          Best Shopify
          <br />
          <em>{c.name} Apps</em>
        </h1>
        <p>{c.description}</p>
        <small>{c.description_provenance}</small>
      </div>
      <p className="apps-notice">
        “Best” is a category discovery label, not a verified performance ranking. Apps are
        shown alphabetically by default. Optional sorts use the recorded rating and review
        count. Editorial descriptions and guidance require review.
      </p>
      {c.apps.length ? (
        <Explorer apps={c.apps.map(appSummary)} />
      ) : (
        <p>No apps are currently listed in this category.</p>
      )}
      <Faq items={c.faq} />
      {c.source_urls?.length > 0 && (
        <section className="apps-panel">
          <h2>Category sources</h2>
          {c.source_urls.map((url) => (
            <p key={url}>
              <External url={url}>{url}</External>
            </p>
          ))}
        </section>
      )}
      <JsonLd
        value={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `Best Shopify ${c.name} Apps`,
          url: absoluteUrl(c.path),
          description: c.description,
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: c.apps.length,
            itemListElement: c.apps.map((app, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: app.name,
              url: absoluteUrl(app.canonicalPath),
            })),
          },
        }}
      />
      <JsonLd
        value={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Apps",
              item: absoluteUrl("/apps"),
            },
            { "@type": "ListItem", position: 2, name: c.name, item: absoluteUrl(c.path) },
          ],
        }}
      />
    </>
  );
}
