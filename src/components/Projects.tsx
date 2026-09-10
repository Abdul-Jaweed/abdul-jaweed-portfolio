import React, { useState } from 'react';
import {
  FolderGit2,
  Search,
  Code,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  darkMode: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['all', 'AI Infra', 'MLOps', 'RAG & Agents', 'Open Source'];

  const filteredProjects = projectsData.filter((proj) => {
    const matchesCategory =
      activeCategory === 'all' ||
      proj.category === activeCategory ||
      (activeCategory === 'Open Source' && proj.isOpenSource);

    const matchesSearch =
      !searchQuery.trim() ||
      proj.title.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
      proj.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase().trim()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded text-[10px] font-mono uppercase tracking-[0.25em] border font-bold ${
            darkMode ? 'bg-white/10 text-white border-white/20' : 'bg-black/10 text-black border-black/20'
          }`}>
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED AI PLATFORMS & PROJECTS</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black ${darkMode ? 'text-white' : 'text-black'}`}>
            Enterprise Platforms & Open Source
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              darkMode ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            Production-grade multi-tenant AI systems, MLOps orchestration engines, and developer tooling.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded text-[10px] font-mono uppercase tracking-[0.15em] font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? darkMode
                      ? 'bg-white text-black font-black'
                      : 'bg-black text-white font-black'
                    : darkMode
                    ? 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white'
                    : 'bg-neutral-100 border border-neutral-300 text-neutral-600 hover:text-black'
                }`}
              >
                {cat === 'all' ? 'All Platforms' : cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className={`w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 ${darkMode ? 'text-neutral-500' : 'text-neutral-400'}`} />
            <input
              type="text"
              placeholder="Search platforms (e.g. LangGraph, ClickHouse)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-9 pr-4 py-2 rounded text-xs font-mono border focus:outline-none transition-all ${
                darkMode
                  ? 'bg-neutral-900 border-neutral-800 text-white placeholder-neutral-500 focus:border-white'
                  : 'bg-white border-neutral-300 text-black placeholder-neutral-400 focus:border-black'
              }`}
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className={`p-6 rounded-xl border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                proj.featured
                  ? darkMode
                    ? 'bg-neutral-950 border-white shadow-xl'
                    : 'bg-white border-black shadow-md'
                  : darkMode
                  ? 'bg-neutral-950 border-neutral-800 hover:border-neutral-600'
                  : 'bg-white border-neutral-300 shadow-xs hover:border-neutral-500'
              }`}
            >
              <div className="space-y-4">
                {/* Header Pills */}
                <div className="flex items-center justify-between gap-2">
                  <span className={`px-2.5 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider border font-bold ${
                    darkMode ? 'bg-white/10 text-white border-white/20' : 'bg-black/10 text-black border-black/20'
                  }`}>
                    {proj.category}
                  </span>
                  {proj.isOpenSource && (
                    <span className="text-[10px] font-mono font-bold flex items-center gap-1 uppercase tracking-wider">
                      <Code className="w-3 h-3" />
                      <span>Open Source</span>
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className={`text-xl font-bold transition-colors ${darkMode ? 'text-white' : 'text-black'}`}>
                    {proj.title}
                  </h3>
                  <p className="text-xs font-mono text-neutral-400 mt-0.5 font-bold">{proj.subtitle}</p>
                </div>

                {/* Description */}
                <p
                  className={`text-xs sm:text-sm leading-relaxed line-clamp-3 ${
                    darkMode ? 'text-neutral-300' : 'text-neutral-600'
                  }`}
                >
                  {proj.description}
                </p>

                {/* Architecture Highlights Pill Box */}
                {proj.architectureHighlights && proj.architectureHighlights.length > 0 && (
                  <div
                    className={`p-3 rounded border text-[11px] space-y-1 ${
                      darkMode ? 'bg-black border-neutral-800' : 'bg-neutral-100 border-neutral-300'
                    }`}
                  >
                    <div className="font-mono font-bold flex items-center gap-1 text-[10px] uppercase tracking-wider">
                      <Sparkles className="w-3 h-3" />
                      <span>KEY HIGHLIGHT</span>
                    </div>
                    <p className="text-neutral-400 line-clamp-1">{proj.architectureHighlights[0]}</p>
                  </div>
                )}

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.techStack.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-0.5 rounded text-[9px] font-mono uppercase font-bold tracking-wider border ${
                        darkMode
                          ? 'bg-neutral-900 border-neutral-800 text-neutral-300'
                          : 'bg-neutral-100 border-neutral-300 text-neutral-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {proj.techStack.length > 6 && (
                    <span className="text-[10px] font-mono text-neutral-500 px-1 py-0.5 font-bold">
                      +{proj.techStack.length - 6} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Trigger Button */}
              <div className={`pt-6 border-t mt-6 flex items-center justify-between ${
                darkMode ? 'border-neutral-800' : 'border-neutral-200'
              }`}>
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-bold">{proj.status}</span>

                <button
                  onClick={() => setSelectedProject(proj)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-[10px] uppercase tracking-wider font-bold font-mono border transition-all cursor-pointer ${
                    darkMode
                      ? 'bg-white text-black border-white hover:bg-neutral-200'
                      : 'bg-black text-white border-black hover:bg-neutral-800'
                  }`}
                >
                  <span>Inspect Stack</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-stone-500 font-mono text-xs uppercase tracking-wider">
            No projects found matching "{searchQuery}". Try adjusting your filters.
          </div>
        )}

        {/* Selected Project Modal */}
        <ProjectModal
          project={selectedProject}
          darkMode={darkMode}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
