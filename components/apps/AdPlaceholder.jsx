import Link from "next/link";
export default function AdPlaceholder() {
  return (
    <section className="ad-placeholder" aria-label="Advertisement placeholder">
      <span>ADVERTISEMENT</span>
      <div className="ad-symbol" aria-hidden="true">
        ✳
      </div>
      <h2>
        Your brand,
        <br />
        right here.
      </h2>
      <p>Reach Shopify merchants exploring their next app.</p>
      <Link href="/contact">Advertise with eStorefy ↗</Link>
      <small>Ad space available</small>
    </section>
  );
}
