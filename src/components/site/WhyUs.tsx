import { CheckCircle2 } from "lucide-react";
import warehouse from "@/assets/hero-warehouse.jpg";

const reasons = [
  { title: "25+ Years of Reliability", desc: "A proven track record of consistent service since 1999." },
  { title: "Cold Chain Expertise", desc: "Purpose built infrastructure for temperature sensitive goods." },
  { title: "22+ Authorized Brands", desc: "Direct access to India's most loved FMCG companies." },
  { title: "Hyper Local Reach", desc: "Daily delivery routes across 3 districts and 300+ retailers." },
  { title: "Transparent Operations", desc: "GST compliant invoicing, traceable batches and sealed deliveries." },
  { title: "Dedicated Account Support", desc: "A personal point of contact for every retailer and partner." },
];

export function WhyUs() {
  return (
    <section id="why" className="py-24 sm:py-32 bg-background">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elegant">
            <img
              src={warehouse}
              alt="Niharika Agencies distribution operations"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-background">
              <div className="font-display text-3xl font-bold">Trusted across 3 districts</div>
              <div className="mt-2 text-sm text-background/80">Jalgaon · Dhule · Nandurbar</div>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 hidden md:block bg-gold-gradient rounded-2xl p-6 shadow-gold w-44 text-accent-foreground">
            <div className="font-display text-4xl font-bold">99%</div>
            <div className="text-xs uppercase tracking-widest mt-1">On-time delivery rate</div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Why Choose Us
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-primary leading-tight">
            The distribution partner <br />
            <span className="text-gold-gradient italic">brands rely on.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            We don't just move products. We protect brand promises with discipline, infrastructure and human accountability.
          </p>

          <ul className="mt-8 space-y-5">
            {reasons.map((r) => (
              <li key={r.title} className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-accent mt-1" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-primary">{r.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{r.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}