// lib/constants/skills.ts

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGit,
  FaLinux,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiGithub,
  SiRedux,
  SiN8N
} from 'react-icons/si';

export interface Skill {
  name: string;
  percentage: number;
  icon: React.ComponentType<{ className?: string }>;
}

export const SKILLS: Skill[] = [
  {
    name: 'HTML',
    percentage: 100,
    icon: FaHtml5,
  },
  {
    name: 'CSS',
    percentage: 100,
    icon: FaCss3Alt,
  },
  {
    name: 'JavaScript',
    percentage: 100,
    icon: FaJs,
  },
  {
    name: 'TypeScript',
    percentage: 90,
    icon: SiTypescript,
  },
  {
    name: 'React.js',
    percentage: 90,
    icon: FaReact,
  },
  {
    name: 'Next.js',
    percentage: 90,
    icon: SiNextdotjs,
  },
  {
    name: 'TailwindCSS',
    percentage: 90,
    icon: SiTailwindcss,
  },
  {
    name: 'Bootstrap',
    percentage: 80,
    icon: SiBootstrap,
  },
  {
    name: 'Git',
    percentage: 100,
    icon: FaGit,
  },
  {
    name: 'GitHub',
    percentage: 80,
    icon: SiGithub,
  },
  {
    name: 'Redux',
    percentage: 70,
    icon: SiRedux,
  },
  {
    name: 'Linux',
    percentage: 70,
    icon: FaLinux,
  },
  {
    name: 'N8N',
    percentage: 50,
    icon: SiN8N,
  },
];