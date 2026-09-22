"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";

/** Fades and lifts a block into place the first time it enters the viewport. */
export function Reveal({ children, delay = 0, y = 20, className = "" }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/** Staggers direct children of a Reveal-like container. */
export function Stagger({ children, className = "", stagger = 0.08 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 18 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Pulls an element slightly toward the cursor while hovered. */
export function Magnetic({ children, strength = 0.25, className = "" }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const reduced = useReducedMotion();

  const handleMove = (event) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setOffset({
      x: (event.clientX - (rect.left + rect.width / 2)) * strength,
      y: (event.clientY - (rect.top + rect.height / 2)) * strength,
    });
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      animate={offset}
      transition={{ type: "spring", stiffness: 260, damping: 18, mass: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Tilts a card toward the cursor and moves a specular highlight with it.
 * Disabled outright under prefers-reduced-motion.
 */
export function Tilt({ children, className = "", max = 7 }) {
  const ref = useRef(null);
  const [transform, setTransform] = useState({ rx: 0, ry: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, on: false });
  const reduced = useReducedMotion();

  const handleMove = (event) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    setTransform({ rx: (0.5 - py) * max * 2, ry: (px - 0.5) * max * 2 });
    setGlare({ x: px * 100, y: py * 100, on: true });
  };

  const reset = () => {
    setTransform({ rx: 0, ry: 0 });
    setGlare((g) => ({ ...g, on: false }));
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      animate={{ rotateX: transform.rx, rotateY: transform.ry }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
    >
      {children}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: glare.on ? 1 : 0,
          background: `radial-gradient(420px circle at ${glare.x}% ${glare.y}%, rgb(255 255 255 / 0.08), transparent 45%)`,
        }}
      />
    </motion.div>
  );
}

export { motion };
