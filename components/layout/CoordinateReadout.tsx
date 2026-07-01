"use client";

import { useEffect, useState } from "react";

export function CoordinateReadout() {
  const [coords, setCoords] = useState({ x: 0, y: 0, visible: false });
  const [isCoarse, setIsCoarse] = useState(true);

  useEffect(() => {
    setIsCoarse(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    if (isCoarse) return;

    const onMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY, visible: true });
    };
    const onLeave = () => setCoords((c) => ({ ...c, visible: false }));

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [isCoarse]);

  if (isCoarse) return null;

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[200] whitespace-nowrap border border-line-strong bg-[rgba(12,14,18,0.85)] px-1.5 py-0.5 font-mono text-[11px] text-accent transition-opacity duration-200"
      style={{
        opacity: coords.visible ? 1 : 0,
        transform: "translate(14px, 14px)",
        left: coords.x,
        top: coords.y,
      }}
    >
      X:{String(coords.x).padStart(4, "0")} Y:{String(coords.y).padStart(4, "0")}
    </div>
  );
}
