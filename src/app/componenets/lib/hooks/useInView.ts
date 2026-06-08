import { useEffect, useState, useRef } from 'react';

export function useInView<T extends HTMLElement>() {
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

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return [ref, isInView];
}