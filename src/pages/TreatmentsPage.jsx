import PageShell from "../components/PageShell";

const treatments = [
  {
    name: "Laser Hair Reduction",
    detail: "Series-based sessions for smoother skin with long-term reduction.",
  },
  {
    name: "Skin Rejuvenation",
    detail: "Texture, tone, and brightness refinement using advanced laser care.",
  },
  {
    name: "Pigmentation Correction",
    detail: "Targeted treatment paths for uneven tone, spots, and post-acne marks.",
  },
  {
    name: "Consultation & Aftercare",
    detail: "Pre-treatment analysis and post-session guidance for better outcomes.",
  },
];

export default function TreatmentsPage() {
  return (
    <PageShell
      eyebrow="Treatments"
      title="Precision treatments for visible change."
      intro="Every Kiki's service is selected and sequenced around skin safety, measurable progress, and a studio experience that still feels elevated."
    >
      <div className="stack-cards">
        {treatments.map((item, index) => (
          <article className="content-card treatment-card" key={item.name}>
            <span className="treatment-index">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2>{item.name}</h2>
              <p>{item.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
