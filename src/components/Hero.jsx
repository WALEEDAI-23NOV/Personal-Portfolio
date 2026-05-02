import React, { useState, useEffect, useRef } from "react";
import GridCanvas from "./GridCanvas";
import Cube3D     from "./Cube3D";
import "./Hero.css";

/**
 * Hero
 * Full-viewport landing section with animated name, 3D cube, and CTA buttons.
 *
 * @param {{ threeLoaded: boolean }} props
 */
export default function Hero({ threeLoaded }) {
  const [waveX, setWaveX]   = useState(50);
  const cubeContainerRef    = useRef(null);

  // Wave gradient follows mouse X
  useEffect(() => {
    const onMove = (e) => setWaveX((e.clientX / window.innerWidth) * 100);
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Cube tilt & float animation
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero || !cubeContainerRef.current) return;

    let tiltX = 0, tiltY = 0, targetX = 0, targetY = 0, floatT = 0;
    let rafId;

    const onMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const nx   = (e.clientX - rect.left - rect.width  / 2) / (rect.width  / 2);
      const ny   = (e.clientY - rect.top  - rect.height / 2) / (rect.height / 2);
      targetY    = nx * 14;
      targetX    = -ny * 14;
    };

    const onLeave = () => { targetX = 0; targetY = 0; };

    hero.addEventListener("mousemove",  onMove);
    hero.addEventListener("mouseleave", onLeave);

    const lerp = (a, b, t) => a + (b - a) * t;

    function loop() {
      rafId    = requestAnimationFrame(loop);
      floatT  += 0.016;
      const floatY = Math.sin(floatT) * 10;
      tiltX = lerp(tiltX, targetX, 0.07);
      tiltY = lerp(tiltY, targetY, 0.07);
      if (cubeContainerRef.current) {
        cubeContainerRef.current.style.transform =
          `translateY(${floatY}px) perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      }
    }
    loop();

    return () => {
      cancelAnimationFrame(rafId);
      hero.removeEventListener("mousemove",  onMove);
      hero.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section id="hero" className="hero-section">
      {/* Animated background grid */}
      <GridCanvas />

      {/* 3D Cube */}
      <div className="cube-container" ref={cubeContainerRef}>
        {threeLoaded && <Cube3D />}
      </div>

      {/* Text content */}
      <p className="hero-hello">Hello, I'm</p>

      <h1
        className="hero-name wave-text"
        style={{ "--x": `${waveX}%` }}
      >
        <span>Waleed </span><span>Razaq</span>
      </h1>

      <div className="hero-title">
        <div className="line" />
        <span className="tag">&lt; Software Engineer /&gt;</span>
        <div className="line right" />
      </div>

      <p className="hero-desc">
        Crafting performant web experiences with clean code, creative UI, and a love for detail.
      </p>

      <p className="hero-exp">
        <strong>1+</strong> years of experience
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="btn-primary">View Projects</a>
        <a href="#cta"      className="btn-outline">Get in Touch</a>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
}
