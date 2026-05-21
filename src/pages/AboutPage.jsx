import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlurHashImage from "../components/BlurHashImage";
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

export default function AboutPage() {
  const { aboutPage } = useSiteContent();

  return (
    <div className="site-shell">
      <main className="page ap-page">
        <Navbar />

        <section className="cp-img-hero">
          <BlurHashImage source={aboutPage.heroBackground} alt={aboutPage.heroBackgroundAlt} />
          <div className="cp-img-hero-overlay" />
          <div className="cp-img-hero-copy">
            <span className="cp-img-hero-eyebrow">{aboutPage.heroEyebrow}</span>
            <h1 className="cp-img-hero-h1">{renderLines(aboutPage.heroTitle)}</h1>
          </div>
        </section>

        <section className="ap-story">
          <div className="ap-blob" aria-hidden="true" />
          <div className="ap-blob ap-blob-2" aria-hidden="true" />
          <div className="ap-story-inner">
            <div className="ap-story-text">
              <span className="ap-eyebrow">{aboutPage.storyEyebrow}</span>
              <h2 className="ap-story-heading">{renderLines(aboutPage.storyHeading)}</h2>
              <p className="ap-story-body">{aboutPage.storyBody}</p>
              <div className="ap-stats">
                {aboutPage.stats.map(({ value, label }) => (
                  <div key={label} className="ap-stat">
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="ap-story-visual">
              <div className="ap-img-wrap">
                <img src={urlForImage(aboutPage.storyImage)} alt={aboutPage.storyImageAlt} />
              </div>
              <div className="ap-img-badge">
                <span>{aboutPage.badgePrimary}</span>
                <span className="ap-img-badge-sub">{aboutPage.badgeSecondary}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="ap-values">
          <div className="ap-values-inner">
            <div className="ap-values-header">
              <span className="ap-eyebrow">{aboutPage.valuesEyebrow}</span>
              <h2 className="ap-values-heading">{aboutPage.valuesHeading}</h2>
            </div>
            <div className="ap-values-grid">
              {aboutPage.values.map((value, index) => (
                <article key={`${value.title}-${index}`} className="ap-value-card">
                  <span className="ap-value-index">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="ap-value-title">{value.title}</h3>
                  <p className="ap-value-body">{value.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ap-cta">
          <div className="ap-cta-inner">
            <span className="ap-eyebrow">{aboutPage.ctaEyebrow}</span>
            <h2 className="ap-cta-heading">{aboutPage.ctaHeading}</h2>
            <Link to="/contact" className="ap-cta-btn">
              {aboutPage.ctaLabel} <span className="ap-cta-arrow">→</span>
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
