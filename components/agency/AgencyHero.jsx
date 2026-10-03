import AgencyImage from "@/components/shared/AgencyImage";
import SaveButton from "@/components/shared/SaveButton";
import ShareButton from "./ShareButton";
import { absoluteUrl } from "@/lib/site";
import { initials, primaryRating, formatDate, locationLabel } from "@/lib/format";
export default function AgencyHero({ agency }) {
  const rating = primaryRating(agency);
  const since = agency.experience?.operatingSinceYear || agency.foundedYear;
  return (
    <section className="hero" aria-labelledby="agencyName">
      <div className="hero-top">
        <div className="eyebrow">{agency.cityName} · Shopify agency</div>
        <div className="actions">
          <SaveButton agency={agency} className="btn ghost small" />
          <ShareButton url={absoluteUrl(agency.profilePath)} />
        </div>
      </div>
      <div className="profile-heading">
        <div className="agency-logo">
          <AgencyImage agency={agency} />
        </div>
        <div>
          <h1 id="agencyName">{agency.name}</h1>
          <div className="badges">
            {agency.shopify.partnerTier && (
              <a className="badge" href="#sources">
                Shopify {agency.shopify.partnerTier} Partner
              </a>
            )}
            <span className="badge">{locationLabel(agency)}</span>
          </div>
        </div>
      </div>
      <p className="hero-copy">
        {agency.heroHeadline || `Shopify expertise. Meet ${agency.name}.`}
      </p>
      <p className="hero-intro">{agency.description}</p>
      <div className="hero-bottom">
        <div className="hero-facts">
          <div>
            <strong>{rating ? `${rating.value} ★` : "Not rated"}</strong>
            <small>
              {rating
                ? `${rating.reviewCount} reviews on ${rating.platform === "Clutch" ? "Clutch" : "Shopify"}`
                : "No published score captured"}
            </small>
          </div>
          <div>
            <strong>{agency.shopify.partnerTier || "Not confirmed"}</strong>
            <small>Shopify partner tier</small>
          </div>
          <div>
            <strong>{since ? `Since ${since}` : agency.services.length}</strong>
            <small>
              {since ? "Agency operating history" : "Listed service capabilities"}
            </small>
          </div>
        </div>
        <a className="meta" href="#sources">
          Sources checked · {formatDate(agency.dataQuality.observedAt)}
        </a>
      </div>
    </section>
  );
}
