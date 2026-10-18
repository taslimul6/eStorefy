import Link from "next/link";
import RevealEmail from "@/components/shared/RevealEmail";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({
  title: "Privacy Policy \u2014 Data & Browser Storage",
  description:
    "Read the eStorefy privacy policy covering website analytics, browser storage, saved agency shortlists, published directory data and privacy enquiries.",
  path: "/privacy-policy",
  keywords: ["eStorefy privacy policy", "browser storage", "directory data privacy"],
});
export default function Page() {
  return (
    <article className="info-content">
      <h1>Privacy policy</h1>
      <p>Last updated: October 13, 2026.</p>
      <p>
        This page explains data use on eStorefy, an independent agency and app directory.
      </p>
      <h2>Website analytics</h2>
      <p>
        eStorefy includes a Google tag for analytics. Depending on your browser settings
        and applicable consent configuration, Google may collect interaction and device
        information and use cookies or similar storage. See{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google’s privacy policy
        </a>{" "}
        for its practices. You can control cookies through your browser and use Google’s
        analytics opt-out tools where supported.
      </p>
      <h2>Saved items on your device</h2>
      <p>
        Shortlists, comparisons and checklist choices may be stored in your browser’s
        local storage so they remain available on that device. You can remove them by
        clearing this site’s browser data.
      </p>
      <h2>Email contact</h2>
      <p>
        Revealing the email address does not submit a form. If you send us an email, we
        receive the address, message and attachments you choose to send and use them to
        handle your enquiry. Avoid sending unnecessary sensitive information.
      </p>
      <h2>Hosting and external services</h2>
      <p>
        Our hosting provider processes technical request information to deliver and
        protect the website. Images may load from provider or Shopify servers, which
        receive the associated network request. External links take you to websites
        governed by their own policies.
      </p>
      <h2>Public directory information</h2>
      <p>
        We display public business and app information. Contact us to request a correction
        or raise a concern about a listing. We retain correspondence as needed to handle
        enquiries and maintain relevant records; no fixed deletion period is promised
        here.
      </p>
      <h2>Advertising</h2>
      <p>
        Current advertising spaces are placeholders. If advertising services that collect
        additional data are introduced, this policy should be updated to describe them.
      </p>
      <h2>Questions and requests</h2>
      <p>
        For privacy questions or requests concerning your information, use our{" "}
        <Link href="/contact">contact page</Link>.
      </p>
    </article>
  );
}
