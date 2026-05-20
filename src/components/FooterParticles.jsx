import { useEffect, useRef } from "react";

export default function FooterParticles() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const particlesRef = useRef([]);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const footer = canvas.parentElement;
    const autoDrift = window.matchMedia("(hover: none)").matches;

    const initParticles = () => {
      const count = Math.floor((canvas.width * canvas.height) / 5000);
      particlesRef.current = Array.from({ length: count }, () => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        return {
          homeX: x,
          homeY: y,
          x,
          y,
          vx: 0,
          vy: 0,
          size: Math.random() * 2.4 + 1.2,
          opacity: Math.random() * 0.45 + 0.25,
          // Per-particle drift signature so each sphere wanders independently
          phaseX: Math.random() * Math.PI * 2,
          phaseY: Math.random() * Math.PI * 2,
          freqX: 0.12 + Math.random() * 0.28,
          freqY: 0.12 + Math.random() * 0.28,
          ampX: 8 + Math.random() * 22,
          ampY: 8 + Math.random() * 22,
        };
      });
    };

    const resize = () => {
      canvas.width = footer.offsetWidth;
      canvas.height = footer.offsetHeight;
      initParticles();
    };

    const onMouseMove = (e) => {
      const rect = footer.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const { x: mx, y: my } = mouseRef.current;
      const REPEL_RADIUS = 110;
      const REPEL_STRENGTH = 6;
      const SPRING = 0.048;
      const FRICTION = 0.88;
      const t = autoDrift ? performance.now() / 1000 : 0;

      ctx.shadowBlur = 10;

      for (const p of particlesRef.current) {
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < REPEL_RADIUS && dist > 0) {
          const force = (1 - dist / REPEL_RADIUS) * REPEL_STRENGTH;
          p.vx -= (dx / dist) * force;
          p.vy -= (dy / dist) * force;
        }

        const targetX = autoDrift
          ? p.homeX + Math.sin(t * p.freqX + p.phaseX) * p.ampX
          : p.homeX;
        const targetY = autoDrift
          ? p.homeY + Math.cos(t * p.freqY + p.phaseY) * p.ampY
          : p.homeY;

        p.vx += (targetX - p.x) * SPRING;
        p.vy += (targetY - p.y) * SPRING;
        p.vx *= FRICTION;
        p.vy *= FRICTION;
        p.x += p.vx;
        p.y += p.vy;

        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const glow = Math.min(speed * 4, 14);

        ctx.shadowColor = "rgba(196, 160, 232, 0.8)";
        ctx.shadowBlur = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size + speed * 0.15, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(196, 160, 232, ${Math.min(p.opacity + speed * 0.04, 0.85)})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    resize();
    if (!autoDrift) {
      footer.addEventListener("mousemove", onMouseMove);
      footer.addEventListener("mouseleave", onMouseLeave);
    }
    window.addEventListener("resize", resize);
    animate();

    return () => {
      cancelAnimationFrame(rafRef.current);
      if (!autoDrift) {
        footer.removeEventListener("mousemove", onMouseMove);
        footer.removeEventListener("mouseleave", onMouseLeave);
      }
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="footer-canvas" />;
}
