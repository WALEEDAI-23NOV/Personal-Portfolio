import React, { useState } from "react";
import { navLinks } from "../data/portfolioData";
import "./Navbar.css";

/**
 * Navbar
 * Fixed top navigation bar with hamburger menu for mobile.
 * Highlights the link matching `activeNav`.
 *
 * @param {{ activeNav: string }} props
 */
export default function Navbar({ activeNav }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">WR</div>

        {/* Desktop links */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={activeNav === link.href.slice(1) ? "active" : ""}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button — mobile only */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile slide-down menu */}
      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={activeNav === link.href.slice(1) ? "active" : ""}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop — closes menu when tapped outside */}
      {menuOpen && (
        <div className="mobile-menu-backdrop" onClick={closeMenu} />
      )}
    </>
  );
}
