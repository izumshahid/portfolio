"use client";

import { useEffect, useRef } from "react";

/**
 * Fixed background for the tech view: a faint grid, a spotlight that follows
 * the cursor, and a small constellation of drifting nodes that link up with
 * each other and reach toward the pointer. The loop idles when the tech view
 * is off or the tab is hidden, and draws one static frame for reduced motion.
 */
export default function TechBackdrop() {
  const canvasRef = useRef(null);
  const spotRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const spot = spotRef.current;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;

    let w = 0;
    let h = 0;
    let raf = 0;
    let points = [];
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(70, Math.round((w * h) / 26000));
      points = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        if (!reduced) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
        }
        for (let j = i + 1; j < points.length; j++) {
          const q = points[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 130) {
            ctx.strokeStyle = `rgba(45,226,255,${(1 - d / 130) * 0.16})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
        const dm = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (dm < 170) {
          ctx.strokeStyle = `rgba(184,255,61,${(1 - dm / 170) * 0.5})`;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
        ctx.fillStyle = "rgba(45,226,255,0.55)";
        ctx.fillRect(p.x - 1, p.y - 1, 2, 2);
      }
    };

    const loop = () => {
      if (root.dataset.mode === "tech") draw();
      raf = requestAnimationFrame(loop);
    };

    const onMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      spot.style.transform = `translate3d(${event.clientX - 300}px, ${event.clientY - 300}px, 0)`;
    };
    const onLeave = () => {
      mouse.x = mouse.y = -9999;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    if (reduced) {
      // Mode may be applied just after mount; draw once it is.
      const t = setTimeout(draw, 50);
      return () => {
        clearTimeout(t);
        window.removeEventListener("resize", resize);
        window.removeEventListener("pointermove", onMove);
        document.removeEventListener("pointerleave", onLeave);
      };
    }
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="t-gridbg absolute inset-0" />
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div
        ref={spotRef}
        className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(45,226,255,0.10), transparent 62%)",
          transform: "translate3d(-999px,-999px,0)",
          willChange: "transform",
        }}
      />
      <div className="t-scanlines absolute inset-0" />
    </div>
  );
}
