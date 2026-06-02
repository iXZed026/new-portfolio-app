'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../lib/hooks/usePrefersReducedMotion';

interface ContactCardProps {
  icon: React.ElementType;
  platform: string;
  value: string;
  href: string;
  delay?: number;
}

export const ContactCard: React.FC<ContactCardProps> = ({
  icon: Icon,
  platform,
  value,
  href,
  delay = 0,
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
      className="block"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
      }}
      whileHover={
        prefersReducedMotion
          ? {}
          : {
              y: -8,
            }
      }
      whileTap={
        prefersReducedMotion
          ? {}
          : {
              scale: 0.98,
            }
      }
    >
      <div className="group relative p-8 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-950/20 via-black to-black hover:border-blue-400/50 transition-all duration-300 overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            className="text-blue-400 mb-6 flex justify-center"
            whileHover={
              prefersReducedMotion
                ? {}
                : {
                    scale: 1.12,
                    rotate: 8,
                  }
            }
            transition={{ duration: 0.3 }}
          >
            <Icon className="w-12 h-12" />
          </motion.div>

          {/* Platform */}
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
            {platform}
          </h3>

          {/* Value */}
          <p className="text-sm text-gray-400 break-words mb-4">
            {value}
          </p>

          {/* CTA */}
          <span className="text-sm text-blue-400 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            Connect →
          </span>
        </div>
      </div>
    </motion.a>
  );
};