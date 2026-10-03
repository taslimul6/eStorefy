import "@/styles/base.css";
import "@/styles/directory.css";
import "@/styles/profile.css";
import { site } from "@/lib/site";
import ShortlistProvider from "@/components/providers/ShortlistProvider";

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: "eStorefy — Shopify Agency Directory", template: "%s | eStorefy" },
  description: site.description,
  icons: { icon: "/icon.svg" },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ShortlistProvider>{children}</ShortlistProvider>
      </body>
    </html>
  );
}
