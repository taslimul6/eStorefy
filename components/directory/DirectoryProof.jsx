export default function DirectoryProof({ agencyCount, cityCount, serviceCount }) {
  return (
    <>
      <div className="proof">
        <div>
          <strong>{agencyCount}</strong>
          <span>Agency profiles</span>
        </div>
        <div>
          <strong>{cityCount}</strong>
          <span>Cities represented</span>
        </div>
        <div>
          <strong>{serviceCount}</strong>
          <span>Specialist service areas</span>
        </div>
        <div>Find the right expertise for the next stage of your business.</div>
      </div>
      <nav className="jumpnav" aria-label="Page sections">
        <a href="#services">Services</a>
        <a href="#directory">Expert directory</a>
        <a href="#locations">Find locally</a>
        <a href="#collections">Project types</a>
        <a href="#matchmaker">Find my match</a>
        <a href="#guides">Hiring guides</a>
      </nav>
    </>
  );
}
