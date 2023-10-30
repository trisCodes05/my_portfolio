import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import fitness from "@/public/fitness.png";
import linkedin from "@/public/linkedin.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Master of Computer Applications",
    location: "MIT, Manipal",
    description:
      "Graduated with a CGPA of 7.49",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer Intern",
    location: "IoTracX Pvt Ltd, Manipal",
    description:
      "I served as an intern in the role of a front-end developer for a duration of six months. During this period, I significantly enhanced my understanding of WEB3, Blockchain technology, and Smart Contracts and tokens, complemented by a high level of proficiency achieved in the Svelte programming language.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2023 - Jun 2023",
  },
  {
    title: "Associate Software Developer",
    location: "Aveto Consulting Pvt Ltd, Bengaluru",
    description:
      "I initiated my professional journey by diligently conducting daily application testing, honing my skills until I was fully equipped to assume the role of a Frontend Developer. Within the span of three months, I was entrusted with the responsibility of implementing minor refinements to an already established user interface. Subsequently, I seamlessly transitioned into my role as a frontend developer and, in addition, developed a JSPDF solution for facilitating report viewing.",
    icon: React.createElement(FaReact),
    date: "Sep 2019 - Dec 2020",
  },
  {
    title: "Operations Executive Trainee",
    location: "Infosys Ltd, Mysore",
    description:"I completed a six-month traineeship at Infosys, where I acquired proficiency in Python and expanded my expertise in UNIX/LINUX systems.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2019 - Jun 2019",
  },
] as const;

export const projectsData = [
  {
    title: `"GetFit"`,
    description:
      "GetFit has a functionality to choose exercise category and specific muscle groups. Able to briwse more than 1000 exercises with practical example, Pagination and exercise detail.",
    tags: ["React(version 18)"," Material UI (version 5)", "Rapid API"],
    imageUrl: fitness,
  },
  {
    title: "LinkedIn Clone",
    description:
    "A LinkedIn-inspired replica has been developed using React and Redux, with Redux being used to store the most recent posts. Authentication is implemented for the login process, and Firebase is utilized for backend operations." ,
     tags: ["React", "FireBase", "Redux", "Tailwind", "API Integration (LOGIN)"],
    imageUrl: linkedin,
  },

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript (Beginner)",
  "React",
  "Next.js",
  "Svelte",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Python",
  "Framer Motion",
] as const;
