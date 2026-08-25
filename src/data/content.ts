import type { Locale } from "@/lib/types";

export const siteConfig = {
  name: "Sofia Fernandes Ferreira Silva",
  role: {
    pt: "Engenheiro de Dados & Automação",
    en: "Data Engineer & Automation",
  },
  email: "sofia.fernandesfs4@gmail.com",
  whatsapp: "31 99644-2401",
  linkedin: "https://www.linkedin.com/in/sofia-silva-9bb194251/",
  github: "https://github.com/frndsv",
};

export const dictionary = {
  nav: {
    about: { pt: "Sobre Mim", en: "About Me" },
    projects: { pt: "Projetos", en: "Projects" },
    experience: { pt: "Experiências", en: "Experience" },
    contact: { pt: "Contato", en: "Contact" },
  },
  home: {
    greeting: { pt: "Olá, eu sou", en: "Hi, I'm" },
    tagline: {
      pt: "Estudante de Engenharia de Software com experiência prática em automação de processos, pipelines de dados e IA — construindo soluções que geram impacto real nas operações.",
      en: "Software Engineering student with hands-on experience in process automation, data pipelines and AI — building solutions that generate real impact on operations.",
    },
    ctaProjects: { pt: "Ver projetos", en: "View projects" },
    ctaContact: { pt: "Fale comigo", en: "Get in touch" },
    aboutTitle: { pt: "Sobre mim", en: "About me" },
    aboutBody: {
      pt: "Sou estudante de Engenharia de Software na PUC Minas com experiência prática em automação de processos, pipelines de dados e IA — atualmente atuando no Banco Inter na área de Data Analytics. Minha paixão é transformar dados brutos em valor real: construo pipelines com Python e Airflow, orquestro automações robustas com Automation Anywhere e IA generativa, e entrego soluções serverless escaláveis na AWS. Gosto de atuar desde a captação dos requisitos até a entrega final, com foco em engenharia de software, boas práticas e impacto direto nas operações.",
      en: "I'm a Software Engineering student at PUC Minas with hands-on experience in process automation, data pipelines and AI — currently working at Banco Inter in Data Analytics. My passion is turning raw data into real value: I build pipelines with Python and Airflow, orchestrate robust automations with Automation Anywhere and generative AI, and ship scalable serverless solutions on AWS. I like owning work end to end, from gathering requirements to final delivery, with a focus on software engineering, good practices and direct impact on operations.",
    },
    focusTitle: { pt: "Áreas de interesse", en: "Focus areas" },
    focusItems: {
      pt: ["Analise de dados", "Desenvolvimento Back-end", "Inteligencia Artificial", "Arquitetura de Software", "UI/UX e Design de Interfaces"],
      en: [ "Data Analysis", "Back-end Development", "Artificial Inteligence", "Software Architecture", "UI/UX & Interface Design"],
    },
    goalsTitle: { pt: "Objetivos", en: "Goals" },
    goalsBody: {
      pt: "Quero seguir aprofundando minha atuação em engenharia de dados e automação com IA enquanto concluo a graduação em Engenharia de Software na PUC Minas, contribuindo com times de engenharia que valorizem qualidade, colaboração e aprendizado contínuo.",
      en: "I want to keep deepening my work in data engineering and AI-driven automation while finishing my Software Engineering degree at PUC Minas, contributing to engineering teams that value quality, collaboration and continuous learning.",
    },
  },
  projects: {
    title: { pt: "Projetos", en: "Projects" },
    subtitle: {
      pt: "Linha do tempo dos projetos que desenvolvi, do mais antigo ao mais recente.",
      en: "Timeline of the projects I've built, from oldest to most recent.",
    },
    technologies: { pt: "Tecnologias", en: "Technologies" },
    repository: { pt: "Repositório", en: "Repository" },
    liveDemo: { pt: "Ver online", en: "Live demo" },
    imagePlaceholder: { pt: "Imagem/GIF do projeto", en: "Project image/GIF" },
    internalProject: { pt: "Projeto interno / privado", en: "Internal / private project" },
  },
  experience: {
    title: { pt: "Experiências", en: "Experience" },
    subtitle: {
      pt: "Trajetória profissional e acadêmica em dados, automação e engenharia de software.",
      en: "Professional and academic journey across data, automation and software engineering.",
    },
    stack: { pt: "Tecnologias", en: "Technologies" },
    current: { pt: "Atual", en: "Current" },
  },
  contact: {
    title: { pt: "Contato", en: "Contact" },
    subtitle: {
      pt: "Vamos conversar? Envie uma mensagem ou me encontre nos canais abaixo.",
      en: "Let's talk. Send a message or find me on the channels below.",
    },
    formName: { pt: "Nome", en: "Name" },
    formEmail: { pt: "E-mail", en: "Email" },
    formMessage: { pt: "Mensagem", en: "Message" },
    formSubmit: { pt: "Enviar mensagem", en: "Send message" },
    formSending: { pt: "Enviando...", en: "Sending..." },
    formSuccess: {
      pt: "Mensagem enviada com sucesso! Responderei em breve.",
      en: "Message sent successfully! I'll get back to you soon.",
    },
    formError: {
      pt: "Não foi possível enviar agora. Tente novamente ou use um dos canais ao lado.",
      en: "Couldn't send right now. Please try again or use one of the channels beside.",
    },
    errorRequired: { pt: "Preencha este campo.", en: "This field is required." },
    errorEmail: { pt: "Informe um e-mail válido.", en: "Enter a valid email." },
    errorMinLength: { pt: "Escreva uma mensagem um pouco maior.", en: "Write a slightly longer message." },
  },
  footer: {
    rights: { pt: "Todos os direitos reservados.", en: "All rights reserved." },
    builtWith: { pt: "Desenvolvido com Next.js e Tailwind CSS.", en: "Built with Next.js and Tailwind CSS." },
  },
} as const;

export function t<T extends Record<Locale, string>>(field: T, locale: Locale): string {
  return field[locale];
}
