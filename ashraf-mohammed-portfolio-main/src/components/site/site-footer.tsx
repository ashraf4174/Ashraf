import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="eyebrow">Let's build something</p>
        <a
          href={`mailto:${profile.email}`}
          className="group mt-4 inline-flex items-center gap-3 font-display text-2xl font-extrabold break-all sm:text-4xl lg:text-5xl"
        >
          <span className="transition-colors group-hover:text-primary">{profile.email}</span>
          <ArrowUpRight className="size-8 shrink-0 text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 md:size-12" />
        </a>
        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. Code · Design · Motion.</p>
          <div className="flex gap-6">
            <Link to="/work" className="hover:text-foreground">Work</Link>
            <Link to="/about" className="hover:text-foreground">About</Link>
            <Link to="/contact" className="hover:text-foreground">Contact</Link>
            <a href={profile.whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-foreground">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
