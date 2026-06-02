'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute left-0 top-0 w-96 h-96 bg-blue-600/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-30 max-w-6xl mx-auto">
        {/* About */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="mb-16">
            <motion.div
              className="inline-flex items-center gap-2 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-sm font-medium text-gray-300 uppercase tracking-widest">
                About Me
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Passionate Developer Building{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-300 max-w-3xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              I'm a full-stack developer with a passion for creating intuitive,
              high-performance web applications. With expertise in modern
              JavaScript frameworks and cloud technologies, I transform complex
              ideas into elegant solutions.
            </motion.p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {aboutBlocks.map((block, index) => {
              const Icon = block.icon;

              return (
                <motion.div
                  key={index}
                  className="group p-6 rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 via-black to-black hover:border-blue-400/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    y: -8,
                    boxShadow: '0 0 30px rgba(59,130,246,0.2)',
                  }}
                >
                  <motion.div
                    className="text-4xl text-blue-400 mb-4"
                    whileHover={{ scale: 1.2 }}
                  >
                    <Icon />
                  </motion.div>

                  <h3 className="text-xl font-semibold text-white mb-3">
                    {block.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {block.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 mb-24" />

        {/* Skills */}
        <div data-section="skills">
          <SkillsSection />
        </div>
      </div>
      
    </section>
  );
};