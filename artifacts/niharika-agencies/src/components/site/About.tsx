import { Award, Snowflake, Truck, MapPin, Quote } from "lucide-react";
import { SITE } from "@/data/site";
import founderPhoto from "@/assets/founder-nihar-jain.jpeg";

const points = [
  { icon: Award, title: "Supply Chain Partner Since 1999", desc: "Over two decades powering FMCG distribution with discipline and trust." },
  { icon: Snowflake, title: "Cold Storage Facilities", desc: "Temperature-controlled handling for dairy, frozen and perishable goods." },
  { icon: Truck, title: "Timely Delivery, Always", desc: "Daily routing across 3 districts ensures retail shelves stay stocked." },
  { icon: MapPin, title: "Authorized for 22+ Brands", desc: "Direct super-stockist access to India's most loved FMCG brands." },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-surface-gradient">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            About Niharika Agencies
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-primary leading-[1.05]">
            Built on trust. <br />
            <span className="italic font-medium">Scaled by service.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            From a single distribution route in Jalgaon in 1999 to becoming the region's most trusted super stockist, Niharika Agencies has grown into a backbone for FMCG brands across {SITE.districts.join(", ")}.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            We move premium consumer goods across bakery, dairy, frozen and packaging through a precision supply chain designed for speed, freshness and reliability.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="font-display text-5xl font-bold text-gold-gradient">25+</div>
              <div className="text-sm uppercase tracking-widest text-muted-foreground leading-tight">
                Years of <br /> proven service
              </div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="flex items-center gap-3">
              <div className="font-display text-5xl font-bold text-gold-gradient">3</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground leading-tight">
                DISTRICTS <br /> COVERED
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {points.map((p, i) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-card-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary group-hover:bg-gold-gradient group-hover:text-accent-foreground transition-smooth">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-primary">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Founder Profile */}
      <div className="container mt-24">
        <div className="rounded-3xl bg-primary text-primary-foreground overflow-hidden">
          <div className="grid lg:grid-cols-5 items-stretch">
            <div className="lg:col-span-2 relative min-h-[340px] lg:min-h-0">
              <img
                src={founderPhoto}
                alt="Nihar Jain — Founder, Niharika Agencies"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-primary/60" />
            </div>
            <div className="lg:col-span-3 px-8 py-10 sm:px-12 sm:py-14 flex flex-col justify-center">
              <Quote className="h-8 w-8 text-accent opacity-70 mb-4" />
              <p className="font-display text-xl sm:text-2xl font-medium leading-relaxed text-primary-foreground/90 italic">
                "We didn't just build a distribution business — we built relationships. Every brand we carry, every retailer we serve, every delivery we make is a commitment to quality and consistency."
              </p>
              <div className="mt-8 flex items-center gap-4 border-t border-primary-foreground/15 pt-6">
                <div>
                  <div className="font-display text-xl font-semibold tracking-tight">Nihar Jain</div>
                  <div className="text-sm text-accent mt-0.5 uppercase tracking-[0.18em]">Founder & Director</div>
                  <div className="text-xs text-primary-foreground/60 mt-1">Niharika Agencies · Est. {SITE.since}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
