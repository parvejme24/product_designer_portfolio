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

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

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
