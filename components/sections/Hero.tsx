"use client";

import { motion } from "framer-motion";
import { Inspector } from "@/components/ui/Inspector";
import { Reveal } from "@/components/ui/Reveal";
import { Wrap } from "@/components/layout/Wrap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const ease = [0.16, 0.84, 0.44, 1] as const;

const heroLines = [
  "Product",
  <>design, built like <em className="font-normal text-accent italic">a system.</em></>,
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-frame relative flex min-h-screen flex-col justify-center pt-[110px] md:pt-[140px]">
      <Wrap>
        <div className="mb-10 flex items-start justify-between gap-10">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            <Inspector className="flex items-center gap-2 px-3.5 py-2.5 font-mono text-[12px] text-ink-dim">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7fd18f] shadow-[0_0_0_3px_rgba(127,209,143,0.18)]" />
              AVAILABLE FOR NEW WORK — Q3 2026
            </Inspector>
          </motion.div>
        </div>

        <h1 className="overflow-hidden font-display text-[clamp(48px,9vw,128px)] leading-[0.98] font-normal tracking-[-0.01em] text-ink">
          {heroLines.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              {reduceMotion ? (
                <span className="inline-block">{line}</span>
              ) : (
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, delay: i * 0.12, ease }}
                >
                  {line}
                </motion.span>
              )}
            </span>
          ))}
        </h1>

        <div className="mt-14 flex flex-wrap items-end justify-between gap-5 border-t border-line pt-9 md:gap-10">
          <Reveal>
            <p className="max-w-[420px] text-[17px] leading-[1.5] text-ink-dim">
              I&apos;m Iris Calder — a product designer based in Lisbon who thinks in
              components, tokens and edge cases before pixels. I help growing teams turn
              scattered screens into coherent products.
            </p>
          </Reveal>
          <Reveal className="font-mono text-[12px] leading-[1.8] text-ink-faint max-md:text-left md:text-right">
            LAT 38.7223° N
            <br />
            LON 9.1393° W
            <br />
            FRAME: 01 / HERO
          </Reveal>
        </div>
      </Wrap>

      <div className="absolute bottom-9 left-10 hidden items-center gap-2.5 font-mono text-[11px] tracking-[0.08em] text-ink-faint uppercase max-md:hidden">
        <span className="h-[34px] w-px bg-gradient-to-b from-accent to-transparent" />
        Scroll
      </div>
    </section>
  );
}
