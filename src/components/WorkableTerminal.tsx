import React, { useState, useRef, useEffect } from 'react';
import {
  Terminal as TerminalIcon,
  X,
  Play,
  RotateCcw,
  Sparkles,
  Zap,
  Minimize2,
  Maximize2,
  HelpCircle,
  Copy,
  Check,
} from 'lucide-react';
import {
  profileData,
  skillCategoriesData,
  projectsData,
  experiencesData,
} from '../data/portfolioData';

interface WorkableTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  onTriggerSimulation: () => void;
  onOpenResumeModal: () => void;
  setDarkMode: (val: boolean) => void;
  onOpenIntroTour?: () => void;
}

interface CommandHistory {
  id: string;
  command: string;
  output: string | React.ReactNode;
  timestamp: string;
}

export const WorkableTerminal: React.FC<WorkableTerminalProps> = ({
  isOpen,
  onClose,
  darkMode,
  onTriggerSimulation,
  onOpenResumeModal,
  setDarkMode,
  onOpenIntroTour,
}) => {
  const [inputCommand, setInputCommand] = useState<string>('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      id: 'init-1',
      command: 'welcome',
      output: (
        <div className="space-y-1.5 font-mono text-xs">
          <div className="text-emerald-400 font-bold">
            ⚡ ABDUL JAWEED INTERACTIVE TERMINAL CLI [v2.4.0]
          </div>
          <div className="text-neutral-400">
            Type <span className="text-white font-bold">'help'</span> to view available commands or <span className="text-white font-bold">'simulate'</span> to launch the system architecture simulation.
          </div>
        </div>
      ),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    },
  ]);

  const [commandIndex, setCommandIndex] = useState<number>(-1);
  const [pastCommands, setPastCommands] = useState<string[]>([]);
  const [isMaximized, setIsMaximized] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      scrollToBottom();
    }
  }, [isOpen, history]);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExecuteCommand = (cmdStr: string) => {
    const rawCmd = cmdStr.trim();
    if (!rawCmd) return;

    const parts = rawCmd.split(' ');
    const mainCmd = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ');

    setPastCommands((prev) => [...prev, rawCmd]);
    setCommandIndex(-1);

    let outputNode: React.ReactNode = null;

    switch (mainCmd) {
      case 'help':
        outputNode = (
          <div className="space-y-2 font-mono text-xs text-neutral-300">
            <div className="text-white font-bold border-b border-neutral-800 pb-1">AVAILABLE COMMANDS:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
              <div><span className="text-emerald-400 font-bold">help</span> — Show command list</div>
              <div><span className="text-emerald-400 font-bold">bio</span> — Print Abdul Jaweed's biography</div>
              <div><span className="text-emerald-400 font-bold">skills</span> — Print technical skills matrix</div>
              <div><span className="text-emerald-400 font-bold">projects</span> — List high-throughput AI projects</div>
              <div><span className="text-emerald-400 font-bold">exp</span> — Display professional work history</div>
              <div><span className="text-emerald-400 font-bold">simulate</span> — Trigger System Flow Simulation</div>
              <div><span className="text-emerald-400 font-bold">tour</span> — Launch guided portfolio tour popup</div>
              <div><span className="text-emerald-400 font-bold">resume</span> — Open interactive resume modal</div>
              <div><span className="text-emerald-400 font-bold">contact</span> — Print direct contact information</div>
              <div><span className="text-emerald-400 font-bold">theme</span> — Toggle dark/light theme</div>
              <div><span className="text-emerald-400 font-bold">clear</span> — Clear terminal output</div>
              <div><span className="text-emerald-400 font-bold">whoami</span> — Display current session user info</div>
              <div><span className="text-emerald-400 font-bold">date</span> — Display current server timestamp</div>
            </div>
          </div>
        );
        break;

      case 'bio':
        outputNode = (
          <div className="space-y-1.5 font-mono text-xs text-neutral-300">
            <div className="text-white font-bold">{profileData.name} — {profileData.title}</div>
            <div className="text-neutral-400 leading-relaxed">{profileData.summary}</div>
            <div className="text-emerald-400">Location: {profileData.contact.location}</div>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-2 font-mono text-xs">
            {skillCategoriesData.map((cat) => (
              <div key={cat.id} className="space-y-0.5">
                <span className="text-white font-bold">{cat.title}:</span>{' '}
                <span className="text-neutral-300">{cat.skills.map((s) => s.name).join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-2 font-mono text-xs">
            <div className="text-white font-bold border-b border-neutral-800 pb-1">HIGH-THROUGHPUT AI PLATFORMS:</div>
            {projectsData.map((p) => (
              <div key={p.id} className="p-2 bg-neutral-900/80 rounded border border-neutral-800 space-y-1">
                <div className="text-emerald-400 font-bold">{p.title} <span className="text-neutral-400 text-[10px]">({p.subtitle})</span></div>
                <div className="text-neutral-300 line-clamp-2">{p.description}</div>
                <div className="text-[10px] text-neutral-400 font-bold">Tech: {p.techStack.join(' • ')}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'exp':
        outputNode = (
          <div className="space-y-2 font-mono text-xs">
            <div className="text-white font-bold border-b border-neutral-800 pb-1">WORK HISTORY:</div>
            {experiencesData.map((e) => (
              <div key={e.id} className="space-y-1">
                <div className="text-emerald-400 font-bold">{e.role} @ {e.company} <span className="text-neutral-400">({e.period})</span></div>
                <div className="text-neutral-300 text-[11px] pl-2">• {e.responsibilities[0]}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'simulate':
        onTriggerSimulation();
        outputNode = (
          <div className="text-emerald-400 font-mono text-xs font-bold flex items-center gap-2">
            <Sparkles className="w-4 h-4 animate-spin" />
            <span>Launching System Flow Simulation! Scrolling to #architecture section...</span>
          </div>
        );
        break;

      case 'tour':
      case 'intro':
      case 'guide':
        if (onOpenIntroTour) {
          onOpenIntroTour();
          outputNode = (
            <div className="text-sky-400 font-mono text-xs font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Opening guided feature tour popup...</span>
            </div>
          );
        }
        break;

      case 'resume':
      case 'cat':
        onOpenResumeModal();
        outputNode = (
          <div className="text-white font-mono text-xs font-bold">
            Opening printable resume modal...
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-1 font-mono text-xs text-neutral-300">
            <div className="text-emerald-400 font-bold">Status: Available for Full-Time Roles</div>
            <div>Email: <span className="text-emerald-400">{profileData.contact.email}</span></div>
            <div>Phone: <span className="text-emerald-400">{profileData.contact.phone}</span></div>
            <div>Website: <span className="text-emerald-400">{profileData.contact.website}</span></div>
            <div>Location: <span className="text-emerald-400">{profileData.contact.location}</span></div>
            <div>GitHub: <span className="text-white">github.com/Abdul-Jaweed</span></div>
            <div>LinkedIn: <span className="text-white">linkedin.com/in/abdul-jaweed-datascientist</span></div>
          </div>
        );
        break;

      case 'theme':
        setDarkMode(!darkMode);
        outputNode = (
          <div className="text-emerald-400 font-mono text-xs font-bold">
            Toggled theme mode to {darkMode ? 'Light' : 'Dark'} mode!
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputCommand('');
        return;

      case 'whoami':
        outputNode = (
          <div className="text-emerald-400 font-mono text-xs">
            guest_user@jaweed-ai-platform:~$ (Role: AI Explorer)
          </div>
        );
        break;

      case 'date':
        outputNode = (
          <div className="text-white font-mono text-xs">
            {new Date().toString()}
          </div>
        );
        break;

      default:
        outputNode = (
          <div className="text-rose-400 font-mono text-xs">
            Command not recognized: '<span className="font-bold">{rawCmd}</span>'. Type '<span className="text-white font-bold">help</span>' for available commands.
          </div>
        );
        break;
    }

    const newHistoryItem: CommandHistory = {
      id: Date.now().toString(),
      command: rawCmd,
      output: outputNode,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    };

    setHistory((prev) => [...prev, newHistoryItem]);
    setInputCommand('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleExecuteCommand(inputCommand);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (pastCommands.length > 0) {
        const nextIdx = commandIndex + 1;
        if (nextIdx < pastCommands.length) {
          setCommandIndex(nextIdx);
          setInputCommand(pastCommands[pastCommands.length - 1 - nextIdx]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandIndex > 0) {
        const nextIdx = commandIndex - 1;
        setCommandIndex(nextIdx);
        setInputCommand(pastCommands[pastCommands.length - 1 - nextIdx]);
      } else if (commandIndex === 0) {
        setCommandIndex(-1);
        setInputCommand('');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div
        className={`w-full max-w-4xl rounded-xl border shadow-2xl overflow-hidden flex flex-col transition-all duration-200 ${
          darkMode ? 'bg-black/95 border-neutral-800 text-white' : 'bg-neutral-900 border-neutral-800 text-white'
        } ${isMaximized ? 'h-[95vh] max-w-[95vw]' : 'h-[540px]'}`}
      >
        {/* Top Terminal Bar */}
        <div className="px-4 py-3 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <button onClick={onClose} className="w-3 h-3 rounded-full bg-rose-500 hover:opacity-80 cursor-pointer" />
              <button onClick={() => setIsMaximized(!isMaximized)} className="w-3 h-3 rounded-full bg-amber-500 hover:opacity-80 cursor-pointer" />
              <button onClick={() => setHistory([])} className="w-3 h-3 rounded-full bg-emerald-500 hover:opacity-80 cursor-pointer" />
            </div>

            <div className="flex items-center gap-2 pl-3 font-mono text-xs font-bold text-neutral-300">
              <TerminalIcon className="w-4 h-4 text-emerald-400" />
              <span>abdul-jaweed@ai-platform-cli:~</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 rounded text-neutral-400 hover:text-white cursor-pointer"
            >
              {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-neutral-400 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Screen Body */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="flex-1 p-4 font-mono text-xs overflow-y-auto space-y-4 bg-black/90 cursor-text"
        >
          {history.map((item) => (
            <div key={item.id} className="space-y-1.5">
              <div className="flex items-center gap-2 text-neutral-400">
                <span className="text-emerald-400 font-bold">jaweed@platform:~$</span>
                <span className="text-white font-bold">{item.command}</span>
                <span className="text-[10px] text-neutral-600 ml-auto">{item.timestamp}</span>
              </div>
              <div className="pl-4 border-l border-neutral-800">{item.output}</div>
            </div>
          ))}

          {/* Interactive Input Prompt */}
          <div className="flex items-center gap-2 pt-2">
            <span className="text-emerald-400 font-bold shrink-0">jaweed@platform:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputCommand}
              onChange={(e) => setInputCommand(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-none border-none"
              placeholder="Type command (e.g. 'help', 'skills', 'simulate')..."
              autoFocus
            />
          </div>

          <div ref={terminalEndRef} />
        </div>

        {/* Quick Command Chips Footer */}
        <div className="p-3 bg-neutral-950 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono">
          <div className="flex flex-wrap items-center gap-1.5 text-neutral-400">
            <span className="font-bold text-white uppercase tracking-wider">Quick Commands:</span>
            {['help', 'tour', 'skills', 'projects', 'exp', 'simulate', 'contact', 'clear'].map((chip) => (
              <button
                key={chip}
                onClick={() => handleExecuteCommand(chip)}
                className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-emerald-400 hover:border-emerald-500 cursor-pointer font-bold uppercase tracking-wider"
              >
                {chip}
              </button>
            ))}
          </div>

          <div className="text-neutral-500 font-bold">
            Press Enter to Run • ↑↓ for History
          </div>
        </div>
      </div>
    </div>
  );
};
