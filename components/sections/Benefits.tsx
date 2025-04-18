'use client';

import { Card } from "@/components/ui/card";
import { Star, Shield, Sparkles, Heart } from "lucide-react";
import { useEffect, useRef } from "react";

interface BenefitsProps {
  visibleSections: Set<string>;
}

export function Benefits({ visibleSections }: BenefitsProps) {
  const benefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    const cards = benefitsRef.current?.querySelectorAll('.benefit-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const benefits = [
    { 
      icon: Shield, 
      title: "Alisamento Seguro", 
      desc: "Sem formol: liso duradouro e sem danos" 
    },
    { 
      icon: Sparkles, 
      title: "Hidratação Intensa", 
      desc: "Fios macios, sedosos e sem ressecamento" 
    },
    { 
      icon: Star, 
      title: "Brilho e Proteção", 
      desc: "Camada protetora que realça o reflexo natural" 
    },
    { 
      icon: Heart, 
      title: "Perfume Scandal", 
      desc: "Fragrância sofisticada que exala elegância" 
    }
  ];

  return (
    <section id="benefits" className="py-16 px-4 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 fade-in ${visibleSections.has('benefits') ? 'visible' : ''}`}>
          Transforme seus cabelos com o poder do Kit Scandal
        </h2>
        <div ref={benefitsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="benefit-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              style={{ 
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className="flex flex-col items-center">
                <benefit.icon 
                  className="benefit-icon w-12 h-12 text-pink-600 mb-4"
                  style={{ 
                    transitionDelay: `${(index * 150) + 300}ms`
                  }}
                />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}