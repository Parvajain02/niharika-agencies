import { ArrowRight, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-warehouse.jpg";
import logoColor from "@/assets/logo-niharika-color.png";
import { SITE } from "@/data/site";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Niharika Agencies FMCG distribution warehouse in Jalgaon"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute bottom-6 right-6 z-10 flex items-center gap-3 rounded-xl bg-primary/70 backdrop-blur-sm border border-accent/30 px-4 py-3 shadow-elegant">
          <img
            src={logoColor}
            alt="Niharika Agencies"
            className="h-12 w-auto object-contain"
          />
          <div>
            <div className="font-display text-sm font-bold text-background leading-tight">Niharika Agencies</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-accent mt-0.5">Est. {SITE.since}</div>
          </div>
        </div>
      </div>

      <div className="container relative z-10 pt-28 pb-20">
        <div className="max-w-3xl text-background animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-background/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] backdrop-blur-md">
            <BadgeCheck className="h-3.5 w-3.5 text-accent" />
            Authorized FMCG Distributor · Est. {SITE.since}
          </span>

          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.02]">
            Powering FMCG <br />
            Distribution at <span className="text-gold-gradient italic">Scale.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg sm:text-xl text-background/85 leading-relaxed font-light">
            Super stockist and authorized distributor for 22+ leading consumer brands across {SITE.districts.join(", ")}, backed by cold chain logistics and 25 years of trust.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Partner With Us <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#catalogue">Explore Our Network</a>
            </Button>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg border-t border-background/20 pt-8">
            {[
              { v: "22+", l: "Brands" },
              { v: "300+", l: "Retailers" },
              { v: "25+", l: "Years" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-bold text-gold-gradient">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-background/70">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}