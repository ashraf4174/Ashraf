import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border border-border bg-background/70 px-3 py-2 pl-5 backdrop-blur-xl">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-extrabold">
          <span className="grid size-9 place-items-center rounded-full bg-gradient-ember text-[11px] tracking-tighter text-primary-foreground">
            AM
          </span>
          <span className="hidden sm:inline">Ashraf.</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:bg-secondary data-[status=active]:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="hero" size="sm" className="hidden px-5 sm:inline-flex">
            <Link to="/contact">Hire me</Link>
          </Button>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className="grid size-9 place-items-center rounded-full border border-border md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="mx-4 mt-2 flex flex-col rounded-3xl border border-border bg-card p-3 md:hidden">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-2xl px-4 py-3 font-display text-xl font-bold text-muted-foreground data-[status=active]:text-primary"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
