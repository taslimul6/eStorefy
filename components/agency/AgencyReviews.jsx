import AgencySection from "./AgencySection";
import ExternalLink from "@/components/shared/ExternalLink";
import { formatDate } from "@/lib/format";
export default function AgencyReviews({ agency }) {
  const published = agency.ratings.filter((rating) => rating.value != null);
  return (
    <AgencySection
      id="reviews"
      number="04"
      eyebrow="Published reputation"
      title={
        <>
          Reviews with a source.
          <br />
          Not just a star badge.
        </>
      }
    >
      {published.length ? (
        published.map((rating) => (
          <div className="rating-card" key={rating.platform}>
            <div className="rating-score">
              <strong>{rating.value}</strong>
              <div className="stars" aria-hidden="true">
                ★
              </div>
              <div className="score-bottom">
                out of {rating.scale}
                <br />
                {rating.reviewCount} reviews
              </div>
            </div>
            <div className="rating-copy">
              <h3>{rating.platform}</h3>
              <p>
                Read individual reviews for the type of work, communication and delivery
                experience that matter to your project. The published score is one input,
                not a quality guarantee.
              </p>
              <ExternalLink className="text-link" href={rating.sourceUrl}>
                Read reviews at the source
              </ExternalLink>
              <p className="score-bottom" style={{ marginTop: 12 }}>
                Observed {formatDate(rating.observedAt)}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="box">
          <h3>No published score captured.</h3>
          <p className="sub">
            {agency.ratings.some((rating) => rating.reviewCount === 0)
              ? "The checked Shopify profile had no reviews at the research date. This does not mean the agency has no reviews elsewhere."
              : "A rating could not be confirmed from the sources used for this profile. Ask for references relevant to your project."}
          </p>
        </div>
      )}
      <div className="no-quote">
        “Have they solved a problem like mine?”
        <div className="sub" style={{ fontFamily: "Arial", marginTop: 8 }}>
          A question to guide your review reading—not a client testimonial.
        </div>
      </div>
      <div className="two" style={{ marginTop: 20 }}>
        <div>
          <h3>Look for relevant experience</h3>
          <p className="sub">
            A small theme update may not tell you much about a complex migration. Match
            the review to your scope.
          </p>
        </div>
        <div>
          <h3>Ask for recent references</h3>
          <p className="sub">
            Discuss similar projects and who will actually deliver your work.
          </p>
        </div>
      </div>
      <p className="sub">
        Ratings remain attributed to each platform. eStorefy has not collected these
        reviews or combined their scores.
      </p>
    </AgencySection>
  );
}
