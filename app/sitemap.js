import { getAppsSitemap } from "@/lib/apps";
import { getCities, getCityAgencies } from "@/lib/agencies";
import { absoluteUrl } from "@/lib/site";
export default function sitemap() {
  const cities = getCities();
  const dates = cities.map((city) => city.dataset.metadata.researchedAt).sort();
  return [
    ...[
      "/agencies",
      "/locations",
      "/about",
      "/contact",
      "/privacy-policy",
      "/terms",
      "/editorial-policy",
    ].map((path) => ({
      url: absoluteUrl(path),
      changeFrequency: "monthly",
      priority: 0.5,
    })),
    ...getAppsSitemap().map(({ path, date }) => ({
      url: absoluteUrl(path),
      ...(date && !isNaN(Date.parse(date)) ? { lastModified: date } : {}),
      changeFrequency: "weekly",
      priority: 0.6,
    })),
    {
      url: absoluteUrl("/"),
      lastModified: dates.at(-1),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...cities.flatMap((city) => [
      {
        url: absoluteUrl(`/${city.route}`),
        lastModified: city.dataset.metadata.researchedAt,
        changeFrequency: "weekly",
        priority: 0.8,
      },
      ...getCityAgencies(city)
        .filter((agency) => agency.profilePath === agency.canonicalPath)
        .map((agency) => ({
          url: absoluteUrl(agency.profilePath),
          lastModified: agency.dataQuality.observedAt,
          changeFrequency: "monthly",
          priority: 0.6,
        })),
    ]),
  ];
}
