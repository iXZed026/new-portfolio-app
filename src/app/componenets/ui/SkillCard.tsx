// components/ui/SkillCard.tsx

'use client';

import React from 'react';

interface SkillCardProps {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  percentage: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, name, percentage }) => {
  return (
    <div className="group p-4 sm:p-6 rounded-lg sm:rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 via-black to-black hover:border-blue-400/40 transition-all duration-300 card-hover-lift">
      {/* Icon + percentage */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="text-2xl sm:text-3xl text-blue-400 hover:scale-125 transition-transform duration-300">
          <Icon />
        </div>
        <span className="text-xs sm:text-sm font-semibold text-blue-400">{percentage}%</span>
      </div>

      {/* Skill name */}
      <h3 className="text-sm sm:text-base font-semibold text-white mb-3 sm:mb-4 line-clamp-2">
        {name}
      </h3>

      {/* Progress bar */}
      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-500"
          style={{
            width: `${percentage}%`,
            animation: `growProgress 1.2s ease-out forwards`,
          }}
        />
      </div>

      {/* Label */}
      <div className="mt-2 sm:mt-3 text-xs text-gray-400">Proficiency: {percentage}%</div>

      <style>{`
        @keyframes growProgress {
          from {
            width: 0;
          }
        }
      `}</style>
    </div>
  );
};
