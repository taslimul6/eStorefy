import fs from "node:fs";
import { cities } from "../data/cities.js";
import { getCities, getAllCityAgencies, getAllAgencies } from "../lib/agencies.js";
import { getAppDirectory, getAppsSitemap } from "../lib/apps.js";
const live = getCities();
const unique = getAllAgencies();
const currentFiles = fs.readdirSync("data/providers/cities");
const sourceRows = currentFiles.reduce(
  (count, file) =>
    count +
    JSON.parse(fs.readFileSync(`data/providers/cities/${file}`, "utf8")).agencies.length,
  0,
);
const indexed = unique.filter((a) => a.indexable);
const apps = getAppDirectory();
const report = {
  date: "2026-10-18",
  sourceSnapshot: "06-enriched-current, supplied estorefy-all-final-json-data(1).zip",
  sourceCityFiles: currentFiles.length,
  sourceProviderCityRows: sourceRows,
  activeCities: live.length,
  emptyCitiesExcluded: cities.length - live.length,
  countries: new Set(live.map((c) => c.countryCode)).size,
  mergedProviderCityProfiles: getAllCityAgencies().length,
  uniqueProviders: unique.length,
  indexableCanonicalProviderProfiles: indexed.length,
  incompleteCanonicalProfilesNoindex: 0,
  sparseResearchProfilesWithEditorialContext: unique.filter((a) => !a.researchComplete)
    .length,
  appsCategories: apps.categories.length,
  uniqueApps: apps.uniqueAppCount,
  appCategoryProfiles: apps.listingCount,
  sitemapUrls: 8 + live.length + indexed.length + getAppsSitemap().length,
  policy: [
    "Only the current 500 per-city JSON files are imported; historical snapshots and unmapped records are excluded.",
    "Existing detailed records are supplemented with supplied facts, retaining original populated fields and original rating/pricing observation dates.",
    "Exact website/unique Shopify partner profiles resolve canonical identity; city-directory URLs are never treated as business identities.",
    "Duplicates within the same city are collapsed; original source rows remain unchanged in data/providers/cities.",
    "All existing public profiles use index, follow; every canonical provider profile is included in the sitemap. Sparse records receive labeled editorial context without inventing business facts.",
    "Source image URLs are remote. Branded monograms are labeled directory artwork and are not claimed to be official logos.",
    "This integration does not independently re-scrape or verify the supplied research. Indexed evidence and generated editorial labels are retained.",
  ],
};
fs.writeFileSync(
  "data/providers/integration-report.json",
  JSON.stringify(report, null, 2) + "\n",
);
console.log(JSON.stringify(report, null, 2));
