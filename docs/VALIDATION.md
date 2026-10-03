# Validation

The production build prerenders the homepage, 30 city directories and 378 city-specific agency routes. New York retains its original 30 profiles; the other cities contain 12 records each. Website/ID deduplication produces 167 canonical agency profiles.

## Data and routing checks

`npm test` covers unique routes, canonical target resolution, preserved New York records, homepage city-membership filtering, remote address rules, pricing filters, search, shortlist filters, structured data and CSV safety.

The sitemap includes the homepage, 30 city URLs and 167 canonical profile URLs (198 total). Duplicate agency occurrences have working city-specific URLs and point to the preferred canonical profile.

## Browser checks

Production browser checks cover the 30 city links, deduplicated homepage cards, city filters, full-card pointer navigation, independent Save/Compare controls, service tabs, dynamic FAQ content, mobile overflow, and broken-logo fallbacks. The image test deliberately blocks the remote favicon service, including failures before hydration.

Desktop and 390px mobile layouts were visually reviewed. Branded fallback monograms and cover artwork are local assets, with fixed image dimensions.

Every generated city/profile route is checked for HTTP 200, canonical metadata, a description, a social image and parseable JSON-LD. Data-driven FAQ schemas are compared with the displayed question count. Unknown city/profile routes return 404.

## Scope

This update integrates the supplied research; it does not perform new agency verification. Local/metro associations and remote options remain distinct. Missing ratings, contact information, office addresses and pricing are not fabricated. AI/editorial descriptions retain provenance.

Live hosting, automatic scraping, online listing submissions and email delivery are not configured. A data change requires a new production build and deployment. Technical SEO and structured data do not guarantee rankings or rich results.
