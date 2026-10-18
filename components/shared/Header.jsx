"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { useShortlist } from "@/components/providers/ShortlistProvider";

const navigation = [
  {
    href: "/agencies",
    label: "Find experts",
    matches: (path) => path === "/agencies" || path.startsWith("/shopify-agency"),
  },
  {
    href: "/apps",
    label: "Apps",
    matches: (path) => path === "/apps" || path.startsWith("/apps/"),
  },
  { href: "/locations", label: "Locations", matches: (path) => path === "/locations" },
  { href: "/contact", label: "Contact", matches: (path) => path === "/contact" },
];

/** The same navigation and actions are rendered on every route. */
export default function Header() {
  const pathname = usePathname();
  const { savedIds } = useShortlist();
  return (
    <header className="site-header">
      <div className="site-container site-header-inner">
        <Logo />
        <nav className="site-nav" aria-label="Main navigation">
          {navigation.map(({ href, label, matches }) => (
            <Link
              key={href}
              href={href}
              aria-current={matches(pathname || "") ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="site-header-actions">
          <Link className="site-button" href="/agencies#my-board">
            Shortlist <span>{savedIds.length}</span>
          </Link>
          <Link className="site-button site-button-primary" href="/contact">
            Get in touch ↗
          </Link>
        </div>
      </div>
    </header>
  );
}
