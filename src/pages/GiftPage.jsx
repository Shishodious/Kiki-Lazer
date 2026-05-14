import PageShell from "../components/PageShell";

export default function GiftPage() {
  return (
    <PageShell
      eyebrow="Gift a Session"
      title="Give someone a treatment they’ll actually use."
      intro="Kiki's gift experiences are designed for birthdays, bridal moments, reset rituals, or thoughtful introductions to clinical-grade laser care."
    >
      <div className="content-grid content-grid-2">
        <article className="content-card">
          <h2>Gift options</h2>
          <ul className="content-list">
            <li>Single treatment gift sessions</li>
            <li>Consultation plus personalized treatment credit</li>
            <li>Curated skin journey bundles</li>
          </ul>
        </article>
        <article className="content-card">
          <h2>How it works</h2>
          <p>
            Choose the experience, personalize the note, and let our team help
            the recipient book when they&apos;re ready. It keeps the gift flexible
            while preserving the premium feel.
          </p>
        </article>
      </div>
    </PageShell>
  );
}
