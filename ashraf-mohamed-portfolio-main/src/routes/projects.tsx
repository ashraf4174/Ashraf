import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/profile";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Ashraf Mohamed" },
      {
        name: "description",
        content:
          "Live websites and web apps built by Ashraf Mohamed: BOMAS University, Mwangaza University and a microfinance loan application.",
      },
      { property: "og:title", content: "Projects — Ashraf Mohamed" },
      {
        property: "og:description",
        content: "University websites, a student portal and a validated loan application.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20">
      <p className="eyebrow">Portfolio</p>
      <h1 className="mt-3 text-5xl font-bold md:text-6xl">
        Projects <span className="text-gradient">I've built</span>
      </h1>
      <p className="mt-5 max-w-xl text-lg text-muted-foreground">
        Every project below is live — open any of them to try it yourself.
      </p>

      <div className="mt-16 space-y-24">
        {projects.map((p, i) => (
          <article
            key={p.slug}
            className="grid items-center gap-10 md:grid-cols-2 md:[&:nth-child(even)>a]:order-2"
          >
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden rounded-3xl border border-border bg-card shadow-glow transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="flex items-center gap-1.5 border-b border-border bg-secondary px-4 py-2.5">
                <span className="size-2.5 rounded-full bg-destructive/70" />
                <span className="size-2.5 rounded-full bg-primary/70" />
                <span className="size-2.5 rounded-full bg-chart-3/70" />
                <span className="ml-3 truncate font-mono text-xs text-muted-foreground">
                  {p.host}
                </span>
              </div>
              <img
                src={p.image}
                alt={`${p.title} website preview`}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </a>
            <div>
              <p className="eyebrow">
                {String(i + 1).padStart(2, "0")} · {p.category}
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{p.title}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{p.summary}</p>
              <ul className="mt-6 space-y-2">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 text-sm">
                    <span className="grid size-5 place-items-center rounded-full bg-accent text-accent-foreground">
                      <Check className="size-3" />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-secondary px-3 py-1 font-mono text-[0.7rem]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Button asChild variant="hero" size="lg" className="mt-8">
                <a href={p.url} target="_blank" rel="noreferrer">
                  Visit live site <ArrowUpRight />
                </a>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
