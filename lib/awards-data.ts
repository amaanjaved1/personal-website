export type AwardHighlight = "blue" | "rose" | "green" | "orange" | "mitacs";

export type AwardEntry = {
  emoji: string;
  title: string;
  /** Full line, e.g. "Issued by … · …" */
  issued?: string;
  associatedWith?: string;
  description?: string;
  /** Accent styling for the carousel card */
  highlight?: AwardHighlight;
  /** Optional external link (e.g. issuer site) */
  href?: string;
};

export const AWARDS: AwardEntry[] = [
  {
    emoji: "🌍",
    title: "Mitacs Globalink Research Award",
    issued:
      "Issued by MITACS - Canadian Nonprofit National Research Organization · Mar 2025",
    associatedWith: "Universidad Carlos III de Madrid",
    highlight: "mitacs",
    href: "https://www.mitacs.ca/",
  },
  {
    emoji: "🎓",
    title: "Dean's Honour Roll With Distinction - 2024",
    issued: "Issued by Queen's University · Oct 2024",
    associatedWith: "Queen's University",
    description:
      "The Dean's Honour List with Distinction recognizes those students who have achieved an academic year GPA that places them in the top 3% of all students within their degree program group, based on the combined GPA for all courses taken in the Fall, Winter and Summer terms.",
  },
  {
    emoji: "💻",
    title: "EMS Technologies Scholarship",
    issued: "Issued by Queen's University | E.M.S Technologies · Aug 2024",
    associatedWith: "Queen's University",
    description:
      "Established by E.M.S. Technologies Inc. and awarded on the basis of academic excellence to a third-year student registered in the School of Computing in a Software Design subject of specialization degree program. Selection will be made by the School of Computing.",
    highlight: "orange",
  },
  {
    emoji: "⭐",
    title: "Dean's Award of Excellence - 2023",
    issued: "Issued by Queen's University · Jan 2024",
    associatedWith: "Queen's University",
    description:
      "Awarded on the basis of academic excellence to students entering second, third, or fourth year in the Faculty of Arts and Science. Selection is made by the Awards Committee of the Faculty of Arts and Science.",
  },
  {
    emoji: "🎓",
    title: "Dean's Honor Roll With Distinction - 2023",
    issued: "Issued by Queen's University · Sep 2023",
    associatedWith: "Queen's University",
    description:
      "The Dean's Honour List with Distinction recognizes those students who have achieved an academic year GPA that places them in the top 3% of all students within their degree program group, based on the combined GPA for all courses taken in the Fall, Winter and Summer terms. This honour is an official University recognition of your achievement and is recorded on your academic transcript.",
  },
  {
    emoji: "📊",
    title: "M. C. Urquhart Book Prize in Economics",
    issued: "Issued by Queen's University · Aug 2023",
    associatedWith: "Queen's University",
    description:
      "Established by former students and colleagues of M.C. Urquhart, a distinguished professor in the Department of Economics for more than three decades. Awarded on the basis of academic excellence to students who have completed 6.0 units of first year Economics courses.",
    highlight: "green",
  },
  {
    emoji: "🏅",
    title: "Principal's Scholarship",
    issued: "Issued by Queen's University · Aug 2022",
    associatedWith: "Queen's University",
    description: "Scholarship awarded to students with an entrance average of 95%+.",
    highlight: "orange",
  },
  {
    emoji: "🔢",
    title: "Kumon Math Program Completer",
    issued: "Issued by Kumon · Jan 2021",
    description: "Student in the Kumon Math Program since 2011.",
    highlight: "blue",
  },
  {
    emoji: "📚",
    title: "Kumon Reading Program Completer",
    issued: "Issued by Kumon · Jan 2018",
    description: "Student in the Kumon Reading Program since 2012.",
    highlight: "rose",
  },
  {
    emoji: "⭐",
    title: "Dean's Award of Excellence - 2024",
    associatedWith: "Queen's University",
    description:
      "Awarded on the basis of academic excellence to students entering second, third, or fourth year in the Faculty of Arts and Science. Selection is made by the Awards Committee of the Faculty of Arts and Science.",
  },
];
