import { Badge } from "@/components/badge";
import { TechBadge } from "@/components/tech-badge";

export function Project({
  badges,
  technologies,
  name,
  description,
  link,
  github,
}: {
  badges: string[];
  technologies: string[];
  name: string;
  description: string;
  link: string;
  github?: string;
}) {
  return (
    <div className="bento-card relative group h-41">
      <a href={link} className="block">
        <div className="flex flex-col gap-2">
          <p className="text-xs min-w-64">{name}</p>
          <p
            className="text-xs text-fg-tertiary absolute right-[16px] top-[16px] 
                      group-hover:text-accent duration-300 transition-all ease-in-out"
          >
            →
          </p>
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
          <div className="flex gap-1">
            {technologies.map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </div>
        </div>
      </a>
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-1 bg-accent text-white text-xs rounded hover:bg-accent-glow transition-colors"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          Live website
        </a>
      )}
    </div>
  );
}
