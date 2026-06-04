// components/ui/ContactCard.tsx

'use client';

import React from 'react';
import { usePrefersReducedMotion } from '../lib/hooks/usePrefersReducedMotion';

interface ContactCardProps {
  icon: React.ElementType;
  platform: string;
  value: string;
  href: string;
}

export const ContactCard: React.FC<ContactCardProps> = ({ icon: Icon, platform, value, href }) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
      className={`block group relative p-5 sm:p-8 rounded-lg sm:rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-950/20 via-black to-black hover:border-blue-400/50 transition-all duration-300 card-hover-lift ${
        !prefersReducedMotion ? 'hover:shadow-lg hover:shadow-blue-500/20' : ''
      }`}
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg sm:rounded-2xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="text-blue-400 mb-4 sm:mb-6 flex justify-center group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
          <Icon className="w-10 h-10 sm:w-12 sm:h-12" />
        </div>

        {/* Platform */}
        <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
          {platform}
        </h3>

        {/* Value */}
        <p className="text-xs sm:text-sm text-gray-400 break-words mb-3 sm:mb-4">{value}</p>

        {/* CTA */}
        <span className="text-xs sm:text-sm text-blue-400 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          Connect →
        </span>
      </div>
    </a>
  );
};
