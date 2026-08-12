import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import CurrentlyExploring from './sections/CurrentlyExploring';
import Footer from './components/Footer';
import ProjectDemoModal from './components/ProjectDemoModal';
import { Project } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedDemoProject, setSelectedDemoProject] = useState<Project | null>(null);

  // IntersectionObserver to sync active section indicator in Navbar
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'education', 'skills', 'projects', 'achievements', 'contact'];
    
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F0E8] text-[#242424] font-sans antialiased selection:bg-[#82A775] selection:text-white relative">
      {/* Top Floating Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Portfolio Sections */}
      <main className="relative z-10">
        <Hero onScrollToExplore={() => handleNavigate('about')} />
        <About />
        <Education />
        <Skills />
        <Projects onOpenDemo={(project) => setSelectedDemoProject(project)} />
        <Achievements />
        <CurrentlyExploring />
      </main>

      {/* Footer & Back Cover Contact Section */}
      <Footer />

      {/* Interactive Project Simulator Modal */}
      <ProjectDemoModal
        project={selectedDemoProject}
        onClose={() => setSelectedDemoProject(null)}
      />
    </div>
  );
}
