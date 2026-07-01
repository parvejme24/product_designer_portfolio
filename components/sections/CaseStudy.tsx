"use client";

import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Inspector } from "@/components/ui/Inspector";
import { Reveal } from "@/components/ui/Reveal";
import { Wrap } from "@/components/layout/Wrap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { homeHref } from "@/lib/navigation";
import { getProject, type Project } from "@/lib/projects";

const ease = [0.16, 0.84, 0.44, 1] as const;

const metaStagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const metaItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

type CaseStudyProps = {
  project: Project;
};

function CaseStudyHero({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();
  const words = project.title.split(" ");

  return (
    <section className="border-b border-line pt-[110px] pb-16 md:pt-[150px] md:pb-24">
      <Wrap>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <Link
            href={homeHref(pathname, "#work")}
            className="group mb-10 inline-flex cursor-pointer items-center gap-2 font-mono text-xs tracking-wide text-ink-dim uppercase transition-colors duration-[250ms] hover:text-accent"
          >
            <motion.span
              className="inline-block"
              whileHover={reduceMotion ? undefined : { x: -4 }}
              transition={{ duration: 0.2, ease }}
            >
              ←
            </motion.span>
            Back to work
          </Link>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
        >
          <Eyebrow>
            {project.frame} / {project.year}
          </Eyebrow>
        </motion.div>

        <h1 className="mb-8 max-w-[900px] overflow-hidden font-display text-[clamp(36px,7vw,84px)] leading-[1.02] font-normal text-ink">
          {words.map((word, i) => (
            <span key={`${word}-${i}`} className="mr-[0.25em] inline-block overflow-hidden">
              {reduceMotion ? (
                <span>{word}</span>
              ) : (
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.85, delay: 0.15 + i * 0.06, ease }}
                >
                  {word}
                </motion.span>
              )}
            </span>
          ))}
        </h1>

        <motion.p
          className="mb-14 max-w-[620px] text-lg leading-[1.5] text-ink-dim"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease }}
        >
          {project.excerpt}
        </motion.p>

        <motion.div
          className="grid grid-cols-2 gap-8 border-t border-line pt-8 md:grid-cols-4"
          variants={reduceMotion ? undefined : metaStagger}
          initial="hidden"
          animate="show"
        >
          {[
            { label: "Role", value: project.role },
            { label: "Timeline", value: project.timeline },
            { label: "Category", value: project.tag, className: "col-span-2 md:col-span-1" },
            {
              label: "Tools",
              value: project.tools.join(", "),
              className: "col-span-2 md:col-span-1",
            },
          ].map((item) => (
            <motion.div
              key={item.label}
              variants={reduceMotion ? undefined : metaItem}
              className={item.className}
            >
              <div className="mb-2 font-mono text-[11px] text-ink-faint uppercase">
                {item.label}
              </div>
              <div className="text-sm text-ink">{item.value}</div>
            </motion.div>
          ))}
        </motion.div>
      </Wrap>
    </section>
  );
}

function CaseStudyCover({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  const swatch1X = useTransform(springX, [-0.5, 0.5], [-14, 14]);
  const swatch1Y = useTransform(springY, [-0.5, 0.5], [-10, 10]);
  const swatch2X = useTransform(springX, [-0.5, 0.5], [10, -10]);
  const swatch2Y = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const labelX = useTransform(springX, [-0.5, 0.5], [-6, 6]);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="border-b border-line py-16 md:py-20">
      <Wrap>
        <Inspector label="Cover.fig" className="relative aspect-[16/8] p-5">
          <motion.div
            ref={ref}
            className="work-canvas relative h-full cursor-crosshair overflow-hidden border border-line"
            initial={reduceMotion ? false : { clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.95, ease }}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          >
            <motion.div
              className="absolute right-0 left-0 h-px origin-left bg-line-strong"
              style={{ top: "40%" }}
              initial={reduceMotion ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
            />
            <motion.div
              className="absolute top-0 bottom-0 w-px origin-top bg-line-strong"
              style={{ left: "50%" }}
              initial={reduceMotion ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.45, ease }}
            />
            <motion.div
              className={`absolute rounded-sm border ${
                project.accent
                  ? "border-accent bg-accent-soft"
                  : "border-blue bg-blue-soft"
              }`}
              style={{
                top: "18%",
                left: "8%",
                width: "36%",
                height: "44%",
                x: swatch1X,
                y: swatch1Y,
              }}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease }}
              whileHover={reduceMotion ? undefined : { scale: 1.02 }}
            />
            <motion.div
              className="absolute rounded-sm border border-line-strong bg-surface-2"
              style={{
                top: "18%",
                left: "50%",
                width: "42%",
                height: "64%",
                x: swatch2X,
                y: swatch2Y,
              }}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.62, ease }}
              whileHover={reduceMotion ? undefined : { scale: 1.02 }}
            />
            <motion.div
              className="absolute top-3 left-[8%] border border-blue-soft bg-bg px-1.5 font-mono text-[10px] text-blue"
              style={{ x: labelX }}
              initial={reduceMotion ? false : { opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.75, ease }}
            >
              {project.title}
            </motion.div>
          </motion.div>
        </Inspector>
      </Wrap>
    </section>
  );
}

