import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Code2, PenTool, Clapperboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/site/project-card";
import { disciplines, profile, projects } from "@/lib/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ashraf Mohammed — Full-Stack Developer, Designer & Video Editor" },
      {
        name: "description",
        content:
          "I build web apps, design brands and edit videos. See the work of Ashraf Mohammed.",
      },
      { property: "og:title", content: "Ashraf Mohammed — Code, Design & Motion" },
      {
        property: "og:description",
        content: "Full-stack developer, graphic designer and video editor. See selected work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const icons = [Code2, PenTool, Clapperboard];
const marquee = ["Full-Stack Development", "Graphic Design", "Video Editing", "Brand Identity", "Web Apps", "Motion Graphics", "Colour Grading", "UI Design"];

function Index() {
  const featured = projects.filter((p) => p.category === "web");
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-20 md:pt-44">
        <div className="pointer-events-none absolute inset-0 grid-lines" />
        <div className="pointer-events-none absolute -top-40 right-[-10%] size-[640px] bg-glow opacity-60 blur-2xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <p className="eyebrow flex animate-rise items-center gap-3">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Available for new projects
            </p>
            <h1 className="mt-6 animate-rise text-5xl leading-[0.95] font-extrabold [animation-delay:100ms] sm:text-6xl xl:text-7xl">
              I build, <br />
              <span className="text-gradient-ember">design</span> &amp; <br />
              <span className="text-outline">edit</span>&nbsp;stories.
            </h1>
            <p className="mt-8 max-w-lg animate-rise text-lg text-muted-foreground [animation-delay:200ms]">
              Hi, I'm <span className="font-semibold text-foreground">{profile.name}</span> — a
              full-stack developer, graphic designer and video editor turning ideas into websites,
              brands and videos people remember.
            </p>
            <div className="mt-10 flex animate-rise flex-wrap gap-3 [animation-delay:300ms]">
              <Button asChild variant="hero" size="xl">
                <Link to="/work">
                  See my work <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="ghostline" size="xl">
                <Link to="/contact">Start a project</Link>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm animate-rise [animation-delay:250ms]">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-ember opacity-30 blur-3xl" />
            <div className="relative animate-float overflow-hidden rounded-[2rem] border border-border bg-card p-3 shadow-card">
              <img
                src={profile.portrait}
                alt={`Portrait of ${profile.name}`}
                className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
              />
              <div className="flex items-center justify-between px-2 pt-4 pb-1">
                <div>
                  <p className="font-display text-lg font-bold">{profile.name}</p>
                  <p className="font-mono text-xs text-muted-foreground">Code · Design · Motion</p>
                </div>
                <span className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground">
                  <ArrowUpRight className="size-5" />
                </span>
              </div>
            </div>
            <div className="absolute top-12 -left-10 hidden rounded-2xl border border-border bg-background/80 px-4 py-3 backdrop-blur sm:block">
              <p className="font-display text-2xl font-extrabold text-primary">3-in-1</p>
              <p className="font-mono text-[11px] text-muted-foreground">creative toolkit</p>
            </div>
            <div className="pointer-events-none absolute -top-8 -right-8 hidden size-28 animate-spin-slow sm:block">
              <svg viewBox="0 0 100 100" className="size-full fill-accent">
                <defs>
                  <path id="circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                </defs>
                <text className="font-mono text-[9.5px] tracking-[0.2em] uppercase">
                  <textPath href="#circle">Developer • Designer • Editor • </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="overflow-hidden border-y border-border bg-primary py-5 text-primary-foreground">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="flex items-center gap-10 font-display text-2xl font-bold md:text-3xl">
              {m} <span aria-hidden>✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* Disciplines */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">What I do</p>
            <h2 className="mt-4 max-w-xl text-4xl font-extrabold md:text-6xl">
              One person. <span className="text-gradient-ember">Three crafts.</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Your website, your brand and your videos — made by one person, so everything looks and
            feels like it belongs together.
          </p>
        </div>
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {disciplines.map((d, i) => {
            const Icon = icons[i] ?? Code2;
            return (
              <article
                key={d.n}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/60"
              >
                <div className="pointer-events-none absolute -top-24 -right-24 size-56 bg-glow opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-primary">
                    <Icon className="size-6" />
                  </span>
                  <span className="font-mono text-sm text-muted-foreground">{d.n}</span>
                </div>
                <h3 className="mt-10 text-2xl font-bold">{d.title}</h3>
                <p className="mt-3 text-muted-foreground">{d.blurb}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {d.tools.slice(0, 5).map((t) => (
                    <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Featured work */}
      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-4 text-4xl font-extrabold md:text-6xl">Live projects</h2>
          </div>
          <Button asChild variant="ghostline" className="hidden sm:inline-flex">
            <Link to="/work">
              All work <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-14 grid gap-12 md:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} large />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-ember px-8 py-16 text-primary-foreground md:px-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
          <div className="relative flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-4xl leading-[1] font-extrabold md:text-6xl">
              Got an idea? Let's make it real.
            </h2>
            <Button asChild size="xl" variant="secondary" className="rounded-full font-semibold">
              <Link to="/contact">
                Let's talk <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
