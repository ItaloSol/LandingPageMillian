'use client';

import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Instagram } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface InstagramReelsProps {
  visibleSections: Set<string>;
}

export function InstagramReels({ visibleSections }: InstagramReelsProps) {
  const [isLoading, setIsLoading] = useState(true);

  const reels = [
   
    {
      id: "DIwmP6Yy-GU",
      url: "https://www.instagram.com/millianoficial/reel/DIwmP6Yy-GU/",
      embedUrl: "https://www.instagram.com/reel/DIwmP6Yy-GU/embed",
    },
    {
      id: "DGGjOE9PSEz",
      url: "https://www.instagram.com/millianoficial/reel/DGGjOE9PSEz/",
      embedUrl: "https://www.instagram.com/reel/DGGjOE9PSEz/embed",
    },
    {
      id: "DDstsakR41G",
      url: "https://www.instagram.com/4leporto/reel/DDstsakR41G/",
      embedUrl: "https://www.instagram.com/reel/DDstsakR41G/embed",
    }
  ];

  return (
    <section id="instagram-reels" className={`py-16 px-4 bg-gradient-to-b from-white to-pink-50 fade-in ${visibleSections.has('instagram-reels') ? 'visible' : ''}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="bg-pink-100 text-pink-800 mb-4">
            <Instagram className="w-4 h-4 mr-2" />
            @millian.cosmeticos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Resultados Reais do Kit Scandal
          </h2>
          <p className="text-lg text-gray-600">
            Veja transformações incríveis em cabelos reais
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reels.map((reel, index) => (
            <Card 
              key={reel.id}
              className={`overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 card-animation ${visibleSections.has('instagram-reels') ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative w-full pt-[177.78%]">
                <iframe
                  src={reel.embedUrl}
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                />
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <a 
            href="https://www.instagram.com/millian.cosmeticos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span className="font-medium">Siga-nos no Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}