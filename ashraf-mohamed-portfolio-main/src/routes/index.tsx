import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Database, Layers, Mail, MessageCircle, Sparkles } from "lucide-react";
import portrait from "@/assets/ashraf-portrait.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/site/ProjectCard";
import { profile, projects, skills } from "@/data/profile";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ashraf Mohamed — Full Stack Developer Portfolio" },
      {
        name: "description",
        content:
          "Ashraf Mohamed is a full stack developer from Kenya building modern, responsive websites and web applications.",
      },
      { property: "og:title", content: "Ashraf Mohamed — Full Stack Developer Portfolio" },
      {
        property: "og:description",
        content: "Modern websites and web apps by full stack developer Ashraf Mohamed.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Layers,
    title: "Frontend",
    text: "Clean, responsive interfaces that look sharp on every screen.",
  },
  {
    icon: Database,
    title: "Backend",
    text: "Server logic, forms, data handling and APIs that just work.",
  },
  {
    icon: Code2,
    title: "End to end",
    text: "From idea to a live, deployed product — one developer, whole stack.",
  },
];

function Index() {
  return (
    <>
      {/* Intro */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-16 md:grid-cols-[1.15fr_0.85fr] md:pt-24">
          <div className="animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Available for new projects
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-[0.95] sm:text-6xl lg:text-7xl">
              Hi, I'm {profile.firstName}.
              <br />
              <span className="text-gradient">I build the whole web.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {profile.role} crafting fast, modern websites and web apps — from pixel-perfect
              interfaces to the server code behind them.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/projects">
                  View my work <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <a href={`mailto:${profile.email}`}>
                  <Mail /> Email me
                </a>
              </Button>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
              {[
                [`${projects.length}+`, "Live projects"],
                ["Full", "Stack"],
                ["100%", "Responsive"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-display text-3xl font-semibold text-primary">{v}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-sm animate-rise [animation-delay:150ms]">
            <div className="absolute -inset-10 bg-aura blur-2xl" />
            <div className="absolute -inset-3 rounded-[2.5rem] border border-dashed border-primary/30 animate-spin-slow" />
            <div className="relative animate-float overflow-hidden rounded-[2rem] border border-border bg-card p-2 shadow-glow-lg">
              <img
                src={portrait.url}
                alt={`Portrait of ${profile.name}`}
                className="aspect-square w-full rounded-[1.6rem] object-cover"
                width={640}
                height={640}
              />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-border bg-background/80 px-4 py-3 backdrop-blur">
                <div>
                  <p className="font-display font-semibold">{profile.name}</p>
                  <p className="text-xs text-muted-foreground">{profile.role}</p>
                </div>
                <Sparkles className="size-5 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills marquee */}
      <section className="border-y border-border bg-card/40 py-5">
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-10">
            {[...skills, ...skills].map((s, i) => (
              <span
                key={i}
                className="flex items-center gap-10 whitespace-nowrap font-display text-xl text-muted-foreground"
              >
                {s}
                <span className="text-primary">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What I do */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <p className="eyebrow">What I do</p>
        <h2 className="mt-3 max-w-2xl text-4xl font-semibold md:text-5xl">
          One developer for your entire product.
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-3xl border border-border bg-card p-7 transition-colors hover:border-primary/40"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-accent text-accent-foreground">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Selected work */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Things I've shipped</h2>
          </div>
          <Button asChild variant="glass">
            <Link to="/projects">
              All projects <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card px-8 py-16 text-center md:px-16">
          <div className="pointer-events-none absolute inset-0 bg-aura opacity-70" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-4xl font-semibold md:text-5xl">
              Have an idea? <span className="text-gradient">Let's build it.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Tell me about your project and I'll get back to you quickly.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Get in touch <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <a href={profile.whatsapp} target="_blank" rel="noreferrer">
                  <MessageCircle /> WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
