import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { About } from "@/components/site/About";
import { Brands } from "@/components/site/Brands";
import { Catalogue } from "@/components/site/Catalogue";
import { Brochures } from "@/components/site/Brochures";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

const Index = () => (
  <div id="top" className="min-h-screen bg-background">
    <Navbar />
    <main>
      <Hero />
      <Stats />
      <About />
      <Brands />
      <Catalogue />
      <Brochures />
      <Services />
      <WhyUs />
      <Contact />
    </main>
    <Footer />
    <FloatingWhatsApp />
  </div>
);

export default Index;
