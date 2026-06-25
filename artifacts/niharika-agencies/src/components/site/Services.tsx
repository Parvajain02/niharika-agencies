import { Truck, Snowflake, Warehouse, ShieldCheck, Users, Clock } from "lucide-react";

const services = [
  { icon: Warehouse, title: "Super Stockist & Distribution", desc: "Authorized super stockist for 23+ leading FMCG brands across the region." },
  { icon: Snowflake, title: "Cold Chain Logistics", desc: "We have 5800 cubic feet of Temperature-controlled handling for last mile delivery of dairy, frozen and perishable goods." },
  { icon: Truck, title: "Last Mile Delivery", desc: "With daily distribution across three districts, we ensure uninterrupted product availability, powered by our fleet of four self-owned logistics vehicles." },
  { icon: Users, title: "HoReCa Supply", desc: "Specialised supply for hotels, restaurants, cafes and bakeries." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Authentic, brand sealed products with full FSSAI compliance." },
  { icon: Clock, title: "On Time, Every Time", desc: "SLA driven dispatch ensuring shelves never go empty." },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-secondary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Our Services
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-primary leading-tight">
            End to end <span className="text-gold-gradient italic">supply chain solutions.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            From warehouse to retail shelf, we handle every step of consumer goods distribution with precision.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="relative rounded-2xl bg-card border border-border p-8 shadow-card-soft overflow-hidden"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold-gradient opacity-20 transition-smooth" />
              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gold-gradient text-accent-foreground shadow-card-soft transition-smooth">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}