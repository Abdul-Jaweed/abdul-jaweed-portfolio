import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  Zap,
  Terminal,
  FileText,
  CornerDownLeft,
  ChevronDown,
  Minimize2,
  RefreshCw,
  Compass,
} from 'lucide-react';
import { profileData, skillCategoriesData, projectsData, experiencesData } from '../data/portfolioData';

interface PortfolioChatbotProps {
  darkMode: boolean;
  onOpenResumeModal: () => void;
  onTriggerSimulation: () => void;
  onOpenIntroTour?: () => void;
}

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  actionButtons?: { label: string; action: () => void; icon?: React.ElementType }[];
}

export const PortfolioChatbot: React.FC<PortfolioChatbotProps> = ({
  darkMode,
  onOpenResumeModal,
  onTriggerSimulation,
  onOpenIntroTour,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [minimized, setMinimized] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialMessage: ChatMessage = {
    id: 'welcome-1',
    sender: 'bot',
    text: `Hello! I am Abdul Jaweed's AI Assistant. Ask me anything about Jaweed's MLOps experience, Multi-Tenant LLM Memory Gateway, ClickHouse SQL engines, or contact details!`,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    actionButtons: [
      { label: 'Start Guided Tour', action: () => onOpenIntroTour?.(), icon: Compass },
      { label: 'View Key Projects', action: () => handlePresetQuery('What are Jaweed\'s key projects?'), icon: Terminal },
      { label: 'Run Architecture Flow', action: onTriggerSimulation, icon: Sparkles },
    ],
  };

  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const generateBotResponse = (userText: string): { responseText: string; buttons?: { label: string; action: () => void; icon?: React.ElementType }[] } => {
    const query = userText.toLowerCase().trim();

    if (query.includes('project') || query.includes('work') || query.includes('portfolio') || query.includes('built')) {
      const topProjects = projectsData.slice(0, 2).map((p) => `• ${p.title}: ${p.subtitle}`).join('\n');
      return {
        responseText: `Abdul Jaweed's open-source projects include:\n\n${topProjects}\n\n• DataHek OSS: Universal Conversational Data Platform converting natural language into validated SQL with MCP, multi-agent workflows, and live SSE streaming.\n• MLFAST: Python Machine Learning Library built on Scikit-Learn published on PyPI.\n\nNote: Memory-as-a-Service (MaaS) is part of his enterprise AI Engineering experience at Human Managed.`,
        buttons: [
          { label: 'Simulate Pipeline Flow', action: onTriggerSimulation, icon: Sparkles },
          { label: 'Open Official Resume', action: onOpenResumeModal, icon: FileText },
        ],
      };
    }

    if (query.includes('mlops') || query.includes('experience') || query.includes('role') || query.includes('job') || query.includes('company')) {
      const topExp = experiencesData.map((e) => `• ${e.role} @ ${e.company} (${e.period}, ${e.location})`).join('\n');
      return {
        responseText: `Abdul Jaweed is an AI Engineer with 3+ years of experience designing and building enterprise AI applications and backend systems:\n\n${topExp}\n\nAt Human Managed, he designed the Memory-as-a-Service (MaaS) platform (FastAPI, pgvector, Qdrant, Redis, RLS, LangGraph checkpoints) and the production AI security assistant with 6-layer guardrails.`,
      };
    }

    if (query.includes('skill') || query.includes('stack') || query.includes('tech') || query.includes('python') || query.includes('kubernetes')) {
      const topSkills = skillCategoriesData.map((c) => `${c.title}: ${c.skills.slice(0, 5).map((s) => s.name).join(', ')}`).join('\n\n');
      return {
        responseText: `Here is Abdul Jaweed's technical stack:\n\n${topSkills}`,
      };
    }

    if (query.includes('contact') || query.includes('email') || query.includes('phone') || query.includes('hire') || query.includes('reach')) {
      return {
        responseText: `Abdul Jaweed is currently available for Full-Time Roles.\n\nYou can reach him directly:\n\n• Email: ${profileData.contact.email}\n• Phone: ${profileData.contact.phone}\n• Website: ${profileData.contact.website}\n• Location: ${profileData.contact.location}\n• GitHub: github.com/Abdul-Jaweed\n• LinkedIn: linkedin.com/in/abdul-jaweed-datascientist`,
        buttons: [
          { label: 'Download Resume', action: onOpenResumeModal, icon: FileText },
        ],
      };
    }

    if (query.includes('tour') || query.includes('guide') || query.includes('intro') || query.includes('features')) {
      if (onOpenIntroTour) onOpenIntroTour();
      return {
        responseText: `Starting the guided Intro Tour! It highlights key platform features, the architecture simulation, the workable terminal CLI, and verified credentials.`,
        buttons: [
          { label: 'Open Guided Tour', action: () => onOpenIntroTour?.(), icon: Compass },
          { label: 'Run Architecture Flow', action: onTriggerSimulation, icon: Sparkles },
        ],
      };
    }

    if (query.includes('simulate') || query.includes('architecture') || query.includes('demo') || query.includes('flow')) {
      onTriggerSimulation();
      return {
        responseText: `I have launched the System Flow Simulation! Check out the Interactive Architecture Explorer section on screen right now.`,
      };
    }

    if (query.includes('resume') || query.includes('cv') || query.includes('pdf')) {
      onOpenResumeModal();
      return {
        responseText: `Opening Abdul Jaweed's interactive, print-ready resume viewer right away!`,
      };
    }

    // Default intelligent response
    return {
      responseText: `Abdul Jaweed is a specialist in AI Platform Engineering, MLOps, Multi-Tenant LLM Memory Caching, and Multi-Agent SQL workflows. What specific details would you like to explore?`,
      buttons: [
        { label: 'Explore Skills', action: () => handlePresetQuery('What are your skills?'), icon: Terminal },
        { label: 'Contact Info', action: () => handlePresetQuery('How can I contact Jaweed?'), icon: Zap },
        { label: 'Open Resume', action: onOpenResumeModal, icon: FileText },
      ],
    };
  };

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botReply = generateBotResponse(text);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botReply.responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actionButtons: botReply.buttons,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handlePresetQuery = (queryText: string) => {
    handleSend(queryText);
  };

  return (
    <>
      {/* Floating Toggle Icon */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={`fixed bottom-6 right-6 z-40 p-4 rounded-full border shadow-2xl flex items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-110 ${
            darkMode
              ? 'bg-white text-black border-white shadow-neutral-950'
              : 'bg-black text-white border-black shadow-neutral-400'
          }`}
        >
          <div className="relative">
            <Bot className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          </div>
          <span className="font-mono text-xs font-black uppercase tracking-widest hidden sm:inline">
            JAWEED AI
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-84 sm:w-96 transition-all duration-300">
          <div
            className={`rounded-2xl border shadow-2xl overflow-hidden backdrop-blur-2xl flex flex-col transition-all ${
              darkMode
                ? 'bg-black/90 border-neutral-800 text-white shadow-neutral-950/80'
                : 'bg-white/95 border-neutral-300 text-black shadow-2xl'
            } ${minimized ? 'h-16' : 'h-[500px]'}`}
          >
            {/* Header */}
            <div
              className={`p-3.5 border-b flex items-center justify-between gap-2 select-none ${
                darkMode ? 'bg-neutral-900/80 border-neutral-800' : 'bg-neutral-100/90 border-neutral-200'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className={`p-2 rounded-lg border ${
                    darkMode ? 'bg-white text-black border-white' : 'bg-black text-white border-black'
                  }`}
                >
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono font-black uppercase tracking-wider flex items-center gap-1.5">
                    <span>JAWEED AI ASSISTANT</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <div className="text-[10px] font-mono text-neutral-400">Online • Ask any question</div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setMessages([initialMessage])}
                  title="Reset conversation"
                  className={`p-1.5 rounded border cursor-pointer ${
                    darkMode ? 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white' : 'bg-neutral-200 border-neutral-300 text-neutral-600 hover:text-black'
                  }`}
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setMinimized(!minimized)}
                  className={`p-1.5 rounded border cursor-pointer ${
                    darkMode ? 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white' : 'bg-neutral-200 border-neutral-300 text-neutral-600 hover:text-black'
                  }`}
                >
                  <Minimize2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className={`p-1.5 rounded border cursor-pointer ${
                    darkMode ? 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white' : 'bg-neutral-200 border-neutral-300 text-neutral-600 hover:text-black'
                  }`}
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Chat Messages Body */}
            {!minimized && (
              <>
                <div className="flex-1 p-4 overflow-y-auto space-y-3 font-sans text-xs">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex flex-col gap-1 ${
                        msg.sender === 'user' ? 'items-end' : 'items-start'
                      }`}
                    >
                      <div className="flex items-center gap-1 text-[9px] font-mono text-neutral-400 uppercase tracking-wider font-bold">
                        {msg.sender === 'bot' ? (
                          <>
                            <Sparkles className="w-3 h-3 text-emerald-400" />
                            <span>JAWEED AI</span>
                          </>
                        ) : (
                          <>
                            <User className="w-3 h-3" />
                            <span>YOU</span>
                          </>
                        )}
                        <span>• {msg.timestamp}</span>
                      </div>

                      <div
                        className={`p-3 rounded-xl max-w-[85%] whitespace-pre-line leading-relaxed ${
                          msg.sender === 'user'
                            ? darkMode
                              ? 'bg-white text-black font-semibold'
                              : 'bg-black text-white font-semibold'
                            : darkMode
                            ? 'bg-neutral-900 border border-neutral-800 text-neutral-200'
                            : 'bg-neutral-100 border border-neutral-200 text-neutral-800'
                        }`}
                      >
                        {msg.text}
                      </div>

                      {/* Action buttons inside message */}
                      {msg.actionButtons && msg.actionButtons.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                          {msg.actionButtons.map((btn, idx) => (
                            <button
                              key={idx}
                              onClick={btn.action}
                              className={`px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider border font-bold flex items-center gap-1 cursor-pointer transition-all ${
                                darkMode
                                  ? 'bg-neutral-900 border-neutral-700 text-white hover:bg-neutral-800'
                                  : 'bg-neutral-100 border-neutral-300 text-black hover:bg-neutral-200'
                              }`}
                            >
                              {btn.icon && <btn.icon className="w-3 h-3" />}
                              <span>{btn.label}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-400 animate-pulse">
                      <Bot className="w-3.5 h-3.5" />
                      <span>Jaweed AI is thinking...</span>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Input Controls */}
                <div
                  className={`p-3 border-t flex items-center gap-2 ${
                    darkMode ? 'bg-neutral-900/50 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
                  }`}
                >
                  <input
                    type="text"
                    placeholder="Ask about MLOps, LLMs, experience..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSend();
                    }}
                    className={`flex-1 px-3 py-2 rounded-lg text-xs font-sans border focus:outline-none ${
                      darkMode
                        ? 'bg-black border-neutral-800 text-white focus:border-white'
                        : 'bg-white border-neutral-300 text-black focus:border-black'
                    }`}
                  />

                  <button
                    onClick={() => handleSend()}
                    disabled={!input.trim()}
                    className={`p-2 rounded-lg border font-bold cursor-pointer transition-all ${
                      darkMode
                        ? 'bg-white text-black border-white disabled:opacity-40'
                        : 'bg-black text-white border-black disabled:opacity-40'
                    }`}
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
