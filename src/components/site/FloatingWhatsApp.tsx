import { MessageCircle } from "lucide-react";
import { SITE } from "@/data/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent("Hi Niharika Agencies, I'd like to know more about your distribution services.")}`}
      target="_blank"
      rel="noopener"
      aria-label="Chat with Niharika Agencies on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-accent-foreground shadow-gold hover:scale-110 transition-smooth"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}