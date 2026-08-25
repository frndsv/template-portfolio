export type Locale = "pt" | "en";

export type LocalizedText = Record<Locale, string>;

export interface Project {
  slug: string;
  name: string;
  date: string;
  description: LocalizedText;
  technologies: string[];
  context?: string;
  internal?: boolean;
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
}

export interface Experience {
  organization: string;
  role: LocalizedText;
  period: LocalizedText;
  description: Record<Locale, string[]>;
  stack?: string[];
  current?: boolean;
}
