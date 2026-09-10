import React, { useState, useEffect } from 'react';
import {
  Terminal as TerminalIcon,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Server,
  Cpu,
  Play,
  RotateCcw,
  Zap,
  Activity,
  Compass,
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface HeroProps {
  darkMode: boolean;
  onOpenResumeModal: () => void;
  onOpenIntroTour?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  darkMode,
  onOpenResumeModal,
  onOpenIntroTour,
}) => {
  // Interactive Command Terminal CLI
  const [cliInput, setCliInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<
    Array<{ command?: string; output: string; color?: string }>
  >([
    {
      output: 'DataHek Multi-Agent Platform Daemon online.',
      color: 'text-[#c19a6b]',
    },
    {
      output: 'Type "help" or click a preset command below to execute platform tasks.',
      color: 'text-stone-400',
    },
  ]);

  const handleRunCommand = (cmdStr: string) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === 'clear') {
      setCommandHistory([]);
      setCliInput('');
      return;
    }

    let newLogs: Array<{ output: string; color?: string }> = [];

    if (cleanCmd === 'status') {
      newLogs = [
        { output: '[ZITADEL Auth] Tenant JWT session validated. Scope: admin:ai-platform', color: 'text-emerald-400' },
        { output: '[ClickHouse Node] Cluster active. 14,200 events/sec ingested.', color: 'text-blue-400' },
        { output: '[LiteLLM Gateway] P99 Latency: 11.4ms. Cost tracking active.', color: 'text-purple-400' },
        { output: '[MemoryLoom] Qdrant + pgvector indexed 2.4M memory vectors.', color: 'text-[#c19a6b]' },
      ];
    } else if (cleanCmd === 'gateway' || cleanCmd === 'test-gateway') {
      newLogs = [
        { output: 'Dispatching sample prompt to LiteLLM Router...', color: 'text-blue-400' },
        { output: 'Evaluating Cerbos ABAC rule: tenant_id == request.tenant', color: 'text-[#c19a6b]' },
        { output: 'Model fallback matrix: GPT-4o -> Claude-3.5-Sonnet -> Llama-3.3-70B', color: 'text-emerald-400' },
        { output: 'Response delivered in 142ms with 100% token audit trail.', color: 'text-emerald-400' },
      ];
    } else if (cleanCmd === 'bench' || cleanCmd === 'benchmark') {
      newLogs = [
        { output: 'Running AST SQLGlot validator benchmark...', color: 'text-stone-300' },
        { output: 'Processed 5,000 queries in 0.84s. 0 illegal mutation leaks.', color: 'text-emerald-400' },
        { output: 'Throughput: 5,952 ops/sec. Memory allocation stable.', color: 'text-cyan-400' },
      ];
    } else if (cleanCmd === 'help') {
      newLogs = [
        { output: 'Available CLI commands:', color: 'text-[#c19a6b]' },
        { output: '  status    - Check live system nodes and auth status', color: 'text-stone-300' },
        { output: '  gateway   - Simulate LiteLLM fallback & token audit routing', color: 'text-stone-300' },
        { output: '  bench     - Run AST SQL query validator benchmark', color: 'text-stone-300' },
        { output: '  clear     - Reset console history', color: 'text-stone-300' },
      ];
    } else {
      newLogs = [
        { output: `Command unrecognized: "${cleanCmd}". Type "help" for options.`, color: 'text-rose-400' },
      ];
    }

    setCommandHistory((prev) => [
      ...prev,
      { command: cmdStr, output: 'Executing...', color: 'text-stone-500' },
      ...newLogs,
    ]);
    setCliInput('');
  };

  return (
    <section
      id="hero"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      {/* Background Subtle Monochrome Glow Spheres */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] blur-[130px] rounded-full pointer-events-none -z-10 animate-pulse-slow ${
        darkMode ? 'bg-white/5' : 'bg-black/5'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Main Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Availability Eyebrow */}
            <div>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono border font-bold ${
                darkMode
                  ? 'border-white/20 bg-white/10 text-white'
                  : 'border-black/20 bg-black/5 text-black'
              }`}>
                <span className={`w-2 h-2 rounded-full animate-ping ${darkMode ? 'bg-white' : 'bg-black'}`} />
                <span>Available for Full-Time Roles</span>
              </div>
            </div>

            {/* Name & Headline */}
            <div className="space-y-4">
              <h1 className="serif text-5xl sm:text-6xl md:text-7xl leading-[1.08] tracking-tight">
                <span className={`italic font-serif ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>Abdul</span><br />
                <span className={`font-sans font-black ${darkMode ? 'text-white' : 'text-black'}`}>Jaweed</span>
              </h1>
              <p
                className={`text-lg sm:text-xl font-medium leading-relaxed max-w-xl ${
                  darkMode ? 'text-neutral-300' : 'text-neutral-700'
                }`}
              >
                {profileData.headline}
              </p>
            </div>

            {/* Detailed Bio snippet */}
            <p
              className={`text-sm sm:text-base leading-relaxed max-w-2xl ${
                darkMode ? 'text-neutral-400' : 'text-neutral-600'
              }`}
            >
              Building enterprise AI applications, LLM agents (LangGraph, MCP), production Memory-as-a-Service (MaaS) systems at Human Managed, open-source data platforms (DataHek OSS), and high-level ML libraries (MLFAST).
            </p>

            {/* Core Tech Stack Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {[
                'Python',
                'FastAPI',
                'LangGraph',
                'LiteLLM',
                'ClickHouse',
                'PostgreSQL (pgvector)',
                'Qdrant',
                'MCP Server',
                'Docker',
                'ZITADEL',
              ].map((tech) => (
                <span
                  key={tech}
                  className={`text-[10px] font-mono px-3 py-1 border rounded uppercase tracking-wider font-bold transition-all duration-200 hover:scale-105 ${
                    darkMode
                      ? 'border-neutral-800 bg-neutral-900 text-neutral-300 hover:border-white hover:bg-white hover:text-black'
                      : 'border-neutral-300 bg-neutral-100 text-neutral-800 hover:border-black hover:bg-black hover:text-white'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#projects"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded text-xs font-mono uppercase tracking-[0.2em] font-black transition-all shadow-md cursor-pointer ${
                  darkMode
                    ? 'bg-white text-black hover:bg-neutral-200'
                    : 'bg-black text-white hover:bg-neutral-800'
                }`}
              >
                <span>View Works</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#architecture"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded text-xs font-mono uppercase tracking-[0.2em] font-bold border transition-all cursor-pointer ${
                  darkMode
                    ? 'border-neutral-700 bg-neutral-900 text-white hover:border-white'
                    : 'border-neutral-300 bg-neutral-100 text-black hover:border-black'
                }`}
              >
                <TerminalIcon className="w-3.5 h-3.5" />
                <span>Architecture</span>
              </a>

              {onOpenIntroTour && (
                <button
                  onClick={onOpenIntroTour}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded text-xs font-mono uppercase tracking-[0.2em] font-bold border transition-all cursor-pointer ${
                    darkMode
                      ? 'border-sky-500/40 bg-sky-500/10 text-sky-400 hover:bg-sky-500/20 hover:border-sky-400'
                      : 'border-sky-500/40 bg-sky-50 text-sky-700 hover:bg-sky-100 hover:border-sky-600'
                  }`}
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Intro Tour</span>
                </button>
              )}

              <button
                onClick={onOpenResumeModal}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded text-xs font-mono uppercase tracking-[0.2em] font-bold border transition-all cursor-pointer ${
                  darkMode
                    ? 'border-neutral-700 text-neutral-300 hover:text-white hover:border-white'
                    : 'border-neutral-300 text-neutral-700 hover:text-black hover:border-black'
                }`}
              >
                <span>Interactive Resume</span>
              </button>
            </div>

            {/* Contact Links Bar */}
            <div className="pt-6 border-t border-neutral-800 flex flex-wrap items-center gap-6 text-[11px] font-mono uppercase tracking-[0.15em] font-medium opacity-80">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:opacity-100 hover:underline transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:opacity-100 hover:underline transition-all"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${profileData.contact.email}`}
                className="flex items-center gap-1.5 hover:opacity-100 hover:underline transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>

              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{profileData.contact.location}</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Architecture CLI Terminal & Live Counters */}
          <div className="lg:col-span-5 space-y-4">
            <div
              className={`rounded-xl border shadow-2xl overflow-hidden transition-all ${
                darkMode
                  ? 'bg-neutral-950 border-neutral-800 text-white'
                  : 'bg-white border-neutral-300 text-black'
              }`}
            >
              {/* Terminal Window Header */}
              <div
                className={`px-4 py-3 border-b flex items-center justify-between ${
                  darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-100 border-neutral-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-200" />
                  <span className={`ml-2 font-mono text-[11px] font-bold ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    datahek-cli ~ v3.8
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-[9px] font-mono border font-bold ${
                    darkMode ? 'bg-white/10 text-white border-white/20' : 'bg-black/10 text-black border-black/20'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full mr-1.5 animate-pulse ${darkMode ? 'bg-white' : 'bg-black'}`} />
                    CLI ACTIVE
                  </span>
                </div>
              </div>

              {/* Terminal Console Output */}
              <div
                className={`p-5 font-mono text-xs space-y-2.5 min-h-[220px] max-h-[300px] overflow-y-auto ${
                  darkMode ? 'bg-black text-neutral-200' : 'bg-neutral-950 text-neutral-200'
                }`}
              >
                <div className="flex items-center gap-2 text-neutral-400 pb-2 border-b border-neutral-800">
                  <TerminalIcon className="w-4 h-4 text-white" />
                  <span>Interactive System CLI Console</span>
                </div>

                {commandHistory.map((item, idx) => (
                  <div key={idx} className="space-y-1 animate-fadeIn">
                    {item.command && (
                      <div className="flex items-center gap-2 text-white font-bold">
                        <span className="text-neutral-400">&gt;</span>
                        <span>{item.command}</span>
                      </div>
                    )}
                    <div className={`text-[11px] leading-relaxed ${item.color || 'text-neutral-300'}`}>
                      {item.output}
                    </div>
                  </div>
                ))}

                {/* Live CLI Input line */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleRunCommand(cliInput);
                  }}
                  className="pt-2 flex items-center gap-2 text-xs"
                >
                  <span className="text-white font-bold">&gt;</span>
                  <input
                    type="text"
                    value={cliInput}
                    onChange={(e) => setCliInput(e.target.value)}
                    placeholder="Type 'status', 'gateway', 'bench' or 'help'..."
                    className="w-full bg-transparent border-none outline-none text-white placeholder-neutral-500 font-mono text-xs"
                  />
                </form>
              </div>

              {/* Preset Command Buttons */}
              <div
                className={`p-3 border-t flex flex-wrap items-center gap-2 ${
                  darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-100 border-neutral-200'
                }`}
              >
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider font-bold">
                  Presets:
                </span>
                {['status', 'gateway', 'bench', 'help', 'clear'].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => handleRunCommand(cmd)}
                    className={`px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider border font-bold transition-colors cursor-pointer ${
                      darkMode
                        ? 'border-neutral-700 bg-neutral-950 text-white hover:bg-white hover:text-black'
                        : 'border-neutral-300 bg-white text-black hover:bg-black hover:text-white'
                    }`}
                  >
                    {cmd}
                  </button>
                ))}
              </div>

              {/* Quick Interactive Metrics Grid */}
              <div className="grid grid-cols-2 gap-px bg-neutral-800 border-t border-neutral-800 text-left">
                <div className={`p-4 space-y-1 ${darkMode ? 'bg-neutral-950' : 'bg-white'}`}>
                  <div className="flex items-center justify-between text-neutral-400">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-mono font-bold">EXPERIENCE</span>
                    <Server className="w-3.5 h-3.5" />
                  </div>
                  <div className={`text-xl font-black font-mono ${darkMode ? 'text-white' : 'text-black'}`}>3+ Years</div>
                  <div className="text-[10px] text-neutral-500 font-mono">AI Infra & Backend</div>
                </div>

                <div className={`p-4 space-y-1 ${darkMode ? 'bg-neutral-950' : 'bg-white'}`}>
                  <div className="flex items-center justify-between text-neutral-400">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-mono font-bold">ML MODELS</span>
                    <Cpu className="w-3.5 h-3.5" />
                  </div>
                  <div className={`text-xl font-black font-mono ${darkMode ? 'text-white' : 'text-black'}`}>36+ Algos</div>
                  <div className="text-[10px] text-neutral-500 font-mono">MLFast Engine</div>
                </div>

                <div className={`p-4 space-y-1 ${darkMode ? 'bg-neutral-950' : 'bg-white'}`}>
                  <div className="flex items-center justify-between text-neutral-400">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-mono font-bold">LATENCY P99</span>
                    <Activity className="w-3.5 h-3.5" />
                  </div>
                  <div className={`text-xl font-black font-mono ${darkMode ? 'text-white' : 'text-black'}`}>&lt;12 ms</div>
                  <div className="text-[10px] text-neutral-500 font-mono">LiteLLM Gateway</div>
                </div>

                <div className={`p-4 space-y-1 ${darkMode ? 'bg-neutral-950' : 'bg-white'}`}>
                  <div className="flex items-center justify-between text-neutral-400">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-mono font-bold">HACKATHON</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div className={`text-xl font-black font-mono ${darkMode ? 'text-white' : 'text-black'}`}>Top 10%</div>
                  <div className="text-[10px] text-neutral-500 font-mono">7,000+ Competitors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

