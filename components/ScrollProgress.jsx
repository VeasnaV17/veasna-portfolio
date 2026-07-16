"use client";

import { useEffect, useState } from "react";

const SEGMENT_COUNT = 18;

export default function ScrollProgress() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateReducedMotion = () => setPrefersReducedMotion(mediaQuery.matches);

    const updateScrollPercent = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const nextPercent = maxScroll > 0
        ? Math.min(100, Math.max(0, (scrollTop / maxScroll) * 100))
        : 0;
      setScrollPercent(nextPercent);
    };

    updateReducedMotion();
    updateScrollPercent();

    window.addEventListener("scroll", updateScrollPercent, { passive: true });
    window.addEventListener("resize", updateScrollPercent);
    mediaQuery.addEventListener?.("change", updateReducedMotion);

    return () => {
      window.removeEventListener("scroll", updateScrollPercent);
      window.removeEventListener("resize", updateScrollPercent);
      mediaQuery.removeEventListener?.("change", updateReducedMotion);
    };
  }, []);

  const activeSegments = Math.round((scrollPercent / 100) * SEGMENT_COUNT);
  const hue = scrollPercent * 3.6;
  const fillColor = `hsl(${hue}, 85%, 65%)`;
  const glowColor = `hsla(${hue}, 85%, 65%, 0.55)`;

  return (
    <div aria-hidden="true" className="pointer-events-none w-[300px] max-w-[calc(100vw-32px)]">
      <div className="hidden md:flex items-center justify-between gap-2 rounded-full border border-white/15 bg-[rgba(8,9,11,0.72)] px-3 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-md">
        {Array.from({ length: SEGMENT_COUNT }).map((_, index) => {
          const isActive = index < activeSegments;
          return (
            <div
              key={index}
              className="h-2.5 rounded-full border transition-all duration-200"
              style={{
                width: index === SEGMENT_COUNT - 1 ? "10px" : "12px",
                backgroundColor: isActive ? fillColor : "rgba(255,255,255,0.08)",
                borderColor: isActive ? `${fillColor}55` : "rgba(255,255,255,0.12)",
                boxShadow: isActive ? `0 0 10px ${glowColor}` : "none",
                transition: prefersReducedMotion ? "none" : "all 180ms ease-out"
              }}
            />
          );
        })}
      </div>

      <div className="fixed left-4 top-1/2 z-[90] flex md:hidden h-[33vh] min-h-[180px] w-11 -translate-y-1/2 flex-col items-center justify-center gap-1.5 rounded-full border border-white/15 bg-[rgba(8,9,11,0.88)] px-2 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-md">
        {Array.from({ length: SEGMENT_COUNT }).map((_, index) => {
          const isActive = index < activeSegments;
          return (
            <div
              key={index}
              className={`rounded-full border transition-all duration-200 ${
                index === SEGMENT_COUNT - 1
                  ? "h-[8px] md:h-2.5 w-2.5 md:w-[10px]"
                  : "h-[7px] md:h-2.5 w-2.5 md:w-[12px]"
              }`}
              style={{
                backgroundColor: isActive ? fillColor : "rgba(255,255,255,0.08)",
                borderColor: isActive ? `${fillColor}55` : "rgba(255,255,255,0.12)",
                boxShadow: isActive ? `0 0 10px ${glowColor}` : "none",
                transition: prefersReducedMotion ? "none" : "all 180ms ease-out"
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
