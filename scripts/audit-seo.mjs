import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import { getAllAgencies, getCities } from "../lib/agencies.js";
import { getAppsSitemap } from "../lib/apps.js";

const root = path.join(process.cwd(), ".next/server/app");
const manifest = JSON.parse(fs.readFileSync(".next/prerender-manifest.json", "utf8"));
const routes = new Set(Object.keys(manifest.routes));
const decode = (value) =>
  value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
const attrs = (tag) =>
  Object.fromEntries(
    [...tag.matchAll(/([\w:-]+)\s*=\s*"([^"]*)"/g)].map((match) => [
      match[1].toLowerCase(),
      decode(match[2]),
    ]),
  );
const errors = [];
const pages = [];
for (const file of fs
  .readdirSync(root, { recursive: true })
  .filter((file) => file.endsWith(".html"))) {
  const route =
    file === "index.html"
      ? "/"
      : `/${file
          .replace(/\.html$/, "")
          .split(path.sep)
          .join("/")}`;
  if (!routes.has(route) || ["/_not-found", "/_global-error"].includes(route)) continue;
  const html = fs.readFileSync(path.join(root, file), "utf8");
  const metas = {};
  for (const match of html.matchAll(/<meta\b[^>]*>/g)) {
    const a = attrs(match[0]);
    if (a.name || a.property) metas[a.name || a.property] = a.content || "";
  }
  const title = decode(html.match(/<title>(.*?)<\/title>/s)?.[1] || "");
  const canonical = [...html.matchAll(/<link\b[^>]*>/g)]
    .map((m) => attrs(m[0]))
    .find((a) => a.rel === "canonical")?.href;
  const fail = (reason) => errors.push({ route, reason });
  if (!title) fail("Missing title");
  for (const key of [
    "description",
    "keywords",
    "og:title",
    "og:description",
    "og:url",
    "og:image",
    "twitter:card",
    "twitter:title",
    "twitter:description",
    "twitter:image",
  ])
    if (!metas[key]) fail(`Missing ${key}`);
  for (const key of ["robots", "googlebot"]) {
    if (
      !/(^|,)\s*index\s*(,|$)/.test(metas[key] || "") ||
      !/(^|,)\s*follow\s*(,|$)/.test(metas[key] || "") ||
      /noindex|nofollow/.test(metas[key] || "")
    )
      fail(`Invalid ${key} directive`);
  }
  if (!canonical || !routes.has(new URL(canonical).pathname))
    fail("Missing or unresolved canonical");
  if (canonical !== metas["og:url"]) fail("Canonical / Open Graph URL mismatch");
  if ((html.match(/<h1\b/g) || []).length !== 1) fail("Expected one H1");
  if (metas.description.length > 165) fail("Description over 165 characters");
  for (const match of html.matchAll(
    /<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs,
  )) {
    try {
      JSON.parse(match[1]);
    } catch {
      fail("Malformed JSON-LD");
    }
  }
  for (const match of html.matchAll(/<a\b[^>]*>/g)) {
    const href = attrs(match[0]).href;
    if (!href?.startsWith("/") || href.startsWith("//")) continue;
    const pathname =
      decodeURIComponent(new URL(href, "https://estorefy.net").pathname).replace(
        /\/$/,
        "",
      ) || "/";
    if (!routes.has(pathname) && !fs.existsSync(path.join("public", pathname)))
      fail(`Broken internal link ${pathname}`);
  }
  pages.push({ route, title, description: metas.description, canonical });
}
const xml = fs.readFileSync(path.join(root, "sitemap.xml.body"), "utf8");
const sitemapUrls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => decode(m[1]));
const expected =
  8 + getCities().length + getAllAgencies().length + getAppsSitemap().length;
assert.equal(sitemapUrls.length, expected);
assert.equal(new Set(sitemapUrls).size, sitemapUrls.length);
const canonicalTitles = new Map();
for (const page of pages.filter((p) => new URL(p.canonical).pathname === p.route)) {
  const previous = canonicalTitles.get(page.title);
  if (previous)
    errors.push({
      route: page.route,
      reason: `Duplicate canonical-page title: ${previous}`,
    });
  canonicalTitles.set(page.title, page.route);
}
const byRoute = new Map(pages.map((p) => [p.route, p]));
for (const url of sitemapUrls) {
  const page = byRoute.get(new URL(url).pathname);
  if (!page)
    errors.push({ route: url, reason: "Sitemap URL has no audited public page" });
  else if (new URL(page.canonical).href !== new URL(url).href)
    errors.push({ route: url, reason: "Sitemap URL is not canonical" });
}
const report = {
  auditedAt: new Date().toISOString(),
  publicPagesAudited: pages.length,
  pagesWithIndexFollow:
    pages.length -
    new Set(errors.filter((e) => e.reason.includes("directive")).map((e) => e.route))
      .size,
  sitemapCanonicalUrls: sitemapUrls.length,
  noncanonicalPublicAliases: pages.filter(
    (p) => new URL(p.canonical).pathname !== p.route,
  ).length,
  checks: [
    "unique titles for canonical pages",
    "description",
    "contextual keywords",
    "canonical",
    "robots and Googlebot index/follow",
    "Open Graph",
    "Twitter cards",
    "one H1",
    "parseable JSON-LD",
    "internal links",
    "sitemap routes",
  ],
  errors,
};
fs.writeFileSync("data/seo-audit.json", JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify(report, null, 2));
assert.equal(errors.length, 0, "SEO audit failed; see data/seo-audit.json");
