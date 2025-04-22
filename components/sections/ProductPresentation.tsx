'use client';

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Shield, SprayCan as Spray, Droplets, Heart, Star, Package, ShoppingCart, Sun, Flame } from "lucide-react";
import Image from 'next/image';

interface ProductPresentationProps {
  visibleSections: Set<string>;
}

export function ProductPresentation({ visibleSections }: ProductPresentationProps) {
  return (
    <section id="product-presentation" className={`py-8 md:py-16 px-4 bg-white fade-in ${visibleSections.has('product-presentation') ? 'visible' : ''}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            O duo perfeito para alinhar, nutrir e perfumar cada fio
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Tecnologia avançada que combina alisamento seguro e tratamento profundo
          </p>
        </div>

        {/* Kit Completo Card */}
        <Card className="p-4 md:p-8 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden mb-8 md:mb-12">
          <div className="absolute -right-12 top-6 rotate-45 bg-pink-600 text-white py-1 px-12 text-sm font-semibold z-10">
            Mais Vendido
          </div>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-pink-100/20 to-transparent rounded-full filter blur-xl"></div>
              <div className="float-animation relative">
                <Image
                  src="/scandal-kit.webp"
                  alt="Kit Progressiva Sem Formol Scandal"
                  width={500}
                  height={500}
                  className="w-full max-w-[300px] mx-auto md:max-w-md"
                  priority
                />
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Package className="w-6 h-6 md:w-8 md:h-8 text-pink-600" />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Kit Completo Scandal</h3>
                </div>
                <div className="text-left md:text-right">
                  <div className="text-sm text-gray-500 line-through">R$ 199,00</div>
                  <div className="text-2xl md:text-3xl font-bold text-pink-600">R$ 150,00</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Spray className="w-5 h-5 md:w-6 md:h-6 text-pink-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Progressiva Sem Formol (1L)</p>
                    <p className="text-sm md:text-base text-gray-600">Alisa com segurança, mantendo a saúde dos fios</p>
                    <p className="text-sm text-pink-600 font-medium mt-1">R$ 99,00 separadamente</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-pink-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Máscara de Nutrição (500ml)</p>
                    <p className="text-sm md:text-base text-gray-600">Hidratação profunda e brilho intenso</p>
                    <p className="text-sm text-pink-600 font-medium mt-1">R$ 40,00 separadamente</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Droplets className="w-5 h-5 md:w-6 md:h-6 text-pink-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Óleo Reparador Scandal (50ml)</p>
                    <p className="text-sm md:text-base text-gray-600">Nutrição profunda e proteção térmica</p>
                    <p className="text-sm text-pink-600 font-medium mt-1">R$ 30,00 separadamente</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 md:gap-4 p-3 md:p-4 bg-pink-50 rounded-lg text-sm md:text-base">
                <div className="text-center">
                  <p className="font-semibold text-pink-800">Duração</p>
                  <p className="text-gray-700">Até 3 meses</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-pink-800">Rendimento</p>
                  <p className="text-gray-700">3 aplicações</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-pink-800">Compatível</p>
                  <p className="text-gray-700">Todo cabelo</p>
                </div>
              </div>

              <Button 
                size="lg"
                className="w-full min-h-[44px] bg-pink-600 hover:bg-pink-700 text-white py-4 md:py-6 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all group"
                onClick={() => window.open('https://wa.me/21997413052?text=Olá! Gostaria de comprar o Kit Completo Scandal', '_blank')}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Comprar Kit Completo com 30% OFF
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>

              <div className="flex items-center justify-between border-t pt-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-pink-600 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">4.9/5</span>
                </div>
                <Badge variant="secondary" className="bg-pink-100 text-pink-800">
                  Satisfação Garantida
                </Badge>
              </div>
            </div>
          </div>
        </Card>

        {/* Individual Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 md:mb-12">
          {/* Progressiva Card */}
          <Card className="p-4 md:p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="relative mb-4 md:mb-6">
              <div className="absolute inset-0 bg-gradient-to-b from-pink-100/20 to-transparent rounded-full filter blur-xl"></div>
              <Image
                src="/progressiva-scandal.webp"
                alt="Progressiva Sem Formol Scandal"
                width={400}
                height={400}
                className="w-full h-40 md:h-48 object-contain"
              />
            </div>
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-gray-900">Progressiva Sem Formol</h3>
              <p className="text-xl md:text-2xl font-bold text-pink-600">R$ 99,00</p>
              <p className="text-sm md:text-base text-gray-600">Alisa com segurança, mantendo a saúde dos fios</p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-pink-600" />
                  <span className="text-sm text-gray-700">1L - Uso Profissional</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-pink-600" />
                  <span className="text-sm text-gray-700">Fragrância exclusiva</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-pink-600" />
                  <span className="text-sm text-gray-700">Proteção térmica</span>
                </div>
              </div>

              <Button 
                className="w-full min-h-[44px] bg-pink-600 hover:bg-pink-700 text-white flex items-center justify-center gap-2 py-3" 
                onClick={() => window.open('https://wa.me/21997413052?text=Olá! Gostaria de comprar a Progressiva Sem Formol Scandal', '_blank')}
              >
                <ShoppingCart className="w-5 h-5" />
                Comprar Agora
              </Button>
            </div>
          </Card>

          {/* Máscara Card */}
          <Card className="p-4 md:p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="relative mb-4 md:mb-6">
              <div className="absolute inset-0 bg-gradient-to-b from-pink-100/20 to-transparent rounded-full filter blur-xl"></div>
              <Image
                src="/mascara-scandal.webp"
                alt="Máscara de Nutrição Scandal"
                width={400}
                height={400}
                className="w-full h-40 md:h-48 object-contain"
              />
            </div>
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-gray-900">Máscara de Nutrição</h3>
              <p className="text-xl md:text-2xl font-bold text-pink-600">R$ 40,00</p>
              <p className="text-sm md:text-base text-gray-600">Hidratação profunda e brilho intenso</p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-pink-600" />
                  <span className="text-sm text-gray-700">500ml - Nutrição Profunda</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-pink-600" />
                  <span className="text-sm text-gray-700">Hidratação intensa</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-pink-600" />
                  <span className="text-sm text-gray-700">Ação antifrizz</span>
                </div>
              </div>

              <Button 
                className="w-full min-h-[44px] bg-pink-600 hover:bg-pink-700 text-white flex items-center justify-center gap-2 py-3" 
                onClick={() => window.open('https://wa.me/21997413052?text=Olá! Gostaria de comprar a Máscara de Nutrição Scandal', '_blank')}
              >
                <ShoppingCart className="w-5 h-5" />
                Comprar Agora
              </Button>
            </div>
          </Card>

          {/* Óleo Reparador Card */}
          <Card className="p-4 md:p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="relative mb-4 md:mb-6">
              <div className="absolute inset-0 bg-gradient-to-b from-pink-100/20 to-transparent rounded-full filter blur-xl"></div>
              <Image
                src="/oleo-scandal.webp"
                alt="Óleo Reparador Scandal"
                width={400}
                height={400}
                className="w-full h-40 md:h-48 object-contain"
              />
            </div>
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-gray-900">Óleo Reparador Scandal</h3>
              <p className="text-xl md:text-2xl font-bold text-pink-600">R$ 30,00</p>
              <p className="text-sm md:text-base text-gray-600">Nutrição profunda com fragrância exclusiva</p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-pink-600" />
                  <span className="text-sm text-gray-700">Reparação e brilho intenso</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-pink-600" />
                  <span className="text-sm text-gray-700">Ação antifrizz</span>
                </div>
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-pink-600" />
                  <span className="text-sm text-gray-700">Proteção térmica</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sun className="w-4 h-4 text-pink-600" />
                  <span className="text-sm text-gray-700">Proteção solar</span>
                </div>
              </div>

              <Button 
                className="w-full min-h-[44px] bg-pink-600 hover:bg-pink-700 text-white flex items-center justify-center gap-2 py-3" 
                onClick={() => window.open('https://wa.me/21997413052?text=Olá! Gostaria de comprar o Óleo Reparador Scandal', '_blank')}
              >
                <ShoppingCart className="w-5 h-5" />
                Comprar Agora
              </Button>
            </div>
          </Card>
        </div>

        <div className="mt-8 md:mt-12 text-center space-y-3 md:space-y-4">
          <Badge variant="secondary" className="bg-gradient-to-r from-pink-500 to-pink-700 text-white text-base md:text-lg px-4 md:px-6 py-2 shadow-md hover:shadow-lg transition-all animate-pulse">
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
              Resultados desde a primeira aplicação
            </span>
          </Badge>
          <p className="text-sm text-gray-600">Aproveite 30% OFF por tempo limitado!</p>
        </div>
      </div>
    </section>
  );
}