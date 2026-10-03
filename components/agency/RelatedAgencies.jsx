import Link from "next/link";
import AgencySection from "./AgencySection";
import { primaryRating } from "@/lib/format";
export default function RelatedAgencies({ agency, related }) {
  const options = [agency, ...related.slice(0, 2)];
  return (
    <AgencySection
      id="compare"
      number="08"
      eyebrow="Explore your options"
      title={
        <>
          A few more names
          <br />
          for your shortlist.
        </>
      }
    >
      <p className="muted">
        Compare published facts, then evaluate the work. These alternatives share service
        categories, not a quality ranking.
      </p>
      <div className="comparison">
        <table>
          <caption className="sr-only">
            Compare agencies by published profile facts
          </caption>
          <thead>
            <tr>
              <th scope="col">At a glance</th>
              {options.map((item) => (
                <th key={item.recordKey} scope="col">
                  <Link href={item.profilePath}>{item.name}</Link>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Shopify tier</th>
              {options.map((item) => (
                <td key={item.recordKey}>
                  {item.shopify.partnerTier || "Not confirmed"}
                </td>
              ))}
            </tr>
            <tr>
              <th scope="row">Published rating</th>
              {options.map((item) => {
                const rating = primaryRating(item);
                return (
                  <td key={item.recordKey}>
                    {rating ? (
                      <>
                        <strong>{rating.value} / 5</strong>
                        <small>
                          {rating.reviewCount} reviews · {rating.platform}
                        </small>
                      </>
                    ) : (
                      "Not available"
                    )}
                  </td>
                );
              })}
            </tr>
            <tr>
              <th scope="row">Service focus</th>
              {options.map((item) => (
                <td key={item.recordKey}>{item.serviceGroups.join(", ")}</td>
              ))}
            </tr>
            <tr>
              <th scope="row">Learn more</th>
              {options.map((item) => (
                <td key={item.recordKey}>
                  <Link className="text-link" href={item.profilePath}>
                    Agency profile
                  </Link>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <p className="sub">
        Review volume, source platform and project relevance matter. Scores from different
        platforms are not equivalent.
      </p>
    </AgencySection>
  );
}
