// lib/hooks/useScrollDirection.ts

import { useEffect, useState } from 'react';

type ScrollDirection = 'up' | 'down';

/**
 * Hook to detect scroll direction
 * @returns Current scroll direction
 */
export const useScrollDirection = (): ScrollDirection => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('down');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY) < 5) {
        return;
      }

      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return scrollDirection;
};