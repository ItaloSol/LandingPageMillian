'use client';

import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  visibleSections: Set<string>;
}

export function FAQ({ visibleSections }: FAQProps) {
  const faqs = [
    {
      question: "É indicado para todos os tipos de cabelo?",
      answer: "Sim! Nossa fórmula é compatível com qualquer química e curvaturas. O Kit Scandal foi desenvolvido para atender todos os tipos de cabelo, desde os mais finos até os mais grossos e resistentes. A fórmula sem formol garante segurança para cabelos com química, descoloridos ou naturais."
    },
    {
      question: "Quanto tempo dura o efeito liso?",
      answer: "O efeito liso da Progressiva Scandal dura até 3 meses com a manutenção adequada. Para melhores resultados, recomendamos usar a Máscara de Nutrição semanalmente e o Óleo Reparador diariamente, o que ajuda a prolongar o efeito liso e manter os fios saudáveis e alinhados por mais tempo."
    },
    {
      question: "Como devo aplicar o Óleo Reparador?",
      answer: "Aplique 1 a 3 gotas do óleo nas palmas das mãos, dependendo do comprimento e volume do cabelo. Espalhe nos fios úmidos ou secos, focando principalmente nas pontas. Pode ser usado diariamente, não precisa enxaguar. Para proteção térmica, aplique antes de usar secador ou chapinha. Dica: use em conjunto com a máscara para potencializar os resultados."
    },
    {
      question: "Quais os benefícios da Máscara de Nutrição?",
      answer: "A Máscara de Nutrição Scandal oferece hidratação profunda, recupera a maciez, sela as cutículas e proporciona brilho intenso. Além disso, ajuda a prolongar o efeito liso da progressiva e deixa os fios com a fragrância exclusiva Scandal. Pode ser usada semanalmente ou sempre que os cabelos precisarem de nutrição extra."
    },
    {
      question: "O Kit oferece proteção térmica?",
      answer: "Sim! O Óleo Reparador Scandal possui proteção térmica e solar, sendo ideal para quem usa secador, chapinha ou se expõe ao sol com frequência. Ele forma uma camada protetora nos fios, prevenindo danos causados pelo calor dos equipamentos e pela radiação solar, além de controlar o frizz e proporcionar brilho intenso."
    },
    {
      question: "Como é a fragrância Scandal?",
      answer: "A fragrância Scandal é uma essência sofisticada e marcante, inspirada em perfumes de luxo. Com notas sensuais e elegantes, ela permanece nos fios por muito tempo, proporcionando uma experiência olfativa única. Todos os produtos do kit compartilham essa fragrância exclusiva, garantindo cabelos perfumados e irresistíveis."
    },
    {
      question: "Qual o prazo de entrega?",
      answer: "Realizamos o envio em até 24h após a confirmação do pagamento, com frete grátis para todo o Brasil. O prazo de entrega varia de acordo com a região, mas geralmente é de 3 a 7 dias úteis. Você receberá o código de rastreamento assim que o pedido for despachado."
    },
    {
      question: "Tem garantia?",
      answer: "Sim! Oferecemos garantia de satisfação de 7 dias. Se você não ficar satisfeita com os resultados, devolvemos seu dinheiro. Nossa prioridade é sua satisfação e a qualidade dos nossos produtos."
    }
  ];

  return (
    <section id="faq" className={`py-16 px-4 bg-pink-50 fade-in ${visibleSections.has('faq') ? 'visible' : ''}`}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-gray-600 text-lg">
            Tire suas dúvidas sobre o Kit Scandal
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index + 1}`}
              className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 card-animation ${visibleSections.has('faq') ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="px-6 py-4 text-left">
                <div className="flex items-center justify-between w-full">
                  <span className="text-lg font-medium">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-pink-600 shrink-0 transition-transform duration-200" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="pt-2 text-gray-600">
                  {faq.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Ainda tem dúvidas? Entre em contato conosco pelo WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
}