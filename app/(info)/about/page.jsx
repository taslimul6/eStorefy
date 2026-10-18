import Link from "next/link";
import RevealEmail from "@/components/shared/RevealEmail";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({
  title: "About eStorefy \u2014 Shopify Agencies & Apps Directory",
  description:
    "Learn how eStorefy organizes Shopify agencies, developers and apps using public research, source links and clearly labeled editorial guidance.",
  path: "/about",
  keywords: ["about eStorefy", "Shopify directory research", "Shopify agency listings"],
});
export default function Page() {
  return (
    <article className="info-content">
      <p className="apps-kicker">PEOPLE. TOOLS. POSSIBILITIES.</p>
      <h1>
        A useful starting point
        <br />
        for your next Shopify project.
      </h1>
      <p>
        eStorefy is an independent directory founded by Hasan to help merchants discover
        Shopify agencies and apps. Browse published expertise, compare listing information
        and contact providers directly.
      </p>
      <h2>What you can explore</h2>
      <p>
        Find agency profiles by city, discover apps across 100 categories, and use filters
        to narrow your options. Featured lists are discovery selections, not endorsements
        or a guarantee of performance.
      </p>
      <h2>Built on clear information</h2>
      <p>
        Profiles draw on public listings and include editorial summaries. Details can
        change; confirm pricing, availability and suitability with the provider before
        committing.
      </p>
      <p>
        <Link href="/contact">Get in touch ↗</Link>
      </p>
    </article>
  );
}
