"use client";

import { useEffect, useState } from "react";

export function useReducedMotion(): boolean {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(media.matches);

    const handler = (event: MediaQueryListEvent) => {
      setReduceMotion(event.matches);
    };

    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  return reduceMotion;
}
