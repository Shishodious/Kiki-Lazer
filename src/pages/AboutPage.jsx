import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const stats = [
  { value: "2,400+", label: "Sessions" },
  { value: "12+", label: "Specialists" },
  { value: "8 yrs", label: "Experience" },
];

const values = [
  {
    index: "01",
    title: "Personalized Protocols",
    body: "Every client starts with a consultation. We map your skin tone, sensitivity, and goals before a single session begins — no generic plans.",
  },
  {
    index: "02",
    title: "Advanced Technology",
    body: "We use Lutronic and Cynosure systems calibrated for the full range of Fitzpatrick skin types. Precision isn't optional — it's the standard.",
  },
  {
    index: "03",
    title: "Warm, Private Care",
    body: "Kiki's was built to feel the opposite of clinical. Private rooms, calm energy, and a team that checks in after every session.",
  },
];

export default function AboutPage() {
  return (
    <div className="site-shell">
      <main className="page ap-page">
        <Navbar />

        {/* ── Hero ── */}
        <section className="cp-img-hero">
          <img src="/assets/contactBG.png" alt="Kiki's Laser Spa" />
          <div className="cp-img-hero-overlay" />
          <div className="cp-img-hero-copy">
            <span className="cp-img-hero-eyebrow">About Kiki&apos;s</span>
            <h1 className="cp-img-hero-h1">
              A calmer kind of<br /><em>laser clinic.</em>
            </h1>
          </div>
        </section>

        {/* ── Story section ── */}
        <section className="ap-story">
          <div className="ap-blob" aria-hidden="true" />
          <div className="ap-blob ap-blob-2" aria-hidden="true" />
          <div className="ap-story-inner">
            <div className="ap-story-text">
              <span className="ap-eyebrow">Est. 2018 · Vails Mills, NY</span>
              <h2 className="ap-story-heading">
                Built around you,<br />not a protocol.
              </h2>
              <p className="ap-story-body">
                We built Kiki&apos;s Laser Spa around one principle: clinical-grade
                results should still feel warm, private, and reassuring. From
                first consultation to aftercare, our team focuses on clear
                guidance, skin-safe protocols, and treatments tailored to real
                lifestyles.
              </p>
              <div className="ap-stats">
                {stats.map(({ value, label }) => (
                  <div key={label} className="ap-stat">
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="ap-story-visual">
              <div className="ap-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&q=85"
                  alt="Client receiving laser facial treatment at Kiki's"
                />
              </div>
              <div className="ap-img-badge">
                <span>Tailored</span>
                <span className="ap-img-badge-sub">To Your Skin</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section className="ap-values">
          <div className="ap-values-inner">
            <div className="ap-values-header">
              <span className="ap-eyebrow">Why Kiki&apos;s</span>
              <h2 className="ap-values-heading">What makes us different</h2>
            </div>
            <div className="ap-values-grid">
              {values.map((v) => (
                <article key={v.index} className="ap-value-card">
                  <span className="ap-value-index">{v.index}</span>
                  <h3 className="ap-value-title">{v.title}</h3>
                  <p className="ap-value-body">{v.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="ap-cta">
          <div className="ap-cta-inner">
            <span className="ap-eyebrow">Ready to start?</span>
            <h2 className="ap-cta-heading">Your skin journey begins with a conversation.</h2>
            <a href="/contact" className="ap-cta-btn">
              Get in touch <span className="ap-cta-arrow">→</span>
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
