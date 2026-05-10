import React from "react";
import { projects } from "../data/portfolioData";
import "./Projects.css";

// ── Apni images yahan import karo ──────────────────────────────────
// File ka naam apna likho, baaki sab same rehga
import img01 from "../assets/projects/project-1.png";
import img02 from "../assets/projects/project-2.png";
import img03 from "../assets/projects/project-3.png";
import img04 from "../assets/projects/project-4.png";
import img05 from "../assets/projects/project-5.png";


// num ke saath image match karo
const projectImages = {
  "01": img01,
  "02": img02,
  "03": img03,
  "04": img04,
  "05": img05
};
// ───────────────────────────────────────────────────────────────────

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title fade-in">Projects</h2>
      <p className="section-sub fade-in">
        A selection of things I've built, from side experiments to production-ready
        applications. Each one taught me something new.
      </p>
      <div className="divider fade-in" />

      <div className="projects-grid fade-in">
        {projects.map((project) => (
          <div key={project.num} className="project-card">
            <div className="project-preview">
              {projectImages[project.num] ? (
                // Real screenshot
                <img
                  src={projectImages[project.num]}
                  alt={`Project ${project.num}`}
                  className="project-preview-img"
                />
              ) : (
                // Gradient fallback — agar image na ho
                <div
                  className="project-preview-inner"
                  style={{ background: project.imgGradient }}
                >
                  <div className="project-preview-num">{project.num}</div>
                </div>
              )}
            </div>

            <div className="project-info">
              <div className="project-num">{project.num}</div>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Featured project 05 */}
        <div className="project-card project-card--full">
          <div className="project-preview">
               <img
                 src={img05}
                 alt="Project 05"
                 className="project-preview-img"
                />
          </div>

          <div className="project-info">
            <div className="project-num">05</div>
            <h3 className="project-name">✦ Portfolio Website</h3>
            <p className="project-desc">
              The very website you’re viewing now! A creative personal portfolio showcasing immersive 3D visuals, smooth scrolling animations, and an IDE-inspired About section.
            </p>
            <div className="project-tags">
              {["React", "Three.js", "CSS"].map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="view-more fade-in">
       <a
            href="https://github.com/WALEEDAI-23NOV"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ fontSize: "0.8rem" }}
        >
          View More On Git →
        </a>
      </div>
    </section>
  );
}