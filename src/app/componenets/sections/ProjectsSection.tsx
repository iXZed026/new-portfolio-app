'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '../ui/ProjectCard';
import { PROJECTS } from '../lib/constants/projects';
import { usePrefersReducedMotion } from '../lib/hooks/usePrefersReducedMotion';

export const ProjectsSection: React.FC = () => {
    const prefersReducedMotion = usePrefersReducedMotion();

    const scrollToContact = () => {
        const contactSection = document.querySelector(
            '[data-section="contact"]'
        );

        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <section
            aria-label="Projects section"
            className="relative py-20 w-full px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-black" />

            {/* Glow Effects */}
            {!prefersReducedMotion && (
                <>
                    <motion.div
                        className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-5 blur-3xl pointer-events-none"
                        animate={{
                            scale: [1, 1.15, 1],
                            opacity: [0.05, 0.1, 0.05],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />

                    <motion.div
                        className="absolute bottom-1/2 left-0 w-80 h-80 bg-blue-500 rounded-full opacity-5 blur-3xl pointer-events-none"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.05, 0.08, 0.05],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: 1,
                        }}
                    />
                </>
            )}

            {/* Top Border */}
            <motion.div
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                animate={
                    prefersReducedMotion
                        ? {}
                        : {
                            opacity: [0.3, 0.8, 0.3],
                        }
                }
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            <div className="relative z-10 w-full max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    className="mb-35"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="text-sm font-medium text-gray-300 uppercase tracking-widest">
                            My Work
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        Featured{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </motion.h2>

                    <motion.p
                        className="text-lg text-gray-300 max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        A selection of projects I&apos;ve designed and developed.
                        Each project showcases my skills in full-stack
                        development, UI/UX design, and problem-solving.
                    </motion.p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            delay={index * 0.1}
                        />
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className="text-center pt-8 border-t border-blue-500/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <p className="text-gray-400 mb-6">
                        Interested in working together or want to see more
                        projects?
                    </p>

                    <motion.button
                        onClick={scrollToContact}
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300"
                        whileHover={
                            prefersReducedMotion
                                ? {}
                                : { scale: 1.05 }
                        }
                        whileTap={
                            prefersReducedMotion
                                ? {}
                                : { scale: 0.98 }
                        }
                    >
                        Get In Touch
                        <span>→</span>
                    </motion.button>
                </motion.div>
            </div>

            {/* Bottom Glow Line */}
            <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                animate={
                    prefersReducedMotion
                        ? {}
                        : {
                            opacity: [0.3, 0.8, 0.3],
                        }
                }
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                }}
            />
        </section>
    );
};