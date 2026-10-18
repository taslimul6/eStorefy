"use client";
import PartnerLink from "@/components/shared/PartnerLink";
import { useEffect, useState } from "react";
import Modal from "@/components/shared/Modal";
import { downloadText } from "@/lib/download";
export default function ProjectBriefDialog({ agency, open, services, onClose }) {
  const [brief, setBrief] = useState("");
  useEffect(() => {
    if (open) setBrief("");
  }, [open, services]);
  function generateBrief(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setBrief(
      `SHOPIFY PROJECT BRIEF\nAgency: ${agency.name}\n\nService: ${form.get("service")}\nCurrent website: ${form.get("website") || "Not supplied"}\nOur budget preference: ${form.get("budget")}\nTarget launch: ${form.get("timing")}\n\nGoals & requirements:\n${form.get("goals")}\n\nQuestions for your proposal:\n- Relevant projects and proposed delivery team\n- Deliverables, exclusions, milestones and pricing\n- Software and ongoing costs\n- Testing, handover and post-launch support\n\nPlease confirm availability and a realistic delivery timeline.\n\nPrepared with eStorefy. Budget preferences are not agency quotes.`,
    );
  }
  return (
    <Modal open={open} onClose={onClose} title="Your project brief.">
      <p className="sub">
        Create a brief to download. Nothing is submitted automatically.
      </p>
      {brief && (
        <div>
          <pre className="brief-preview">{brief}</pre>
          <div className="actions">
            <button
              className="btn dark"
              onClick={() => downloadText(`${agency.id}-project-brief.txt`, brief)}
            >
              Download brief
            </button>
            <PartnerLink className="btn">Contact this agency ↗</PartnerLink>
            <button className="text-link" onClick={() => setBrief("")}>
              Edit brief
            </button>
          </div>
          <p className="dialog-note">
            The contact button opens our partner redirect. Your brief is not sent;
            download it to keep a copy.
          </p>
        </div>
      )}
      {/* Keep inputs mounted so editing preserves the completed form. */}
      <form hidden={!!brief} key={services.join("|")} onSubmit={generateBrief}>
        <label className="field">
          What do you need?
          <select
            name="service"
            defaultValue={services.length === 1 ? services[0] : "Multiple services"}
          >
            {[...new Set(["Multiple services", ...agency.services, ...services])].map(
              (service) => (
                <option key={service}>{service}</option>
              ),
            )}
          </select>
        </label>
        <label className="field">
          Your website (optional)
          <input name="website" type="url" placeholder="https://yourstore.com" />
        </label>
        <div className="two">
          <label className="field">
            Budget preference
            <select name="budget">
              <option>Not decided — need guidance</option>
              <option>Under $5,000</option>
              <option>$5,000–$15,000</option>
              <option>$15,000–$50,000</option>
              <option>$50,000+</option>
            </select>
          </label>
          <label className="field">
            Target launch
            <select name="timing">
              <option>Flexible / exploring options</option>
              <option>Within 1–3 months</option>
              <option>Within 3–6 months</option>
              <option>More than 6 months</option>
            </select>
          </label>
        </div>
        <label className="field">
          Goals & must-haves
          <textarea
            name="goals"
            required
            maxLength={3000}
            defaultValue={
              services.length
                ? `Our priorities: ${services.join(", ")}.\nOur main goal: `
                : ""
            }
            placeholder="What should improve? What needs to be included?"
          />
        </label>
        <button className="btn dark">Generate my brief</button>
        <p className="dialog-note">
          Budget ranges are your preferences, not this agency’s prices.
        </p>
      </form>
    </Modal>
  );
}
