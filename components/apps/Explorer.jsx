"use client";
import { useState } from "react";
import Link from "next/link";
import AppCard from "./AppCard";
export default function Explorer({ categories, apps }) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("name");
  const [pricing, setPricing] = useState("");
  const [topic, setTopic] = useState("");
  const [rating, setRating] = useState("");
  const q = query.trim().toLowerCase();
  const groups = categories
    ? [...new Set(categories.map((c) => c.group || "More categories"))]
    : [];
  const matched = categories?.filter(
    (c) =>
      (!topic || (c.group || "More categories") === topic) &&
      (c.name + " " + c.appNames.join(" ")).toLowerCase().includes(q),
  );
  const results = apps
    ?.filter(
      (a) =>
        (a.name + " " + a.description).toLowerCase().includes(q) &&
        (!pricing || a.pricing === pricing) &&
        (!rating || (a.rating !== null && a.rating >= Number(rating))),
    )
    .sort((a, b) =>
      sort === "rating"
        ? (b.rating ?? -1) - (a.rating ?? -1) ||
          (b.reviews ?? -1) - (a.reviews ?? -1) ||
          a.name.localeCompare(b.name)
        : sort === "reviews"
          ? (b.reviews ?? -1) - (a.reviews ?? -1) || a.name.localeCompare(b.name)
          : a.name.localeCompare(b.name),
    );
  function reset() {
    setQuery("");
    setSort("name");
    setPricing("");
    setTopic("");
    setRating("");
  }
  return (
    <div className="apps-browser">
      <aside className="apps-filter">
        <div className="apps-filter-title">
          <h2>Find your fit</h2>
          <button type="button" onClick={reset}>
            Reset
          </button>
        </div>
        <label>
          Search
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={categories ? "Category or app name" : "App name or keyword"}
          />
        </label>
        {categories ? (
          <label>
            Topic
            <select value={topic} onChange={(e) => setTopic(e.target.value)}>
              <option value="">All topics</option>
              {groups.map((g) => (
                <option key={g}>{g}</option>
              ))}
            </select>
          </label>
        ) : (
          <>
            <label>
              Pricing
              <select value={pricing} onChange={(e) => setPricing(e.target.value)}>
                <option value="">All pricing</option>
                {[...new Set(apps.map((a) => a.pricing).filter(Boolean))]
                  .sort()
                  .map((v) => (
                    <option key={v}>{v}</option>
                  ))}
              </select>
            </label>
            <label>
              Minimum rating
              <select value={rating} onChange={(e) => setRating(e.target.value)}>
                <option value="">Any rating</option>
                <option value="4">4 stars and above</option>
                <option value="4.5">4.5 stars and above</option>
              </select>
            </label>
            <label>
              Sort by
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="name">Name A–Z</option>
                <option value="rating">Rating, then reviews</option>
                <option value="reviews">Most reviews</option>
              </select>
            </label>
          </>
        )}
        <p>
          Find tools that suit your store. Compare current plans and features before
          installing.
        </p>
        <Link href="/editorial-policy">How we list apps ↗</Link>
      </aside>
      <div className="apps-results">
        <div className="apps-results-heading">
          <p role="status">
            {categories ? `${matched.length} categories` : `${results.length} apps`}
          </p>
          <span>Explore. Compare. Build better.</span>
        </div>
        {categories ? (
          groups
            .filter((g) => !topic || g === topic)
            .map((g) => {
              const items = matched.filter((c) => (c.group || "More categories") === g);
              return items.length ? (
                <section key={g}>
                  <h2>{g}</h2>
                  <div className="apps-grid">
                    {items.map((c) => (
                      <Link
                        className="apps-card apps-category"
                        href={c.path}
                        key={c.path}
                      >
                        <span className="apps-kicker">{c.count} apps</span>
                        <h3>{c.name}</h3>
                        <span>Explore category ↗</span>
                      </Link>
                    ))}
                  </div>
                </section>
              ) : null;
            })
        ) : (
          <div className="apps-grid">
            {results.map((a) => (
              <AppCard app={a} key={a.path} />
            ))}
          </div>
        )}
        {(categories ? !matched.length : !results.length) && (
          <div className="apps-panel">
            <h2>No matches yet</h2>
            <p>Try another keyword or clear your filters.</p>
            <button className="apps-button" onClick={reset}>
              Reset filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
