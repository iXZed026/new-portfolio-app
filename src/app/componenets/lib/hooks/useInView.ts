import { useEffect, useRef, useState } from 'react';

export function useInView<T extends HTMLElement>(): [
  React.RefObject<T | null>,
  boolean
] {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, {
      threshold: 0.2,
    });

    const current = ref.current;
    if (!current) return;

    observer.observe(current);

    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
}