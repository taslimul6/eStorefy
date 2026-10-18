import { cities } from "../data/cities.js";
import { providerContent } from "./provider-content.js";
import { getServiceGroups } from "./services.js";
export { serviceGroups } from "./services.js";

import { providerKeys, slug } from "./provider-data.js";

// Link records through captured websites or partner profiles. A country-scoped
// name is the fallback when the research captured no unique business URL.
const parents = new Map();
const root = (key) => {
  if (!parents.has(key)) parents.set(key, key);
  if (parents.get(key) !== key) parents.set(key, root(parents.get(key)));
  return parents.get(key);
};
for (const city of cities)
  for (const agency of city.dataset.agencies) {
    const keys = providerKeys(agency);
    // Only use name aliases where the research has no conflicting business website.
    if (!keys.length)
      keys.push(
        `name:${agency.location.countryCode}:${agency.name.normalize("NFKC").trim().replace(/\s+/g, " ").toLowerCase()}`,
      );
    for (const key of keys) parents.set(root(key), root(keys[0]));
  }
const nameGroups = new Map();
for (const city of cities)
  for (const agency of city.dataset.agencies) {
    const key = `name:${agency.location.countryCode}:${agency.name.normalize("NFKC").trim().replace(/\s+/g, " ").toLowerCase()}`;
    const values = nameGroups.get(key) || new Set();
    for (const token of providerKeys(agency)) values.add(root(token));
    nameGroups.set(key, values);
  }
for (const [name, keys] of nameGroups)
  if (keys.size === 1) parents.set(root(name), root([...keys][0]));
const identity = (agency) =>
  root(
    providerKeys(agency)[0] ||
      `name:${agency.location.countryCode}:${agency.name.normalize("NFKC").trim().replace(/\s+/g, " ").toLowerCase()}`,
  );
const routeFor = (city, agency) => `/${city.route}/${agency.id}`;
// Prefer a locally associated profile as the canonical destination for repeated agencies.
const preferred = new Map();
const memberships = new Map();
for (const city of cities)
  for (const agency of city.dataset.agencies) {
    const key = identity(agency);
    const previous = preferred.get(key);
    if (
      !previous ||
      (!previous.agency.researchComplete && agency.researchComplete) ||
      (previous.agency.location.relationship === "remote_serves_city" &&
        agency.location.relationship !== "remote_serves_city")
    )
      preferred.set(key, { city, agency });
    memberships.set(key, [
      ...(memberships.get(key) || []),
      { id: city.id, name: city.name, route: city.route, country: city.country },
    ]);
  }
export function getCities() {
  return cities.filter((city) => city.dataset.agencies.length);
}
export function getCity(route) {
  return getCities().find((city) => city.route === route);
}
export function getCityAgencies(city) {
  return city.dataset.agencies.map((agency) => {
    const selected = preferred.get(identity(agency));
    return {
      ...agency,
      ...providerContent(agency, city),
      cityRoute: city.route,
      cityName: city.name,
      cityId: city.id,
      cityCountry: city.country,
      cityCountryCode: city.countryCode,
      profilePath: routeFor(city, agency),
      canonicalPath: routeFor(selected.city, selected.agency),
      recordKey: `${city.id}:${agency.id}`,
      cityMemberships: memberships.get(identity(agency)),
      serviceGroups: getServiceGroups(agency),
    };
  });
}
export function getAllCityAgencies() {
  return getCities().flatMap(getCityAgencies);
}
export function getAllAgencies() {
  return getAllCityAgencies()
    .filter((a) => a.profilePath === a.canonicalPath)
    .sort((a, b) => a.name.localeCompare(b.name));
}
export function getAgency(cityRoute, slug) {
  const city = getCity(cityRoute);
  return city ? getCityAgencies(city).find((a) => a.id === slug) : null;
}
export function getRelatedAgencies(agency, limit = 3) {
  return getCityAgencies(getCity(agency.cityRoute))
    .filter((item) => item.id !== agency.id)
    .map((item) => ({
      item,
      overlap: item.serviceGroups.filter((group) => agency.serviceGroups.includes(group))
        .length,
    }))
    .sort((a, b) => b.overlap - a.overlap || a.item.name.localeCompare(b.item.name))
    .slice(0, limit)
    .map(({ item }) => item);
}
/** Keep long editorial copy and provenance out of directory client payloads. */
export function toDirectoryCard(agency) {
  const fields = [
    "id",
    "name",
    "description",
    "entityType",
    "location",
    "shopify",
    "ratings",
    "pricing",
    "services",
    "industries",
    "teamSize",
    "cityRoute",
    "cityName",
    "cityId",
    "cityCountry",
    "cityCountryCode",
    "profilePath",
    "canonicalPath",
    "recordKey",
    "serviceGroups",
    "logoUrl",
    "logoType",
    "cityMemberships",
  ];
  return {
    ...Object.fromEntries(fields.map((key) => [key, agency[key] ?? null])),
    dataQuality: { observedAt: agency.dataQuality.observedAt },
  };
}
