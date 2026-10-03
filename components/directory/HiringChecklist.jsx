"use client";
import { useEffect, useState } from "react";
import { downloadText } from "@/lib/download";
import { hiringChecklist as defaultSteps } from "@/data/editorial";

export default function HiringChecklist({ steps = defaultSteps, storageKey = "all" }) {
  const [checked, setChecked] = useState([]);
  useEffect(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem(`estorefy-checklist-${storageKey}`) || "[]",
      );
      if (Array.isArray(saved))
        setChecked(
          saved.filter(
            (index) => Number.isInteger(index) && index >= 0 && index < steps.length,
          ),
        );
    } catch {}
  }, [storageKey, steps]);
  function toggle(index) {
    const next = checked.includes(index)
      ? checked.filter((item) => item !== index)
      : [...checked, index];
    setChecked(next);
    try {
      localStorage.setItem(`estorefy-checklist-${storageKey}`, JSON.stringify(next));
    } catch {}
  }
  return (
    <div className="panel">
      <div className="eyebrow">Your hiring checklist</div>
      <h2>
        A stronger brief.
        <br />A better conversation.
      </h2>
      <p className="section-intro">
        Work through these points before reaching out. Your progress stays in this browser
        when available.
      </p>
      {steps.map((step, index) => (
        <label className="checklist-item" key={step}>
          <input
            type="checkbox"
            checked={checked.includes(index)}
            onChange={() => toggle(index)}
          />
          {step}
        </label>
      ))}
      <div className="progress-track">
        <span style={{ width: `${(checked.length / steps.length) * 100}%` }} />
      </div>
      <p className="recent-note" aria-live="polite">
        {checked.length} of {steps.length} preparation steps complete
      </p>
      <button
        className="textbtn"
        onClick={() =>
          downloadText(
            "shopify-project-checklist.txt",
            steps
              .map((step, index) => `${checked.includes(index) ? "[x]" : "[ ]"} ${step}`)
              .join("\n"),
          )
        }
      >
        Download my checklist ↓
      </button>
    </div>
  );
}
