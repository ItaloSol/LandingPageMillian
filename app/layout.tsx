import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kit Progressiva Sem Formol Scandal | Millian Cosméticos',
  description: 'Kit profissional para alisamento sem formol com fragrância exclusiva. Inclui Progressiva Scandal (1L), Máscara de Nutrição (500ml) e Óleo Reparador. Resultados duradouros e cabelos saudáveis.',
  keywords: 'progressiva sem formol, alisamento seguro, kit profissional, tratamento capilar, Millian Cosméticos, Scandal, hidratação capilar',
  authors: [{ name: 'Millian Cosméticos' }],
  openGraph: {
    title: 'Kit Progressiva Sem Formol Scandal | Millian Cosméticos',
    description: 'Kit profissional para alisamento sem formol com fragrância exclusiva. Resultados duradouros e cabelos saudáveis.',
    images: [
      {
        url: '/scandal-kit.webp',
        width: 1200,
        height: 630,
        alt: 'Kit Progressiva Sem Formol Scandal'
      }
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kit Progressiva Sem Formol Scandal | Millian Cosméticos',
    description: 'Kit profissional para alisamento sem formol com fragrância exclusiva. Resultados duradouros e cabelos saudáveis.',
    images: ['/scandal-kit.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="canonical" href="https://milliancosmetico.web.app/" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}