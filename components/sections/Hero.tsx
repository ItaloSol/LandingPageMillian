'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, Award } from 'lucide-react';
import Image from 'next/image';
interface HeroProps {
  visibleSections: Set<string>;
  onWhatsAppClick: () => void;
}

export function Hero({ visibleSections, onWhatsAppClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
      style={{
        backgroundImage: "url('/smoke.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'screen',

      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-50/90 to-white/90 z-0" />

      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div
          className={`text-center md:text-left fade-in ${
            visibleSections.has('hero') ? 'visible' : ''
          }`}
        >
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
            <Badge
              variant="secondary"
              className="bg-pink-100 text-pink-800 flex items-center gap-1"
            >
              <ShieldCheck className="w-4 h-4" />
              Sem Formol
            </Badge>
            <Badge
              variant="secondary"
              className="bg-pink-100 text-pink-800 flex items-center gap-1"
            >
              <Award className="w-4 h-4" />
              Uso Profissional
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Transforme Seus Fios: Liso Perfeito e Nutrição Profunda em Um Só Kit
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Kit Progressiva Sem Formol Scandal (1L) + Máscara de Nutrição (500
            ml) para cabelos disciplinados, brilhosos e com fragrância
            exclusiva.
          </p>

          <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-4 rounded-lg mb-8 backdrop-blur-sm">
            <p className="text-pink-800 font-medium flex items-center justify-center md:justify-start gap-2">
              <span className="text-pink-600">✨</span>
              Fórmula Inovadora com Fragrância Scandal
            </p>
          </div>

          <Button
            size="lg"
            className="cta-button bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            onClick={onWhatsAppClick}
          >
            Quero meu Kit com 30% OFF!
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-pink-100/20 to-transparent rounded-full filter blur-xl"></div>
          <div className="float-animation relative">
            <Image
              src="/scandal-kit.webp"
              alt="Kit Progressiva Sem Formol Scandal"
              width={500}
              height={500}
              className="w-full max-w-md mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}