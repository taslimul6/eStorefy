import Link from "next/link";
import AgencyImage from "@/components/shared/AgencyImage";
import SaveButton from "@/components/shared/SaveButton";
import { initials, priceLabel, primaryRating, locationLabel } from "@/lib/format";
import CompareButton from "./CompareButton";
export default function AgencyCard({ agency, index = 0, compact = false }) {
  const rating = primaryRating(agency);
  return (
    <article className={compact ? "mini" : "card"}>
      <div className={`expert-cover theme${index % 6}`}>
        <AgencyImage agency={agency} cover className="card-artwork" />
        <div className="expert-monogram">
          <AgencyImage agency={agency} />
        </div>
        <span className="agency-type">
          Agency
          <br />
          <small>SHOPIFY SPECIALIST</small>
        </span>
        <SaveButton agency={agency} compact className="save" />
      </div>
      <div className="card-body">
        <div className="card-title">
          <h3>
            <Link className="card-main-link" href={agency.profilePath}>
              {agency.name}
            </Link>
          </h3>
          {agency.shopify.partnerTier && (
            <span className="tiny">{agency.shopify.partnerTier}</span>
          )}
        </div>
        <div className="location">◎ {locationLabel(agency)}</div>
        <p className="description">{agency.description}</p>
        <div className="expert-tags">
          {agency.serviceGroups.map((service) => (
            <span key={service}>{service}</span>
          ))}
        </div>
        <div className="fee-row">
          <span>{priceLabel(agency)}</span>
          <span>{agency.teamSize?.range || "Team size not listed"}</span>
        </div>
        <div className="card-footer">
          <span>
            {rating
              ? `${rating.value}/5 · ${rating.reviewCount} ${rating.platform === "Clutch" ? "Clutch" : "Shopify"} reviews`
              : "Rating not available"}
          </span>
          <Link className="profile-link" href={agency.profilePath}>
            View profile ↗
          </Link>
        </div>
        <CompareButton agency={agency} />
      </div>
    </article>
  );
}
