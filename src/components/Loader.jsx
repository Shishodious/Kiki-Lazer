import { useState, useEffect, useLayoutEffect, useRef } from "react";
import BrandScript, { BRAND_MARK_SRC } from "./BrandScript";

export default function Loader() {
  const [phase, setPhase] = useState("waiting"); // waiting → entering → leaving → done
  const overlayRef = useRef(null);

  // Hold the intro until the logo mark has decoded, so the pull-back never plays on an empty box.
  useEffect(() => {
    let cancelled = false;
    const start = () => {
      if (!cancelled) setPhase((current) => (current === "waiting" ? "entering" : current));
    };
    const img = new Image();
    img.src = BRAND_MARK_SRC;
    img.decode().then(start, start);
    const fallback = setTimeout(start, 700);
    return () => {
      cancelled = true;
      clearTimeout(fallback);
    };
  }, []);

  // The mark starts centred on screen and scaled up to fill it, then pulls back into the wordmark.
  // Measure its resting spot (with the animation switched off) before the first frame paints.
  useLayoutEffect(() => {
    if (phase !== "entering") return;
    const overlay = overlayRef.current;
    const mark = overlay?.querySelector(".brand-k");
    if (!mark) return;

    mark.style.animation = "none";
    const rect = mark.getBoundingClientRect();
    mark.style.animation = "";

    const viewW = window.innerWidth;
    const viewH = window.innerHeight;
    overlay.style.setProperty("--pull-x", `${viewW / 2 - (rect.left + rect.width / 2)}px`);
    overlay.style.setProperty("--pull-y", `${viewH / 2 - (rect.top + rect.height / 2)}px`);
    overlay.style.setProperty("--pull-scale", String((Math.max(viewW, viewH) / rect.height) * 1.15));
  }, [phase]);

  useEffect(() => {
    if (phase === "entering") {
      const timer = setTimeout(() => setPhase("leaving"), 2000);
      return () => clearTimeout(timer);
    }
    if (phase === "leaving") {
      const timer = setTimeout(() => setPhase("done"), 700);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div ref={overlayRef} className={`loader-overlay loader-${phase}`} aria-hidden="true">
      <div className="loader-inner">
        <div className="loader-brand">
          <BrandScript className="loader-script" label="Kiki's" />
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