function ProcessSection({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.25 });

  return (
    <section ref={sectionRef} className="border-b border-line py-20 md:py-28">
      <Wrap>
        <Eyebrow>Process</Eyebrow>
        <Reveal
          as="h2"
          className="mb-14 max-w-[640px] font-display text-[clamp(28px,4vw,42px)] font-normal text-ink"
        >
          How it came together.
        </Reveal>

        <div className="relative grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="absolute top-[22px] right-0 left-0 hidden h-px md:block">
            <svg className="h-px w-full overflow-visible" preserveAspectRatio="none">
              <motion.line
                x1="0"
                y1="0.5"
                x2="100%"
                y2="0.5"
                stroke="var(--line-strong)"
                style={{ strokeDasharray: "6 6" }}
                initial={{ strokeDashoffset: 1000, opacity: 0 }}
                animate={
                  isInView && !reduceMotion
                    ? { strokeDashoffset: 0, opacity: 1 }
                    : reduceMotion
                      ? { strokeDashoffset: 0, opacity: 1 }
                      : undefined
                }
                transition={{ duration: 1.2, ease }}
              />
            </svg>
          </div>

          {project.process.map((step, i) => (
            <motion.div
              key={step.title}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -4, transition: { duration: 0.25, ease } }
              }
              className="group relative rounded-sm p-1 transition-colors duration-[250ms] hover:bg-accent-soft/30"
            >
              <motion.div
                className="relative z-[2] mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-bg font-mono text-xs text-accent transition-colors duration-[250ms] group-hover:border-accent"
                whileHover={reduceMotion ? undefined : { scale: 1.08 }}
                transition={{ duration: 0.25, ease }}
              >
                {String(i + 1).padStart(2, "0")}
              </motion.div>
              <h4 className="mb-2 font-display text-lg font-medium text-ink transition-colors duration-[250ms] group-hover:text-accent">
                {step.title}
              </h4>
              <p className="max-w-[220px] text-sm leading-[1.5] text-ink-dim">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

function MetricCard({
  num,
  label,
  index,
}: {
  num: string;
  label: string;
  index: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -6,
              transition: { duration: 0.25, ease },
            }
      }
      className="group"
    >
      <Inspector className="cursor-default p-6 transition-colors duration-[250ms] group-hover:border-accent/50">
        <motion.div
          className="mb-2 font-display text-[42px] text-accent"
          initial={reduceMotion ? false : { scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 + index * 0.12, ease }}
        >
          {num}
        </motion.div>
        <div className="font-mono text-[11px] text-ink-faint uppercase transition-colors duration-[250ms] group-hover:text-ink-dim">
          {label}
        </div>
      </Inspector>
    </motion.div>
  );
}

export function CaseStudy({ project }: CaseStudyProps) {
  const next = getProject(project.nextSlug);
  const reduceMotion = useReducedMotion();

  return (
    <article>
      <CaseStudyHero project={project} />
      <CaseStudyCover project={project} />

      <section className="border-b border-line py-20 md:py-28">
        <Wrap className="grid grid-cols-1 gap-14 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow>The problem</Eyebrow>
            <Reveal as="p" className="max-w-[560px] text-[17px] leading-relaxed text-ink-dim">
              {project.problem}
            </Reveal>
          </div>
          <div>
            <Eyebrow>Goals</Eyebrow>
            <ul className="space-y-4">
              {project.goals.map((goal, i) => (
                <Reveal
                  key={goal}
                  as="li"
                  delay={i * 0.08}
                  className="group flex cursor-default items-start gap-4 rounded-sm border border-transparent px-2 py-2 transition-[border-color,background] duration-[250ms] hover:border-line hover:bg-surface/40"
                >
                  <motion.span
                    className="mt-1 shrink-0 font-mono text-xs text-accent"
                    whileHover={reduceMotion ? undefined : { scale: 1.15 }}
                    transition={{ duration: 0.2 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </motion.span>
                  <span className="text-[15px] leading-[1.5] text-ink-dim transition-colors duration-[250ms] group-hover:text-ink">
                    {goal}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </Wrap>
      </section>

      <ProcessSection project={project} />

      <section className="border-b border-line py-20 md:py-28">
        <Wrap>
          <Eyebrow>Outcome</Eyebrow>
          <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {project.metrics.map((metric, i) => (
              <MetricCard key={metric.label} num={metric.num} label={metric.label} index={i} />
            ))}
          </div>
          <Reveal as="p" className="max-w-[680px] text-[17px] leading-relaxed text-ink-dim">
            {project.result}
          </Reveal>
        </Wrap>
      </section>

      {next && (
        <section className="py-20 md:py-28">
          <Wrap>
            <Eyebrow>Next up</Eyebrow>
            <Link href={`/work/${next.slug}`} className="group block cursor-pointer">
              <motion.div
                className="flex flex-wrap items-end justify-between gap-6 border-b border-transparent pb-2 transition-[border-color] duration-[250ms] group-hover:border-line-strong"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease }}
                whileHover={reduceMotion ? undefined : { x: 4 }}
              >
                <h3 className="font-display text-[clamp(32px,6vw,64px)] font-normal text-ink transition-colors duration-[250ms] group-hover:text-accent">
                  {next.title}
                </h3>
                <motion.span
                  className="mb-2 inline-flex items-center gap-2 font-mono text-sm text-ink-dim transition-colors duration-[250ms] group-hover:gap-3 group-hover:text-accent"
                >
                  View case study →
                </motion.span>
              </motion.div>
            </Link>
          </Wrap>
        </section>
      )}
    </article>
  );
}
