'use client';

import { useState, useEffect } from "react";
import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { ProductPresentation } from "@/components/sections/ProductPresentation";
import { Benefits } from "@/components/sections/Benefits";
import { SocialProof } from "@/components/sections/SocialProof";
import { InstagramReels } from "@/components/sections/InstagramReels";
import { FAQ } from "@/components/sections/FAQ";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import Head from 'next/head';

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => {
              const newSet = new Set(prev);
              newSet.add(entry.target.id as string);
              return newSet;
            });
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
    window.open('https://wa.me/21997413052?text=Olá! Gostaria de saber mais sobre o Kit Progressiva Sem Formol Scandal', '_blank');
  };

  return (
    <>
      {/* Fixed transparent modal for overdue payment warning */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 9999,
        background: 'rgba(255,255,255,0.85)',
        boxShadow: '0 2px 16px 0 rgba(0,0,0,0.08)',
        backdropFilter: 'blur(2px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 8px 16px 8px',
        pointerEvents: 'none',
        animation: 'floatDown 2s cubic-bezier(0.23, 1, 0.32, 1)'
      }}>
        <div style={{
          maxWidth: 480,
          width: '100%',
          textAlign: 'center',
          color: '#b91c1c',
          fontWeight: 600,
          fontFamily: 'inherit',
          background: 'rgba(255,255,255,0.95)',
          borderRadius: 12,
          border: '1px solid #fca5a5',
          boxShadow: '0 2px 8px 0 rgba(185,28,28,0.08)',
          padding: '16px 20px',
          pointerEvents: 'auto',
        }}>
          <h2 style={{fontSize: '1.5rem', marginBottom: 8}}>Aviso de Pagamento em Atraso!</h2>
          <p style={{fontSize: '1rem', marginBottom: 4}}>O projeto possui pendências financeiras que devem ser quitadas.</p>
          <p style={{fontSize: '1rem'}}>Por favor, regularize o pagamento para restaurar o serviço.</p>
        </div>
        <style>{`@keyframes floatDown {0%{transform:translateY(-40px);opacity:0;}100%{transform:translateY(0);opacity:1;}}`}</style>
      </div>
      <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white" itemScope itemType="https://schema.org/Product">
        <meta itemProp="name" content="Kit Progressiva Sem Formol Scandal" />
        <meta itemProp="description" content="Kit profissional para alisamento sem formol com fragrância exclusiva. Inclui Progressiva Scandal (1L), Máscara de Nutrição (500ml) e Óleo Reparador." />
        <meta itemProp="brand" content="Millian Cosméticos" />
        <meta itemProp="sku" content="KIT-SCANDAL-001" />
        
        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <meta itemProp="price" content="150.00" />
          <meta itemProp="priceCurrency" content="BRL" />
          <meta itemProp="availability" content="https://schema.org/InStock" />
        </div>

        <Hero visibleSections={visibleSections} onWhatsAppClick={handleWhatsAppClick} />
        <PainPoints visibleSections={visibleSections} />
        <ProductPresentation visibleSections={visibleSections} />
        <InstagramReels visibleSections={visibleSections} />
        <Benefits visibleSections={visibleSections} />
        <SocialProof visibleSections={visibleSections} />
        <FAQ visibleSections={visibleSections} />
        <CTAFinal visibleSections={visibleSections} onWhatsAppClick={handleWhatsAppClick} />
        <Footer />
        <WhatsAppWidget onClick={handleWhatsAppClick} />
      </main>
    </>
  );
}