export default function Hero() {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source
          src="https://videos.pexels.com/video-files/9421566/9421566-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
      </video>
      <div className="hero-overlay" />

      <div className="hero-copy">
        <div className="hero-heading-block">
          <div className="hero-tag">
            <span className="hero-tag-dot" />
            Precision Laser Aesthetics
          </div>
          <h1>Laser. Luxury. Rejuvenation.</h1>
          <p className="hero-sub">
            Advanced laser treatments tailored to your skin — calm, clinical,
            and beautifully effective.
          </p>
        </div>
      </div>

      <button className="hero-orbit-cta" type="button">
        <span>Reserve</span>
      </button>
    </section>
  );
}
