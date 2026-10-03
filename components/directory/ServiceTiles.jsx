"use client";
import SectionHeading from "@/components/shared/SectionHeading";
import { serviceGroups } from "@/lib/services";
import { useDirectory } from "./DirectoryContext";
export default function ServiceTiles({ agencies }) {
  const { chooseService } = useDirectory();
  return (
    <section className="rich" id="services">
      <SectionHeading
        eyebrow="Start with what you need"
        title="Good projects start with the right expertise."
        description="From a first store to a more ambitious build."
      />
      <div className="categorytiles">
        {serviceGroups.map((service, index) => (
          <button
            className="categorytile"
            key={service}
            onClick={() => chooseService(service)}
          >
            <span className="symbol">{["◈", "⌘", "⇄", "◎", "↗"][index]}</span>
            <strong>{service}</strong>
            <small>
              {agencies.filter((agency) => agency.serviceGroups.includes(service)).length}{" "}
              specialists ↗
            </small>
          </button>
        ))}
      </div>
    </section>
  );
}
