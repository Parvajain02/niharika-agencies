import { useEffect, useRef, useState } from "react";
import { STATS } from "@/data/site";

function useCountUp(target: number, start: boolean, duration = 1500) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return val;
}

function StatItem({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const n = useCountUp(value, start);
  return (
    <div className="text-center">
      <div className="font-display text-5xl sm:text-6xl font-bold text-gold-gradient">
        {n}
        {suffix}
      </div>
      <div className="mt-3 text-xs sm:text-sm uppercase tracking-[0.2em] text-primary-foreground/75">
        {label}
      </div>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setStart(true),
      { threshold: 0.3 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />
      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Impact in Numbers
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight">
            Scale that speaks for <span className="text-gold-gradient">itself.</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {STATS.map((s) => (
            <StatItem key={s.label} {...s} start={start} />
          ))}
        </div>
      </div>
    </section>
  );
}