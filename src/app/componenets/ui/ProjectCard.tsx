// components/ui/ProjectCard.tsx

'use client';

import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import type { Project } from '@/app/types/project';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="h-full">
      <div className="relative h-full rounded-lg sm:rounded-2xl border border-blue-500/30 overflow-hidden bg-gradient-to-br from-blue-500/10 via-black to-black group card-hover-lift transition-all duration-300">
        {/* Image */}
        <div className="relative h-40 sm:h-48 overflow-hidden bg-gradient-to-b from-blue-900/20 to-black flex-shrink-0">
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600/20 via-black to-black group-hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-2">🖼️</div>
              <p className="text-xs text-gray-500">Project Image</p>
              <p className="text-xs text-gray-600 mt-1">{project.image}</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 flex flex-col flex-grow">
          <h3 className="text-base sm:text-xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-blue-300 line-clamp-2">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 flex-grow line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
            {project.tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
            {project.technologies.slice(0, 4).map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={index}
                  title={tech.name}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-125"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              );
            })}
          </div>

          {/* Buttons */}
          <div className="flex gap-2 sm:gap-3 mt-auto">
            <button
              onClick={() => handleExternalLink(project.liveUrl)}
              className="flex-1 flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-300 text-xs sm:text-sm button-hover-glow"
            >
              <FaExternalLinkAlt className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Live</span>
            </button>

            <button
              onClick={() => handleExternalLink(project.githubUrl)}
              className="flex-1 flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg border border-blue-500/40 text-blue-400 font-medium hover:bg-blue-500/10 hover:border-blue-500/80 transition-all duration-300 text-xs sm:text-sm"
            >
              <FaGithub className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Code</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
