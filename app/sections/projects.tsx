import Image from "next/image";
import { Project } from "@/components/project";
import { Badge } from "@/components/badge";

type ProjectEntry = {
  name: string;
  description: string;
  technologies: string[];
  badges: string[];
  github?: string;
  webApp?: string;
  rag?: string;
  scrapers?: string;
};

const PROJECTS: ProjectEntry[] = [
  {
    name: "📚 Coursify",
    description:
      "A course insights platform for Queen's University with data scraped from Reddit & RateMyProfessors, and a RAG-powered AI assistant.",
    technologies: [],
    github: "https://www.coursify.ca/",
    webApp: "https://github.com/amaanjaved1/Coursify-WebApp",
    rag: "https://github.com/amaanjaved1/Coursify-RAG",
    scrapers: "https://github.com/CoursifyQU/Coursify-Scrapers",
    badges: ["FULL-STACK", "RAG", "DATA SCRAPING"],
  },
];

export function Projects() {
  return (
    <section className="flex flex-col gap-3 lg:w-1/3 w-full min-w-0">
      <h2 className="text-xs text-fg-tertiary lg:mt-6">🚀 NOTABLE PROJECTS</h2>
      <div className="grid grid-cols-1 gap-3">
        {PROJECTS.map(
          (
            { name, description, badges, github, webApp, rag, scrapers },
            index,
          ) => (
            <Project
              key={index}
              name={name}
              description={description}
              badges={badges}
              github={github}
              webApp={webApp}
              rag={rag}
              scrapers={scrapers}
            />
          ),
        )}

        {/* RateMyProfessors API Client — grouped parent card */}
        <div className="bento-card flex flex-col gap-3">
          <p className="text-xs">📦 RateMyProfessors API Client</p>

          <p className="text-fg-tertiary lg:text-xs text-[10px]">
            A typed, retrying, rate-limited unofficial client for
            RateMyProfessors.
          </p>

          <div className="flex sm:flex-row flex-col gap-2">
            <div className="flex-1 bg-bg-tertiary rounded-lg p-2.5 flex flex-col gap-2 border border-transparent">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-fg-primary">Python</p>
                <a
                  href="https://pypi.org/project/ratemyprofessors-client/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-2 py-0.5 bg-[#3775A9] text-white text-[9px] font-medium rounded-full hover:opacity-80 transition-opacity"
                >
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.034v-2.867s-.109-3.403 3.348-3.403h5.771s3.24.052 3.24-3.13V3.24S18.28 0 11.914 0zm-3.21 1.87a1.038 1.038 0 1 1 0 2.077 1.038 1.038 0 0 1 0-2.077zM12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752h-5.814v-.826h8.121S24 18.211 24 12.031c0-6.18-3.403-5.96-3.403-5.96h-2.034v2.867s.109 3.403-3.348 3.403H9.444s-3.24-.052-3.24 3.13v5.26S5.72 24 12.086 24zm3.21-1.87a1.038 1.038 0 1 1 0-2.077 1.038 1.038 0 0 1 0 2.077z" />
                  </svg>
                  PyPI
                </a>
              </div>
              <div className="flex flex-col gap-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://img.shields.io/pypi/v/ratemyprofessors-client?color=10b981&cacheSeconds=300"
                  alt="PyPI version"
                  className="h-4 w-fit"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://img.shields.io/pepy/dt/ratemyprofessors-client?cacheSeconds=300"
                  alt="PyPI downloads"
                  className="h-4 w-fit"
                />
              </div>
            </div>

            <div className="flex-1 bg-bg-tertiary rounded-lg p-2.5 flex flex-col gap-2 border border-transparent">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-fg-primary">
                  TypeScript
                </p>
                <a
                  href="https://www.npmjs.com/package/ratemyprofessors-client"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-2 py-0.5 bg-[#CC3534] text-white text-[9px] font-medium rounded-full hover:opacity-80 transition-opacity"
                >
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474C23.214 24 24 23.214 24 22.237V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836H13.09v-9.802H9.013v9.802H5.13z" />
                  </svg>
                  npm
                </a>
              </div>
              <div className="flex flex-col gap-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://img.shields.io/npm/v/ratemyprofessors-client?color=10b981&cacheSeconds=300"
                  alt="npm version"
                  className="h-4 w-fit"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://img.shields.io/npm/dt/ratemyprofessors-client?cacheSeconds=300"
                  alt="npm downloads"
                  className="h-4 w-fit"
                />
              </div>
            </div>
          </div>

          {/* Source code dropdown */}
          <div className="relative z-10 flex flex-wrap items-center gap-1.5 mt-1">
            <details className="group relative">
              <summary className="flex items-center gap-1.5 px-2 py-1 bg-accent/15 border border-accent/30 text-accent text-xs rounded hover:bg-accent/25 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10Z"
                  />
                </svg>
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
                className="absolute left-0 top-[calc(100%+6px)] min-w-44 rounded-lg border border-border bg-bg-tertiary py-1 shadow-lg"
                role="menu"
              >
                <a
                  href="https://github.com/amaanjaved1/Rate-My-Professors-API-Client-Python"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-xs text-fg-secondary hover:bg-accent/10 hover:text-accent transition-colors"
                  role="menuitem"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10Z"
                    />
                  </svg>
                  Python
                </a>
                <a
                  href="https://github.com/amaanjaved1/rate-my-professors-client-ts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-xs text-fg-secondary hover:bg-accent/10 hover:text-accent transition-colors"
                  role="menuitem"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10Z"
                    />
                  </svg>
                  TypeScript
                </a>
              </div>
            </details>
          </div>
        </div>

        {/* QMIND design team (from former Design Teams section) */}
        <div className="bento-card flex flex-col gap-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-start gap-2.5 min-w-0">
              <Image
                width={40}
                height={40}
                src="/qmind.jpg"
                alt="QMIND logo"
                className="rounded-lg object-cover shrink-0"
              />
              <div className="flex flex-col gap-1.5 min-w-0">
                <p className="text-xs leading-snug">
                  🤖 QMIND — knee surgery outcome prediction
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <Badge color="orange">DESIGN TEAM</Badge>
                  <Badge color="orange">ML</Badge>
                </div>
              </div>
            </div>
            <p className="text-fg-tertiary text-[9px] uppercase tracking-wider whitespace-nowrap shrink-0">
              Sep 2023 – Mar 2024
            </p>
          </div>
          <p className="text-fg-tertiary lg:text-xs text-[10px]">
            Design team member at Queen&apos;s AI Club — project on predicting
            knee replacement surgery outcomes. Kingston, Canada.
          </p>
        </div>
      </div>
    </section>
  );
}
