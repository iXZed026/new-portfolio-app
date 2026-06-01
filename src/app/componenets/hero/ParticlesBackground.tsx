// components/hero/ParticlesBackground.tsx

'use client';

import React, { useEffect, useRef, useState } from 'react';
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

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const initializeParticles = () => {
      particlesRef.current = Array.from({ length: particleCount }, () => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;

        return {
          x,
          y,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.2,
          originalX: x,
          originalY: y,
        };
      });
    };

    initializeParticles();

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (interactive && typeof window !== 'undefined') {
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

        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        particle.vx *= 0.99;
        particle.vy *= 0.99;

        ctx.fillStyle = particleColor;
        ctx.globalAlpha = particle.opacity;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        particles.forEach((otherParticle) => {
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
        });
      });

      ctx.globalAlpha = 1;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isClient, particleCount, particleColor, particleOpacity, interactive, mousePosition, prefersReducedMotion]);

  if (!isClient || prefersReducedMotion) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
};