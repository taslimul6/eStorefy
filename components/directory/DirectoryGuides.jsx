import SectionHeading from "@/components/shared/SectionHeading";
import { defaultGuides as defaultGuides } from "@/data/editorial";

export default function DirectoryGuides({ guides = defaultGuides }) {
  return (
    <section className="rich" id="guides">
      <SectionHeading
        eyebrow="Hire with a little more clarity"
        title="Questions worth asking."
      />
      <div className="guidegrid">
        {guides.map(([title, text]) => (
          <details key={title}>
            <summary>{title}</summary>
            <p>{text}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
