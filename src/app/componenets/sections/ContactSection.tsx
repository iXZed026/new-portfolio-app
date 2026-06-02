'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ContactCard } from '../ui/ContactCard';
import { ParticlesBackground } from '../hero/ParticlesBackground';
import { CONTACT_LINKS } from '../lib/constants/contact';
import { usePrefersReducedMotion } from '../lib/hooks/usePrefersReducedMotion';

export const ContactSection: React.FC = () => {
    const prefersReducedMotion = usePrefersReducedMotion();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } =
            e.currentTarget.getBoundingClientRect();

        const x = (clientX - left) / width;
        const y = (clientY - top) / height;

        setMousePosition({
            x: x * 10 - 5,
            y: y * 10 - 5,
        });
    };

    return (
        <section
            className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black py-20"
            onMouseMove={prefersReducedMotion ? undefined : handleMouseMove}
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-blue-950/40" />

            <ParticlesBackground
                particleCount={50}
                particleColor="#1447E6"
                particleOpacity={0.2}
                interactive={!prefersReducedMotion}
            />

            {/* Glow */}
            {!prefersReducedMotion && (
                <>
                    <motion.div
                        className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl"
                        animate={{
                            scale: [1, 1.15, 1],
                            opacity: [0.1, 0.15, 0.1],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />

                    <motion.div
                        className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-500 rounded-full opacity-5 blur-3xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.05, 0.1, 0.05],
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

            {/* Content */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Header */}
                    <motion.div
                        className="inline-flex items-center gap-2 mb-6 justify-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="text-sm font-medium text-gray-300 uppercase tracking-widest">
                            Get In Touch
                        </span>
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    </motion.div>

                    {/* Title */}
                    <motion.h2
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        Let's Connect
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        className="text-lg text-gray-300 max-w-2xl mx-auto mb-16 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        I'm always excited to collaborate on new projects and
                        discuss ideas. Feel free to reach out through any of the
                        channels below.
                    </motion.p>

                    {/* Cards */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                        animate={{
                            x: !prefersReducedMotion
                                ? mousePosition.x * 0.2
                                : 0,
                            y: !prefersReducedMotion
                                ? mousePosition.y * 0.2
                                : 0,
                            opacity: 1,
                        }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {CONTACT_LINKS.map((contact, index) => (
                            <ContactCard
                                key={index}
                                icon={contact.icon}
                                platform={contact.platform}
                                value={contact.value}
                                href={contact.href}
                                delay={index * 0.1}
                            />
                        ))}
                    </motion.div>

                    {/* Divider */}
                    <motion.div
                        className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 mb-12"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8 }}
                    />

                    {/* Footer */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <p className="text-gray-400 mb-4">
                            Prefer email? Send me a message at{' '}
                            <a
                                href="mailto:danyal.titanka24@gmail.com"
                                className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                            >
                                danyal.titanka24@gmail.com
                            </a>
                        </p>

                        <p className="text-sm text-gray-500">
                            Response time: Usually within 24 hours
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};