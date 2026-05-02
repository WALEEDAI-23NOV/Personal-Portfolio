import React from "react";
import { navLinks } from "../data/portfolioData";
import "./Navbar.css";

/**
 * Navbar
 * Fixed top navigation bar. Highlights the link matching `activeNav`.
 *
 * @param {{ activeNav: string }} props
 */
export default function Navbar({ activeNav }) {
  return (
    <nav className="navbar">
      <div className="nav-logo">WR</div>
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
    </nav>
  );
}
