import { useEffect, useState, useRef } from 'react';

export function useInView<T extends HTMLElement>(): [
    React.RefObject<T | null>,
    boolean
] {
    const ref = useRef<T | null>(null);
    const [isInView, setIsInView] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            {
                threshold: 0.1,
            }
        );

        const current = ref.current;
        if (!current) return;

        observer.observe(current);

        return () => observer.disconnect();
    }, []);

    return [ref, isInView];
}