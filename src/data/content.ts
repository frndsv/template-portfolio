import type { Locale } from "@/lib/types";

export const siteConfig = {
  name: "Sofia Fernandes Ferreira Silva",
  role: {
    pt: "Engenheiro(a) de Software",
    en: "Software Engineer",
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
      pt: "Construo produtos digitais com foco em qualidade, performance e boa experiência de uso.",
      en: "I build digital products focused on quality, performance and great user experience.",
    },
    ctaProjects: { pt: "Ver projetos", en: "View projects" },
    ctaContact: { pt: "Fale comigo", en: "Get in touch" },
    aboutTitle: { pt: "Sobre mim", en: "About me" },
    aboutBody: {
      pt: "Sou estudante de Engenharia de Software com interesse em desenvolvimento web e boas práticas de arquitetura de sistemas. Gosto de transformar problemas reais em soluções simples, testáveis e fáceis de manter. Atualmente busco oportunidades de estágio e projetos onde eu possa aprender continuamente e contribuir com times multidisciplinares.",
      en: "I'm a Software Engineering student interested in web development and solid system architecture practices. I enjoy turning real problems into simple, testable and maintainable solutions. I'm currently looking for internship opportunities and projects where I can keep learning and contribute to cross-functional teams.",
    },
    focusTitle: { pt: "Áreas de interesse", en: "Focus areas" },
    focusItems: {
      pt: ["Analise de dados", "Desenvolvimento Back-end", "Inteligencia Artificial", "Arquitetura de Software", "UI/UX e Design de Interfaces"],
      en: [ "Data Analysis", "Back-end Development", "Artificial Inteligence", "Software Architecture", "UI/UX & Interface Design"],
    },
    goalsTitle: { pt: "Objetivos", en: "Goals" },
    goalsBody: {
      pt: "Quero atuar em times de engenharia que valorizem qualidade de código, colaboração e aprendizado contínuo, evoluindo como desenvolvedor(a) full-stack.",
      en: "I want to work with engineering teams that value code quality, collaboration and continuous learning, growing as a full-stack developer.",
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
  },
  experience: {
    title: { pt: "Experiências", en: "Experience" },
    subtitle: {
      pt: "Estágios, freelas, projetos open source e eventos técnicos que fizeram parte da minha trajetória.",
      en: "Internships, freelance work, open source projects and tech events that shaped my journey.",
    },
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
