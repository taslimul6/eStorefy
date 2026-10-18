import "@/styles/base.css";
import "@/styles/directory.css";
import "@/styles/profile.css";
import "@/styles/apps.css";
import "@/styles/site-refresh.css";
import "@/styles/site-shell.css";
import SiteShell from "@/components/shared/SiteShell";

import Script from "next/script";
import { site } from "@/lib/site";
import JsonLd from "@/components/shared/JsonLd";
import ShortlistProvider from "@/components/providers/ShortlistProvider";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "eStorefy — Shopify Agency Directory",
    template: "%s | eStorefy",
  },
  description: site.description,
  icons: { icon: "/icon.svg" },
  keywords: [
    "Shopify agency directory",
    "Shopify apps directory",
    "Shopify developers",
    "eStorefy",
  ],
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": `${site.url}/#website`,
                url: site.url,
                name: site.name,
                description: site.description,
                inLanguage: "en",
                publisher: { "@id": `${site.url}/#publisher` },
              },
              {
                "@type": "Organization",
                "@id": `${site.url}/#publisher`,
                name: site.name,
                url: site.url,
              },
            ],
          }}
        />
        <ShortlistProvider>
          <SiteShell>{children}</SiteShell>
        </ShortlistProvider>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GT-PJ4NLK4K"
          strategy="afterInteractive"
        />

        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              window.dataLayer.push(arguments);
            }

            gtag('js', new Date());
            gtag('config', 'GT-PJ4NLK4K');
          `}
        </Script>
      </body>
    </html>
  );
}
