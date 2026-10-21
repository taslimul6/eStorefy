import Link from "next/link";

/** One brand mark, shared by the site header and footer. */
export default function Logo() {
  return (
    <Link className="brand-logo" href="/" aria-label="eStorefy home">
      <span className="brand-mark" aria-hidden="true">
        e
      </span>
      <span>eStorefy.</span>
    </Link>
  );
}
