"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const CYAN = "#2de2ff";
const LIME = "#b6ff3c";
const WORLD_W = 2600;
const WORLD_H = 2000;
const ISLAND_R = 118;
const CARD_W = 230;
const MAX_SCALE = 1.7;

const clamp = (v, a, b) => Math.min(Math.max(v, a), b);
const pad = (n) => String(n).padStart(2, "0");

function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** An organic blob outline as a list of points around (0,0). */
function blob(r, rand, n = 30) {
  const p1 = rand() * 6;
  const p2 = rand() * 6;
  const p3 = rand() * 6;
  return Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2;
    const k = 1 + 0.16 * Math.sin(a * 3 + p1) + 0.1 * Math.sin(a * 5 + p2) + 0.05 * Math.sin(a * 9 + p3);
    return [Math.cos(a) * r * k, Math.sin(a) * r * k];
  });
}

function trace(ctx, pts, cx, cy, scale = 1) {
  const n = pts.length;
  const at = (i) => pts[(i + n) % n];
  ctx.beginPath();
  for (let i = 0; i < n; i++) {
    const a = at(i);
    const b = at(i + 1);
    const mx = cx + ((a[0] + b[0]) / 2) * scale;
    const my = cy + ((a[1] + b[1]) / 2) * scale;
    if (i === 0) {
      const f = at(-1);
      ctx.moveTo(cx + ((f[0] + a[0]) / 2) * scale, cy + ((f[1] + a[1]) / 2) * scale);
    }
    ctx.quadraticCurveTo(cx + a[0] * scale, cy + a[1] * scale, mx, my);
  }
  ctx.closePath();
}

function buildWorld(projects) {
  const rand = rng(7);
  const cols = 5;
  const m = 340;
  const gx = (WORLD_W - m * 2) / (cols - 1);
  const rows = Math.ceil(projects.length / cols);
  const gy = (WORLD_H - m * 2) / Math.max(rows - 1, 1);

  const islands = projects.map((project, i) => {
    const r = Math.floor(i / cols);
    const c0 = i % cols;
    const c = r % 2 ? cols - 1 - c0 : c0; // the route snakes back and forth
    const x = m + c * gx + (rand() - 0.5) * 150;
    const y = m + r * gy + (rand() - 0.5) * 110 + (c % 2 ? 46 : -46);
    const outline = blob(ISLAND_R, rand);
    const trees = Array.from({ length: 8 }, () => {
      const a = rand() * Math.PI * 2;
      const d = Math.sqrt(rand()) * ISLAND_R * 0.78;
      return { x: Math.cos(a) * d, y: Math.sin(a) * d, s: 6 + rand() * 7 };
    });
    return { project, x, y, outline, trees };
  });

  const islets = [];
  for (let tries = 0; tries < 400 && islets.length < 12; tries++) {
    const x = 120 + rand() * (WORLD_W - 240);
    const y = 120 + rand() * (WORLD_H - 240);
    const r = 38 + rand() * 34;
    const free = [...islands, ...islets].every((o) => Math.hypot(o.x - x, o.y - y) > (o.r ?? ISLAND_R) + r + 120);
    if (!free) continue;
    islets.push({
      x,
      y,
      r,
      outline: blob(r, rand, 20),
      trees: Array.from({ length: 3 }, () => ({
        x: (rand() - 0.5) * r,
        y: (rand() - 0.5) * r,
        s: 5 + rand() * 5,
      })),
    });
  }

  const clouds = Array.from({ length: 9 }, () => ({
    x: rand() * WORLD_W,
    y: rand() * WORLD_H,
    r: 90 + rand() * 120,
    v: 8 + rand() * 14,
    outline: blob(1, rand, 14),
  }));

  return { islands, islets, clouds };
}

/**
 * A game-style world map. Drag to move, scroll or pinch to zoom. Zoomed out,
 * every project is a numbered pin on its own island. Zoom in and the pin opens
 * into the project card; click it to go to the case study.
 */
