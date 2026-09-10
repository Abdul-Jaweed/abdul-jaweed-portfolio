import React from 'react';
import { Sparkles, Trophy } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

interface AchievementsProps {
  darkMode: boolean;
}

export const Achievements: React.FC<AchievementsProps> = ({ darkMode }) => {
  return (
    <section id="achievements" className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded text-[10px] font-mono uppercase tracking-[0.25em] border font-bold ${
            darkMode ? 'bg-white/10 text-white border-white/20' : 'bg-black/10 text-black border-black/20'
          }`}>
            <Trophy className="w-3.5 h-3.5" />
            <span>MILESTONES & HONORS</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black ${darkMode ? 'text-white' : 'text-black'}`}>
            Recognitions & Highlights
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className={`p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? 'bg-neutral-950 border-neutral-800 hover:border-white'
                  : 'bg-white border-neutral-300 shadow-xs hover:border-black'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider border font-bold ${
                    darkMode ? 'bg-white/10 text-white border-white/20' : 'bg-black/10 text-black border-black/20'
                  }`}>
                    {item.badge}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold">{item.date}</span>
                </div>

                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
                  {item.title}
                </h3>

                <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold">
                  {item.organization} • {item.location}
                </p>

                <p
                  className={`text-xs sm:text-sm leading-relaxed ${
                    darkMode ? 'text-neutral-300' : 'text-neutral-700'
                  }`}
                >
                  {item.description}
                </p>

                {item.metric && (
                  <div className={`pt-3 border-t text-xs font-mono font-bold flex items-center gap-1.5 ${
                    darkMode ? 'border-neutral-800 text-white' : 'border-neutral-200 text-black'
                  }`}>
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{item.metric}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
