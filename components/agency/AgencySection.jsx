export default function AgencySection({
  id,
  number,
  eyebrow,
  title,
  children,
  className = "",
}) {
  return (
    <section className={`section ${className}`} id={id}>
      <div className="kicker">
        {number} / {eyebrow}
      </div>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
