import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const menuItems = [
  { label: "About Kiki's", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solidNav = scrolled;

  return (
    <>
      <header className={`topbar${solidNav ? " is-scrolled" : ""}${menuOpen ? " menu-is-open" : ""}`}>
        <Link className="brand" to="/">
          <span className="brand-script">Kiki&apos;s</span>
          <span className="brand-stack">
            <span>Laser</span>
            <span>Spa</span>
          </span>
        </Link>

        <div className="topbar-actions">
          <Link className="reserve-pill" to="/contact">
            Reserve
          </Link>
          <span className="topbar-divider" aria-hidden="true" />
          <button
            className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`menu-panel ${menuOpen ? "is-open" : ""}`}>
        <div className="menu-sheet">
          <nav className="menu-list">
            {menuItems.map((item, index) => (
              <NavLink key={item.to} to={item.to} onClick={() => setMenuOpen(false)}>
                <span className="menu-index">({String(index + 1).padStart(2, "0")})</span>
                <span className="menu-label">{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="menu-visual">
          <img
            src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1600&q=80"
            alt="Laser spa atmosphere"
          />
        </div>
      </div>
    </>
  );
}
