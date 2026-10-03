import Link from "next/link";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import AgencyActions, { BriefButton } from "./AgencyActions";
import AgencyHero from "./AgencyHero";
import ProfileNav from "./ProfileNav";
import AgencyOverview from "./AgencyOverview";
import AgencyServices from "./AgencyServices";
import AgencyPortfolio from "./AgencyPortfolio";
import ProjectFit from "./ProjectFit";
import AgencyReviews from "./AgencyReviews";
import AgencyPricing from "./AgencyPricing";
import HiringProcess from "./HiringProcess";
import AgencyLocation from "./AgencyLocation";
import RelatedAgencies from "./RelatedAgencies";
import AgencyFaq from "./AgencyFaq";
import AgencySources from "./AgencySources";
import ContactSidebar from "./ContactSidebar";
import { primaryRating } from "@/lib/format";

/** Every route uses the same approved profile layout and its own research record. */
export default function AgencyPage({ agency, city, related }) {
  const rating = primaryRating(agency);
  return (
    <div className="profile-page">
      <a className="skip" href="#overview">
        Skip to agency details
      </a>
      <div className="announcement">
        Find your people. Build your next chapter. <b>The Shopify talent directory.</b>
      </div>
      <AgencyActions agency={agency}>
        <div className="wrap">
          <Header profile />
          <div className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href={`/${city.route}`}>Shopify agencies in {city.name}</Link>
            <span>/</span>
            <strong>{agency.name}</strong>
          </div>
          <AgencyHero agency={agency} />
        </div>
        <ProfileNav name={agency.name} />
        <main className="wrap">
          <div className="layout">
            <div className="content">
              <AgencyOverview agency={agency} />
              <AgencyServices agency={agency} />
              <AgencyPortfolio agency={agency} />
              <ProjectFit agency={agency} />
              <AgencyReviews agency={agency} />
              <AgencyPricing agency={agency} />
              <HiringProcess />
              <AgencyLocation agency={agency} />
              <RelatedAgencies agency={agency} related={related} />
              <AgencyFaq agency={agency} />
              <AgencySources agency={agency} />
            </div>
            <ContactSidebar agency={agency} />
          </div>
          <section className="bottom-cta">
            <div>
              <div className="eyebrow" style={{ color: "var(--lime)" }}>
                Good partnerships start with clarity.
              </div>
              <h2 style={{ marginTop: 14 }}>
                Your next chapter deserves
                <br />
                the right Shopify partner.
              </h2>
              <p>Turn your requirements into a brief you can actually use.</p>
            </div>
            <BriefButton className="btn lime">Build my project brief</BriefButton>
          </section>
          <Footer />
        </main>
        <div className="mobile-contact">
          <div>
            <strong>{agency.name}</strong>
            <small>
              {rating
                ? `${rating.value}/5 · ${rating.reviewCount} ${rating.platform === "Clutch" ? "Clutch" : "Shopify"} reviews`
                : "Explore published services"}
            </small>
          </div>
          <BriefButton>Build project brief</BriefButton>
        </div>
      </AgencyActions>
    </div>
  );
}
