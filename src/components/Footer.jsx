import { Link } from "react-router-dom";
import FooterParticles from "./FooterParticles";
import BrandScript from "./BrandScript";
import { useSiteContent } from "../context/SiteContentContext";

function renderLines(value) {
  return value.split("\n").map((line, index) => (
    <span key={`${line}-${index}`}>
      {index > 0 ? <br /> : null}
      {line}
    </span>
  ));
}

function isExternalHref(href) {
  return /^https?:\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");
}

function FooterLink({ href, children }) {
  if (isExternalHref(href)) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
        {children}
      </a>
    );
  }

  return <Link to={href}>{children}</Link>;
}

export default function Footer() {
  const { sharedSettings, contactDetails, footerContent } = useSiteContent();
  const { brand } = sharedSettings;

  return (
    <footer className="footer">
      <FooterParticles />

      <div className="footer-brand-row">
        <div className="footer-brand-left">
          <div className="footer-brand-mark">
            <BrandScript className="footer-brand-script" label={brand.scriptLabel} />
            <span className="footer-brand-stack">
              <span>{brand.stackTop}</span>
              <span>{brand.stackBottom}</span>
            </span>
          </div>
          <p className="footer-brand-tagline">{renderLines(footerContent.tagline)}</p>
        </div>
        <div className="footer-brand-right">
          <p className="footer-cta-label">{footerContent.ctaLabel}</p>
          <Link to="/contact" className="footer-cta-btn">
            Get in touch <span className="footer-cta-arrow">→</span>
          </Link>
        </div>
      </div>

      <div className="footer-rule" />

      <div className="footer-cols">
        <div className="footer-col">
          <h4 className="footer-col-heading">{footerContent.navigateHeading}</h4>
          <ul>
            {footerContent.navigationLinks.map(({ label, href }) => (
              <li key={`${label}-${href}`}><FooterLink href={href}>{label}</FooterLink></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-heading">{footerContent.treatmentsHeading}</h4>
          <ul>
            {footerContent.treatmentLinks.map(({ label, href }) => (
              <li key={`${label}-${href}`}><FooterLink href={href}>{label}</FooterLink></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-heading">{footerContent.contactHeading}</h4>
          <ul>
            <li><a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a></li>
            <li><a href={`tel:${(contactDetails.phone || "").replace(/[^+\d]/g, "")}`}>{contactDetails.phone}</a></li>
            <li>{contactDetails.location}</li>
            <li>{renderLines(contactDetails.hours)}</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-heading">{footerContent.followHeading}</h4>
          <ul>
            <li>
              <a
                href={contactDetails.socialUrl}
                target="_blank"
                rel="noreferrer"
              >
                {contactDetails.socialLabel}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-rule" />
      <div className="footer-bottom">
        <span className="footer-copy">{footerContent.copyright}</span>
        <nav className="footer-legal">
          {footerContent.legalLinks.map(({ label, href }) => (
            <FooterLink key={`${label}-${href}`} href={href}>{label}</FooterLink>
          ))}
        </nav>
      </div>
    </footer>
  );
}
