import React, { useState } from 'react';
import {
  X,
  Layers,
  CheckCircle2,
  Terminal,
  Play,
  Sparkles,
  Code,
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  darkMode: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  darkMode,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'contributions' | 'simulator'>('architecture');
  const [simStep, setSimStep] = useState(0);

  if (!project) return null;

  const simLogs = [
    { text: `[${project.title}] Initializing runtime dependencies...`, time: '0.00s' },
    { text: `[AUTH] ZITADEL OIDC JWT verification passed for multi-tenant workspace`, time: '0.04s' },
    { text: `[GATEWAY] LiteLLM unified router dispatched prompt -> vLLM / OpenAI`, time: '0.12s' },
    { text: `[AGENT] LangGraph supervisor executing step 1: SQLGlot AST validation`, time: '0.22s' },
    { text: `[DATABASE] ClickHouse OLAP query executed (14ms). 12 records returned.`, time: '0.31s' },
    { text: `[OBSERVED] OpenTelemetry trace recorded -> Langfuse prompt trace synced.`, time: '0.35s' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className={`relative w-full max-w-4xl rounded-xl border shadow-2xl overflow-hidden my-8 transition-all ${
          darkMode
            ? 'bg-card border-soft text-stone-100'
            : 'bg-white border-stone-200 text-stone-900'
        }`}
      >
        {/* Modal Top Header Bar */}
        <div className={`p-6 border-b flex items-start justify-between gap-4 ${
          darkMode ? 'border-neutral-800' : 'border-neutral-200'
        }`}>
          <div className="space-y-1 text-left">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider border font-bold ${
                darkMode ? 'bg-white/10 text-white border-white/20' : 'bg-black/10 text-black border-black/20'
              }`}>
                {project.category}
              </span>
              <span className="text-[10px] font-mono text-emerald-500 font-bold uppercase tracking-wider">
                {project.status}
              </span>
            </div>
            <h2 className={`text-2xl sm:text-3xl font-black ${darkMode ? 'text-white' : 'text-black'}`}>
              {project.title}
            </h2>
            <p className="text-xs font-mono text-neutral-400 font-bold">{project.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className={`p-2 rounded transition-colors border cursor-pointer ${
              darkMode
                ? 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white'
                : 'bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-black'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tab Switcher */}
        <div className={`flex border-b px-6 pt-3 gap-2 ${
          darkMode ? 'bg-black border-neutral-800' : 'bg-neutral-100 border-neutral-300'
        }`}>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider font-bold border-b-2 transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'architecture'
                ? darkMode ? 'border-white text-white' : 'border-black text-black'
                : 'border-transparent text-neutral-500 hover:text-neutral-300'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>System Architecture</span>
          </button>

          <button
            onClick={() => setActiveTab('contributions')}
            className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider font-bold border-b-2 transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'contributions'
                ? darkMode ? 'border-white text-white' : 'border-black text-black'
                : 'border-transparent text-neutral-500 hover:text-neutral-300'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Key Contributions ({project.contributions.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('simulator')}
            className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider font-bold border-b-2 transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'simulator'
                ? darkMode ? 'border-white text-white' : 'border-black text-black'
                : 'border-transparent text-neutral-500 hover:text-neutral-300'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>Runtime Simulator</span>
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 text-left max-h-[60vh] overflow-y-auto space-y-6">
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 font-bold">
                  Overview
                </h4>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                  {project.description}
                </p>
              </div>

              {/* Architecture Highlights */}
              {project.architectureHighlights && (
                <div className="space-y-2">
                  <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 font-bold">
                    Architectural Pillars
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.architectureHighlights.map((arch, idx) => (
                      <div
                        key={idx}
                        className={`p-3.5 rounded border text-xs font-medium flex items-center gap-2.5 ${
                          darkMode
                            ? 'bg-neutral-900 border-neutral-800 text-neutral-200'
                            : 'bg-neutral-50 border-neutral-300 text-neutral-800'
                        }`}
                      >
                        <Sparkles className="w-4 h-4 shrink-0" />
                        <span>{arch}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Complete Tech Stack */}
              <div className="space-y-2">
                <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 font-bold">
                  Full Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider border font-bold ${
                        darkMode
                          ? 'bg-neutral-900 border-neutral-800 text-white'
                          : 'bg-neutral-100 border-neutral-300 text-black'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'contributions' && (
            <div className="space-y-3">
              <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 font-bold">
                Detailed Engineering Milestones
              </h4>
              <ul className="space-y-3">
                {project.contributions.map((item, idx) => (
                  <li
                    key={idx}
                    className={`p-3.5 rounded border text-xs sm:text-sm flex items-start gap-3 leading-relaxed ${
                      darkMode
                        ? 'bg-neutral-900 border-neutral-800 text-neutral-300'
                        : 'bg-neutral-50 border-neutral-300 text-neutral-800'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 opacity-80" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'simulator' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between font-mono text-[10px] text-neutral-400 uppercase tracking-wider font-bold">
                <span>SIMULATED PLATFORM EXECUTION TRACE</span>
                <button
                  onClick={() => setSimStep((prev) => (prev + 1) % simLogs.length)}
                  className={`px-3 py-1 rounded border flex items-center gap-1.5 font-bold cursor-pointer ${
                    darkMode
                      ? 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                      : 'bg-black/10 text-black border-black/20 hover:bg-black/20'
                  }`}
                >
                  <Play className="w-3 h-3" />
                  <span>Next Step ({simStep + 1}/{simLogs.length})</span>
                </button>
              </div>

              <div className={`p-4 rounded font-mono text-xs space-y-2 border ${
                darkMode ? 'bg-black border-neutral-800 text-neutral-300' : 'bg-neutral-900 border-neutral-800 text-neutral-200'
              }`}>
                {simLogs.slice(0, simStep + 1).map((log, idx) => (
                  <div key={idx} className="flex items-start gap-3 font-mono">
                    <span className="text-neutral-500 text-[10px] font-bold">{log.time}</span>
                    <span className="font-bold">&gt;</span>
                    <span className="font-semibold">{log.text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer */}
        <div className={`p-6 border-t flex flex-wrap items-center justify-between gap-4 ${
          darkMode ? 'bg-black border-neutral-800' : 'bg-neutral-100 border-neutral-300'
        }`}>
          <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
            {project.isOpenSource && (
              <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-[10px] uppercase tracking-wider font-bold border ${
                darkMode ? 'bg-white/10 text-white border-white/20' : 'bg-black/10 text-black border-black/20'
              }`}>
                <Code className="w-3.5 h-3.5" />
                <span>Open Source Repository</span>
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className={`px-4 py-2 rounded text-xs font-mono uppercase tracking-wider font-bold border cursor-pointer ${
                darkMode
                  ? 'bg-white text-black border-white hover:bg-neutral-200'
                  : 'bg-black text-white border-black hover:bg-neutral-800'
              }`}
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
