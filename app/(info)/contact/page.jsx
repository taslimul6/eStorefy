import Link from "next/link";
import RevealEmail from "@/components/shared/RevealEmail";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({
  title: "Contact eStorefy \u2014 Listings, Advertising & Corrections",
  description:
    "Contact eStorefy about Shopify directory listings, advertising, sponsorship opportunities or corrections to published agency and app information.",
  path: "/contact",
  keywords: ["contact eStorefy", "Shopify directory advertising", "listing corrections"],
});
export default function Page() {
  return (
    <article className="info-content">
      <p className="apps-kicker">LET’S TALK</p>
      <h1>
        Good ideas start
        <br />
        with a conversation.
      </h1>
      <p>
        For advertising, listing corrections, partnerships or questions about eStorefy,
        reveal our email below and send us a message.
      </p>
      <RevealEmail />
      <p className="section-note">
        For billing, installation or support for a listed app, contact its developer
        directly.
      </p>
    </article>
  );
}
