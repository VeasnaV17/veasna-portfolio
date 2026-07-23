"use client";

import { useEffect, useState } from "react";

export default function TypingText({ text, speed = 40, pause = 2000, eraseSpeed = 20, className = "" }) {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState("typing"); // "typing" | "pausing" | "erasing"

  useEffect(() => {
    let timeout;

    if (phase === "typing") {
      if (displayed.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayed(text.slice(0, displayed.length + 1));
        }, speed);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), pause);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("erasing"), 0);
    } else if (phase === "erasing") {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(text.slice(0, displayed.length - 1));
        }, eraseSpeed);
      } else {
        timeout = setTimeout(() => setPhase("typing"), 400);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, phase, text, speed, pause, eraseSpeed]);

  return (
    <span className={className}>
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}