import React, { useState, useEffect } from 'react';
import {
  Compass,
  X,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Terminal,
  Layers,
  Bot,
  FileText,
  Music,
} from 'lucide-react';

interface IntroTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  onOpenTerminalModal: () => void;
  onOpenResumeModal: () => void;
  onTriggerSimulation: () => void;
}

interface TourStep {
  title: string;
  badge: string;
  description: string;
  actionLabel?: string;
  actionTarget?: () => void;
  actionHref?: string;
  icon: React.ElementType;
  tip: string;
}

export const IntroTourModal: React.FC<IntroTourModalProps> = ({
  isOpen,
  onClose,
  darkMode,
  onOpenTerminalModal,
  onOpenResumeModal,
  onTriggerSimulation,
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const tourSteps: TourStep[] = [
    {
      title: 'Welcome to Abdul Jaweed’s Portfolio',
      badge: 'Step 1 of 5 • Overview',
      description:
        'Explore enterprise-grade AI platforms, MLOps orchestration systems, and multi-tenant architectures engineered with Python, FastAPI, ClickHouse, LangGraph, and ZITADEL.',
      tip: 'Use the top navigation bar or this guided tour to discover interactive simulations and tools.',
      icon: Compass,
      actionLabel: 'View About Profile',
      actionHref: '#about',
    },
    {
      title: 'Real-Time Architecture Simulation',
      badge: 'Step 2 of 5 • Interactive Simulation',
      description:
        'Watch live request dispatching across Tyk API Gateway, Cerbos Policy-as-Code, LiteLLM model fallback, LangGraph multi-agent supervisors, ClickHouse OLAP, and Langfuse tracing.',
      tip: 'You can test custom prompt queries or trigger the automated multi-step simulation flow.',
      icon: Layers,
      actionLabel: 'Launch Architecture Flow',
      actionTarget: () => {
        onTriggerSimulation();
        const el = document.getElementById('architecture');
        el?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      title: 'Workable CLI Terminal',
      badge: 'Step 3 of 5 • Interactive Terminal',
      description:
        'A full in-browser terminal emulator supporting interactive commands: bio, skills, projects, exp, simulate, resume, theme, and whoami.',
      tip: 'Launch it anytime from the header "CLI Terminal" button or press here to test it.',
      icon: Terminal,
      actionLabel: 'Open Interactive CLI',
      actionTarget: onOpenTerminalModal,
    },
    {
      title: 'Portfolio AI Chatbot',
      badge: 'Step 4 of 5 • AI Assistant',
      description:
        'Ask questions directly to Jaweed’s AI Assistant in the bottom-right corner regarding his MLOps experience, tech stack, publications, and contact info.',
      tip: 'The assistant includes instant prompt suggestions and direct triggers for simulations.',
      icon: Bot,
      actionLabel: 'Jump to AI Chatbot',
      actionTarget: () => {
        const botTrigger = document.querySelector('[aria-label="Open AI Assistant"]') as HTMLButtonElement | null;
        if (botTrigger) botTrigger.click();
      },
    },
    {
      title: 'Printable Interactive Resume',
      badge: 'Step 5 of 5 • Verified Credentials',
      description:
        'View the clean, recruiter-friendly formatted resume with single-click clipboard copying, quick print/PDF formatting, and synced work experience.',
      tip: 'Accessible via the "Resume" button in the header and Hero section.',
      icon: FileText,
      actionLabel: 'Open Resume Viewer',
      actionTarget: onOpenResumeModal,
    },
  ];

  const step = tourSteps[currentStep];
  const StepIcon = step.icon;

  const handleNext = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className={`w-full max-w-xl rounded-2xl border shadow-2xl overflow-hidden transition-all duration-300 ${
          darkMode
            ? 'bg-neutral-950 border-neutral-800 text-white shadow-black/80'
            : 'bg-white border-neutral-200 text-neutral-900 shadow-xl'
        }`}
      >
        {/* Header Bar */}
        <div
          className={`flex items-center justify-between px-6 py-4 border-b ${
            darkMode ? 'border-neutral-800/80 bg-neutral-900/50' : 'border-neutral-200 bg-neutral-50'
          }`}
        >
          <div className="flex items-center gap-2">
            <span
              className={`p-1.5 rounded-lg border ${
                darkMode
                  ? 'bg-white/10 text-white border-white/20'
                  : 'bg-black/10 text-black border-black/20'
              }`}
            >
              <Compass className="w-4 h-4" />
            </span>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-neutral-400">
                PORTFOLIO TOUR
              </span>
              <h3 className="text-sm font-bold tracking-tight">Interactive Guide</h3>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close tour"
            className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
              darkMode
                ? 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800'
                : 'bg-neutral-100 border-neutral-300 text-neutral-600 hover:text-black hover:bg-neutral-200'
            }`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Step Content */}
        <div className="p-6 space-y-5 text-left">
          {/* Progress Indicators */}
          <div className="flex items-center gap-1.5 w-full">
            {tourSteps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentStep(idx)}
                aria-label={`Jump to step ${idx + 1}`}
                className={`h-1.5 flex-1 rounded-full transition-all cursor-pointer ${
                  idx === currentStep
                    ? darkMode
                      ? 'bg-white'
                      : 'bg-black'
                    : idx < currentStep
                    ? darkMode
                      ? 'bg-white/40'
                      : 'bg-black/40'
                    : darkMode
                    ? 'bg-neutral-800'
                    : 'bg-neutral-200'
                }`}
              />
            ))}
          </div>

          {/* Badge & Title */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider font-bold border ${
                  darkMode
                    ? 'bg-white/10 text-white border-white/20'
                    : 'bg-black/10 text-black border-black/20'
                }`}
              >
                {step.badge}
              </span>
              <div
                className={`p-2 rounded-xl border ${
                  darkMode
                    ? 'bg-neutral-900 border-neutral-800 text-white'
                    : 'bg-neutral-100 border-neutral-200 text-black'
                }`}
              >
                <StepIcon className="w-5 h-5" />
              </div>
            </div>

            <h4 className="text-xl font-bold tracking-tight">{step.title}</h4>
            <p
              className={`text-sm leading-relaxed ${
                darkMode ? 'text-neutral-300' : 'text-neutral-700'
              }`}
            >
              {step.description}
            </p>
          </div>

          {/* Pro-Tip Box */}
          <div
            className={`p-3.5 rounded-xl border flex items-start gap-2.5 text-xs ${
              darkMode
                ? 'bg-neutral-900/60 border-neutral-800 text-neutral-300'
                : 'bg-neutral-50 border-neutral-200 text-neutral-700'
            }`}
          >
            <Sparkles className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
            <div>
              <span className="font-bold text-neutral-400 uppercase text-[10px] font-mono tracking-wider block">
                Feature Tip
              </span>
              {step.tip}
            </div>
          </div>

          {/* Contextual Action Button */}
          {(step.actionLabel && (step.actionTarget || step.actionHref)) && (
            <div className="pt-1">
              {step.actionHref ? (
                <a
                  href={step.actionHref}
                  onClick={onClose}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider border cursor-pointer transition-all ${
                    darkMode
                      ? 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                      : 'bg-black/10 text-black border-black/20 hover:bg-black/20'
                  }`}
                >
                  <span>{step.actionLabel}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              ) : (
                <button
                  onClick={() => {
                    step.actionTarget?.();
                    onClose();
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider border cursor-pointer transition-all ${
                    darkMode
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20'
                      : 'bg-emerald-500/10 text-emerald-700 border-emerald-500/30 hover:bg-emerald-500/20'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{step.actionLabel}</span>
                </button>
              )}
            </div>
          )}
        </div>

        {/* Footer Navigation Controls */}
        <div
          className={`flex items-center justify-between px-6 py-4 border-t ${
            darkMode ? 'border-neutral-800 bg-neutral-900/40' : 'border-neutral-200 bg-neutral-50'
          }`}
        >
          <button
            onClick={onClose}
            className={`text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              darkMode ? 'text-neutral-400 hover:text-white' : 'text-neutral-500 hover:text-black'
            }`}
          >
            Skip Tour
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className={`p-2 rounded-lg border flex items-center gap-1 text-xs font-mono font-bold transition-all ${
                currentStep === 0
                  ? 'opacity-40 cursor-not-allowed border-transparent'
                  : darkMode
                  ? 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 cursor-pointer'
                  : 'bg-white border-neutral-300 text-neutral-700 hover:text-black hover:bg-neutral-100 cursor-pointer'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back</span>
            </button>

            <button
              onClick={handleNext}
              className={`px-4 py-2 rounded-lg border flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                darkMode
                  ? 'bg-white text-black border-white hover:bg-neutral-200 shadow-sm'
                  : 'bg-black text-white border-black hover:bg-neutral-800 shadow-sm'
              }`}
            >
              <span>{currentStep === tourSteps.length - 1 ? 'Finish Tour' : 'Next Step'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
