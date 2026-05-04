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

  // Wave gradient follows mouse X — and touch X on mobile
  useEffect(() => {
    const onMove  = (e) => setWaveX((e.clientX / window.innerWidth) * 100);
    const onTouch = (e) => {
      if (e.touches.length > 0)
        setWaveX((e.touches[0].clientX / window.innerWidth) * 100);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
    };
  }, []);

  // Cube tilt & float animation — supports mouse and touch
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero || !cubeContainerRef.current) return;

    let tiltX = 0, tiltY = 0, targetX = 0, targetY = 0, floatT = 0;
    let rafId;

    // Shared handler — computes normalised tilt from any pointer position
    function applyPointer(clientX, clientY) {
      const rect = hero.getBoundingClientRect();
      const nx   = (clientX - rect.left - rect.width  / 2) / (rect.width  / 2);
      const ny   = (clientY - rect.top  - rect.height / 2) / (rect.height / 2);
      targetY    = nx * 14;
      targetX    = -ny * 14;
    }

    const onMove   = (e) => applyPointer(e.clientX, e.clientY);
    const onLeave  = () => { targetX = 0; targetY = 0; };
    const onTouch  = (e) => {
      if (e.touches.length > 0)
        applyPointer(e.touches[0].clientX, e.touches[0].clientY);
    };
    const onTouchEnd = () => { targetX = 0; targetY = 0; };

    hero.addEventListener("mousemove",   onMove);
    hero.addEventListener("mouseleave",  onLeave);
    hero.addEventListener("touchmove",   onTouch,    { passive: true });
    hero.addEventListener("touchend",    onTouchEnd, { passive: true });
    hero.addEventListener("touchcancel", onTouchEnd, { passive: true });

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
      hero.removeEventListener("mousemove",   onMove);
      hero.removeEventListener("mouseleave",  onLeave);
      hero.removeEventListener("touchmove",   onTouch);
      hero.removeEventListener("touchend",    onTouchEnd);
      hero.removeEventListener("touchcancel", onTouchEnd);
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
