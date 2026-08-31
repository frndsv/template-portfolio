import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "projeto-um",
    name: "Site Informativo Formula 1 2024",
    date: "2024-07",
    description: {
      pt: "Desenvolvimento de um site informativo sobre a temporada de Fórmula 1 de 2024. Os dados são armazenados em um arquivo JSON utilizado como fonte de dados, permitindo apresentar informações sobre pilotos, equipes, corridas e resultados de forma organizada e interativa.",
      en: "Development of an informational website about the 2024 Formula 1 season. Data is stored in a JSON file used as a data source, allowing information about drivers, teams, races and results to be presented in an organized and interactive way.",
    },
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    githubUrl: "https://github.com/frndsv/Formula1",
    demoUrl: "https://formula1-coral.vercel.app/",
    image: "/images/projects/formula1-pilotos.png",
  },

  {
    slug: "projeto-dois",
    name: "Jokenpo",
    date: "2024-08",
    description: {
      pt: "Desenvolvimento de um jogo de Jokenpô utilizando JavaScript, com lógica para as escolhas do jogador e do computador, definição automática do resultado e interação dinâmica com a interface.",
      en: "Development of a Rock Paper Scissors game using JavaScript, with logic for player and computer choices, automatic result determination and dynamic interaction with the interface.",
    },
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    githubUrl: "https://github.com/frndsv/jokenpo",
    image: "/images/projects/jokenpo.png",
  },
  {
    slug: "projeto-tres",
    name: "Nutri Soft",
    date: "2026-02",
    description: {
      pt: "Projeto interdisciplinar da PUC Minas desenvolvido para um cliente real. Criamos um sistema para nutricionistas gerenciarem informações de pacientes e acompanharem sua evolução, incluindo registros de peso e fotos. A experiência envolveu compreender as necessidades do cliente e desenvolver uma solução utilizando front-end, back-end e banco de dados.",
      en: "Interdisciplinary project at PUC Minas developed for a real client. We created a system for nutritionists to manage patient information and track their progress, including weight and photo records. The project involved understanding the client's needs and developing a solution using front-end, back-end and database technologies.",
    },
    technologies: ["HTML", "CSS", "JavaScript", "Thymeleaf", "SpringBoot", "MySQL"],
    githubUrl: "https://github.com/seu-usuario/projeto-tres",
    image: "/images/projects/cadastro-formulario-1.png",
  },

];

