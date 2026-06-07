// lib/constants/projects.ts

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiFramer,
  SiVercel,
  SiGithub,
} from 'react-icons/si';
import type { Project } from '@/app/types/project';

export const PROJECTS: Project[] = [
  {
    id: "next-mart",
    title: 'Next Mart',
    description: 'This store project is the first Next js project and therefore very simple.  ',
    image: 'projects/project-next-mart.jpg',
    technologies: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'TailwindCSS', icon: SiTailwindcss },
      { name: 'MongoDB', icon: SiMongodb },
    ],
    date: "2025/3/2",
    liveUrl: 'https://next-mart-shop.vercel.app/',
    githubUrl: 'https://github.com/iXZed026/nextMart',
    tags: ['Shop', 'Cart', 'Database', 'FullStack'],
  },
  {
    id: "persian-portfolio",
    title: 'Persian Portfolio',
    description: 'A portfolio project in Persian as a sample of my work for the job market and to get to know my skills.',
    image: 'projects/project-persian-portfolio.jpg',
    technologies: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'TailwindCSS', icon: SiTailwindcss },
    ],
    date: "2025/14/4",
    liveUrl: 'https://portfolio-xz.vercel.app',
    githubUrl: 'https://github.com/iXZed026/portfolio',
    tags: ['Portfolio', 'About Me', 'Contacts', 'resume'],
  },

];