import React, { useState, useEffect } from 'react';
import {
  Terminal,
  Play,
  RotateCcw,
  ShieldCheck,
  Cpu,
  Database,
  Activity,
  Server,
  Sparkles,
  CheckCircle2,
  Zap,
  Pause,
  Send,
} from 'lucide-react';
import {
  architectureNodesData,
  architectureFlowStepsData,
} from '../data/portfolioData';

interface ArchitectureExplorerProps {
  darkMode: boolean;
}

export const ArchitectureExplorer: React.FC<ArchitectureExplorerProps> = ({
  darkMode,
}) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [userQuery, setUserQuery] = useState<string>(
    'Find average response latency per tenant over the last 24 hours'
  );
  const [simulating, setSimulating] = useState<boolean>(false);

  // Auto-play interval when playing
  useEffect(() => {
    const handleTriggerEvent = () => {
      setSimulating(true);
      setActiveStep(1);
      setIsPlaying(true);
    };

    window.addEventListener('trigger-simulation', handleTriggerEvent);
    return () => window.removeEventListener('trigger-simulation', handleTriggerEvent);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveStep((prev) => {
          if (prev >= architectureFlowStepsData.length) {
            setIsPlaying(false);
            return 1;
          }
          return prev + 1;
        });
      }, 2200);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleRunSimulation = () => {
    setSimulating(true);
    setActiveStep(1);
    setIsPlaying(true);
  };

  const currentStepData =
    architectureFlowStepsData.find((s) => s.stepNumber === activeStep) ||
    architectureFlowStepsData[0];

  const activeNode = architectureNodesData.find(
    (n) => n.id === currentStepData.nodeId
  );

  return (
    <section id="architecture" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded text-[10px] font-mono uppercase tracking-[0.25em] border font-bold ${
            darkMode ? 'bg-white/10 text-white border-white/20' : 'bg-black/10 text-black border-black/20'
          }`}>
            <Terminal className="w-3.5 h-3.5" />
            <span>INTERACTIVE ARCHITECTURE SIMULATOR</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black ${darkMode ? 'text-white' : 'text-black'}`}>
            Multi-Agent Architecture Explorer
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              darkMode ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            Step through or run live simulations of the real multi-tenant execution path converting natural language into secure, audited ClickHouse SQL queries.
          </p>
        </div>

        {/* Live Query Sandbox Bar */}
        <div
          className={`p-4 rounded-xl border mb-8 flex flex-col md:flex-row items-center justify-between gap-4 transition-all ${
            darkMode
              ? 'bg-neutral-950 border-neutral-800 text-white'
              : 'bg-white border-neutral-300 text-black shadow-xs'
          }`}
        >
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className={`p-2 rounded border shrink-0 ${
              darkMode ? 'bg-white/10 text-white border-white/20' : 'bg-black/10 text-black border-black/20'
            }`}>
              <Zap className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-[10px] font-mono uppercase tracking-wider font-bold">
                SIMULATION INPUT PROMPT
              </div>
              <div className="text-xs font-mono font-medium">Type or select a multi-agent test query:</div>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full md:flex-1 md:max-w-xl">
            <input
              type="text"
              value={userQuery}
              onChange={(e) => setUserQuery(e.target.value)}
              className={`w-full px-3.5 py-2 rounded text-xs font-mono border focus:outline-none ${
                darkMode
                  ? 'bg-neutral-900 border-neutral-800 text-white focus:border-white'
                  : 'bg-neutral-100 border-neutral-300 text-black focus:border-black'
              }`}
            />
            <button
              onClick={handleRunSimulation}
              className={`px-4 py-2 rounded text-xs font-mono uppercase tracking-wider font-bold border transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
                darkMode
                  ? 'bg-white text-black border-white hover:bg-neutral-200'
                  : 'bg-black text-white border-black hover:bg-neutral-800'
              }`}
            >
              <Send className="w-3.5 h-3.5" />
              <span>Simulate</span>
            </button>
          </div>
        </div>

        {/* Main Explorer Console Grid */}
        <div
          className={`rounded-xl border shadow-2xl overflow-hidden transition-all ${
            darkMode
              ? 'bg-neutral-950 border-neutral-800 text-white'
              : 'bg-white border-neutral-300 text-black shadow-md'
          }`}
        >
          {/* Top Control Bar */}
          <div
            className={`p-4 border-b flex flex-wrap items-center justify-between gap-4 text-xs font-mono ${
              darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-100 border-neutral-200'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full animate-ping ${darkMode ? 'bg-white' : 'bg-black'}`} />
              <span className="font-bold uppercase tracking-wider text-[10px]">
                SYSTEM FLOW SIMULATION
              </span>
              <span className="text-neutral-500">|</span>
              <span className="text-neutral-400 text-[10px] uppercase tracking-wider font-bold">
                Step {activeStep} of {architectureFlowStepsData.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`px-3.5 py-1.5 rounded text-[10px] font-mono uppercase tracking-wider font-bold border flex items-center gap-1.5 transition-colors cursor-pointer ${
                  darkMode
                    ? 'bg-white text-black border-white hover:bg-neutral-200'
                    : 'bg-black text-white border-black hover:bg-neutral-800'
                }`}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3 h-3" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3" />
                    <span>Auto Step</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  setIsPlaying(false);
                  setActiveStep(1);
                }}
                className={`px-3.5 py-1.5 rounded text-[10px] font-mono uppercase tracking-wider font-bold flex items-center gap-1.5 border transition-colors cursor-pointer ${
                  darkMode
                    ? 'bg-neutral-900 text-neutral-300 hover:text-white border-neutral-700'
                    : 'bg-neutral-100 text-neutral-700 hover:text-black border-neutral-300'
                }`}
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Flow Stepper Buttons */}
          <div
            className={`p-4 border-b overflow-x-auto ${
              darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
            }`}
          >
            <div className="flex items-center gap-2 min-w-max">
              {architectureFlowStepsData.map((step) => {
                const isCurrent = step.stepNumber === activeStep;
                const isPassed = step.stepNumber < activeStep;
                return (
                  <button
                    key={step.stepNumber}
                    onClick={() => {
                      setIsPlaying(false);
                      setActiveStep(step.stepNumber);
                    }}
                    className={`px-3 py-2 rounded text-[10px] font-mono uppercase tracking-wider transition-all flex items-center gap-2 border cursor-pointer font-bold ${
                      isCurrent
                        ? darkMode
                          ? 'bg-white text-black border-white'
                          : 'bg-black text-white border-black'
                        : isPassed
                        ? darkMode
                          ? 'bg-neutral-800 text-neutral-200 border-neutral-700'
                          : 'bg-neutral-200 text-neutral-800 border-neutral-300'
                        : darkMode
                        ? 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:text-white'
                        : 'bg-white text-neutral-600 border-neutral-300 hover:text-black'
                    }`}
                  >
                    <span
                      className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold ${
                        isCurrent
                          ? darkMode
                            ? 'bg-black text-white'
                            : 'bg-white text-black'
                          : isPassed
                          ? darkMode
                            ? 'bg-white text-black'
                            : 'bg-black text-white'
                          : 'bg-neutral-700 text-neutral-300'
                      }`}
                    >
                      {step.stepNumber}
                    </span>
                    <span>{step.action.split('&')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Topology Display & Details */}
          <div
            className={`p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 text-left ${
              darkMode ? 'bg-neutral-950' : 'bg-white'
            }`}
          >
            {/* Left Node Topology Map */}
            <div className="lg:col-span-7 space-y-3">
              <h3 className={`text-[10px] font-mono uppercase tracking-[0.2em] font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-black'
              }`}>
                PLATFORM CLOUD NODES
              </h3>

              <div className="space-y-2.5">
                {architectureNodesData.map((node) => {
                  const isHighlighted = activeNode?.id === node.id;
                  return (
                    <div
                      key={node.id}
                      onClick={() => {
                        setIsPlaying(false);
                        const targetStep = architectureFlowStepsData.find(
                          (s) => s.nodeId === node.id
                        );
                        if (targetStep) setActiveStep(targetStep.stepNumber);
                      }}
                      className={`p-3.5 rounded border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                        isHighlighted
                          ? darkMode
                            ? 'bg-white/10 border-white text-white font-bold'
                            : 'bg-black/10 border-black text-black font-bold'
                          : darkMode
                          ? 'bg-neutral-900 border-neutral-800 hover:border-neutral-700 text-neutral-300'
                          : 'bg-neutral-50 border-neutral-200 hover:border-neutral-400 text-neutral-800'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded border ${
                            isHighlighted
                              ? darkMode
                                ? 'bg-white text-black border-white'
                                : 'bg-black text-white border-black'
                              : darkMode
                              ? 'bg-neutral-950 border-neutral-800 text-neutral-400'
                              : 'bg-white border-neutral-300 text-neutral-600'
                          }`}
                        >
                          {node.type === 'agent' && <Cpu className="w-4 h-4" />}
                          {node.type === 'gateway' && <Server className="w-4 h-4" />}
                          {node.type === 'auth' && <ShieldCheck className="w-4 h-4" />}
                          {node.type === 'database' && <Database className="w-4 h-4" />}
                          {node.type === 'observability' && <Activity className="w-4 h-4" />}
                        </div>

                        <div>
                          <div className={`text-xs font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
                            {node.name}
                          </div>
                          <div className="text-[11px] text-neutral-400 font-mono line-clamp-1">
                            {node.description}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {isHighlighted && (
                          <span className={`px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider font-bold animate-pulse ${
                            darkMode ? 'bg-white text-black' : 'bg-black text-white'
                          }`}>
                            PROCESSING
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Active Step Inspector Box */}
            <div className={`lg:col-span-5 space-y-4 border-t lg:border-t-0 lg:border-l pt-6 lg:pt-0 lg:pl-8 ${
              darkMode ? 'border-neutral-800' : 'border-neutral-200'
            }`}>
              <div className="space-y-1">
                <span className={`text-[10px] font-mono uppercase tracking-[0.2em] font-bold ${
                  darkMode ? 'text-neutral-400' : 'text-neutral-600'
                }`}>
                  STEP {currentStepData.stepNumber} INSPECTOR
                </span>
                <h4 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
                  {currentStepData.action}
                </h4>
              </div>

              {activeNode && (
                <div
                  className={`p-4 rounded border space-y-2 ${
                    darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
                  }`}
                >
                  <div className={`text-xs font-mono font-bold flex items-center gap-1.5 ${
                    darkMode ? 'text-white' : 'text-black'
                  }`}>
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Component: {activeNode.name}</span>
                  </div>
                  <p className={`text-xs leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                    {activeNode.description}
                  </p>
                </div>
              )}

              {/* Sample Output Payload Preview */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 font-bold">
                  SAMPLE LOG / PAYLOAD TRACE
                </span>
                <div
                  className={`p-4 rounded font-mono text-xs border leading-relaxed overflow-x-auto ${
                    darkMode
                      ? 'bg-black border-neutral-800 text-neutral-200'
                      : 'bg-neutral-900 text-neutral-100 border-neutral-800'
                  }`}
                >
                  <span className={darkMode ? 'text-white' : 'text-neutral-400'}>$ </span>
                  {currentStepData.payloadSample}
                </div>
              </div>

              {/* Architectural Safety Controls List */}
              <div
                className={`p-4 rounded border space-y-2 text-xs ${
                  darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
                }`}
              >
                <div className={`font-mono font-bold text-[10px] uppercase tracking-wider ${
                  darkMode ? 'text-white' : 'text-black'
                }`}>
                  SECURITY & GOVERNANCE GUARANTEES
                </div>
                <ul className="space-y-1.5 text-xs font-medium">
                  <li className={`flex items-center gap-2 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 opacity-80" />
                    <span>SQLGlot AST validation blocks mutation operations</span>
                  </li>
                  <li className={`flex items-center gap-2 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 opacity-80" />
                    <span>ZITADEL JWT + Cerbos Policy-as-Code checks</span>
                  </li>
                  <li className={`flex items-center gap-2 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 opacity-80" />
                    <span>Human approval fallback for sensitive queries</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

