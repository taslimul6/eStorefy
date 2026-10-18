import PartnerLink from "@/components/shared/PartnerLink";
import AgencySection from "./AgencySection";
import ExternalLink from "@/components/shared/ExternalLink";
import { locationLabel } from "@/lib/format";
export default function AgencyLocation({ agency }) {
  const { location, contact } = agency;
  const remote = location.relationship === "remote_serves_city";
  const address = [
    location.streetAddress,
    location.borough || agency.cityName,
    location.stateCode || location.region,
    location.postalCode,
    location.country,
  ]
    .filter(Boolean)
    .join(", ");
  return (
    <AgencySection
      id="location"
      number="07"
      eyebrow="Location & contact"
      title={`Explore the ${agency.cityName} connection.`}
    >
      <div className="place">
        <div className="place-identity">
          <small>{agency.cityName}</small>
          <strong>
            {remote ? "Available remotely" : location.borough || agency.cityName}.<br />
            {location.streetAddress ||
              (location.relationship === "remote_serves_city"
                ? "Remote option."
                : "Listed presence.")}
          </strong>
          <span className="sub">{locationLabel(agency)}</span>
        </div>
        <div className="place-info">
          <address>
            {agency.name}
            <br />
            {location.streetAddress || "Local street address not confirmed"}
            <br />
            {remote
              ? `Serving ${agency.cityName} remotely`
              : [
                  location.borough || agency.cityName,
                  location.stateCode || location.region,
                  location.postalCode,
                ]
                  .filter(Boolean)
                  .join(", ")}
            <br />
            {location.country}
          </address>
          {location.streetAddress ? (
            <ExternalLink
              className="text-link"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
            >
              Open address in Maps
            </ExternalLink>
          ) : (
            location.evidenceUrl && (
              <ExternalLink className="text-link" href={location.evidenceUrl}>
                Check location source
              </ExternalLink>
            )
          )}
        </div>
      </div>
      <p className="sub" style={{ marginTop: 15 }}>
        {location.notes ||
          "Published location information is not an independent physical-office verification. Confirm meeting availability before visiting."}
      </p>
      {location.primaryLocationAsListed && (
        <p className="sub">
          <strong>Primary location as listed:</strong> {location.primaryLocationAsListed}
        </p>
      )}
      <div className="two">
        <div className="box">
          <h3>Published inquiries</h3>
          {contact.email ? (
            <span className="sub">{contact.email}</span>
          ) : (
            <span className="sub">Email not confirmed</span>
          )}
          <br />
          {contact.phone && <span className="sub">{contact.phone}</span>}
        </div>
        <div className="box">
          <h3>More contact options</h3>
          {contact.otherEmails.map((email) => (
            <p key={email}>
              <span className="sub">{email}</span>
            </p>
          ))}
          <PartnerLink className="text-link">Contact this agency ↗</PartnerLink>
        </div>
      </div>
    </AgencySection>
  );
}
