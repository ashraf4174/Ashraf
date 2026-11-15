import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { disciplines, profile } from "@/lib/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ashraf Mohammed" },
      {
        name: "description",
        content: "About Ashraf Mohammed: full-stack developer, graphic designer and video editor.",
      },
      { property: "og:title", content: "About Ashraf Mohammed" },
      {
        property: "og:description",
        content: "The story, skills and tools behind Ashraf Mohammed's work.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const steps = [
  { t: "Listen", d: "We talk about your goals, your audience and what success looks like." },
  { t: "Shape", d: "I sketch the direction — layouts, visuals or a storyboard — and refine it with you." },
  { t: "Build", d: "Code, design or edit — crafted carefully, with updates along the way." },
  { t: "Launch", d: "Your site goes live, your files are delivered, and I stay around for support." },
];

function AboutPage() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-14 px-6 pt-40 pb-24 lg:grid-cols-[1fr_1.3fr] lg:items-center">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-ember opacity-25 blur-3xl" />
          <img
            src={profile.portrait}
            alt={`Portrait of ${profile.name}`}
            className="relative aspect-[4/5] w-full rounded-[2rem] border border-border object-cover"
          />
        </div>
        <div>
          <p className="eyebrow">About me</p>
          <h1 className="mt-4 text-4xl leading-[0.95] font-extrabold md:text-6xl">
            Developer by logic. <span className="text-gradient-ember">Designer</span> by eye.
            Editor by rhythm.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground">
            I'm {profile.name}. I write code that works, design visuals that stand out and edit
            videos that keep people watching. Working across all three means your project gets one
            clear vision — from the website to the logo to the launch video.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
            {[
              ["3", "Creative crafts"],
              ["2+", "Live web projects"],
              ["100%", "Hands-on"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-display text-3xl font-extrabold text-primary md:text-4xl">{n}</p>
                <p className="mt-1 text-sm text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="eyebrow">Toolkit</p>
          <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">Skills & tools</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {disciplines.map((d) => (
              <div key={d.n}>
                <p className="font-mono text-sm text-primary">{d.n}</p>
                <h3 className="mt-2 text-2xl font-bold">{d.title}</h3>
                <ul className="mt-6 space-y-3">
                  {d.tools.map((t) => (
                    <li key={t} className="flex items-center justify-between border-b border-border pb-3 text-muted-foreground">
                      {t}
                      <span className="size-1.5 rounded-full bg-primary" />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="eyebrow">How I work</p>
        <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">A simple process</h2>
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.t} className="rounded-3xl border border-border bg-card p-7">
              <span className="font-display text-5xl font-extrabold text-outline">0{i + 1}</span>
              <h3 className="mt-6 text-xl font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
        <Button asChild variant="hero" size="xl" className="mt-14">
          <Link to="/contact">
            Work with me <ArrowRight />
          </Link>
        </Button>
      </section>
    </>
  );
}
