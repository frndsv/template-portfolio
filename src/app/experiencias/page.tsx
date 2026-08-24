"use client";

import { useLanguage } from "@/context/language-context";
import { dictionary } from "@/data/content";
import { experiences } from "@/data/experiences";

export default function ExperiencesPage() {
  const { locale } = useLanguage();
  const copy = dictionary.experience;

  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          <span className="font-mono text-accent">{"// "}</span>
          {copy.title[locale]}
        </h1>
        <p className="mt-3 text-base text-muted">{copy.subtitle[locale]}</p>
      </header>

      <ol className="relative mt-14 flex flex-col gap-8 border-l border-border pl-8 sm:pl-10">
        {experiences.map((experience) => (
          <li key={`${experience.organization}-${experience.period[locale]}`} className="relative">
            <span className="absolute -left-[33px] top-1.5 h-2 w-2 rounded-full bg-accent sm:-left-[41px]" />
            <article className="rounded-sm border border-border bg-surface p-6 transition-colors hover:border-accent/60">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-lg font-semibold tracking-tight">{experience.organization}</h2>
                <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-muted">
                  {experience.period[locale]}
                  {experience.current && (
                    <span className="rounded-sm border border-accent px-1.5 py-0.5 text-accent">
                      {copy.current[locale]}
                    </span>
                  )}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-accent">{experience.role[locale]}</p>
              <ul className="mt-3 flex flex-col gap-1.5 text-sm leading-relaxed text-muted">
                {experience.description[locale].map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="font-mono text-accent">–</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              {experience.stack && (
                <div>
                  <p className="mt-4 font-mono text-xs uppercase tracking-wide text-muted">{copy.stack[locale]}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {experience.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs font-medium text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}
