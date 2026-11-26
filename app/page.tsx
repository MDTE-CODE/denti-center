import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";

import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SpecialistsSection } from "@/components/sections/SpecialistsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { BookingSection } from "@/components/sections/BookingSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <TrustSection />
        <ServicesSection />
        <AboutSection />
        <SpecialistsSection />
        <TestimonialsSection />
        <WhyUsSection />
        <ProcessSection />
        <FAQSection />
        <BookingSection />
        <ContactSection />
      </main>

      <Footer />

      <FloatingActions />
    </>
  );
}
