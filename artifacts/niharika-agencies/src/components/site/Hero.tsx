import { ArrowRight, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroDesktop from "@/assets/hero-warehouse.jpg";
import heroMobile from "@/assets/hero-warehouse-mobile.png";
import { SITE } from "@/data/site";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        {/* Portrait image — mobile & tablet (< 1024px) */}
        <img
          src={heroMobile}
          alt="Niharika Agencies FMCG distribution warehouse"
          className="block lg:hidden h-full w-full object-cover object-center"
        />
        {/* Landscape image — desktop (≥ 1024px) */}
        <img
          src={heroDesktop}
          alt="Niharika Agencies FMCG distribution warehouse in Jalgaon"
          className="hidden lg:block h-full w-full object-cover object-center"
          width={1920}
          height={1280}
        />

        {/* Mobile overlay — gradient from top so text stays readable */}
        <div
          className="absolute inset-0 lg:hidden"
          style={{
            background:
              "linear-gradient(to bottom, hsl(36 38% 97% / 0.97) 0%, hsl(36 38% 97% / 0.92) 40%, hsl(36 38% 97% / 0.55) 72%, hsl(36 38% 97% / 0.22) 100%)",
          }}
        />
        {/* Desktop overlay — gradient from left */}
        <div className="absolute inset-0 hidden lg:block bg-hero-gradient" />
      </div>

      <div className="container relative z-10 pt-28 pb-20">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 backdrop-blur-sm px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-primary">
            <BadgeCheck className="h-3.5 w-3.5 text-accent" />
            Authorized FMCG Distributor · Est. {SITE.since}
          </span>

          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-primary leading-[1.02]">
            Powering FMCG <br />
            Distribution at <span className="text-gold-gradient italic">Scale.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg sm:text-xl text-foreground/70 leading-relaxed font-light">
            Super stockist and authorized distributor for 23+ leading consumer brands across {SITE.districts.join(", ")}, backed by cold chain logistics and 25 years of trust.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Start sourcing with us <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-primary/30 text-primary bg-white/50 backdrop-blur-sm hover:bg-white/80 hover:border-primary/60"
              asChild
            >
              <a href="#catalogue">Explore Our Network</a>
            </Button>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg border-t border-primary/15 pt-8">
            {[
              { v: "23+", l: "Brands" },
              { v: "300+", l: "Retailers" },
              { v: "25+", l: "Years" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-bold text-gold-gradient">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-foreground/55">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
