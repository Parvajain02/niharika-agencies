import { BRANDS } from "@/data/site";

export function Brands() {
  const loop = [...BRANDS, ...BRANDS];
  return (
    <section id="brands" className="py-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Brand Partnerships
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold leading-tight">
            Trusted by the <span className="text-gold-gradient italic">brands you love.</span>
          </h2>
          <p className="mt-5 text-primary-foreground/75 text-lg">
            Authorized distributor and super stockist for 22+ leading FMCG companies across food, dairy, frozen and bakery categories.
          </p>
        </div>
      </div>

      <div className="mt-14 relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-primary to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-primary to-transparent z-10" />
        <div className="flex gap-4 animate-marquee w-max">
          {loop.map((b, i) => (
            <div
              key={`${b.name}-${i}`}
              className="shrink-0 min-w-[200px] rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm px-6 py-5 text-center transition-smooth hover:border-accent/60 hover:bg-primary-foreground/10"
            >
              <div className="font-display text-xl font-bold tracking-tight">{b.name}</div>
              {b.tag && (
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-primary-foreground/60">
                  {b.tag}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}