import Logo from "./Logo";
export default function Footer() {
  return (
    <footer>
      <Logo />
      <p className="demo-note">
        Independent Shopify agency directory.
        <br />
        Publicly sourced profiles. No affiliation with or endorsement by Shopify.
      </p>
      <span>© {new Date().getUTCFullYear()} eStorefy</span>
    </footer>
  );
}
