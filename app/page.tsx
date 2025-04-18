'use client';

import { useState, useEffect } from "react";
import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { ProductPresentation } from "@/components/sections/ProductPresentation";
import { Benefits } from "@/components/sections/Benefits";
import { SocialProof } from "@/components/sections/SocialProof";
import { FAQ } from "@/components/sections/FAQ";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(Array.from(prev).concat(entry.target.id as string)));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/seunumero?text=Olá! Gostaria de saber mais sobre o Kit Progressiva Sem Formol Scandal', '_blank');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Hero visibleSections={visibleSections} onWhatsAppClick={handleWhatsAppClick} />
      <PainPoints visibleSections={visibleSections} />
      <ProductPresentation visibleSections={visibleSections} />
      <Benefits visibleSections={visibleSections} />
      <SocialProof visibleSections={visibleSections} />
      <FAQ visibleSections={visibleSections} />
      <CTAFinal visibleSections={visibleSections} onWhatsAppClick={handleWhatsAppClick} />
      <Footer />
      <WhatsAppWidget onClick={handleWhatsAppClick} />
    </main>
  );
}