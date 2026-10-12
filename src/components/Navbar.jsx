import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import profile, { navLinks } from "../config/profile.js";
import Button from "./Button.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-nav">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={close} aria-label={`${profile.name} - home`}>
          <span className="brand-mark" aria-hidden="true">AA</span>
          <span className="brand-name">{profile.name}</span>
        </Link>
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
        <nav id="primary-nav" className={`nav-panel ${open ? "is-open" : ""}`} aria-label="Primary">
          <ul>
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} end={to === "/"} onClick={close} className={({ isActive }) => (isActive ? "active" : "")}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button href={profile.cvPath} download={profile.cvFileName} icon="download" className="nav-cv">
            Download CV
          </Button>
        </nav>
      </div>
    </header>
  );
}
