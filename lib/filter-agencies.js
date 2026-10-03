import { primaryRating } from "./format.js";
export const emptyFilters = {
  query: "",
  country: "",
  city: "",
  type: "",
  service: "",
  budget: "",
  savedOnly: false,
  sort: "az",
};

/** Pure filtering keeps the grid, table and matchmaker consistent. */
export function filterAgencies(agencies, filters, savedIds = []) {
  const query = filters.query.trim().toLowerCase().replace(/\s+/g, " ");
  const list = agencies.filter((agency) => {
    const searchable = [
      agency.name,
      agency.cityName,
      ...(agency.cityMemberships || []).map((city) => city.name),
      agency.location.borough,
      agency.description,
      ...agency.services,
      ...agency.industries,
    ]
      .join(" ")
      .toLowerCase();
    return (
      (!query || searchable.includes(query)) &&
      (!filters.country || agency.location.country === filters.country) &&
      (!filters.city ||
        agency.cityMemberships?.some((city) => city.id === filters.city) ||
        agency.cityId === filters.city) &&
      (!filters.type || agency.entityType === filters.type) &&
      (!filters.service || agency.serviceGroups.includes(filters.service)) &&
      // A project-budget filter must never substitute a selected-service price.
      (!filters.budget ||
        (agency.pricing.projectMinimum?.amount != null &&
          agency.pricing.projectMinimum.currency === "USD" &&
          agency.pricing.projectMinimum.amount <= Number(filters.budget))) &&
      (!filters.savedOnly || savedIds.includes(agency.recordKey))
    );
  });
  return list.sort((a, b) => {
    if (filters.sort === "budget")
      return (
        (a.pricing.projectMinimum?.amount ?? Infinity) -
          (b.pricing.projectMinimum?.amount ?? Infinity) || a.name.localeCompare(b.name)
      );
    if (filters.sort === "rating")
      return (
        (primaryRating(b)?.value ?? -1) - (primaryRating(a)?.value ?? -1) ||
        a.name.localeCompare(b.name)
      );
    return a.name.localeCompare(b.name);
  });
}
