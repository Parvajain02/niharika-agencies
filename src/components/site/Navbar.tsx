import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/data/site";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo-niharika.jpeg";

const links = [
  { href: "#about", label: "About" },
  { href: "#brands", label: "Brands" },
  { href: "#catalogue", label: "Catalogue" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-smooth",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-card-soft"
          : "bg-transparent",
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Niharika Agencies logo"
            width={44}
            height={44}
            className="h-11 w-11 rounded-xl bg-white object-contain p-1 shadow-card-soft"
          />
          <div className="leading-tight">
            <div className={cn("font-display text-[17px] font-semibold tracking-tight", scrolled ? "text-primary" : "text-background")}>
              {SITE.name}
            </div>
            <div className={cn("text-[10.5px] uppercase tracking-[0.18em] font-medium", scrolled ? "text-muted-foreground" : "text-background/70")}>
              Est. {SITE.since}
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm font-medium transition-smooth hover:text-accent",
                scrolled ? "text-foreground" : "text-background/90",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={`tel:${SITE.phoneRaw}`} className={cn("flex items-center gap-2 text-sm font-medium", scrolled ? "text-foreground" : "text-background")}>
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
          <Button variant="hero" size="default" asChild>
            <a href="#contact">Partner With Us</a>
          </Button>
        </div>

        <button
          className={cn("lg:hidden p-2 rounded-md", scrolled ? "text-foreground" : "text-background")}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-foreground hover:text-accent border-b border-border/60"
              >
                {l.label}
              </a>
            ))}
            <Button variant="hero" className="mt-3" asChild>
              <a href="#contact" onClick={() => setOpen(false)}>Partner With Us</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}