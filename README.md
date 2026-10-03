# eStorefy — Shopify Agency Directory

A readable Next.js App Router conversion of the approved eStorefy directory and agency-profile designs. The original CSS has been preserved and scoped per page. This edition includes all 30 uploaded US city collections, retaining the original 30 New York profiles. Research data, presentation components and interactive state are separate.

## Run locally

Requires Node.js 20.9 or later (Node 22 or 24 LTS recommended).

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`. On Windows, copy `.env.example` to `.env.local` using File Explorer or `copy .env.example .env.local`.

```bash
npm test
npm run build
npm start
```

The package lock is included. Production uses Next.js 16.3.8 and React 19.3.0.

## Routes

| Page                            | URL                                     |
| ------------------------------- | --------------------------------------- |
| Homepage: all registered cities | `/`                                     |
| New York city directory         | `/shopify-agency-in-newyork`            |
| Austin directory                | `/shopify-agency-in-austin`             |
| Agency details                  | `/shopify-agency-in-newyork/blueswitch` |
| XML sitemap                     | `/sitemap.xml`                          |
| Crawl rules                     | `/robots.txt`                           |

The old `/shopify-agency-newyork`, misspelled `/shopify-agency-newyouk`, and requested `/home/Shopify-agency-in-newYork` paths permanently redirect to the canonical city route. Their agency-detail paths also redirect. `/home` redirects to `/`.

Only researched, registered cities produce routes. Unknown city and agency paths return a real 404.

## Project map

```text
app/
  page.jsx                          All-city homepage
  [cityRoute]/page.jsx               Reusable city page
  [cityRoute]/[agencySlug]/page.jsx   Reusable agency page
  sitemap.js                        Generated from city registry
  robots.js                         Preview-aware crawl rules
components/
  directory/                        Cards, filters, comparison, city insights
  agency/                           Profile sections and brief builder
  shared/                           Dialog, header, footer, links, JSON-LD
  providers/                        Browser-local shortlist state
data/
  newYork.js                        Enriched New York research (30 agencies)
  austin.js, chicago.js, ...         One module per city (30 total)
  editorial.js                      Shared hiring guidance
  cities.js                         Registry importing every city dataset
lib/
  agencies.js                       Deduplicated profiles and city memberships
  city-content.js                   City copy and FAQs derived from collection facts
  filter-agencies.js                Pure filtering and sorting
  services.js                       Small service-group definitions
  format.js                         Honest price, rating and date formatting
  seo.js                            Metadata and structured data
styles/
  directory.css                     Scoped approved directory styles
  profile.css                       Scoped approved profile styles
  base.css                          Shared defaults and integration rules
tests/
  data.test.js                      Data, filtering and SEO invariants
```

Components are split by responsibility, not by every HTML element. Route files compose small sections. English comments explain data boundaries and non-obvious decisions. Prettier formats all source files.

## Adding another city

1. Create `data/yourCity.js` using the same dataset shape as `data/newYork.js`: `{ metadata, agencies }`.
2. Keep stable, URL-safe agency `id` values. Preserve `null` for unknown facts and use empty arrays when no entries were captured.
3. Import the dataset in `data/cities.js` and add a city record:

```js
import yourCity from "./yourCity.js";

