import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { WindowTypes } from "@/components/sections/WindowTypes";
import { WhyUs } from "@/components/sections/WhyUs";
import { FormSection } from "@/components/sections/FormSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Benefits />
      <WindowTypes />
      <WhyUs />
      <FormSection />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
