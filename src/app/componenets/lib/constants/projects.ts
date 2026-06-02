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
    id: 'ai-saas-dashboard',
    title: 'AI SaaS Dashboard',
    description: 'Modern analytics dashboard with AI-powered insights and real-time data visualization.',
    longDescription:
      'A comprehensive SaaS dashboard built with Next.js featuring AI-powered analytics, real-time data visualization, and advanced filtering capabilities. Includes user authentication, role-based access control, and comprehensive analytics.',
    image: '/projects/project-1.jpg',
    technologies: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'TailwindCSS', icon: SiTailwindcss },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'PostgreSQL', icon: SiPostgresql },
    ],
    liveUrl: 'https://example-saas-dashboard.vercel.app',
    githubUrl: 'https://github.com/yourusername/ai-saas-dashboard',
    tags: ['SaaS', 'Dashboard', 'AI', 'Analytics'],
  },
  {
    id: 'portfolio-website',
    title: 'Premium Portfolio Website',
    description: 'High-performance portfolio site with smooth animations and modern design principles.',
    longDescription:
      'A premium portfolio website showcasing projects and skills with smooth animations, interactive components, and optimized performance. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.',
    image: '/projects/project-2.jpg',
    technologies: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'TailwindCSS', icon: SiTailwindcss },
      { name: 'Framer Motion', icon: SiFramer },
    ],
    liveUrl: 'https://example-portfolio.vercel.app',
    githubUrl: 'https://github.com/yourusername/portfolio-website',
    tags: ['Portfolio', 'Web Design', 'Animation'],
  },
  {
    id: 'task-management-app',
    title: 'Task Management Application',
    description: 'Collaborative task management tool with real-time updates and team functionality.',
    longDescription:
      'A full-featured task management application enabling teams to collaborate in real-time. Features include task assignment, progress tracking, comments, and notifications. Built with React and Node.js.',
    image: '/projects/project-3.jpg',
    technologies: [
      { name: 'React', icon: SiReact },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'TypeScript', icon: SiTypescript },
    ],
    liveUrl: 'https://example-task-app.vercel.app',
    githubUrl: 'https://github.com/yourusername/task-management-app',
    tags: ['Productivity', 'Collaboration', 'Web App'],
  },
  {
    id: 'ecommerce-store',
    title: 'E-Commerce Store',
    description: 'Full-featured online store with product catalog, shopping cart, and payment integration.',
    longDescription:
      'A complete e-commerce platform with product management, shopping cart functionality, and secure payment processing. Includes admin dashboard for inventory management and order tracking.',
    image: '/projects/project-4.jpg',
    technologies: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'React', icon: SiReact },
      { name: 'TailwindCSS', icon: SiTailwindcss },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'PostgreSQL', icon: SiPostgresql },
    ],
    liveUrl: 'https://example-ecommerce.vercel.app',
    githubUrl: 'https://github.com/yourusername/ecommerce-store',
    tags: ['E-Commerce', 'Shopping', 'Payment'],
  },
  {
    id: 'chat-application',
    title: 'Real-Time Chat Application',
    description: 'Modern messaging app with real-time communication and user-friendly interface.',
    longDescription:
      'A real-time chat application supporting direct messaging, group conversations, file sharing, and user presence indicators. Built with React and WebSocket technology for instant updates.',
    image: '/projects/project-5.jpg',
    technologies: [
      { name: 'React', icon: SiReact },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'TypeScript', icon: SiTypescript },
    ],
    liveUrl: 'https://example-chat-app.vercel.app',
    githubUrl: 'https://github.com/yourusername/chat-application',
    tags: ['Chat', 'Real-Time', 'WebSocket'],
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    description: 'Data visualization platform with interactive charts and comprehensive reporting tools.',
    longDescription:
      'A sophisticated analytics dashboard providing real-time data visualization, custom reports, and actionable insights. Features interactive charts, export functionality, and role-based access control.',
    image: '/projects/project-6.jpg',
    technologies: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'TailwindCSS', icon: SiTailwindcss },
      { name: 'Redux', icon: SiRedux },
    ],
    liveUrl: 'https://example-analytics.vercel.app',
    githubUrl: 'https://github.com/yourusername/analytics-dashboard',
    tags: ['Analytics', 'Dashboard', 'Data Visualization'],
  },
];