import React from 'react';
import {
  Server,
  Layers,
  Lock,
  Terminal,
  CheckCircle2,
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  const pillars = [
    {
      icon: Server,
      title: 'AI Infrastructure & Gateways',
      description:
        'Architecting centralized LiteLLM gateways for unified model routing, fallback policies, rate limiting, and prompt management across cloud and open-source models.',
      badge: 'LiteLLM • Tyk • FastAPI',
    },
    {
      icon: Lock,
      title: 'Multi-Tenant Security & Governance',
      description:
        'Enforcing Row-Level Security (RLS) in PostgreSQL, ZITADEL OIDC identity, Cerbos Policy-as-Code authorization, prompt injection detection, and SQL DDL/DML blocking.',
      badge: 'ZITADEL • Cerbos • RLS • PII Masking',
    },
    {
      icon: Layers,
      title: 'LLM Orchestration & Agent Memory',
      description:
        'Building stateful multi-agent workflows using LangGraph and Model Context Protocol (MCP) servers, backed by externalized Memory-as-a-Service (MaaS) platforms.',
      badge: 'LangGraph • MCP • pgvector • Qdrant',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded text-[10px] font-mono uppercase tracking-[0.25em] border font-bold ${
            darkMode ? 'bg-white/10 text-white border-white/20' : 'bg-black/10 text-black border-black/20'
          }`}>
            <Terminal className="w-3.5 h-3.5" />
            <span>BACKGROUND & PILLARS</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black ${darkMode ? 'text-white' : 'text-black'}`}>
            Engineering Production-Grade AI Systems
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              darkMode ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            Bridging the gap between AI research and production infrastructure by architecting secure, multi-tenant, and observable AI platforms.
          </p>
        </div>

        {/* Narrative & Profile Box */}
        <div
          className={`p-6 sm:p-8 rounded-xl border mb-16 transition-all duration-300 ${
            darkMode
              ? 'bg-neutral-950 border-neutral-800 shadow-xl'
              : 'bg-white border-neutral-300 shadow-sm'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-left">
              <h3 className={`text-2xl sm:text-3xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
                Solving Enterprise AI Complexity
              </h3>
              <p
                className={`text-sm sm:text-base leading-relaxed ${
                  darkMode ? 'text-neutral-300' : 'text-neutral-700'
                }`}
              >
                {profileData.summary}
              </p>
              <p
                className={`text-sm sm:text-base leading-relaxed ${
                  darkMode ? 'text-neutral-400' : 'text-neutral-600'
                }`}
              >
                My passion lies in designing reliable AI platform tools and high-impact open-source systems — from authoring a concise Python ML library (<code className={`font-mono px-1 rounded ${darkMode ? 'bg-white/10 text-white' : 'bg-black/10 text-black'}`}>mlfast</code>) to architecting universal conversational data platforms (<code className={`font-mono px-1 rounded ${darkMode ? 'bg-white/10 text-white' : 'bg-black/10 text-black'}`}>DataHek OSS</code>) and enterprise Memory-as-a-Service infrastructure at Human Managed.
              </p>
            </div>

            <div className={`lg:col-span-4 border-t lg:border-t-0 lg:border-l pt-6 lg:pt-0 lg:pl-8 text-left space-y-3 ${
              darkMode ? 'border-neutral-800' : 'border-neutral-200'
            }`}>
              <span className={`text-[10px] uppercase tracking-[0.2em] font-mono font-bold block ${
                darkMode ? 'text-white' : 'text-black'
              }`}>
                CORE CAPABILITIES
              </span>
              <ul className="space-y-2.5">
                {profileData.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                    <span className={darkMode ? 'text-neutral-300' : 'text-neutral-700'}>
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                darkMode
                  ? 'bg-neutral-950 border-neutral-800 hover:border-white'
                  : 'bg-white border-neutral-300 hover:border-black shadow-xs'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2.5 rounded border ${
                  darkMode ? 'bg-white/10 text-white border-white/20' : 'bg-black/10 text-black border-black/20'
                }`}>
                  <pillar.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`text-base sm:text-lg font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
                    {pillar.title}
                  </h4>
                  <span className={`text-[10px] font-mono uppercase tracking-wider font-bold ${
                    darkMode ? 'text-neutral-400' : 'text-neutral-600'
                  }`}>
                    {pillar.badge}
                  </span>
                </div>
              </div>
              <p
                className={`text-sm leading-relaxed ${
                  darkMode ? 'text-neutral-400' : 'text-neutral-600'
                }`}
              >
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

