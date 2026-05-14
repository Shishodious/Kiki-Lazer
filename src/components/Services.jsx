import { Link } from "react-router-dom";

const services = [
  {
    title: "Laser Hair Reduction",
    description: "Targeted sessions for smoother skin with long-term reduction and minimal downtime.",
  },
  {
    title: "Skin Rejuvenation",
    description: "Tone-refining laser care designed to restore clarity, texture, and luminous balance.",
  },
  {
    title: "Pigmentation Correction",
    description: "Precision-led treatment plans for sunspots, post-acne marks, and uneven skin tone.",
  },
];

const mediaImages = [
  {
    src: "/assets/machine-cynosure.jpg",
    alt: "Cynosure laser system at Kiki's",
    className: "media-card media-card-small",
  },
  {
    src: "/assets/treatment-session.jpg",
    alt: "Laser hair reduction session at Kiki's Laser Spa",
    className: "media-card media-card-feature",
  },
  {
    src: "/assets/machine-lutronic.jpg",
    alt: "Lutronic laser technology at Kiki's",
    className: "media-card media-card-tall",
  },
];

export default function Services() {
  return (
    <section className="services section-card">
      <div className="section-arc section-arc-left" />
      <div className="section-arc section-arc-right" />

      {/* Centered title block */}
      <div className="services-title-center">
        <h2>Our services</h2>
        <p>
          Clinical precision, soft luxury, and treatment journeys designed
          around real skin goals.
        </p>
        <Link className="services-view-all" to="/services">
          See All Treatments
        </Link>
      </div>

      {/* 3 horizontal service cards */}
      <div className="services-list">
        {services.map((service, index) => (
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

      {/* Media spotlight */}
      <div className="services-media">
        <div className="services-spotlight">
          <div className="services-spotlight-copy">
            <span className="services-spotlight-label">Most Booked</span>
            <strong>Laser Hair Reduction</strong>
            <p>Visible smoothness. Calm sessions. Protocols customized to your skin profile.</p>
          </div>
          <img
            className={mediaImages[1].className}
            src={mediaImages[1].src}
            alt={mediaImages[1].alt}
          />
        </div>

        <div className="services-side-stack">
          {[mediaImages[0], mediaImages[2]].map(({ src, alt, className }) => (
            <figure key={src} className="services-side-card">
              <img className={className} src={src} alt={alt} />
              <figcaption>{alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
