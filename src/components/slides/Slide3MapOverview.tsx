import { motion } from 'motion/react';
import { Compass, Navigation, ArrowRight } from 'lucide-react';
import { CREWS } from '../../data/crewsData';

import imgWeb from '../../../assests/islands/web.png';
import imgAi from '../../../assests/islands/ai.png';
import imgDataScience from '../../../assests/islands/datascience.png';
import imgSwe from '../../../assests/islands/swe.png';
import imgCybersecurity from '../../../assests/islands/cybersecurity.png';

const leadTracks = [
  { id: 'web', name: 'Web', crewIdMatch: 'web', artwork: imgWeb, left: '50%', top: '20%' },
  { id: 'ai', name: 'AI', crewIdMatch: 'ai', artwork: imgAi, left: '82%', top: '40%' },
  { id: 'data-science', name: 'Data Science', crewIdMatch: 'datascience', artwork: imgDataScience, left: '18%', top: '40%' },
  { id: 'software-engineering', name: 'Software Engineering', crewIdMatch: 'se', artwork: imgSwe, left: '28%', top: '78%' },
  { id: 'cybersecurity', name: 'Cybersecurity', crewIdMatch: 'cyber', artwork: imgCybersecurity, left: '72%', top: '78%' },
];

interface Slide3MapOverviewProps {
  onNext: () => void;
  onSelectCrewIndex: (crewIndex: number) => void;
}

