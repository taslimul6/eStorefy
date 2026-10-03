"use client";
import { useState } from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import { useShortlist } from "@/components/providers/ShortlistProvider";
import { filterAgencies, emptyFilters } from "@/lib/filter-agencies";
import { useDirectory } from "./DirectoryContext";
import FilterSidebar from "./FilterSidebar";
import AgencyCard from "./AgencyCard";
import AgencyTable from "./AgencyTable";
export default function AgencyDirectory({ agencies, cities, cityName }) {
  const { filters, changeFilter, resetFilters } = useDirectory();
  const { savedIds } = useShortlist();
  const [view, setView] = useState("grid");
  const matches = filterAgencies(agencies, filters, savedIds);
  const active = Object.entries(filters).filter(
    ([key, value]) => key !== "sort" && value !== emptyFilters[key],
  );
  return (
    <section id="directory">
      <SectionHeading
        eyebrow="Find your project team"
        title={
          cityName
            ? `Shopify agencies & experts in ${cityName}.`
            : "Meet your next Shopify expert."
        }
        description="Compare published expertise, pricing context and source-linked agency profiles."
      />
      <div className="directory">
        <FilterSidebar agencies={agencies} cities={cities} />
        <div>
          <div className="resultsbar">
            <span role="status" aria-live="polite">
              {matches.length} agencies match your search
            </span>
            <label>
              Sort:{" "}
              <select
                value={filters.sort}
                onChange={(event) => changeFilter("sort", event.target.value)}
                aria-label="Sort agencies"
              >
                <option value="az">Name: A–Z</option>
                <option value="budget">Project minimum: low to high</option>
                <option value="rating">Published rating</option>
              </select>
            </label>
          </div>
          <div className="chips">
            {active.map(([key, value]) => (
              <button
                key={key}
                onClick={() => changeFilter(key, emptyFilters[key])}
                aria-label={`Remove ${key} filter`}
              >
                {key === "savedOnly" ? "Shortlisted" : String(value)} ×
              </button>
            ))}
          </div>
          <div className="viewbuttons">
            <button aria-pressed={view === "grid"} onClick={() => setView("grid")}>
              ▦ Grid
            </button>
            <button aria-pressed={view === "table"} onClick={() => setView("table")}>
              ☷ Comparison table
            </button>
          </div>
          {matches.length ? (
            view === "grid" ? (
              <div className="grid">
                {matches.map((agency, index) => (
                  <AgencyCard key={agency.recordKey} agency={agency} index={index} />
                ))}
              </div>
            ) : (
              <AgencyTable agencies={matches} />
            )
          ) : (
            <div className="empty">
              <h3>No matching experts yet.</h3>
              <p>Try another service, location or budget.</p>
              <button className="button" onClick={resetFilters}>
                Reset filters
              </button>
            </div>
          )}
          <div className="loadrow">
            <p>Showing all {matches.length} matching agency profiles.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
