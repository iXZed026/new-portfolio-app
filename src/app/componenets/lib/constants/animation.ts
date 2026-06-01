import { type Variants, type TargetAndTransition } from 'framer-motion';

/**
 * Animation variant type
 */
export type AnimationVariant = Variants;

/**
 * Animation timing preset
 */
export interface AnimationTiming {
  duration: number;
  delay?: number;
  ease?: string | number[];
}

/**
 * Easing function type
 */
export type EasingFunction = string | number[];

/**
 * Animation direction
 */
export type AnimationDirection = 'up' | 'down' | 'left' | 'right';

/**
 * Scroll animation trigger options
 */
export interface ScrollTriggerOptions {
  threshold?: number | number[];
  margin?: string;
  once?: boolean;
}

/**
 * Framer Motion target and transition
 */
export type FramerTarget = TargetAndTransition;

/**
 * Parallax configuration
 */
export interface ParallaxConfig {
  offset?: number;
  speed?: number;
  direction?: 'vertical' | 'horizontal';
}

/**
 * Animation configuration object
 */
export interface AnimationConfig {
  initial: Record<string, any>;
  animate: Record<string, any>;
  exit?: Record<string, any>;
  transition?: AnimationTiming;
  viewport?: ScrollTriggerOptions;
}
