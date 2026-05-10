import React from "react";
import "./CTA.css";
import { RxGithubLogo } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa";

export default function CTA() {
  return (
    <section id="cta" className="cta-section">
      <span className="cta-emoji">👋</span>

      <h2 className="cta-title fade-in">
        Let's <span>Work Together</span>
      </h2>

      <p className="cta-desc fade-in">
        Have a project in mind or want to discuss opportunities?
        I'm currently open to freelance and full-time roles.
      </p>

      <a
        href="mailto:waleedrazaq75@gmail.com"
        className="email-btn fade-in"
      >
        ✉ waleedrazaq75@gmail.com →
      </a>

      {/* Social Links */}
      <div className="social-wrapper fade-in">
        <div className="social-line" />
        <span className="social-text">FIND ME ON</span>
        <div className="social-line" />
      </div>

      <div className="social-links fade-in">
        <a
          href="https://www.linkedin.com/in/muhammad-waleed-razaq-951877261/?skipRedirect=true"
          target="_blank"
          rel="noopener noreferrer"
          className="social-card"
        >
         <FaLinkedin />LinkedIn
        </a>

        <a
          href="https://github.com/WALEEDAI-23NOV"
          target="_blank"
          rel="noopener noreferrer"
          className="social-card"
        >
         <RxGithubLogo />  GitHub
        </a>

      </div>

      <div className="cta-credit">
       <div className="cta-credit-line"></div>
       <p>
       Designed & built by <span>Waleed Razaq</span>
      </p>
     </div>

    </section>
  );
}