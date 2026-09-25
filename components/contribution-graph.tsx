const GITHUB_USERNAME = "amaanjaved1";

type Contribution = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type ContributionsResponse = {
  total: { lastYear: number };
  contributions: Contribution[];
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const LEVEL_COLORS = [
  "var(--bg-tertiary)",
  "color-mix(in srgb, var(--accent) 30%, var(--bg-tertiary))",
  "color-mix(in srgb, var(--accent) 55%, var(--bg-tertiary))",
  "color-mix(in srgb, var(--accent) 80%, var(--bg-tertiary))",
  "var(--accent)",
];

async function getContributions(): Promise<ContributionsResponse | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
      { next: { revalidate: 60 * 60 * 6 } }
    );
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

function toWeeks(contributions: Contribution[]) {
  const weeks: (Contribution | null)[][] = [];
  // Pad the first week so each column starts on Sunday
  const firstDay = contributions.length ? new Date(contributions[0].date).getUTCDay() : 0;
  let week: (Contribution | null)[] = Array(firstDay).fill(null);

  for (const day of contributions) {
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }
  if (week.length) weeks.push(week);
  return weeks;
}

export async function ContributionGraph() {
  const data = await getContributions();
  if (!data) return null;

  const weeks = toWeeks(data.contributions);

  // Label a column when its first real day starts a new month
  let lastMonth = -1;
  const monthLabels = weeks.map((week) => {
    const first = week.find(Boolean);
    if (!first) return "";
    const month = new Date(first.date).getUTCMonth();
    if (month === lastMonth) return "";
    lastMonth = month;
    return MONTHS[month];
  });

  return (
    <section className="bento-card flex flex-col gap-3 w-full max-w-fit mx-auto">
      <div className="flex items-center justify-between gap-4 text-xs text-fg-secondary">
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-fg-primary transition-colors"
        >
          {data.total.lastYear.toLocaleString()} contributions in the last year
        </a>
        <div className="flex items-center gap-1 text-fg-tertiary">
          <span>Less</span>
          {LEVEL_COLORS.map((color) => (
            <span key={color} className="size-2.5 rounded-[2px]" style={{ background: color }} />
          ))}
          <span>More</span>
        </div>
      </div>

      {/* row-reverse keeps the most recent weeks in view when the graph overflows on mobile */}
      <div className="flex flex-row-reverse overflow-x-auto no-scrollbar">
        <div className="flex flex-col gap-1">
          <div className="flex gap-[3px] text-[10px] text-fg-tertiary h-3">
            {monthLabels.map((label, i) => (
              <span key={i} className="w-2.5 shrink-0 overflow-visible whitespace-nowrap">
                {label}
              </span>
            ))}
          </div>
          <div className="flex gap-[3px]">
            {weeks.map((week, i) => (
              <div key={i} className="flex flex-col gap-[3px]">
                {week.map((day, j) =>
                  day ? (
                    <span
                      key={day.date}
                      title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
                      className="size-2.5 shrink-0 rounded-[2px]"
                      style={{ background: LEVEL_COLORS[day.level] }}
                    />
                  ) : (
                    <span key={j} className="size-2.5 shrink-0" />
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
