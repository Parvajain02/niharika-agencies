import { Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SITE, STATS } from "@/data/site";
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
            Authorized FMCG distributor and super stockist serving {SITE.districts.join(", ")} with {STATS.find(s => s.label === "Trusted Brands")?.value || 22}+ trusted brands and complete cold chain capabilities.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a 
              href={SITE.youtubeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-primary-foreground hover:bg-[#ff0000]/10 transition-smooth border border-white/5 shadow-card-soft"
              aria-label="Follow us on YouTube"
            >
              <svg 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path 
                  d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.507 9.388.507 9.388.507s7.517 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837z" 
                  fill="#FF0000"
                />
                <path 
                  d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" 
                  fill="#FFFFFF"
                />
              </svg>
            </a>
            <a 
              href={`https://wa.me/${SITE.phoneRaw}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-primary-foreground hover:bg-[#25D366] hover:text-white transition-smooth border border-white/5 shadow-card-soft"
              aria-label="Contact us on WhatsApp"
            >
              <FaWhatsapp className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            {[
              ["About", "#about"],
              ["Brand Partners", "#brands"],
              ["Catalogue", "#brochures"],
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