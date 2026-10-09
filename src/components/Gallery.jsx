import { useState, useEffect, useRef } from "react";
import { useSiteContent } from "../context/SiteContentContext";
import { urlForImage } from "../lib/sanity";

export default function Gallery() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);
  const { homePage } = useSiteContent();
  const { testimonialsSection } = homePage;
  const testimonials = testimonialsSection.items || [];

  const goTo = (index) => setActive((index + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused || testimonials.length < 2) return undefined;

    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [paused, testimonials.length]);

  return (
    <section className="gallery section-card">
      <div className="testimonials-layout">
        <div className="testimonials-intro">
          <span className="testimonials-eyebrow">{testimonialsSection.eyebrow}</span>
          <h2>{testimonialsSection.heading}</h2>
          <p>{testimonialsSection.body}</p>

          <div className="testimonials-highlight">
            <img src={urlForImage(testimonialsSection.highlightImage)} alt={testimonialsSection.highlightImageAlt} />
            <div className="testimonials-highlight-badge">
              <strong>{testimonialsSection.ratingValue}</strong>
              <span>{testimonialsSection.ratingLabel}</span>
            </div>
          </div>
        </div>

        <div
          className="testimonials-carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="carousel-bg-img">
            <img src={urlForImage(testimonialsSection.backgroundImage)} alt={testimonialsSection.backgroundImageAlt} />
            <div className="carousel-bg-overlay" />
          </div>

          <div className="testimonials-track">
            {testimonials.map((item, index) => {
              // Collapsing stack: the front card is open, the next two peek out as slivers above it,
              // and the one just passed folds down out of view.
              const offset = (index - active + testimonials.length) % testimonials.length;
              const leaving = testimonials.length > 3 && offset === testimonials.length - 1;
              const peeking = offset === 1 || offset === 2;
              const stateClass =
                offset === 0 ? " is-active" : leaving ? " is-leaving" : peeking ? " is-peeking" : " is-hidden";

              return (
                <article
                  key={`${item.name}-${index}`}
                  className={`testimonial-card${stateClass}`}
                  style={{
                    "--depth": leaving ? 0 : Math.min(offset, 3),
                    zIndex: leaving ? testimonials.length + 1 : testimonials.length - offset,
                  }}
                  aria-hidden={offset !== 0}
                  onClick={peeking ? () => goTo(index) : undefined}
                >
                  <div className="testimonial-meta">
                    <span className="testimonial-index">0{index + 1}</span>
                    <span className="testimonial-stars">{"★".repeat(Math.max(1, item.rating || 5))}</span>
                  </div>
                  <p className="testimonial-quote">&ldquo;{item.quote}&rdquo;</p>
                  <div className="testimonial-author">
                    <strong>{item.name}</strong>
                    <span>{item.detail}</span>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="carousel-controls">
            <button
              className="carousel-arrow carousel-prev"
              onClick={() => goTo(active - 1)}
              aria-label="Previous testimonial"
              disabled={testimonials.length < 2}
            >
              ←
            </button>
            <div className="carousel-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot${i === active ? " is-active" : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  disabled={testimonials.length < 2}
                />
              ))}
            </div>
            <button
              className="carousel-arrow carousel-next"
              onClick={() => goTo(active + 1)}
              aria-label="Next testimonial"
              disabled={testimonials.length < 2}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
