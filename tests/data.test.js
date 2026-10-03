import test from "node:test";
import assert from "node:assert/strict";
import {
  getAllAgencies,
  getAllCityAgencies,
  getCities,
  getCityAgencies,
  getAgency,
  getRelatedAgencies,
} from "../lib/agencies.js";
import { emptyFilters, filterAgencies } from "../lib/filter-agencies.js";
import { agencySchema } from "../lib/seo.js";
import { priceLabel } from "../lib/format.js";
import { csvCell } from "../lib/download.js";

const agencies = getAllAgencies();
test("all city collections have unique routes and preserved NYC records", () => {
  assert.equal(getCities().length, 30);
  assert.equal(getAllCityAgencies().length, 378);
  assert.equal(agencies.length, 167);
  assert.equal(new Set(agencies.map((agency) => agency.profilePath)).size, 167);
  for (const city of getCities())
    for (const agency of getCityAgencies(city)) {
      assert.equal(getAgency(city.route, agency.id).name, agency.name);
      assert.ok(agency.description && agency.services.length && agency.sources.length);
    }
});
test("unknown routes do not resolve to a real agency", () => {
  assert.equal(getAgency("not-a-city", "blueswitch"), null);
  assert.equal(getAgency("shopify-agency-in-newyork", "not-an-agency"), undefined);
});
test("budget filtering never mistakes a selected service for a full project", () => {
  const arctic = agencies.find((agency) => agency.id === "arctic-grey");
  assert.equal(arctic.pricing.selectedServices.minimum, 199);
  assert.ok(!filterAgencies([arctic], { ...emptyFilters, budget: "5000" }).length);
  assert.match(priceLabel(arctic), /Selected services/);
});
test("search, service and saved filters compose", () => {
  const blue = agencies.find((agency) => agency.id === "blueswitch");
  const matches = filterAgencies(
    agencies,
    { ...emptyFilters, query: " BlueSwitch ", service: "Development", savedOnly: true },
    [blue.recordKey],
  );
  assert.deepEqual(
    matches.map((agency) => agency.id),
    ["blueswitch"],
  );
});
test("structured data does not invent or aggregate third-party ratings", () => {
  for (const agency of agencies) {
    const schema = agencySchema(agency, getCities()[0]);
    assert.ok(!JSON.stringify(schema).includes("aggregateRating"));
    assert.ok(!JSON.stringify(schema).includes('"priceRange"'));
    assert.equal(schema["@graph"][0].mainEntity["@id"], schema["@graph"][1]["@id"]);
  }
});
test("related agencies exclude the current profile", () => {
  for (const agency of agencies)
    assert.ok(getRelatedAgencies(agency).every((other) => other.id !== agency.id));
});
test("CSV exports quote values and neutralize spreadsheet formulas", () => {
  assert.equal(csvCell('a"b'), '"a""b"');
  assert.equal(csvCell("=1+1"), '\"\'=1+1\"');
});

test("city membership filters retain agencies after homepage deduplication", () => {
  for (const city of getCities()) {
    const matches = filterAgencies(agencies, { ...emptyFilters, city: city.id });
    assert.equal(matches.length, city.dataset.agencies.length, city.name);
    assert.equal(
      city.insights.localCount + city.insights.remoteCount,
      city.dataset.agencies.length,
    );
  }
});
test("canonical targets resolve and remote records do not invent street addresses", () => {
  const paths = new Set(getAllCityAgencies().map((agency) => agency.profilePath));
  for (const agency of getAllCityAgencies()) {
    assert.ok(paths.has(agency.canonicalPath));
    if (agency.location.relationship === "remote_serves_city")
      assert.ok(!agency.location.streetAddress);
  }
});
