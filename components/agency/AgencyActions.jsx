"use client";
import { createContext, useContext, useState } from "react";
import ProjectBriefDialog from "./ProjectBriefDialog";
const AgencyActionContext = createContext(null);
export default function AgencyActions({ agency, children }) {
  const [open, setOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  function openBrief(services = []) {
    setSelectedServices(services);
    setOpen(true);
  }
  return (
    <AgencyActionContext.Provider value={{ openBrief }}>
      {children}
      <ProjectBriefDialog
        agency={agency}
        open={open}
        services={selectedServices}
        onClose={() => setOpen(false)}
      />
    </AgencyActionContext.Provider>
  );
}
export function BriefButton({
  children = "Build a project brief",
  className = "btn dark",
  services = [],
}) {
  const { openBrief } = useContext(AgencyActionContext);
  return (
    <button className={className} onClick={() => openBrief(services)}>
      {children}
    </button>
  );
}
