import Link from "next/link";
export default function Logo() {
  return (
    <Link className="logo" href="/" aria-label="eStorefy home">
      <span className="mark" aria-hidden="true">
        e
      </span>
      eStorefy.
    </Link>
  );
}
