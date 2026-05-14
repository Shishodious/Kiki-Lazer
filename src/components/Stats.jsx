const stats = [
  { value: "2,400+", label: "Treatment Sessions" },
  { value: "12+", label: "Certified Experts" },
  { value: "2018", label: "Founded In" },
];

export default function Stats() {
  return (
    <section className="stats">
      {stats.map(({ value, label }) => (
        <article key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </article>
      ))}
    </section>
  );
}
