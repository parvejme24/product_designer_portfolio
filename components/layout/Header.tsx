"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-[100] border-b transition-[border-color,background] duration-300 ${
          scrolled
            ? "border-line bg-[rgba(12,14,18,0.78)] backdrop-blur-[10px]"
            : "border-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1240px] items-center justify-between px-[22px] py-[18px] text-ink md:px-10 md:py-[22px]">
          <Link
            href="#top"
            className="flex items-center gap-2 font-mono text-[13px] tracking-[0.04em] text-ink cursor-pointer"
          >
            <span className="flex h-[26px] w-[26px] items-center justify-center border border-line-strong font-display text-[14px] text-ink">
              IC
            </span>
            IRIS&nbsp;CALDER
          </Link>

          <ul className="hidden items-center gap-[36px] text-[14px] text-ink-dim md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group relative cursor-pointer px-0 py-1 transition-colors duration-[250ms] hover:text-ink"
                >
                  {link.label}
                  <span
                    className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-[width] duration-300 group-hover:w-full"
                    style={{ transitionTimingFunction: "var(--ease-portfolio)" }}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#contact"
            className="hidden cursor-pointer border border-line-strong px-4 py-[9px] font-mono text-[12px] tracking-[0.04em] text-ink uppercase transition-[background,border-color] duration-[250ms] hover:border-accent hover:bg-accent-soft md:inline-block"
          >
            Start a project
          </Link>

          <button
            type="button"
            className="relative z-[210] block h-5 w-[26px] cursor-pointer md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span
              className={`absolute right-0 left-0 h-px bg-ink transition-[transform,opacity] duration-300 ${
                menuOpen ? "top-[9px] rotate-45" : "top-0"
              }`}
              style={{ transitionTimingFunction: "var(--ease-portfolio)" }}
            />
            <span
              className={`absolute top-[9px] right-0 left-0 h-px bg-ink transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute right-0 left-0 h-px bg-ink transition-[transform,opacity] duration-300 ${
                menuOpen ? "top-[9px] -rotate-45" : "top-[18px]"
              }`}
              style={{ transitionTimingFunction: "var(--ease-portfolio)" }}
            />
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-[150] flex flex-col justify-center bg-bg p-10 transition-transform duration-500 md:hidden ${
          menuOpen ? "translate-y-0" : "pointer-events-none -translate-y-full"
        }`}
        style={{ transitionTimingFunction: "var(--ease-portfolio)" }}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className="absolute top-[18px] right-[22px] z-[160] flex h-10 w-10 cursor-pointer items-center justify-center border border-line-strong text-ink transition-[border-color,color,background] duration-[250ms] hover:border-accent hover:bg-accent-soft hover:text-accent"
          aria-label="Close menu"
          onClick={closeMenu}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
            className="h-[18px] w-[18px]"
          >
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className="cursor-pointer border-b border-line py-2.5 font-display text-[clamp(32px,9vw,56px)] text-ink-dim active:text-accent"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
