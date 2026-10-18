import { list, safeUrl } from "@/lib/apps";
export function External({ url, children, className }) {
  return safeUrl(url) ? (
    <a
      href={safeUrl(url)}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children} ↗
    </a>
  ) : null;
}
export function Faq({ items }) {
  const valid = list(items).filter(
    (x) => typeof x?.question === "string" && typeof x?.answer === "string",
  );
  return valid.length ? (
    <section className="apps-panel">
      <h2>Frequently asked questions</h2>
      {valid.map((f, i) => (
        <details key={i}>
          <summary>{f.question}</summary>
          <p>{f.answer}</p>
          {f.provenance && <small>{f.provenance}</small>}
        </details>
      ))}
    </section>
  ) : null;
}
export function JsonLd({ value }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(value).replace(/</g, "\\u003c") }}
    />
  );
}
