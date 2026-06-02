'use client';

import React from 'react';
import { NAV_ITEMS } from '../lib/constants/navigation';
import { cn } from '../lib/utils/cn';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavClick: (sectionId: string) => void;
  activeSection: string | null;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onNavClick,
  activeSection,
}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu */}
      <div className="fixed top-0 right-0 bottom-0 z-50 w-full sm:w-80 bg-black border-l border-blue-500/20 overflow-y-auto">
        <div className="px-6 py-8">

          {/* Logo */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-blue-400">
              Dev
            </h2>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-3">

            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => onNavClick(item.id)}
                  className={cn(
                    'text-left px-4 py-3 rounded-lg transition-all',
                    isActive
                      ? 'bg-blue-500/10 text-blue-400'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  )}
                >
                  {item.label}
                </button>
              );
            })}

          </nav>

          {/* Divider */}
          <div className="h-px bg-blue-500/20 my-8" />

          {/* CTA */}
          <a
            href="mailto:danyal.titanka24@gmail.com"
            className="block text-center rounded-lg bg-blue-600 py-3 text-white font-semibold"
          >
            Get in Touch
          </a>

          <p className="mt-8 text-center text-sm text-gray-500">
            Available for freelance projects
          </p>
        </div>
      </div>
    </>
  );
};