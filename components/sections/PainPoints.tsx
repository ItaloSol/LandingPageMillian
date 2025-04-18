'use client';

import { AlertCircle, XCircle, CheckCircle } from "lucide-react";

interface PainPointsProps {
  visibleSections: Set<string>;
}

export function PainPoints({ visibleSections }: PainPointsProps) {
  return (
    <section id="pain-points" className={`bg-white py-16 px-4 fade-in ${visibleSections.has('pain-points') ? 'visible' : ''}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Cansada de produtos que prometem liso e deixam seu cabelo rígido, ressecado e sem brilho?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Sabemos como é frustrante investir tempo e dinheiro em tratamentos que não cumprem o que prometem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-pink-50 rounded-2xl p-6 space-y-4">
            <div className="flex items-start gap-3">
              <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Produtos que ressecam e danificam seus fios</p>
            </div>
            <div className="flex items-start gap-3">
              <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Frizz persistente e cabelos indisciplinados</p>
            </div>
            <div className="flex items-start gap-3">
              <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Resultados temporários que não valem o investimento</p>
            </div>
          </div>

          <div className="bg-green-50 rounded-2xl p-6 space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Alisamento seguro e duradouro sem formol</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Hidratação profunda que mantém os fios saudáveis</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Fragrância exclusiva que permanece nos fios</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-2xl font-semibold text-gray-900">
            Chega de frizz, quebra e fios indisciplinados: descubra o poder da tecnologia sem formol da Millian.
          </p>
        </div>
      </div>
    </section>
  );
}