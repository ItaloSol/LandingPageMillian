'use client';

import { Star, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SocialProofProps {
  visibleSections: Set<string>;
}

export function SocialProof({ visibleSections }: SocialProofProps) {
  return (
    <section id="social-proof" className={`bg-white py-16 px-4 fade-in ${visibleSections.has('social-proof') ? 'visible' : ''}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Mais de 1.500 kits vendidos em nosso lançamento!
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Milhares de clientes satisfeitas já comprovaram resultado profissional em casa
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-pink-50 rounded-lg">
            <div className="text-4xl font-bold text-pink-600 mb-2">1500+</div>
            <p className="text-gray-700">Kits vendidos</p>
          </div>
          <div className="text-center p-6 bg-pink-50 rounded-lg">
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-pink-600 fill-current" />
              ))}
            </div>
            <p className="text-gray-700">4.9/5 de avaliação</p>
          </div>
          <div className="text-center p-6 bg-pink-50 rounded-lg">
            <div className="text-4xl font-bold text-pink-600 mb-2">98%</div>
            <p className="text-gray-700">Clientes satisfeitas</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-b from-white to-pink-50 p-8 rounded-2xl">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-pink-800">Progressiva Scandal</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <Star className="w-5 h-5 text-pink-600" />
                  Alisamento profissional sem formol
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <Star className="w-5 h-5 text-pink-600" />
                  Resultados duradouros
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <Star className="w-5 h-5 text-pink-600" />
                  Fragrância exclusiva
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-b from-white to-pink-50 p-8 rounded-2xl">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-pink-800">Máscara Scandal</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <Star className="w-5 h-5 text-pink-600" />
                  Nutrição e brilho intenso
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <Star className="w-5 h-5 text-pink-600" />
                  Hidratação profunda
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <Star className="w-5 h-5 text-pink-600" />
                  Recuperação dos fios
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-b from-white to-pink-50 p-8 rounded-2xl">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-pink-800">Óleo Reparador</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <Star className="w-5 h-5 text-pink-600" />
                  Nutrição e reparação profunda
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <Star className="w-5 h-5 text-pink-600" />
                  Proteção térmica e solar
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <Star className="w-5 h-5 text-pink-600" />
                  Controle do frizz
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-3 p-6 bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg">
          <ShieldCheck className="w-8 h-8 text-pink-600" />
          <div className="text-center">
            <Badge variant="secondary" className="bg-white text-pink-600 mb-2">Garantia Millian</Badge>
            <p className="text-gray-700 font-medium">Satisfação ou devolução em 7 dias</p>
          </div>
        </div>
      </div>
    </section>
  );
}