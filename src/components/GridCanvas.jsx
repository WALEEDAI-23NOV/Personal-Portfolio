import React, { useRef, useEffect } from "react";

const CELL       = 60;
const SPOTLIGHT  = 280;

// Base opacity for every grid line — always visible without any interaction
const BASE_ALPHA = 0.07;
// Extra opacity added on top when the spotlight is nearby
const HOVER_EXTRA = 0.10;

/**
 * GridCanvas
 * - Grid is always visible at BASE_ALPHA (no tap needed on mobile)
 * - Mouse / touch moves a spotlight that brightens nearby lines
 * - Vignette fades the edges to keep it subtle
 */
export default function GridCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");

    // Start spotlight at canvas centre so grid looks lit from the start
    let mouse  = { x: -1, y: -1 };   // -1 = "not yet set, use centre"
    let smooth = { x: -1, y: -1 };

    function resize() {
      canvas.width  = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      // Reset to centre so grid doesn't go dark on resize
      if (mouse.x === -1) {
        mouse.x  = canvas.width  / 2;
        mouse.y  = canvas.height / 2;
        smooth.x = mouse.x;
        smooth.y = mouse.y;
      }
    }
    resize();
    window.addEventListener("resize", resize);

    // Mouse
    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Touch — move spotlight to finger position
    const onTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
      }
    };
    // On touch end, drift spotlight back to centre slowly (handled by lerp)
    const onTouchEnd = () => {
      mouse.x = canvas.width  / 2;
      mouse.y = canvas.height / 2;
    };
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend",  onTouchEnd,  { passive: true });

    function lerp(a, b, t) { return a + (b - a) * t; }

    function draw() {
      requestAnimationFrame(draw);

      smooth.x = lerp(smooth.x, mouse.x, 0.08);
      smooth.y = lerp(smooth.y, mouse.y, 0.08);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.ceil(canvas.width  / CELL) + 1;
      const rows = Math.ceil(canvas.height / CELL) + 1;

      // ── Vertical lines ───────────────────────────────────────────
      for (let c = 0; c <= cols; c++) {
        const x     = c * CELL;
        const dist  = Math.abs(x - smooth.x);
        const hover = Math.max(0, 1 - dist / SPOTLIGHT);
        const alpha = BASE_ALPHA + hover * HOVER_EXTRA;

        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.strokeStyle = `rgba(79,142,247,${alpha})`;
        ctx.lineWidth   = hover > 0.15 ? 1 + hover * 0.5 : 0.6;
        ctx.stroke();
      }

      // ── Horizontal lines ─────────────────────────────────────────
      for (let r = 0; r <= rows; r++) {
        const y     = r * CELL;
        const dist  = Math.abs(y - smooth.y);
        const hover = Math.max(0, 1 - dist / SPOTLIGHT);
        const alpha = BASE_ALPHA + hover * HOVER_EXTRA;

        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.strokeStyle = `rgba(79,142,247,${alpha})`;
        ctx.lineWidth   = hover > 0.15 ? 1 + hover * 0.5 : 0.6;
        ctx.stroke();
      }

      // ── Spotlight glow ───────────────────────────────────────────
      const g = ctx.createRadialGradient(
        smooth.x, smooth.y, 0,
        smooth.x, smooth.y, SPOTLIGHT
      );
      g.addColorStop(0,   "rgba(79,142,247,0.04)");
      g.addColorStop(0.5, "rgba(79,142,247,0.015)");
      g.addColorStop(1,   "rgba(79,142,247,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // ── Edge vignette (keeps corners dark & dramatic) ────────────
      const vig = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, canvas.height * 0.25,
        canvas.width / 2, canvas.height / 2, canvas.height * 0.80
      );
      vig.addColorStop(0, "rgba(6,13,26,0)");
      vig.addColorStop(1, "rgba(6,13,26,0.88)");
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    draw();

    return () => {
      window.removeEventListener("resize",      resize);
      window.removeEventListener("mousemove",   onMouseMove);
      window.removeEventListener("touchmove",   onTouchMove);
      window.removeEventListener("touchend",    onTouchEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position:      "absolute",
        inset:         0,
        width:         "100%",
        height:        "100%",
        pointerEvents: "none",
        zIndex:        0,
      }}
    />
  );
}
