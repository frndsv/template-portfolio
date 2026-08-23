import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "projeto-um",
    name: "Site informativo FORMULA 1 2024",
    date: "2024-07",
    description: {
      pt: "Descrição breve do projeto: qual problema ele resolve e qual foi o seu papel no desenvolvimento.",
      en: "Short project description: what problem it solves and what your role was in building it.",
    },
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    githubUrl: "https://github.com/frndsv/Formula1",
    demoUrl: "https://formula1-coral.vercel.app/",
  },
  {
    slug: "projeto-dois",
    name: "Jokenpo",
    date: "2024-08",
    description: {
      pt: "Descrição breve do projeto: qual problema ele resolve e qual foi o seu papel no desenvolvimento.",
      en: "Short project description: what problem it solves and what your role was in building it.",
    },
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    githubUrl: "https://github.com/frndsv/jokenpo",
  },
  {
    slug: "projeto-tres",
    name: "Nutri Soft",
    date: "2026-02",
    description: {
      pt: "Descrição breve do projeto: qual problema ele resolve e qual foi o seu papel no desenvolvimento.",
      en: "Short project description: what problem it solves and what your role was in building it.",
    },
    technologies: ["HTML", "CSS", "JavaScript", "Thymeleaf", "SpringBoot", "MySQL"],
    githubUrl: "https://github.com/seu-usuario/projeto-tres",
    demoUrl: "https://projeto-tres.exemplo.com",
  },
];
