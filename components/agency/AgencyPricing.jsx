import AgencySection from "./AgencySection";
import { BriefButton } from "./AgencyActions";
import { money } from "@/lib/format";
import ExternalLink from "@/components/shared/ExternalLink";
export default function AgencyPricing({ agency }) {
  const {
    projectMinimum,
    selectedServices,
    hourlyRate,
    servicePrices = [],
  } = agency.pricing;
  return (
    <AgencySection
      id="pricing"
      number="05"
      eyebrow="Budget & scope"
      title={
        <>
          Get clarity before
          <br />
          you commit.
        </>
      }
    >
      <div className="budget-box">
        <span className="eyebrow" style={{ color: "var(--lime)" }}>
          Published project pricing
        </span>
        <h3 style={{ marginTop: 15 }}>A quote built around your scope.</h3>
        <p>
          {projectMinimum
            ? `The directory lists an agency-wide project minimum of ${money(projectMinimum.amount, projectMinimum.currency)}. This is not a Shopify-specific quote.`
            : "A confirmed full-project minimum was not captured. Request an itemized quote based on your catalog, templates, integrations and support needs."}
        </p>
        <div className="budget-row">
          <strong>
            {projectMinimum
              ? `${money(projectMinimum.amount, projectMinimum.currency)}+ project minimum`
              : "Contact for pricing"}
          </strong>
          <BriefButton className="btn lime">Prepare a better brief</BriefButton>
        </div>
      </div>
      {(selectedServices || hourlyRate || servicePrices.length > 0) && (
        <div className="box" style={{ marginTop: 20 }}>
          <h3>Other published pricing</h3>
          {selectedServices && (
            <p className="sub">
              Selected services:{" "}
              {money(selectedServices.minimum, selectedServices.currency)}
              {selectedServices.maximum
                ? `–${money(selectedServices.maximum, selectedServices.currency)}`
                : "+"}
              . <strong>This is not the price of a complete website.</strong>
            </p>
          )}
          {hourlyRate && (
            <p className="sub">
              Hourly rate: {money(hourlyRate.minimum, hourlyRate.currency)}–
              {money(hourlyRate.maximum, hourlyRate.currency)} / hour.
            </p>
          )}
          {servicePrices.length > 0 && (
            <ul className="check-list">
              {servicePrices.map((price) => (
                <li key={price.service}>
                  {price.service}: from {money(price.startingAt, price.currency)}
                </li>
              ))}
            </ul>
          )}
          {(projectMinimum?.sourceUrl ||
            selectedServices?.sourceUrl ||
            hourlyRate?.sourceUrl) && (
            <ExternalLink
              className="text-link"
              href={
                projectMinimum?.sourceUrl ||
                selectedServices?.sourceUrl ||
                hourlyRate?.sourceUrl
              }
            >
              View pricing source
            </ExternalLink>
          )}
        </div>
      )}
      <div className="two" style={{ marginTop: 25 }}>
        <div>
          <h3>What changes the scope?</h3>
          <ul className="check-list">
            <li>Templates and custom features</li>
            <li>Catalog size and data migration</li>
            <li>ERP, CRM and fulfillment integrations</li>
            <li>B2B and international requirements</li>
          </ul>
        </div>
        <div>
          <h3>Ask for a written breakdown</h3>
          <ul className="check-list">
            <li>Deliverables and excluded work</li>
            <li>Milestones and approval rounds</li>
            <li>Apps, platform and ongoing costs</li>
            <li>Support, ownership and handover</li>
          </ul>
        </div>
      </div>
    </AgencySection>
  );
}
