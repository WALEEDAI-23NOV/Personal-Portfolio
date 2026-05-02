import React, { useRef, useEffect } from "react";

const CELL = 60;
const SPOTLIGHT = 260;

/**
 * GridCanvas
 * Draws an interactive mouse-reactive grid in a canvas element.
 * Used as the animated background of the Hero section.
 */
export default function GridCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let mouse = { x: -999, y: -999 };
    let smooth = { x: -999, y: -999 };

    function resize() {
      canvas.width  = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", onMove);

    function lerp(a, b, t) {
      return a + (b - a) * t;
    }

    function draw() {
      requestAnimationFrame(draw);
      smooth.x = lerp(smooth.x, mouse.x, 0.1);
      smooth.y = lerp(smooth.y, mouse.y, 0.1);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.ceil(canvas.width  / CELL) + 1;
      const rows = Math.ceil(canvas.height / CELL) + 1;

      // Vertical lines
      for (let c = 0; c <= cols; c++) {
        const x    = c * CELL;
        const dist  = Math.abs(x - smooth.x);
        const alpha = Math.max(0, 1 - dist / SPOTLIGHT);
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.strokeStyle = `rgba(79,142,247,${0.02 + alpha * 0.1})`;
        ctx.lineWidth   = alpha > 0.1 ? 1 + alpha * 0.6 : 0.5;
        ctx.stroke();
      }

      // Horizontal lines
      for (let r = 0; r <= rows; r++) {
        const y    = r * CELL;
        const dist  = Math.abs(y - smooth.y);
        const alpha = Math.max(0, 1 - dist / SPOTLIGHT);
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.strokeStyle = `rgba(79,142,247,${0.02 + alpha * 0.1})`;
        ctx.lineWidth   = alpha > 0.1 ? 1 + alpha * 0.6 : 0.5;
        ctx.stroke();
      }

      // Spotlight glow
      if (smooth.x > 0) {
        const g = ctx.createRadialGradient(smooth.x, smooth.y, 0, smooth.x, smooth.y, SPOTLIGHT);
        g.addColorStop(0,   "rgba(79,142,247,0.02)");
        g.addColorStop(0.5, "rgba(79,142,247,0.01)");
        g.addColorStop(1,   "rgba(79,142,247,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Vignette
      const vig = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, canvas.height * 0.2,
        canvas.width / 2, canvas.height / 2, canvas.height * 0.75
      );
      vig.addColorStop(0, "rgba(0,0,0,0)");
      vig.addColorStop(1, "rgba(6,13,26,0.92)");
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
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
