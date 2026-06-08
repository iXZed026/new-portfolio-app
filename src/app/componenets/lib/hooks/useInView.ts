// import { useEffect, useState, useRef } from 'react';

// export function useInView<T extends HTMLElement>(
//     options?: {
//         threshold?: number | number[];
//         margin?: string;
//         once?: boolean;
//     }
// ): [React.RefObject<T | null>, boolean] {
//     const ref = useRef<T | null>(null);
//     const [isInView, setIsInView] = useState(false);
//     const hasBeenInView = useRef(false);

//     useEffect(() => {
//         const target = ref.current;
//         if (!target) return;

//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setIsInView(true);
//                     hasBeenInView.current = true;

//                     if (options?.once) {
//                         observer.disconnect();
//                     }
//                 } else {
//                     if (!options?.once) {
//                         setIsInView(false);
//                     }
//                 }
//             },
//             {
//                 threshold: options?.threshold ?? 0.1,
//                 rootMargin: options?.margin ?? '0px',
//             }
//         );

//         observer.observe(target);

//         // return () => {
//         //     observer.disconnect();
//         // };
//     }, [options]);

//     return [ref, isInView];
// }