import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ProjectCard } from "@/components/site/project-card";
import { projects, type Category } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Ashraf Mohammed" },
      {
        name: "description",
        content: "Websites, brand design and video edits by Ashraf Mohammed.",
      },
      { property: "og:title", content: "Work — Ashraf Mohammed" },
      {
        property: "og:description",
        content: "Web apps, graphic design and video projects by Ashraf Mohammed.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});

const filters: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "web", label: "Web Development" },
  { id: "design", label: "Graphic Design" },
  { id: "video", label: "Video Editing" },
];

function WorkPage() {
  const [active, setActive] = useState<Category | "all">("all");
  const list = active === "all" ? projects : projects.filter((p) => p.category === active);
  return (
    <section className="mx-auto max-w-6xl px-6 pt-40 pb-28">
      <p className="eyebrow">Portfolio</p>
      <h1 className="mt-4 text-5xl font-extrabold md:text-8xl">
        Selected <span className="text-gradient-ember">work</span>
      </h1>
      <p className="mt-6 max-w-xl text-lg text-muted-foreground">
        Websites, brands and videos — a mix of live client builds and design & editing pieces.
      </p>

      <div className="mt-12 flex flex-wrap gap-2" role="tablist">
        {filters.map((f) => (
          <button
            key={f.id}
            role="tab"
            aria-selected={active === f.id}
            onClick={() => setActive(f.id)}
            className={cn(
              "rounded-full border px-5 py-2.5 text-sm font-semibold transition-all",
              active === f.id
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2">
        {list.map((p) => (
          <div key={p.slug} className="animate-rise">
            <ProjectCard project={p} large />
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
