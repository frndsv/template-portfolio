import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "projeto-um",
    name: "Site informativo FORMULA 1 2024",
    date: "2024-07",
    description: {
      pt: "Construção de pipelines de dados com Python e Pandas, orquestrados pelo Apache Airflow. Coleta, transformação e visualização de dados estruturados em MySQL, gerando insights para times de operação.",
      en: "Built data pipelines with Python and Pandas, orchestrated by Apache Airflow. Collected, transformed and surfaced structured data in MySQL, generating insights for operations teams.",
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
      pt: "Exploração e construção de agentes autônomos com LangChain e LangGraph — fluxos multi-agente, memória persistente, uso de ferramentas e orquestração de LLMs para automatizar tarefas complexas com IA generativa.",
      en: "Exploration and development of autonomous agents with LangChain and LangGraph — multi-agent flows, persistent memory, tool use and LLM orchestration to automate complex tasks with generative AI.",
    },
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    githubUrl: "https://github.com/frndsv/jokenpo",
  },
  {
    slug: "projeto-tres",
    name: "Nutri Soft",
    date: "2026-02",
    description: {
      pt: "Construção de automações robustas desde a captação dos requisitos até a entrega final — utilizando Automation Anywhere, Python e IA generativa para reduzir esforço manual e aumentar eficiência operacional em processos internos.",
      en: "Built robust automations end to end, from requirements gathering to final delivery — using Automation Anywhere, Python and generative AI to reduce manual effort and increase operational efficiency in internal processes.",
    },
    technologies: ["HTML", "CSS", "JavaScript", "Thymeleaf", "SpringBoot", "MySQL"],
    githubUrl: "https://github.com/seu-usuario/projeto-tres",
    demoUrl: "https://projeto-tres.exemplo.com",
  },
];
