import { Link } from "react-router-dom";
import { useSiteContent } from "../context/SiteContentContext";
import { urlForImage } from "../lib/sanity";

function renderLines(value) {
  if (!value) return null;
  return value.split("\n").map((line, index) => (
    <span key={`${line}-${index}`}>
      {index > 0 ? <br /> : null}
      {line}
    </span>
  ));
}

export default function About() {
  const { homePage } = useSiteContent();
  const { aboutSection, stats } = homePage;
  const imageSrc = urlForImage(aboutSection.image);

  return (
    <section className="about">
      <div className="about-inner">
        <div className="about-text">
          <span className="about-eyebrow">{aboutSection.eyebrow}</span>
          <h2 className="about-heading">{renderLines(aboutSection.heading)}</h2>
          <p className="about-body">{aboutSection.body}</p>

          <div className="about-stats">
            {stats.map(({ value, label }) => (
              <div key={label} className="about-stat">
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <Link to="/about" className="about-cta">
            {aboutSection.ctaLabel}
          </Link>
        </div>

        <div className="about-visual">
          <div className="about-img-wrap">
            <img src={imageSrc} alt={aboutSection.imageAlt} />
          </div>
          <div className="about-badge">
            <span className="about-badge-line">{aboutSection.badgePrimary}</span>
            <span className="about-badge-line about-badge-sub">{aboutSection.badgeSecondary}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
