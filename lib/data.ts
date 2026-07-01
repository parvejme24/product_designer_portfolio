export type WorkVisualElement =
  | { type: "h-line"; top: string }
  | { type: "v-line"; left: string }
  | {
      type: "swatch";
      top: string;
      left: string;
      width: string;
      height: string;
      variant: "accent" | "blue" | "surface";
      rounded?: boolean;
    }
  | {
      type: "measure";
      top?: string;
      bottom?: string;
      left?: string;
      right?: string;
      label: string;
    };

export type WorkItem = {
  frame: string;
  year: string;
  fileLabel: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  visual: WorkVisualElement[];
};

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export const workItems: WorkItem[] = [
  {
    frame: "FRAME 01",
    year: "2025",
    fileLabel: "Work_01.fig",
    title: "Verse Design System",
    description:
      "Unified forty-plus product surfaces under one token-based system — reducing design-to-dev handoff time by 60% and giving three squads a shared visual language.",
    tags: ["Design Systems", "Tokens", "Figma"],
    href: "#",
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
  },
  {
    frame: "FRAME 02",
    year: "2024",
    fileLabel: "Work_02.fig",
    title: "Loop Health — Care Navigator",
    description:
      "Redesigned the patient intake flow for a telehealth platform, cutting drop-off during triage by a third through clearer state design and progressive disclosure.",
    tags: ["Product Design", "Healthcare", "Research"],
    href: "#",
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
  },
  {
    frame: "FRAME 03",
    year: "2023",
    fileLabel: "Work_03.fig",
    title: "Fieldnote Mobile",
    description:
      "Took a field-research note-taking app from concept to launch in fourteen weeks — including offline-first architecture decisions made alongside engineering.",
    tags: ["0 → 1", "Mobile", "Offline-first"],
    href: "#",
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
  },
  {
    frame: "FRAME 04",
    year: "2022",
    fileLabel: "Work_04.fig",
    title: "Grainline Type Studio",
    description:
      "Brand identity and marketing site for an independent type foundry, built around a variable-font showcase and an unusually opinionated grid.",
    tags: ["Branding", "Web Design"],
    href: "#",
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
  },
];

export const processSteps = [
  {
    num: "01",
    title: "Frame the problem",
    description:
      "Interviews, analytics and stakeholder mapping before a single screen gets drawn.",
  },
  {
    num: "02",
    title: "Map the system",
    description:
      "Flows, states and component inventory — the skeleton the UI hangs on.",
  },
  {
    num: "03",
    title: "Prototype the edges",
    description:
      "Design the empty, loading and error states first — not as an afterthought.",
  },
  {
    num: "04",
    title: "Ship & measure",
    description:
      "Instrument the release, watch the data, fold learnings back into the system.",
  },
] as const;

export const skills = [
  { label: "Design Systems", emphasized: true },
  { label: "Figma", emphasized: false },
  { label: "Prototyping", emphasized: true },
  { label: "User Research", emphasized: false },
  { label: "Accessibility", emphasized: true },
  { label: "Motion Design", emphasized: false },
  { label: "Front-end (HTML/CSS)", emphasized: true },
  { label: "Workshop Facilitation", emphasized: false },
] as const;

export const aboutStats = [
  { num: "8", label: "Years practicing" },
  { num: "27", label: "Products shipped" },
  { num: "4", label: "Design systems built" },
] as const;
