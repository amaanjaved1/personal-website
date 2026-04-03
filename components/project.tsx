import { Badge } from "@/components/badge";

const githubIcon = (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10Z"
    />
  </svg>
);

export function Project({
  badges,
  name,
  description,
  link,
  github,
  webApp,
  rag,
  scrapers,
}: {
  badges: string[];
  name: string;
  description: string;
  link?: string;
  github?: string;
  webApp?: string;
  rag?: string;
  scrapers?: string;
}) {
  const sourceItems: { label: string; href: string }[] = [];
  if (webApp) sourceItems.push({ label: "Web App", href: webApp });
  if (rag) sourceItems.push({ label: "RAG", href: rag });
  if (scrapers) sourceItems.push({ label: "Web Scrapers", href: scrapers });

  const hasSourceMenu = sourceItems.length > 0;
  const hasLinks = github || hasSourceMenu;

  const buttons = hasLinks && (
    <div className="relative z-10 flex flex-wrap items-center gap-1.5 mt-1">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-2 py-1 bg-accent text-white text-xs rounded hover:opacity-80 transition-opacity"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <path
              d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          Live website
        </a>
      )}
      {hasSourceMenu && (
        <details className="group relative">
          <summary className="flex items-center gap-1.5 px-2 py-1 bg-accent/15 border border-accent/30 text-accent text-xs rounded hover:bg-accent/25 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
            {githubIcon}
            Source code
            <svg
              className="size-3 shrink-0 opacity-70 transition-transform group-open:rotate-180"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </summary>
          <div
            className="absolute left-0 top-[calc(100%+6px)] min-w-46 rounded-lg border border-border bg-bg-tertiary py-1 shadow-lg"
            role="menu"
          >
            {sourceItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-xs text-fg-secondary hover:bg-accent/10 hover:text-accent transition-colors"
                role="menuitem"
              >
                {githubIcon}
                {label}
              </a>
            ))}
          </div>
        </details>
      )}
    </div>
  );

  const cardContent = (
    <div className="flex flex-col gap-2">
      <p className="text-xs lg:min-w-64">{name}</p>
      {link && (
        <p className="text-xs text-fg-tertiary absolute right-[16px] top-[16px] group-hover:text-accent duration-300 transition-all ease-in-out">
          →
        </p>
      )}
      <div className="flex gap-2">
        {badges.map((badge) => (
          <Badge key={badge} color="orange" className="uppercase">
            {badge}
          </Badge>
        ))}
      </div>
      <p className="text-fg-tertiary lg:text-xs text-[10px]">
        {description}
      </p>
      {buttons}
    </div>
  );

  return (
    <div className="bento-card relative group h-auto">
      {link ? (
        <a href={link} className="block">
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
    </div>
  );
}
