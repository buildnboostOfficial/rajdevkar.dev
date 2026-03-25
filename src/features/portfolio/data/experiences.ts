import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "publicis-groupe",
    companyName: "Publicis Groupe",
    companyWebsite: "https://www.publicisgroupe.com",
    positions: [
      {
        id: "1",
        title: "Senior Frontend Developer",
        employmentPeriod: {
          start: "04.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description:
          "- Designed and implemented scalable web and mobile applications with React.js, React Native, TypeScript, and Redux.\n- Created reusable components, implemented RESTful APIs and GraphQL, and optimized performance across platforms.\n- Worked with cross-functional teams to deploy responsive, high-quality user experiences.\n- Mentored junior developers and maintained clean, maintainable code per best practices.",
        skills: [
          "React.js",
          "React Native",
          "TypeScript",
          "Redux",
          "REST API",
          "GraphQL",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "nilede-technologies",
    companyName: "Nilede Technologies",
    positions: [
      {
        id: "1",
        title: "Team Lead and Senior Full Stack Developer",
        employmentPeriod: {
          start: "11.2021",
          end: "02.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description:
          "- Led a team of 3 developers in building and optimizing mobile applications using React Native.\n- Ensured high performance, scalability, and a seamless user experience.\n- Collaborated with clients to design and implement key features for a real estate CRM.\n- Developed a multi-tenant architecture with GraphQL and REST API integration for large data management.\n- Optimized app performance, implemented offline support, and integrated third-party services.\n- Delivered pixel-perfect UI/UX while maintaining best practices in mobile development.",
        skills: [
          "React Native",
          "GraphQL",
          "REST API",
          "Multi-tenant Architecture",
          "Team Leadership",
        ],
      },
    ],
  },
  {
    id: "buildnboost",
    companyName: "BuildNBoost",
    positions: [
      {
        id: "1",
        title: "Front-end & React Native Developer",
        employmentPeriod: {
          start: "01.2019",
          end: "11.2021",
        },
        employmentType: "Full-time",
        icon: "code",
        description:
          "- Developed and maintained high-performance React Native apps for clients.\n- Ensured seamless user experiences through optimized UI/UX.\n- Led mobile development efforts, integrating APIs and implementing key features.\n- Optimized app performance for better speed and reliability.\n- Collaborated with the tech team to deliver scalable, high-quality mobile solutions.\n- Supported product growth and innovation with continuous improvements.",
        skills: ["React Native", "REST API", "UI/UX", "Mobile Development"],
      },
    ],
  },
  {
    id: "solution-technocity",
    companyName: "Solution Technocity",
    positions: [
      {
        id: "1",
        title: "Android Developer",
        employmentPeriod: {
          start: "03.2018",
          end: "11.2018",
        },
        employmentType: "Full-time",
        icon: "code",
        description:
          "Developed an Android app for P.P. OIL Pvt. Ltd., an ERP sales management app for field sales employees. After the launch, it was used by 100+ employees concurrently.",
        skills: ["Android", "Java", "ERP"],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "1",
        title: "Konkan Gyanpeeth College of Engineering, University of Mumbai",
        employmentPeriod: {
          start: "06.2017",
          end: "06.2020",
        },
        icon: "education",
        description:
          "- Bachelor of Engineering - BE, Information Technology - 7\n- I spent my best 3 years at this college. It helped me explore my potential, thanks to no hard attendance rules so that I got some time to dive into new domains like coding and freelance.",
        skills: ["Information Technology", "Software Engineering"],
      },
    ],
  },
]
