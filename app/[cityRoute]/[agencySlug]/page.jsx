import { notFound } from "next/navigation";
import AgencyPage from "@/components/agency/AgencyPage";
import JsonLd from "@/components/shared/JsonLd";
import {
  getCities,
  getCity,
  getCityAgencies,
  getAgency,
  getRelatedAgencies,
} from "@/lib/agencies";
import { pageMetadata, agencySchema, faqSchema } from "@/lib/seo";
export const dynamicParams = false;
export function generateStaticParams() {
  return getCities().flatMap((city) =>
    getCityAgencies(city).map((agency) => ({
      cityRoute: city.route,
      agencySlug: agency.id,
    })),
  );
}
export async function generateMetadata({ params }) {
  const { cityRoute, agencySlug } = await params;
  const agency = getAgency(cityRoute, agencySlug);
  if (!agency) return {};
  return pageMetadata({
    title: `${agency.name} — Shopify Agency for ${agency.cityName}`,
    description: `${agency.name} for ${agency.cityName}: ${agency.description}`.slice(
      0,
      165,
    ),
    path: agency.canonicalPath,
    image: `/images/social/${agency.id}.png`,
  });
}
export default async function AgencyDetailPage({ params }) {
  const { cityRoute, agencySlug } = await params;
  const agency = getAgency(cityRoute, agencySlug);
  if (!agency) notFound();
  const city = getCity(cityRoute);
  return (
    <>
      <JsonLd data={agencySchema(agency, city)} />
      {agency.faqs?.length > 0 && <JsonLd data={faqSchema(agency.faqs)} />}
      <AgencyPage agency={agency} city={city} related={getRelatedAgencies(agency)} />
    </>
  );
}
