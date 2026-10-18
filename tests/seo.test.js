import test from "node:test";
import assert from "node:assert/strict";
import { pageMetadata, providerMetadata, seoText } from "../lib/seo.js";
import { getAllAgencies, getCities } from "../lib/agencies.js";
import { providerContent } from "../lib/provider-content.js";
import { canIndex } from "../lib/site.js";

test("public metadata stays indexable and has complete social and canonical tags", () => {
  assert.equal(canIndex, true);
  for (const agency of getAllAgencies()) {
    const city = getCities().find((c) => c.route === agency.cityRoute);
    const meta = providerMetadata(agency, city);
    assert.equal(meta.robots.index, true);
    assert.equal(meta.robots.googleBot.index, true);
    assert.equal(meta.robots.follow, true);
    assert.equal(meta.alternates.canonical, meta.openGraph.url);
    assert.ok(meta.title.includes(agency.name.slice(0, 10)));
    assert.ok(meta.description && meta.description.length <= 165);
    assert.ok(meta.keywords.includes(seoText(agency.name, 90)));
    assert.equal(meta.openGraph.description, meta.description);
    assert.equal(meta.twitter.description, meta.description);
    assert.ok(meta.openGraph.images.length);
  }
});
test("sparse profiles have factual editorial context and useful labeled FAQs", () => {
  const sparse = getAllAgencies().filter((a) => !a.researchComplete);
  assert.equal(sparse.length, 262);
  for (const agency of sparse) {
    assert.equal(agency.indexable, true);
    assert.ok(agency.description && agency.longDescription && agency.faqs.length);
  }
  const a = {
    name: "Sample",
    description: "",
    longDescription: "",
    faqs: [],
    services: [],
    sources: [],
    location: {},
    pricing: {},
  };
  const editorial = providerContent(a, { name: "Paris", country: "France" });
  assert.match(editorial.description, /Paris, France/);
  assert.match(editorial.editorialNote, /Editorial/);
  assert.match(editorial.faqs[0].answer, /not captured/);
  assert.ok(editorial.faqs.every((f) => f.sourceType.startsWith("editorial")));
  assert.deepEqual(a.services, []);
});
test("metadata cleans text without creating missing facts", () => {
  assert.equal(seoText(" a\n  b "), "a b");
  assert.ok(seoText("long phrase ".repeat(50)).length <= 165);
  const meta = pageMetadata({
    title: "Contact",
    description: "Contact eStorefy",
    path: "/contact",
    keywords: ["contact"],
  });
  assert.ok(meta.keywords.includes("contact"));
  assert.equal(meta.alternates.canonical, "https://estorefy.net/contact");
});
