export const serviceGroups = [
  "Store design",
  "Development",
  "Migration",
  "Marketing",
  "Optimization",
];
const servicePatterns = {
  "Store design": /design|branding|brand identity/i,
  Development: /development|integration|custom app|headless|theme|b2b/i,
  Migration: /migration/i,
  Marketing: /marketing|paid|seo|retention|advertis/i,
  Optimization: /optimization|conversion|speed|audit|analytics/i,
};
export function getServiceGroups(agency) {
  return serviceGroups.filter((group) =>
    agency.services.some((service) => servicePatterns[group].test(service)),
  );
}
