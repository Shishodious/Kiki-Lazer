import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const faqs = [
  {
    q: "How do I know which treatment is right for my skin?",
    a: "Every client begins with a complimentary skin consultation. Our specialists assess your skin tone, texture, concerns, and goals to recommend a protocol that is safe and effective for you specifically — no generic plans.",
  },
  {
    q: "Is laser treatment painful?",
    a: "Most clients describe the sensation as a mild snap or warmth — far less than waxing. We use advanced cooling systems during sessions, and topical numbing cream is available on request for more sensitive areas.",
  },
  {
    q: "How many sessions will I need?",
    a: "It depends on the treatment and your skin. Laser hair reduction typically requires 6–8 sessions for lasting results. Pigmentation and rejuvenation protocols are usually 4–6 sessions. We'll give you a full roadmap at consultation.",
  },
  {
    q: "Is laser treatment safe for all skin tones?",
    a: "Yes. Our equipment includes Lutronic and Cynosure systems specifically calibrated for a full range of Fitzpatrick skin types, including deeper skin tones. Safety and efficacy are never compromised.",
  },
  {
    q: "What should I do to prepare for my first session?",
    a: "Avoid sun exposure, self-tanner, and waxing for at least two weeks before your session. Come in with clean, product-free skin on the treatment area. Your specialist will walk you through any additional prep at consultation.",
  },
  {
    q: "What is your cancellation and rescheduling policy?",
    a: "We ask for at least 24 hours notice for cancellations or rescheduling. Late cancellations may be subject to a session fee. To reschedule, simply reach out via phone or email and we'll find a time that works for you.",
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? " is-open" : ""}`}>
      <button className="faq-trigger" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span className="faq-q">{q}</span>
        <span className="faq-icon" aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <div className="faq-body">
        <p className="faq-a">{a}</p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = {
      name: document.getElementById("cf-name").value,
      email: document.getElementById("cf-email").value,
      phone: document.getElementById("cf-phone").value,
      service: document.getElementById("cf-service").value,
      message: document.getElementById("cf-msg").value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        setSent(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="site-shell">
      <main className="page cp-page">
        <Navbar />

        {/* ── Full-bleed dark hero image ── */}
        <section className="cp-img-hero">
          <img
            src="/assets/contactBG.png"
            alt="Kiki's Laser Spa"
          />
          <div className="cp-img-hero-overlay" />
          <div className="cp-img-hero-copy">
            <span className="cp-img-hero-eyebrow">Contact</span>
            <h1 className="cp-img-hero-h1">
              Let&apos;s get<br /><em>in touch.</em>
            </h1>
          </div>
        </section>

        {/* ── Main body: oval info left, form right ── */}
        <section className="cp-aura-body">

          {/* Left: rotating oval with contact details */}
          <div className="cp-aura-left">
            <div className="cp-oval-container">
              {/* The slowly morphing/rotating oval outline */}
              <div className="cp-oval-shape" aria-hidden="true" />

              {/* Contact info sits inside the oval space */}
              <div className="cp-oval-content">
                <div className="cp-aura-info-block">
                  <span className="cp-aura-info-label">Email</span>
                  <a href="mailto:hello@kikislaserspa.com" className="cp-aura-info-val">
                    hello@kikislaserspa.com
                  </a>
                </div>
                <div className="cp-aura-info-block">
                  <span className="cp-aura-info-label">Phone</span>
                  <a href="tel:5163209464" className="cp-aura-info-val">516-320-9464</a>
                </div>
                <div className="cp-aura-info-block">
                  <span className="cp-aura-info-label">Address</span>
                  <span className="cp-aura-info-val">Vails Mills, NY</span>
                </div>
                <div className="cp-aura-info-block">
                  <span className="cp-aura-info-label">Hours</span>
                  <span className="cp-aura-info-val">Mon – Sun<br />10 AM – 8 PM</span>
                </div>
                <div className="cp-aura-info-block">
                  <span className="cp-aura-info-label">Social</span>
                  <a
                    href="https://instagram.com/kikislaserspa"
                    className="cp-aura-info-val"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="cp-aura-right">
            {sent ? (
              <div className="cp-success">
                <span className="cp-success-icon">✓</span>
                <h3>Message sent.</h3>
                <p>We&apos;ll be in touch within one business day. Thank you for reaching out to Kiki&apos;s.</p>
              </div>
            ) : (
              <form
                className="cp-aura-form"
                onSubmit={handleSubmit}
              >
                <div className="cp-aura-field-row">
                  <div className="cp-aura-field">
                    <label htmlFor="cf-name">Name</label>
                    <input id="cf-name" type="text" placeholder="Jane Smith" required />
                  </div>
                  <div className="cp-aura-field">
                    <label htmlFor="cf-email">Email</label>
                    <input id="cf-email" type="email" placeholder="jane@email.com" required />
                  </div>
                </div>
                <div className="cp-aura-field">
                  <label htmlFor="cf-phone">
                    Phone <span className="cp-optional">(optional)</span>
                  </label>
                  <input id="cf-phone" type="tel" placeholder="516-000-0000" />
                </div>
                <div className="cp-aura-field">
                  <label htmlFor="cf-service">Treatment of Interest</label>
                  <select id="cf-service">
                    <option value="">Select a service…</option>
                    <option>Laser Hair Reduction</option>
                    <option>Skin Rejuvenation</option>
                    <option>Pigmentation Correction</option>
                    <option>Acne Treatment</option>
                    <option>Tattoo Removal</option>
                    <option>Vascular Lesion Treatment</option>
                    <option>Fractional Laser Resurfacing</option>
                    <option>IPL Photofacial</option>
                    <option>Collagen Induction Therapy</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
                <div className="cp-aura-field">
                  <label htmlFor="cf-msg">Message</label>
                  <textarea
                    id="cf-msg"
                    rows={6}
                    placeholder="Tell us about your skin concerns or what you'd like to know…"
                    required
                  />
                </div>
                <button type="submit" className="cp-aura-submit">
                  Send message <span className="cp-aura-arrow">→</span>
                </button>
              </form>
            )}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="cp-faq-section">
          <div className="cp-faq-inner">
            <div className="cp-faq-header">
              <span className="cp-eyebrow">FAQ</span>
              <h2 className="cp-faq-heading">Frequently asked questions</h2>
              <p className="cp-faq-sub">Everything you need to know before your first visit.</p>
            </div>
            <div className="cp-faq-list">
              {faqs.map((item) => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
