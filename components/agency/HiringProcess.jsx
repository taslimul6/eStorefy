"use client";
import AgencySection from "./AgencySection";
import { downloadText } from "@/lib/download";
import { hiringProcess as steps } from "@/data/editorial";

export default function HiringProcess() {
  return (
    <AgencySection
      id="hiring"
      number="06"
      eyebrow="Plan the engagement"
      title={
        <>
          A clearer path
          <br />
          from first call to launch.
        </>
      }
    >
      <p className="muted">
        Use this buyer’s checklist to structure the conversation. It is suggested hiring
        guidance, not the agency’s confirmed delivery methodology.
      </p>
      <div className="process">
        {steps.map(([title, text], index) => (
          <div className="step" key={title}>
            <span className="step-num">0{index + 1}</span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="text-link"
        onClick={() =>
          downloadText(
            "agency-hiring-checklist.txt",
            steps.map(([title, text]) => `[ ] ${title}\n${text}`).join("\n\n"),
          )
        }
      >
        Download the hiring checklist
      </button>
    </AgencySection>
  );
}
