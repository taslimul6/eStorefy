"use client";
import { useShortlist } from "@/components/providers/ShortlistProvider";
export default function SaveButton({ agency, compact = false, className = "btn" }) {
  const { savedIds, toggleSaved } = useShortlist();
  const saved = savedIds.includes(agency.recordKey);
  return (
    <button
      className={className}
      aria-pressed={saved}
      aria-label={`${saved ? "Unsave" : "Save"} ${agency.name}`}
      onClick={() => toggleSaved(agency.recordKey)}
    >
      {compact ? (saved ? "♥" : "♡") : saved ? "Saved ♥" : "Save agency ♡"}
    </button>
  );
}
