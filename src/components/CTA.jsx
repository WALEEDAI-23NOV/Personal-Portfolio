import React from "react";
import "./CTA.css";

/**
 * CTA
 * Call-to-action section inviting visitors to get in touch.
 */
export default function CTA() {
  return (
    <section id="cta" className="cta-section">
      <span className="cta-emoji">👋</span>
      <h2 className="cta-title fade-in">
        Let's <span>Work Together</span>
      </h2>
      <p className="cta-desc fade-in">
        Have a project in mind or want to discuss opportunities? I'm currently open to
        freelance and full-time roles.
      </p>
      <a href="mailto:waleedrazaq75@gmail.com" className="email-btn fade-in">
        ✉ waleedrazaq75@gmail.com →
      </a>
    </section>
  );
}
