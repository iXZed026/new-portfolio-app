'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { IoMenu } from 'react-icons/io5';
import { MobileMenu } from './MobileMenu';
import { NAV_ITEMS } from '../lib/constants/navigation';
import { useActiveSection } from '../lib/hooks/useActiveSection';
import { cn } from '../lib/utils/cn';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen
      ? 'hidden'
      : 'unset';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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

    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-black/80 backdrop-blur-md border-b border-blue-500/20'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 md:h-20 flex items-center justify-between">

            {/* Logo */}
            <Link
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
            >
              Dev
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() =>
                      handleNavClick(item.id)
                    }
                    className={cn(
                      'relative px-4 py-2 text-sm font-medium transition-colors duration-300',
                      isActive
                        ? 'text-blue-400'
                        : 'text-gray-300 hover:text-white'
                    )}
                  >
                    {item.label}

                    {isActive && (
                      <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-blue-500 rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* CTA */}
            <a
              href="mailto:danyal.titanka24@gmail.com"
              className="hidden sm:inline-flex items-center px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-300"
            >
              Get in Touch
            </a>

            {/* Mobile Button */}
            <button
              onClick={() =>
                setIsMobileMenuOpen(
                  !isMobileMenuOpen
                )
              }
              className="md:hidden text-white"
              aria-label="Open Menu"
            >
              <IoMenu size={28} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() =>
          setIsMobileMenuOpen(false)
        }
        onNavClick={handleNavClick}
        activeSection={activeSection}
      />

      <div className="h-16 md:h-20" />
    </>
  );
};