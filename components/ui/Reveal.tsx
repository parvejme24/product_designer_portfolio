"use client";

import { type ElementType, type ReactNode } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const ease = [0.16, 0.84, 0.44, 1] as const;

type MotionTag = keyof typeof motion;

type RevealProps = {
  as?: MotionTag;
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function Reveal({
  as = "div",
  children,
  className,
  delay = 0,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    const StaticTag = as as ElementType;
    return <StaticTag className={className}>{children}</StaticTag>;
  }

  const MotionComponent = (motion[as] ?? motion.div) as typeof motion.div;

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </MotionComponent>
  );
}
