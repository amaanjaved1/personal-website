import Image from "next/image";
import { Experience as ExperienceComponent } from "@/components/experience";
import { AwardsCarousel } from "@/components/awards-carousel";

const WORK_EXPERIENCES = [
  {
    title: "Robotics/Software Engineering Internship",
    companyName: "Mission Control Space Services",
    extra: "🚀 Spacefarer Team",
    image: (
      <Image
        width={40}
        height={40}
        src="/mission-control.jpg"
        alt="Mission Control Logo"
      />
    ),
    date: "Sep 2025 - Sep 2026",
    location: "Ottawa, Canada",
  },
  {
    title: "DevOps Engineering Intern",
    companyName: "Tangerine",
    extra: "🛠️ DevOps Tools Platform Team",
    image: (
      <Image
        width={40}
        height={40}
        src="/tangerine.jpeg"
        alt="Tangerine Logo"
      />
    ),
    date: "May 2024 - Aug 2024",
    location: "Toronto, Canada",
  },
  {
    title: "Software Developer Intern",
    companyName: "Scotiabank",
    extra: "💸 Investment Systems Support Team",
    image: (
      <Image
        width={40}
        height={40}
        src="/scotiabank.png"
        alt="Scotiabank Logo"
      />
    ),
    date: "May 2023 - Aug 2023",
    location: "Toronto, Canada",
  },
];

const RESEARCH_EXPERIENCES = [
  {
    title: "Undergraduate Research Student",
    companyName: "The Perk Lab @ Queen's University",
    extra: "🩹 Laboratory for Percutaneous Surgery",
    image: (
      <Image
        width={40}
        height={40}
        src="/perk-lab.jpeg"
        alt="The Perk Lab Logo"
      />
    ),
    date: "Jan 2025 - Present",
    location: "Kingston, Canada",
  },
  {
    title: "Visiting Research Student",
    companyName: "IGT Research Group @ Universidad Carlos III de Madrid (UC3M)",
    extra: "💉 DL/AR Research, 🏆 Received the Mitacs Globalink Award",
    image: (
      <Image
        width={40}
        height={40}
        src="/uc3m.jpg"
        alt="Universidad Carlos III de Madrid Logo"
      />
    ),
    date: "May 2025 - Jul 2025",
    location: "Madrid, Spain",
  },
];

function ExperienceGroup({
  heading,
  items,
}: {
  heading: string;
  items: typeof WORK_EXPERIENCES;
}) {
  return (
    <>
      <h2 className="text-xs text-fg-tertiary mt-3">{heading}</h2>
      {items.map(
        ({ title, companyName, extra, image, date, location }, index) => (
          <ExperienceComponent
            key={index}
            title={title}
            description={companyName}
            extra={extra}
            image={image}
            date={date}
            location={location}
          />
        ),
      )}
    </>
  );
}

export function Experience() {
  return (
    <section className="flex lg:w-2/3 w-full min-w-0 flex-col gap-3">
      <ExperienceGroup heading="💼 WORK EXPERIENCE" items={WORK_EXPERIENCES} />
      <ExperienceGroup
        heading="🔬 RESEARCH EXPERIENCE"
        items={RESEARCH_EXPERIENCES}
      />

      <h2 className="text-xs text-fg-tertiary mt-2">✨ Other</h2>
      <AwardsCarousel>
        <div className="flex flex-col gap-3 pt-3 border-t border-border">
          <p className="text-xs text-fg-primary">🤝 Volunteering</p>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1.5">
              <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between gap-0.5">
                <p className="text-xs">
                  Student Volunteer — Project Sunshine Canada
                </p>
                <p className="text-fg-tertiary lg:text-xs text-[10px] uppercase shrink-0">
                  May 2021
                </p>
              </div>
              <p className="lg:text-xs text-fg-tertiary text-[10px]">
                Participated in testing a program for children and teen
                pediatric patients.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between gap-0.5">
                <p className="text-xs">Peer mentoring</p>
                <p className="text-fg-tertiary lg:text-xs text-[10px] uppercase shrink-0">
                  Jul 2023 — May 2027
                </p>
              </div>
              <p className="lg:text-xs text-fg-tertiary text-[10px]">
                Mentoring for first-year and upper-year students.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between gap-0.5">
                <p className="text-xs">
                  Volunteering with the Velocity Internship program
                </p>
                <p className="text-fg-tertiary lg:text-xs text-[10px] uppercase shrink-0">
                  Summer 2023 / 2024
                </p>
              </div>
              <ul className="lg:text-xs text-fg-tertiary text-[10px] list-disc pl-4 space-y-1">
                <li>Don&apos;t Mess with the Don (Community Day — Scotiabank)</li>
                <li>Don&apos;t Mess with the Don (Community Day — Tangerine)</li>
                <li>Project Forward YMCA — Tangerine</li>
              </ul>
              <p className="text-[9px] text-fg-tertiary">
                Don&apos;t Mess with the Don — environmental volunteering
                cleaning up the Don Valley. Project Forward — helping build and
                improve the YMCA camp.
              </p>
            </div>
          </div>
        </div>
      </AwardsCarousel>
    </section>
  );
}
