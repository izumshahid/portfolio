"use client";

import { motion, useReducedMotion, useSpring } from "framer-motion";
import { useRef } from "react";

/**
 * A tech "window" that tilts toward the cursor and lights up under it.
 * The tilt is skipped under prefers-reduced-motion; the glow is CSS-only.
 */
export function TiltCard({ children, className = "", max = 6, as = "div" }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const rx = useSpring(0, { stiffness: 220, damping: 22 });
  const ry = useSpring(0, { stiffness: 220, damping: 22 });
  const Tag = motion[as] ?? motion.div;

  const onMove = (event) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    if (reduced) return;
    ry.set((px - 0.5) * max * 2);
    rx.set((0.5 - py) * max * 2);
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <Tag
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className={`t-window t-spot ${className}`}
    >
      {children}
    </Tag>
  );
}
