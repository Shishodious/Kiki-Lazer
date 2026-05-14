import PageShell from "../components/PageShell";

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About Kiki's"
      title="A calmer kind of laser clinic."
      intro="Kiki's Laser Spa brings together clinical precision, considered design, and a softer client experience from consultation through aftercare."
    >
      <div className="content-grid content-grid-2">
        <article className="content-card">
          <h2>Our philosophy</h2>
          <p>
            We believe advanced aesthetic treatments should feel clear,
            reassuring, and personal. Each plan is shaped around skin tone,
            sensitivity, goals, and long-term care instead of one-size-fits-all
            packages.
          </p>
        </article>
        <article className="content-card">
          <h2>What makes us different</h2>
          <ul className="content-list">
            <li>Private, consultation-led treatment journeys</li>
            <li>Protocol-driven laser and skin programs</li>
            <li>Luxury studio atmosphere without clinical coldness</li>
          </ul>
        </article>
      </div>
    </PageShell>
  );
}
