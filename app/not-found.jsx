import Link from "next/link";
export default function NotFound() {
  return (
    <main className="error-page">
      <h1>That profile is not in the directory.</h1>
      <p>Explore the available agencies or choose another city.</p>
      <Link href="/">Return to the directory</Link>
    </main>
  );
}
