// components/ui/ProjectCard.tsx

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { usePrefersReducedMotion } from '../lib/hooks/usePrefersReducedMotion';
import type { Project } from '@/app/types/project';

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  delay = 0,
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      className="h-full"
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <motion.div
        className="relative h-full rounded-2xl border border-blue-500/30 overflow-hidden bg-gradient-to-br from-blue-500/10 via-black to-black group"
        whileHover={
          prefersReducedMotion
            ? {}
            : {
                y: -8,
                boxShadow: '0 0 30px rgba(20,71,230,0.3)',
              }
        }
        transition={{ duration: 0.3 }}
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-b from-blue-900/20 to-black">
          <motion.div
            className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600/20 via-black to-black"
            whileHover={
              prefersReducedMotion
                ? {}
                : { scale: 1.05 }
            }
            transition={{ duration: 0.3 }}
          >
            <div className="text-center">
              <div className="text-4xl mb-2">🖼️</div>

              <p className="text-xs text-gray-500">
                Project Image
              </p>

              <p className="text-xs text-gray-600 mt-1">
                {project.image}
              </p>
            </div>
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
          <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-blue-300 line-clamp-2">
            {project.title}
          </h3>

          <p className="text-sm text-gray-400 mb-4 flex-grow line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 2).map((tag, index) => (
              <motion.span
                key={index}
                className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
                whileHover={
                  prefersReducedMotion
                    ? {}
                    : { scale: 1.05 }
                }
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-3 mb-6">
            {project.technologies.slice(0, 4).map((tech, index) => {
              const Icon = tech.icon;

              return (
                <motion.div
                  key={index}
                  title={tech.name}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  whileHover={
                    prefersReducedMotion
                      ? {}
                      : {
                          scale: 1.2,
                          rotate: 10,
                        }
                  }
                >
                  <Icon className="w-5 h-5" />
                </motion.div>
              );
            })}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-auto">
            <motion.button
              onClick={() => handleExternalLink(project.liveUrl)}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-300"
              whileHover={
                prefersReducedMotion
                  ? {}
                  : { scale: 1.02 }
              }
              whileTap={
                prefersReducedMotion
                  ? {}
                  : { scale: 0.98 }
              }
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              <span className="text-sm">Live</span>
            </motion.button>

            <motion.button
              onClick={() => handleExternalLink(project.githubUrl)}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-blue-500/40 text-blue-400 font-medium hover:bg-blue-500/10 hover:border-blue-500/80 transition-all duration-300"
              whileHover={
                prefersReducedMotion
                  ? {}
                  : { scale: 1.02 }
              }
              whileTap={
                prefersReducedMotion
                  ? {}
                  : { scale: 0.98 }
              }
            >
              <FaGithub className="w-4 h-4" />
              <span className="text-sm">Code</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};