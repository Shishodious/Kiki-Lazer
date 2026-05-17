import { Link } from "react-router-dom";
import FooterParticles from "./FooterParticles";

const navLinks = [
  { label: "About Kiki's", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const treatmentLinks = [
  "Laser Hair Reduction",
  "Skin Rejuvenation",
  "Pigmentation Correction",
  "Acne Treatment",
  "Tattoo Removal",
];

export default function Footer() {
  return (
    <footer className="footer">

      {/* ── Interactive particle field ── */}
      <FooterParticles />

      {/* ── Brand + CTA bar ── */}
      <div className="footer-brand-row">
        <div className="footer-brand-left">
          <div className="footer-brand-mark">
            <span className="footer-brand-script">Kiki&apos;s</span>
            <span className="footer-brand-stack">
              <span>Laser</span>
              <span>Spa</span>
            </span>
          </div>
          <p className="footer-brand-tagline">
            Clinical precision. Soft luxury.<br />Vails Mills, NY.
          </p>
        </div>
        <div className="footer-brand-right">
          <p className="footer-cta-label">Ready to start your skin journey?</p>
          <Link to="/contact" className="footer-cta-btn">
            Get in touch <span className="footer-cta-arrow">→</span>
          </Link>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="footer-rule" />

      {/* ── Link columns ── */}
      <div className="footer-cols">
        <div className="footer-col">
          <h4 className="footer-col-heading">Navigate</h4>
          <ul>
            {navLinks.map(({ label, to }) => (
              <li key={to}><Link to={to}>{label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-heading">Treatments</h4>
          <ul>
            {treatmentLinks.map((t) => (
              <li key={t}><Link to="/services">{t}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-heading">Contact</h4>
          <ul>
            <li><a href="mailto:hello@kikislaserspa.com">hello@kikislaserspa.com</a></li>
            <li><a href="tel:5163209464">516-320-9464</a></li>
            <li>Vails Mills, NY</li>
            <li>Mon – Sun · 10 AM – 8 PM</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-heading">Follow</h4>
          <ul>
            <li>
              <a
                href="https://instagram.com/kikislaserspa"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-rule" />
      <div className="footer-bottom">
        <span className="footer-copy">©2025 Kiki&apos;s Laser Spa · Design by Hypeliv</span>
        <nav className="footer-legal">
          <a href="/">Privacy Policy</a>
          <a href="/">Cookies</a>
          <a href="/">FAQs</a>
        </nav>
      </div>

    </footer>
  );
}
