/** Shared site chrome and width are provided by the root SiteShell. */
export default function Layout({ children }) {
  return (
    <div className="apps-page">
      <div className="page-spacing">{children}</div>
    </div>
  );
}
