import { Play, Youtube, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/data/site";

export function YouTube() {
  return (
    <section id="youtube" className="py-20 bg-gradient-to-b from-background to-secondary/30 border-y border-border">
      <div className="container">
        <div className="relative rounded-3xl bg-[#0a1d45] text-white overflow-hidden shadow-elegant border border-primary/20">
          {/* Background decorative glows */}
          <div className="absolute -left-1/4 -top-1/2 w-96 h-96 bg-[#ff0000]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -right-1/4 -bottom-1/2 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid lg:grid-cols-12 gap-8 items-center px-6 py-12 sm:px-12 sm:py-16">
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#ff0000]/30 bg-[#ff0000]/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#ff4d4d]">
                <Youtube className="h-4 w-4 fill-current shrink-0" />
                Official Channel
              </span>
              
              <h2 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-tight">
                Visit Our Official <br className="hidden sm:inline" />
                <span className="text-accent italic font-medium">YouTube Channel.</span>
              </h2>
              
              <p className="mt-4 text-base sm:text-lg text-white/75 leading-relaxed font-light max-w-2xl">
                Subscribe to our official YouTube channel for updates, upcoming product launches, brand partnerships, and industry distribution insights as we grow our digital presence.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  className="bg-[#ff0000] hover:bg-[#cc0000] text-white font-medium gap-2 border-0 shadow-lg shadow-[#ff0000]/25 transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a href={SITE.youtubeUrl} target="_blank" rel="noopener noreferrer">
                    <Play className="h-4 w-4 fill-current text-white shrink-0 animate-pulse" />
                    Visit Our Channel
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white/20 text-white bg-white/5 hover:bg-white/10 hover:border-white/40 font-medium transition-all"
                  asChild
                >
                  <a href={SITE.youtubeUrl} target="_blank" rel="noopener noreferrer">
                    Subscribe <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative w-full flex justify-center">
              <a 
                href={SITE.youtubeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-full max-w-[400px] aspect-auto lg:aspect-square rounded-3xl overflow-hidden shadow-elegant border border-white/10 bg-white/5 backdrop-blur-md flex flex-col items-center justify-center py-12 px-6 sm:px-8 transition-all duration-500 hover:scale-102 hover:border-[#ff0000]/30"
              >
                {/* Glowing Background Glows */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#ff0000]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Large YouTube Logo Container */}
                <div className="relative h-28 w-28 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#ff0000]/40 transition-all duration-500 group-hover:bg-[#ff0000]/10 shadow-inner">
                  <svg 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-14 w-14 drop-shadow-[0_0_15px_rgba(255,0,0,0.4)] transition-transform duration-500 group-hover:scale-110"
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
                </div>
                
                <div className="mt-6 text-center">
                  <div className="font-display text-lg font-medium text-white/90 group-hover:text-white transition-colors">
                    Niharika Agencies
                  </div>
                  <div className="text-xs text-white/60 mt-1 uppercase tracking-widest">
                    Official YouTube Channel
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#ff4d4d] uppercase tracking-wider bg-[#ff0000]/10 px-3.5 py-1.5 rounded-full border border-[#ff0000]/20 group-hover:bg-[#ff0000] group-hover:text-white group-hover:border-[#ff0000] transition-all duration-300">
                    Visit Channel <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
