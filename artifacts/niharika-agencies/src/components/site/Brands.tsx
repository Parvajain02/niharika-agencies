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
            Authorized distributor and super stockist for 23+ leading FMCG companies across food, dairy, frozen and bakery categories.
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
              className="shrink-0 w-[180px] rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm px-4 py-4 flex flex-col items-center gap-3 transition-smooth hover:border-accent/60 hover:bg-primary-foreground/10"
            >
              {b.logo ? (
                <div className="h-14 w-full flex items-center justify-center rounded-lg bg-white px-2 py-1.5">
                  <img
                    src={b.logo}
                    alt={`${b.name} logo`}
                    className="max-h-10 max-w-[130px] w-auto h-auto object-contain"
                  />
                </div>
              ) : (
                <div className="h-14 w-14 rounded-full bg-primary-foreground/10 flex items-center justify-center text-xl font-bold font-display text-accent">
                  {b.name[0]}
                </div>
              )}
              <div className="text-center">
                <div className="font-display text-sm font-bold tracking-tight leading-tight">{b.name}</div>
                {b.tag && (
                  <div className="mt-0.5 text-[10px] uppercase tracking-[0.15em] text-primary-foreground/60">
                    {b.tag}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
