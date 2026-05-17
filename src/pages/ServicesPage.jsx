import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const allServices = [
  {
    index: "01",
    title: "Laser Hair Reduction",
    tagline: "Long-term smoothness",
    description:
      "FDA-cleared diode laser technology targets hair follicles precisely, delivering permanent reduction with minimal discomfort. Customized for all skin tones and body areas.",
    duration: "30 – 90 min",
    sessions: "6 – 8 sessions",
    img: "/assets/treatment-session.jpg",
  },
  {
    index: "02",
    title: "Skin Rejuvenation",
    tagline: "Clarity restored",
    description:
      "Non-ablative laser energy stimulates collagen production deep within the dermis, improving tone, texture, and radiance. Ideal for dull, uneven, or sun-damaged skin with zero downtime.",
    duration: "45 min",
    sessions: "4 – 6 sessions",
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
  },
  {
    index: "03",
    title: "Pigmentation Correction",
    tagline: "Even, luminous skin",
    description:
      "Targeted Q-switched and picosecond laser pulses break down melanin clusters responsible for sunspots, melasma, and post-acne hyperpigmentation.",
    duration: "30 – 60 min",
    sessions: "4 – 8 sessions",
    img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=80",
  },
  {
    index: "04",
    title: "Acne & Active Breakout Treatment",
    tagline: "Clear skin confidence",
    description:
      "Blue and red light laser therapy reduces P. acnes bacteria, shrinks sebaceous glands, and calms active inflammation — without harsh chemicals. Safe for all skin types.",
    duration: "30 min",
    sessions: "6 – 10 sessions",
    img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=900&q=80",
  },
  {
    index: "05",
    title: "Tattoo Removal",
    tagline: "Gradual, safe fading",
    description:
      "PicoSure® ultra-short pulses shatter ink particles into dust-sized fragments, allowing your immune system to clear them naturally. Effective on multi-colour tattoos.",
    duration: "15 – 45 min",
    sessions: "6 – 12 sessions",
    img: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=900&q=80",
  },
  {
    index: "06",
    title: "Vascular Lesion Treatment",
    tagline: "Visibly clearer skin",
    description:
      "Pulsed-dye and Nd:YAG lasers selectively target hemoglobin in spider veins, broken capillaries, rosacea redness, and port-wine stains with precision.",
    duration: "20 – 40 min",
    sessions: "2 – 4 sessions",
    img: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=900&q=80",
  },
  {
    index: "07",
    title: "Fractional Laser Resurfacing",
    tagline: "Deep texture refinement",
    description:
      "Fractional CO₂ or Erbium lasers trigger intensive collagen remodeling, dramatically reducing acne scars, fine lines, enlarged pores, and stretch marks.",
    duration: "60 – 90 min",
    sessions: "3 – 5 sessions",
    img: "/assets/machine-cynosure.jpg",
  },
  {
    index: "08",
    title: "IPL Photofacial",
    tagline: "Full-spectrum correction",
    description:
      "Intense Pulsed Light delivers broad-spectrum energy addressing redness, brown spots, broken vessels, and texture — a comprehensive facial reset.",
    duration: "30 – 45 min",
    sessions: "4 – 6 sessions",
    img: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=900&q=80",
  },
  {
    index: "09",
    title: "Collagen Induction Therapy",
    tagline: "Firm, plumped skin",
    description:
      "Low-level laser stimulation activates fibroblasts to produce new collagen and elastin, gradually firming skin and reducing fine lines — no needles, no ablation.",
    duration: "45 min",
    sessions: "6 – 8 sessions",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80",
  },
];

export default function ServicesPage() {
  return (
    <div className="site-shell">
      <main className="page sp-page">
        <Navbar />

        <section className="sp-hero">
          <div className="sp-hero-bg">
            <img
              src="https://images.unsplash.com/photo-1583417267826-aebc4d1542e1?q=80&w=2070&auto=format&fit=crop"
              alt="Kiki's Laser Spa treatment room"
            />
          </div>
          <div className="sp-hero-overlay" />
          <div className="sp-hero-inner">
            <span className="sp-eyebrow">All Services</span>
            <h1 className="sp-heading">
              Every treatment.<br />One address.
            </h1>
            <p className="sp-sub">
              Nine clinically proven laser protocols. One team that knows your skin.
              Book a free consultation and we&apos;ll build your personalised plan.
            </p>
            <Link className="sp-cta" to="/contact">
              Book a Consultation
            </Link>
          </div>
        </section>

        <section className="sp-grid-section">
          <div className="sp-blob-right" aria-hidden="true" />
          <div className="sp-blob-right sp-blob-right-2" aria-hidden="true" />
          <div className="sp-blob-left" aria-hidden="true" />
          <div className="sp-blob-left sp-blob-left-2" aria-hidden="true" />
          <div className="sp-grid">
            {allServices.map((svc) => (
              <article key={svc.index} className="sp-card">
                <div className="sp-card-img-wrap">
                  <img src={svc.img} alt={svc.title} />
                </div>
                <div className="sp-card-body">
                  <div className="sp-card-top">
                    <span className="sp-card-index">{svc.index}</span>
                    <span className="sp-card-tagline">{svc.tagline}</span>
                  </div>
                  <h2 className="sp-card-title">{svc.title}</h2>
                  <p className="sp-card-desc">{svc.description}</p>
                  <div className="sp-card-meta">
                    <span>⏱ {svc.duration}</span>
                    <span>📅 {svc.sessions}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
