// app/layout.tsx

import type { Metadata, Viewport } from 'next';
import React from 'react';
import { Header } from './componenets/layout/Header';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'John Doe - Full Stack Developer',
  description: 'Premium portfolio of a full stack developer building exceptional digital experiences',
  keywords: ['developer', 'portfolio', 'next.js', 'react', 'typescript'],
  authors: [{ name: 'John Doe' }],
  openGraph: {
    title: 'John Doe - Full Stack Developer',
    description: 'Premium portfolio of a full stack developer',
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'John Doe Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Doe - Full Stack Developer',
    description: 'Premium portfolio of a full stack developer',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://yourdomain.com',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'dark',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Font loading optimization */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white antialiased">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded"
        >
          Skip to main content
        </a>

      {/* Header */}
      <Header />

      {/* Main content */}
      <main id="main" className="relative overflow-hidden">
        {children}
      </main>
    </body>
    </html >
  );
}