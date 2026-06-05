'use client';

import React from 'react';
import { FaCode, FaLightbulb, FaRocket } from 'react-icons/fa';
import { SkillsSection } from './SkillsSection';

export const AboutSection: React.FC = () => {
  const aboutBlocks = [
    {
      icon: FaCode,
      title: 'Clean Code',
      description:
        'I write scalable, maintainable code following industry best practices and modern development standards.',
    },
    {
      icon: FaLightbulb,
      title: 'Problem Solving',
      description:
        'I approach challenges with creative thinking and analytical problem-solving to deliver effective solutions.',
    },
    {
      icon: FaRocket,
      title: 'Performance',
      description:
        'I optimize applications for speed and efficiency, ensuring excellent user experience across all devices.',
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute left-0 top-0 w-96 h-96 bg-blue-600/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-30 max-w-6xl mx-auto">
        {/* About Content */}
        <div className="mb-16 sm:mb-24">
          {/* Header */}
          <div className="mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 animate-fade-up">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-xs sm:text-sm font-medium text-gray-300 uppercase tracking-widest">
                About Me
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 animate-fade-up animate-stagger-1">
              Passionate Developer Building{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl leading-relaxed animate-fade-up animate-stagger-2">
              I'm a full-stack developer with a passion for creating intuitive, high-performance web applications.
              With expertise in modern JavaScript frameworks and cloud technologies, I transform complex ideas into
              elegant solutions.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {aboutBlocks.map((block, index) => {
              const Icon = block.icon;
              return (
                <div
                  key={index}
                  className="p-5 sm:p-6 rounded-lg sm:rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 via-black to-black hover:border-blue-400/40 transition-all duration-300 card-hover-lift animate-fade-up"
                  style={{
                    animationDelay: `${index * 0.15}s`,
                  }}
                >
                  <div className="text-3xl sm:text-4xl text-blue-400 mb-4 hover:scale-125 transition-transform duration-300">
                    <Icon />
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                    {block.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{block.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 mb-16 sm:mb-24" />

        {/* Skills Section */}
        <div id='skills' data-section="skills">
          <SkillsSection />
        </div>
      </div>
    </section>
  );
};
