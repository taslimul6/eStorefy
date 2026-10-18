import Link from "next/link";
import Logo from "./Logo";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-intro">
        <Logo />
        <p>Find the people and tools behind your next chapter in commerce.</p>
        <small>Independent directory. Not affiliated with or endorsed by Shopify.</small>
      </div>
      <div>
        <h2>Explore</h2>
        <Link href="/agencies">Shopify agencies</Link>
        <Link href="/apps">Shopify apps</Link>
        <Link href="/locations">Locations</Link>
      </div>
      <div>
        <h2>eStorefy</h2>
        <Link href="/about">About us</Link>
        <Link href="/contact">Contact & advertising</Link>
        <Link href="/editorial-policy">Editorial policy</Link>
      </div>
      <div>
        <h2>Information</h2>
        <Link href="/privacy-policy">Privacy policy</Link>
        <Link href="/terms">Terms of use</Link>
      </div>
      <div className="footer-bottom">
        © {new Date().getUTCFullYear()} eStorefy. <span>Made for the next chapter.</span>
      </div>
    </footer>
  );
}
