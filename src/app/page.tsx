// app/page.tsx

'use client';

import React, { useRef } from 'react';
import { HeroSection } from './componenets/hero/HeroSection';
import { AboutSection } from './componenets/sections/AboutSection';
import { ContactSection } from './componenets/sections/ContactSection';
import { ProjectsSection } from './componenets/sections/ProjectsSection';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  const handleViewSkills = () => {
    const skillsElement = document.querySelector('[data-section="skills"]');
    skillsElement?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactMe = () => {
    const contactElement = document.querySelector('[data-section="contact"]');
    contactElement?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollDown = () => {
    if (typeof window !== 'undefined') {
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div ref={heroRef} data-section="home">
        <HeroSection
          name="Danyal Lotfi"
          title="Full Stack Developer"
          subtitle="Building exceptional digital experiences with modern technologies. Specializing in React, Next.js, and TypeScript."
          ctaPrimary={{
            text: 'View My Work',
            onClick: handleViewSkills,
          }}
          ctaSecondary={{
            text: 'Contact Me',
            onClick: handleContactMe,
          }}
          onScrollClick={handleScrollDown}
        />
      </div>

      {/* About Section */}
      <div data-section="about">
        <AboutSection />
      </div>

      <div data-section="projects">
        <ProjectsSection />
      </div>

      {/* Contact Section */}
      <div data-section="contact">
        <ContactSection />
      </div>
    </>
  );
}