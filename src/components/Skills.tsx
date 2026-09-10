import React, { useState } from 'react';
import {
  Layers,
  Search,
  CheckCircle2,
  Sparkles,
  Cpu,
  Database,
  ShieldCheck,
  Activity,
  Server,
  Code,
  Cloud,
  Sliders,
  Terminal,
  Network,
  Bot,
  Binary,
  Key,
  Lock,
  GitBranch,
  Radio,
  FileCode,
  HardDrive,
  Workflow,
  Glasses,
  Box,
  Brain,
  Gauge,
  Zap,
  Globe,
  Flame,
  LineChart,
} from 'lucide-react';
import { skillCategoriesData } from '../data/portfolioData';

interface SkillsProps {
  darkMode: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const allSkills = skillCategoriesData.flatMap((cat) => cat.skills);

  const filteredCategories = skillCategoriesData.map((cat) => {
    let skills = cat.skills;
    if (searchQuery.trim()) {
      skills = skills.filter((s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
      );
    }
    return { ...cat, skills };
  }).filter((cat) => (activeCategory === 'all' || cat.id === activeCategory) && cat.skills.length > 0);

  const categoryIcons: Record<string, React.FC<{ className?: string }>> = {
    programming: Terminal,
    'ai-llm': Cpu,
    backend: Server,
    databases: Database,
    security: ShieldCheck,
    observability: Activity,
    devops: Box,
    aws: Cloud,
    finetuning: Sliders,
    architecture: Layers,
  };

  const getSkillIcon = (skillName: string): React.FC<{ className?: string }> => {
    const s = skillName.toLowerCase();
    if (s.includes('python')) return Terminal;
    if (s.includes('langgraph') || s.includes('workflow')) return Workflow;
    if (s.includes('langchain') || s.includes('chain')) return Network;
    if (s.includes('langsmith') || s.includes('langfuse') || s.includes('telemetry') || s.includes('logging') || s.includes('trace')) return Activity;
    if (s.includes('litellm') || s.includes('gateway')) return Server;
    if (s.includes('mcp') || s.includes('protocol')) return Network;
    if (s.includes('rag') || s.includes('retrieval')) return Database;
    if (s.includes('agent')) return Bot;
    if (s.includes('fastapi') || s.includes('rest') || s.includes('api')) return Zap;
    if (s.includes('sse') || s.includes('event')) return Radio;
    if (s.includes('pydantic') || s.includes('sqlglot')) return FileCode;
    if (s.includes('postgres') || s.includes('pgvector') || s.includes('sql') || s.includes('qdrant') || s.includes('mongo') || s.includes('redis')) return Database;
    if (s.includes('s3') || s.includes('storage') || s.includes('data')) return HardDrive;
    if (s.includes('zitadel') || s.includes('auth') || s.includes('oauth') || s.includes('oidc') || s.includes('jwt') || s.includes('cognito') || s.includes('key')) return Key;
    if (s.includes('cerbos') || s.includes('security') || s.includes('rls') || s.includes('rbac') || s.includes('policy') || s.includes('waf') || s.includes('shield')) return Lock;
    if (s.includes('docker') || s.includes('ecr')) return Box;
    if (s.includes('git')) return GitBranch;
    if (s.includes('aws') || s.includes('cloud') || s.includes('ec2') || s.includes('vpc') || s.includes('lambda') || s.includes('railway')) return Cloud;
    if (s.includes('bedrock') || s.includes('sagemaker') || s.includes('model') || s.includes('llm') || s.includes('brain')) return Brain;
    if (s.includes('lora') || s.includes('qlora') || s.includes('finetun') || s.includes('distill') || s.includes('rlhf') || s.includes('dpo')) return Sliders;
    if (s.includes('metric') || s.includes('eval') || s.includes('drift')) return Gauge;
    if (s.includes('pandas') || s.includes('numpy')) return LineChart;
    return Code;
  };

  const getProgressWidth = (level?: string) => {
    if (level === 'Expert') return 'w-[95%]';
    if (level === 'Advanced') return 'w-[85%]';
    return 'w-[75%]';
  };

  return (
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded text-[10px] font-mono uppercase tracking-[0.25em] border font-bold ${
            darkMode ? 'bg-white/10 text-white border-white/20' : 'bg-black/10 text-black border-black/20'
          }`}>
            <Layers className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black ${darkMode ? 'text-white' : 'text-black'}`}>
            AI Platform Tech Stack & Toolkit
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              darkMode ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            Comprehensive technology ecosystem across LLM orchestration, async backend engines, vector search, identity governance, and observability.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 w-full md:w-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-2 rounded text-[10px] font-mono uppercase tracking-[0.15em] font-bold transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? darkMode
                    ? 'bg-white text-black font-black'
                    : 'bg-black text-white font-black'
                  : darkMode
                  ? 'bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white'
                  : 'bg-neutral-100 border border-neutral-300 text-neutral-700 hover:text-black'
              }`}
            >
              All Skills ({allSkills.length})
            </button>
            {skillCategoriesData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded text-[10px] font-mono uppercase tracking-[0.15em] font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? darkMode
                      ? 'bg-white text-black font-black'
                      : 'bg-black text-white font-black'
                    : darkMode
                    ? 'bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white'
                    : 'bg-neutral-100 border border-neutral-300 text-neutral-700 hover:text-black'
                }`}
              >
                {cat.title.split('&')[0]}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className={`w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 ${darkMode ? 'text-neutral-500' : 'text-neutral-400'}`} />
            <input
              type="text"
              placeholder="Search skill (pgvector, FastAPI)..."
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

        {/* Categories & Skills Display */}
        <div className="space-y-8 text-left">
          {filteredCategories.map((cat) => {
            const IconComponent = categoryIcons[cat.id] || Sparkles;
            return (
              <div
                key={cat.id}
                className={`p-6 rounded-xl border transition-all ${
                  darkMode
                    ? 'bg-neutral-950 border-neutral-800 shadow-lg'
                    : 'bg-white border-neutral-300 shadow-xs'
                }`}
              >
                <div className={`flex items-center gap-2.5 mb-5 pb-3 border-b ${
                  darkMode ? 'border-neutral-800' : 'border-neutral-200'
                }`}>
                  <div className={`p-2 rounded border ${
                    darkMode ? 'bg-white/10 text-white border-white/20' : 'bg-black/10 text-black border-black/20'
                  }`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
                    {cat.title}
                  </h3>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest ml-auto font-bold">
                    {cat.skills.length} competencies
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {cat.skills.map((skill) => {
                    const SkillIcon = getSkillIcon(skill.name);
                    return (
                      <div
                        key={skill.name}
                        className={`p-3.5 rounded border transition-all duration-300 flex flex-col justify-between gap-2 group hover:-translate-y-0.5 hover:shadow-md ${
                          skill.featured
                            ? darkMode
                              ? 'bg-neutral-900 border-white text-white'
                              : 'bg-neutral-100 border-black text-black'
                            : darkMode
                            ? 'bg-black border-neutral-800 text-neutral-300 hover:border-neutral-600'
                            : 'bg-neutral-50 border-neutral-200 text-neutral-800 hover:border-neutral-400'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className={`p-1.5 rounded border shrink-0 transition-colors ${
                              skill.featured
                                ? darkMode
                                  ? 'bg-white text-black border-white'
                                  : 'bg-black text-white border-black'
                                : darkMode
                                ? 'bg-neutral-900 text-neutral-300 border-neutral-800 group-hover:border-neutral-600 group-hover:text-white'
                                : 'bg-neutral-100 text-neutral-700 border-neutral-300 group-hover:border-neutral-500 group-hover:text-black'
                            }`}>
                              <SkillIcon className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-xs font-bold tracking-tight truncate">
                              {skill.name}
                            </span>
                          </div>

                          {skill.level && (
                            <span
                              className={`text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded font-bold border shrink-0 ${
                                skill.level === 'Expert'
                                  ? darkMode
                                    ? 'bg-white text-black border-white'
                                    : 'bg-black text-white border-black'
                                  : darkMode
                                  ? 'bg-neutral-800 text-neutral-300 border-neutral-700'
                                  : 'bg-neutral-200 text-neutral-800 border-neutral-300'
                              }`}
                            >
                              {skill.level}
                            </span>
                          )}
                        </div>

                        {/* Animated Proficiency Bar */}
                        <div className={`w-full rounded-full h-1 overflow-hidden mt-1 ${darkMode ? 'bg-neutral-800' : 'bg-neutral-200'}`}>
                          <div
                            className={`h-full rounded-full transition-all duration-700 ${darkMode ? 'bg-white' : 'bg-black'} ${getProgressWidth(
                              skill.level
                            )}`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {filteredCategories.length === 0 && (
            <div className="text-center py-12 text-stone-500 font-mono text-xs uppercase tracking-wider">
              No skills found matching "{searchQuery}". Try searching for another technology name.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

