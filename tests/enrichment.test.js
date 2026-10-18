import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { cities } from "../data/cities.js";
import { legacyCities } from "../data/legacy-cities.js";
import {
  getCities,
  getCity,
  getAgency,
  getAllCityAgencies,
  getAllAgencies,
} from "../lib/agencies.js";
import { normalizeProvider } from "../lib/provider-data.js";
import { filterAgencies, emptyFilters } from "../lib/filter-agencies.js";

test("every legacy profile URL survives the enrichment", () => {
  for (const city of legacyCities)
    for (const agency of city.dataset.agencies) {
      assert.ok(getAgency(city.route, agency.id), `${city.route}/${agency.id}`);
    }
});
test("populated locations have unique stable routes, accurate countries and resolving canonicals", () => {
  assert.equal(new Set(cities.map((c) => c.route)).size, cities.length);
  assert.equal(new Set(cities.map((c) => c.id)).size, cities.length);
  assert.ok(
    cities.filter((c) => !c.dataset.agencies.length).every((c) => !getCity(c.route)),
  );
  for (const a of getAllCityAgencies()) {
    assert.match(a.profilePath, /^\/shopify-agency-in-[a-z0-9-]+\/[a-z0-9-]+$/);
    const [, city, slug] = a.canonicalPath.split("/");
    assert.ok(getAgency(city, slug));
    assert.ok(!getCity(a.cityRoute).description.includes("undefined"));
    assert.equal(a.cityCountryCode, getCity(a.cityRoute).dataset.metadata.countryCode);
  }
  const londons = getCities().filter((c) => c.name === "London");
  assert.equal(londons.length, 2);
  assert.equal(new Set(londons.map((c) => c.route)).size, 2);
});
test("all records in the current snapshot are represented and raw provenance is unchanged", () => {
  for (const file of fs.readdirSync("data/providers/cities")) {
    const input = JSON.parse(fs.readFileSync(`data/providers/cities/${file}`, "utf8"));
    if (!input.agencies.length) continue;
    const city = getCities().find(
      (c) =>
        c.name === input.metadata.city && c.countryCode === input.metadata.countryCode,
    );
    assert.ok(city);
    for (const raw of input.agencies) {
      const a = city.dataset.agencies.find((a) =>
        a.importedRecordIds?.includes(raw.id || `name:${raw.name}`),
      );
      assert.ok(a, `${input.metadata.city}: ${raw.id}`);
      for (const source of raw.sources)
        assert.ok(
          a.sources.some(
            (s) => s.url === source.url || s.url === new URL(source.url).href,
          ),
        );
    }
  }
});
test("missing optional fields stay empty and malformed URLs do not crash source rendering", () => {
  const a = normalizeProvider(
    {
      id: "test",
      name: "Test",
      services: null,
      sources: [{ url: "javascript:alert(1)" }],
      location: null,
    },
    { country: "France", countryCode: "FR" },
  );
  assert.equal(a.indexable, true);
  assert.equal(a.researchComplete, false);
  assert.equal(a.description, "");
  assert.deepEqual(a.services, []);
  assert.deepEqual(a.sources, []);
  assert.equal(a.location.country, "France");
});
test("country and independent-developer filters include enriched records", () => {
  const all = getAllAgencies();
  const french = filterAgencies(all, { ...emptyFilters, country: "France" });
  assert.ok(french.length);
  assert.ok(
    french.every(
      (a) =>
        a.location.country === "France" ||
        a.cityMemberships.some((c) => c.country === "France"),
    ),
  );
  const developers = filterAgencies(all, {
    ...emptyFilters,
    type: "independent_developer",
  });
  assert.ok(developers.length);
  assert.ok(developers.every((a) => a.entityType === "independent_developer"));
});
