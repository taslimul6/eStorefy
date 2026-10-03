/** Use one origin for metadata, sitemap entries and shared profile links. */
export const site = {
  name: "eStorefy",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://estorefy.net").replace(/\/$/, ""),
  description:
    "Find Shopify agencies by city, service and published expertise. Explore portfolios, compare sourced information and build a useful shortlist.",
};
export const canIndex = process.env.VERCEL_ENV !== "preview";
export function absoluteUrl(path = "/") {
  return new URL(path, `${site.url}/`).toString();
}
