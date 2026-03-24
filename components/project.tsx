import { Badge } from "@/components/badge";

export function Project({
  badges,
  name,
  description,
  link,
  github,
  scrapers,
}: {
  badges: string[];
  name: string;
  description: string;
  link?: string;
  github?: string;
  scrapers?: string;
}) {
  const cardContent = (
    <div className="flex flex-col gap-2">
      <p className="text-xs min-w-64">{name}</p>
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
      <p className="text-fg-tertiary lg:text-xs min-h-12 text-[10px] mb-1">
        {description}
      </p>
    </div>
  );

  return (
    <div className="bento-card relative group h-41">
      {link ? (
        <a href={link} className="block">
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
      <div className="absolute bottom-2 right-2 flex items-center gap-1.5">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2 py-1 bg-accent text-white text-xs rounded hover:opacity-80 transition-opacity"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2" />
            </svg>
            Live website
          </a>
        )}
        {scrapers && (
          <a
            href={scrapers}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-2 py-1 bg-accent/15 border border-accent/30 text-accent text-xs rounded hover:bg-accent/25 transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Scrapers
          </a>
        )}
      </div>
    </div>
  );
}
