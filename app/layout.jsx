import "@/styles/base.css";
import "@/styles/directory.css";
import "@/styles/profile.css";

import Script from "next/script";
import { site } from "@/lib/site";
import ShortlistProvider from "@/components/providers/ShortlistProvider";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "eStorefy — Shopify Agency Directory",
    template: "%s | eStorefy",
  },
  description: site.description,
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ShortlistProvider>{children}</ShortlistProvider>

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