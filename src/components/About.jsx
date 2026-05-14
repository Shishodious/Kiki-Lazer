const stats = [
  { value: "2,400+", label: "Sessions" },
  { value: "12+", label: "Specialists" },
  { value: "8 yrs", label: "Experience" },
];

export default function About() {
  return (
    <section className="about">
      <div className="about-inner">
        <div className="about-text">
          <span className="about-eyebrow">Est. 2018 · Mumbai</span>
          <h2 className="about-heading">
            Precision.<br />Warmth.<br />Results.
          </h2>
          <p className="about-body">
            We built Kiki&apos;s Laser Spa around one principle: clinical-grade
            results should still feel warm, private, and reassuring. From first
            consultation to aftercare, our team focuses on clear guidance,
            skin-safe protocols, and treatments tailored to real lifestyles.
          </p>

          <div className="about-stats">
            {stats.map(({ value, label }) => (
              <div key={label} className="about-stat">
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <button type="button" className="about-cta">
            Why Kiki&apos;s
          </button>
        </div>

        <div className="about-visual">
          <div className="about-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&q=85"
              alt="Client receiving laser facial treatment at Kiki's Laser Spa"
            />
          </div>
          <div className="about-badge">
            <span className="about-badge-line">Tailored</span>
            <span className="about-badge-line about-badge-sub">To Your Skin</span>
          </div>
        </div>
      </div>
    </section>
  );
}
