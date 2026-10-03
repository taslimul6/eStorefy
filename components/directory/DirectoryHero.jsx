"use client";
import AgencyImage from "@/components/shared/AgencyImage";
import Link from "next/link";
import { useDirectory } from "./DirectoryContext";
import { initials } from "@/lib/format";
export default function DirectoryHero({ city, spotlight }) {
  const { filters, changeFilter, chooseService } = useDirectory();
  function search(event) {
    event.preventDefault();
    document.getElementById("directory")?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <div className="crumb">
        <Link href="/">Home</Link> / Shopify experts{city ? ` / ${city.name}` : ""}
      </div>
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              {city
                ? `Local & remote options · ${city.name}`
                : "The Shopify talent directory"}
            </div>
            <h1>
              {city ? (
                <>
                  Shopify experts
                  <br />
                  in <em>{city.name}.</em>
                </>
              ) : (
                <>
                  Your next chapter.
                  <br />
                  The right
                  <br />
                  <em>Shopify partner.</em>
                </>
              )}
            </h1>
            <p>
              {city?.description ||
                "Find agencies and independent experts who design, build and improve Shopify websites. Compare expertise. Build your shortlist."}
            </p>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="orbit" />
            <div className="talent-mock">
              <div className="talent-logo">
                <AgencyImage agency={spotlight} />
              </div>
              <div className="eyebrow" style={{ color: "#668946", fontSize: 9 }}>
                Agency spotlight
              </div>
              <h3>{spotlight.name}</h3>
              <p>
                {spotlight.serviceGroups.slice(0, 2).join(". ")}.<br />
                Commerce expertise.
              </p>
              <div className="talent-tags">Shopify · {spotlight.cityName}</div>
              <div className="talent-bottom">
                {spotlight.cityName}, US <span>Explore expertise ↗</span>
              </div>
            </div>
            <div className="float top">
              <span className="dot" />
              Your project. Their expertise.<small>Agencies + specialist services</small>
            </div>
            <div className="float bottom">
              ◎ Local teams. Wider expertise.
              <small>Find a fit beyond the postcode.</small>
            </div>
            <div className="starburst">✳</div>
          </div>
        </div>
        <form className="searchbox" onSubmit={search}>
          <span className="search-icon" aria-hidden="true">
            ⌕
          </span>
          <input
            aria-label="Search agencies, services or cities"
            placeholder="Search experts, services, or cities…"
            value={filters.query}
            onChange={(event) => changeFilter("query", event.target.value)}
          />
          <button className="button lime">Find experts ↗</button>
        </form>
        <div className="trending">
          <span>Popular starting points:</span>
          {["Store design", "Migration", "Development"].map((service) => (
            <button key={service} onClick={() => chooseService(service)}>
              {service}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
