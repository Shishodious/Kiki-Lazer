import { Fragment, useState } from "react";
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
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (index) => {
    setOpenCard((prev) => (prev === index ? null : index));
  };

  const serviceRows = [];
  for (let index = 0; index < servicesPage.items.length; index += 2) {
    serviceRows.push(servicesPage.items.slice(index, index + 2));
  }

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
            {serviceRows.map((row, rowIndex) => {
              const rowStart = rowIndex * 2;
              const expandedIndex = row.findIndex((_, offset) => rowStart + offset === openCard);
              const expandedService = expandedIndex === -1 ? null : row[expandedIndex];

              return (
                <Fragment key={`row-${rowStart}`}>
                  {row.map((service, offset) => {
                    const index = rowStart + offset;
                    const isOpen = openCard === index;

                    return (
                      <article key={service.title} className={`sp-card${isOpen ? " is-open" : ""}`}>
                        <div className="sp-card-img-wrap">
                          <img src={urlForImage(service.image)} alt={service.imageAlt || service.title} />
                        </div>
                        <div className="sp-card-body">
                          <div className="sp-card-top">
                            <span className="sp-card-index">{String(index + 1).padStart(2, "0")}</span>
                            <span className="sp-card-tagline">{service.tagline}</span>
                          </div>
                          <div className="sp-card-title-row">
                            <h2 className="sp-card-title">{service.title}</h2>
                            <button
                              type="button"
                              className="sp-card-chevron"
                              aria-expanded={isOpen}
                              aria-label={isOpen ? `Hide ${service.title} details` : `Show ${service.title} details`}
                              onClick={() => toggleCard(index)}
                            >
                              <span aria-hidden="true">▾</span>
                            </button>
                          </div>
                          <div className="sp-card-collapsible">
                            <p className="sp-card-desc">{service.description}</p>
                            <div className="sp-card-meta">
                              <span>⏱ {service.duration}</span>
                              <span>📅 {service.sessions}</span>
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })}

                  <div
                    className={`sp-mobile-detail${expandedService ? " is-open" : ""}`}
                    aria-hidden={!expandedService}
                  >
                    {expandedService ? (
                      <>
                        <div className="sp-mobile-detail-img-wrap">
                          <img
                            src={urlForImage(expandedService.image)}
                            alt={expandedService.imageAlt || expandedService.title}
                          />
                        </div>
                        <div className="sp-mobile-detail-body">
                          <div className="sp-mobile-detail-top">
                            <span className="sp-card-index">
                              {String(rowStart + expandedIndex + 1).padStart(2, "0")}
                            </span>
                            <span className="sp-card-tagline">{expandedService.tagline}</span>
                          </div>
                          <h3 className="sp-mobile-detail-title">{expandedService.title}</h3>
                          <p className="sp-card-desc">{expandedService.description}</p>
                          <div className="sp-card-meta">
                            <span>⏱ {expandedService.duration}</span>
                            <span>📅 {expandedService.sessions}</span>
                          </div>
                        </div>
                      </>
                    ) : null}
                  </div>
                </Fragment>
              );
            })}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
