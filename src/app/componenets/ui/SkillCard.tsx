'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  percentage: number;
  delay?: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({
  icon: Icon,
  name,
  percentage,
  delay = 0,
}) => {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
      }}
      whileHover={{ y: -6 }}
    >
      <div className="p-6 rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 via-black to-black hover:border-blue-400/40 transition-all duration-300">
        {/* Icon + percentage */}
        <div className="flex items-center justify-between mb-4">
          <motion.div
            className="text-3xl text-blue-400"
            whileHover={{
              scale: 1.15,
              rotate: 8,
            }}
            transition={{ duration: 0.3 }}
          >
            <Icon />
          </motion.div>

          <span className="text-sm font-semibold text-blue-400">
            {percentage}%
          </span>
        </div>

        {/* Skill name */}
        <h3 className="text-base font-semibold text-white mb-4">
          {name}
        </h3>

        {/* Progress bar */}
        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400"
            initial={{ width: `${percentage}%` }}
            animate={{ width: `${percentage}%` }}
            transition={{
              duration: 1.2,
              delay: delay + 0.3,
              ease: 'easeOut',
            }}
          />
        </div>

        {/* Label */}
        <div className="mt-3 text-xs text-gray-400">
          Proficiency: {percentage}%
        </div>
      </div>
    </motion.div>
  );
};