"use client";

import { type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const ease = [0.16, 0.84, 0.44, 1] as const;

type RevealProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  delay?: number;
};

export function Reveal({ children, className, delay = 0, ...props }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.8, ease, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
