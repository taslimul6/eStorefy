import PartnerLink from "@/components/shared/PartnerLink";
import Link from "next/link";
import AppImage from "./AppImage";
export default function AppCard({ app: a }) {
  return (
    <article className="apps-card">
      <div className="app-card-top">
        <AppImage src={a.logo} name={a.name} />
        <span className="app-card-label">SHOPIFY APP</span>
      </div>
      <h3>
        <Link href={a.path}>{a.name}</Link>
      </h3>
      {a.rating !== null && (
        <p className="app-rating">
          ★ {a.rating}{" "}
          <span>
            / 5{a.reviews !== null && ` · ${a.reviews.toLocaleString()} reviews`}
          </span>
        </p>
      )}
      {a.description && <p className="app-card-description">{a.description}</p>}
      <div className="apps-tags">
        {a.features.slice(0, 3).map((f) => (
          <span key={f}>{f}</span>
        ))}
      </div>
      <div className="app-card-bottom">
        {a.pricing && <strong>{a.pricing}</strong>}
        <PartnerLink>Check this app ↗</PartnerLink>
      </div>
    </article>
  );
}
