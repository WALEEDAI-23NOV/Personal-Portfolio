import React from "react";
import { projects } from "../data/portfolioData";
import "./Projects.css";

/**
 * Projects
 * Grid of project cards (4 standard + 1 full-width featured).
 * Each card shows a gradient preview, number, name, description, and tech tags.
 */
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
        {/* Standard project cards */}
        {projects.map((project) => (
          <div key={project.num} className="project-card">
            <div className="project-preview">
              <div
                className="project-preview-inner"
                style={{ background: project.imgGradient }}
              >
                <div className="project-preview-num">{project.num}</div>
              </div>
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

        {/* Featured project 05 — spans full row */}
        <div className="project-card project-card--full">
          <div className="project-preview">
            <div className="project-preview-inner">
              <div className="preview-bar">
                <div className="preview-dot" style={{ background: "#ff5f57" }} />
                <div className="preview-dot" style={{ background: "#febc2e" }} />
                <div className="preview-dot" style={{ background: "#28c840" }} />
              </div>
              <div className="preview-lines">
                <div className="preview-line" style={{ width: "75%", background: "#f39c12" }} />
                <div className="preview-line" style={{ width: "55%" }} />
                <div className="preview-line" style={{ width: "90%" }} />
                <div className="preview-line" style={{ width: "70%" }} />
              </div>
            </div>
          </div>

          <div className="project-info">
            <div className="project-num">05</div>
            <h3 className="project-name">✦ Office Management System</h3>
            <p className="project-desc">
              A comprehensive platform for attendance, leave management, payroll, and employee
              records — built for modern teams.
            </p>
            <div className="project-tags">
              {["React", "TypeScript", "GraphQL", "Prisma"].map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="view-more fade-in">
        <a href="#" className="btn-outline" style={{ fontSize: "0.8rem" }}>
          View More On Git →
        </a>
      </div>
    </section>
  );
}
