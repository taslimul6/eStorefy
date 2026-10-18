# Shared layout and styling

app/layout.jsx is the sole entry point for global CSS, Analytics, ShortlistProvider and SiteShell.

components/shared/SiteShell.jsx owns the only site header, main landmark, footer and outer containers. Individual pages render content, never another site header/footer/main.

components/shared/Header.jsx owns the single navigation list and common actions. Active navigation follows the route. Shortlist links to the complete agency directory's saved board. Logo.jsx is shared by Header and Footer.

styles/site-shell.css owns container width, gutters, brand mark and navigation. All page edges align at a maximum outer width of 1260px, with responsive 36/24/16px gutters. Do not add page-specific rules for the header, logo, nav or outer width.

styles/directory.css and profile.css style agency content. apps.css styles apps content. site-refresh.css styles the homepage, informational text and footer content. Readable policy text uses an 800px inner text measure aligned to the common left edge.

Directory-only listing request functionality lives in components/directory/ListingRequest.jsx. App search and filtering remain in components/apps/Explorer.jsx. JSON data and route generation are unchanged.

## Agency and app action links

`lib/cta.js` owns the shared partner redirect URL. `components/shared/PartnerLink.jsx` renders sponsored external CTA links for agency/app cards, detail pages, and the project brief dialog. Profile titles and directory navigation still open internal pages; research, documentation, and Maps links retain their sources. Published agency contact details remain plain text. The eStorefy contact page retains the owner email reveal. Brief contents are never sent to the redirect.

## Global provider snapshot

`data/cities.js` combines the legacy route registry with the current per-city JSON snapshot through `lib/provider-data.js`. Original JSON files under `data/providers/cities` stay unchanged; normalization and source-aware supplementation happen in the loader. Published country and region are never replaced with US defaults for new cities. Business identities use website and individual partner profile URLs, with country-scoped business names only as a fallback. Directory location pages are not identity keys.

City pages serialize aggregate insights rather than every provider record. `DirectoryTools` loads the static `/api/agencies` catalog when shortlist/compare features need cross-city records. `LocationBrowser` filters the city summaries locally; `AgencyDirectory` shows 24 matching results at a time. Every public provider profile is indexable and every canonical provider appears in `app/sitemap.js`. `researchComplete` selects the best canonical source record independently from robots eligibility. `lib/provider-content.js` supplies labeled editorial context for sparse data without altering the original JSON. All legacy routes are covered by the enrichment tests.

## Shared SEO metadata

`lib/seo.js` owns metadata normalization and provider-specific metadata. Agency/city, Apps, homepage and information routes all use the shared helper. The root layout emits the website/publisher identity; category and app pages have source-based collection/application structured data. `scripts/audit-seo.mjs` checks the generated production HTML and sitemap after a build. No public-page preview environment guard changes indexability.
