const infoLinks = ["About Kiki's", "Reserve", "Gift a Session", "Membership"];

const treatmentLinks = [
  "Laser Hair Reduction",
  "Skin Rejuvenation",
  "Pigmentation Correction",
  "Facial Treatments",
];

const contactItems = [
  "@kikislaserspa",
  "516-320-9464",
  "hello@kikislaserspa.com",
  "By appointment, 10 AM – 8 PM",
];

const legalLinks = ["Privacy Policy", "Cookies", "FAQs"];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-location-strip">
        <div className="footer-location-img-wrap">
          <img
            src="/assets/kiki-exterior.jpg"
            alt="Kiki's Laser Spa exterior — Vails Mills, NY"
          />
        </div>
        <div className="footer-location-copy">
          <span className="footer-location-label">Find Us</span>
          <p className="footer-location-address">Vails Mills, NY</p>
          <a
            className="footer-location-phone"
            href="tel:5163209464"
          >
            516-320-9464
          </a>
        </div>
        <div className="footer-location-logo-wrap">
          <img
            src="/assets/kiki-logo-glass.jpg"
            alt="Kiki's Laser Spa branded logo"
          />
        </div>
      </div>

      <div className="footer-top">
        <div className="footer-cta">
          <h2 className="footer-heading">Let&apos;s Talk.</h2>
          <p>
            Questions or ready to book? Reach out and we&apos;ll get back to
            you.
          </p>
          <button type="button" className="footer-btn">
            Contact Us
          </button>
        </div>

        <div className="footer-col">
          <h3>Information</h3>
          <ul>
            {infoLinks.map((link) => (
              <li key={link}>
                <a href="/" onClick={(e) => e.preventDefault()}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3>Treatments</h3>
          <ul>
            {treatmentLinks.map((link) => (
              <li key={link}>
                <a href="/" onClick={(e) => e.preventDefault()}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <ul>
            {contactItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <a
            className="footer-logo"
            href="/"
            onClick={(e) => e.preventDefault()}
          >
            Kiki&apos;s Laser Spa
          </a>
          <span className="footer-copy">
            ©2025 Kiki&apos;s Laser Spa · Design by Hypeliv
          </span>
        </div>

        <nav className="footer-legal">
          {legalLinks.map((link) => (
            <a key={link} href="/" onClick={(e) => e.preventDefault()}>
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
