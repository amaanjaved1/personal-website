"use client";

import { useEffect, useState } from "react";
import type { AwardEntry } from "@/lib/awards-data";
import { AWARDS } from "@/lib/awards-data";

/** "Issued by X · Mar 2025" → { issuer: "X", date: "Mar 2025" } */
function splitIssued(issued?: string): { issuer?: string; date?: string } {
  if (!issued) return {};
  const [left, right] = issued.split("·");
  return {
    issuer: left?.replace(/^Issued by\s*/i, "").trim(),
    date: right?.trim(),
  };
}

const ROW_ACCENT: Record<string, string> = {
  mitacs:
    "border-amber-400/60 bg-linear-to-r from-amber-400/15 to-transparent hover:border-amber-400/90",
  blue: "border-blue-500/35 hover:border-blue-400/60",
  rose: "border-red-400/35 hover:border-red-400/60",
  green: "border-emerald-500/35 hover:border-emerald-400/60",
  orange: "border-orange-500/35 hover:border-orange-400/60",
};

function AwardModal({
  award,
  onClose,
}: {
  award: AwardEntry;
  onClose: () => void;
}) {
  const { issuer, date } = splitIssued(award.issued);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-label={award.title}
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg max-h-[80vh] overflow-y-auto rounded-xl border border-border bg-bg-secondary p-5 shadow-xl flex flex-col gap-3"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 min-w-0">
            <span className="text-2xl leading-none shrink-0" aria-hidden>
              {award.emoji}
            </span>
            <p className="text-sm text-fg-primary font-medium leading-snug">
              {award.title}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            autoFocus
            aria-label="Close"
            className="shrink-0 rounded-md px-2 py-1 text-xs text-fg-tertiary hover:text-fg-primary hover:bg-bg-tertiary transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-1">
          {issuer && (
            <p className="text-xs text-fg-secondary">Issued by {issuer}</p>
          )}
          {date && (
            <p className="text-[10px] uppercase tracking-wider text-fg-tertiary">
              {date}
            </p>
          )}
          {award.associatedWith && (
            <p className="text-xs text-fg-secondary">
              🏛️ {award.associatedWith}
            </p>
          )}
        </div>

        {award.description && (
          <p className="text-xs text-fg-tertiary leading-relaxed">
            {award.description}
          </p>
        )}

        {award.href && (
          <a
            href={award.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit rounded border border-accent/30 bg-accent/15 px-2 py-1 text-xs text-accent hover:bg-accent/25 transition-colors"
          >
            Learn more ↗
          </a>
        )}
      </div>
    </div>
  );
}

export function AwardsList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {AWARDS.map((award, index) => {
          const { date } = splitIssued(award.issued);
          const accent = award.highlight
            ? ROW_ACCENT[award.highlight]
            : "border-border hover:border-border-accent";

          return (
            <button
              key={`${award.title}-${index}`}
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-haspopup="dialog"
              className={`flex items-center gap-2.5 rounded-lg border bg-bg-secondary px-3 py-2.5 text-left transition-all duration-200 ease-in-out hover:-translate-y-0.5 cursor-pointer ${accent}`}
            >
              <span className="text-base leading-none shrink-0" aria-hidden>
                {award.emoji}
              </span>
              <span className="text-xs text-fg-primary leading-snug min-w-0 flex-1">
                {award.title}
              </span>
              {date && (
                <span className="text-[9px] uppercase tracking-wider text-fg-tertiary whitespace-nowrap shrink-0">
                  {date}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {openIndex !== null && (
        <AwardModal
          award={AWARDS[openIndex]}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </>
  );
}
