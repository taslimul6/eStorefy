"use client";
import { useEffect, useState } from "react";
const links = [
  ["overview", "Overview"],
  ["services", "Services"],
  ["work", "Portfolio"],
  ["reviews", "Reviews"],
  ["pricing", "Pricing"],
  ["faq", "FAQs"],
];
export default function ProfileNav({ name }) {
  const [active, setActive] = useState("overview");
  useEffect(() => {
    let ticking = false;
    function update() {
      let current = "overview";
      for (const [id] of links)
        if (document.getElementById(id)?.getBoundingClientRect().top <= 150) current = id;
      setActive(current);
      ticking = false;
    }
    function handleScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="page-nav">
      <nav className="wrap nav-inner" aria-label="On this page">
        {links.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? "active" : ""}
            aria-current={active === id ? "location" : undefined}
          >
            {label}
          </a>
        ))}
        <span className="nav-rating">{name}</span>
      </nav>
    </div>
  );
}
