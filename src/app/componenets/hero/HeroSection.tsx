'use client';

import React, { useRef, useState, useEffect } from 'react';
import { IoArrowForward } from 'react-icons/io5';
import { Button } from '../ui/Button';
import { GradientText } from '../ui/GradientText';
import { ParticlesBackground } from './ParticlesBackground';
import { ScrollIndicator } from '../ui/ScrollIndicator';
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
    if (prefersReducedMotion) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

    const x = (clientX - left) / width;
    const y = (clientY - top) / height;

    setMousePosition({ x: x * 5 - 5, y: y * 5 - 5 });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black md:py-0 pb-20"
      onMouseMove={handleMouseMove}
      aria-label="Hero section"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-blue-950 opacity-40 pointer-events-none" />

      {/* Particles background */}
      <ParticlesBackground
        particleCount={70}
        particleColor="#1447E6"
        particleOpacity={1}
        interactive={!prefersReducedMotion}
      />

      {/* Animated glow orbs */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl pointer-events-none animate-glow-pulse"
        aria-hidden="true"
      />

      <div
        className=" absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500 rounded-full opacity-5 blur-3xl pointer-events-none animate-glow-pulse"
        style={{ animationDelay: '1s' }}
        aria-hidden="true"
      />

      {/* Content container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left column - Text content */}
          <div className="py-10 text-center md:text-left order-2 md:order-1 space-y-6 sm:space-y-8">
            {/* Greeting badge */}
            <div className="inline-flex items-center gap-2 w-fit mx-auto md:mx-0 animate-fade-up">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-xs sm:text-sm font-medium text-gray-300 uppercase tracking-widest">
                Welcome to my portfolio
              </span>
            </div>

            {/* Main heading */}
            <div className="space-y-3 sm:space-y-4 animate-fade-up animate-stagger-1">
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Hi, I'm{' '}
                <GradientText colors={['#1447E6', '#64B5F6']}>
                  {name}
                </GradientText>
              </h1>

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300">
                {title}
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-400 max-w-lg leading-relaxed animate-fade-up animate-stagger-2 mx-auto md:mx-0">
              {subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 sm:pt-8 w-full sm:w-auto animate-fade-up animate-stagger-3">
              <a
              href="#skills"
                className="py-3 px-6 bg-blue-600 rounded-md group relative w-full sm:w-auto"
              >
                <span className="flex items-center justify-center sm:justify-start gap-2">
                  {ctaPrimary.text}
                  <IoArrowForward className="transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>

              <a
              href="#contact"
                className="py-3 px-6 border-2 border-gray-600 rounded-md w-full sm:w-auto hover:bg-blue-600 transition-colors duration-300"
              >
                {ctaSecondary.text}
              </a>
            </div>

            {/* Stats section */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-8 sm:pt-12 border-t border-gray-800 w-full animate-fade-up animate-stagger-4">
              <div className="text-center md:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-blue-500">3+</p>
                <p className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2">Years Experience</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-blue-500">10+</p>
                <p className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2">Projects Done</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-blue-500">Many</p>
                <p className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2">Clients Happy</p>
              </div>
            </div>
          </div>

          {/* Right column  */}
          <div
            className="order-1 md:order-2 flex justify-center md:justify-end items-center animate-fade-right"
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              {/* Glow effect */}
              <div
                className="absolute inset-0  rounded-full animate-glow-pulse"
                aria-hidden="true"
              />

              {/* Image container */}
              <div
                className={cn(
                  'relative inline-block w-full',
                  'rounded-full',
                  'bg-black/70',
                  'border-2 border-blue-600/50 animate-border-glow'
                )}
              >
                {/* Inner wrapper for overflow */}
                <div className="relative w-full overflow-hidden rounded-full">
                  {/* Grid pattern background */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(20, 71, 230, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(20, 71, 230, 0.1) 1px, transparent 1px)',
                      backgroundSize: '50px 50px',
                    }}
                  />

                {/* Image with floating animation */}
                <div className="relative z-10">
                  <Image
                    src="/images/me3.png"
                    alt="Danyal Lotfi profile picture"
                    width={400}
                    height={400}
                    className="w-full h-auto rounded-2xl object-cover"
                    priority
                  />
                </div>

                {/* Accent elements */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-blue-500 opacity-10 blur-2xl rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-600 opacity-5 blur-3xl rounded-full translate-x-1/4 translate-y-1/4 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-fade-up">
        <ScrollIndicator onClick={onScrollClick} />
      </div>
    </section>
  );
};
