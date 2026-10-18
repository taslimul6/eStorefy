import { getAppDirectory } from "@/lib/apps";
import { pageMetadata } from "@/lib/seo";
import Explorer from "@/components/apps/Explorer";
export const metadata = pageMetadata({
  title: "Shopify Apps Directory — Compare Apps by Category",
  description: `Explore ${getAppDirectory().categories.length} Shopify app categories and ${getAppDirectory().uniqueAppCount} distinct apps. Compare captured features, pricing and review information to research tools for your store.`,
  path: "/apps",
  keywords: [
    "Shopify apps directory",
    "best Shopify apps by category",
    "Shopify app features",
    "Shopify app pricing",
    "Shopify integrations",
  ],
});
export default function Page() {
  const { categories, uniqueAppCount } = getAppDirectory();
  const active = categories.filter((c) => c.apps.length);
  return (
    <>
      <div className="apps-hero">
        <p className="apps-kicker">THE SHOPIFY TOOLKIT</p>
        <h1>
          Find your store’s
          <br />
          <em>next great app.</em>
        </h1>
        <p>
          Explore {active.length} categories and {uniqueAppCount} distinct apps. Compare
          public listing information, then check the developer’s latest details before
          installing.
        </p>
        <div className="apps-tags">
          <span>{active.length} categories</span>
          <span>{uniqueAppCount} unique apps</span>
          <span>Source-linked research</span>
        </div>
      </div>
      <Explorer
        categories={active.map((c) => ({
          name: c.name,
          path: c.path,
          group: c.group,
          count: c.apps.length,
          appNames: c.apps.map((a) => a.name),
        }))}
      />
    </>
  );
}
