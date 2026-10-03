"use client";
import { useDirectory } from "./DirectoryContext";
import { serviceGroups } from "@/lib/services";
export default function FilterSidebar({ agencies, cities }) {
  const { filters, changeFilter, resetFilters } = useDirectory();
  return (
    <aside className="filters" aria-label="Agency filters">
      <div className="filtertop">
        <strong>Find your fit</strong>
        <button className="textbtn" onClick={resetFilters}>
          Reset all
        </button>
      </div>
      <div>
        <label className="field" htmlFor="country">
          COUNTRY
        </label>
        <select
          id="country"
          value={filters.country}
          onChange={(event) => changeFilter("country", event.target.value)}
        >
          <option value="">All countries</option>
          {[...new Set(agencies.map((agency) => agency.location.country))].map(
            (country) => (
              <option key={country}>{country}</option>
            ),
          )}
        </select>
      </div>
      <div>
        <label className="field" htmlFor="city">
          CITY COLLECTION
        </label>
        <select
          id="city"
          value={filters.city}
          onChange={(event) => changeFilter("city", event.target.value)}
        >
          <option value="">All cities</option>
          {cities.map((city) => (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="field" htmlFor="expertType">
          EXPERT TYPE
        </label>
        <select
          id="expertType"
          value={filters.type}
          onChange={(event) => changeFilter("type", event.target.value)}
        >
          <option value="">All expert types</option>
          <option value="agency">Agency</option>
          <option value="freelancer">Freelancer</option>
          <option value="creator">Independent creator</option>
        </select>
      </div>
      <div>
        <label className="field" htmlFor="budget">
          PUBLISHED PROJECT MINIMUM · USD
        </label>
        <select
          id="budget"
          value={filters.budget}
          onChange={(event) => changeFilter("budget", event.target.value)}
        >
          <option value="">Any / undisclosed</option>
          {[5000, 10000, 25000, 50000].map((amount) => (
            <option key={amount} value={amount}>
              Up to ${amount.toLocaleString("en-US")}
            </option>
          ))}
        </select>
      </div>
      <div className="categorygroup">
        <span className="field">SERVICE EXPERTISE</span>
        <div className="categories">
          {["", ...serviceGroups].map((service) => (
            <button
              className={`category ${filters.service === service ? "active" : ""}`}
              aria-pressed={filters.service === service}
              key={service}
              onClick={() => changeFilter("service", service)}
            >
              {service || "All services"}
              <span>
                {
                  agencies.filter(
                    (agency) => !service || agency.serviceGroups.includes(service),
                  ).length
                }
              </span>
            </button>
          ))}
        </div>
      </div>
      <label className="check">
        <input
          type="checkbox"
          checked={filters.savedOnly}
          onChange={(event) => changeFilter("savedOnly", event.target.checked)}
        />
        Shortlisted only
      </label>
      <div className="filter-note">
        A city collection can include offices and directory-listed locations. Check each
        profile.
        <br />
        <br />
        Budget filtering uses only published project minimums. Unknown prices are excluded
        when a budget is selected.
      </div>
    </aside>
  );
}
