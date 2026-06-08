'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { IoMenu } from 'react-icons/io5';
import { MobileMenu } from './MobileMenu';
import { NAV_ITEMS } from '../lib/constants/navigation';
import { useActiveSection } from '../lib/hooks/useActiveSection';
import { cn } from '../lib/utils/cn';
import { SiKong } from 'react-icons/si';
import { usePathname } from 'next/navigation';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  const [activeMenu, setActiveMenu] = useState<boolean>(false)

  const pathname = usePathname();


  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'initial';
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
          isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-blue-500/20' : ' bg-black/80 md:backdrop-blur-none backdrop-blur-md border-b border-blue-500/20'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-14 sm:h-16 md:h-20 flex items-center justify-between">
            {/* Logo */}
            <Link
              href="#"
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent flex-shrink-0"
            >
              <SiKong size={28} className="mr-1 text-blue-400" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className={cn(
                      'cursor-pointer relative px-3 lg:px-4 py-2 text-xs lg:text-sm font-medium transition-colors duration-300',
                      isActive ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                    )}
                  >
                    {item.label}
                    {isActive && <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-blue-500 rounded-full" />}
                  </a>
                );
              })}
            </nav>

            {/* CTA Button */}
            <a
              href="mailto:danyal.lotfi2183@gmail.com"
              className="hidden sm:inline-flex items-center px-3 sm:px-5 py-2 rounded-lg bg-blue-600 text-white font-medium text-xs sm:text-sm hover:bg-blue-700 transition-colors duration-300 flex-shrink-0"
            >
              Get in Touch
            </a>

            {/* Mobile Menu Button */}
            <div
              onClick={() => setActiveMenu(true)}
              className="p-2 md:hidden text-white flex-shrink-0"
            // aria-label="Toggle menu"
            >
              <IoMenu size={30} />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={activeMenu}
        onClose={() => setActiveMenu(false)}
        onNavClick={handleNavClick}
        activeSection={activeSection}
      />

      {/* Spacer */}
      {/* <div className="h-14 sm:h-16 md:h-20" /> */}
    </>
  );
};
