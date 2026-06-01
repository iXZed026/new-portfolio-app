import type { AnimationConfig, EasingFunction, AnimationTiming } from '../constants/animation';

/**
 * Standard animation timings
 */
export const ANIMATION_TIMINGS: Record<string, AnimationTiming> = {
  quick: { duration: 0.3 },
  normal: { duration: 0.5 },
  slow: { duration: 0.8 },
  slower: { duration: 1.2 },
};

/**
 * Easing presets
 */
export const ANIMATION_EASING: Record<string, EasingFunction> = {
  default: [0.25, 0.1, 0.25, 1],
  smooth: [0.43, 0.13, 0.23, 0.96],
  bounce: [0.68, -0.55, 0.265, 1.55],
  sharp: [0.6, 0.05, 0.35, 1],
  easeInOut: 'easeInOut',
  easeOut: 'easeOut',
};

/**
 * Hero section entrance animations
 */
export const HERO_ANIMATIONS = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
  },

  fadeInDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
  },

  fadeInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
  },

  fadeInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
  },

  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
  },

  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
  },

  staggerContainer: {
    initial: 'initial',
    animate: 'animate',
    variants: {
      animate: {
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.3,
        },
      },
    },
  },

  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
  },

  glowPulse: {
    animate: {
      boxShadow: [
        '0 0 20px rgba(20, 71, 230, 0)',
        '0 0 30px rgba(20, 71, 230, 0.4)',
        '0 0 20px rgba(20, 71, 230, 0)',
      ],
    },
    transition: { duration: 3, repeat: Infinity },
  },

  floatingMotion: {
    animate: {
      y: [0, -10, 0],
    },
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

/**
 * Scroll-triggered animation variants
 */
export const SCROLL_ANIMATION_CONFIG: AnimationConfig = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] },
  viewport: { once: true, margin: '-100px' },
};

/**
 * Parallax speed multipliers
 */
export const PARALLAX_SPEEDS = {
  slow: 0.3,
  normal: 0.5,
  fast: 0.8,
};
