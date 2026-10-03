"use client";
import { useState } from "react";
import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";
export default function CityExplorer({ cities, agencies, currentCity }) {
  const [selectedId, setSelectedId] = useState(currentCity?.id || cities[0].id);
  const city = cities.find((item) => item.id === selectedId) || cities[0];
  const local = agencies.filter((agency) => agency.cityId === city.id);
  const services = [...new Set(local.flatMap((agency) => agency.serviceGroups))];
  const publishedRatings = local.filter((agency) =>
    agency.ratings.some((rating) => rating.value != null),
  ).length;
  return (
    <>
      <section className="cities" id="locations">
        <SectionHeading
          eyebrow="Local knowledge. Specialist skills."
          title="Find Shopify talent in your city."
          description="Open a city directory to explore its researched collection."
        />
        <div className="citygrid">
          {cities.map((item) => (
            <Link
              href={`/${item.route}`}
              className="city"
              key={item.id}
              aria-current={currentCity?.id === item.id ? "page" : undefined}
            >
              <span className="city-icon" aria-hidden="true">
                ⌂
              </span>
              <span className="arrow">↗</span>
              <strong>{item.name}</strong>
              <small>
                {item.country} · {item.count} agencies
              </small>
            </Link>
          ))}
        </div>
      </section>
      <section className="rich split" id="city-insights">
        <div className="snapshot">
          <div className="snapshot-head">
            <div>
              <div className="eyebrow">A closer look at local talent</div>
              <h2>Inside {city.name}.</h2>
            </div>
            <select
              aria-label="Choose city for insights"
              value={city.id}
              onChange={(event) => setSelectedId(event.target.value)}
            >
              {cities.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <p>
            {local.length} profiles across {services.length} service areas.
          </p>
          <div className="snapshot-stats">
            <div>
              <strong>{local.length}</strong>
              <small>Listed agencies</small>
            </div>
            <div>
              <strong>{services.length}</strong>
              <small>Service areas</small>
            </div>
            <div>
              <strong>{publishedRatings}</strong>
              <small>With sourced ratings</small>
            </div>
          </div>
          <div className="bars">
            {services.map((service) => {
              const count = local.filter((agency) =>
                agency.serviceGroups.includes(service),
              ).length;
              return (
                <div className="bar-row" key={service}>
                  <span>{service}</span>
                  <span className="bar-track">
                    <span
                      style={{ width: `${(count / Math.max(local.length, 1)) * 100}%` }}
                    />
                  </span>
                  <span>{count}</span>
                </div>
              );
            })}
          </div>
          <Link className="button lime" href={`/${city.route}`}>
            Open city directory ↗
          </Link>
          <p style={{ fontSize: 11 }}>
            Counts describe this research collection, not the entire city market.
          </p>
        </div>
        <div className="panel">
          <div className="eyebrow">Location, with context</div>
          <h2>Hiring a Shopify expert in {city.name}.</h2>
          <p className="section-intro">{city.locationNote}</p>
          <div className="notes">
            <div>
              Profiles with a published rating: <strong>{publishedRatings}</strong>
            </div>
            <div>
              Service categories represented: <strong>{services.length}</strong>
            </div>
          </div>
          <h3 style={{ fontSize: 15, marginTop: 27 }}>Before you shortlist</h3>
          <ul className="notes">
            <li>Ask who will design and build your store.</li>
            <li>Compare project scope, not just a starting service fee.</li>
            <li>Check recent work and post-launch support.</li>
            <li>Confirm office location and working arrangements.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
