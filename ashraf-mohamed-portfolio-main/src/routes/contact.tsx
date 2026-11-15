import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import portrait from "@/assets/ashraf-portrait.jpg.asset.json";
import { profile } from "@/data/profile";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ashraf Mohamed" },
      {
        name: "description",
        content:
          "Get in touch with Ashraf Mohamed, full stack developer, by email, phone or WhatsApp.",
      },
      { property: "og:title", content: "Contact — Ashraf Mohamed" },
      {
        property: "og:description",
        content: "Hire Ashraf Mohamed for your next website or web app.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phoneDisplay,
    href: `tel:${profile.phone}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with me",
    href: profile.whatsapp,
  },
];

function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-20 md:grid-cols-[1fr_1.1fr] md:items-center">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 text-5xl font-bold leading-[1] md:text-6xl">
            Let's work <span className="text-gradient">together.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Need a website, a web app, or help finishing one? Reach me any way you like — I
            usually reply the same day.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <img
              src={portrait.url}
              alt={profile.name}
              className="size-16 rounded-full border-2 border-primary object-cover"
              width={64}
              height={64}
            />
            <div>
              <p className="font-display text-lg font-semibold">{profile.name}</p>
              <p className="text-sm text-muted-foreground">
                {profile.role} · {profile.location}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {channels.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center gap-5 rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-glow"
            >
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground">
                <Icon className="size-6" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="eyebrow block">{label}</span>
                <span className="mt-1 block truncate font-display text-xl font-semibold">
                  {value}
                </span>
              </span>
              <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:rotate-45 group-hover:text-primary" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
