"use client";

import { motion } from "framer-motion";
import { Inspector } from "@/components/ui/Inspector";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { WorkVisualElement } from "@/lib/data";

const swatchStyles = {
  accent: "bg-accent-soft border border-accent",
  blue: "bg-blue-soft border border-blue",
  surface: "bg-surface-2 border border-line-strong",
} as const;

type WorkVisualProps = {
  fileLabel: string;
  elements: WorkVisualElement[];
};

export function WorkVisual({ fileLabel, elements }: WorkVisualProps) {
  const reduceMotion = useReducedMotion();

  return (
    <Inspector label={fileLabel} className="relative aspect-[16/11] p-[18px]">
      <motion.div
        className="work-canvas relative h-full overflow-hidden border border-line"
        initial={reduceMotion ? false : { clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: [0.16, 0.84, 0.44, 1] }}
      >
        {elements.map((el, i) => {
          if (el.type === "h-line") {
            return (
              <div
                key={i}
                className="absolute right-0 left-0 h-px bg-line-strong"
                style={{ top: el.top }}
              />
            );
          }
          if (el.type === "v-line") {
            return (
              <div
                key={i}
                className="absolute top-0 bottom-0 w-px bg-line-strong"
                style={{ left: el.left }}
              />
            );
          }
          if (el.type === "swatch") {
            return (
              <div
                key={i}
                className={`absolute ${swatchStyles[el.variant]} ${el.rounded ? "rounded-full" : "rounded-[3px]"}`}
                style={{
                  top: el.top,
                  left: el.left,
                  width: el.width,
                  height: el.height,
                }}
              />
            );
          }
          return (
            <div
              key={i}
              className="absolute border border-blue-soft bg-bg px-[5px] py-px font-mono text-[10px] text-blue"
              style={{
                top: el.top,
                bottom: el.bottom,
                left: el.left,
                right: el.right,
              }}
            >
              {el.label}
            </div>
          );
        })}
      </motion.div>
    </Inspector>
  );
}
