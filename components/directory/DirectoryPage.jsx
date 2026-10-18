import {
  getAllAgencies,
  getAllCityAgencies,
  getCities,
  toDirectoryCard,
  serviceGroups,
} from "@/lib/agencies";
import { DirectoryProvider } from "./DirectoryContext";
import ListingRequest from "./ListingRequest";
import DirectoryHero from "./DirectoryHero";
import DirectoryProof from "./DirectoryProof";
import ServiceTiles from "./ServiceTiles";
import AgencyDirectory from "./AgencyDirectory";
import CityExplorer from "./CityExplorer";
import ProjectCollections from "./ProjectCollections";
import AgencySpotlight from "./AgencySpotlight";
import MoreAgencies from "./MoreAgencies";
import Matchmaker from "./Matchmaker";
import HiringChecklist from "./HiringChecklist";
import SavedBoard from "./SavedBoard";
import DirectoryGuides from "./DirectoryGuides";
import DirectoryFaq from "./DirectoryFaq";
import DirectoryTools from "./DirectoryTools";

/** Server composition preserves crawlable content; only interactive islands hydrate. */
export default function DirectoryPage({ agencies, city }) {
  const cards = agencies.map(toDirectoryCard);
  const cities = getCities().map((item) => ({
    id: item.id,
    route: item.route,
    name: item.name,
    fullName: item.fullName,
    country: item.country,
    countryCode: item.countryCode,
    count: item.dataset.agencies.length,
    insights: item.insights,
    locationNote: item.locationNote,
    ...(city?.id === item.id
      ? { content: item.content, description: item.description }
      : {}),
  }));
  const citySummary = city ? cities.find((item) => item.id === city.id) : null;
  const spotlight = cards.find((agency) => agency.id === "blueswitch") || cards[0];
  return (
    <div className="directory-page">
      <div className="announcement">
        <b>Find the people behind better commerce.</b> Shopify agencies, developers &
        independent experts.
      </div>
      <DirectoryProvider>
        <div className="page-group">
          <ListingRequest />
          <div>
            <DirectoryHero city={citySummary} spotlight={spotlight} />
            <DirectoryProof
              agencyCount={cards.length}
              cityCount={city ? 1 : cities.length}
              serviceCount={serviceGroups.length}
            />
            <ServiceTiles agencies={cards} />
            <AgencyDirectory
              agencies={cards}
              cities={city ? [citySummary] : cities}
              cityName={city?.name}
            />
            <CityExplorer cities={cities} currentCity={citySummary} />
            <ProjectCollections collections={citySummary?.content.collections} />
            <AgencySpotlight agency={spotlight} />
            <MoreAgencies
              agencies={cards.filter((agency) => agency.id !== spotlight.id)}
            />
            <section className="rich split" id="matchmaker">
              <Matchmaker agencies={cards} cities={city ? [citySummary] : cities} />
              <HiringChecklist
                steps={citySummary?.content.checklist}
                storageKey={city?.id}
              />
            </section>
            <DirectoryTools agencies={cards} />
            <DirectoryGuides guides={citySummary?.content.guides} />
            <DirectoryFaq city={citySummary} count={cards.length} />
          </div>
        </div>
      </DirectoryProvider>
    </div>
  );
}
