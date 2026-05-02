import React from "react";
import { skillGroups } from "../data/portfolioData";
import "./Tools.css";

/**
 * Tools
 * Displays skill groups (Frontend, Styling, UI Libraries, DevOps)
 * each inside a frosted-glass card with icon grid.
 */
export default function Tools() {
  return (
    <section id="tools">
      <h2 className="section-title fade-in">Tools I Use</h2>
      <p className="section-sub fade-in">
        Technologies and tools I rely on day-to-day to bring ideas to life.
      </p>
      <div className="divider fade-in" />

      {skillGroups.map(({ label, lineClass, skills, gridClass }) => (
        <div key={label} className="skills">
          <div className="skills-container">
            <div className="skills-header">
              <span className={`line ${lineClass}`} />
              <h3>{label}</h3>
            </div>

            <div className={`skills-grid ${gridClass}`}>
              {skills.map((skill) => (
                <div key={skill.name} className="skill-card">
                  <img src={skill.img} alt={skill.name} />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
