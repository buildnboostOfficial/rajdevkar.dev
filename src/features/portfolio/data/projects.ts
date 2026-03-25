import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "swapnil-collection",
    title: "Swapnil Collection",
    period: {
      start: "01.2025",
    },
    link: "https://github.com/rajdevkar",
    skills: [
      "React Native",
      "Barcode Scanning",
      "REST API",
      "Redux",
      "Inventory Management",
    ],
    description:
      "Developed a React Native app with barcode scanning for efficient inventory tracking. Enabled real-time monitoring of stock levels, item storage, and sales. Integrated REST APIs for seamless data synchronization and used Redux for state management, ensuring smooth and accurate inventory control.",
    isExpanded: true,
  },
  {
    id: "agency-cloud",
    title: "Agency Cloud",
    period: {
      start: "02.2024",
    },
    link: "https://play.google.com/store/apps/details?id=com.niledeagencycloud&hl=en_IN",
    skills: ["React Native", "Financial Management", "REST API", "Redux"],
    description: `Designed and developed an all-in-one financial management app for small businesses, agencies, and freelancers. Implemented key features like invoice tracking, cash flow insights, expense categorization, and real-time data synchronization, ensuring a seamless and secure financial management experience.
- [Google Play](https://play.google.com/store/apps/details?id=com.niledeagencycloud&hl=en_IN)
- [App Store](https://apps.apple.com/in/app/agency-cloud/id6736517908)`,
  },
  {
    id: "floret-college",
    title: "Floret College of Designing",
    period: {
      start: "05.2021",
      end: "05.2021",
    },
    link: "https://github.com/rajdevkar",
    skills: ["React Native", "Education App", "REST API"],
    description:
      "Built a pixel-perfect app for Floret Interior Design College, enabling 100+ students and teachers to manage syllabus, attendance, and academic activities seamlessly within a single platform.",
  },
  {
    id: "squirrel-delivery",
    title: "Squirrel - Delivery Partner",
    period: {
      start: "04.2021",
      end: "04.2021",
    },
    link: "https://github.com/rajdevkar",
    skills: ["React Native", "REST API", "Redux", "Delivery App"],
    description:
      "Built a dedicated React Native app for LipLick Pizzeria to streamline delivery operations. Enabled order tracking, real-time status updates, and navigation for delivery personnel. Integrated REST APIs for seamless order management and used Redux for efficient state handling.",
  },
  {
    id: "transit-coaching",
    title: "Trans-IT Coaching Institute",
    period: {
      start: "11.2020",
      end: "11.2020",
    },
    link: "https://github.com/rajdevkar",
    skills: ["React Native", "TypeScript", "REST API", "Redux", "Axios"],
    description:
      "Developed a pixel-perfect React Native app for Trans-IT College, used by 100+ students and teachers. Integrated REST APIs, implemented state management with Redux where needed, and used TypeScript and Axios for efficient data handling.",
  },
]
