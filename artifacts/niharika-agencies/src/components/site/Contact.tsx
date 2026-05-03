import { useState } from "react";
import { z } from "zod";
import { Mail, MapPin, Phone, MessageCircle, Send, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { SITE } from "@/data/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  business: z.string().trim().max(120).optional(),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  email: z.string().trim().email("Enter a valid email").max(255),
  interest: z.string().trim().max(120).optional(),
  message: z.string().trim().optional(),
});

export function Contact() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast({ title: "Please check the form", description: parsed.error.issues[0].message, variant: "destructive" });
      return;
    }
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("Submission failed");
    } catch (err) {
      console.error("Submission failed", err);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly on WhatsApp.",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    const lines = [
      "*New Partnership Inquiry — Niharika Agencies*",
      "",
      `*Name:* ${parsed.data.name}`,
      `*Business:* ${parsed.data.business || "-"}`,
      `*Phone:* ${parsed.data.phone}`,
      `*Email:* ${parsed.data.email}`,
      `*Interest:* ${parsed.data.interest || "-"}`,
      "",
      `*Message:*`,
      parsed.data.message,
    ];
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${SITE.phoneRaw}?text=${text}`, "_blank", "noopener,noreferrer");

    toast({
      title: "Inquiry sent successfully",
      description: "We've received your details and a WhatsApp message has been prepared for our team.",
    });
    form.reset();
    setLoading(false);
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-surface-gradient">
      <div className="container grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Get In Touch</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-primary leading-tight">
            Let's build a <span className="text-gold-gradient">distribution partnership.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Whether you are a retailer, a brand, or a HoReCa operator, reach out and we will respond within 24 hours.
          </p>

          <div className="mt-10 space-y-5">
            <a href={`tel:${SITE.phoneRaw}`} className="flex items-start gap-4 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-card-soft group-hover:bg-gold-gradient group-hover:text-accent-foreground transition-smooth">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Call {SITE.contactPerson}</div>
                <div className="text-lg font-semibold text-primary">{SITE.phone}</div>
              </div>
            </a>
            <a href={`https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent("Hi Niharika Agencies, I'd like to know more about your distribution services.")}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-card-soft group-hover:bg-gold-gradient group-hover:text-accent-foreground transition-smooth">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</div>
                <div className="text-lg font-semibold text-primary">{SITE.phone}</div>
              </div>
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-start gap-4 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-card-soft group-hover:bg-gold-gradient group-hover:text-accent-foreground transition-smooth">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                <div className="text-lg font-semibold text-primary break-all">{SITE.email}</div>
              </div>
            </a>
            <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-card-soft">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Visit Us</div>
                <div className="text-base font-semibold text-primary leading-snug">{SITE.address}</div>
                <div className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-accent group-hover:underline">
                  <Navigation className="h-3 w-3" /> Open in Google Maps
                </div>
              </div>
            </a>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-card-soft">
            <iframe
              title="Niharika Agencies location map"
              src={SITE.mapsEmbedUrl}
              width="100%"
              height="260"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <Button variant="default" size="lg" asChild className="bg-[hsl(142_70%_35%)] hover:bg-[hsl(142_70%_30%)] text-white">
              <a href={`https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent("Hi Niharika Agencies, I would like to know more about your distribution services.")}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" /> WhatsApp
              </a>
            </Button>
            <Button variant="default" size="lg" asChild>
              <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">
                <Navigation className="h-5 w-5" /> Get Directions
              </a>
            </Button>
          </div>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-3 rounded-2xl bg-card border border-border p-8 sm:p-10 shadow-elegant">
          <h3 className="font-display text-2xl font-semibold text-primary">Request Distribution Access</h3>
          <p className="mt-1 text-sm text-muted-foreground">Fill in your details — we'll be in touch shortly.</p>

          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name *</Label>
              <Input id="name" name="name" required maxLength={100} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="business">Business / Shop Name</Label>
              <Input id="business" name="business" maxLength={120} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone *</Label>
              <Input id="phone" name="phone" type="tel" required maxLength={20} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" required maxLength={255} />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="interest">I'm interested in</Label>
              <Input id="interest" name="interest" placeholder="e.g. Bakery ingredients, Frozen foods, Brand partnership..." maxLength={120} />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea id="message" name="message" rows={4} placeholder="Tell us about your requirement..." />
            </div>
          </div>

          <div className="mt-8">
            <Button type="submit" variant="default" size="lg" disabled={loading} className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
              <Send className="h-4 w-4" />
              {loading ? "Sending..." : "Send Inquiry"}
            </Button>
          </div>

          <div className="mt-10 pt-10 border-t border-border">
            <p className="font-display text-3xl sm:text-4xl font-semibold text-primary leading-tight">
              Your shelf,
            </p>
            <p className="font-display text-3xl sm:text-4xl font-semibold text-gold-gradient italic leading-tight">
              our commitment.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-sm">
              Every inquiry is the start of a partnership. We respond within 24 hours and are ready to deliver from day one.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
