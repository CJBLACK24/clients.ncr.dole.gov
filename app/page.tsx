"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { EfilingShowcase } from "@/components/sections/efiling-showcase";
import { PortalsSection } from "@/components/sections/portals";
import { ServicesSection } from "@/components/sections/services";
import { FieldOfficesSection } from "@/components/sections/field-offices";
import { CareersSection } from "@/components/sections/careers";
import { AboutSection } from "@/components/sections/about";
import { GallerySection } from "@/components/sections/gallery";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background transition-colors duration-500">
      <Navbar />
      <HeroSection />
      <EfilingShowcase />
      <PortalsSection />
      <ServicesSection />
      <FieldOfficesSection />
      <CareersSection />
      <AboutSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}

