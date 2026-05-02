import React from "react";
import { posts } from "../data/portfolioData";
import "./Posts.css";

/**
 * Posts
 * Shows LinkedIn-style post cards.
 */
export default function Posts() {
  return (
    <section id="posts">
      <h2 className="section-title fade-in">Posts</h2>
      <p className="section-sub fade-in">
        I occasionally share thoughts, tips, and learnings on LinkedIn.
      </p>
      <div className="divider fade-in" />

      <div className="posts-grid fade-in">
        {posts.map((post, index) => (
          <div key={index} className="post-card">
            {/* Header */}
            <div className="post-header">
              <div className="post-author">
                <div className="post-avatar">{post.initials}</div>
                <div>
                  <div className="post-name">{post.name}</div>
                  <div className="post-time">{post.time}</div>
                </div>
              </div>
              <div className="post-platform">in</div>
            </div>

            {/* Content */}
            <div className="post-content-area">
              <div className="post-content-inner">
                <div className="post-category">{post.category}</div>
                <div className="post-img-placeholder" style={{ background: post.bg }}>
                  <div className="post-icon-wrap">
                    <div className="post-icon">{post.icon}</div>
                    <div className="post-icon-label" style={{ color: post.iconColor }}>
                      {post.iconLabel}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="post-footer">{post.footer}</div>
          </div>
        ))}
      </div>

      <div className="posts-cta fade-in">
        <a href="#" className="btn-outline" style={{ fontSize: "0.8rem" }}>
          Follow on LinkedIn →
        </a>
      </div>
    </section>
  );
}
