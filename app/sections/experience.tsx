import Image from "next/image";
import { Experience as ExperienceComponent } from "@/components/experience";

const EXPERIENCES = [
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
    date: "Sep 2025 - Present",
    location: "Ottawa, Canada",
  },
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
    title: "Design Team Member",
    companyName: "QMIND - Queen's University AI Club",
    extra: "🤖 Knee Replacement Surgery Outcome Prediction",
    image: <Image width={40} height={40} src="/qmind.jpg" alt="QMIND Logo" />,
    date: "Sep 2023 - Mar 2024",
    location: "Kingston, Canada",
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

export function Experience() {
  return (
    <section className="flex lg:w-2/3 w-full flex-col gap-3">
      <h2 className="text-xs text-fg-tertiary mt-6">EXPERIENCE</h2>
      {EXPERIENCES.map(
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
        )
      )}
    </section>
  );
}
