"use client";
import { createContext, useContext, useState } from "react";
import { emptyFilters } from "@/lib/filter-agencies";
const DirectoryContext = createContext(null);
export function DirectoryProvider({ children }) {
  const [filters, setFilters] = useState(emptyFilters);
  const [comparedIds, setComparedIds] = useState([]);
  function changeFilter(name, value) {
    setFilters((current) => ({ ...current, [name]: value }));
  }
  function resetFilters() {
    setFilters({ ...emptyFilters });
  }
  function chooseService(service) {
    changeFilter("service", service);
    document.getElementById("directory")?.scrollIntoView({ behavior: "smooth" });
  }
  function toggleCompare(id) {
    setComparedIds((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : current.length < 3
          ? [...current, id]
          : current,
    );
  }
  return (
    <DirectoryContext.Provider
      value={{
        filters,
        changeFilter,
        resetFilters,
        chooseService,
        comparedIds,
        toggleCompare,
        clearCompared: () => setComparedIds([]),
      }}
    >
      {children}
    </DirectoryContext.Provider>
  );
}
export function useDirectory() {
  return useContext(DirectoryContext);
}
