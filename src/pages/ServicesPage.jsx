import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlurHashImage from "../components/BlurHashImage";
import { useSiteContent } from "../context/SiteContentContext";
import { urlForImage } from "../lib/sanity";

function renderLines(value) {
  return value.split("\n").map((line, index) => (
    <span key={`${line}-${index}`}>
      {index > 0 ? <br /> : null}
      {line}
    </span>
  ));
}

export default function ServicesPage() {
  const { servicesPage } = useSiteContent();

  return (
    <div className="site-shell">
      <main className="page sp-page">
        <Navbar />

        <section className="sp-hero">
          <div className="sp-hero-bg">
            <BlurHashImage
              source={servicesPage.heroBackground}
              alt={servicesPage.heroBackgroundAlt}
            />
          </div>
          <div className="sp-hero-overlay" />
          <div className="sp-hero-inner">
            <span className="sp-eyebrow">{servicesPage.heroEyebrow}</span>
            <h1 className="sp-heading">{renderLines(servicesPage.heroTitle)}</h1>
            <p className="sp-sub">{servicesPage.heroSubtitle}</p>
            <Link className="sp-cta" to="/contact">
              {servicesPage.ctaLabel}
            </Link>
          </div>
        </section>

        <section className="sp-grid-section">
          <div className="sp-blob-right" aria-hidden="true" />
          <div className="sp-blob-right sp-blob-right-2" aria-hidden="true" />
          <div className="sp-blob-left" aria-hidden="true" />
          <div className="sp-blob-left sp-blob-left-2" aria-hidden="true" />
          <div className="sp-grid">
            {servicesPage.items.map((service, index) => (
              <article key={service.title} className="sp-card">
                <div className="sp-card-img-wrap">
                  <img src={urlForImage(service.image)} alt={service.imageAlt || service.title} />
                </div>
                <div className="sp-card-body">
                  <div className="sp-card-top">
                    <span className="sp-card-index">{String(index + 1).padStart(2, "0")}</span>
                    <span className="sp-card-tagline">{service.tagline}</span>
                  </div>
                  <h2 className="sp-card-title">{service.title}</h2>
                  <p className="sp-card-desc">{service.description}</p>
                  <div className="sp-card-meta">
                    <span>⏱ {service.duration}</span>
                    <span>📅 {service.sessions}</span>
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
