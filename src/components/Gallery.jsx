import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "Five stars for Kiki's Laser Spa! I'm doing treatments for my underarms and bikini area, and I'm already seeing incredible results. It feels so good to finally ditch the razor. If you're looking for professional laser hair removal in Upstate NY, look no further!",
    name: "Verified Client",
    detail: "Laser Hair Removal · Google Review",
  },
  {
    quote:
      "I rarely post but sometimes you just need a little pampering. Kiki fixed me right up with kindness and the sweetest smile. Give Kiki a call — you won't be disappointed.",
    name: "Deb",
    detail: "Verified Google Review",
  },
  {
    quote:
      "Kiki is wonderful! She is warm and welcoming, explains everything ahead of and during treatment. Kiki is affordable and has changed my morning routine forever. No more unwanted hair!",
    name: "Verified Client",
    detail: "Laser Hair Removal · Google Review",
  },
  {
    quote:
      "Kiki is very knowledgeable and walks you through the laser procedure. I have been very pleased with all my treatments and will continue to recommend her to all my friends and family.",
    name: "Verified Client",
    detail: "Verified Google Review",
  },
  {
    quote:
      "She's kind, sweet, the establishment is clean, and her pricing is fair. Kiki called to check that I felt okay after — you don't get that at a lot of places. Do yourself a favor and try her out. You won't regret it!",
    name: "Verified Client",
    detail: "Verified Google Review",
  },
  {
    quote:
      "Had a great experience — I was nervous and she made me feel so comfortable. I will be back! Thank you Kiki.",
    name: "Verified Client",
    detail: "Verified Google Review",
  },
  {
    quote:
      "Would highly recommend. Kiki does great work, is flexible with her schedule and calls to check on you after.",
    name: "Verified Client",
    detail: "Verified Google Review",
  },
];

export default function Gallery() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  const goTo = (index) => setActive((index + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, [paused]);

  return (
    <section className="gallery section-card">
      <div className="testimonials-layout">
        <div className="testimonials-intro">
          <span className="testimonials-eyebrow">Client Voices</span>
          <h2>What clients say after stepping into Kiki&apos;s.</h2>
          <p>
            Real feedback from treatment journeys built around comfort,
            clarity, and visible skin results.
          </p>

          <div className="testimonials-highlight">
            <img
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80"
              alt="Kiki's Laser Spa client moment"
            />
            <div className="testimonials-highlight-badge">
              <strong>4.9/5</strong>
              <span>Average client satisfaction</span>
            </div>
          </div>
        </div>

        <div
          className="testimonials-carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Full-height background image */}
          <div className="carousel-bg-img">
            <img
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=80"
              alt="Spa treatment"
            />
            <div className="carousel-bg-overlay" />
          </div>

          {/* Cards float on top */}
          <div className="testimonials-track">
            {testimonials.map((item, index) => (
              <article
                key={item.name}
                className={`testimonial-card${index === active ? " is-active" : ""}`}
                aria-hidden={index !== active}
              >
                <div className="testimonial-meta">
                  <span className="testimonial-index">0{index + 1}</span>
                  <span className="testimonial-stars">★★★★★</span>
                </div>
                <p className="testimonial-quote">&ldquo;{item.quote}&rdquo;</p>
                <div className="testimonial-author">
                  <strong>{item.name}</strong>
                  <span>{item.detail}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="carousel-controls">
            <button
              className="carousel-arrow carousel-prev"
              onClick={() => goTo(active - 1)}
              aria-label="Previous testimonial"
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
                />
              ))}
            </div>
            <button
              className="carousel-arrow carousel-next"
              onClick={() => goTo(active + 1)}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
