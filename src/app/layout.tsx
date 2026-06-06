// app/layout.tsx

import type { Metadata, Viewport } from 'next';
import React from 'react';
import { Header } from './componenets/layout/Header';
import '@/app/globals.css';
import { Footer } from './componenets/layout/Footer';

export const metadata: Metadata = {
  title: 'Danyal Lotfi - Full Stack Developer',
  description: 'Full stack developer specializing in React, Next.js, and TypeScript. Building exceptional digital experiences with modern technologies',
  keywords: [
    'developer',
    'full stack developer',
    'portfolio',
    'next.js',
    'react',
    'typescript',
    'web development',
    'hamburg',
    'frontend',
    'backend',
    "software engineer",
    "programmer",
    "web designer",
    "ui/ux designer",
    "danyal lotfi",
    "Danyal Lotfi",
  ],
  authors: [{ name: 'Danyal Lotfi', url: 'https://danyal-lotfi-dev-portfolio.vercel.app/' }],
  creator: 'Danyal Lotfi',
  publisher: 'Danyal Lotfi',

  openGraph: {
    title: 'Danyal Lotfi - Full Stack Developer',
    description: 'Building exceptional digital experiences with modern technologies. React • Next.js • TypeScript',
    type: 'website',
    locale: 'en_US',
    url: 'https://danyal-lotfi-dev-portfolio.vercel.app/',
    siteName: 'Danyal Lotfi',
    images: [
      {
        url: 'https://danyal-lotfi-dev-portfolio.vercel.app/images/og-picture.png',
        width: 630,
        height: 700,
        alt: 'Danyal Lotfi - Full Stack Developer',
        type: 'image/png',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Danyal Lotfi - Full Stack Developer',
    description: 'Building exceptional digital experiences with modern technologies. React • Next.js • TypeScript',
    images: {
      url: 'https://danyal-lotfi-dev-portfolio.vercel.app/images/og-picture.png',
      alt: 'Danyal Lotfi - Full Stack Developer',
    },
    creator: '@danyal_xzdev',
    site: '@danyal_xzdev',
  },

  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: 'https://danyal-lotfi-dev-portfolio.vercel.app/',
  },

  verification: {
    google: 'your-google-verification-code-here',
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

        {/* Preload OG image */}
        <link rel="preload" as="image" href="/images/og-picture.png" type="image/png" />
      </head>
      <body className="bg-black text-white antialiased" cz-shortcut-listen="true">
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

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}