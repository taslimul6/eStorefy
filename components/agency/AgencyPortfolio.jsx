"use client";
import { useState } from "react";
import AgencySection from "./AgencySection";
import Modal from "@/components/shared/Modal";
import ExternalLink from "@/components/shared/ExternalLink";
export default function AgencyPortfolio({ agency }) {
  const [selected, setSelected] = useState(null);
  return (
    <AgencySection
      id="work"
      number="03"
      eyebrow="Selected client work"
      title="Names from their portfolio."
    >
      <p className="muted">
        A starting point for evaluating experience. Explore the original source and
        confirm what the agency delivered on each engagement.
      </p>
      {agency.portfolio.length ? (
        <div className="work-grid">
          {agency.portfolio.map((project, index) => (
            <article className="work-card" key={`${project.client}-${index}`}>
              <div className="work-art">
                <small>Selected client</small>
                <strong>{project.client}</strong>
                <span>AGENCY-REPORTED WORK</span>
              </div>
              <div className="work-body">
                <h3>{project.client}</h3>
                <p>Featured in published work or client information for {agency.name}.</p>
                <button className="text-link" onClick={() => setSelected(project)}>
                  Explore project context
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="portfolio-empty">
          <h3>Project examples have not been captured yet.</h3>
          <p className="sub">
            Ask {agency.name} for recent, relevant work and the team’s role on each
            project.
          </p>
          {agency.website && (
            <ExternalLink className="text-link" href={agency.website}>
              Visit the agency website
            </ExternalLink>
          )}
        </div>
      )}
      <p className="sub" style={{ marginTop: 15 }}>
        {agency.portfolioNotes ||
          "Text covers identify clients; they are not project screenshots. Budgets, timelines and performance results have not been independently verified."}
      </p>
      <Modal
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.client || "Project context"}
      >
        <p className="muted">
          This client name appears in the agency’s published work or client information.
          It does not by itself establish the full scope of work.
        </p>
        <h3>What to ask about this engagement</h3>
        <ul className="check-list">
          <li>Which deliverables did the agency own?</li>
          <li>Was Shopify used, and which features were customized?</li>
          <li>What made this project similar to yours?</li>
          <li>Is a recent reference or detailed case study available?</li>
        </ul>
        {selected?.sourceUrl && (
          <ExternalLink className="btn dark" href={selected.sourceUrl}>
            View original source
          </ExternalLink>
        )}
      </Modal>
    </AgencySection>
  );
}
