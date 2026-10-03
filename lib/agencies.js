import { cities } from "../data/cities.js";
import { getServiceGroups } from "./services.js";
export { serviceGroups } from "./services.js";

const identity = (agency) =>
  agency.website
    ?.toLowerCase()
    .replace(/^https?:\/\/(www\.)?/, "")
    .replace(/\/$/, "") || agency.id;
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
      (previous.agency.location.relationship === "remote_serves_city" &&
        agency.location.relationship !== "remote_serves_city")
    )
      preferred.set(key, { city, agency });
    memberships.set(key, [
      ...(memberships.get(key) || []),
      { id: city.id, name: city.name, route: city.route },
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
      cityRoute: city.route,
      cityName: city.name,
      cityId: city.id,
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
