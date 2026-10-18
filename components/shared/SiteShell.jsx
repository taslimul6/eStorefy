import Header from "./Header";
import Footer from "./Footer";

/** Owns the site-wide landmarks and container. Pages supply content only. */
export default function SiteShell({ children }) {
  return (
    <div className="site-shell">
      <a className="site-skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="site-container site-content">
        {children}
      </main>
      <div className="site-container">
        <Footer />
      </div>
    </div>
  );
}
