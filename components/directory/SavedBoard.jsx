"use client";
import Link from "next/link";
import { useShortlist } from "@/components/providers/ShortlistProvider";
import { downloadText, csvCell } from "@/lib/download";
import { priceLabel } from "@/lib/format";
export default function SavedBoard({ agencies }) {
  const { savedIds } = useShortlist();
  const saved = agencies.filter((agency) => savedIds.includes(agency.recordKey));
  function exportSaved() {
    const rows = [
      ["Name", "City", "Services", "Published pricing", "Profile path"],
      ...saved.map((agency) => [
        agency.name,
        agency.cityName,
        agency.services.join("; "),
        priceLabel(agency),
        agency.profilePath,
      ]),
    ];
    downloadText(
      "estorefy-shortlist.csv",
      "\ufeff" + rows.map((row) => row.map(csvCell).join(",")).join("\r\n"),
      "text/csv;charset=utf-8",
    );
  }
  return (
    <section className="rich board" id="my-board">
      <div className="board-head">
        <div>
          <div className="eyebrow">Keep your options together</div>
          <h2>Your expert shortlist.</h2>
          <p className="section-intro">
            Save promising profiles, compare their expertise and export your list.
          </p>
        </div>
        <button className="button" disabled={!saved.length} onClick={exportSaved}>
          Download shortlist ↓
        </button>
      </div>
      <div className="saved-items">
        {saved.length ? (
          saved.map((agency) => (
            <Link key={agency.recordKey} href={agency.profilePath}>
              {agency.name} ↗
            </Link>
          ))
        ) : (
          <p className="section-intro">
            Your shortlist is waiting. Tap a heart on a profile to save an expert.
          </p>
        )}
      </div>
      <p className="recent-note">Saved locally in this browser. No enquiry is sent.</p>
    </section>
  );
}
