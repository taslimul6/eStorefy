import { PARTNER_REDIRECT_URL } from "@/lib/cta";

export default function PartnerLink({ children, className }) {
  return (
    <a
      href={PARTNER_REDIRECT_URL}
      className={className}
      target="_blank"
      rel="sponsored noopener noreferrer"
      title="Continue via eStorefy’s partner link"
    >
      {children}
    </a>
  );
}
