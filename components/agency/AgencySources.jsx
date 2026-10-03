import AgencySection from "./AgencySection";
import ExternalLink from "@/components/shared/ExternalLink";
import { formatDate } from "@/lib/format";
export default function AgencySources({ agency }) {
  return (
    <AgencySection
      id="sources"
      number="10"
      eyebrow="Profile transparency"
      title={
        <>
          Know where the details
          <br />
          come from.
        </>
      }
    >
      <p className="muted">
        Public agency information, with source attribution. Research snapshot:{" "}
        <strong>{formatDate(agency.dataQuality.observedAt)}.</strong>
      </p>
      <ol className="sources">
        {agency.sources.map((source, index) => (
          <li key={`${source.url}-${index}`}>
            <div>
              <ExternalLink href={source.url}>
                {new URL(source.url).hostname.replace(/^www\./, "")}
                {source.type.includes("shopify")
                  ? " — Partner Directory"
                  : " — Source page"}
              </ExternalLink>
              <small>
                {source.supports.join(", ").replaceAll(".", " / ")} · observed{" "}
                {formatDate(source.observedAt)}
              </small>
            </div>
          </li>
        ))}
      </ol>
      <div className="note" style={{ marginTop: 22 }}>
        Public research, not an agency-claimed profile. Missing values are not
        confirmations that a capability or review does not exist.
      </div>
      {agency.dataQuality.notes.map((note) => (
        <p className="sub" style={{ marginTop: 15 }} key={note}>
          {note}
        </p>
      ))}
    </AgencySection>
  );
}
