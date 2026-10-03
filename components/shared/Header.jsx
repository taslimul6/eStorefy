"use client";
import Link from "next/link";
import Logo from "./Logo";
import { useShortlist } from "@/components/providers/ShortlistProvider";
export default function Header({ profile = false, onSaved, onSubmit }) {
  const { savedIds } = useShortlist();
  return (
    <header className={profile ? "header" : undefined}>
      <Logo />
      <nav aria-label="Main navigation">
        <Link href="/#directory">Find experts</Link>
        <Link href="/#services">Services</Link>
        <Link href="/#locations">Locations</Link>
      </nav>
      <div className="navright">
        {onSaved ? (
          <button className={profile ? "btn" : "button"} onClick={onSaved}>
            Shortlist {savedIds.length}
          </button>
        ) : (
          <Link className={profile ? "btn" : "button"} href="/#my-board">
            Shortlist {savedIds.length}
          </Link>
        )}
        {onSubmit && (
          <button className="button dark" onClick={onSubmit}>
            Get listed ↗
          </button>
        )}
      </div>
    </header>
  );
}