// Add before .map(createCityContent) in the city registry:
{
  id: "your-city",
  route: "shopify-agency-in-yourcity",
  dataset: yourCity,
}
```

4. Include `metadata.city`, `metadata.stateCode`, and `metadata.researchedAt`. Add local thumbnail/social assets for new agencies (see below).
5. Run `npm test` and `npm run build`, then redeploy. Update the fixture count assertion when deliberately expanding the dataset.

The homepage, city links, static city pages, agency pages and sitemap use this registry. No copied page templates are needed. Homepage cards deduplicate agencies by website; each city can retain its own contextual profile route.

## Data and pricing

- The supplied ZIP contains 360 listings (12 per city). Eighteen additional original NYC profiles are retained: **378 city-specific listings**, with **167 canonical profile records** after website/ID deduplication.
- Every city has its own `data/cityName.js` module. New York remains `data/newYork.js`.
- `shortDescription`, `longDescription`, `whatTheyDo`, `faqs`, portfolio, reviews and provenance drive profile sections. City statistics, FAQ, project collections and hiring guides derive from each dataset.
- The new source archive contains local/metro and remote-serving records; remote providers are explicitly labeled, with no invented local offices. These are supplied research snapshots, not newly verified facts.
- Some entries represent a New York office while their primary location is elsewhere. The location relationship and research caveats are shown.
- Ratings remain attributed to their own platforms. No combined rating or fabricated testimonial is created.
- `pricing.selectedServices` is **not** a full-project minimum. Budget filters use only `pricing.projectMinimum` in USD. Unknown project minimums are excluded when a budget limit is selected.
- Partner-since dates are not founding dates.
- Portfolio covers are text treatments identifying reported clients, not fabricated project screenshots.
- Missing information has a visible fallback; it is never converted to zero or a false claim.

## Working interactions

Search; country/city/type/service/budget filters; sort; grid/table view; three-agency comparison; persistent local shortlist; CSV export; city statistics; matchmaker; hiring checklist; service tabs; portfolio dialogs; project-fit checklist; project brief download; email drafts; share links; native FAQ disclosures; sticky desktop and mobile contact controls.

Contact actions open an external website, telephone handler or email draft only after the visitor clicks. No messages are sent automatically.

The Get listed form downloads a request. A backend submission/review workflow is **not connected**. There is no database, authentication, payment integration or automatic scraper in this project.

## SEO implementation

- Server-rendered content and pre-generated agency/city pages.
- City-specific titles/descriptions, self-canonical city pages, and canonical consolidation for repeated agencies.
- Open Graph and Twitter metadata with local 1200 × 630 preview images for every city and canonical agency.
- CollectionPage + ItemList, ProfilePage + Organization, breadcrumbs, and FAQPage markup matching visible data-driven questions. FAQ markup does not guarantee search rich results.
- Crawlable full-card links, an XML sitemap of 198 canonical URLs (home + 30 cities + 167 profiles), robots.txt and real 404s.
- Repeated city-specific agency routes remain usable, but canonicalize to one preferred profile. A local/metro-associated occurrence is preferred over a remote occurrence.
- Permanent redirects for historical paths.
- JSON-LD escapes `<` to prevent script termination by data content.
- Preview deployments (`VERCEL_ENV=preview`) set noindex and disallow crawling.
- No copied third-party `aggregateRating` or unsupported review-rich-result markup.
- No automatic changes to research dates; sitemap dates reflect the source snapshot.

Set `NEXT_PUBLIC_SITE_URL=https://estorefy.net` for production. The codebase does not connect or overwrite the live domain. Technical SEO cannot guarantee ranking; content accuracy, maintenance, uniqueness and real usefulness remain necessary.

## Deploy on Vercel

Import this folder as a repository, select Next.js, and set `NEXT_PUBLIC_SITE_URL`. Use `npm run build`; no custom output directory is needed. Connect the real domain only when you are ready. A new data commit and deployment refresh the static pages.

## Formatting

```bash
npm run format
npm run format:check
```

For detailed design and SEO decisions, see `docs/ARCHITECTURE.md`.

## Images and full-card links

`public/images/agencies/[agency-id].svg` contains cover artwork and `public/images/logos/[agency-id].svg` contains branded monograms. Run `node scripts/generate-thumbnails.mjs` after adding agencies. It is a directory thumbnail, not a claimed official logo or project screenshot. Where supplied, the website favicon appears as a small icon; missing, placeholder or failed URLs fall back to local artwork. `AgencyImage.jsx` owns this behavior. `public/images/social/` contains local PNG share previews, so social cards do not depend on a remote logo service.

When adding an agency, provide its SVG thumbnail and PNG social preview, or reuse a deliberate local default and update the paths. Keep supplied logo URLs in `logoUrl` and describe their origin in `logoType`.

Card titles use a native stretched link over the card surface. Save, Compare and the secondary profile link have their own interaction layer. Keyboard navigation and opening links in a new tab continue to work; buttons are not nested inside links.

## Windows setup troubleshooting

Extract the ZIP first and open a terminal **inside the folder containing `package.json`**. Run `npm ci` before `npm run dev`. If Windows reports `'next' is not recognized`, dependencies have not installed successfully; inspect the `npm ci` error. No global Next.js installation is required.
#   e S t o r e f y  
 