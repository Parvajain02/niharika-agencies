import { useState } from "react";
import { CATEGORIES, getBrandLogo } from "@/data/site";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

function BrandLogoStrip({ brands }: { brands: string[] }) {
  if (!brands.length) return null;
  return (
    <div className="mt-4 pt-4 border-t border-border flex flex-wrap items-center gap-2">
      <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mr-1">Brands:</span>
      {brands.map((name) => {
        const logo = getBrandLogo(name);
        return logo ? (
          <div key={name} className="h-7 w-14 flex items-center justify-center">
            <img
              src={logo}
              alt={name}
              title={name}
              className="max-h-7 max-w-[56px] w-auto object-contain"
            />
          </div>
        ) : (
          <span
            key={name}
            className="rounded-full bg-primary/8 border border-border px-2.5 py-0.5 text-[10px] font-semibold text-primary"
          >
            {name}
          </span>
        );
      })}
    </div>
  );
}

export function Catalogue() {
  const [active, setActive] = useState<string>("all");
  const filtered = active === "all" ? CATEGORIES : CATEGORIES.filter((c) => c.slug === active);

  const filters = [{ slug: "all", title: "All Categories" }, ...CATEGORIES.map((c) => ({ slug: c.slug, title: c.title }))];

  return (
    <section id="catalogue" className="py-24 sm:py-32 bg-background">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Product Categories
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-primary leading-tight">
              A growing range of <span className="text-gold-gradient italic">premium FMCG products.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Browse curated categories spanning bakery essentials, ice cream raw materials, frozen foods and dairy, all sourced from authorized brand partners.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.slug}
              onClick={() => setActive(f.slug)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-smooth",
                active === f.slug
                  ? "bg-primary text-primary-foreground border-primary shadow-card-soft"
                  : "bg-card text-muted-foreground border-border hover:border-accent hover:text-primary",
              )}
            >
              {f.title}
            </button>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c) => (
            <article
              key={c.slug}
              className="group overflow-hidden rounded-2xl bg-card border border-border shadow-card-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className={cn("category-image-container flex items-center justify-center overflow-hidden transition-smooth", c.bgClass || "bg-white")}>
                <img
                  src={c.image}
                  alt={`${c.title} from Niharika Agencies`}
                  loading="lazy"
                  className="h-full w-full object-cover object-bottom transition-smooth group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-primary">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.items.map((it) => (
                    <span key={it} className="rounded-full bg-secondary px-3 py-1 text-[11px] font-medium text-secondary-foreground/80">
                      {it}
                    </span>
                  ))}
                </div>
                <BrandLogoStrip brands={c.brands} />
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-accent transition-smooth"
                >
                  Request catalogue <ArrowRight className="h-4 w-4 transition-smooth group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">Get Distribution Access</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
