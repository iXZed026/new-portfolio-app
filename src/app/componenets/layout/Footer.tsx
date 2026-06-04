// components/layout/Footer.tsx

'use client';

import React from 'react';
import {
  FOOTER_SOCIAL_LINKS,
  FOOTER_NAV_ITEMS,
} from '../lib/constants/footer';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleSocialClick = (href: string) => {
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  const handleNavClick = (sectionId: string) => {
    const element = document.querySelector(
      `[data-section="${sectionId}"]`
    );

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <footer className="relative w-full overflow-hidden bg-black border-t border-blue-500/20">

      {/* Glow */}
      <div className="absolute left-0 top-0 w-96 h-96 bg-blue-600/5 blur-3xl rounded-full pointer-events-none" />

      <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
              Danyal
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed">
              I build modern web experiences with
              React, Next.js and TypeScript.
            </p>

            <p className="text-gray-500 text-xs mt-4">
              © {currentYear} Danyal Lotfi
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-5 uppercase text-sm tracking-wider">
              Navigation
            </h3>

            <ul className="space-y-3">
              {FOOTER_NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-5 uppercase text-sm tracking-wider">
              Connect
            </h3>

            <ul className="space-y-3">
              {FOOTER_SOCIAL_LINKS.map((link) => {
                const Icon = link.icon;

                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      <Icon className="w-4 h-4" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5 uppercase text-sm tracking-wider">
              Contact
            </h3>

            <a
              href="mailto:danyal.titanka24@gmail.com"
              className="block rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-transparent p-4 hover:border-blue-500/40 transition-all duration-300"
            >
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                Email
              </p>

              <p className="text-white break-all">
                danyal.lotfi2183@gmail.com
              </p>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-blue-500/20 my-10" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-xs text-gray-500">
            © {currentYear} Danyal Lotfi. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>Next.js</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};