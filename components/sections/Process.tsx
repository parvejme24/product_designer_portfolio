"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Wrap } from "@/components/layout/Wrap";
import { processSteps } from "@/lib/data";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const ease = [0.16, 0.84, 0.44, 1] as const;

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<SVGLineElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!lineRef.current || !isInView) return;
    lineRef.current.style.strokeDasharray = "6 6";
    if (reduceMotion) {
      lineRef.current.setAttribute("stroke-dashoffset", "0");
    }
  }, [isInView, reduceMotion]);

  return (
    <section id="process" ref={sectionRef} className="section-frame">
      <Wrap>
        <Eyebrow>Frame 04 / How I work</Eyebrow>
        <Reveal>
          <h2 className="mb-[70px] max-w-[720px] font-display text-[clamp(30px,4.5vw,48px)] leading-normal font-normal text-ink">
            A repeatable process for products that need to scale.
          </h2>
        </Reveal>

        <div className="relative grid grid-cols-1 gap-[50px] max-lg:[&_.process-line]:hidden md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          <div className="process-line absolute top-[26px] right-0 left-0 hidden h-px lg:block">
            <svg className="h-px w-full overflow-visible" preserveAspectRatio="none">
              <motion.line
                ref={lineRef}
                x1="0"
                y1="0.5"
                x2="100%"
                y2="0.5"
                stroke="var(--line-strong)"
                initial={{ strokeDashoffset: 1000 }}
                animate={
                  isInView && !reduceMotion
                    ? { strokeDashoffset: 0 }
                    : reduceMotion
                      ? { strokeDashoffset: 0 }
                      : undefined
                }
                transition={{ duration: 1.2, ease }}
                style={{ strokeDasharray: "6 6" }}
              />
            </svg>
          </div>

          {processSteps.map((step) => (
            <Reveal key={step.num} className="pr-0 lg:pr-[30px]">
              <div className="relative z-[2] mb-[26px] flex h-[52px] w-[52px] items-center justify-center rounded-full border border-line-strong bg-bg font-mono text-[13px] text-accent">
                {step.num}
              </div>
              <h4 className="mb-3 font-display text-[21px] font-medium text-ink">
                {step.title}
              </h4>
              <p className="max-w-[240px] text-[14.5px] leading-[1.5] text-ink-dim">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
