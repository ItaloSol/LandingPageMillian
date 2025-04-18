'use client';

import { AlertCircle, XCircle, CheckCircle, Shield, Sparkles, Clock, Flame, Sun, Heart } from "lucide-react";

interface PainPointsProps {
  visibleSections: Set<string>;
}

export function PainPoints({ visibleSections }: PainPointsProps) {
  const painPoints = [
    "Cabelos extremamente rebeldes e difíceis de alisar",
    "Frizz intenso que dificulta o dia a dia",
    "Danos causados por químicas agressivas",
    "Cabelos ressecados e sem vida",
    "Falta de praticidade na rotina capilar",
    "Medo de produtos com formol",
    "Resultados temporários que não compensam"
  ];

  const solutions = [
    {
      title: "Progressiva Scandal",
      benefits: [
        { icon: Shield, text: "Alisamento seguro e sem formol" },
        { icon: Clock, text: "Resultados duradouros por até 4 meses" },
        { icon: Heart, text: "Fragrância exclusiva que elimina odores químicos" }
      ]
    },
    {
      title: "Máscara Scandal",
      benefits: [
        { icon: Sparkles, text: "Nutrição profunda que revitaliza os fios" },
        { icon: Heart, text: "Hidratação intensa para cabelos ressecados" },
        { icon: Sparkles, text: "Recuperação da maciez e brilho natural" }
      ]
    },
    {
      title: "Óleo Reparador",
      benefits: [
        { icon: Flame, text: "Proteção térmica contra danos" },
        { icon: Sun, text: "Barreira contra raios UV e poluição" },
        { icon: Shield, text: "Controle do frizz por 72 horas" }
      ]
    }
  ];

  return (
    <section id="pain-points" className={`bg-white py-16 px-4 fade-in ${visibleSections.has('pain-points') ? 'visible' : ''}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Cansada de produtos que não cumprem o que prometem?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Entendemos suas frustrações com tratamentos capilares que não entregam resultados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-pink-50 rounded-2xl p-6 space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Desafios Comuns</h3>
            {painPoints.map((point, index) => (
              <div 
                key={index} 
                className={`flex items-start gap-3 pain-point-animation ${visibleSections.has('pain-points') ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>

          <div className="bg-green-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Nossa Solução</h3>
            <div className="space-y-6">
              {solutions.map((solution, solutionIndex) => (
                <div 
                  key={solutionIndex}
                  className={`space-y-3 solution-animation ${visibleSections.has('pain-points') ? 'visible' : ''}`}
                  style={{ animationDelay: `${(solutionIndex + painPoints.length) * 0.1}s` }}
                >
                  <h4 className="font-medium text-gray-900">{solution.title}</h4>
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <div 
                      key={benefitIndex}
                      className={`flex items-start gap-3 solution-animation ${visibleSections.has('pain-points') ? 'visible' : ''}`}
                      style={{ animationDelay: `${(solutionIndex + painPoints.length + benefitIndex) * 0.1}s` }}
                    >
                      <benefit.icon className="w-5 h-5 text-green-600 flex-shrink-0 mt-1 icon-animation" />
                      <p className="text-gray-700">{benefit.text}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl font-semibold text-gray-900">
            Transforme seus cabelos com a tecnologia inovadora da linha Scandal
          </p>
          <p className="text-lg text-gray-600 mt-4">
            Resultados profissionais e duradouros, com a segurança que você merece
          </p>
        </div>
      </div>
    </section>
  );
}