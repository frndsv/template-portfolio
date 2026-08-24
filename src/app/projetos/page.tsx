"use client";

import { useLanguage } from "@/context/language-context";
import { dictionary } from "@/data/content";
import { projects } from "@/data/projects";
import { formatMonthYear } from "@/lib/format";
import { ProjectMedia } from "@/components/project-media";
import { ExternalLinkIcon, GithubIcon } from "@/components/icons";

export default function ProjectsPage() {
  const { locale } = useLanguage();
  const copy = dictionary.projects;

  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          <span className="font-mono text-accent">{"// "}</span>
          {copy.title[locale]}
        </h1>
        <p className="mt-3 text-base text-muted">{copy.subtitle[locale]}</p>
      </header>

      <ol className="relative mt-14 flex flex-col gap-14 border-l border-border pl-8 sm:pl-10">
        {projects.map((project, index) => (
          <li key={project.slug} className="relative">
            <span className="absolute -left-[45px] top-0 flex h-7 w-7 items-center justify-center rounded-sm border border-accent bg-background font-mono text-[10px] font-semibold text-accent sm:-left-[53px]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="font-mono text-xs uppercase tracking-wide text-muted">
              {formatMonthYear(project.date, locale)}
            </p>

            <div className="corner-frame mt-3 overflow-hidden rounded-sm border border-border bg-surface">
              <div className="aspect-video w-full overflow-hidden border-b border-border">
                <ProjectMedia project={project} locale={locale} />
              </div>

              <div className="p-5 sm:p-6">
                {project.context && (
                  <p className="font-mono text-xs uppercase tracking-wide text-accent">{project.context}</p>
                )}
                <h2 className="mt-1 text-xl font-semibold tracking-tight">{project.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{project.description[locale]}</p>

                <div>
                  <p className="mt-4 font-mono text-xs uppercase tracking-wide text-muted">
                    {copy.technologies[locale]}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs font-medium text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-foreground transition-colors hover:text-accent"
                    >
                      <GithubIcon className="h-4 w-4" />
                      {copy.repository[locale]}
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-foreground transition-colors hover:text-accent"
                    >
                      <ExternalLinkIcon className="h-4 w-4" />
                      {copy.liveDemo[locale]}
                    </a>
                  )}
                  {!project.githubUrl && !project.demoUrl && project.internal && (
                    <span className="text-muted">{copy.internalProject[locale]}</span>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
