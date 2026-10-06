export default function BrandWordmark({ variant = "nav" }) {
  return (
    <span
      className={`brand-wordmark brand-wordmark--${variant}`}
      role="img"
      aria-label="MARJENE Software Development"
    >
      <span className="brand-wordmark__letters" aria-hidden="true">
        <span>M</span>
        <span>A</span>
        <span>R</span>
        <span className="brand-wordmark__red">J</span>
        <span>E</span>
        <span>N</span>
        <span className="brand-wordmark__last-e">
          <span />
          <span />
          <span />
        </span>
      </span>
      <span className="brand-wordmark__descriptor" aria-hidden="true">
        Software Development
      </span>
    </span>
  );
}