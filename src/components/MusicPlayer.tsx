import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Music,
  Zap,
  Radio,
  Sliders,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';

interface MusicPlayerProps {
  darkMode: boolean;
  onTriggerSimulation?: () => void;
}

export interface SongTrack {
  id: number;
  title: string;
  genre: string;
  bpm: number;
  description: string;
  audioUrl: string;
  chordNotes: number[]; // Frequencies in Hz for Lofi chords
  synthType: OscillatorType;
}

export const songTracksData: SongTrack[] = [
  {
    id: 1,
    title: 'Deep Focus 432Hz Lofi Keys',
    genre: 'Copyright-Free Focus / Chillhop',
    bpm: 74,
    description: 'Calm 432Hz harmonic lofi piano & pads tuned for deep concentration & coding',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3',
    chordNotes: [261.63, 329.63, 392.00, 493.88], // Cmaj7
    synthType: 'sine',
  },
  {
    id: 2,
    title: 'Codeflow Alpha Waves',
    genre: 'Ambient Focus & Study',
    bpm: 80,
    description: 'Binaural resonance with soft warm pad chords for flow state engineering',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a7315b.mp3?filename=chill-lofi-song-8444.mp3',
    chordNotes: [220.00, 261.63, 329.63, 392.00], // Am7
    synthType: 'triangle',
  },
  {
    id: 3,
    title: 'Rainy Night MLOps Debugging',
    genre: 'Lofi Jazz Focus',
    bpm: 82,
    description: 'Relaxing lofi keys with soft atmospheric rainfall for maximum productivity',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/11/06/audio_c66f7f6a70.mp3?filename=lofi-chill-medium-version-126435.mp3',
    chordNotes: [174.61, 220.00, 261.63, 329.63], // Fmaj7
    synthType: 'sine',
  },
  {
    id: 4,
    title: 'MLOps Study & GPU Cluster Beats',
    genre: 'Chill Study Beats',
    bpm: 85,
    description: 'Smooth mellow vinyl warmth for distributed GPU training & model evaluation',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=lofi-hip-hop-11489.mp3',
    chordNotes: [196.00, 246.94, 293.66, 349.23], // G7
    synthType: 'triangle',
  },
  {
    id: 5,
    title: 'Midnight System Architecture',
    genre: 'Melodic Rhodes Lofi',
    bpm: 78,
    description: 'Relaxed query execution beats with subtle sub-bass warmth for late night work',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/10/14/audio_9939b0368a.mp3?filename=lofi-study-112191.mp3',
    chordNotes: [293.66, 349.23, 440.00, 523.25], // Dm7
    synthType: 'sine',
  },
];

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  darkMode,
  onTriggerSimulation,
}) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [minimized, setMinimized] = useState<boolean>(true);
  const [useSynthFallback, setUseSynthFallback] = useState<boolean>(false);

  // HTML5 Audio Ref
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Web Audio Synth AudioContext Fallback
  const audioCtxRef = useRef<AudioContext | null>(null);
  const activeOscsRef = useRef<OscillatorNode[]>([]);
  const mainGainRef = useRef<GainNode | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const track = songTracksData[currentTrackIndex];

  // Initialize Lofi chord synth fallback
  const startSynthTrack = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      stopSynthTrack();

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1200, ctx.currentTime);

      const mainGain = ctx.createGain();
      mainGainRef.current = mainGain;
      const effVolume = isMuted ? 0 : volume * 0.12;
      mainGain.gain.setValueAtTime(effVolume, ctx.currentTime);

      filter.connect(mainGain);
      mainGain.connect(ctx.destination);

      const oscs: OscillatorNode[] = [];
      track.chordNotes.forEach((freq) => {
        const osc = ctx.createOscillator();
        osc.type = track.synthType;
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        const oscGain = ctx.createGain();
        oscGain.gain.setValueAtTime(0.25, ctx.currentTime);

        osc.connect(oscGain);
        oscGain.connect(filter);
        osc.start();
        oscs.push(osc);
      });

      activeOscsRef.current = oscs;

      let step = 0;
      const stepIntervalMs = (60 / track.bpm) * 1000;

      intervalRef.current = setInterval(() => {
        if (ctx && isPlaying) {
          const detuneAmount = Math.sin(step * 0.5) * 15;
          oscs.forEach((osc, idx) => {
            osc.detune.setTargetAtTime(detuneAmount * (idx % 2 === 0 ? 1 : -1), ctx.currentTime, 0.1);
          });
          step++;
        }
      }, stepIntervalMs);

      setIsPlaying(true);
      setUseSynthFallback(true);
    } catch {
      // Audio fallback handling
    }
  };

  const stopSynthTrack = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (activeOscsRef.current.length > 0) {
      try {
        activeOscsRef.current.forEach((osc) => {
          osc.stop();
          osc.disconnect();
        });
      } catch {
        // Safe cleanup
      }
      activeOscsRef.current = [];
    }
  };

  const startPlayback = () => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setUseSynthFallback(false);
        })
        .catch(() => {
          // Fallback to Web Audio Lofi Synth if MP3 is blocked or loading
          startSynthTrack();
        });
    } else {
      startSynthTrack();
    }
  };

  const stopPlayback = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    stopSynthTrack();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopPlayback();
    } else {
      startPlayback();
    }
  };

  const handleNextTrack = () => {
    stopPlayback();
    const nextIdx = (currentTrackIndex + 1) % songTracksData.length;
    setCurrentTrackIndex(nextIdx);
    setTimeout(() => {
      startPlayback();
    }, 150);
  };

  const handlePrevTrack = () => {
    stopPlayback();
    const prevIdx = (currentTrackIndex - 1 + songTracksData.length) % songTracksData.length;
    setCurrentTrackIndex(prevIdx);
    setTimeout(() => {
      startPlayback();
    }, 150);
  };

  const handleSelectTrack = (idx: number) => {
    stopPlayback();
    setCurrentTrackIndex(idx);
    setTimeout(() => {
      startPlayback();
    }, 150);
  };

  const handleTriggerAndPlay = () => {
    if (!isPlaying) {
      startPlayback();
    }
    if (onTriggerSimulation) {
      onTriggerSimulation();
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
    if (mainGainRef.current && audioCtxRef.current) {
      mainGainRef.current.gain.setValueAtTime(isMuted ? 0 : volume * 0.12, audioCtxRef.current.currentTime);
    }
  }, [volume, isMuted]);

  useEffect(() => {
    return () => {
      stopPlayback();
    };
  }, []);

  return (
    <div
      onMouseEnter={() => setMinimized(false)}
      onMouseLeave={() => setMinimized(true)}
      className="fixed bottom-6 left-6 z-40 transition-all duration-300"
    >
      {/* Hidden HTML5 Audio element for direct MP3 streaming */}
      <audio
        ref={audioRef}
        src={track.audioUrl}
        loop
        onError={() => {
          setUseSynthFallback(true);
        }}
      />

      <div
        className={`rounded-xl border shadow-2xl overflow-hidden backdrop-blur-xl transition-all ${
          darkMode
            ? 'bg-black/85 border-neutral-800 text-white shadow-neutral-950/80'
            : 'bg-white/95 border-neutral-300 text-black shadow-xl'
        } ${minimized ? 'w-64 p-3' : 'w-80 sm:w-88 p-4'}`}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between gap-2 pb-2 border-b border-neutral-800/50">
          <div className="flex items-center gap-2">
            <div className={`p-1.5 rounded border animate-pulse ${
              isPlaying
                ? darkMode ? 'bg-white text-black border-white' : 'bg-black text-white border-black'
                : darkMode ? 'bg-neutral-900 text-neutral-400 border-neutral-800' : 'bg-neutral-100 text-neutral-600 border-neutral-300'
            }`}>
              <Radio className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase font-bold tracking-widest flex items-center gap-1.5">
                <span>FOCUS MUSIC (COPYRIGHT-FREE)</span>
                {isPlaying && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                )}
              </div>
            </div>
          </div>

          <button
            onClick={() => setMinimized(!minimized)}
            className={`p-1 rounded border cursor-pointer ${
              darkMode ? 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white' : 'bg-neutral-100 border-neutral-300 text-neutral-600 hover:text-black'
            }`}
          >
            {minimized ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Player Body */}
        {!minimized && (
          <div className="pt-3 space-y-3">
            {/* Track Info */}
            <div>
              <div className="flex items-center justify-between text-xs font-mono font-bold">
                <span className="truncate pr-2">{track.title}</span>
                <span className={`px-2 py-0.5 rounded text-[9px] uppercase tracking-wider border shrink-0 ${
                  darkMode ? 'bg-white/10 text-white border-white/20' : 'bg-black/10 text-black border-black/20'
                }`}>
                  {track.bpm} BPM
                </span>
              </div>
              <p className="text-[10px] font-mono text-neutral-400 line-clamp-1 mt-0.5">
                {track.description}
              </p>
            </div>

            {/* Quick Track Selection Dropdown */}
            <select
              value={currentTrackIndex}
              onChange={(e) => handleSelectTrack(Number(e.target.value))}
              className={`w-full px-2 py-1.5 rounded text-[10px] font-mono border focus:outline-none cursor-pointer ${
                darkMode
                  ? 'bg-neutral-900 border-neutral-800 text-white hover:border-neutral-700'
                  : 'bg-neutral-100 border-neutral-300 text-black hover:border-neutral-400'
              }`}
            >
              {songTracksData.map((t, idx) => (
                <option key={t.id} value={idx}>
                  {idx + 1}. {t.title} ({t.genre})
                </option>
              ))}
            </select>

            {/* Audio Visualizer Wave Animation */}
            <div className={`h-8 rounded border p-1 flex items-center justify-center gap-1 overflow-hidden ${
              darkMode ? 'bg-black/60 border-neutral-800' : 'bg-neutral-100 border-neutral-200'
            }`}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((bar) => {
                const heightPercent = isPlaying
                  ? Math.sin(bar * 0.8 + Date.now() * 0.005) * 40 + 50
                  : 15;
                return (
                  <div
                    key={bar}
                    className={`w-1 rounded-full transition-all duration-150 ${
                      darkMode ? 'bg-white' : 'bg-black'
                    }`}
                    style={{ height: `${Math.max(10, Math.min(100, heightPercent))}%` }}
                  />
                );
              })}
            </div>

            {/* Player Controls */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrevTrack}
                  className={`p-1.5 rounded border cursor-pointer ${
                    darkMode ? 'bg-neutral-900 border-neutral-800 hover:bg-neutral-800' : 'bg-neutral-100 border-neutral-300 hover:bg-neutral-200'
                  }`}
                >
                  <SkipBack className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={togglePlay}
                  className={`p-2 rounded-lg border font-bold cursor-pointer transition-transform hover:scale-105 ${
                    darkMode
                      ? 'bg-white text-black border-white hover:bg-neutral-200'
                      : 'bg-black text-white border-black hover:bg-neutral-800'
                  }`}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>

                <button
                  onClick={handleNextTrack}
                  className={`p-1.5 rounded border cursor-pointer ${
                    darkMode ? 'bg-neutral-900 border-neutral-800 hover:bg-neutral-800' : 'bg-neutral-100 border-neutral-300 hover:bg-neutral-200'
                  }`}
                >
                  <SkipForward className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Volume */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-1 text-neutral-400 hover:text-white cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => {
                    setVolume(parseFloat(e.target.value));
                    setIsMuted(false);
                  }}
                  className="w-14 h-1 accent-white cursor-pointer"
                />
              </div>
            </div>

            {/* Trigger Simulation CTA */}
            <button
              onClick={handleTriggerAndPlay}
              className={`w-full py-2 rounded text-[10px] font-mono uppercase tracking-widest font-black border transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                darkMode
                  ? 'bg-neutral-900 border-neutral-700 text-white hover:bg-neutral-800 hover:border-white'
                  : 'bg-neutral-100 border-neutral-300 text-black hover:bg-neutral-200 hover:border-black'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>SYNC SONG WITH SYSTEM SIMULATION</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
