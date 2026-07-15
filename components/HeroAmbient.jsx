"use client";

import { useEffect, useMemo, useState } from "react";

export default function HeroAmbient({ children }) {
  const [cursorOffset, setCursorOffset] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateReducedMotion = () => setPrefersReducedMotion(mediaQuery.matches);

    updateReducedMotion();
    mediaQuery.addEventListener?.("change", updateReducedMotion);

    return () => mediaQuery.removeEventListener?.("change", updateReducedMotion);
  }, []);

  const glowStyle = useMemo(() => {
    if (prefersReducedMotion) {
      return {
        background: "radial-gradient(ellipse 60% 50% at 50% 20%, rgba(143, 155, 255, 0.12), transparent)"
      };
    }

    return {
      background: `radial-gradient(ellipse 60% 50% at calc(50% + ${cursorOffset.x}px) calc(20% + ${cursorOffset.y}px), rgba(143, 155, 255, 0.14), transparent 72%)`
    };
  }, [cursorOffset.x, cursorOffset.y, prefersReducedMotion]);

  const handleHeroMove = (event) => {
    if (prefersReducedMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 20;
    setCursorOffset({ x, y });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleHeroMove}
      onMouseLeave={() => setCursorOffset({ x: 0, y: 0 })}
      className="relative min-h-screen flex items-center px-6 md:px-16 pt-32 pb-16 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-80 animate-[aurora_18s_ease-in-out_infinite]"
        style={glowStyle}
      />
      {children}
    </section>
  );
}
