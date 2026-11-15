import { MessageCircle } from "lucide-react";
import { profile } from "@/data/profile";

export function WhatsAppButton() {
  return (
    <a
      href={profile.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Ashraf on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-gradient-primary p-4 text-primary-foreground shadow-glow-lg transition-transform hover:scale-105"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary opacity-30" />
      <MessageCircle className="size-6" />
      <span className="hidden pr-1 text-sm font-semibold sm:group-hover:inline">WhatsApp me</span>
    </a>
  );
}
