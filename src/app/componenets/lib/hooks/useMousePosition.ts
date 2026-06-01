import { useEffect, useState, useCallback } from 'react';

export interface MousePosition {
  x: number;
  y: number;
}

/**
 * Hook to track mouse position
 * Uses throttling to avoid excessive updates
 * @returns Current mouse position
 */
export const useMousePosition = (): MousePosition => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Use passive listener for better performance
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isClient, handleMouseMove]);

  return mousePosition;
};
