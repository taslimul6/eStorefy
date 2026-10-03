"use client";
import { useState } from "react";
import Link from "next/link";
import Modal from "@/components/shared/Modal";
import { priceLabel, primaryRating } from "@/lib/format";
import { useDirectory } from "./DirectoryContext";
export default function CompareDock({ agencies }) {
  const { comparedIds, clearCompared } = useDirectory();
  const [open, setOpen] = useState(false);
  const selected = agencies.filter((agency) => comparedIds.includes(agency.recordKey));
  const rows = [
    ["Location", (a) => a.cityName],
    ["Services", (a) => a.services.join(", ")],
    ["Pricing context", priceLabel],
    ["Team", (a) => a.teamSize?.range || "Not published"],
    ["Shopify tier", (a) => a.shopify.partnerTier || "Not confirmed"],
    [
      "Published rating",
      (a) => {
        const r = primaryRating(a);
        return r
          ? `${r.value}/5 · ${r.reviewCount} reviews on ${r.platform}`
          : "Not available";
      },
    ],
  ];
  return (
    <>
      <div className="compare-dock" hidden={!selected.length}>
        <div>
          <strong>Your project. Your shortlist.</strong>
          <div className="docknames">
            {selected.map((agency) => agency.name).join(" · ")} ({selected.length}/3)
          </div>
        </div>
        <div className="dockactions">
          <button className="textbtn" onClick={clearCompared}>
            Clear
          </button>
          <button
            className="button lime"
            disabled={selected.length < 2}
            onClick={() => setOpen(true)}
          >
            Compare experts →
          </button>
        </div>
      </div>
      <Modal
        id="compareDialog"
        open={open}
        onClose={() => setOpen(false)}
        title="Compare the fit."
      >
        <p>
          Source snapshots, not a quality ranking. Selected-service fees are not project
          quotes.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Attribute</th>
                {selected.map((agency) => (
                  <th scope="col" key={agency.recordKey}>
                    <Link href={agency.profilePath}>{agency.name}</Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, getValue]) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  {selected.map((agency) => (
                    <td
                      style={{ whiteSpace: "normal", minWidth: 160, lineHeight: 1.6 }}
                      key={agency.recordKey}
                    >
                      {getValue(agency)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Modal>
    </>
  );
}
