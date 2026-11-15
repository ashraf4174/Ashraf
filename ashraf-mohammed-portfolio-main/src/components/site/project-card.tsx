import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/portfolio";

const label = { web: "Web", design: "Design", video: "Video" } as const;

export function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  const isWeb = project.category === "web";
  const Wrapper = project.url ? "a" : "div";
  return (
    <Wrapper
      {...(project.url ? { href: project.url, target: "_blank", rel: "noreferrer" } : {})}
      className="group block"
    >
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-card">
        {isWeb && (
          <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
            <span className="size-2.5 rounded-full bg-primary" />
            <span className="size-2.5 rounded-full bg-primary-glow" />
            <span className="size-2.5 rounded-full bg-accent" />
            <span className="ml-3 truncate font-mono text-xs text-muted-foreground">
              {project.url?.replace(/^https?:\/\//, "").replace(/\/$/, "")}
            </span>
          </div>
        )}
        <div className={large ? "aspect-[16/10] overflow-hidden" : "aspect-[4/3] overflow-hidden"}>
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="size-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <span className="absolute right-4 bottom-4 grid size-12 translate-y-3 place-items-center rounded-full bg-primary text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="size-5" />
        </span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{project.client}</p>
        </div>
        <span className="shrink-0 rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
          {label[project.category]} · {project.year}
        </span>
      </div>
      {large && <p className="mt-3 max-w-xl text-muted-foreground">{project.summary}</p>}
    </Wrapper>
  );
}
