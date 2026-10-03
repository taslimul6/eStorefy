import { getServiceGroups } from "./services.js";

/** Derive city copy from real collection counts instead of inventing local market facts. */
export function createCityContent(city) {
  const { metadata, agencies } = city.dataset;
  const name = metadata.city;
  const remoteCount = agencies.filter(
    (a) => a.location.relationship === "remote_serves_city",
  ).length;
  const localCount = agencies.length - remoteCount;
  const serviceCounts = Object.entries(
    agencies.reduce((counts, agency) => {
      for (const group of getServiceGroups(agency))
        counts[group] = (counts[group] || 0) + 1;
      return counts;
    }, {}),
  ).sort((a, b) => b[1] - a[1]);
  const locationNote = `${name} has ${localCount} local or metro-associated listings and ${remoteCount} remote options in this collection. Directory association does not independently verify a physical office. Confirm location and availability with each agency.`;
  return {
    ...city,
    name,
    fullName: name,
    country: "United States",
    countryCode: "US",
    stateCode: metadata.stateCode,
    description: `Compare ${agencies.length} Shopify agencies for ${name}, ${metadata.stateCode}: ${localCount} local or metro listings and ${remoteCount} remote options. Explore services, reviews and portfolios.`,
    locationNote,
    insights: {
      count: agencies.length,
      localCount,
      remoteCount,
      serviceCounts,
      ratedCount: agencies.filter((a) => a.ratings?.some((r) => r.value != null)).length,
    },
    content: {
      faqs: [
        {
          question: `How many Shopify agencies are listed for ${name}?`,
          answer: `This collection includes ${agencies.length} profiles: ${localCount} local or metro-associated agencies and ${remoteCount} remote options. It describes the researched collection, not every agency in ${name}.`,
        },
        {
          question: `Which Shopify services can I compare in ${name}?`,
          answer:
            serviceCounts
              .map(([service, count]) => `${service}: ${count} listings`)
              .join("; ") +
            ". Service categories may include editorial interpretation. Confirm the exact offering in a proposal.",
        },
        { question: `Are all these agencies based in ${name}?`, answer: locationNote },
        {
          question: `How should I compare Shopify agency prices in ${name}?`,
          answer:
            "Compare equivalent scopes and separate full-project minimums from selected-service fees or hourly rates. Unknown prices remain undisclosed; request an itemized quote and confirm ongoing app, theme and maintenance costs.",
        },
        {
          question: `How current is the ${name} agency collection?`,
          answer: `The supplied research snapshot is dated ${metadata.researchedAt}. Each profile links its sources; individual imported ratings may have earlier observation dates. Reconfirm pricing, credentials and availability before hiring.`,
        },
        {
          question: `How do I shortlist an agency for my ${name} business?`,
          answer: `Start with ${serviceCounts
            .slice(0, 3)
            .map(([service]) => service.toLowerCase())
            .join(
              ", ",
            )}, depending on your project. Compare relevant portfolio evidence, save candidates, and prepare a brief. Location alone does not establish project fit.`,
        },
      ],
      guides: [
        [
          `01 / Local or remote in ${name}?`,
          locationNote +
            " Ask about time-zone overlap, meeting arrangements and who will manage delivery.",
        ],
        [
          `02 / Compare ${name} project proposals`,
          `${agencies.length} profiles provide a starting point. Match the same deliverables, integrations, migration requirements and support period before comparing prices.`,
        ],
        [
          "03 / Review relevant experience",
          `The most represented service areas here are ${serviceCounts
            .slice(0, 3)
            .map(([service, count]) => `${service.toLowerCase()} (${count})`)
            .join(
              ", ",
            )}. Ask for source-linked examples and the team’s actual contribution.`,
        ],
      ],
      checklist: [
        `Decide whether you need in-person meetings in ${name}`,
        "Define your project goal and essential features",
        "List your products, content and integration requirements",
        "Agree on budget, launch milestones and working hours",
        "Confirm ownership, handover and post-launch support",
      ],
      collections: serviceCounts.slice(0, 3).map(([service, count]) => ({
        service,
        title: `${service} for ${name}`,
        text: `${count} profiles in this collection include ${service.toLowerCase()}. Compare capabilities and confirm project fit directly.`,
      })),
    },
  };
}
