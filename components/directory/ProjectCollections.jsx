"use client";
import SectionHeading from "@/components/shared/SectionHeading";
import { useDirectory } from "./DirectoryContext";
import { defaultCollections as defaultCollections } from "@/data/editorial";

export default function ProjectCollections({ collections = defaultCollections }) {
  const { chooseService } = useDirectory();
  return (
    <section className="rich" id="collections">
      <SectionHeading
        eyebrow="Your next move"
        title="A specialist for every stage."
        description="Explore talent around the outcome you need."
      />
      <div className="collections">
        {collections.map((item, index) => (
          <button
            className="collection"
            key={item.service}
            onClick={() => chooseService(item.service)}
          >
            <span className="num">0{index + 1} /</span>
            <strong>{item.title}</strong>
            <small>{item.text}</small>
            <span>Explore {item.service.toLowerCase()} ↗</span>
          </button>
        ))}
      </div>
    </section>
  );
}
