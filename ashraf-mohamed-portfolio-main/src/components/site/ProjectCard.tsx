import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/profile";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
        <div className="flex items-center gap-1.5 border-b border-border bg-secondary px-3 py-2">
          <span className="size-2.5 rounded-full bg-destructive/70" />
          <span className="size-2.5 rounded-full bg-primary/70" />
          <span className="size-2.5 rounded-full bg-chart-3/70" />
          <span className="ml-2 truncate font-mono text-[0.65rem] text-muted-foreground">
            {project.host}
          </span>
        </div>
        <img
          src={project.image}
          alt={`${project.title} website preview`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow">
              {String(index + 1).padStart(2, "0")} · {project.category}
            </p>
            <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
          </div>
          <span className="grid size-10 shrink-0 place-items-center rounded-full border border-border transition-all group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
            <ArrowUpRight className="size-4" />
          </span>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-secondary px-3 py-1 font-mono text-[0.7rem] text-secondary-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
