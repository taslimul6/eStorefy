"use client";
import { createContext, useContext, useEffect, useState } from "react";
const ShortlistContext = createContext(null);
const storageKey = "estorefy-shortlist-v1";

/** One browser-local shortlist is shared across directory and profile routes. */
export default function ShortlistProvider({ children }) {
  const [savedIds, setSavedIds] = useState([]);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(storageKey) || "[]");
      if (Array.isArray(stored))
        setSavedIds(stored.filter((id) => typeof id === "string"));
    } catch {
      /* Private browsing can disable local storage. The UI still works. */
    }
    setReady(true);
  }, []);
  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(savedIds));
    } catch {
      /* Keep the in-memory list. */
    }
  }, [savedIds, ready]);
  function toggleSaved(id) {
    setSavedIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }
  return (
    <ShortlistContext.Provider value={{ savedIds, toggleSaved }}>
      {children}
    </ShortlistContext.Provider>
  );
}
export function useShortlist() {
  const context = useContext(ShortlistContext);
  if (!context) throw new Error("useShortlist must be used inside ShortlistProvider.");
  return context;
}
