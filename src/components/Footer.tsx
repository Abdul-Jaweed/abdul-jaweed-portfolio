import React from 'react';
import { ArrowUp, Github, Linkedin, Globe } from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface FooterProps {
  darkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`border-t py-12 transition-colors ${
        darkMode ? 'bg-black text-neutral-400 border-neutral-800' : 'bg-neutral-900 text-neutral-300 border-neutral-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          {/* Left Brand Identity */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1 font-bold text-lg">
              <span className="text-white font-black">A.</span>
              <span className="tracking-[0.15em] text-white font-mono text-sm font-black">JAWEED</span>
            </div>
            <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-bold">
              AI Engineer • Hyderabad, India
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] font-mono uppercase tracking-wider font-bold">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#architecture" className="hover:text-white transition-colors">
              Architecture
            </a>
            <a href="#articles" className="hover:text-white transition-colors">
              Insights
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={profileData.contact.website}
              target="_blank"
              rel="noreferrer"
              aria-label="Website"
              className="p-2 rounded bg-neutral-800 border border-neutral-700 text-neutral-300 hover:text-white hover:border-white transition-all"
            >
              <Globe className="w-4 h-4" />
            </a>

            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded bg-neutral-800 border border-neutral-700 text-neutral-300 hover:text-white hover:border-white transition-all"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded bg-neutral-800 border border-neutral-700 text-neutral-300 hover:text-white hover:border-white transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2.5 rounded bg-white text-black hover:bg-neutral-200 transition-colors cursor-pointer font-bold"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
