import type { Experience } from "@/lib/types";

export const experiences: Experience[] = [
  {
    organization: "Banco Inter",
    role: { pt: "Analista de Dados | Customer Care", en: "Data Analyst | Customer Care" },
    period: { pt: "Nov 2025 – Presente", en: "Nov 2025 – Present" },
    current: true,
    description: {
      pt: [
        "Atuação em Data Analytics na área de Customer Care de um dos maiores bancos digitais do Brasil.",
        "Desenvolvimento de pipelines de dados, automações com IA e soluções analíticas em escala.",
        "Transformação de dados brutos em insights acionáveis para times de produto e operações.",
      ],
      en: [
        "Working in Data Analytics for the Customer Care area of one of Brazil's largest digital banks.",
        "Building data pipelines, AI-driven automations and analytical solutions at scale.",
        "Turning raw data into actionable insights for product and operations teams.",
      ],
    },
    stack: ["Python", "PySpark", "dbt", "Airflow", "SQL", "Cloud"],
  },
  {
    organization: "PUC Minas",
    role: { pt: "Bacharelado em Engenharia de Software", en: "B.Sc. in Software Engineering" },
    period: { pt: "Jan 2025 – Dez 2028", en: "Jan 2025 – Dec 2028" },
    current: true,
    description: {
      pt: ["Graduação em andamento com foco em desenvolvimento web, arquitetura de software e boas práticas de engenharia."],
      en: ["Ongoing degree focused on web development, software architecture and solid engineering practices."],
    },
  },
  {
    organization: "Mera",
    role: { pt: "Automation Developer", en: "Automation Developer" },
    period: { pt: "Jun 2024 – Nov 2025", en: "Jun 2024 – Nov 2025" },
    current: false,
    description: {
      pt: [
        "Estruturação integral de demandas técnicas: da definição dos requisitos à implementação completa.",
        "Construção de pipelines de dados com Python (Pandas) e workflows orquestrados por Apache Airflow.",
        "Automação de rotinas operacionais e geração de insights com dados estruturados em MySQL.",
        "Criação de aplicações serverless com AWS Lambda para soluções escaláveis e eficientes.",
      ],
      en: [
        "Owned technical demands end to end: from requirements definition to full implementation.",
        "Built data pipelines with Python (Pandas) and workflows orchestrated by Apache Airflow.",
        "Automated operational routines and generated insights from structured data in MySQL.",
        "Created serverless applications with AWS Lambda for scalable, efficient solutions.",
      ],
    },
    stack: ["Python", "Pandas", "Airflow", "MySQL", "AWS Lambda", "Automation Anywhere"],
  },
  {
    organization: "SET Informática",
    role: { pt: "Suporte Técnico", en: "Technical Support" },
    period: { pt: "Mar 2023 – Jun 2024", en: "Mar 2023 – Jun 2024" },
    current: false,
    description: {
      pt: [
        "Atendimento a usuários, manutenção preventiva/corretiva e configuração de sistemas.",
        "Administração de redes locais (LAN) com testes, diagnósticos e documentações.",
        "Contato com desenvolvimento em PHP para automações e ajustes em sistemas internos.",
      ],
      en: [
        "User support, preventive/corrective maintenance and system configuration.",
        "Local network (LAN) administration with testing, diagnostics and documentation.",
        "Exposure to PHP development for automations and internal system adjustments.",
      ],
    },
    stack: ["Redes / LAN", "PHP", "Suporte TI"],
  },
  {
    organization: "COTEMIG — Colégio e Faculdade",
    role: { pt: "Técnico em Tecnologia da Informação", en: "Technical Degree in Information Technology" },
    period: { pt: "Jan 2022 – Dez 2024", en: "Jan 2022 – Dec 2024" },
    current: false,
    description: {
      pt: ["Formação técnica com base em redes, suporte e fundamentos de desenvolvimento de sistemas."],
      en: ["Technical program covering networking, support and software development fundamentals."],
    },
  },
];
