import React, { useState, useEffect } from 'react';
import {
  Terminal,
  Sun,
  Moon,
  FileText,
  Menu,
  X,
  Cpu,
  Layers,
  Briefcase,
  FolderGit2,
  BookOpen,
  Mail,
  Award,
  Compass,
} from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenResumeModal: () => void;
  onOpenTerminalModal: () => void;
  onOpenIntroTour: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  setDarkMode,
  onOpenResumeModal,
  onOpenTerminalModal,
  onOpenIntroTour,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        'hero',
        'about',
        'skills',
        'experience',
        'projects',
        'architecture',
        'articles',
        'education',
        'contact',
      ];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: Cpu, id: 'about' },
    { name: 'Skills', href: '#skills', icon: Layers, id: 'skills' },
    { name: 'Experience', href: '#experience', icon: Briefcase, id: 'experience' },
    { name: 'Projects', href: '#projects', icon: FolderGit2, id: 'projects' },
    { name: 'Architecture', href: '#architecture', icon: Terminal, id: 'architecture' },
    { name: 'Insights', href: '#articles', icon: BookOpen, id: 'articles' },
    { name: 'Credentials', href: '#education', icon: Award, id: 'education' },
    { name: 'Contact', href: '#contact', icon: Mail, id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        darkMode
          ? isScrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-neutral-800/80 shadow-2xl'
            : 'bg-black/30 backdrop-blur-md border-b border-white/10'
          : isScrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-neutral-200/80 shadow-md'
          : 'bg-white/40 backdrop-blur-md border-b border-black/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo & Status */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="text-xl md:text-2xl font-bold tracking-tighter flex items-center gap-1.5">
              <span className={`px-2 py-0.5 rounded font-mono font-black text-sm tracking-widest ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
                A
              </span>
              <span className={`font-mono font-black ${darkMode ? 'text-white' : 'text-black'}`}>JAWEED</span>
            </div>

            <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-neutral-500/30">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-[10px] uppercase tracking-wider font-mono border font-bold ${
                darkMode ? 'bg-white/10 text-white border-white/20' : 'bg-black/10 text-black border-black/20'
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full mr-1.5 animate-pulse ${darkMode ? 'bg-white' : 'bg-black'}`} />
                AI PLATFORM ENGINEER
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded text-xs font-mono uppercase tracking-wider font-bold transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? darkMode
                        ? 'text-white bg-white/15 border-b-2 border-white'
                        : 'text-black bg-black/10 border-b-2 border-black'
                      : darkMode
                      ? 'text-neutral-400 hover:text-white hover:bg-white/5'
                      : 'text-neutral-600 hover:text-black hover:bg-black/5'
                  }`}
                >
                  <link.icon className="w-3.5 h-3.5 opacity-80" />
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Intro Tour Guided Walkthrough */}
            <button
              onClick={onOpenIntroTour}
              title="Start Guided Intro Tour"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono uppercase tracking-wider font-bold transition-all duration-200 border cursor-pointer ${
                darkMode
                  ? 'bg-neutral-900 border-neutral-700 text-sky-400 hover:bg-neutral-800 hover:border-sky-400'
                  : 'bg-neutral-100 border-neutral-300 text-sky-700 hover:bg-neutral-200 hover:border-sky-600'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Intro Tour</span>
            </button>

            {/* Terminal CLI Modal Launcher */}
            <button
              onClick={onOpenTerminalModal}
              title="Launch Workable Terminal CLI"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono uppercase tracking-wider font-bold transition-all duration-200 border cursor-pointer ${
                darkMode
                  ? 'bg-neutral-900 border-neutral-700 text-emerald-400 hover:bg-neutral-800 hover:border-emerald-500'
                  : 'bg-neutral-100 border-neutral-300 text-emerald-600 hover:bg-neutral-200 hover:border-emerald-700'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">CLI Terminal</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
              className={`p-2 rounded border transition-all duration-200 cursor-pointer ${
                darkMode
                  ? 'bg-neutral-900 border-neutral-700 text-white hover:bg-neutral-800'
                  : 'bg-neutral-100 border-neutral-300 text-black hover:bg-neutral-200'
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4 text-white" /> : <Moon className="w-4 h-4 text-black" />}
            </button>

            {/* Resume CTA */}
            <button
              onClick={onOpenResumeModal}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded text-xs font-mono uppercase tracking-wider font-bold transition-all duration-200 border cursor-pointer ${
                darkMode
                  ? 'bg-white text-black border-white hover:bg-neutral-200'
                  : 'bg-black text-white border-black hover:bg-neutral-800'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Resume</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className={`lg:hidden p-2 rounded transition-colors border ${
                darkMode
                  ? 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:bg-neutral-800'
                  : 'bg-neutral-100 border-neutral-300 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b px-4 py-4 space-y-2 transition-all ${
            darkMode
              ? 'bg-black/95 backdrop-blur-xl border-neutral-800 text-white'
              : 'bg-white/95 backdrop-blur-xl border-neutral-200 text-black'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded text-xs font-mono uppercase tracking-wider font-bold transition-colors ${
                activeSection === link.id
                  ? darkMode
                    ? 'bg-white text-black font-black'
                    : 'bg-black text-white font-black'
                  : darkMode
                  ? 'hover:bg-neutral-900 text-neutral-300'
                  : 'hover:bg-neutral-100 text-neutral-700'
              }`}
            >
              <link.icon className="w-4 h-4" />
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-neutral-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenIntroTour();
              }}
              className={`w-full flex items-center justify-center gap-2 py-2.5 rounded border font-mono font-bold text-xs uppercase tracking-widest cursor-pointer ${
                darkMode
                  ? 'bg-neutral-900 text-sky-400 border-neutral-700 hover:bg-neutral-800'
                  : 'bg-neutral-100 text-sky-700 border-neutral-300 hover:bg-neutral-200'
              }`}
            >
              <Compass className="w-4 h-4" />
              Start Guided Intro Tour
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminalModal();
              }}
              className={`w-full flex items-center justify-center gap-2 py-2.5 rounded border font-mono font-bold text-xs uppercase tracking-widest cursor-pointer ${
                darkMode
                  ? 'bg-neutral-900 text-emerald-400 border-neutral-700 hover:bg-neutral-800'
                  : 'bg-neutral-100 text-emerald-700 border-neutral-300 hover:bg-neutral-200'
              }`}
            >
              <Terminal className="w-4 h-4" />
              Launch CLI Terminal
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className={`w-full flex items-center justify-center gap-2 py-2.5 rounded border font-mono font-bold text-xs uppercase tracking-widest cursor-pointer ${
                darkMode
                  ? 'bg-white text-black border-white hover:bg-neutral-200'
                  : 'bg-black text-white border-black hover:bg-neutral-800'
              }`}
            >
              <FileText className="w-4 h-4" />
              Open Interactive Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
