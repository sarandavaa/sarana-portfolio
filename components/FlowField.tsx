"use client";

import { useEffect, useRef } from "react";

/**
 * Ambient flow-field background + custom cursor + drifting "jelly" creatures
 * for the home page. Ported from the artifact mockup — ties into the real
 * --paper/--ink theme tokens and the home page's actual content width
 * instead of hardcoded mockup values.
 */

type RGB = [number, number, number];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  seed: number;
  color: RGB;
  trail: { x: number; y: number }[];
}

interface Jelly {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  prevX: number;
  prevY: number;
  speed: number;
  moveSpeed: number;
  phase: number;
  lastRetarget: number;
  trail: { x: number; y: number; time: number }[];
}

function hexToRgb(hex: string, fallback: RGB): RGB {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  if (!m) return fallback;
  const int = parseInt(m[1], 16);
  return [(int >> 16) & 255, (int >> 8) & 255, int & 255];
}

export default function FlowField() {
  const flowRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = flowRef.current;
    const cursorCanvas = cursorRef.current;
    if (!canvas || !cursorCanvas) return;
    const ctx = canvas.getContext("2d");
    const cctx = cursorCanvas.getContext("2d");
    if (!ctx || !cctx) return;

    const rootStyle = getComputedStyle(document.documentElement);
    const paperColor = rootStyle.getPropertyValue("--paper").trim() || "#eef1f5";
    const inkRgb = hexToRgb(rootStyle.getPropertyValue("--ink"), [22, 23, 27]);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(hover: none)").matches;

    let W = 0;
    let H = 0;
    let DPR = 1;

    function resize() {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas!.width = W * DPR;
      canvas!.height = H * DPR;
      ctx!.setTransform(DPR, 0, 0, DPR, 0, 0);
      cursorCanvas!.width = W * DPR;
      cursorCanvas!.height = H * DPR;
      cctx!.setTransform(DPR, 0, 0, DPR, 0, 0);
    }
    window.addEventListener("resize", resize);
    resize();

    function lerp(a: number, b: number, t: number) {
      return a + t * (b - a);
    }
    function smoothstep(e0: number, e1: number, x: number) {
      const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
      return t * t * (3 - 2 * t);
    }

    // Cursor trail sweep — deep indigo ground with magenta, orange, gold and
    // cyan splashes.
    const ART_PALETTE: RGB[] = [
      [38, 42, 165],
      [230, 20, 130],
      [240, 130, 30],
      [245, 195, 40],
      [40, 170, 220],
      [38, 42, 165], // closes the loop for cyclic sampling
    ];
    // Dedicated palette for the jelly creatures' trailing string — the
    // classic 6-color LGBTQ pride flag rainbow.
    const JELLY_PALETTE: RGB[] = [
      [228, 3, 3],
      [255, 140, 0],
      [255, 237, 0],
      [0, 128, 38],
      [0, 77, 255],
      [115, 41, 130],
      [228, 3, 3],
    ];
    function sampleColor(palette: RGB[], t: number): RGB {
      t = ((t % 1) + 1) % 1;
      const n = palette.length - 1;
      const scaled = t * n;
      const i = Math.min(n - 1, Math.floor(scaled));
      const lt = scaled - i;
      const c0 = palette[i];
      const c1 = palette[i + 1];
      return [
        Math.round(lerp(c0[0], c1[0], lt)),
        Math.round(lerp(c0[1], c1[1], lt)),
        Math.round(lerp(c0[2], c1[2], lt)),
      ];
    }
    function artColor(t: number) {
      return sampleColor(ART_PALETTE, t);
    }
    function jellyColor(t: number) {
      return sampleColor(JELLY_PALETTE, t);
    }
    function lighten(col: RGB, amt: number): RGB {
      return [
        col[0] + (255 - col[0]) * amt,
        col[1] + (255 - col[1]) * amt,
        col[2] + (255 - col[2]) * amt,
      ];
    }

    // Smooth, lattice-free pseudo-flow field: a sum of rotated/offset sine
    // waves at different frequencies. No grid cells, so no seam artifacts.
    function fieldAngle(x: number, y: number, timeOffset: number) {
      const a = Math.sin(x * 0.0021 + timeOffset * 0.6) + Math.cos(y * 0.0026 - timeOffset * 0.4);
      const b = Math.sin((x + y) * 0.0017 + timeOffset * 0.5) * 0.8;
      const c = Math.cos((x - y) * 0.0013 - timeOffset * 0.35) * 0.6;
      return (a + b + c) * 1.1;
    }

    // Small curated palette — the cursor bloom picks from this per-particle
    // instead of a single fixed accent, so a cluster near the cursor shows a
    // mix of colors rather than uniform purple.
    const PALETTE: RGB[] = [
      [91, 79, 232],
      [232, 87, 79],
      [47, 182, 166],
      [224, 163, 57],
    ];

    const TRAIL_LEN = 7;
    const FLOCK_RADIUS = 55;
    let particles: Particle[] = [];
    function initParticles() {
      particles = [];
      const count = Math.min(800, Math.floor((W * H) / 1000));
      for (let i = 0; i < count; i++) {
        const x = Math.random() * W;
        const y = Math.random() * H;
        const a0 = Math.random() * Math.PI * 2;
        const trail: { x: number; y: number }[] = [];
        for (let k = 0; k < TRAIL_LEN; k++) trail.push({ x, y });
        particles.push({
          x,
          y,
          vx: Math.cos(a0),
          vy: Math.sin(a0),
          seed: Math.random() * 1000,
          color: PALETTE[i % PALETTE.length],
          trail,
        });
      }
    }
    initParticles();

    const mouse = { x: -9999, y: -9999, active: false, speed: 0 };
    let cursorTrail: { x: number; y: number; time: number }[] = [];
    const CURSOR_TRAIL_MAX_AGE = 400; // ms — aged out every frame regardless of new events
    let prevMouseX = 0;
    let prevMouseY = 0;
    let prevMouseTime = 0;

    // Firework burst — when the cursor whips past a speed threshold, sparks
    // erupt from it and a shockwave ring blooms outward, like the trail
    // igniting under the motion.
    interface Spark {
      x: number;
      y: number;
      vx: number;
      vy: number;
      trail: { x: number; y: number }[];
      color: RGB;
      life: number;
      decay: number;
    }
    interface Ring {
      x: number;
      y: number;
      age: number;
      maxAge: number;
      maxR: number;
      color: RGB;
    }
    const FIREWORK_SPEED_THRESHOLD = 3.5; // px/ms — roughly a fast flick
    const FIREWORK_SPEED_MAX = 9; // px/ms — speed at which bursts hit full size
    const FIREWORK_COOLDOWN = 70; // ms between bursts while cursor stays fast
    const MAX_SPARKS = 500;
    let sparks: Spark[] = [];
    let rings: Ring[] = [];
    let lastFireworkTime = 0;

    function spawnFirework(x: number, y: number, speed: number) {
      const intensity = Math.min(
        1,
        Math.max(0, (speed - FIREWORK_SPEED_THRESHOLD) / (FIREWORK_SPEED_MAX - FIREWORK_SPEED_THRESHOLD))
      );
      const count = Math.round(lerp(18, 46, intensity));
      const power = lerp(2.6, 7.5, intensity);
      for (let i = 0; i < count; i++) {
        if (sparks.length >= MAX_SPARKS) sparks.shift();
        const angle = Math.random() * Math.PI * 2;
        const spd = power * (0.35 + Math.random() * 0.9);
        sparks.push({
          x,
          y,
          vx: Math.cos(angle) * spd,
          vy: Math.sin(angle) * spd,
          trail: [
            { x, y },
            { x, y },
            { x, y },
          ],
          color: artColor(Math.random()),
          life: 1,
          decay: 0.017 + Math.random() * 0.02,
        });
      }
      rings.push({
        x,
        y,
        age: 0,
        maxAge: 26,
        maxR: lerp(34, 100, intensity),
        color: artColor(Math.random()),
      });
    }

    function stepAndDrawFireworks() {
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.vx *= 0.96;
        s.vy *= 0.96;
        s.vy += 0.09;
        s.x += s.vx;
        s.y += s.vy;
        s.trail.shift();
        s.trail.push({ x: s.x, y: s.y });
        s.life -= s.decay;
        if (s.life <= 0) sparks.splice(i, 1);
      }
      for (let i = rings.length - 1; i >= 0; i--) {
        rings[i].age++;
        if (rings[i].age > rings[i].maxAge) rings.splice(i, 1);
      }
      if (!sparks.length && !rings.length) return;

      cctx!.save();
      cctx!.globalCompositeOperation = "lighter";

      for (let i = 0; i < rings.length; i++) {
        const r = rings[i];
        const rt = r.age / r.maxAge;
        const radius = r.maxR * smoothstep(0, 1, rt);
        const alpha = (1 - rt) * 0.5;
        cctx!.beginPath();
        cctx!.arc(r.x, r.y, radius, 0, Math.PI * 2);
        cctx!.strokeStyle = `rgba(${r.color[0]},${r.color[1]},${r.color[2]},${alpha.toFixed(3)})`;
        cctx!.lineWidth = 2 * (1 - rt) + 0.5;
        cctx!.stroke();
      }

      for (let i = 0; i < sparks.length; i++) {
        const s = sparks[i];
        const life = Math.max(0, s.life);
        const glow = lighten(s.color, 0.5 * life);
        const trail = s.trail;
        for (let k = 1; k < trail.length; k++) {
          const a0 = trail[k - 1];
          const a1 = trail[k];
          const frac = k / (trail.length - 1);
          cctx!.strokeStyle = `rgba(${glow[0].toFixed(0)},${glow[1].toFixed(0)},${glow[2].toFixed(0)},${(
            life * frac * 0.9
          ).toFixed(3)})`;
          cctx!.lineWidth = 1 + life * 2.2;
          cctx!.lineCap = "round";
          cctx!.beginPath();
          cctx!.moveTo(a0.x, a0.y);
          cctx!.lineTo(a1.x, a1.y);
          cctx!.stroke();
        }
        cctx!.beginPath();
        cctx!.arc(s.x, s.y, 1.4 * life + 0.3, 0, Math.PI * 2);
        cctx!.fillStyle = `rgba(255,255,255,${(life * 0.9).toFixed(3)})`;
        cctx!.fill();
      }

      cctx!.restore();
    }

    function onPointerMove(e: PointerEvent) {
      const now = performance.now();
      const nx = e.clientX;
      const ny = e.clientY;
      if (prevMouseTime) {
        const dt = now - prevMouseTime;
        if (dt > 0) mouse.speed = Math.hypot(nx - prevMouseX, ny - prevMouseY) / dt;
      }
      prevMouseX = nx;
      prevMouseY = ny;
      prevMouseTime = now;

      mouse.x = nx;
      mouse.y = ny;
      mouse.active = true;
      if (!isTouch) {
        cursorTrail.push({ x: mouse.x, y: mouse.y, time: now });
        if (mouse.speed > FIREWORK_SPEED_THRESHOLD && now - lastFireworkTime > FIREWORK_COOLDOWN) {
          lastFireworkTime = now;
          spawnFirework(mouse.x, mouse.y, mouse.speed);
        }
      }
    }
    function onMouseLeave() {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    }
    window.addEventListener("pointermove", onPointerMove);
    document.addEventListener("mouseleave", onMouseLeave);

    function drawCursor() {
      cctx!.clearRect(0, 0, W, H);
      stepAndDrawFireworks();
      if (isTouch || !mouse.active) return;

      const now = performance.now();
      while (cursorTrail.length && now - cursorTrail[0].time > CURSOR_TRAIL_MAX_AGE) {
        cursorTrail.shift();
      }

      for (let i = 1; i < cursorTrail.length; i++) {
        const a0 = cursorTrail[i - 1];
        const a1 = cursorTrail[i];
        const age = now - a1.time;
        const frac = Math.max(0, 1 - age / CURSOR_TRAIL_MAX_AGE);
        const col = artColor(1 - frac);
        cctx!.strokeStyle = `rgba(${col[0]},${col[1]},${col[2]},${(frac * 0.7).toFixed(3)})`;
        cctx!.lineWidth = 1.5 + frac * 7;
        cctx!.lineCap = "round";
        cctx!.beginPath();
        cctx!.moveTo(a0.x, a0.y);
        cctx!.lineTo(a1.x, a1.y);
        cctx!.stroke();
      }

      cctx!.beginPath();
      cctx!.arc(mouse.x, mouse.y, 11, 0, Math.PI * 2);
      cctx!.fillStyle = `rgba(${inkRgb[0]},${inkRgb[1]},${inkRgb[2]},0.95)`;
      cctx!.fill();
    }

    const RADIUS = 200;
    let t = 0;
    const white: RGB = [255, 255, 255];

    function drawTrail(p: Particle, influence: number) {
      const rr = Math.round(lerp(white[0], p.color[0], influence));
      const gg = Math.round(lerp(white[1], p.color[1], influence));
      const bb = Math.round(lerp(white[2], p.color[2], influence));
      const trail = p.trail;
      for (let k = 1; k < trail.length; k++) {
        const a0 = trail[k - 1];
        const a1 = trail[k];
        const frac = k / (trail.length - 1);
        const alpha = frac * (0.75 + influence * 0.4);
        ctx!.strokeStyle = `rgba(${rr},${gg},${bb},${alpha.toFixed(3)})`;
        ctx!.lineWidth = 1.6 + influence * 1.2;
        ctx!.beginPath();
        ctx!.moveTo(a0.x, a0.y);
        ctx!.lineTo(a1.x, a1.y);
        ctx!.stroke();
      }
    }

    // Bulb-headed creatures — jellyfish/octopus hybrids — that drift in the
    // empty margin between the centered content column and the edge of the
    // viewport. Hidden entirely when there's no margin to roam in. These
    // dimensions mirror .home-hero/.home-work's real max-width/padding in home.css.
    const CONTENT_MAX = 1280;
    const CONTENT_PAD = 32;
    const JELLY_TRAIL_MAX_AGE = 900; // ms — slower, gentler fade than the cursor's
    const JELLY_COUNT = 3;
    const jellies: Jelly[] = [];

    function marginBounds() {
      const contentW = Math.min(CONTENT_MAX, W - CONTENT_PAD * 2);
      const contentLeft = (W - contentW) / 2;
      return { left: contentLeft, right: W - contentLeft, w: contentLeft };
    }

    function initJellies() {
      const m = marginBounds();
      const pad = 30;
      for (let n = 0; n < JELLY_COUNT; n++) {
        const useLeft = n % 2 === 0;
        const x =
          m.w > pad * 2
            ? useLeft
              ? pad + Math.random() * (m.w - pad * 2)
              : m.right + pad + Math.random() * (m.w - pad * 2)
            : Math.random() * W;
        const y0 = H * 0.1 + Math.random() * H * 0.8;
        jellies.push({
          x,
          y: y0,
          targetX: x,
          targetY: y0,
          prevX: x,
          prevY: y0,
          speed: 0,
          moveSpeed: 0.005,
          phase: Math.random() * 100,
          lastRetarget: -Math.random() * 7000,
          trail: [],
        });
      }
    }
    initJellies();

    function updateJelly(jelly: Jelly, nowMs: number) {
      const m = marginBounds();
      if (m.w < 70) return false; // no room in the margins on this viewport

      if (nowMs - jelly.lastRetarget > 7000) {
        jelly.lastRetarget = nowMs;
        const onLeft = jelly.x < W / 2;
        // Rarely, dash to the other margin — brief and fast so it reads as a
        // quick comet crossing rather than something lingering over the content.
        const crossing = Math.random() < 0.12;
        const useLeft = crossing ? !onLeft : onLeft;
        const pad = 30;
        jelly.targetX = useLeft
          ? pad + Math.random() * Math.max(1, m.w - pad * 2)
          : m.right + pad + Math.random() * Math.max(1, m.w - pad * 2);
        jelly.targetY = H * 0.18 + Math.random() * H * 0.6;
        jelly.moveSpeed =
          crossing || Math.random() < 0.25
            ? 0.035 + Math.random() * 0.05
            : 0.004 + Math.random() * 0.006;
      }

      jelly.prevX = jelly.x;
      jelly.prevY = jelly.y;
      jelly.x = lerp(jelly.x, jelly.targetX, jelly.moveSpeed);
      jelly.y = lerp(jelly.y, jelly.targetY, jelly.moveSpeed);
      jelly.speed = Math.hypot(jelly.x - jelly.prevX, jelly.y - jelly.prevY);
      return true;
    }

    function drawJelly(jelly: Jelly, nowT: number) {
      const x = jelly.x;
      const y = jelly.y + Math.sin(nowT * 1.2 + jelly.phase) * 16;

      const now = performance.now();
      jelly.trail.push({ x, y, time: now });
      while (jelly.trail.length && now - jelly.trail[0].time > JELLY_TRAIL_MAX_AGE) {
        jelly.trail.shift();
      }

      // A single string streaming off it as it drifts, cycling through the
      // rainbow palette along its length. How "comet" vs. how "colorful" it
      // looks depends on its current speed: slow drift shows real saturated
      // color; a fast dart washes all the way to pure white.
      const cometFactor = smoothstep(1, 9, jelly.speed);
      ctx!.save();
      const STRAND_COUNT = 1;
      for (let s = 0; s < STRAND_COUNT; s++) {
        const strandOffset = s / STRAND_COUNT;
        for (let i = 1; i < jelly.trail.length; i++) {
          const a0 = jelly.trail[i - 1];
          const a1 = jelly.trail[i];
          const age = now - a1.time;
          const frac = Math.max(0, 1 - age / JELLY_TRAIL_MAX_AGE);
          if (frac <= 0) continue;
          const wob0 = Math.sin(a0.time / 140 + s * 2.1) * (3 + s * 2.4);
          const wob1 = Math.sin(a1.time / 140 + s * 2.1) * (3 + s * 2.4);
          const baseCol = jellyColor(strandOffset + (1 - frac) * 0.6);
          const glowCol = lighten(baseCol, lerp(0.05, 1, cometFactor));
          const coreCol = lighten(baseCol, lerp(0.2, 1, cometFactor));

          ctx!.beginPath();
          ctx!.moveTo(a0.x + wob0, a0.y);
          ctx!.lineTo(a1.x + wob1, a1.y);

          ctx!.strokeStyle = `rgba(${glowCol[0].toFixed(0)},${glowCol[1].toFixed(0)},${glowCol[2].toFixed(0)},${(
            frac * lerp(0.4, 0.6, cometFactor)
          ).toFixed(3)})`;
          ctx!.lineWidth = lerp(2.5, 6, cometFactor) + frac * lerp(2, 5, cometFactor);
          ctx!.lineCap = "round";
          ctx!.stroke();

          ctx!.strokeStyle = `rgba(${coreCol[0].toFixed(0)},${coreCol[1].toFixed(0)},${coreCol[2].toFixed(0)},${(
            frac * 0.85
          ).toFixed(3)})`;
          ctx!.lineWidth = 1 + frac * 1.2;
          ctx!.stroke();
        }
      }
      ctx!.restore();

      // the being itself — a soft, subtle point of light, not a solid figure
      const haloR = 24;
      const pulse = 0.85 + Math.sin(nowT * 1.8 + jelly.phase) * 0.15;
      const grad = ctx!.createRadialGradient(x, y, 0, x, y, haloR * pulse);
      grad.addColorStop(0, "rgba(255,252,240,0.9)");
      grad.addColorStop(0.5, "rgba(255,252,240,0.28)");
      grad.addColorStop(1, "rgba(255,252,240,0)");
      ctx!.fillStyle = grad;
      ctx!.beginPath();
      ctx!.arc(x, y, haloR * pulse, 0, Math.PI * 2);
      ctx!.fill();

      ctx!.beginPath();
      ctx!.arc(x, y, 3.5, 0, Math.PI * 2);
      ctx!.fillStyle = "rgba(255,255,250,0.95)";
      ctx!.fill();
    }

    function drawStatic() {
      ctx!.fillStyle = paperColor;
      ctx!.fillRect(0, 0, W, H);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const angle = fieldAngle(p.x, p.y, 0);
        const vx = Math.cos(angle) * 7;
        const vy = Math.sin(angle) * 7;
        ctx!.strokeStyle = "rgba(255,255,255,0.6)";
        ctx!.lineWidth = 1;
        ctx!.beginPath();
        ctx!.moveTo(p.x, p.y);
        ctx!.lineTo(p.x + vx, p.y + vy);
        ctx!.stroke();
      }
    }

    let rafId = 0;
    let cancelled = false;

    // Scroll-to-bottom celebration — reaching the end of the page sets off a
    // scattered volley of fireworks across the whole viewport, not just at
    // the cursor. Re-arms once the user scrolls back away from the bottom.
    const FINALE_BURST_COUNT = 9;
    let scrollFireworksArmed = true;
    const scrollFireworkTimeouts: number[] = [];

    function isAtPageBottom() {
      const doc = document.documentElement;
      return window.innerHeight + window.scrollY >= doc.scrollHeight - 16;
    }

    function spawnCelebration() {
      for (let i = 0; i < FINALE_BURST_COUNT; i++) {
        const delay = i * 90 + Math.random() * 90;
        const id = window.setTimeout(() => {
          if (cancelled) return;
          const x = W * (0.1 + Math.random() * 0.8);
          const y = H * (0.12 + Math.random() * 0.55);
          const speed =
            FIREWORK_SPEED_THRESHOLD + (FIREWORK_SPEED_MAX - FIREWORK_SPEED_THRESHOLD) * (0.7 + Math.random() * 0.5);
          spawnFirework(x, y, speed);
        }, delay);
        scrollFireworkTimeouts.push(id);
      }
    }

    function onScroll() {
      if (reduceMotion) return;
      const atBottom = isAtPageBottom();
      if (atBottom && scrollFireworksArmed) {
        scrollFireworksArmed = false;
        spawnCelebration();
      } else if (!atBottom && window.innerHeight + window.scrollY < document.documentElement.scrollHeight - 120) {
        scrollFireworksArmed = true;
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    function step() {
      if (cancelled) return;
      t += 0.0016;
      ctx!.fillStyle = paperColor;
      ctx!.fillRect(0, 0, W, H);

      const n = particles.length;
      for (let i = 0; i < n; i++) {
        const p = particles[i];

        const angle = fieldAngle(p.x, p.y, t * 40);
        const baseVX = Math.cos(angle);
        const baseVY = Math.sin(angle);

        let nvx = 0;
        let nvy = 0;
        let neighborCount = 0;
        const flockRadiusSq = FLOCK_RADIUS * FLOCK_RADIUS;
        for (let j = 0; j < n; j++) {
          if (j === i) continue;
          const q = particles[j];
          const ddx = q.x - p.x;
          const ddy = q.y - p.y;
          const d2 = ddx * ddx + ddy * ddy;
          if (d2 < flockRadiusSq) {
            nvx += q.vx;
            nvy += q.vy;
            neighborCount++;
          }
        }

        let desiredVX = baseVX;
        let desiredVY = baseVY;
        if (neighborCount > 0) {
          const flockStrength = 0.5 + 0.5 * Math.sin(t * 30 + p.seed);
          nvx /= neighborCount;
          nvy /= neighborCount;
          desiredVX = lerp(baseVX, nvx, 0.55 * flockStrength);
          desiredVY = lerp(baseVY, nvy, 0.55 * flockStrength);
        }

        desiredVX += Math.sin(t * 90 + p.seed) * 0.3;
        desiredVY += Math.cos(t * 97 + p.seed * 1.7) * 0.3;

        const dlen = Math.sqrt(desiredVX * desiredVX + desiredVY * desiredVY) || 1;
        desiredVX /= dlen;
        desiredVY /= dlen;

        p.vx = lerp(p.vx, desiredVX, 0.12);
        p.vy = lerp(p.vy, desiredVY, 0.12);

        let vx = p.vx;
        let vy = p.vy;
        let influence = 0;

        if (mouse.active && !isTouch) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < RADIUS) {
            influence = 1 - smoothstep(0, RADIUS, dist);
            const d = dist || 1;
            const perpX = -dy / d;
            const perpY = dx / d;
            vx = lerp(vx, perpX, influence * 0.9);
            vy = lerp(vy, perpY, influence * 0.9);
          }
        }

        p.x += vx * 1.1;
        p.y += vy * 1.1;
        let wrapped = false;
        if (p.x < 0) {
          p.x = W;
          wrapped = true;
        }
        if (p.x > W) {
          p.x = 0;
          wrapped = true;
        }
        if (p.y < 0) {
          p.y = H;
          wrapped = true;
        }
        if (p.y > H) {
          p.y = 0;
          wrapped = true;
        }

        if (wrapped) {
          for (let k = 0; k < p.trail.length; k++) {
            p.trail[k].x = p.x;
            p.trail[k].y = p.y;
          }
        } else {
          p.trail.shift();
          p.trail.push({ x: p.x, y: p.y });
        }

        drawTrail(p, influence);
      }

      const nowMs = performance.now();
      for (let ji = 0; ji < jellies.length; ji++) {
        if (updateJelly(jellies[ji], nowMs)) drawJelly(jellies[ji], t);
      }

      drawCursor();
      rafId = requestAnimationFrame(step);
    }

    if (reduceMotion) {
      drawStatic();
    } else {
      rafId = requestAnimationFrame(step);
    }

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      scrollFireworkTimeouts.forEach((id) => window.clearTimeout(id));
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <canvas ref={flowRef} className="flow-field-canvas" aria-hidden="true" />
      <canvas ref={cursorRef} className="flow-field-cursor" aria-hidden="true" />
      <div className="flow-field-grain" aria-hidden="true" />
    </>
  );
}
