'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, Timer, Truck, ShoppingBag, ArrowRight } from "lucide-react";

interface CTAFinalProps {
  visibleSections: Set<string>;
  onWhatsAppClick: () => void;
}

export function CTAFinal({ visibleSections, onWhatsAppClick }: CTAFinalProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(current => {
        if (current.hours === 0 && current.minutes === 0 && current.seconds === 0) {
          clearInterval(timer);
          return current;
        }

        let newSeconds = current.seconds - 1;
        let newMinutes = current.minutes;
        let newHours = current.hours;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        return {
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="cta" className={`py-20 px-4 bg-gradient-to-b from-pink-50 to-white fade-in ${visibleSections.has('cta') ? 'visible' : ''}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="bg-pink-100 text-pink-800 text-lg mb-6 animate-pulse">
            Oferta Especial de Lançamento
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-pink-800">
            30% OFF + Frete Grátis
          </h2>
          
          <div className="inline-flex items-center justify-center gap-3 bg-pink-50 px-6 py-3 rounded-full mb-8">
            <Timer className="w-6 h-6 text-pink-600" />
            <p className="text-xl font-semibold">
              Promoção termina em:{' '}
              <span className="text-pink-600 tabular-nums">
                {String(timeLeft.hours).padStart(2, '0')}:
                {String(timeLeft.minutes).padStart(2, '0')}:
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-4 transform hover:scale-105 transition-transform duration-300">
            <div className="bg-pink-100 p-3 rounded-full">
              <Truck className="w-8 h-8 text-pink-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Frete Grátis</h3>
              <p className="text-gray-600">Entrega para todo o Brasil</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-4 transform hover:scale-105 transition-transform duration-300">
            <div className="bg-pink-100 p-3 rounded-full">
              <Gift className="w-8 h-8 text-pink-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Bônus Exclusivo</h3>
              <p className="text-gray-600">E-book de cuidados capilares</p>
            </div>
          </div>
        </div>

        <div className="text-center space-y-6">
          <div className="flex flex-col items-center gap-4">
            <Button 
              size="lg" 
              className="cta-button group bg-pink-600 hover:bg-pink-700 text-white px-8 py-8 text-xl rounded-full shadow-lg hover:shadow-xl transition-all w-full md:w-auto"
              onClick={onWhatsAppClick}
            >
              <ShoppingBag className="w-6 h-6 mr-2" />
              Quero Meu Kit Scandal Agora
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
            
            <p className="text-pink-700 font-medium">
              Garanta o seu com 30% de desconto!
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <Timer className="w-4 h-4" />
            <p>Oferta por tempo limitado, sujeita à disponibilidade do estoque</p>
          </div>
        </div>
      </div>
    </section>
  );
}