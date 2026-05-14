import { useState, useEffect } from "react";

export default function Loader() {
  const [phase, setPhase] = useState("entering"); // entering → holding → leaving → done

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("holding"), 700);
    const t2 = setTimeout(() => setPhase("leaving"), 1600);
    const t3 = setTimeout(() => setPhase("done"), 2300);
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, []);

  if (phase === "done") return null;

  return (
    <div className={`loader-overlay loader-${phase}`} aria-hidden="true">
      <div className="loader-inner">
        <div className="loader-brand">
          <span className="loader-script">Kiki&apos;s</span>
          <div className="loader-stack">
            <span>Laser</span>
            <span>Spa</span>
          </div>
        </div>
        <div className="loader-bar">
          <div className="loader-bar-fill" />
        </div>
        <p className="loader-tagline">Precision. Warmth. Results.</p>
      </div>
    </div>
  );
}
