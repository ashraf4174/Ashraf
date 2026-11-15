import { Mail, Phone } from "lucide-react";
import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 text-sm text-muted-foreground md:flex-row md:items-center">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with care.
        </p>
        <div className="flex flex-wrap gap-5">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-primary">
            <Mail className="size-4" /> {profile.email}
          </a>
          <a href={`tel:${profile.phone}`} className="flex items-center gap-2 hover:text-primary">
            <Phone className="size-4" /> {profile.phoneDisplay}
          </a>
        </div>
      </div>
    </footer>
  );
}
