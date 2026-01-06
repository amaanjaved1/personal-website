import { Project } from "@/components/project";

const PROJECTS = [
  {
    name: "CoursifyQU",
    description:
      "A course insights platform built for Queen's University students. Features live data scraped from Reddit and RateMyProfessors, and a RAG system to answer student queries.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Python"],
    link: "https://coursify-web-app.vercel.app/",
    github: "https://github.com/CoursifyQU/Coursify-WebApp?tab=readme-ov-file",
    badges: ["FULL-STACK", "RAG", "DATA SCRAPING"],
  },
  {
    name: "Velosphere",
    description:
      "A social networking platform for Scotiabank and Tangerine interns.",
    technologies: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Redis",
      "Jest",
      "PostgreSQL",
    ],
    link: "https://github.com/amaanjaved1/velosphere-backend",
    badges: ["FULL STACK"],
  },
];

export function Projects() {
  return (
    <section className="flex flex-col gap-3 lg:w-1/3">
      <h2 className="text-xs text-fg-tertiary lg:mt-6">PROJECTS</h2>
      <div className="grid grid-cols-1 gap-3">
        {PROJECTS.map(
          (
            { name, description, technologies, link, badges, github },
            index
          ) => (
            <Project
              key={index}
              name={name}
              description={description}
              technologies={technologies}
              link={link}
              badges={badges}
              github={github}
            />
          )
        )}
      </div>
    </section>
  );
}
