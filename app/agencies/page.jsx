import DirectoryPage from "@/components/directory/DirectoryPage";
import { getAllAgencies } from "@/lib/agencies";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({
  title: "Browse Shopify Agencies",
  description: "Explore Shopify agencies by location, service and published expertise.",
  path: "/agencies",
  keywords: [
    "Shopify agency directory",
    "Shopify developers",
    "Shopify migration agencies",
    "Shopify store design",
    "independent Shopify experts",
  ],
});
export default function Page() {
  return <DirectoryPage agencies={getAllAgencies()} />;
}
