"use client";

import { type ReactNode, useRef, useState } from "react";

export type TabItem = {
  id: string;
  label: string;
  content: ReactNode;
};

export function Tabs({ tabs }: { tabs: TabItem[] }) {
  const [active, setActive] = useState(0);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const focusTab = (index: number) => {
    const next = (index + tabs.length) % tabs.length;
    setActive(next);
    buttonRefs.current[next]?.focus();
  };

  return (
    <div className="flex flex-col gap-4 w-full min-w-0 mt-6">
      <div className="flex flex-wrap items-center justify-center gap-1 w-fit mx-auto max-w-full rounded-xl border border-navbar-border bg-bg-secondary p-1">
        <div role="tablist" aria-label="Sections" className="flex flex-wrap justify-center gap-1">
          {tabs.map(({ id, label }, index) => {
            const selected = index === active;
            return (
              <button
                key={id}
                ref={(el) => {
                  buttonRefs.current[index] = el;
                }}
                type="button"
                role="tab"
                id={`tab-${id}`}
                aria-controls={`panel-${id}`}
                aria-selected={selected}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(index)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowRight") {
                    event.preventDefault();
                    focusTab(index + 1);
                  } else if (event.key === "ArrowLeft") {
                    event.preventDefault();
                    focusTab(index - 1);
                  }
                }}
                className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-xs transition-all duration-200 ease-in-out cursor-pointer ${
                  selected
                    ? "bg-bg-tertiary text-fg-primary border border-border-accent"
                    : "border border-transparent text-fg-tertiary hover:text-fg-primary"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <a
          href="/Amaan-Javed-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap rounded-lg border border-transparent px-3 py-1.5 text-xs text-fg-tertiary hover:text-fg-primary transition-all duration-200 ease-in-out"
        >
          📄 Resume
        </a>
      </div>

      {tabs.map(({ id, content }, index) => (
        <div
          key={id}
          role="tabpanel"
          id={`panel-${id}`}
          aria-labelledby={`tab-${id}`}
          hidden={index !== active}
          className="flex flex-col gap-3 w-full min-w-0"
        >
          {index === active && content}
        </div>
      ))}
    </div>
  );
}
