# eStorefy v6 — public-page SEO update

All **3,454 existing public content routes** now explicitly permit indexing and link following. This includes all 1,939 provider–city profiles, the city directories, the Apps routes, homepage and information pages. Preview builds use the same indexability policy, as requested.

The sitemap contains **2,798 canonical URLs**: 8 general pages, 465 city pages, 1,720 canonical provider profiles, and 605 Apps URLs. Duplicate provider/app routes remain accessible and indexable, with canonical links to one preferred profile. A whitespace-only variation of the same business name was consolidated; its existing URL remains available.

## Metadata and content

- All public pages use the shared metadata layer: page-specific title, concise description, contextual keywords, canonical URL, Open Graph, Twitter image cards, and explicit robots/Googlebot directives.
- Provider titles distinguish agencies, developers, freelancers and consultants. Names, real service categories, cities and countries supply relevant search terms.
- City metadata uses the actual location and researched collection. App categories retain “Best Shopify [Category] Apps” titles; individual app metadata uses its recorded name/category/features.
- About, Contact, Privacy, Terms and Editorial Policy now have descriptions explaining their actual content rather than generic placeholder copy.
- Sparse profiles receive clearly labeled editorial overviews, planning guidance and factual FAQs. Services, prices, ratings, office verification and project results are never invented.
- Website/publisher identity, provider profile/entity information, category collections, app software information and breadcrumbs use structured data where supported by the supplied fields.

## Verification and maintenance

Run `npm test`, `npm run build`, then `npm run seo:audit`. The audit checks every generated public HTML page for titles, descriptions, keywords, canonical URLs, robots/Googlebot index/follow, Open Graph, Twitter cards, one H1, parseable JSON-LD, internal links and sitemap membership. Canonical-page titles must be unique. Results are saved to `data/seo-audit.json`.

`npm run data:report` updates `data/providers/integration-report.json`. Raw supplied city JSON files remain unchanged. `lib/provider-content.js` provides editorial context separately from the original research.

The robots file allows public crawling and excludes the internal JSON API. Unknown/404/error routes remain error responses rather than submitted content. Canonicalization intentionally identifies duplicate pages; an indexable directive is permission to crawl/index, not a claim that a search engine has indexed the page.

The full source ZIP requires deployment to update the live website. Browser visual verification remains unavailable in this environment; the changes retain the existing layout and shared UI components.

## v6.1 hero button fix

The homepage Explore apps action now uses a transparent background and explicit white text, with a lime text/border hover state. This scoped rule overrides the generic white button background in the dark hero. The primary lime action and other website buttons retain their styles.
