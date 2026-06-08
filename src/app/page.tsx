// app/page.tsx

'use client';

import React, { useRef } from 'react';
import { HeroSection } from './componenets/hero/HeroSection';
import { AboutSection } from './componenets/sections/AboutSection';
import { ContactSection } from './componenets/sections/ContactSection';
import { ProjectsSection } from './componenets/sections/ProjectsSection';
import { useInView } from './componenets/lib/hooks/useInView';

export default function Home() {

  const [aboutRef, aboutIsInView] = useInView<HTMLDivElement>();
  const [projectsRef, projectsIsInView] = useInView<HTMLDivElement>();
  const [contactsRef, contactsIsInView] = useInView<HTMLDivElement>();

  const handleViewSkills = () => {
    const skillsElement = document.querySelector('[data-section="skills"]');
    if (skillsElement) {
      skillsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleContactMe = () => {
    const contactElement = document.querySelector('[data-section="contact"]');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
      <div id='home' data-section="home">
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
      <div id='about' data-section="about">
        <div ref={aboutRef} className='min-h-[100vh]'  >
          {aboutIsInView && <AboutSection />}
        </div>
      </div>

      {/* Projects Section */}
      <div id='projects' data-section="projects">
        <div ref={projectsRef} className='min-h-[100vh]' >
          {projectsIsInView && <ProjectsSection />}
        </div>  </div>

      {/* Contact Section */}
      <div id='contact' data-section="contact">
        <div ref={contactsRef} className='min-h-[100vh]' >
          {contactsIsInView && <ContactSection />}
        </div>
      </div>
    </>
  );
}
