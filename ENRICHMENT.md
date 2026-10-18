# eStorefy v6 — global provider enrichment

The supplied current snapshot has been integrated into the full website. The v6 revision makes every existing public page indexable and enriches shared metadata. It contains 500 city JSON files and 1,713 original provider–city rows. Historical duplicates and unmapped rows in the upload are research archives and are not separate live providers.

The merged website has **465 populated city collections across 121 countries, 1,939 provider–city profiles, and 1,720 unique providers**. Existing detailed US records are retained. The 35 empty source cities do not create public routes. There are still 100 app categories, 941 category-specific app routes, and 504 unique apps.

The sitemap has **2,798 canonical URLs**: 8 general pages, 465 city pages, all 1,720 canonical provider profiles, and 605 Apps URLs. All public content routes use `index, follow`, including previously excluded provider profiles. Whitespace-only variants of the same provider name now share a canonical destination, while their existing URLs remain available. Duplicate city/app paths retain deterministic canonical destinations. Empty source cities are still not fabricated as public routes.

## Changes

- Preserved all 378 original agency profile URLs, the shared header/footer, the compact homepage, and the centralized partner redirect for agency/app CTA buttons.
- Added global city JSON loading, optional-field normalization, country/region metadata, duplicate identity resolution and collision-safe slugs. London in Canada and the United Kingdom have different routes and visible country labels.
- Added city/country search on Locations and independent developer/consultant filters. Agency results show 24 at a time with a Show more button.
- Added source-based descriptions, FAQs, services, portfolio names, captured logo URLs and source dates where available. Editorial and indexed-evidence labels remain visible. Missing descriptions, ratings, reviews and prices are not invented.
- City insight cards use aggregate counts. The global shortlist catalog loads only when needed instead of being embedded in every city page.

## Data maintenance

`data/providers/cities/*.json` contains the 500 supplied current files, unchanged. Edit these per-city records for future updates. `data/legacy-cities.js` preserves existing route registration and original datasets. `lib/provider-data.js` supplements populated legacy fields rather than overwriting detailed research with sparse imports. `lib/agencies.js` owns public lookups and canonical identity.

Run `node scripts/report-enrichment.mjs` after editing the data to refresh `data/providers/integration-report.json`. The original supplied enrichment report is preserved as `data/providers/source-report.json`.

Source URLs, timestamps and raw provenance are preserved; this update does not perform a fresh external verification. Some captured images may be stale, unavailable, or not official logos. The UI falls back to explicitly labeled local directory artwork. Customer review text and project results are never fabricated.

## Deployment

This ZIP is the complete Next.js project. Extract `eStorefy`, then run `npm ci`, `npm test`, and `npm run build`. Use the existing Vercel project and set the root to the folder containing `package.json`. The production origin defaults to `https://estorefy.net`. This deliverable does not deploy the live website automatically.

## Verification

Production build and all 19 automated tests passed. The tests cover every original profile URL, imported source coverage, canonical targets, global countries, country/type filters, empty optional values and existing Apps routes. Generated HTML links and all 2,798 sitemap entries were checked against build routes, with no broken internal page links. SHA-256 comparisons confirmed that all 500 supplied current city JSON files remain unchanged. Local HTTP checks passed for the homepage, agencies, locations, Apps homepage/category, a new agency detail page, the public shortlist catalog, contact and sitemap.

Interactive browser/visual verification could not be completed in this environment: the browser executable was unavailable and its download failed. After deploying, check the mobile header, country search, Show more, save/compare and remote logo fallbacks in your browser. Supplied external source/image URLs were not independently reverified during integration.
