import Link from "next/link";
import AgencyCard from "@/components/directory/AgencyCard";
import { DirectoryProvider } from "@/components/directory/DirectoryContext";
import DirectoryTools from "@/components/directory/DirectoryTools";
import AppCard from "@/components/apps/AppCard";
import { getAllAgencies, getCities, toDirectoryCard } from "@/lib/agencies";
import { getAppDirectory, appSummary } from "@/lib/apps";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({
  title: "Shopify Agencies, Apps & Experts",
  description:
    "Discover Shopify agencies, useful apps and specialists by location. Find the people and tools for your next chapter.",
  path: "/",
  keywords: [
    "Shopify agencies",
    "Shopify apps",
    "Shopify developer directory",
    "Shopify store design",
    "Shopify integrations",
  ],
});
export default function Home() {
  const all = getAllAgencies().map(toDirectoryCard);
  const featured = all.slice(0, 15);
  const cities = [...getCities()].sort(
    (a, b) => (a.priorityRank ?? 999) - (b.priorityRank ?? 999),
  );
  const selected = [];
  const seen = new Set();
  for (const c of getAppDirectory().categories) {
    const a = c.apps.find((a) => !seen.has(a.identity));
    if (a) {
      seen.add(a.identity);
      selected.push({ ...appSummary(a), path: a.canonicalPath });
    }
    if (selected.length === 15) break;
  }
  return (
    <div className="directory-page compact-home">
      <DirectoryProvider>
        <div className="page-group">
          <div>
            <section className="home-hero">
              <div>
                <p className="eyebrow">PEOPLE + TOOLS FOR BETTER COMMERCE</p>
                <h1>
                  Your next chapter.
                  <br />
                  <em>The right Shopify partners.</em>
                </h1>
                <p>
                  Discover the agencies and apps that help bring your store’s next idea to
                  life.
                </p>
                <div className="home-actions">
                  <Link className="button lime" href="/agencies">
                    Find an agency ↗
                  </Link>
                  <Link className="button" href="/apps">
                    Explore apps ↗
                  </Link>
                </div>
              </div>
              <div className="home-hero-note">
                <span>✳</span>
                <h2>
                  Great stores.
                  <br />
                  Good company.
                </h2>
                <p>Agencies · Apps · Expertise</p>
              </div>
            </section>
            <section id="directory" className="home-section">
              <div className="section-heading-row">
                <div>
                  <p className="eyebrow">MEET YOUR NEXT PARTNER</p>
                  <h2>Featured agencies</h2>
                </div>
                <Link href="/agencies">Browse all agencies ↗</Link>
              </div>
              <p className="section-note">
                15 profiles from our directory. Featured placement is not a quality
                ranking.
              </p>
              <div className="home-agency-grid">
                {featured.map((a, i) => (
                  <AgencyCard key={a.id} agency={a} index={i} />
                ))}
              </div>
            </section>
            <section className="home-section" id="featured-apps">
              <div className="section-heading-row">
                <div>
                  <p className="eyebrow">BUILD YOUR TOOLKIT</p>
                  <h2>Featured Shopify apps</h2>
                </div>
                <Link href="/apps">Explore all categories ↗</Link>
              </div>
              <p className="section-note">
                15 apps from different categories to start exploring. Listing data, not
                hands-on recommendations.
              </p>
              <div className="apps-grid">
                {selected.map((a) => (
                  <AppCard key={a.path} app={a} />
                ))}
              </div>
            </section>
            <section className="home-section" id="locations">
              <div className="section-heading-row">
                <div>
                  <p className="eyebrow">EXPERTISE, CLOSER TO HOME</p>
                  <h2>Top locations to explore</h2>
                </div>
                <Link href="/locations">All locations ↗</Link>
              </div>
              <div className="home-locations">
                {cities.slice(0, 20).map((c) => (
                  <Link key={c.id} href={`/${c.route}`}>
                    <strong>{c.name}</strong>
                    <span>{c.dataset.agencies.length} listings ↗</span>
                  </Link>
                ))}
              </div>
            </section>
            <details className="home-saved" id="my-board">
              <summary>Your saved agencies</summary>
              <DirectoryTools agencies={featured} />
            </details>
          </div>
        </div>
      </DirectoryProvider>
    </div>
  );
}
