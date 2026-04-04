"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const pathname = usePathname();

  return (
    <div
      className="text-fg-primary font-mono text-xs flex items-center bottom-8 left-1/2 -translate-x-1/2 \
        bento-navbar w-fit py-3 px-4"
    >
      <Link
        href="/"
        className={`mx-3 px-1 w-fit hover:text-fg-tertiary transition-all ease-in-out duration-300 ${
          pathname === "/" ? "nav-link-active" : ""
        }`}
      >
        HOME
      </Link>
      <a
        href="/Amaan-Javed-Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-3 px-1 w-fit hover:text-fg-tertiary transition-all ease-in-out duration-300"
      >
        RESUME
      </a>
      <ThemeToggle />
    </div>
  );
}
