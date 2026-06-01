'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { IoArrowForward } from 'react-icons/io5';
import { Button } from '../ui/Button';
import { GradientText } from '../ui/GradientText';
import { ParticlesBackground } from './ParticlesBackground';
import { ScrollIndicator } from '../ui/ScrollIndicator';
import { ANIMATION_TIMINGS, HERO_ANIMATIONS } from '../lib/constants/animations';
import { usePrefersReducedMotion } from '../lib/hooks/usePrefersReducedMotion';
import { cn } from '../lib/utils/cn';
import Image from 'next/image';

interface HeroSectionProps {
  name?: string;
  title?: string;
  subtitle?: string;
  ctaPrimary?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  ctaSecondary?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  onScrollClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  name = 'Danyal Lotfi',
  title = 'Full Stack Developer',
  subtitle = 'Building exceptional digital experiences with modern technologies',
  ctaPrimary = {
    text: 'View My Work',
    onClick: () => {},
  },
  ctaSecondary = {
    text: 'Contact Me',
    onClick: () => {},
  },
  onScrollClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = (clientX - left) / width;
    const y = (clientY - top) / height;

    setMousePosition({ x: x * 5 - 5, y: y * 5 - 5 });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black"
      onMouseMove={prefersReducedMotion ? undefined : handleMouseMove}
      aria-label="Hero section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-blue-950 opacity-40" />

      {/* Animated particles */}
      <ParticlesBackground
        particleCount={80}
        particleColor="#1447E6"
        particleOpacity={0.5}
        interactive={!prefersReducedMotion}
      />

      {/* Glow effects */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl"
        animate={
          prefersReducedMotion
            ? {}
            : {
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.15, 0.1],
              }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500 rounded-full opacity-5 blur-3xl"
        animate={
          prefersReducedMotion
            ? {}
            : {
                scale: [1, 1.1, 1],
                opacity: [0.05, 0.1, 0.05],
              }
        }
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Content container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center min-h-[600px] lg:min-h-[700px]"
          variants={HERO_ANIMATIONS.staggerContainer as any}
          initial="initial"
          animate="animate"
        >
          {/* Left column - Text content */}
          <motion.div
            className="md:text-left text-center order-2 md:order-1 flex flex-col justify-center md:items-start items-center space-y-8"
            variants={prefersReducedMotion ? undefined : HERO_ANIMATIONS.fadeInUp}
            style={{
              x: !prefersReducedMotion ? mousePosition.x * 0.3 : 0,
              y: !prefersReducedMotion ? mousePosition.y * 0.3 : 0,
            }}
          >
            {/* Greeting badge */}
            <motion.div
              className="inline-flex items-center gap-2 w-fit"
              variants={HERO_ANIMATIONS.staggerItem}
              initial="initial"
              animate="animate"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-sm font-medium text-gray-300 uppercase tracking-widest">
                Welcome to my portfolio
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.div
              className="space-y-4"
              variants={HERO_ANIMATIONS.staggerItem}
              initial="initial"
              animate="animate"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white">
                Hi, I'm{' '}
                <GradientText colors={['#1447E6', '#64B5F6']}>
                  {name}
                </GradientText>
              </h1>

              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.6,
                  duration: 0.8,
                }}
              >
                {title}
              </motion.h2>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-lg text-gray-400 max-w-lg leading-relaxed"
              variants={HERO_ANIMATIONS.staggerItem}
              initial="initial"
              animate="animate"
            >
              {subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-8"
              variants={HERO_ANIMATIONS.staggerItem}
              initial="initial"
              animate="animate"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={ctaPrimary.onClick}
                aria-label={ctaPrimary.text}
                className="group relative"
              >
                <span className="flex items-center gap-2">
                  {ctaPrimary.text}
                  <IoArrowForward className="transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={ctaSecondary.onClick}
                aria-label={ctaSecondary.text}
              >
                {ctaSecondary.text}
              </Button>
            </motion.div>

            {/* Stats section */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-800"
              variants={HERO_ANIMATIONS.staggerItem}
              initial="initial"
              animate="animate"
            >
              <div>
                <p className="text-3xl font-bold text-blue-500">5+</p>
                <p className="text-sm text-gray-400 mt-2">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-500">50+</p>
                <p className="text-sm text-gray-400 mt-2">Projects Done</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-500">30+</p>
                <p className="text-sm text-gray-400 mt-2">Clients Happy</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column */}
          <motion.div
            className="md:pt-0 pt-10 w-3/4 order-1 md:order-2 flex justify-center md:justify-end items-center"
            variants={HERO_ANIMATIONS.fadeInRight}
            initial="initial"
            animate="animate"
            style={{
              x: !prefersReducedMotion ? mousePosition.x * 0.5 : 0,
              y: !prefersReducedMotion ? mousePosition.y * 0.5 : 0,
            }}
          >
            <div className="relative">
              {/* Outer glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0"
                variants={HERO_ANIMATIONS.glowPulse}
                initial="initial"
                animate={prefersReducedMotion ? {} : 'animate'}
              />

              {/* Main box */}
              <motion.div
                className={cn(
                  'relative inline-block',
                  'rounded-2xl',
                  'backdrop-blur-xs',
                  'overflow-hidden'
                )}
                animate={
                  prefersReducedMotion
                    ? {}
                    : {
                        borderColor: [
                          'rgba(20, 71, 230, 0.3)',
                          'rgba(20, 71, 230, 0.6)',
                          'rgba(20, 71, 230, 0.3)',
                        ],
                      }
                }
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                {/* Grid pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(20, 71, 230, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(20, 71, 230, 0.1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                  }}
                />

                {/* Center content */}
                <motion.div
                  className="relative z-10"
                  animate={
                    prefersReducedMotion
                      ? {}
                      : {
                          y: [0, -20, 0],
                        }
                  }
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Image
                    src="/images/me.jpg"
                    alt="Danyal Lotfi profile picture"
                    width={400}
                    height={400}
                    className="rounded-2xl object-cover"
                    priority
                  />
                </motion.div>

                {/* Top-left accent */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-blue-500 opacity-10 blur-2xl rounded-full -translate-x-1/2 -translate-y-1/2" />

                {/* Bottom-right accent */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-600 opacity-5 blur-3xl rounded-full translate-x-1/4 translate-y-1/4" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          duration: 0.6,
        }}
      >
        <ScrollIndicator onClick={onScrollClick} />
      </motion.div>
    </section>
  );
};