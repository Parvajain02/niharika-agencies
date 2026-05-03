import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/data/site";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo-niharika-color.png";

const links = [
  { href: "#about", label: "About" },
  { href: "#brands", label: "Brands" },
  { href: "#brochures", label: "Catalogue" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

function smoothScroll(href: string) {
  if (href === "#top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleLink(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => smoothScroll(href), open ? 280 : 0);
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-smooth",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-card-soft"
          : "bg-white/30 backdrop-blur-sm",
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <a href="#top" onClick={(e) => handleLink(e, "#top")} className="flex items-center gap-3">
          <img
            src={logo}
            alt="Niharika Agencies logo"
            width={44}
            height={44}
            className="h-11 w-11 rounded-xl bg-white object-contain p-1 shadow-card-soft"
          />
          <div className="leading-tight">
            <div className="font-display text-[17px] font-semibold tracking-tight text-primary">
              {SITE.name}
            </div>
            <div className="text-[10.5px] uppercase tracking-[0.18em] font-medium text-muted-foreground">
              Est. {SITE.since}
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleLink(e, l.href)}
              className={cn(
                "text-sm font-medium transition-smooth hover:text-accent",
                scrolled ? "text-foreground" : "text-primary",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className={cn("flex items-center gap-2 text-sm font-medium", scrolled ? "text-foreground" : "text-primary")}
          >
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
          <Button variant="hero" size="default" asChild>
            <a href="#contact" onClick={(e) => handleLink(e, "#contact")}>Partner With Us</a>
          </Button>
        </div>

        <button
          className={cn("lg:hidden p-2 rounded-md transition-smooth", scrolled ? "text-foreground" : "text-primary")}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className="block transition-transform duration-300"
            style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </span>
        </button>
      </div>

      {/* Animated mobile menu */}
      <div
        className="lg:hidden overflow-hidden bg-background"
        style={{
          maxHeight: open ? "420px" : "0px",
          transition: "max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="border-t border-border">
          <div className="container py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleLink(e, l.href)}
                className="py-3 text-sm font-medium text-foreground hover:text-accent border-b border-border/60 transition-smooth"
              >
                {l.label}
              </a>
            ))}
            <Button variant="hero" className="mt-3" asChild>
              <a href="#contact" onClick={(e) => handleLink(e, "#contact")}>Partner With Us</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
