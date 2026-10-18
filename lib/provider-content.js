import { priceLabel } from "./format.js";

/** Clearly labeled editorial copy; every business fact comes from the loaded record. */
export function providerContent(agency, city) {
  const place = [city.name, city.country].filter(Boolean).join(", ");
  const hasDescription = Boolean(agency.description);
  const description =
    agency.description ||
    `${agency.name} is included in the ${place} Shopify provider collection. Review its published location evidence and cited sources before planning a project.`;
  const sourceUrls = agency.sources.map((source) => source.url);
  const faqs = agency.faqs?.length
    ? agency.faqs
    : [
        {
          question: `What services are captured for ${agency.name}?`,
          answer: agency.services.length
            ? `The supplied research lists ${agency.services.join(", ")}. Confirm the exact scope, delivery team and availability before booking work.`
            : `Detailed services were not captured for ${agency.name}. Check its cited listing and ask for a written scope covering your Shopify project. Inclusion does not confirm a specific capability.`,
        },
        {
          question: `How is ${agency.name} connected to ${city.name}?`,
          answer: `The supplied public research associates this provider with ${place}. ${agency.location.primaryLocationAsListed ? `Its published location is recorded as ${agency.location.primaryLocationAsListed}. ` : ""}A city association does not independently verify a staffed office; confirm meeting and delivery arrangements.`,
        },
        {
          question: `What pricing information is available for ${agency.name}?`,
          answer: `${priceLabel(agency)}. Ask for an itemized proposal covering the agreed scope, integrations, handover and ongoing costs. Selected-service prices, when present, are not full-project quotes.`,
        },
        {
          question: `How should I evaluate ${agency.name} for my store?`,
          answer: `Start with the cited research for ${agency.name}, then compare relevant project examples, communication arrangements and the proposed team. Request references and confirm who owns the store, code and accounts after handover. These are editorial hiring questions, not promised provider deliverables.`,
        },
      ].map((faq) => ({
        ...faq,
        sourceType: "editorial_from_supplied_facts",
        sourceUrls,
      }));
  return {
    description,
    longDescription:
      agency.longDescription ||
      `${description}\n\nFor a Shopify project involving ${agency.name}, use the source links to confirm the current offering, then compare a written proposal against your store requirements. Clarify migration needs, app integrations, theme ownership and support before agreeing on work. This is editorial project-planning guidance, not a provider statement or evidence of hands-on testing.`,
    faqs,
    editorialNote:
      agency.editorialNote ||
      (!hasDescription || !agency.longDescription
        ? "Editorial overview and planning guidance based on the supplied listing; unconfirmed capabilities, prices and results are not asserted."
        : ""),
  };
}
