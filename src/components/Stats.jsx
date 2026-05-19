import { useSiteContent } from "../context/SiteContentContext";

export default function Stats() {
  const { homePage } = useSiteContent();

  return (
    <section className="stats">
      {homePage.stats.map(({ value, label }) => (
        <article key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </article>
      ))}
    </section>
  );
}
