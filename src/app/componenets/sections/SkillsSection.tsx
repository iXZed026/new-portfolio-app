'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SkillCard } from '../ui/SkillCard';
import { SKILLS } from '../lib/constants/skills';

export const SkillsSection: React.FC = () => {



  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
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
            Technical Skills
          </span>
        </motion.div>

        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Technologies & Tools
        </motion.h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS.map((skill, index) => (
          <SkillCard
            key={index}
            icon={skill.icon}
            name={skill.name}
            percentage={skill.percentage}
            delay={index * 0.08}
          />
        ))}
      </div>

      {/* Footer */}
      <motion.div
        className="mt-16 pt-8 border-t border-blue-500/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p className="text-gray-400 text-center">
          Continuously learning and expanding my technical expertise to stay at
          the forefront of modern web development.
        </p>
      </motion.div>
    </motion.div>
  );
};