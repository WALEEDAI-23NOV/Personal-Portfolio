import React from "react";
import VSCodeTyping from "./VSCodeTyping";
import { stats }    from "../data/portfolioData";
import "./About.css";

/**
 * About
 * Two-column section: personal bio on the left,
 * animated VS Code snippet on the right, with stat cards below.
 */
export default function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title fade-in">About Me</h2>
      <p className="section-sub fade-in">
        A glimpse into who I am, what drives me, and how I approach building software.
      </p>
      <div className="divider fade-in" />

      {/* Two-column grid */}
      <div className="about-grid fade-in">

        {/* Bio */}
        <div>
          <div className="about-label purple">
            <span className="label-line purple-line" />
            WHO I AM
            <span className="label-fade-line purple-fade" />
          </div>

          <div className="about-text">
            <p>
              Hello, I'm <strong className="text-white">Waleed Razaq</strong>, a passionate
              software engineer based in{" "}
              <span className="text-blue">Lahore</span>,{" "}
              <span className="text-purple">Pakistan</span>. Despite graduating in Software
              Engineering, my deep love for coding led me to pursue a career in software
              development.
            </p>
            <p>
              With over <span className="text-green">2 years of experience</span>, I specialize
              in front-end development, crafting engaging and user-friendly interfaces. Alongside
              this, I also work with WordPress, developing news, blogging, and e-commerce
              websites.
            </p>
            <p>
              Beyond programming, I'm a passionate{" "}
              <span className="text-orange">Cricket lover</span> and enjoy exploring virtual
              worlds — these moments add a delightful balance to my life.
            </p>
          </div>
        </div>

        {/* VS Code snippet */}
        <div>
          <div className="about-label green">
            <span className="label-line green-line" />
            MY DAILY CODE
            <span className="label-fade-line green-fade" />
          </div>
          <VSCodeTyping />
        </div>
      </div>

      {/* Stats */}
      <div className="stats-row fade-in">
        {stats.map(({ num, label }) => (
          <div key={label} className="stat-card">
            <div className="stat-num">{num}</div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
