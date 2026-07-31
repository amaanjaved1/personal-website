type VolunteerEntry = {
  emoji: string;
  title: string;
  date: string;
  summary: string;
  chips?: string[];
};

const VOLUNTEERING: VolunteerEntry[] = [
  {
    emoji: "📚",
    title: "Peer mentoring",
    date: "Jul 2023 — May 2027",
    summary: "Mentee in first year, mentor every year since.",
    chips: [
      "2022–23 · Mentee",
      "2023–24 · Mentor ×2",
      "2024–25 · Mentor ×2",
      "2025–26 · Mentor ×2",
      "2026–27 · Mentor ×1",
    ],
  },
  {
    emoji: "🌱",
    title: "Velocity Internship program",
    date: "Summer 2023 / 2024",
    summary: "Community volunteering days with Scotiabank and Tangerine.",
    chips: [
      "Don't Mess with the Don ×2",
      "Project Forward YMCA",
    ],
  },
  {
    emoji: "☀️",
    title: "Project Sunshine Canada",
    date: "May 2021",
    summary: "Tested a program for pediatric patients.",
  },
];

export function Volunteering() {
  return (
    <section className="flex flex-col gap-3 w-full min-w-0 mt-3">
      <h2 className="text-xs text-fg-tertiary">🤝 VOLUNTEERING</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {VOLUNTEERING.map(({ emoji, title, date, summary, chips }) => (
          <div key={title} className="bento-card flex flex-col gap-2 h-full">
            <div className="flex items-start gap-2.5">
              <span className="text-base leading-none shrink-0" aria-hidden>
                {emoji}
              </span>
              <div className="flex flex-col gap-0.5 min-w-0">
                <p className="text-xs leading-snug">{title}</p>
                <p className="text-[9px] uppercase tracking-wider text-fg-tertiary">
                  {date}
                </p>
              </div>
            </div>

            <p className="text-fg-tertiary text-[10px] lg:text-xs">{summary}</p>

            {chips && (
              <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                {chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded bg-bg-tertiary px-1.5 py-0.5 text-[9px] text-fg-secondary whitespace-nowrap"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
