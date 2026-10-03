import AgencySection from "./AgencySection";
import { primaryRating, priceLabel } from "@/lib/format";
export default function AgencyFaq({ agency }) {
  const rating = primaryRating(agency);
  const questions = agency.faqs?.map(({ question, answer }) => [question, answer]) || [
    [
      `Is ${agency.name} a Shopify Partner?`,
      agency.shopify.partnerTier
        ? `Shopify's directory lists a ${agency.shopify.partnerTier} tier${agency.shopify.partnerSince ? ` and a partner-since date of ${agency.shopify.partnerSince}` : ""}. Check the linked source for the latest status.`
        : "A formal Shopify partner tier was not confirmed in this research. Check the agency's latest credentials before relying on a partner claim.",
    ],
    [
      "What Shopify services are listed?",
      `${agency.name} lists ${agency.services.join(", ").toLowerCase()}. Confirm the exact scope and delivery team in your proposal.`,
    ],
    [
      "How much does a project cost?",
      `${priceLabel(agency)}. Selected-service amounts must not be treated as full-project costs. Request an itemized quote for your actual requirements.`,
    ],
    [
      "Where is the agency located?",
      `The primary location is recorded as ${agency.location.primaryLocationAsListed || "not confirmed"}. ${agency.location.streetAddress ? `The listed local address is ${agency.location.streetAddress}.` : "A local street address has not been confirmed."} ${agency.location.notes || "Confirm meeting availability before visiting."}`,
    ],
    [
      "Where does the review score come from?",
      rating
        ? `The displayed ${rating.value}/5 score from ${rating.reviewCount} reviews is attributed to ${rating.platform}. It is a source snapshot, not a review collected by eStorefy.`
        : "No published review score was confirmed for display. This does not mean the agency has no reviews elsewhere.",
    ],
    [
      "How quickly can the project start?",
      "Current capacity and start dates have not been confirmed. Share your launch target, dependencies and content readiness so the agency can propose milestones.",
    ],
    [
      "Does eStorefy represent this agency?",
      "No. This is an independent directory profile assembled from public sources. Listings and partner information do not guarantee fit or results.",
    ],
  ];
  return (
    <AgencySection
      id="faq"
      number="09"
      eyebrow="Before you reach out"
      title="Your questions, answered."
      className="faq"
    >
      {questions.map(([question, answer]) => (
        <details key={question}>
          <summary>{question}</summary>
          <p>{answer}</p>
        </details>
      ))}
    </AgencySection>
  );
}
