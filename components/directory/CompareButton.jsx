"use client";
import { useDirectory } from "./DirectoryContext";
export default function CompareButton({ agency }) {
  const { comparedIds, toggleCompare } = useDirectory();
  const selected = comparedIds.includes(agency.recordKey);
  const full = comparedIds.length >= 3 && !selected;
  return (
    <button
      className="compare-pick"
      aria-pressed={selected}
      disabled={full}
      title={full ? "Remove one agency to compare another" : undefined}
      onClick={() => toggleCompare(agency.recordKey)}
    >
      {selected ? "✓ Comparing" : "+ Compare expert"}
    </button>
  );
}