export function Slide3MapOverview({ onNext, onSelectCrewIndex }: Slide3MapOverviewProps) {
  return (
    <div className="relative w-full h-screen flex flex-col p-4 sm:p-6 md:p-8 overflow-hidden bg-[#050a14] select-none">
      {/* Background Nautical Grids & Ambient Blue */}
      <div className="absolute inset-0 chart-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-[#38bdf8]/5 blur-[140px] pointer-events-none" />

      {/* Slide Header */}
      <div className="z-20 text-center flex-shrink-0 mb-4">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 text-[10px] md:text-xs font-mono-data text-[#f59e0b] uppercase tracking-widest bg-[#0b1626] px-4 py-1.5 rounded-full border border-[#f59e0b]/30 mb-2"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>Chapter 02 · Fleet Territories</span>
        </motion.div>
        <h2 
          className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[#fbf6e8] tracking-tight"
          style={{ fontFamily: 'var(--font-cinzel)' }}
        >
          The Ocean Map: 5 Technical Fleets
        </h2>
      </div>

      {/* Main Nautical Map Display Canvas */}
      <div className="relative z-20 w-full flex-1 min-h-[50vh] max-h-[70vh] mx-auto max-w-7xl rounded-2xl border-2 border-[#554535]/40 shadow-2xl overflow-hidden bg-[#E8D3A3]">
        
        {/* Repeating Wave Pattern */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="waves" width="170" height="165" patternUnits="userSpaceOnUse">
              <g fill="none" stroke="#456E75" strokeWidth="1.3" opacity=".32">
                <path className="wave-mark" d="M32 44 C39 35 46 35 53 44 S67 53 74 44 S88 35 95 44"/>
                <path className="wave-mark" d="M110 123 C116 130 122 130 128 123 S140 116 146 123"/>
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#waves)"/>
        </svg>

        {/* Center Compass (Pure Percentages) */}
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-80">
          <svg className="w-32 h-32 md:w-40 md:h-40" viewBox="-120 -120 240 240" stroke="#554535" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle r="64" strokeWidth="1"/><circle r="56" strokeWidth=".6"/>
            <g className="compass-ticks">
              <line className="compass-tick" x1="0" y1="-92" x2="0" y2="-78"/>
              <line className="compass-tick" x1="0" y1="-92" x2="0" y2="-78" transform="rotate(45)"/>
              <line className="compass-tick" x1="0" y1="-92" x2="0" y2="-78" transform="rotate(90)"/>
              <line className="compass-tick" x1="0" y1="-92" x2="0" y2="-78" transform="rotate(135)"/>
              <line className="compass-tick" x1="0" y1="-92" x2="0" y2="-78" transform="rotate(180)"/>
              <line className="compass-tick" x1="0" y1="-92" x2="0" y2="-78" transform="rotate(225)"/>
              <line className="compass-tick" x1="0" y1="-92" x2="0" y2="-78" transform="rotate(270)"/>
              <line className="compass-tick" x1="0" y1="-92" x2="0" y2="-78" transform="rotate(315)"/>
            </g>
            <path d="M0-85 13-13 85 0 13 13 0 85-13 13-85 0-13-13Z" fill="#C9A86A" strokeWidth="1.5"/>
            <path d="M0-85V0L13-13Z M85 0H0L13 13Z M0 85V0L-13 13Z M-85 0H0L-13-13Z" fill="#554535"/>
            <path d="m-44-44 44 22 44-22-22 44 22 44-44-22-44 22 22-44Z" strokeWidth="1"/>
            <circle r="7" fill="#E8D3A3"/>
            <g className="compass-labels text-sm" stroke="none" fill="#554535" fontWeight="bold">
              <text y="-102" textAnchor="middle">N</text>
              <text x="70" y="-64" textAnchor="middle">NE</text>
              <text x="106" y="5" textAnchor="middle">E</text>
              <text x="70" y="76" textAnchor="middle">SE</text>
              <text y="118" textAnchor="middle">S</text>
              <text x="-78" y="76" textAnchor="middle">SW</text>
              <text x="-108" y="5" textAnchor="middle">W</text>
              <text x="-78" y="-64" textAnchor="middle">NW</text>
            </g>
          </svg>
        </div>

        {/* Decorative corner lines (Percentages) */}
        <div className="absolute top-[15%] left-[10%] pointer-events-none opacity-60">
          <svg width="150" height="150" viewBox="-60 -80 150 150" fill="none" stroke="#554535" strokeWidth="2" transform="rotate(-12)">
            <path d="M-45 17q40 12 90 0l-15 23h-50Z M0-72V25 M4-65q44 19 27 70H4Z M-6-54q-10 22-34 54h34Z M-52 47q9 7 18 0t18 0t18 0t18 0t18 0"/>
          </svg>
        </div>
        <div className="absolute bottom-[15%] right-[10%] pointer-events-none opacity-60">
          <svg width="60" height="60" viewBox="-20 -20 60 60" stroke="#A44732" strokeWidth="6" strokeLinecap="round" transform="rotate(10)">
            <path d="m-13-13 26 26m0-26-26 26"/>
          </svg>
        </div>

        {/* TEAM LEAD'S ISLANDS (Strict Percentages) */}
        {leadTracks.map((track, idx) => (
          <motion.div
            key={track.id}
            style={{ left: track.left, top: track.top }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4 + idx, repeat: Infinity, ease: 'easeInOut' }}
            onClick={() => {
              const crewIdx = CREWS.findIndex(c => c.id === track.crewIdMatch);
              if (crewIdx !== -1) onSelectCrewIndex(crewIdx);
            }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer group flex flex-col items-center w-[20%] min-w-[120px] max-w-[180px]"
          >
            {/* Background block to obscure waves */}
            <div className="absolute inset-0 bg-[#E8D3A3] blur-md rounded-full pointer-events-none opacity-80" />
            
            <img src={track.artwork} alt={track.name} className="relative z-10 w-full h-auto object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-xl pointer-events-none" />
            
            <div className="relative z-10 mt-1 sm:mt-1.5 px-3 py-1 sm:py-1.5 rounded-md text-center bg-[#fdf5df]/90 border border-[#554535]/30 group-hover:border-[#554535] shadow-md transition-all">
              <div className="text-[10px] sm:text-xs md:text-sm font-bold text-[#554535] font-serif whitespace-nowrap">
                {track.name}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Coordinates corner watermark */}
        <div className="absolute bottom-2 left-4 text-[10px] font-mono-data text-[#8a7f66] z-20 pointer-events-none">
          Aswan Nautical Grid · 24°N, 32°E
        </div>
      </div>

      {/* Visual Hint Telling Audience We Are About to Explore Each Island */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="z-20 w-full max-w-3xl flex-shrink-0 mt-4 bg-[#0b1626]/90 border border-[#f59e0b]/40 rounded-xl p-3 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg mx-auto"
      >
        <div className="flex items-center gap-3 text-left">
          <div className="w-8 h-8 rounded-lg bg-[#12233c] border border-[#f59e0b]/40 flex items-center justify-center text-[#f59e0b] shrink-0">
            <Compass className="w-4 h-4 animate-[spin_12s_linear_infinite]" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-[#fef3c7] font-serif">
              Prepare to Anchor at Each Port
            </div>
            <div className="text-[10px] sm:text-[11px] text-[#c4b998] leading-tight">
              We will now explore each technical squad, their mission, and how to enlist in their fleet.
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onNext}
          className="w-full sm:w-auto px-4 py-2 rounded-lg bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#fbbf24] hover:to-[#f59e0b] text-[#08111c] font-bold text-[11px] sm:text-xs flex items-center justify-center gap-2 cursor-pointer shadow"
          style={{ fontFamily: 'var(--font-cinzel)' }}
        >
          <span>Explore Next Crew</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </motion.div>
    </div>
  );
}

