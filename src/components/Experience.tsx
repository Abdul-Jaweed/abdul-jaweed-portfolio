import React, { useState } from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Sparkles,
  Code,
} from 'lucide-react';
import { experiencesData } from '../data/portfolioData';

interface ExperienceProps {
  darkMode: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const [expandedId, setExpandedId] = useState<string>(experiencesData[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="experience" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded text-[10px] font-mono uppercase tracking-[0.25em] border font-bold ${
            darkMode ? 'bg-white/10 text-white border-white/20' : 'bg-black/10 text-black border-black/20'
          }`}>
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRACK RECORD</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black ${darkMode ? 'text-white' : 'text-black'}`}>
            Professional Engineering Experience
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              darkMode ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            3+ years designing, scaling, and deploying AI platforms, MLOps infrastructure, and serverless AI applications across global teams.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className={`relative border-l ml-4 sm:ml-8 lg:ml-12 space-y-8 text-left ${
          darkMode ? 'border-neutral-800' : 'border-neutral-300'
        }`}>
          {experiencesData.map((exp) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div key={exp.id} className="relative pl-6 sm:pl-10 group">
                {/* Timeline Dot Indicator */}
                <div
                  className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                    exp.isCurrent
                      ? darkMode
                        ? 'bg-white border-white text-black font-black'
                        : 'bg-black border-black text-white font-black'
                      : darkMode
                      ? 'bg-black border-neutral-700 text-neutral-300'
                      : 'bg-white border-neutral-400 text-neutral-700'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                {/* Experience Card */}
                <div
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    darkMode
                      ? 'bg-neutral-950 border-neutral-800 hover:border-white'
                      : 'bg-white border-neutral-300 shadow-sm hover:border-black'
                  }`}
                >
                  {/* Card Header */}
                  <div
                    onClick={() => toggleExpand(exp.id)}
                    className="p-5 sm:p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
                          {exp.role}
                        </h3>
                        <span className="text-neutral-500 font-sans">@</span>
                        <span className={`text-lg font-black ${darkMode ? 'text-white' : 'text-black'}`}>{exp.company}</span>

                        {exp.isCurrent && (
                          <span className={`px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider border font-bold ${
                            darkMode ? 'bg-white/10 text-white border-white/20' : 'bg-black/10 text-black border-black/20'
                          }`}>
                            Current Role
                          </span>
                        )}
                      </div>

                      {exp.projectTitle && (
                        <div className={`text-xs font-mono flex items-center gap-1.5 pt-0.5 font-bold ${
                          darkMode ? 'text-neutral-300' : 'text-neutral-700'
                        }`}>
                          <Code className="w-3.5 h-3.5" />
                          <span>{exp.projectTitle}</span>
                        </div>
                      )}

                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400 pt-1">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      aria-label="Expand details"
                      className={`p-2 rounded transition-colors border self-start sm:self-auto cursor-pointer ${
                        darkMode
                          ? 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white'
                          : 'bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-black'
                      }`}
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Card Expanded Content */}
                  {isExpanded && (
                    <div className={`px-5 pb-6 sm:px-6 border-t pt-5 space-y-5 animate-fadeIn ${
                      darkMode ? 'border-neutral-800' : 'border-neutral-200'
                    }`}>
                      {/* Tech Stack Pills */}
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 font-bold block">
                          Technologies & Frameworks
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.techStack.map((tech) => (
                            <span
                              key={tech}
                              className={`text-[9px] px-2.5 py-1 rounded border font-mono font-bold uppercase tracking-wider ${
                                darkMode
                                  ? 'border-neutral-800 bg-neutral-900 text-neutral-300'
                                  : 'border-neutral-300 bg-neutral-100 text-neutral-800'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Detailed Responsibilities */}
                      <div className="space-y-2">
                        <span className={`text-[10px] font-mono uppercase tracking-[0.2em] font-bold block ${
                          darkMode ? 'text-white' : 'text-black'
                        }`}>
                          Key Engineering Contributions
                        </span>
                        <ul className="space-y-2.5 text-xs sm:text-sm">
                          {exp.responsibilities.map((resp, index) => (
                            <li key={index} className="flex items-start gap-2.5 leading-relaxed">
                              <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-2 ${
                                darkMode ? 'bg-white' : 'bg-black'
                              }`} />
                              <span className={darkMode ? 'text-neutral-300' : 'text-neutral-700'}>
                                {resp}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key Achievement Highlights */}
                      {exp.keyAchievements && exp.keyAchievements.length > 0 && (
                        <div
                          className={`p-4 rounded-lg border ${
                            darkMode
                              ? 'bg-neutral-900 border-neutral-700 text-white'
                              : 'bg-neutral-100 border-neutral-300 text-black'
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-2 font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>IMPACT HIGHLIGHTS</span>
                          </div>
                          <ul className="space-y-1.5 text-xs font-sans">
                            {exp.keyAchievements.map((ach, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 opacity-80" />
                                <span>{ach}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
