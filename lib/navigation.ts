import type { Route } from "next";

type HomeLink = Route | { pathname: Route; hash: string };

/** Hash link that stays on-page at home, or routes to `/` + section elsewhere. */
export function homeHref(pathname: string, hash: string): HomeLink {
  const section = hash.replace(/^#/, "");
  if (!section) return "/";

  if (pathname === "/") {
    return `#${section}`;
  }

  return { pathname: "/", hash: section };
}
