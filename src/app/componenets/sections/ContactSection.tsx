'use client';

import React, { useState } from 'react';
import { ContactCard } from '../ui/ContactCard';
import { ParticlesBackground } from '../hero/ParticlesBackground';
import { CONTACT_LINKS } from '../lib/constants/contact';
import { usePrefersReducedMotion } from '../lib/hooks/usePrefersReducedMotion';

export const ContactSection: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

    const x = (clientX - left) / width;
    const y = (clientY - top) / height;

    setMousePosition({
      x: x * 10 - 5,
      y: y * 10 - 5,
    });
  };

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black py-16 sm:py-20"
      onMouseMove={handleMouseMove}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-blue-950/40 pointer-events-none" />

      {/* Glow Effects */}
      <div
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl pointer-events-none animate-glow-pulse"
        aria-hidden="true"
      />

      <div
        className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-500 rounded-full opacity-5 blur-3xl pointer-events-none animate-glow-pulse"
        aria-hidden="true"
        style={{ animationDelay: '1s' }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Header */}
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 justify-center animate-fade-up">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <span className="text-xs sm:text-sm font-medium text-gray-300 uppercase tracking-widest">
              Get In Touch
            </span>
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 animate-fade-up animate-stagger-1">
            Let's Connect
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-12 sm:mb-16 leading-relaxed animate-fade-up animate-stagger-2">
            I am always excited to collaborate on new projects, discuss ideas, and most importantly, build a startup team.
            If you would like to contact me, you can do so through any of the following communication channels.
          </p>

          {/* Cards Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12"
            style={{
              transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            {CONTACT_LINKS.map((contact, index) => (
              <div
                key={contact.platform}
                className="animate-fade-up"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <ContactCard
                  icon={contact.icon}
                  platform={contact.platform}
                  value={contact.value}
                  href={contact.href}
                />
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 mb-10 sm:mb-12 animate-fade-up" />

          {/* Footer */}
          <div className="animate-fade-up">
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
              Prefer email? Send me a message at{' '}
              <a
                href="mailto:danyal.titanka24@gmail.com"
                className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                danyal.titanka24@gmail.com
              </a>
            </p>
            <p className="text-xs sm:text-sm text-gray-500">Response time: Usually within 24 hours</p>
          </div>
        </div>
      </div>
    </section>
  );
};
