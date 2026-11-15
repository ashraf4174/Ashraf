import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ashraf Mohammed" },
      {
        name: "description",
        content: "Hire Ashraf Mohammed for web development, graphic design or video editing.",
      },
      { property: "og:title", content: "Contact Ashraf Mohammed" },
      {
        property: "og:description",
        content: "Start a web, design or video project with Ashraf Mohammed.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const services = ["Website / Web app", "Graphic design", "Video editing", "A bit of everything"];
const field =
  "w-full rounded-2xl border border-input bg-card px-5 py-4 text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary";

function ContactPage() {
  const [service, setService] = useState(services[0]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`${service} — project from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section className="mx-auto grid max-w-6xl gap-16 px-6 pt-40 pb-28 lg:grid-cols-[1fr_1.2fr]">
      <div>
        <p className="eyebrow">Contact</p>
        <h1 className="mt-4 text-5xl leading-[0.95] font-extrabold md:text-7xl">
          Let's create <span className="text-gradient-ember">something</span> great.
        </h1>
        <p className="mt-8 max-w-md text-lg text-muted-foreground">
          Tell me about your website, brand or video. I'll get back to you with ideas and next
          steps.
        </p>
        <div className="mt-10 flex flex-col items-start gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex max-w-full items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary"
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Mail className="size-5" />
            </span>
            <span className="min-w-0">
              <span className="block font-mono text-xs text-muted-foreground">Email me</span>
              <span className="font-semibold break-all">{profile.email}</span>
            </span>
          </a>
          <a
            href={profile.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary"
          >
            <span className="grid size-12 place-items-center rounded-xl bg-primary text-primary-foreground">
              <MessageCircle className="size-5" />
            </span>
            <span>
              <span className="block font-mono text-xs text-muted-foreground">Chat on WhatsApp</span>
              <span className="font-semibold">{profile.whatsapp}</span>
            </span>
          </a>
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-5 rounded-[2rem] border border-border bg-card/50 p-6 md:p-10">
        <div>
          <p className="mb-3 text-sm font-semibold">What do you need?</p>
          <div className="flex flex-wrap gap-2">
            {services.map((s) => (
              <button
                type="button"
                key={s}
                onClick={() => setService(s)}
                aria-pressed={service === s}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition-all",
                  service === s
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:text-foreground",
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <input required name="name" placeholder="Your name" className={field} />
          <input required type="email" name="email" placeholder="Your email" className={field} />
        </div>
        <textarea
          required
          name="message"
          rows={6}
          placeholder="Tell me about your project…"
          className={cn(field, "resize-none")}
        />
        <Button type="submit" variant="hero" size="xl" className="w-full">
          Send message <Send />
        </Button>
      </form>
    </section>
  );
}
