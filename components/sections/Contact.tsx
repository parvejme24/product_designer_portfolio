import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Wrap } from "@/components/layout/Wrap";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05C19.4 8 21 10.2 21 14.14V23h-4v-8.03c0-1.92-.68-3.23-2.4-3.23-1.3 0-2.08.88-2.42 1.73-.13.31-.16.75-.16 1.19V23h-4V8z" />
    </svg>
  );
}

function DribbbleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm7.9 5.5a10.1 10.1 0 0 1 2.3 6.2c-.3-.1-3.6-.7-6.9-.3-.1-.3-.2-.6-.3-.9-.2-.4-.4-.9-.6-1.3 3.6-1.5 5.2-3.5 5.5-3.7zM12 2c2.4 0 4.6.9 6.3 2.3-.3.4-1.7 2.2-5.1 3.6-1.6-2.9-3.4-5.3-3.6-5.7.8-.1 1.6-.2 2.4-.2zM8.6 2.7c.2.3 2 2.7 3.6 5.5-4.6 1.2-8.6 1.2-9 1.2A10.1 10.1 0 0 1 8.6 2.7zM2 12v-.3c.4 0 5.1.1 10-1.4.3.5.5 1 .8 1.5-.1 0-.2.1-.3.1-5.1 1.7-7.9 6.3-8.1 6.6A10 10 0 0 1 2 12zm10 10c-2.2 0-4.2-.8-5.8-2 .1-.3 2.2-4.5 7.8-6.4h.1c1.4 3.9 2 7.2 2.1 7.9-1.3.6-2.7 1-4.2 1.5zm5.9-2.3c-.1-.4-.6-3.5-1.9-7.2 3.1-.5 5.8.3 6.1.4A10.1 10.1 0 0 1 17.9 19.7z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7.2l-5.6-7-6.4 7H1l8.2-9.3L0.7 2h7.4l5 6.4L18.9 2zm-1.3 18h2L6.5 4H4.4l13.2 16z" />
    </svg>
  );
}

const socials = [
  { href: "#", label: "LinkedIn", icon: LinkedInIcon },
  { href: "#", label: "Dribbble", icon: DribbbleIcon },
  { href: "#", label: "X", icon: XIcon },
] as const;

export function Contact() {
  return (
    <section
      id="contact"
      className="relative z-[2] border-b-0 px-0 pt-[90px] pb-[100px] md:pt-[140px]"
    >
      <Wrap className="flex flex-col items-center text-center">
        <Eyebrow>Frame 05 / Contact</Eyebrow>
        <Reveal>
          <h2 className="mb-[50px] max-w-[900px] font-display text-[clamp(38px,7vw,86px)] leading-[1.05] font-normal text-ink">
            Let&apos;s build something{" "}
            <em className="text-accent italic">worth documenting.</em>
          </h2>
        </Reveal>
        <Reveal>
          <a
            href="mailto:hello@iriscalder.design"
            className="cursor-pointer border-b border-line-strong pb-2.5 font-mono text-[clamp(16px,2.4vw,22px)] text-ink transition-[color,border-color] duration-[250ms] hover:border-accent hover:text-accent"
          >
            hello@iriscalder.design
          </a>
        </Reveal>
        <Reveal className="mt-[60px] flex gap-7">
          {socials.map(({ href, label, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line text-ink-dim transition-[border-color,color,transform] duration-[250ms] hover:-translate-y-[3px] hover:border-accent hover:text-accent"
            >
              <Icon />
            </Link>
          ))}
        </Reveal>
      </Wrap>
    </section>
  );
}
