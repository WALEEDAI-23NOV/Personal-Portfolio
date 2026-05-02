import React from "react";
import "./Footer.css";

/**
 * Footer
 * Simple footer with copyright and social links.
 */
export default function Footer() {
  return (
    <footer className="footer">
      <span>© 2024 Waleed Razaq. All rights reserved.</span>
      <div className="footer-links">
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
        <a href="#">Twitter</a>
      </div>
    </footer>
  );
}
