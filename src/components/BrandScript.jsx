export const BRAND_MARK_SRC = "/assets/kiki-logo-mark.png";

// Script wordmark with its leading "K" swapped for the logo mark.
export default function BrandScript({ label, className }) {
  const hasK = /^k/i.test(label);

  return (
    <span className={className}>
      {hasK && <img className="brand-k" src={BRAND_MARK_SRC} alt="K" />}
      {hasK ? label.slice(1) : label}
    </span>
  );
}
