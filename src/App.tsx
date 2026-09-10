import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { ArchitectureExplorer } from './components/ArchitectureExplorer';
import { BlogsCaseStudies } from './components/BlogsCaseStudies';
import { EducationCertifications } from './components/EducationCertifications';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeViewerModal } from './components/ResumeViewerModal';
import { ParticleBackground } from './components/ParticleBackground';
import { MusicPlayer } from './components/MusicPlayer';
import { PortfolioChatbot } from './components/PortfolioChatbot';
import { WorkableTerminal } from './components/WorkableTerminal';
import { IntroTourModal } from './components/IntroTourModal';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true; // Balanced dark mode by default
  });

  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [terminalModalOpen, setTerminalModalOpen] = useState<boolean>(false);
  const [introTourOpen, setIntroTourOpen] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Client-side visitor notification trigger on initial page load
  useEffect(() => {
    try {
      const hasTracked = sessionStorage.getItem('aj_visited');
      if (!hasTracked) {
        sessionStorage.setItem('aj_visited', 'true');
        fetch('/api/track-visit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            page: window.location.pathname + window.location.search,
            referrer: document.referrer || 'Direct Visit',
            screen: `${window.screen.width}x${window.screen.height}`,
          }),
        }).catch(() => {});
      }
    } catch {}
  }, []);

  const handleTriggerSimulation = () => {
    const el = document.getElementById('architecture');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    window.dispatchEvent(new CustomEvent('trigger-simulation'));
  };

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-black relative overflow-x-hidden ${
        darkMode ? 'bg-[#0a0a0a] text-white' : 'bg-white text-black'
      }`}
    >
      {/* Dynamic Moving Particle Canvas Background */}
      <ParticleBackground darkMode={darkMode} />

      {/* Sticky Header Navigation */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResumeModal={() => setResumeModalOpen(true)}
        onOpenTerminalModal={() => setTerminalModalOpen(true)}
        onOpenIntroTour={() => setIntroTourOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="relative z-10">
        <Hero
          darkMode={darkMode}
          onOpenResumeModal={() => setResumeModalOpen(true)}
          onOpenIntroTour={() => setIntroTourOpen(true)}
        />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <ArchitectureExplorer darkMode={darkMode} />
        <BlogsCaseStudies darkMode={darkMode} />
        <EducationCertifications darkMode={darkMode} />
        <Achievements darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      {/* Music / Songs Player */}
      <MusicPlayer
        darkMode={darkMode}
        onTriggerSimulation={handleTriggerSimulation}
      />

      {/* Portfolio AI Chatbot */}
      <PortfolioChatbot
        darkMode={darkMode}
        onOpenResumeModal={() => setResumeModalOpen(true)}
        onTriggerSimulation={handleTriggerSimulation}
        onOpenIntroTour={() => setIntroTourOpen(true)}
      />

      {/* Workable Terminal CLI Modal */}
      <WorkableTerminal
        isOpen={terminalModalOpen}
        onClose={() => setTerminalModalOpen(false)}
        darkMode={darkMode}
        onTriggerSimulation={handleTriggerSimulation}
        onOpenResumeModal={() => setResumeModalOpen(true)}
        setDarkMode={setDarkMode}
        onOpenIntroTour={() => {
          setTerminalModalOpen(false);
          setIntroTourOpen(true);
        }}
      />

      {/* Footer */}
      <Footer darkMode={darkMode} />

      {/* Printable Interactive Resume Viewer Modal */}
      <ResumeViewerModal
        isOpen={resumeModalOpen}
        darkMode={darkMode}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* Non-intrusive Intro Tour Step-by-Step Guide Modal */}
      <IntroTourModal
        isOpen={introTourOpen}
        onClose={() => setIntroTourOpen(false)}
        darkMode={darkMode}
        onOpenTerminalModal={() => setTerminalModalOpen(true)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
        onTriggerSimulation={handleTriggerSimulation}
      />
    </div>
  );
}

