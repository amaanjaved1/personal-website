import { Project } from "@/components/project";
import { Badge } from "@/components/badge";
import { TechBadge } from "@/components/tech-badge";

const PROJECTS = [
  {
    name: "CoursifyQU",
    description:
      "A course insights platform for Queen's University with data scraped from Reddit & RateMyProfessors, and a RAG-powered AI assistant.",
    technologies: [],
    github: "https://coursify-qu.vercel.app/",
    scrapers: "https://github.com/CoursifyQU/Coursify-Scrapers",
    badges: ["FULL-STACK", "RAG", "DATA SCRAPING"],
  },
];

export function Projects() {
  return (
    <section className="flex flex-col gap-3 lg:w-1/3">
      <h2 className="text-xs text-fg-tertiary lg:mt-6">NOTABLE PROJECTS</h2>
      <div className="grid grid-cols-1 gap-3">
        {PROJECTS.map(
          ({ name, description, badges, github, scrapers }, index) => (
            <Project
              key={index}
              name={name}
              description={description}
              badges={badges}
              github={github}
              scrapers={scrapers}
            />
          )
        )}

        {/* RateMyProfessors API Client — grouped parent card */}
        <div className="bento-card flex flex-col gap-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex flex-col gap-1.5">
              <p className="text-xs">RateMyProfessors API Client</p>
              <div className="flex gap-1.5">
                <Badge color="orange">OPEN SOURCE</Badge>
                <Badge color="orange">API CLIENT</Badge>
              </div>
            </div>
            <p className="text-fg-tertiary text-[9px] uppercase tracking-wider whitespace-nowrap">
              ratemyprofessors-client
            </p>
          </div>

          <p className="text-fg-tertiary lg:text-xs text-[10px]">
            A typed, retrying, rate-limited unofficial client for RateMyProfessors — available in Python and TypeScript.
          </p>

          <div className="flex gap-2">
            <a
              href="https://github.com/amaanjaved1/Rate-My-Professors-API-Client-Python"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-bg-tertiary rounded-lg p-2.5 flex flex-col gap-2 hover:border-border-accent border border-transparent transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <TechBadge>Python</TechBadge>
                <span className="text-fg-tertiary text-[10px]">→</span>
              </div>
              <div className="flex flex-col gap-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://img.shields.io/pypi/v/ratemyprofessors-client?color=10b981&cacheSeconds=300" alt="PyPI version" className="h-4 w-fit" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://img.shields.io/pepy/dt/ratemyprofessors-client?cacheSeconds=300" alt="PyPI downloads" className="h-4 w-fit" />
              </div>
            </a>

            <a
              href="https://github.com/amaanjaved1/rate-my-professors-client-ts"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-bg-tertiary rounded-lg p-2.5 flex flex-col gap-2 hover:border-border-accent border border-transparent transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <TechBadge>TypeScript</TechBadge>
                <span className="text-fg-tertiary text-[10px]">→</span>
              </div>
              <div className="flex flex-col gap-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://img.shields.io/npm/v/ratemyprofessors-client?color=10b981&cacheSeconds=300" alt="npm version" className="h-4 w-fit" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://img.shields.io/npm/dt/ratemyprofessors-client?cacheSeconds=300" alt="npm downloads" className="h-4 w-fit" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
