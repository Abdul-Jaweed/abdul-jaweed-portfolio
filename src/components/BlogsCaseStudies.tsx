import React, { useState } from 'react';
import {
  BookOpen,
  Clock,
  ArrowRight,
  X,
  Share2,
  Check,
} from 'lucide-react';
import { blogArticlesData } from '../data/portfolioData';
import { BlogArticle } from '../types';

interface BlogsCaseStudiesProps {
  darkMode: boolean;
}

export const BlogsCaseStudies: React.FC<BlogsCaseStudiesProps> = ({
  darkMode,
}) => {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(
    null
  );
  const [copied, setCopied] = useState(false);

  return (
    <section id="articles" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded text-[10px] font-mono uppercase tracking-[0.25em] border font-bold ${
            darkMode ? 'bg-white/10 text-white border-white/20' : 'bg-black/10 text-black border-black/20'
          }`}>
            <BookOpen className="w-3.5 h-3.5" />
            <span>ARTICLES & CASE STUDIES</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black ${darkMode ? 'text-white' : 'text-black'}`}>
            Technical Insights & Case Studies
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              darkMode ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            In-depth engineering notes on multi-tenant LLM memory and multi-agent SQL workflows.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-5xl mx-auto">
          {blogArticlesData.map((article) => (
            <div
              key={article.id}
              className={`p-6 rounded-xl border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
                darkMode
                  ? 'bg-neutral-950 border-neutral-800 hover:border-white'
                  : 'bg-white border-neutral-300 shadow-xs hover:border-black'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span className={`px-2.5 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider border font-bold ${
                    darkMode ? 'bg-white/10 text-white border-white/20' : 'bg-black/10 text-black border-black/20'
                  }`}>
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className={`text-xl font-bold transition-colors ${darkMode ? 'text-white' : 'text-black'}`}>
                  {article.title}
                </h3>

                <p
                  className={`text-xs sm:text-sm leading-relaxed line-clamp-3 ${
                    darkMode ? 'text-neutral-300' : 'text-neutral-600'
                  }`}
                >
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-0.5 rounded text-[9px] font-mono uppercase font-bold tracking-wider border ${
                        darkMode
                          ? 'bg-neutral-900 border-neutral-800 text-neutral-300'
                          : 'bg-neutral-100 border-neutral-300 text-neutral-800'
                      }`}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`pt-6 border-t mt-6 flex items-center justify-between ${
                darkMode ? 'border-neutral-800' : 'border-neutral-200'
              }`}>
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider font-bold">
                  {article.date}
                </span>

                <button
                  onClick={() => setSelectedArticle(article)}
                  className={`inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider cursor-pointer ${
                    darkMode ? 'text-white hover:underline' : 'text-black hover:underline'
                  }`}
                >
                  <span>Read Note</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Article Reader Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fadeIn">
            <div
              className={`relative w-full max-w-3xl rounded-xl border shadow-2xl overflow-hidden my-8 transition-all p-6 sm:p-8 text-left ${
                darkMode
                  ? 'bg-neutral-950 border-neutral-800 text-white'
                  : 'bg-white border-neutral-300 text-black'
              }`}
            >
              <div className={`flex items-center justify-between pb-4 border-b mb-6 ${
                darkMode ? 'border-neutral-800' : 'border-neutral-200'
              }`}>
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className={`px-2.5 py-0.5 rounded text-[9px] uppercase tracking-wider font-bold border ${
                    darkMode ? 'bg-white/10 text-white border-white/20' : 'bg-black/10 text-black border-black/20'
                  }`}>
                    {selectedArticle.category}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider font-bold">• {selectedArticle.readTime}</span>
                </div>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className={`p-2 rounded border cursor-pointer ${
                    darkMode ? 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white' : 'bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-black'
                  }`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h2 className={`text-2xl sm:text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>
                {selectedArticle.title}
              </h2>

              <div className={`prose max-w-none text-sm leading-relaxed whitespace-pre-line space-y-4 ${
                darkMode ? 'text-neutral-300' : 'text-neutral-700'
              }`}>
                {selectedArticle.content}
              </div>

              <div className={`mt-8 pt-6 border-t flex items-center justify-between ${
                darkMode ? 'border-neutral-800' : 'border-neutral-200'
              }`}>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className={`px-3.5 py-2 rounded border text-xs font-mono flex items-center gap-2 uppercase font-bold tracking-wider cursor-pointer ${
                    darkMode
                      ? 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white'
                      : 'bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-black'
                  }`}
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                  <span>{copied ? 'Copied!' : 'Share Note'}</span>
                </button>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className={`px-4 py-2 rounded font-bold text-xs font-mono uppercase tracking-wider border cursor-pointer ${
                    darkMode
                      ? 'bg-white text-black border-white hover:bg-neutral-200'
                      : 'bg-black text-white border-black hover:bg-neutral-800'
                  }`}
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
