// lib/hooks/useActiveSection.ts

import { useEffect, useState } from 'react';

export const useActiveSection = (): string => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const updateActiveSection = () => {
      const sections = document.querySelectorAll('[data-section]');

      let current = 'home';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= window.innerHeight * 0.35) {
          const id = section.getAttribute('data-section');

          if (id) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    updateActiveSection();

    window.addEventListener('scroll', updateActiveSection, {
      passive: true,
    });

    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  return activeSection;
};