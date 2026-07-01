import type { WorkVisualElement } from "./data";

export type CaseStudyStep = {
  title: string;
  desc: string;
};

export type CaseStudyMetric = {
  num: string;
  label: string;
};

export type Project = {
  slug: string;
  frame: string;
  year: string;
  title: string;
  role: string;
  timeline: string;
  tools: string[];
  tag: string;
  excerpt: string;
  tags: string[];
  accent: boolean;
  fileLabel: string;
  visual: WorkVisualElement[];
  problem: string;
  goals: string[];
  process: CaseStudyStep[];
  metrics: CaseStudyMetric[];
  result: string;
  nextSlug: string;
};

export const projects: Project[] = [
  {
    slug: "verse-design-system",
    frame: "FRAME 01",
    year: "2025",
    title: "Verse Design System",
    role: "Lead Product Designer",
    timeline: "6 months",
    tools: ["Figma", "Tokens Studio", "Storybook"],
    tag: "Design Systems",
    excerpt:
      "Unified forty-plus product surfaces under one token-based system — reducing design-to-dev handoff time by 60% and giving three squads a shared visual language.",
    tags: ["Design Systems", "Tokens", "Figma"],
    accent: true,
    fileLabel: "Work_01.fig",
    visual: [
      { type: "h-line", top: "35%" },
      { type: "v-line", left: "62%" },
      {
        type: "swatch",
        top: "14%",
        left: "8%",
        width: "44%",
        height: "36%",
        variant: "accent",
      },
      {
        type: "swatch",
        top: "56%",
        left: "8%",
        width: "74%",
        height: "14%",
        variant: "surface",
      },
      { type: "measure", top: "10px", left: "8%", label: "W: 320" },
      { type: "measure", bottom: "14px", right: "12px", label: "GRID: 12COL" },
    ],
    problem:
      "Verse had grown from one product to four in eighteen months. Each squad had shipped fast by copying whatever pattern was closest at hand, and by the time I joined, there were six different button components, three spacing scales, and no shared source of truth. Engineers were rebuilding the same dropdown from scratch in every codebase.",
    goals: [
      "Cut the time between a design file and a shipped component to under a week",
      "Give three product squads one shared visual language without slowing anyone down",
      "Make the system self-documenting enough that new hires didn't need a walkthrough",
    ],
    process: [
      {
        title: "Audit",
        desc: "Catalogued every existing component across four codebases and scored each by usage and inconsistency.",
      },
      {
        title: "Token architecture",
        desc: "Built a three-tier token system — primitive, semantic, component — so theming didn't require touching component code.",
      },
      {
        title: "Component library",
        desc: "Rebuilt 64 components in Figma with matching React implementations, documented in Storybook.",
      },
      {
        title: "Rollout",
        desc: "Migrated squads one at a time, pairing with engineers rather than handing off a finished spec.",
      },
    ],
    metrics: [
      { num: "60%", label: "Faster design-to-dev handoff" },
      { num: "64", label: "Components unified" },
      { num: "3", label: "Squads onboarded" },
    ],
    result:
      "Six months after rollout, all three squads were building on the same token set. New feature UI now ships against existing components by default rather than one-off styles, and onboarding a new designer to the system takes an afternoon instead of a week.",
    nextSlug: "loop-health-care-navigator",
  },
  {
    slug: "loop-health-care-navigator",
    frame: "FRAME 02",
    year: "2024",
    title: "Loop Health — Care Navigator",
    role: "Senior Product Designer",
    timeline: "4 months",
    tools: ["Figma", "Maze", "Amplitude"],
    tag: "Product Design",
    excerpt:
      "Redesigned the patient intake flow for a telehealth platform, cutting drop-off during triage by a third through clearer state design and progressive disclosure.",
    tags: ["Product Design", "Healthcare", "Research"],
    accent: false,
    fileLabel: "Work_02.fig",
    visual: [
      { type: "h-line", top: "60%" },
      { type: "v-line", left: "30%" },
      {
        type: "swatch",
        top: "10%",
        left: "34%",
        width: "52%",
        height: "20%",
        variant: "blue",
      },
      {
        type: "swatch",
        top: "38%",
        left: "34%",
        width: "52%",
        height: "44%",
        variant: "surface",
      },
      { type: "measure", top: "10px", right: "10px", label: "H: 480" },
      { type: "measure", bottom: "14px", left: "8%", label: "SPACING: 8PX" },
    ],
    problem:
      "A third of patients starting the intake flow abandoned it before reaching a doctor. Support tickets pointed at one screen in particular: a single long form asking for symptoms, history, and insurance details all at once, with no sense of how much was left.",
    goals: [
      "Reduce intake abandonment without lengthening average completion time",
      "Make the triage questions feel adaptive rather than like a static form",
      "Design for patients who are anxious, in pain, or unfamiliar with the product",
    ],
    process: [
      {
        title: "Session review",
        desc: "Watched 40+ recorded intake sessions to see exactly where and why people dropped off.",
      },
      {
        title: "Flow mapping",
        desc: "Split one long form into a branching, symptom-aware sequence — fewer questions for simpler cases.",
      },
      {
        title: "Prototype & test",
        desc: "Ran moderated tests with 12 patients across three prototype rounds before touching production code.",
      },
      {
        title: "Instrumented launch",
        desc: "Shipped behind a flag to 20% of traffic first, watching completion rate before a full rollout.",
      },
    ],
    metrics: [
      { num: "33%", label: "Drop-off reduced" },
      { num: "4.2min", label: "Avg. completion time" },
      { num: "12", label: "Patients tested" },
    ],
    result:
      "The branching flow cut abandonment by a third while keeping completion time roughly flat, because most patients now only see the questions relevant to them. It's since become the template for two other intake flows on the platform.",
    nextSlug: "fieldnote-mobile",
  },
  {
    slug: "fieldnote-mobile",
    frame: "FRAME 03",
    year: "2023",
    title: "Fieldnote Mobile",
    role: "Product Designer (0→1)",
    timeline: "14 weeks",
    tools: ["Figma", "SwiftUI Kit", "Notion"],
    tag: "0 → 1",
    excerpt:
      "Took a field-research note-taking app from concept to launch in fourteen weeks — including offline-first architecture decisions made alongside engineering.",
    tags: ["0 → 1", "Mobile", "Offline-first"],
    accent: true,
    fileLabel: "Work_03.fig",
    visual: [
      { type: "h-line", top: "22%" },
      { type: "h-line", top: "78%" },
      {
        type: "swatch",
        top: "26%",
        left: "10%",
        width: "30%",
        height: "48%",
        variant: "surface",
      },
      {
        type: "swatch",
        top: "26%",
        left: "46%",
        width: "44%",
        height: "48%",
        variant: "accent",
      },
      { type: "measure", top: "6%", left: "10%", label: "MOBILE FIRST" },
    ],
    problem:
      "Field researchers were taking notes in whatever app happened to work without signal — usually the native Notes app — then manually reorganizing everything once they were back online. Nothing on the market was built around the assumption that connectivity was the exception, not the rule.",
    goals: [
      "Design an app that behaves identically with or without a connection",
      "Make structured tagging fast enough to use one-handed, standing up, mid-interview",
      "Ship a real v1 in under four months with a two-person team",
    ],
    process: [
      {
        title: "Field shadowing",
        desc: "Spent three days with two research teams to see how notes actually get taken and organized in the field.",
      },
      {
        title: "Offline-first architecture",
        desc: "Worked directly with engineering on a local-first data model before designing a single screen.",
      },
      {
        title: "Rapid prototyping",
        desc: "Weekly builds tested with the same two research teams throughout the project.",
      },
      {
        title: "Launch",
        desc: "Shipped v1 to both pilot teams, then opened to a public beta four weeks later.",
      },
    ],
    metrics: [
      { num: "14wks", label: "Concept to launch" },
      { num: "100%", label: "Feature parity offline" },
      { num: "2", label: "Pilot research teams" },
    ],
    result:
      "Both pilot teams moved their entire workflow onto Fieldnote within the first month, and the offline-first approach became the app's core differentiator in a crowded note-taking category.",
    nextSlug: "grainline-type-studio",
  },
  {
    slug: "grainline-type-studio",
    frame: "FRAME 04",
    year: "2022",
    title: "Grainline Type Studio",
    role: "Brand & Web Designer",
    timeline: "8 weeks",
    tools: ["Figma", "Webflow", "Adobe Illustrator"],
    tag: "Branding",
    excerpt:
      "Brand identity and marketing site for an independent type foundry, built around a variable-font showcase and an unusually opinionated grid.",
    tags: ["Branding", "Web Design"],
    accent: false,
    fileLabel: "Work_04.fig",
    visual: [
      { type: "v-line", left: "50%" },
      {
        type: "swatch",
        top: "16%",
        left: "14%",
        width: "30%",
        height: "30%",
        variant: "surface",
        rounded: true,
      },
      {
        type: "swatch",
        top: "50%",
        left: "56%",
        width: "32%",
        height: "32%",
        variant: "blue",
      },
      { type: "measure", bottom: "10px", left: "10px", label: "TYPE SCALE 1.25" },
    ],
    problem:
      "Grainline had a strong catalog of variable fonts but a site that undersold them — static screenshots instead of live type, and a generic template grid that didn't reflect the craft of the product itself.",
    goals: [
      "Let visitors manipulate the variable fonts live, not just look at samples",
      "Build a grid system distinctive enough to double as a brand signature",
      "Keep load times fast despite heavy variable-font files",
    ],
    process: [
      {
        title: "Type-first exploration",
        desc: "Designed the interactive specimen tool before any marketing copy or layout existed.",
      },
      {
        title: "Grid system",
        desc: "Built a 5-column asymmetric grid derived from the foundry's own kerning units.",
      },
      {
        title: "Build in Webflow",
        desc: "Hand-built interactions for the variable-font sliders with custom code embeds.",
      },
      {
        title: "Launch",
        desc: "Shipped alongside the foundry's biggest release to date, a 12-weight variable serif.",
      },
    ],
    metrics: [
      { num: "8wks", label: "Brand to launch" },
      { num: "3x", label: "Time-on-site increase" },
      { num: "12", label: "Font weights showcased" },
    ],
    result:
      "The live specimen tool became the most-used feature on the site, and time-on-site tripled compared to the previous version — most visitors now sample type directly instead of downloading a PDF specimen sheet.",
    nextSlug: "verse-design-system",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
