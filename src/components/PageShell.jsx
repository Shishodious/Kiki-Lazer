import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageShell({ eyebrow, title, intro, children }) {
  return (
    <div className="site-shell">
      <main className="page">
        <Navbar />

        <section className="inner-hero">
          <div className="inner-hero-backdrop" />
          <div className="inner-hero-copy">
            <span className="inner-hero-eyebrow">{eyebrow}</span>
            <h1>{title}</h1>
            <p>{intro}</p>
          </div>
        </section>

        <section className="inner-content">{children}</section>

        <Footer />
      </main>
    </div>
  );
}
