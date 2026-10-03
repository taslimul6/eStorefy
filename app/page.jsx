import DirectoryPage from "@/components/directory/DirectoryPage";
import JsonLd from "@/components/shared/JsonLd";
import { getAllAgencies } from "@/lib/agencies";
import { pageMetadata, directorySchema } from "@/lib/seo";
import { site } from "@/lib/site";
export const metadata = pageMetadata({
  title: "Shopify Agencies & Experts by City",
  description: site.description,
});
export default function HomePage() {
  const agencies = getAllAgencies();
  return (
    <>
      <JsonLd data={directorySchema(agencies, "Shopify agency directory", "/")} />
      <DirectoryPage agencies={agencies} />
    </>
  );
}
