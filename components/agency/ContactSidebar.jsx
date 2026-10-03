import { BriefButton } from "./AgencyActions";
import ExternalLink from "@/components/shared/ExternalLink";
import SaveButton from "@/components/shared/SaveButton";
import { primaryRating } from "@/lib/format";
export default function ContactSidebar({ agency }) {
  const rating = primaryRating(agency);
  return (
    <aside className="sidebar" aria-label="Agency contact">
      <div className="aside-inner">
        <div className="contact-card">
          <div className="contact-top">
            <span className="eyebrow">Your next step</span>
            <h3 style={{ marginTop: 12 }}>
              Make the first
              <br />
              conversation count.
            </h3>
            <p className="sub">
              Bring a clear brief. Get a proposal that answers the right questions.
            </p>
            <BriefButton />
            {agency.website && (
              <ExternalLink className="btn" href={agency.website}>
                Visit agency website
              </ExternalLink>
            )}
          </div>
          <div className="contact-facts">
            <div>
              <span>Project pricing</span>
              <strong>Request a quote</strong>
            </div>
            <div>
              <span>City collection</span>
              <strong>{agency.cityName}</strong>
            </div>
            <div>
              <span>Published rating</span>
              <strong>
                {rating
                  ? `${rating.value}/5 · ${rating.reviewCount} reviews`
                  : "Not captured"}
              </strong>
            </div>
            <div>
              <span>Partner tier</span>
              <strong>{agency.shopify.partnerTier || "Not confirmed"}</strong>
            </div>
          </div>
          <div className="contact-links">
            {agency.contact.email && (
              <a href={`mailto:${agency.contact.email}`}>{agency.contact.email}</a>
            )}
            {agency.contact.phone && (
              <a href={`tel:${agency.contact.phone.replace(/[^+0-9]/g, "")}`}>
                {agency.contact.phone}
              </a>
            )}
            {!agency.contact.email && !agency.contact.phone && (
              <span>Direct contact not confirmed. Check the source links.</span>
            )}
          </div>
          <div className="contact-end">
            Public contact details · check source before outreach
          </div>
        </div>
        <div className="side-save">
          <SaveButton agency={agency} />
          <a className="btn" href="#compare">
            Compare
          </a>
        </div>
        <div className="side-note">
          <strong>A little context goes a long way.</strong>Share your store URL,
          must-have features and target launch date. Ask who will lead the project and how
          success will be measured.
        </div>
        <div className="side-feature">
          <div className="eyebrow">Still exploring?</div>
          <h3 style={{ marginTop: 11 }}>The right fit is personal.</h3>
          <p>Check the services against your needs before reaching out.</p>
          <a className="text-link" href="#fit">
            Try the project-fit checklist
          </a>
        </div>
      </div>
    </aside>
  );
}
