'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HERO_ANIMATIONS } from '../lib/constants/animations';
import { usePrefersReducedMotion } from '../lib/hooks/usePrefersReducedMotion';

interface ScrollIndicatorProps {
  onClick?: () => void;
  ariaLabel?: string;
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  onClick,
  ariaLabel = 'Scroll down to see more',
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.button
      onClick={onClick}
      className="flex flex-col items-center justify-center gap-1 cursor-pointer bg-transparent border-none p-2"
      aria-label={ariaLabel}
      variants={
        prefersReducedMotion
          ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
          : HERO_ANIMATIONS.floatingMotion
      }
      initial="initial"
      animate="animate"
    >
      {/* Scroll text */}
      <motion.span
        className="text-xs uppercase tracking-widest text-gray-400 font-semibold"
        animate={prefersReducedMotion ? {} : { opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Scroll
      </motion.span>

      {/* Scroll line with dot */}
      <div className="relative w-0.5 h-8 border-l border-blue-500 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-2 bg-gradient-to-b from-blue-500 to-transparent"
          animate={
            prefersReducedMotion
              ? {}
              : {
                  top: [0, 12, 0],
                }
          }
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Arrow icon */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-blue-500 mt-1"
        aria-hidden="true"
      >
        <path d="M12 5v14M19 12l-7 7-7-7" />
      </svg>
    </motion.button>
  );
};
