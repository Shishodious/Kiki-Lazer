import PageShell from "../components/PageShell";

export default function ReservePage() {
  return (
    <PageShell
      eyebrow="Reserve"
      title="Book your consultation."
      intro="Start with a conversation about goals, skin history, suitability, and the right treatment path before committing to a full session series."
    >
      <div className="content-grid content-grid-2">
        <article className="content-card">
          <h2>Before you book</h2>
          <ul className="content-list">
            <li>Share your skin concerns and treatment goals</li>
            <li>Discuss contraindications and timing</li>
            <li>Receive a personalized care recommendation</li>
          </ul>
        </article>
        <article className="content-card">
          <h2>Availability</h2>
          <p>
            Consultations are available by appointment, with dedicated evening
            and weekend slots for clients balancing treatment with work or
            events.
          </p>
          <button className="content-button" type="button">
            Request a Booking
          </button>
        </article>
      </div>
    </PageShell>
  );
}
