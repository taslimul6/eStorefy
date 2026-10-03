"use client";
import { useState } from "react";
import Link from "next/link";
import { serviceGroups } from "@/lib/services";
import { emptyFilters, filterAgencies } from "@/lib/filter-agencies";
import { priceLabel } from "@/lib/format";
export default function Matchmaker({ agencies, cities }) {
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [city, setCity] = useState("");
  const [matches, setMatches] = useState(null);
  function findMatches() {
    setMatches(filterAgencies(agencies, { ...emptyFilters, service, budget, city }));
  }
  return (
    <div className="panel quiz">
      <div className="eyebrow">Project matchmaker</div>
      <h2>
        Your project.
        <br />A more focused shortlist.
      </h2>
      <p className="section-intro">
        Choose your service, published project minimum and location. Matching reflects
        listed facts, not a recommendation score.
      </p>
      <label htmlFor="matchService">What do you need help with?</label>
      <select
        id="matchService"
        value={service}
        onChange={(event) => setService(event.target.value)}
      >
        <option value="">Any service</option>
        {serviceGroups.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
      <label htmlFor="matchBudget">Maximum published project minimum (USD)</label>
      <select
        id="matchBudget"
        value={budget}
        onChange={(event) => setBudget(event.target.value)}
      >
        <option value="">Any / undisclosed</option>
        {[5000, 10000, 25000, 50000].map((amount) => (
          <option value={amount} key={amount}>
            ${amount.toLocaleString("en-US")}
          </option>
        ))}
      </select>
      <label htmlFor="matchCity">City collection</label>
      <select
        id="matchCity"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      >
        <option value="">Anywhere</option>
        {cities.map((item) => (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <button className="button dark" onClick={findMatches}>
        Find matching experts ↗
      </button>
      {matches !== null && (
        <div className="quiz-result" aria-live="polite">
          <strong>{matches.length} matching agencies</strong>
          {matches.slice(0, 4).map((agency) => (
            <div className="match-card" key={agency.recordKey}>
              <strong>{agency.name}</strong>
              <small>
                {agency.serviceGroups.join(" · ")}
                <br />
                {priceLabel(agency)}
              </small>
              <Link className="textbtn" href={agency.profilePath}>
                View matching profile ↗
              </Link>
            </div>
          ))}
          {!matches.length && (
            <p>
              Try a broader service or remove the budget filter. Undisclosed project
              minimums cannot be budget-matched.
            </p>
          )}
          {matches.length > 4 && (
            <p>
              Showing the first four alphabetical matches. Explore the directory for more.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
