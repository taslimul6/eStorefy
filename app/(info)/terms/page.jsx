import Link from "next/link";
import RevealEmail from "@/components/shared/RevealEmail";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({
  title: "Terms of Use \u2014 eStorefy Directory",
  description:
    "Read the terms for using eStorefy, including directory information, third-party links, research limitations and responsibility for evaluating Shopify providers.",
  path: "/terms",
  keywords: ["eStorefy terms of use", "directory terms", "third-party links"],
});
export default function Page() {
  return (
    <article className="info-content">
      <h1>Terms of use</h1>
      <p>Last updated: October 13, 2026.</p>
      <h2>Using the directory</h2>
      <p>
        eStorefy provides agency and app information to support discovery and comparison.
        Listing a provider does not establish an endorsement, partnership or guarantee.
        You are responsible for assessing a provider and agreeing any services directly
        with them.
      </p>
      <h2>Information and editorial guidance</h2>
      <p>
        Prices, reviews, features and availability can change. Editorial content is
        general information, and setup outlines may not apply to every app. Confirm
        material details with the official provider before purchasing or installing.
      </p>
      <h2>Responsible use</h2>
      <p>
        Do not attempt to disrupt the service, gain unauthorized access or misuse contact
        information. Provider names, trademarks and images belong to their respective
        owners. Their inclusion identifies the relevant listings.
      </p>
      <h2>External services</h2>
      <p>
        Third-party websites, apps and services operate under their own terms. eStorefy is
        not a party to your purchases or service agreements with listed providers.
      </p>
      <h2>Corrections and questions</h2>
      <p>
        We may update directory information and these terms. Report concerns through our{" "}
        <Link href="/contact">contact page</Link>. Nothing here is intended to exclude
        rights that cannot lawfully be excluded.
      </p>
    </article>
  );
}
