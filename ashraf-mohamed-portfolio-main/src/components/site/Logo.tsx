import { Link } from "@tanstack/react-router";
import logo from "@/assets/ashraf-logo.jpg.asset.json";
import { profile } from "@/data/profile";

export function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label={`${profile.name} — home`}>
      <span className="relative grid size-11 place-items-center rounded-full bg-gradient-primary p-[2px] shadow-glow transition-transform group-hover:scale-105">
        <img
          src={logo.url}
          alt={profile.name}
          className="size-full rounded-full object-cover"
          width={44}
          height={44}
        />
      </span>
      <span className="leading-tight">
        <span className="block font-display text-base font-semibold">{profile.name}</span>
        <span className="block font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
          {profile.role}
        </span>
      </span>
    </Link>
  );
}
