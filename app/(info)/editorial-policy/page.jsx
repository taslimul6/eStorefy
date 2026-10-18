import Link from "next/link";
import RevealEmail from "@/components/shared/RevealEmail";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({
  title: "Editorial Policy \u2014 Sources & Listing Standards",
  description:
    "Read how eStorefy selects listings, attributes sources, labels editorial content and presents Shopify agency information, app data and research limitations.",
  path: "/editorial-policy",
  keywords: [
    "eStorefy editorial policy",
    "directory source attribution",
    "listing research standards",
  ],
});
export default function Page() {
  return (
    <article className="info-content">
      <h1>How we organize the directory</h1>
      <h2>Public information, with context</h2>
      <p>
        App and agency profiles use public listing information and editorial summaries.
        Recorded ratings, review counts and pricing are snapshots; verify current details
        on the original provider’s website or Shopify listing.
      </p>
      <h2>Featured selections and ordering</h2>
      <p>
        The homepage shows 15 agencies in directory order and 15 distinct apps across
        categories. Featured placement is not a quality score or a claim of hands-on
        testing. App lists default to alphabetical order; rating and review sorts use the
        recorded fields.
      </p>
      <h2>Editorial content</h2>
      <p>
        Descriptions, FAQs and general setup guidance can be editorial drafts. Provenance
        labels indicate this. These summaries are not official developer instructions and
        should be reviewed for the particular store and app.
      </p>
      <h2>Advertising</h2>
      <p>
        Spaces marked Advertisement are available for sponsorship. Current placeholders
        are not paid endorsements. Any future paid placement should be clearly labelled.
      </p>
      <h2>Help improve a listing</h2>
      <p>
        To suggest a correction, send the relevant page URL and supporting source through
        the email on our <Link href="/contact">contact page</Link>.
      </p>
    </article>
  );
}
