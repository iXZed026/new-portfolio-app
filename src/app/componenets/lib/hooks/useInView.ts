import { useEffect, useState, useRef } from 'react';

export function useInView<T extends HTMLElement>(): [
    React.RefObject<T | null>,
    boolean
] {
    const ref = useRef<T | null>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(true);
            },
            {
                threshold: 0.2,
            }
        );

        const current = ref.current;
        if (current) observer.observe(current);

        return () => {
            if (current) observer.unobserve(current);
            observer.disconnect();
        };
    }, []);

    return [ref, isInView];
}