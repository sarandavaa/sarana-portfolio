"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

/**
 * Replaces the (missing) Webflow IX2 fade-in-on-scroll animation.
 * Spread the returned props directly onto the element that had
 * `data-w-id` + `style="opacity:0"` in the original export, so the
 * DOM structure (and Webflow's flex/grid layout classes) stays intact.
 */
export function useFadeIn<T extends HTMLElement>(delay = 0, staggerIndex = 0) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const totalDelay = delay + staggerIndex * 0.05;
  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(16px)",
    transition: `opacity 0.5s var(--ease-out, ease) ${totalDelay}s, transform 0.5s var(--ease-out, ease) ${totalDelay}s`,
  };

  return { ref, style };
}
