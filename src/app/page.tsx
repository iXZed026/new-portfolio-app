// app/page.tsx

'use client';

import React, { useRef } from 'react';
import { HeroSection } from './componenets/hero/HeroSection';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  const handleViewSkills = () => {
    console.log('View skills clicked');
  };

  const handleContactMe = () => {
    console.log('Contact me clicked');
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
      <div ref={heroRef}>
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
    </>
  );
}