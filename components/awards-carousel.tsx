"use client";

import { type ReactNode, useState } from "react";
import type { AwardEntry, AwardHighlight } from "@/lib/awards-data";
import { AWARDS } from "@/lib/awards-data";

const HIGHLIGHT_SHELL: Record<Exclude<AwardHighlight, "mitacs">, string> = {
  blue: "border-blue-500/50 bg-blue-500/[0.14] shadow-[inset_0_1px_0_0_rgba(147,197,253,0.12)] hover:border-blue-400/75",
  rose:
    "border-red-400/40 bg-red-500/[0.08] shadow-[inset_0_1px_0_0_rgba(252,165,165,0.12)] hover:border-red-400/65",
  green:
    "border-emerald-500/45 bg-emerald-500/[0.12] shadow-[inset_0_1px_0_0_rgba(110,231,183,0.1)] hover:border-emerald-400/70",
  orange:
    "border-orange-500/50 bg-orange-500/[0.14] shadow-[inset_0_1px_0_0_rgba(253,186,116,0.15)] hover:border-orange-400/75",
};

function AwardCardBody({ entry }: { entry: AwardEntry }) {
  return (
    <>
      <div className="flex items-start justify-between gap-2">
        <span className="text-xl leading-none" aria-hidden>
          {entry.emoji}
        </span>
      </div>
      <p className="text-sm text-fg-primary leading-snug pr-1 font-medium">{entry.title}</p>
      {entry.issued && (
        <p className="text-xs text-fg-secondary leading-relaxed line-clamp-3">{entry.issued}</p>
      )}
      {entry.associatedWith && (
        <p className="text-xs text-fg-secondary leading-relaxed line-clamp-2">
          🏛️ {entry.associatedWith}
        </p>
      )}
      {entry.description && (
        <p className="text-xs text-fg-tertiary leading-relaxed line-clamp-6 mt-0.5">
          {entry.description}
        </p>
      )}
    </>
  );
}

const MITACS_SHELL =
  "shrink-0 w-[min(22rem,calc(100vw-3rem))] max-h-[320px] rounded-xl overflow-hidden relative transition-transform duration-200 ease-out hover:-translate-y-1 border border-amber-400/50 bg-linear-to-br from-amber-400/22 via-yellow-500/12 to-amber-800/25 shadow-[0_0_28px_-8px_rgba(234,179,8,0.45)]";

function MitacsAwardCard({ entry }: { entry: AwardEntry }) {
  const inner = (
    <>
      <div className="mitacs-sheen pointer-events-none absolute inset-0 z-20 rounded-[inherit]" aria-hidden />
      <div
        className="relative z-10 flex flex-col gap-2 rounded-[inherit] p-4 min-h-0 max-h-[316px] overflow-hidden
        shadow-[inset_0_1px_0_0_rgba(255,251,235,0.2)]"
      >
        <AwardCardBody entry={entry} />
      </div>
    </>
  );

  if (entry.href) {
    return (
      <a
        href={entry.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${MITACS_SHELL} block no-underline text-inherit cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/90 focus-visible:ring-offset-2 focus-visible:ring-offset-(--bg-secondary)`}
        aria-label={`${entry.title} (opens Mitacs website in a new tab)`}
      >
        {inner}
      </a>
    );
  }

  return <div className={MITACS_SHELL}>{inner}</div>;
}

function AwardMarqueeCard(entry: AwardEntry) {
  if (entry.highlight === "mitacs") {
    return <MitacsAwardCard entry={entry} />;
  }

  const shell = entry.highlight
    ? HIGHLIGHT_SHELL[entry.highlight]
    : "border-border bg-bg-tertiary hover:border-border-accent";

  return (
    <div
      className={`shrink-0 flex flex-col gap-2 rounded-lg border p-4 w-[min(22rem,calc(100vw-3rem))] max-h-[320px] min-h-0 overflow-hidden transition-all duration-200 ease-out hover:-translate-y-1 ${shell}`}
    >
      <AwardCardBody entry={entry} />
    </div>
  );
}

export function AwardsCarousel({ children }: { children?: ReactNode }) {
  const [paused, setPaused] = useState(false);
  const track = [...AWARDS, ...AWARDS];

  return (
    <div className="bento-card flex flex-col gap-3">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <p className="text-xs shrink-0">🏆 Awards</p>
          <span className="text-fg-tertiary text-[9px] uppercase tracking-wider truncate">
            {AWARDS.length} honors
          </span>
        </div>
        <span className="text-fg-tertiary text-[9px] shrink-0 whitespace-nowrap">Hover to pause</span>
      </div>

      <div
        className="overflow-hidden -mx-4 px-4"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className={`flex gap-3 w-max marquee-track-reverse${paused ? " paused" : ""}`}>
          {track.map((award, i) => (
            <AwardMarqueeCard key={`${award.title}-${i}`} {...award} />
          ))}
        </div>
      </div>

      {children}
    </div>
  );
}
