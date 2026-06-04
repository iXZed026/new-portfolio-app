// components/ui/ScrollIndicator.tsx

'use client';

import React from 'react';
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
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-1 cursor-pointer bg-transparent border-none p-2 ${
        !prefersReducedMotion ? 'animate-floating' : ''
      }`}
      aria-label={ariaLabel}
    >
      {/* Scroll text */}
      <span className={`text-xs uppercase tracking-widest text-gray-400 font-semibold ${
        !prefersReducedMotion ? 'animate-pulse-opacity' : ''
      }`}>
        Scroll
      </span>

      {/* Scroll line with dot */}
      <div className="relative w-0.5 h-8 border-l border-blue-500 overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-2 bg-gradient-to-b from-blue-500 to-transparent"
          style={
            !prefersReducedMotion
              ? {
                  animation: 'scrollIndicatorMove 1.5s ease-in-out infinite',
                }
              : undefined
          }
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

      <style>{`
        @keyframes scrollIndicatorMove {
          0%, 100% {
            top: 0;
          }
          50% {
            top: 12px;
          }
        }
      `}</style>
    </button>
  );
};
