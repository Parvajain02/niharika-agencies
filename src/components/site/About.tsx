import { Award, Snowflake, Truck, MapPin } from "lucide-react";
import { SITE } from "@/data/site";

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
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-primary leading-tight">
            Built on trust. <br />
            Scaled by service.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            From a single distribution route in Jalgaon in 1999 to becoming the region's most trusted super stockist, Niharika Agencies has grown into a backbone for FMCG brands across {SITE.districts.join(", ")}.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            We move premium consumer goods — bakery, dairy, frozen, packaging and more — through a precision supply chain designed for speed, freshness, and reliability.
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
              <div className="text-sm uppercase tracking-widest text-muted-foreground leading-tight">
                Districts <br /> covered daily
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
    </section>
  );
}