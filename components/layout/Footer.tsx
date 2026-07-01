import Link from "next/link";
import { homeHref } from "@/lib/navigation";
import { Wrap } from "./Wrap";

export function Footer() {
  return (
    <footer className="relative z-[2] py-[30px] font-mono text-[11px] tracking-[0.05em] text-ink-faint uppercase">
      <Wrap className="flex w-full flex-wrap items-center justify-between gap-2.5">
        <span>© 2026 Iris Calder — All rights reserved</span>
        <Link
          href={{ pathname: "/", hash: "top" }}
          className="cursor-pointer border-b border-transparent text-ink-dim transition-[border-color] duration-200 hover:border-ink-dim"
        >
          Back to top ↑
        </Link>
      </Wrap>
    </footer>
  );
}
