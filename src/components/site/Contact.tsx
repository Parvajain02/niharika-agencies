import { useState } from "react";
import { z } from "zod";
import { Mail, MapPin, Phone, MessageCircle, Send } from "lucide-react";
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
  message: z.string().trim().min(5, "Tell us a bit more").max(1000),
});

export function Contact() {
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast({ title: "Please check the form", description: parsed.error.issues[0].message, variant: "destructive" });
      return;
    }
    setLoading(true);
    const text = `New Partnership Inquiry%0A%0A*Name:* ${encodeURIComponent(parsed.data.name)}%0A*Business:* ${encodeURIComponent(parsed.data.business || "-")}%0A*Phone:* ${encodeURIComponent(parsed.data.phone)}%0A*Email:* ${encodeURIComponent(parsed.data.email)}%0A*Interest:* ${encodeURIComponent(parsed.data.interest || "-")}%0A*Message:* ${encodeURIComponent(parsed.data.message)}`;
    window.open(`https://wa.me/${SITE.phoneRaw}?text=${text}`, "_blank", "noopener");
    toast({ title: "Opening WhatsApp", description: "Your inquiry is ready to send." });
    setLoading(false);
    e.currentTarget.reset();
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
            Whether you're a retailer, a brand, or a HoReCa operator — reach out and we'll respond within 24 hours.
          </p>

          <div className="mt-10 space-y-5">
            <a href={`tel:${SITE.phoneRaw}`} className="flex items-start gap-4 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-card-soft group-hover:bg-gold-gradient group-hover:text-accent-foreground transition-smooth">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Call {SITE.contactPersons.join(" / ")}</div>
                <div className="text-lg font-semibold text-primary">{SITE.phone}</div>
              </div>
            </a>
            <a href={`https://wa.me/${SITE.phoneRaw}`} target="_blank" rel="noopener" className="flex items-start gap-4 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-card-soft group-hover:bg-gold-gradient group-hover:text-accent-foreground transition-smooth">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</div>
                <div className="text-lg font-semibold text-primary">Chat with us instantly</div>
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
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-card-soft">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Visit Us</div>
                <div className="text-base font-semibold text-primary leading-snug">{SITE.address}</div>
              </div>
            </div>
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
              <Textarea id="message" name="message" rows={4} required maxLength={1000} placeholder="Tell us about your requirement..." />
            </div>
          </div>

          <Button type="submit" variant="hero" size="lg" disabled={loading} className="mt-8 w-full sm:w-auto">
            <Send className="h-4 w-4" />
            {loading ? "Sending..." : "Send Inquiry"}
          </Button>
        </form>
      </div>
    </section>
  );
}