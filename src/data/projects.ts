import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "pipelines-de-dados-com-airflow",
    name: "Pipelines de Dados com Airflow",
    date: "2024-08",
    description: {
      pt: "Construção de pipelines de dados com Python e Pandas, orquestrados pelo Apache Airflow. Coleta, transformação e visualização de dados estruturados em MySQL, gerando insights para times de operação.",
      en: "Built data pipelines with Python and Pandas, orchestrated by Apache Airflow. Collected, transformed and surfaced structured data in MySQL, generating insights for operations teams.",
    },
    technologies: ["Python", "Pandas", "Apache Airflow", "MySQL"],
    context: "Mera",
    internal: true,
    image: "/images/projects/airflow-pipelines.png",
  },
  {
    slug: "agentes-de-ia-com-langchain-langgraph",
    name: "Agentes de IA com LangChain & LangGraph",
    date: "2025-02",
    description: {
      pt: "Exploração e construção de agentes autônomos com LangChain e LangGraph — fluxos multi-agente, memória persistente, uso de ferramentas e orquestração de LLMs para automatizar tarefas complexas com IA generativa.",
      en: "Exploration and development of autonomous agents with LangChain and LangGraph — multi-agent flows, persistent memory, tool use and LLM orchestration to automate complex tasks with generative AI.",
    },
    technologies: ["Python", "LangChain", "LangGraph", "LLMs"],
    context: "Projeto Pessoal",
    image: "/images/projects/langchain-agentes-ia.png",
  },
  {
    slug: "automacao-de-processos-com-ia",
    name: "Automação de Processos com IA",
    date: "2025-09",
    description: {
      pt: "Construção de automações robustas desde a captação dos requisitos até a entrega final — utilizando Automation Anywhere, Python e IA generativa para reduzir esforço manual e aumentar eficiência operacional em processos internos.",
      en: "Built robust automations end to end, from requirements gathering to final delivery — using Automation Anywhere, Python and generative AI to reduce manual effort and increase operational efficiency in internal processes.",
    },
    technologies: ["Python", "Automation Anywhere", "LLMs", "AWS Lambda"],
    context: "Mera / Banco Inter",
    internal: true,
    image: "/images/projects/automacao-processos-ia.jpg",
  },
  {
    slug: "pipeline-de-dados-em-larga-escala",
    name: "Pipeline de Dados em Larga Escala",
    date: "2025-12",
    description: {
      pt: "Desenvolvimento de pipelines de processamento de dados financeiros em escala, com orquestração de workflows batch e streaming. Responsável pela ingestão, transformação e disponibilização de dados para times de negócio e BI.",
      en: "Development of large-scale financial data processing pipelines, orchestrating batch and streaming workflows. Responsible for ingesting, transforming and delivering data to business and BI teams.",
    },
    technologies: ["PySpark", "Apache Airflow", "Python", "Cloud"],
    context: "Banco Inter",
    internal: true,
    image: "/images/projects/spark-pipeline-larga-escala.png",
  },
];
