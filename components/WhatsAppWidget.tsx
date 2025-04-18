'use client';

import { MessageCircle } from "lucide-react";

interface WhatsAppWidgetProps {
  onClick: () => void;
}

export function WhatsAppWidget({ onClick }: WhatsAppWidgetProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 group"
      aria-label="Abrir WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
    </button>
  );
}