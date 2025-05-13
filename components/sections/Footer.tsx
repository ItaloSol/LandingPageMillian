'use client';

import { Award, Shield, Sparkles, Users } from "lucide-react";
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
          <div className="flex items-center ">
        <Image 
          src="/logo.png" 
          alt="Millian Cosméticos Logo" 
          width={48} 
          height={48} 
          className="h-12 mb-6"
          priority
        />
            <h3 className="text-xl font-bold mb-4">Millian Cosméticos</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Elevar a autoestima da mulher moderna com soluções capilares seguras e de alta performance.
            </p>
            <div className="flex items-center gap-2 text-pink-400">
              <Award className="w-5 h-5" />
              <span>+5 anos no mercado</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Nossos Valores</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-pink-400" />
                <span className="text-gray-300">Inovação e tecnologia</span>
              </li>
              <li className="flex items-center gap-2">
                <Award className="w-5 h-5 text-pink-400" />
                <span className="text-gray-300">Qualidade profissional</span>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-pink-400" />
                <span className="text-gray-300">Respeito e segurança</span>
              </li>
              <li className="flex items-center gap-2">
                <Users className="w-5 h-5 text-pink-400" />
                <span className="text-gray-300">Profissionais e clientes satisfeitos em todo o país</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-3 text-gray-300">
              <p>WhatsApp: (21) 99741-3052</p>
              <p>Horário: Seg-Sex, 9h às 18h</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="space-y-3">
              <a target="_blank" rel="noopener" href="#" className="flex items-center gap-2 text-gray-300 hover:text-pink-400 transition-colors">
                <span>Instagram</span>
              </a>
              <a target="_blank" rel="noopener" href="#" className="flex items-center gap-2 text-gray-300 hover:text-pink-400 transition-colors">
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Millian Cosméticos. Todos os direitos reservados.
            <br />
            Desenvolvido por <a href="#" className="text-pink-400 hover:text-pink-300 transition-colors" target="_blank" rel="noopener noreferrer">landingpagecraft</a>
          </p>
        </div>
      </div>
    </footer>
  );
}