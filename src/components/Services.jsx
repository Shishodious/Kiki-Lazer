import { Link } from "react-router-dom";
import { useSiteContent } from "../context/SiteContentContext";
import { urlForImage } from "../lib/sanity";

export default function Services() {
  const { homePage } = useSiteContent();
  const { servicesSection } = homePage;
  const displayServices = servicesSection.serviceCards || [];
  const spotlightService = displayServices[0];
  const sideServices = displayServices.slice(1, 3);

  return (
    <section className="services section-card">
      <div className="section-arc section-arc-left" />
      <div className="section-arc section-arc-right" />

      <div className="services-title-center">
        <h2>{servicesSection.heading}</h2>
        <p>{servicesSection.body}</p>
        <Link className="services-view-all" to="/services">
          {servicesSection.ctaLabel}
        </Link>
      </div>

      <div className="services-list">
        {displayServices.map((service, index) => (
          <article key={service.title} className="service-item">
            <div className="service-item-top">
              <span className="service-index">0{index + 1}</span>
              <span className="service-arrow">↗</span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>

      {spotlightService ? (
        <div className="services-media">
          <div className="services-spotlight">
            <div className="services-spotlight-copy">
              <span className="services-spotlight-label">{servicesSection.spotlightLabel}</span>
              <strong>{spotlightService.title}</strong>
              <p>{spotlightService.description}</p>
            </div>
            <img
              className="media-card media-card-feature"
              src={urlForImage(spotlightService.image)}
              alt={spotlightService.imageAlt || spotlightService.title}
            />
          </div>

          {sideServices.length ? (
            <div className="services-side-stack">
              {sideServices.map((service, index) => (
                <figure key={service.title} className="services-side-card">
                  <img
                    className={index === 0 ? "media-card media-card-small" : "media-card media-card-tall"}
                    src={urlForImage(service.image)}
                    alt={service.imageAlt || service.title}
                  />
                  <figcaption>{service.imageAlt || service.title}</figcaption>
                </figure>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
