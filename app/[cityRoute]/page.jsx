import { notFound } from "next/navigation";
import DirectoryPage from "@/components/directory/DirectoryPage";
import JsonLd from "@/components/shared/JsonLd";
import { getCities, getCity, getCityAgencies } from "@/lib/agencies";
import { pageMetadata, directorySchema, breadcrumbSchema, faqSchema } from "@/lib/seo";
export const dynamicParams = false;
export function generateStaticParams() {
  return getCities().map((city) => ({ cityRoute: city.route }));
}
export async function generateMetadata({ params }) {
  const { cityRoute } = await params;
  const city = getCity(cityRoute);
  if (!city) return {};
  return pageMetadata({
    title: `Shopify Agencies in ${city.fullName}`,
    description: city.description,
    path: `/${city.route}`,
    keywords: [
      `Shopify agencies in ${city.name}`,
      `Shopify developers ${city.name}`,
      `Shopify experts ${city.country}`,
      ...city.insights.serviceCounts
        .slice(0, 3)
        .map(([service]) => `${service} ${city.name}`),
    ],
  });
}
export default async function CityPage({ params }) {
  const { cityRoute } = await params;
  const city = getCity(cityRoute);
  if (!city) notFound();
  const agencies = getCityAgencies(city);
  return (
    <>
      <JsonLd
        data={directorySchema(
          agencies,
          `Shopify agencies in ${city.name}`,
          `/${city.route}`,
        )}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          ...breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: city.name, path: `/${city.route}` },
          ]),
        }}
      />
      <JsonLd data={faqSchema(city.content.faqs)} />
      <DirectoryPage city={city} agencies={agencies} />
    </>
  );
}
