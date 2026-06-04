'use client';

import React from 'react';
import { SkillCard } from '../ui/SkillCard';
import { SKILLS } from '../lib/constants/skills';

export const SkillsSection: React.FC = () => {
  return (
    <div className="w-full animate-fade-in">
      {/* Header */}
      <div className="mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 animate-fade-up">
          <div className="w-2 h-2 bg-blue-500 rounded-full" />
          <span className="text-xs sm:text-sm font-medium text-gray-300 uppercase tracking-widest">
            Technical Skills
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white animate-fade-up animate-stagger-1">
          Technologies & Tools
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {SKILLS.map((skill, index) => (
          <div
            key={skill.name}
            className="animate-fade-up"
            style={{
              animationDelay: `${index * 0.08}s`,
            }}
          >
            <SkillCard icon={skill.icon} name={skill.name} percentage={skill.percentage} />
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-12 sm:mt-16 pt-8 border-t border-blue-500/20 animate-fade-up">
        <p className="text-gray-400 text-center text-sm sm:text-base">
          Continuously learning and expanding my technical expertise to stay at the forefront of modern web
          development.
        </p>
      </div>
    </div>
  );
};