export default function ExploreMap({ projects }) {
  const wrapRef = useRef(null);
  const selRef = useRef(-1);
  const fullRef = useRef(false);
  const [full, setFull] = useState(false);
  const [sel, setSel] = useState(-1);
  const canvasRef = useRef(null);
  const api = useRef({});

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const world = buildWorld(projects);
    const imgs = {};
    const cam = { x: 0, y: 0, s: 1 };
    let target = null;
    let VW = 0;
    let VH = 0;
    let fit = 0.3;
    let raf = 0;
    let last = performance.now();
    let t = 0;
    let visible = true;
    let hover = -1;
    const pointers = new Map();
    let drag = { moved: 0 };
    let pinch = 0;

    const img = (project) => {
      if (!imgs[project.slug]) {
        const im = new window.Image();
        im.src = project.cover.src;
        imgs[project.slug] = im;
      }
      return imgs[project.slug];
    };

    const clampCam = () => {
      const vw = VW / cam.s;
      const vh = VH / cam.s;
      cam.x = vw >= WORLD_W ? (WORLD_W - vw) / 2 : clamp(cam.x, 0, WORLD_W - vw);
      cam.y = vh >= WORLD_H ? (WORLD_H - vh) / 2 : clamp(cam.y, 0, WORLD_H - vh);
    };

    const zoomAt = (sx, sy, factor) => {
      const ns = clamp(cam.s * factor, fit, MAX_SCALE);
      const wx = cam.x + sx / cam.s;
      const wy = cam.y + sy / cam.s;
      cam.s = ns;
      cam.x = wx - sx / ns;
      cam.y = wy - sy / ns;
      clampCam();
    };

    // The island is parked beside the detail panel: left of it on desktop,
    // above it on phones.
    const flyTo = (x, y, s) => {
      const wide = window.innerWidth >= 768;
      target = {
        x,
        y,
        s: clamp(s, fit, MAX_SCALE),
        offX: wide ? 190 : 0,
        offY: wide ? 0 : VH * 0.2,
      };
    };

    const select = (i) => {
      selRef.current = i;
      setSel(i);
      if (i >= 0) {
        const isl = world.islands[i];
        flyTo(isl.x, isl.y, window.innerWidth >= 768 ? 1.2 : 0.95);
      }
    };

    const fitView = () => {
      cam.s = fit;
      cam.x = WORLD_W / 2 - VW / fit / 2;
      cam.y = WORLD_H / 2 - VH / fit / 2;
      clampCam();
    };

    const toWorld = (sx, sy) => [cam.x + sx / cam.s, cam.y + sy / cam.s];
    const hit = (sx, sy) => {
      const [wx, wy] = toWorld(sx, sy);
      let best = -1;
      let bd = ISLAND_R * 1.05;
      world.islands.forEach((isl, i) => {
        const d = Math.hypot(wx - isl.x, wy - isl.y);
        if (d < bd) {
          bd = d;
          best = i;
        }
      });
      return best;
    };

    const text = (str, x, y, size, color, align = "center", weight = 600) => {
      ctx.font = `${weight} ${size}px ui-monospace, SFMono-Regular, Menlo, monospace`;
      ctx.textAlign = align;
      ctx.fillStyle = color;
      ctx.fillText(str, x, y);
    };

    const drawIsland = (isl, hot) => {
      const { x, y } = isl;
      trace(ctx, isl.outline, x, y, 1.3);
      ctx.fillStyle = "rgba(45,226,255,0.09)";
      ctx.fill();
      ctx.strokeStyle = "rgba(45,226,255,0.22)";
      ctx.lineWidth = 2;
      ctx.stroke();
      trace(ctx, isl.outline, x, y, 1.1);
      ctx.fillStyle = "#0a3a44";
      ctx.fill();
      trace(ctx, isl.outline, x, y, 1);
      const g = ctx.createRadialGradient(x - 20, y - 30, 10, x, y, ISLAND_R * 1.1);
      g.addColorStop(0, "#2a8f63");
      g.addColorStop(1, "#0e4d48");
      ctx.fillStyle = g;
      ctx.fill();
      ctx.save();
      ctx.strokeStyle = hot ? LIME : "rgba(182,255,60,0.55)";
      ctx.lineWidth = hot ? 4 : 2.5;
      ctx.shadowColor = hot ? LIME : "rgba(182,255,60,0.6)";
      ctx.shadowBlur = hot ? 26 : 8;
      ctx.stroke();
      ctx.restore();
      for (const tr of isl.trees) {
        ctx.fillStyle = "#0b3d2d";
        ctx.beginPath();
        ctx.arc(x + tr.x, y + tr.y + tr.s * 0.4, tr.s, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#35b06c";
        ctx.beginPath();
        ctx.arc(x + tr.x - 1, y + tr.y - 1, tr.s * 0.8, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawCard = (isl, alpha, hot) => {
      if (alpha <= 0) return;
      const h = Math.round(CARD_W * 0.58);
      const x = isl.x - CARD_W / 2;
      const y = isl.y - h / 2 - 14;
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.shadowColor = hot ? LIME : CYAN;
      ctx.shadowBlur = hot ? 30 : 14;
      ctx.beginPath();
      ctx.roundRect(x, y, CARD_W, h + 30, 10);
      ctx.fillStyle = "#08121a";
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.save();
      ctx.clip();
      const im = img(isl.project);
      if (im.complete && im.naturalWidth) {
        ctx.drawImage(im, x, y, CARD_W, im.naturalHeight * (CARD_W / im.naturalWidth));
      }
      ctx.fillStyle = "#08121a";
      ctx.fillRect(x, y + h, CARD_W, 30);
      ctx.restore();
      ctx.strokeStyle = hot ? LIME : CYAN;
      ctx.lineWidth = hot ? 3 : 2;
      ctx.beginPath();
      ctx.roundRect(x, y, CARD_W, h + 30, 10);
      ctx.stroke();
      text(isl.project.title, x + 12, y + h + 20, 14, "#fff", "left", 700);
      text("open →", x + CARD_W - 12, y + h + 20, 11, hot ? LIME : CYAN, "right", 600);
      ctx.restore();
    };

    const drawPin = (isl, i, alpha, hot) => {
      if (alpha <= 0) return;
      const sx = (isl.x - cam.x) * cam.s;
      const sy = (isl.y - cam.y) * cam.s - 34;
      const k = hot ? 1.15 : 1;
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(sx, sy);
      ctx.scale(k, k);
      ctx.strokeStyle = "rgba(255,255,255,0.7)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, 6);
      ctx.lineTo(0, 30);
      ctx.stroke();
      ctx.shadowColor = hot ? LIME : CYAN;
      ctx.shadowBlur = 14;
      ctx.beginPath();
      ctx.moveTo(-14, -16);
      ctx.lineTo(14, -16);
      ctx.lineTo(14, 4);
      ctx.quadraticCurveTo(14, 16, 0, 22);
      ctx.quadraticCurveTo(-14, 16, -14, 4);
      ctx.closePath();
      ctx.fillStyle = hot ? LIME : CYAN;
      ctx.fill();
      ctx.shadowBlur = 0;
      text(pad(i + 1), 0, 4, 12, "#04121a", "center", 800);
      ctx.restore();
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.lineWidth = 4;
      ctx.strokeStyle = "rgba(4,7,10,0.85)";
      ctx.font = "700 12px ui-monospace, Menlo, monospace";
      ctx.textAlign = "center";
      ctx.strokeText(isl.project.title, sx, sy + 52);
      ctx.fillStyle = "#fff";
      ctx.fillText(isl.project.title, sx, sy + 52);
      ctx.restore();
    };

    const draw = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const sea = ctx.createLinearGradient(0, 0, 0, VH);
      sea.addColorStop(0, "#06242d");
      sea.addColorStop(1, "#04141c");
      ctx.fillStyle = sea;
      ctx.fillRect(0, 0, VW, VH);

      ctx.setTransform(dpr * cam.s, 0, 0, dpr * cam.s, -cam.x * cam.s * dpr, -cam.y * cam.s * dpr);

      // Chart grid, like a nautical blueprint
      ctx.strokeStyle = "rgba(45,226,255,0.06)";
      ctx.lineWidth = 1 / cam.s;
      ctx.beginPath();
      const x0 = Math.max(0, Math.floor(cam.x / 100) * 100);
      const y0 = Math.max(0, Math.floor(cam.y / 100) * 100);
      for (let gx = x0; gx <= Math.min(WORLD_W, cam.x + VW / cam.s); gx += 100) {
        ctx.moveTo(gx, Math.max(0, cam.y));
        ctx.lineTo(gx, Math.min(WORLD_H, cam.y + VH / cam.s));
      }
      for (let gy = y0; gy <= Math.min(WORLD_H, cam.y + VH / cam.s); gy += 100) {
        ctx.moveTo(Math.max(0, cam.x), gy);
        ctx.lineTo(Math.min(WORLD_W, cam.x + VW / cam.s), gy);
      }
      ctx.stroke();

      // Map border
      ctx.strokeStyle = "rgba(45,226,255,0.4)";
      ctx.lineWidth = 3 / cam.s;
      ctx.strokeRect(0, 0, WORLD_W, WORLD_H);

      for (const o of world.islets) {
        trace(ctx, o.outline, o.x, o.y, 1.25);
        ctx.fillStyle = "rgba(45,226,255,0.07)";
        ctx.fill();
        trace(ctx, o.outline, o.x, o.y, 1);
        ctx.fillStyle = "#13674f";
        ctx.fill();
        ctx.strokeStyle = "rgba(182,255,60,0.35)";
        ctx.lineWidth = 2;
        ctx.stroke();
        for (const tr of o.trees) {
          ctx.fillStyle = "#35b06c";
          ctx.beginPath();
          ctx.arc(o.x + tr.x, o.y + tr.y, tr.s * 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      world.islands.forEach((isl, i) => drawIsland(isl, i === hover || i === selRef.current));

      // Route: a dashed trail through every island, in order
      const pts = world.islands;
      ctx.save();
      ctx.setLineDash([22, 16]);
      ctx.lineDashOffset = -t * 18;
      ctx.strokeStyle = "rgba(255,255,255,0.85)";
      ctx.lineWidth = 5;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 0; i < pts.length - 1; i++) {
        const p0 = pts[Math.max(i - 1, 0)];
        const p1 = pts[i];
        const p2 = pts[i + 1];
        const p3 = pts[Math.min(i + 2, pts.length - 1)];
        ctx.bezierCurveTo(
          p1.x + (p2.x - p0.x) / 6,
          p1.y + (p2.y - p0.y) / 6,
          p2.x - (p3.x - p1.x) / 6,
          p2.y - (p3.y - p1.y) / 6,
          p2.x,
          p2.y,
        );
      }
      ctx.stroke();
      ctx.restore();

      // Clouds drift above the water
      for (const c of world.clouds) {
        const cx = ((c.x + t * c.v) % (WORLD_W + 400)) - 200;
        trace(ctx, c.outline, cx, c.y, c.r);
        ctx.fillStyle = "rgba(210,240,255,0.06)";
        ctx.fill();
      }

      const cardA = clamp((cam.s - 0.7) / 0.25, 0, 1);
      world.islands.forEach((isl, i) => {
        if (cardA > 0) drawCard(isl, cardA, i === hover || i === selRef.current);
      });

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      world.islands.forEach((isl, i) => {
        const sx = (isl.x - cam.x) * cam.s;
        const sy = (isl.y - cam.y) * cam.s;
        if (sx < -80 || sx > VW + 80 || sy < -80 || sy > VH + 80) return;
        drawPin(isl, i, 1 - cardA, i === hover || i === selRef.current);
      });
    };

    const step = (dt) => {
      t += dt;
      if (target) {
        const k = 1 - Math.pow(0.0008, dt);
        cam.s += (target.s - cam.s) * k;
        const gx = target.x + (target.offX ?? 0) / cam.s - VW / (2 * cam.s);
        const gy = target.y + (target.offY ?? 0) / cam.s - VH / (2 * cam.s);
        cam.x += (gx - cam.x) * k;
        cam.y += (gy - cam.y) * k;
        clampCam();
        if (Math.abs(target.s - cam.s) < 0.003 && Math.hypot(gx - cam.x, gy - cam.y) < 1) {
          target = null;
        }
      }
      // Load screenshots only when the cards could be seen.
      if (cam.s > 0.55) {
        for (const isl of world.islands) {
          const sx = (isl.x - cam.x) * cam.s;
          const sy = (isl.y - cam.y) * cam.s;
          if (sx > -300 && sx < VW + 300 && sy > -300 && sy < VH + 300) img(isl.project);
        }
      }
    };

    const frame = (now) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (!visible || document.hidden || !VW) return;
      step(dt);
      draw();
    };

    const resize = () => {
      if (!wrapRef.current) return;
      const w = wrapRef.current.clientWidth;
      const h = fullRef.current
        ? wrapRef.current.clientHeight
        : clamp(Math.round(w * 0.62), w < 640 ? 580 : 480, 680);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const first = !VW;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      VW = w;
      VH = h;
      fit = Math.max(Math.min(VW / WORLD_W, VH / WORLD_H), 0.1);
      if (first) fitView();
      else {
        cam.s = clamp(cam.s, fit, MAX_SCALE);
        clampCam();
      }
    };

    const pos = (e) => {
      const r = canvas.getBoundingClientRect();
      return [e.clientX - r.left, e.clientY - r.top];
    };

    const down = (e) => {
      canvas.setPointerCapture(e.pointerId);
      const [x, y] = pos(e);
      pointers.set(e.pointerId, { x, y });
      drag = { moved: 0 };
      target = null;
      if (pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        pinch = Math.hypot(a.x - b.x, a.y - b.y);
      }
    };
    const move = (e) => {
      const [x, y] = pos(e);
      const p = pointers.get(e.pointerId);
      if (!p) {
        hover = hit(x, y);
        canvas.style.cursor = hover >= 0 ? "pointer" : "grab";
        return;
      }
      if (pointers.size === 1) {
        const dx = x - p.x;
        const dy = y - p.y;
        drag.moved += Math.abs(dx) + Math.abs(dy);
        cam.x -= dx / cam.s;
        cam.y -= dy / cam.s;
        clampCam();
        canvas.style.cursor = drag.moved > 4 ? "grabbing" : canvas.style.cursor;
      }
      p.x = x;
      p.y = y;
      if (pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (pinch) zoomAt((a.x + b.x) / 2, (a.y + b.y) / 2, d / pinch);
        pinch = d;
        drag.moved = 99;
      }
    };
    const up = (e) => {
      const [x, y] = pos(e);
      const had = pointers.delete(e.pointerId);
      pinch = 0;
      if (!had || drag.moved > 6 || pointers.size) return;
      const i = hit(x, y);
      if (i < 0) return;
      select(i);
    };
    const leave = () => {
      hover = -1;
    };
    const wheel = (e) => {
      e.preventDefault();
      target = null;
      const [x, y] = pos(e);
      zoomAt(x, y, Math.exp(-e.deltaY * 0.0016));
    };

    const onKey = (e) => {
      if (e.key !== "Escape") return;
      if (selRef.current >= 0) select(-1);
      else if (fullRef.current) api.current.exitFull?.();
    };
    window.addEventListener("keydown", onKey);

    api.current = {
      resize,
      select,
      zoom: (f) => {
        target = null;
        zoomAt(VW / 2, VH / 2, f);
      },
      fit: () => {
        target = null;
        cam.s = fit;
        fitView();
      },
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrapRef.current);
    const io = new IntersectionObserver(([en]) => {
      visible = en.isIntersecting;
    });
    io.observe(canvas);
    canvas.addEventListener("pointerdown", down);
    canvas.addEventListener("pointermove", move);
    canvas.addEventListener("pointerup", up);
    canvas.addEventListener("pointercancel", up);
    canvas.addEventListener("pointerleave", leave);
    canvas.addEventListener("wheel", wheel, { passive: false });
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      canvas.removeEventListener("pointerdown", down);
      canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerup", up);
      canvas.removeEventListener("pointercancel", up);
      canvas.removeEventListener("pointerleave", leave);
      canvas.removeEventListener("wheel", wheel);
      window.removeEventListener("keydown", onKey);
    };
  }, [projects]);

  // Full screen: a fixed overlay everywhere, plus the browser's own full
  // screen where it is supported so the browser chrome goes away too.
  useEffect(() => {
    fullRef.current = full;
    document.body.style.overflow = full ? "hidden" : "";
    api.current.resize?.();
    return () => {
      document.body.style.overflow = "";
    };
  }, [full]);

  useEffect(() => {
    const onFs = () => {
      if (!document.fullscreenElement) setFull(false);
    };
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  const enterFull = () => {
    setFull(true);
    try {
      wrapRef.current?.requestFullscreen?.().catch(() => {});
    } catch {}
  };
  const exitFull = () => {
    setFull(false);
    try {
      if (document.fullscreenElement) document.exitFullscreen();
    } catch {}
  };
  api.current.exitFull = exitFull;

  const ctl =
    "t-mono flex h-9 w-9 items-center justify-center rounded-md border border-[rgb(var(--hairline-strong))] bg-[rgb(4_7_10/0.8)] text-base text-primary transition-colors hover:border-[var(--t-cyan)] hover:text-[var(--t-cyan)]";

  return (
    <div className="relative z-10 mx-auto max-w-6xl px-6">
      <div
        ref={wrapRef}
        className={`t-window relative ${full ? "!fixed inset-0 z-[1000] !rounded-none !border-0 !bg-[#04141c]" : ""}`}
      >
        <canvas
          ref={canvasRef}
          role="img"
          aria-label="Interactive world map of projects. Drag to move, scroll to zoom, click a project to open it."
          className="block w-full cursor-grab touch-none"
        />
        <p className={`t-mono pointer-events-none absolute left-3 top-3 ${sel >= 0 ? "max-md:hidden" : ""} max-w-[60%] rounded bg-[rgb(4_7_10/0.7)] px-2.5 py-1.5 text-[11px] text-muted`}>
          drag to move · scroll or pinch to zoom · click a project to read about it
        </p>
        <AnimatePresence mode="wait">
          {sel >= 0 && (
            <DetailPanel
              key={projects[sel].slug}
              project={projects[sel]}
              index={sel}
              total={projects.length}
              prev={sel > 0 ? projects[sel - 1] : null}
              next={sel < projects.length - 1 ? projects[sel + 1] : null}
              onPrev={() => api.current.select(sel - 1)}
              onNext={() => api.current.select(sel + 1)}
              onClose={() => api.current.select(-1)}
            />
          )}
        </AnimatePresence>
        <div className={`absolute right-3 flex flex-col gap-2 ${sel >= 0 ? "md:right-[25.75rem] bottom-[calc(50%+0.75rem)] md:bottom-3" : "bottom-3"}`}>
          <button
            type="button"
            aria-label={full ? "Exit full screen" : "Full screen"}
            className={`${ctl} !text-xs`}
            onClick={full ? exitFull : enterFull}
          >
            {full ? "exit" : "full"}
          </button>
          <button type="button" aria-label="Zoom in" className={ctl} onClick={() => api.current.zoom(1.5)}>
            +
          </button>
          <button type="button" aria-label="Zoom out" className={ctl} onClick={() => api.current.zoom(1 / 1.5)}>
            −
          </button>
          <button type="button" aria-label="Show whole map" className={`${ctl} !text-xs`} onClick={() => api.current.fit()}>
            fit
          </button>
        </div>
      </div>

      {/* Keyboard and screen reader route to every project */}
      <ul className="sr-only">
        {projects.map((p) => (
          <li key={p.slug}>
            <Link href={`/work/${p.slug}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DetailPanel({ project, index, total, prev, next, onPrev, onNext, onClose }) {
  const nav =
    "t-mono rounded-md border border-[rgb(var(--hairline-strong))] px-3 py-1.5 text-xs text-muted transition-colors hover:border-[var(--t-cyan)] hover:text-[var(--t-cyan)] disabled:pointer-events-none disabled:opacity-30";
  return (
    <motion.aside
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-x-0 bottom-0 top-1/2 flex flex-col border-t border-[var(--t-cyan)] bg-[rgb(6_12_17/0.96)] backdrop-blur-md md:inset-y-0 md:left-auto md:right-0 md:w-[24.5rem] md:border-l md:border-t-0"
    >
      <div className="flex items-center justify-between gap-2 border-b border-[rgb(var(--hairline))] px-4 py-2.5">
        <p className="t-mono text-[11px] text-faint">
          <span className="t-cyan">{pad(index + 1)}</span> / {pad(total)} · {project.category}
        </p>
        <button type="button" onClick={onClose} aria-label="Close details" className={nav}>
          close ✕
        </button>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-5 pt-4">
        <div className="relative aspect-[16/9] overflow-hidden rounded-md border border-[rgb(var(--hairline))]">
          <Image src={project.cover} alt={`${project.title} cover`} fill sizes="400px" className="object-cover object-top" />
        </div>
        <h3 className="t-mono mt-4 text-2xl font-semibold tracking-tight text-primary">{project.title}</h3>
        <p className="mt-1 text-sm text-[var(--t-cyan)]">{project.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span key={tech} className="t-chip">
              {tech}
            </span>
          ))}
        </div>

        <p className="t-mono mt-6 text-[11px] text-faint">## what i built</p>
        <ul className="mt-2 space-y-2">
          {project.contributions.map((c) => (
            <li key={c} className="flex gap-2.5 text-sm leading-relaxed text-muted">
              <span className="t-mono t-lime">[x]</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>

        {project.gallery.length > 0 && (
          <>
            <p className="t-mono mt-6 text-[11px] text-faint">## screens ({project.gallery.length})</p>
            <div className="mt-2 space-y-4">
              {project.gallery.map((shot) => (
                <figure key={shot.title}>
                  <Image
                    src={shot.img}
                    alt={shot.title}
                    sizes="400px"
                    className="w-full rounded-md border border-[rgb(var(--hairline))]"
                  />
                  <figcaption className="mt-2 text-xs leading-relaxed text-muted">
                    <span className="text-primary">{shot.title}.</span> {shot.desc}
                  </figcaption>
                </figure>
              ))}
            </div>
          </>
        )}

        <Link
          href={`/work/${project.slug}`}
          className="t-mono mt-6 inline-flex items-center gap-2 rounded-md bg-[var(--t-cyan)] px-4 py-2 text-sm font-semibold text-[rgb(4_7_10)] transition-opacity hover:opacity-90"
        >
          open full case study →
        </Link>
      </div>

      <div className="flex justify-between gap-2 border-t border-[rgb(var(--hairline))] px-4 py-2.5">
        <button type="button" onClick={onPrev} disabled={!prev} className={nav}>
          ← {prev ? prev.title : "start"}
        </button>
        <button type="button" onClick={onNext} disabled={!next} className={nav}>
          {next ? next.title : "end"} →
        </button>
      </div>
    </motion.aside>
  );
}
