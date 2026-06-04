// components/hero/ParticlesBackground.tsx

'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useMousePosition } from '../lib/hooks/useMousePosition';
import { usePrefersReducedMotion } from '../lib/hooks/usePrefersReducedMotion';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  originalX: number;
  originalY: number;
}

interface ParticlesBackgroundProps {
  particleCount?: number;
  particleColor?: string;
  particleOpacity?: number;
  interactive?: boolean;
  className?: string;
}

export const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({
  particleCount = 50,
  particleColor = '#1447E6',
  particleOpacity = 0.5,
  interactive = true,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const mousePosition = useMousePosition();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isClient, setIsClient] = useState(false);

  // Initialize client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Main animation loop
  useEffect(() => {
    if (!isClient) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
      
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();

    // Initialize particles
    const initializeParticles = () => {
      particlesRef.current = Array.from({ length: particleCount }, () => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        return {
          x,
          y,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1 + 0.5,
          opacity: Math.random() * 0.5 + 0.2,
          originalX: x,
          originalY: y,
        };
      });
    };

    initializeParticles();

    // Animation loop
    const animate = () => {
      // Clear canvas with slight trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      const particles = particlesRef.current;

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Interactive behavior
        if (interactive) {
          const dx = mousePosition.x - particle.x;
          const dy = mousePosition.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const repelDistance = 150;

          if (distance < repelDistance) {
            const angle = Math.atan2(dy, dx);
            particle.vx = -Math.cos(angle) * 0.5;
            particle.vy = -Math.sin(angle) * 0.5;
          } else {
            const returnX = (particle.originalX - particle.x) * 0.02;
            const returnY = (particle.originalY - particle.y) * 0.02;
            particle.vx += returnX;
            particle.vy += returnY;
          }
        }

        // Wrap around edges
        if (particle.x > window.innerWidth) particle.x = 0;
        if (particle.x < 0) particle.x = window.innerWidth;
        if (particle.y > window.innerHeight) particle.y = 0;
        if (particle.y < 0) particle.y = window.innerHeight;

        // Apply friction
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Draw particle
        ctx.fillStyle = particleColor;
        ctx.globalAlpha = particle.opacity;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections between nearby particles
      particles.forEach((particle, i) => {
        for (let j = i + 1; j < particles.length; j++) {
          const otherParticle = particles[j];
          const dpx = particle.x - otherParticle.x;
          const dpy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dpx * dpx + dpy * dpy);
          const connectionDistance = 150;

          if (distance < connectionDistance) {
            ctx.globalAlpha = particle.opacity * (1 - distance / connectionDistance) * 0.3;
            ctx.strokeStyle = particleColor;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        }
      });

      ctx.globalAlpha = 1;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start animation unless motion is reduced
    if (!prefersReducedMotion) {
      animate();
    }

    // Handle resize
    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isClient, particleCount, particleColor, particleOpacity, interactive, mousePosition, prefersReducedMotion]);

  // Return null only if motion is reduced
  if (!isClient || prefersReducedMotion) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className={cn(`fixed top-0 left-0 w-screen h-screen pointer-events-none`, className)}
      aria-hidden="true"
    />
  );
};

function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
