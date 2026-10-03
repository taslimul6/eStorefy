# Architecture and implementation notes

## Server content, small client boundaries

Route components are server components. `generateStaticParams` creates the city and agency routes from the registry. Agency overview, reviews, prices, sources and FAQs are rendered as HTML during the production build.

Client components own only the interactions that need state: directory filtering, saved IDs, comparison, tabs, native dialogs and project briefs. Client code that needs service categories imports `lib/services.js`, not the complete city dataset. Directory card payloads omit portfolio and source-provenance fields they do not use.

## Preserve the two approved designs

The directory and agency-profile CSS came from the approved HTML prototypes. Selectors were prefixed with `.directory-page` or `.profile-page` to avoid style leakage during client-side navigation. Green/lime colors, typography, grid layouts, cards, sidebar, modal and responsive patterns remain in place. Text varies with real research data; the static fictional examples were removed.

## One source of truth

Each city owns a research object in `data/cityName.js`; `data/newYork.js` retains the original NYC records and enriches matched records with the uploaded fields. The data layer adds route fields without mutating the record. `data/cities.js` registers all datasets. `lib/city-content.js` derives city summaries, FAQ answers, service counts, guides and collections from the actual records; `data/editorial.js` holds shared buyer guidance.

Homepage deduplication uses normalized agency website identity, falling back to ID when the website is unknown. A locally associated occurrence takes priority over a remote occurrence for the canonical URL. City membership arrays preserve homepage city-filter matches even after deduplication. City snapshots use the complete city record collection, not the deduplicated homepage count. Duplicate contextual routes canonicalize to the preferred profile and stay out of the sitemap.

## Local interactions and safety

Shortlist state is initialized after hydration to keep server and browser markup consistent. Storage errors do not break the page. Comparison is capped at three agencies. CSV cells are quoted and formula-like values are neutralized. Native dialogs handle modal focus and Escape.

Source data is rendered as React text. Only structured JSON-LD uses `dangerouslySetInnerHTML`, with `<` escaped. No arbitrary HTML from agency sources is injected into the content.

## Indexing and maintenance

Filter controls do not generate thousands of query-parameter routes. Each city route renders its full initial collection. City and profile URLs are real internal links, and every canonical agency profile is in the sitemap. Updating a record requires a new build; there is no implied real-time scraper or scheduled refresh.

Third-party ratings are useful visible reference material but are not presented as ratings collected by eStorefy. Structured data therefore omits `aggregateRating`. Do not add fabricated reviews, rating distributions or rich-result promises.
