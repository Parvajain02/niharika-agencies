import { Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/data/site";
import logo from "@/assets/logo-niharika-color.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16 grid lg:grid-cols-4 gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Niharika Agencies logo" width={48} height={48} className="h-12 w-12 rounded-xl bg-white object-contain p-1" />
            <div>
              <div className="font-display text-xl font-semibold tracking-tight">{SITE.name}</div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-primary-foreground/70 mt-0.5">{SITE.tagline} · Est. {SITE.since}</div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-primary-foreground/75 leading-relaxed">
            Authorized FMCG distributor and super stockist serving {SITE.districts.join(", ")} with 22+ trusted brands and complete cold chain capabilities.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            {[
              ["About", "#about"],
              ["Brand Partners", "#brands"],
              ["Catalogue", "#catalogue"],
              ["Services", "#services"],
              ["Contact", "#contact"],
            ].map(([l, h]) => (
              <li key={l}>
                <a href={h} className="hover:text-accent transition-smooth">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold">Reach Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/75">
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-accent" /><a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-accent" /><a href={`mailto:${SITE.email}`} className="break-all">{SITE.email}</a></li>
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" /><span>{SITE.address}</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-primary-foreground/60">
          <div>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</div>
          <div>FMCG Distribution · Super Stockist · Jalgaon, Maharashtra</div>
        </div>
      </div>
    </footer>
  );
}