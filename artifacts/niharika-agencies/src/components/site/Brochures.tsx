import { BROCHURES, BRANDS } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, FileText } from "lucide-react";

const logoMap: Record<string, string> = Object.fromEntries(
  BRANDS.filter((b) => b.logo).map((b) => [b.name.toLowerCase(), b.logo!])
);

function getBrandLogo(brandName: string): string | undefined {
  const key = brandName.toLowerCase().replace(/\s+funfoods$/, "").replace(/\s+foods$/, "").trim();
  return (
    logoMap[key] ||
    logoMap[brandName.toLowerCase()] ||
    undefined
  );
}

export function Brochures() {
  return (
    <section id="brochures" className="py-24 sm:py-32 bg-secondary/40">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Brand Brochures
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-primary leading-tight">
            Download <span className="text-gold-gradient italic">official catalogues.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Browse and download the latest product catalogues from our partner brands. Updated regularly.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BROCHURES.map((b) => {
            const logo = getBrandLogo(b.brand);
            return (
              <article
                key={b.fileId}
                className="group rounded-2xl bg-card border border-border p-6 shadow-card-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant hover:border-accent/60"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/5 group-hover:bg-accent/10 transition-smooth overflow-hidden p-1.5">
                    {logo ? (
                      <img
                        src={logo}
                        alt={`${b.brand} logo`}
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <FileText className="h-6 w-6 text-primary group-hover:text-accent transition-smooth" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-semibold text-primary truncate">
                      {b.brand}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                      {b.category}
                    </p>
                    {b.note && (
                      <p className="text-[11px] mt-1 text-accent font-medium">{b.note}</p>
                    )}
                  </div>
                </div>
                <div className="mt-5 flex gap-2">
                  <Button size="sm" variant="default" className="flex-1" asChild>
                    <a href={b.viewUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3.5 w-3.5" /> View
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 border-accent/50 text-accent hover:bg-accent/10" asChild>
                    <a href={b.downloadUrl} target="_blank" rel="noopener noreferrer">
                      <Download className="h-3.5 w-3.5" /> Download
                    </a>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
