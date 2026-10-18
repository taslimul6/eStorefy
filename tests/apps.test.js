import test from "node:test";
import assert from "node:assert/strict";
import { getAppDirectory, getAppsSitemap, safeUrl, appSummary } from "../lib/apps.js";
test("all app routes are unique and every repeated app has one resolving canonical", () => {
  const { categories, listingCount, uniqueAppCount } = getAppDirectory();
  const routes = new Set(categories.flatMap((c) => c.apps.map((a) => a.path)));
  assert.equal(routes.size, listingCount);
  const identities = new Map();
  for (const c of categories)
    for (const a of c.apps) {
      assert.ok(routes.has(a.canonicalPath));
      assert.match(
        a.path,
        /^\/apps\/[a-z0-9]+(?:-[a-z0-9]+)*\/[a-z0-9]+(?:-[a-z0-9]+)*$/,
      );
      if (identities.has(a.identity))
        assert.equal(identities.get(a.identity), a.canonicalPath);
      identities.set(a.identity, a.canonicalPath);
    }
  assert.equal(identities.size, uniqueAppCount);
  const sitemap = getAppsSitemap();
  assert.equal(new Set(sitemap.map((x) => x.path)).size, sitemap.length);
  assert.equal(
    sitemap.length,
    1 + categories.filter((c) => c.apps.length).length + uniqueAppCount,
  );
});
test("optional card data and unsafe links are omitted", () => {
  assert.equal(safeUrl("javascript:alert(1)"), null);
  assert.equal(safeUrl(null), null);
  const s = appSummary({ name: "Example", rating: { value: 9, review_count: -1 } });
  assert.equal(s.rating, null);
  assert.equal(s.reviews, null);
  assert.deepEqual(s.features, []);
  assert.equal(s.pricing, "");
});
