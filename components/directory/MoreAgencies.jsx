import SectionHeading from "@/components/shared/SectionHeading";
import AgencyCard from "./AgencyCard";
export default function MoreAgencies({ agencies }) {
  return (
    <section className="rich" id="recent">
      <SectionHeading
        eyebrow="More names for your shortlist"
        title="More expertise to explore."
        description="A selection from the current research collection—not a sponsored ranking."
      />
      <div className="compactcards">
        {agencies.slice(0, 3).map((agency, index) => (
          <AgencyCard agency={agency} index={index + 2} compact key={agency.recordKey} />
        ))}
      </div>
    </section>
  );
}
