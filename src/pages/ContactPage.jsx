import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlurHashImage from "../components/BlurHashImage";
import { useSiteContent } from "../context/SiteContentContext";

function renderLines(value) {
  return value.split("\n").map((line, index) => (
    <span key={`${line}-${index}`}>
      {index > 0 ? <br /> : null}
      {line}
    </span>
  ));
}

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item${open ? " is-open" : ""}`}>
      <button className="faq-trigger" onClick={() => setOpen((state) => !state)} aria-expanded={open}>
        <span className="faq-q">{question}</span>
        <span className="faq-icon" aria-hidden="true">
          {open ? "−" : "+"}
        </span>
      </button>
      <div className="faq-body">
        <p className="faq-a">{answer}</p>
      </div>
    </div>
  );
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function ContactPage() {
  const { contactDetails, contactPage } = useSiteContent();
  // idle → sending (form folds into a ticking square) → done (square shows a tick) → sent (confirmation unfolds)
  const [phase, setPhase] = useState("idle");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPhase("sending");
    setError(null);
    // Let the fold finish and tick for a beat even when the request returns instantly
    const foldTime = wait(1300);

    const formData = {
      name: document.getElementById("cf-name").value,
      email: document.getElementById("cf-email").value,
      phone: document.getElementById("cf-phone").value,
      service: document.getElementById("cf-service").value,
      message: document.getElementById("cf-msg").value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        await foldTime;
        setPhase("done");
        await wait(700);
        setPhase("sent");
      } else {
        const data = await response.json().catch(() => ({}));
        await foldTime;
        setError(data.error || "Something went wrong. Please try again.");
        setPhase("idle");
      }
    } catch (submitError) {
      await foldTime;
      setError("Failed to send message. Please check your connection and try again.");
      setPhase("idle");
    }
  };

  return (
    <div className="site-shell">
      <main className="page cp-page">
        <Navbar />

        <section className="cp-img-hero">
          <BlurHashImage source={contactPage.heroBackground} alt={contactPage.heroBackgroundAlt} />
          <div className="cp-img-hero-overlay" />
          <div className="cp-img-hero-copy">
            <span className="cp-img-hero-eyebrow">{contactPage.heroEyebrow}</span>
            <h1 className="cp-img-hero-h1">{renderLines(contactPage.heroTitle)}</h1>
          </div>
        </section>

        <section className="cp-aura-body">
          <div className="cp-aura-left">
            <div className="cp-oval-container">
              <div className="cp-oval-shape" aria-hidden="true" />

              <div className="cp-oval-content">
                <div className="cp-aura-info-block">
                  <span className="cp-aura-info-label">Email</span>
                  <a href={`mailto:${contactDetails.email}`} className="cp-aura-info-val">
                    {contactDetails.email}
                  </a>
                </div>
                <div className="cp-aura-info-block">
                  <span className="cp-aura-info-label">Phone</span>
                  <a href={`tel:${contactDetails.phone?.replace(/[^+\d]/g, "") || ""}`} className="cp-aura-info-val">
                    {contactDetails.phone}
                  </a>
                </div>
                <div className="cp-aura-info-block">
                  <span className="cp-aura-info-label">Address</span>
                  <span className="cp-aura-info-val">{contactDetails.location}</span>
                </div>
                <div className="cp-aura-info-block">
                  <span className="cp-aura-info-label">Hours</span>
                  <span className="cp-aura-info-val">{renderLines(contactDetails.hours)}</span>
                </div>
                <div className="cp-aura-info-block">
                  <span className="cp-aura-info-label">Social</span>
                  <a href={contactDetails.socialUrl} className="cp-aura-info-val" target="_blank" rel="noreferrer">
                    {contactDetails.socialLabel}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="cp-aura-right">
            <div className={`cp-fold is-${phase}`}>
              {/* The form stays mounted (just hidden) while sending so the column keeps its height
                  and the fields keep their values if the send fails. */}
              <div className="cp-fold-content" inert={phase !== "idle" ? "" : undefined}>
                <div className="cp-form-intro">
                  <h2 className="cp-form-title">Reach Out</h2>
                </div>
                {error ? (
                  <div
                    className="cp-error"
                    role="alert"
                    style={{ marginBottom: "1rem", color: "#c0392b", fontSize: "0.95rem" }}
                  >
                    {error}
                  </div>
                ) : null}
                <form className="cp-aura-form" onSubmit={handleSubmit}>
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
                      {contactPage.serviceOptions.map((service) => (
                        <option key={service}>{service}</option>
                      ))}
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
                  <button type="submit" className="cp-aura-submit" disabled={phase !== "idle"}>
                    Send message <span className="cp-aura-arrow">→</span>
                  </button>
                </form>
              </div>

              <div className="cp-fold-sheet" aria-hidden="true">
                <div className="cp-fold-square">
                  <svg className="cp-fold-ticks" viewBox="0 0 48 48">
                    {Array.from({ length: 12 }, (_, i) => (
                      <line key={i} x1="24" y1="6" x2="24" y2="11" transform={`rotate(${i * 30} 24 24)`} style={{ "--i": i }} />
                    ))}
                  </svg>
                  <svg className="cp-fold-check" viewBox="0 0 48 48">
                    <path d="M15 25 l6 6 l12 -13" />
                  </svg>
                </div>
              </div>

              <p className="cp-fold-status" role="status">
                {phase === "sending" ? "Sending your message…" : phase === "idle" ? "" : "Message sent"}
              </p>

              {phase === "sent" ? (
                <div className="cp-success">
                  <span className="cp-success-icon">✓</span>
                  <h3>{contactPage.successTitle}</h3>
                  <p>{contactPage.successBody}</p>
                </div>
              ) : null}
            </div>
          </div>
        </section>

        <section className="cp-faq-section">
          <div className="cp-faq-blob" aria-hidden="true" />
          <div className="cp-faq-inner">
            <div className="cp-faq-header">
              <span className="cp-eyebrow">{contactPage.faqEyebrow}</span>
              <h2 className="cp-faq-heading">{contactPage.faqHeading}</h2>
              <p className="cp-faq-sub">{contactPage.faqSubtitle}</p>
            </div>
            <div className="cp-faq-list">
              {contactPage.faqs.map((item) => (
                <FaqItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
