import LocationBrowser from "@/components/directory/LocationBrowser";
import { getCities } from "@/lib/agencies";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({
  title: "Shopify Agency Locations",
  description: `Find Shopify agencies and independent developers across ${getCities().length} city collections in ${new Set(getCities().map((c) => c.countryCode)).size} countries. Search locations and compare published provider information.`,
  keywords: [
    "Shopify agencies by location",
    "Shopify developers by city",
    "Shopify agency countries",
    "local Shopify experts",
  ],
  path: "/locations",
});
export default function Page() {
  return (
    <>
      <div className="apps-hero">
        <p className="apps-kicker">FIND YOUR NEXT PARTNER</p>
        <h1>
          Local knowledge.
          <br />
          <em>Wider possibilities.</em>
        </h1>
        <p>
          Explore {getCities().length} locations with researched agency and independent
          expert listings.
        </p>
      </div>
      <LocationBrowser
        cities={getCities().map((c) => ({
          id: c.id,
          route: c.route,
          name: c.name,
          fullName: c.fullName,
          region: c.region || c.stateCode,
          country: c.country,
          count: c.dataset.agencies.length,
        }))}
      />
    </>
  );
}
