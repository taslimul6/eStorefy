"use client";
import { useState } from "react";
import Link from "next/link";
export default function LocationBrowser({ cities }) {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("");
  const countries = [...new Set(cities.map((c) => c.country))].sort();
  const matches = cities.filter(
    (c) =>
      (!country || c.country === country) &&
      c.fullName.toLowerCase().includes(query.trim().toLowerCase()),
  );
  return (
    <>
      <div className="location-controls">
        <label>
          Search locations
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="City, region or country"
          />
        </label>
        <label>
          Country
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="">All {countries.length} countries</option>
            {countries.map((name) => (
              <option key={name}>{name}</option>
            ))}
          </select>
        </label>
      </div>
      <p className="section-note" role="status">
        {matches.length} researched locations. Counts include agency and independent
        expert listings.
      </p>
      <div className="home-locations">
        {matches.map((c) => (
          <Link key={c.id} href={`/${c.route}`}>
            <strong>{c.name}</strong>
            <small>{[c.region, c.country].filter(Boolean).join(", ")}</small>
            <span>{c.count} listings ↗</span>
          </Link>
        ))}
      </div>
      {!matches.length && (
        <div className="empty">
          <h2>No matching locations.</h2>
          <p>Try another city or country.</p>
          <button
            className="button"
            onClick={() => {
              setQuery("");
              setCountry("");
            }}
          >
            Reset location filters
          </button>
        </div>
      )}
    </>
  );
}
