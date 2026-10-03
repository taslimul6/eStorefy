/** Never format a missing price as zero. */
export function money(amount, currency = "USD") {
  if (amount == null) return "Request a quote";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
export function formatDate(value) {
  if (!value) return "Date not recorded";
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeZone: "UTC",
  }).format(new Date(`${value.slice(0, 10)}T12:00:00Z`));
}
export function initials(name) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
}
export function primaryRating(agency) {
  return agency.ratings.find((rating) => rating.value != null) || null;
}
export function priceLabel(agency) {
  const minimum = agency.pricing.projectMinimum;
  if (minimum) return `${money(minimum.amount, minimum.currency)}+ project minimum`;
  const selected = agency.pricing.selectedServices;
  if (selected)
    return `Selected services from ${money(selected.minimum, selected.currency)}`;
  return "Contact for pricing";
}
export function locationLabel(agency) {
  const { relationship, borough } = agency.location;
  if (relationship === "remote_serves_city")
    return `Remote option for ${agency.cityName}`;
  if (relationship.includes("conflict"))
    return `${agency.cityName} connection · location needs confirmation`;
  if (relationship === "nyc_office")
    return `${agency.cityName} office · primary location elsewhere`;
  return `${borough || agency.cityName} · listed location`;
}
