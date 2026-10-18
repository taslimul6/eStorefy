"use client";
import { useEffect, useState } from "react";
import { useShortlist } from "@/components/providers/ShortlistProvider";
import { useDirectory } from "./DirectoryContext";
import SavedBoard from "./SavedBoard";
import CompareDock from "./CompareDock";

let catalogRequest;
function loadCatalog() {
  catalogRequest ||= fetch("/api/agencies")
    .then((response) => {
      if (!response.ok) throw new Error("Directory unavailable");
      return response.json();
    })
    .catch((error) => {
      catalogRequest = null;
      throw error;
    });
  return catalogRequest;
}
/** Fetch the cross-city shortlist only when needed, rather than embedding it on every city page. */
export default function DirectoryTools({ agencies }) {
  const { savedIds } = useShortlist();
  const { comparedIds } = useDirectory();
  const [catalog, setCatalog] = useState(null);
  const [failed, setFailed] = useState(false);
  const needed = savedIds.length > 0 || comparedIds.length > 0;
  useEffect(() => {
    if (!needed) return;
    let active = true;
    loadCatalog()
      .then((items) => {
        if (active) {
          setCatalog(items);
          setFailed(false);
        }
      })
      .catch(() => {
        if (active) setFailed(true);
      });
    return () => {
      active = false;
    };
  }, [needed]);
  return (
    <>
      {failed && (
        <p role="status" className="sub">
          Cross-city saved profiles could not load.{" "}
          <a href="/agencies#my-board">Open the full directory</a> to see your shortlist.
        </p>
      )}
      <SavedBoard agencies={catalog || agencies} />
      <CompareDock agencies={catalog || agencies} />
    </>
  );
}
