import AgencySection from "./AgencySection";
import { locationLabel, priceLabel } from "@/lib/format";
export default function AgencyOverview({ agency }) {
  const facts = [
    ["BUSINESS TYPE", "Ecommerce & digital agency"],
    ["LOCATION RELATIONSHIP", locationLabel(agency)],
    ["SHOPIFY PARTNER SINCE", agency.shopify.partnerSince || "Not confirmed"],
    ["PARTNER TIER", agency.shopify.partnerTier || "Not confirmed"],
    ["PUBLISHED LANGUAGES", agency.languages.join(", ") || "Not captured"],
    ["PRICING", priceLabel(agency)],
  ];
  return (
    <AgencySection
      id="overview"
      number="01"
      eyebrow="Get to know the agency"
      title={
        <>
          Commerce expertise,
          <br />
          with context.
        </>
      }
    >
      {(agency.longDescription || agency.description)
        .split(/\n\n|\\n\\n/)
        .filter(
          (paragraph) =>
            paragraph && !paragraph.startsWith("This description is an AI-generated"),
        )
        .map((paragraph, index) => (
          <p className={index === 0 ? "large-copy" : "muted"} key={index}>
            {paragraph}
          </p>
        ))}
      {agency.editorialNote && <p className="sub">{agency.editorialNote}</p>}
      <dl className="fact-grid">
        {facts.map(([label, value]) => (
          <div className="fact" key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
      {agency.industries.length > 0 && (
        <>
          <h3>Published industry focus</h3>
          <div className="tags">
            {agency.industries.map((industry) => (
              <span className="tag" key={industry}>
                {industry}
              </span>
            ))}
          </div>
        </>
      )}
      <div className="note" style={{ marginTop: 22 }}>
        Partner information is attributed to its source. It is not an eStorefy
        certification or a guarantee of results.
      </div>
    </AgencySection>
  );
}
