"use client";
import { useState } from "react";
import { BriefButton } from "./AgencyActions";
export default function ProjectFit({ agency }) {
  const [selected, setSelected] = useState([]);
  const choices = agency.services.slice(0, 4);
  function toggle(service) {
    setSelected((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service],
    );
  }
  return (
    <section className="section" id="fit">
      <div className="fit-box">
        <div className="fit-head">
          <div>
            <div className="eyebrow">Your project, your priorities</div>
            <h2 style={{ marginTop: 13 }}>
              Is this the right
              <br />
              conversation to start?
            </h2>
          </div>
          <div className="fit-count">
            {selected.length}/{choices.length}
            <small>needs selected</small>
          </div>
        </div>
        <p className="sub">
          Select the published services you need. Add them to a useful starting brief.
        </p>
        {choices.map((service) => (
          <label className="fit-option" key={service}>
            <input
              type="checkbox"
              checked={selected.includes(service)}
              onChange={() => toggle(service)}
            />
            {service}
          </label>
        ))}
        <div className="fit-result" aria-live="polite">
          {selected.length
            ? `${selected.length} of your selected needs align with published services. Confirm relevant experience, budget and delivery capacity before choosing.`
            : "Choose your priorities to see how they align with the published services."}
        </div>
        <BriefButton services={selected}>Build my project brief</BriefButton>
      </div>
    </section>
  );
}
