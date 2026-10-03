"use client";
import { useState } from "react";
import AgencySection from "./AgencySection";
import { BriefButton } from "./AgencyActions";
import { discussionPoints } from "@/data/editorial";

export default function AgencyServices({ agency }) {
  const [selected, setSelected] = useState(0);
  const services = agency.services;
  function handleKeys(event, index) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % services.length;
    else if (event.key === "ArrowLeft")
      next = (index - 1 + services.length) % services.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = services.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    document.getElementById(`service-tab-${next}`)?.focus();
  }
  return (
    <AgencySection
      id="services"
      number="02"
      eyebrow="What they do"
      title={
        <>
          From storefront to
          <br />
          the systems behind it.
        </>
      }
    >
      <div
        className="service-tabs"
        role="tablist"
        aria-label="Published service capabilities"
      >
        {services.map((service, index) => (
          <button
            className="tab"
            key={service}
            id={`service-tab-${index}`}
            role="tab"
            aria-selected={selected === index}
            tabIndex={selected === index ? 0 : -1}
            aria-controls={`service-panel-${index}`}
            onKeyDown={(event) => handleKeys(event, index)}
            onClick={() => setSelected(index)}
          >
            {service}
          </button>
        ))}
      </div>
      {services.map((service, index) => (
        <div
          key={service}
          hidden={selected !== index}
          className="service-panel"
          id={`service-panel-${index}`}
          role="tabpanel"
          tabIndex={0}
          aria-labelledby={`service-tab-${index}`}
        >
          <h3>{service}</h3>
          <p className="muted">
            {agency.whatTheyDo?.find((item) => item.name === service)?.description ||
              `${agency.name} lists ${service}. Confirm the exact scope, deliverables and availability directly.`}
          </p>
          <div className="soft-label">WHAT TO INCLUDE IN YOUR PROJECT CONVERSATION</div>
          <ul className="check-list">
            {discussionPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="tags">
            {agency.technologies.map((technology) => (
              <span className="tag" key={technology}>
                {technology}
              </span>
            ))}
          </div>
          <BriefButton className="text-link" services={[service]}>
            Add this service to your brief
          </BriefButton>
        </div>
      ))}
      <p className="sub" style={{ marginTop: 14 }}>
        Discussion points help define scope; they are not promised deliverables.
      </p>
    </AgencySection>
  );
}
