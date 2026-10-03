import Link from "next/link";
export default function AgencySpotlight({ agency }) {
  return (
    <section className="rich spotlight" aria-labelledby="spotTitle">
      <div className="spot-art" aria-hidden="true">
        <div className="project-visual">
          <small>THE EXPERT NOTEBOOK</small>
          <h3>
            Built for
            <br />
            your next chapter.
          </h3>
          <div className="project-shapes">
            <span />
            <span />
            <span />
          </div>
          <div>Commerce expertise &nbsp; ↗</div>
        </div>
      </div>
      <div className="spot-copy">
        <div className="eyebrow">The expert notebook / agency spotlight</div>
        <h2 id="spotTitle">
          Good design starts
          <br />
          with the right questions.
        </h2>
        <h3>Meet {agency.name}.</h3>
        <p>{agency.description}</p>
        <ul className="notes">
          {agency.services.slice(0, 3).map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
        <Link className="button dark" href={agency.profilePath}>
          Explore agency profile ↗
        </Link>
      </div>
    </section>
  );
}
