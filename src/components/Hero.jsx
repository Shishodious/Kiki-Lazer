import { useNavigate } from "react-router-dom";
import { useSiteContent } from "../context/SiteContentContext";

function renderLines(value) {
  if (typeof value !== "string") return null;
  return value.split("\n").map((line, index) => (
    <span key={`${line}-${index}`}>
      {index > 0 ? <br /> : null}
      {line}
    </span>
  ));
}

export default function Hero() {
  const navigate = useNavigate();
  const { homePage } = useSiteContent();
  const { hero } = homePage;

  return (
    <section className="hero">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src={hero.videoUrl} type="video/mp4" />
      </video>
      <div className="hero-overlay" />

      <div className="hero-copy">
        <div className="hero-heading-block">
          <div className="hero-tag">
            <span className="hero-tag-dot" />
            {hero.tag}
          </div>
          <h1>{renderLines(hero.title)}</h1>
          <p className="hero-sub">{hero.subtitle}</p>
        </div>
      </div>

      <button className="hero-orbit-cta" type="button" onClick={() => navigate("/contact")}>
        <span>{hero.ctaLabel}</span>
      </button>
    </section>
  );
}
