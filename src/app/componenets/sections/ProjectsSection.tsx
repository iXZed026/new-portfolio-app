'use client';

import React from 'react';
import { ProjectCard } from '../ui/ProjectCard';
import { PROJECTS } from '../lib/constants/projects';
import { usePrefersReducedMotion } from '../lib/hooks/usePrefersReducedMotion';

export const ProjectsSection: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const scrollToContact = () => {
    const contactSection = document.querySelector('[data-section="contact"]');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section
      aria-label="Projects section"
      className="relative py-16 sm:py-20 w-full px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black pointer-events-none" />

      {/* Glow Effects */}
      <div
        className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-5 blur-3xl pointer-events-none animate-glow-pulse"
        aria-hidden="true"
        style={{ animationDelay: '0s' }}
      />

      <div
        className="absolute bottom-1/2 left-0 w-80 h-80 bg-blue-500 rounded-full opacity-5 blur-3xl pointer-events-none animate-glow-pulse"
        aria-hidden="true"
        style={{ animationDelay: '1s' }}
      />

      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 animate-pulse-opacity" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 animate-fade-up">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <span className="text-xs sm:text-sm font-medium text-gray-300 uppercase tracking-widest">
              My Work
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 animate-fade-up animate-stagger-1">
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl animate-fade-up animate-stagger-2">
            A selection of projects I've designed and developed. Each project showcases my skills in full-stack
            development, UI/UX design, and problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-up"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-8 sm:pt-12 border-t border-blue-500/20">
          <p className="text-sm sm:text-base text-gray-400 mb-6">
            Interested in working together or want to see more projects?
          </p>

          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base button-hover-glow"
          >
            Get In Touch
            <span>→</span>
          </button>
        </div>
      </div>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 animate-pulse-opacity" />
    </section>
  );
};
