# eStorefy — complete project, revised homepage and Apps directory

This is the full merged Next.js project, not a patch. It includes the original agency directory, existing Analytics tag GT-PJ4NLK4K, 100 Apps categories and all 941 category-specific app profiles (504 unique apps).

## Run locally

Use Node.js 20.9 or newer. Extract the ZIP and open the eStorefy folder containing package.json:

```sh
npm ci
npm run dev
```

For a production build:

```sh
npm run build
npm start
```

## Deploy to Vercel

Copy this project source into your existing Git repository, commit and push. Keep the repository's existing .git folder. Do not remove newer files unrelated to this update.

Vercel settings: Framework Next.js; install command npm ci; build command npm run build; output directory use the framework default; root directory must be the folder containing package.json. If the repository contains the outer eStorefy folder, select eStorefy as Root Directory.

Production environment: NEXT_PUBLIC_SITE_URL=https://estorefy.net. The source already defaults to this origin. Existing Google tag GT-PJ4NLK4K is preserved in app/layout.jsx; no extra Analytics configuration is needed for this tag.

After deployment visit /apps and /sitemap.xml. Sitemap includes the original canonical agency URLs plus 605 Apps URLs. New category JSON files can be added under data/apps/ and will be included on the next build; slugs must remain unique and stable.

## Validation and research

Production build and 11 tests passed. All generated Apps pages were checked for titles, canonical targets and internal links. Original Analytics layout and agency data were preserved. Browser interaction/visual checks were unavailable in this environment; check the pages after deployment.

App prices/ratings are snapshots from the supplied research. Editorial descriptions, FAQs and general setup guidance carry their source/provenance labels and still need editorial review. Generic setup steps may not suit each app. The directory does not claim hands-on testing.

The ZIP excludes Git history, node_modules, build/cache output and local .env files. Reinstall dependencies with npm ci. Optional environment examples are included in .env.example.

## October 13 design revision

Homepage: exactly 15 featured agency cards, 15 distinct featured app cards, and 20 location links. Full agency browsing is at /agencies and every available city is at /locations.

Apps: left filters on desktop (stacked on mobile), refreshed cards and detail layout, two labelled advertisement placeholders replacing the developer/research sidebar, and up to six other apps from the same category. Original provenance stays in JSON and relevant editorial labels remain in page content.

Footer links to About, Contact, Editorial Policy, Privacy Policy and Terms. Contact uses a reveal-email button for ads.taslimul@gmail.com and has no form. The reveal is a UI convenience, not an anti-scraping or access-control guarantee.

Sitemap has 810 unique URLs. Production build and 11 tests passed. Generated HTML confirms homepage counts, contact's initial concealed email state and revised sections on all 941 detail pages. Interactive browser and visual QA remain unverified in this environment. Policy pages describe the implemented site; review them as the site's data practices change.

## Shared brand layout revision

The root SiteShell now renders one Header, Footer and main landmark for all routes. Page-specific header/logo/container overrides were removed. Every route shares a 1260px outer container and responsive gutters, while long informational text retains an 800px readable inner measure aligned to the same left edge. See ARCHITECTURE.md for component and CSS ownership. Analytics and all app/agency datasets are preserved. Browser visual checks remain unverified; build and generated markup checks are used for this package.

## October 15 CTA update

Agency/app cards and detail contact, check-app and app-plan actions use https://shopify.pxf.io/estorefy via the shared PartnerLink component and lib/cta.js constant. Brief downloads remain local; the outgoing brief contact action uses the same redirect and does not send user data. Internal profile/title links, research sources, maps, documentation and the eStorefy owner contact page retain their purpose. Production build and all 11 tests passed. Deploy this full source project to activate the change; this ZIP does not itself update the live site.

## October 17 global data enrichment (v5)

This section supersedes the old agency counts above. The full project now includes 465 populated city collections across 121 countries, 1,939 provider-city profiles and 1,720 unique providers. Apps counts remain unchanged. The v6 revision expands the sitemap to 2,798 canonical URLs. All public profiles use index, follow, including previously sparse records. All 378 prior agency URLs are preserved. See ENRICHMENT.md and data/providers/integration-report.json for integration policy and maintenance.

## October 18 SEO revision (v6)

All existing public content pages are indexable, including preview builds as explicitly requested. Canonical duplicates remain consolidated in the sitemap. The robots file permits public-page crawling and excludes only the internal JSON API. Metadata includes page-specific titles, descriptions, contextual keywords, canonical URLs, Open Graph, Twitter cards, and index/follow directives. Sparse profiles have labeled editorial guidance, not invented business claims. Framework-generated 404/error responses are not valid content pages and are not submitted as indexable URLs.

After the production build, run `npm run seo:audit` to reproduce the complete public-page SEO checks. See SEO-UPDATE.md and data/seo-audit.json for the release audit. The v6 sitemap has 2,798 canonical URLs after consolidating a whitespace-only duplicate business name. Existing public page URLs remain available.
