import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Compass, Eye, Sparkles, Navigation, Layers, ChevronRight, Anchor } from 'lucide-react';
import { Crew, CrewId } from '../types/expedition';
import { CREWS } from '../data/crewsData';
import { IslandSvg } from './IslandSvg';

interface TreasureMapProps {
  onSelectCrew: (crew: Crew) => void;
  selectedCrew: Crew | null;
  onEnlistWithCrew: (crewId: CrewId) => void;
}

export function TreasureMap({ onSelectCrew, selectedCrew, onEnlistWithCrew }: TreasureMapProps) {
  const [hoveredCrewId, setHoveredCrewId] = useState<CrewId | null>(null);
  const [viewMode, setViewMode] = useState<'map' | 'cards'>('map');

  // Currently active or hovered crew
  const activeCrew = CREWS.find((c) => c.id === (hoveredCrewId || (selectedCrew ? selectedCrew.id : 'web'))) || CREWS[0];

  return (
    <section 
      id="map" 
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#060b13] via-[#081322] to-[#060b13] overflow-hidden"
    >
      {/* Background ambient nautical chart textures */}
      <div className="absolute inset-0 chart-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#38bdf8]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#f59e0b]/20">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono-data uppercase tracking-widest text-[#f59e0b] mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Nautical Archipelago · 5 Technical Squads</span>
            </div>
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#fbf6e8] tracking-tight"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              The Interactive Treasure Map
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#c4b998] max-w-2xl">
              Five legendary ports govern our digital sea. Click any island to inspect its crew, arsenals, and voyage missions.
            </p>
          </div>

          {/* View Mode Toggle: Interactive Map vs Logbook Cards */}
          <div className="flex items-center gap-1.5 p-1 bg-[#0b1626] border border-[#f59e0b]/30 rounded-xl self-start md:self-auto shadow-inner">
            <button
              type="button"
              onClick={() => setViewMode('map')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
                viewMode === 'map'
                  ? 'bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-[#08111c] shadow'
                  : 'text-[#c4b998] hover:text-[#fbf6e8]'
              }`}
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Treasure Map</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('cards')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
                viewMode === 'cards'
                  ? 'bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-[#08111c] shadow'
                  : 'text-[#c4b998] hover:text-[#fbf6e8]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Ship's Logbook</span>
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* VIEW 1: THE INTERACTIVE SPATIAL TREASURE MAP             */}
        {/* ======================================================== */}
        {viewMode === 'map' && (
          <div className="relative">
            {/* The Cartographic Canvas Container */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] min-h-[520px] max-h-[720px] rounded-2xl border-2 border-[#8f6932]/60 dark-parchment shadow-2xl overflow-hidden select-none">
              {/* Antique Map Background Aesthetics */}
              <div className="absolute inset-0 bg-[#0a1525]/90" />
              
              {/* Rhumb Lines / Sailing Navigation Bearing Rays */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="rhumbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                {/* Rhumb lines originating from center compass */}
                <line x1="50%" y1="50%" x2="0%" y2="0%" stroke="url(#rhumbGrad)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="100%" y2="0%" stroke="url(#rhumbGrad)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="0%" y2="100%" stroke="url(#rhumbGrad)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="100%" y2="100%" stroke="url(#rhumbGrad)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="50%" y2="0%" stroke="url(#rhumbGrad)" strokeWidth="1" />
                <line x1="50%" y1="50%" x2="50%" y2="100%" stroke="url(#rhumbGrad)" strokeWidth="1" />
                <line x1="50%" y1="50%" x2="0%" y2="50%" stroke="url(#rhumbGrad)" strokeWidth="1" />
                <line x1="50%" y1="50%" x2="100%" y2="50%" stroke="url(#rhumbGrad)" strokeWidth="1" />

                {/* Dashed Voyage Route between Islands */}
                {/* Web (20,28) -> AI (78,22) -> DataScience (50,52) -> SE (24,76) -> Cyber (76,75) */}
                <path
                  d="M 20% 28% Q 48% 16% 78% 22% T 50% 52% T 24% 76% T 76% 75%"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  opacity="0.6"
                />
              </svg>

              {/* Central Compass Rose in Map Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 opacity-20 pointer-events-none text-[#f59e0b]">
                <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
                  <polygon points="50,2 54,40 50,45 46,40" fill="#f59e0b" />
                  <polygon points="50,98 54,60 50,55 46,60" fill="#b45309" />
                  <polygon points="98,50 60,54 55,50 60,46" fill="#f59e0b" />
                  <polygon points="2,50 40,54 45,50 40,46" fill="#b45309" />
                  <polygon points="84,16 57,44 54,42 56,38" fill="#d97706" />
                  <polygon points="16,84 43,56 46,58 44,62" fill="#d97706" />
                  <polygon points="16,16 44,43 42,46 38,44" fill="#d97706" />
                  <polygon points="84,84 56,57 58,54 62,56" fill="#d97706" />
                  <circle cx="50" cy="50" r="46" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" />
                  <text x="50" y="14" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="middle">N</text>
                  <text x="50" y="93" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="middle">S</text>
                  <text x="90" y="53" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="middle">E</text>
                  <text x="10" y="53" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="middle">W</text>
                </svg>
              </div>

              {/* Decorative Sea Monster / Kraken in deep trench corner */}
              <div className="absolute bottom-6 left-8 opacity-25 pointer-events-none text-[#38bdf8]">
                <svg viewBox="0 0 100 60" className="w-24 h-16 fill-none stroke-current stroke-2">
                  <path d="M10,40 Q25,10 40,35 Q55,60 70,30 Q85,5 95,25" />
                  <circle cx="20" cy="25" r="2" fill="currentColor" />
                  <text x="10" y="55" fill="currentColor" fontSize="8" fontStyle="italic" stroke="none">Terra Incognita</text>
                </svg>
              </div>

              {/* Animated Galleon sailing towards active island */}
              <motion.div
                animate={{
                  left: `${activeCrew.coordinates.mapX}%`,
                  top: `${activeCrew.coordinates.mapY}%`,
                }}
                transition={{
                  duration: 1.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute z-20 -translate-x-1/2 -translate-y-12 pointer-events-none"
              >
                <div className="w-12 h-12 flex items-center justify-center text-[#f59e0b] drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] animate-bob">
                  {/* Pirate Ship SVG Icon */}
                  <svg viewBox="0 0 40 40" className="w-10 h-10 fill-current">
                    <path d="M5,26 C12,32 28,32 35,26 L32,23 L8,23 Z" fill="#78350f" stroke="#fbbf24" strokeWidth="1" />
                    {/* Main Masts & Sails */}
                    <line x1="20" y1="8" x2="20" y2="24" stroke="#fef08a" strokeWidth="2" />
                    <path d="M12,12 C18,10 22,10 28,12 C24,18 16,18 12,12 Z" fill="#f8fafc" />
                    <path d="M14,19 C18,17 22,17 26,19 C23,23 17,23 14,19 Z" fill="#f8fafc" />
                    {/* Pirate Flag with skull */}
                    <polygon points="20,6 27,8 20,10" fill="#dc2626" />
                  </svg>
                </div>
              </motion.div>

              {/* 5 INTERACTIVE ISLANDS ON THE MAP */}
              {CREWS.map((crew) => {
                const isSelected = selectedCrew?.id === crew.id;
                const isHovered = hoveredCrewId === crew.id;

                return (
                  <motion.div
                    key={crew.id}
                    style={{
                      left: `${crew.coordinates.mapX}%`,
                      top: `${crew.coordinates.mapY}%`,
                    }}
                    animate={{
                      y: isHovered || isSelected ? -8 : [0, -5, 0],
                    }}
                    transition={{
                      y: {
                        repeat: isHovered || isSelected ? 0 : Infinity,
                        duration: 4 + (crew.coordinates.mapX % 3),
                        ease: 'easeInOut',
                      },
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer group"
                    onClick={() => onSelectCrew(crew)}
                    onMouseEnter={() => setHoveredCrewId(crew.id)}
                    onMouseLeave={() => setHoveredCrewId(null)}
                  >
                    {/* Island Visual Mass */}
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 transition-transform duration-300 group-hover:scale-110">
                      <IslandSvg 
                        crewId={crew.id} 
                        isSelected={isSelected} 
                        isHovered={isHovered} 
                      />

                      {/* Ripple pulsing ring if selected */}
                      {isSelected && (
                        <div className="absolute inset-0 rounded-full border-2 border-[#f59e0b] animate-ping opacity-60 pointer-events-none" />
                      )}
                    </div>

                    {/* Island Name & Pirate Role Cartouche Plaque */}
                    <div 
                      className={`mt-1 -mx-6 px-3 py-1.5 rounded-lg text-center transition-all duration-200 border shadow-lg backdrop-blur-md ${
                        isSelected || isHovered
                          ? 'bg-[#0f1d30] border-[#f59e0b] text-[#fbbf24] scale-105'
                          : 'bg-[#0a1422]/85 border-[#8f6932]/40 text-[#ede5d0]'
                      }`}
                    >
                      <div className="text-xs sm:text-sm font-bold font-serif whitespace-nowrap">
                        {crew.name}
                      </div>
                      <div className="text-[10px] sm:text-xs text-[#a39575] font-mono-data uppercase tracking-wider">
                        {crew.pirateRole}
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Map Footer HUD Info Bar */}
              <div className="absolute bottom-3 right-4 z-20 flex items-center gap-3 bg-[#070e18]/85 border border-[#f59e0b]/30 px-3.5 py-1.5 rounded-lg text-xs font-mono-data text-[#a39575]">
                <span className="hidden sm:inline">Nile Coordinates: {activeCrew.coordinates.lat} · {activeCrew.coordinates.lng}</span>
                <span className="text-[#f59e0b] font-semibold">Active Harbor: {activeCrew.pirateRole}</span>
              </div>
            </div>

            {/* Active Port Fast Inspection Card (Beneath Map) */}
            <motion.div
              key={activeCrew.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 p-6 rounded-2xl bg-[#0b1626]/90 border border-[#f59e0b]/30 backdrop-blur-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl"
            >
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2.5 text-xs text-[#f59e0b] font-mono-data uppercase tracking-wider">
                  <Anchor className="w-3.5 h-3.5" />
                  <span>Inspecting: {activeCrew.islandName}</span>
                </div>
                <h3 
                  className="text-xl sm:text-2xl font-bold text-[#fbf6e8]"
                  style={{ fontFamily: 'var(--font-cinzel)' }}
                >
                  {activeCrew.name} <span className="text-[#f59e0b]">({activeCrew.pirateRole})</span>
                </h3>
                <p className="text-sm text-[#d4c8ab] leading-relaxed">
                  {activeCrew.brief}
                </p>
                {/* Tech chips */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  {activeCrew.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs px-2.5 py-0.5 rounded-md bg-[#12233c] text-[#93c5fd] border border-[#38bdf8]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons for the active port */}
              <div className="flex sm:flex-col items-center gap-3 w-full md:w-auto shrink-0">
                <button
                  type="button"
                  onClick={() => onSelectCrew(activeCrew)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#fbbf24] hover:to-[#f59e0b] text-[#08111c] font-bold text-xs sm:text-sm tracking-wide shadow flex items-center justify-center gap-2 cursor-pointer"
                  style={{ fontFamily: 'var(--font-cinzel)' }}
                >
                  <Eye className="w-4 h-4" />
                  <span>View Crew Dossier</span>
                </button>
                <button
                  type="button"
                  onClick={() => onEnlistWithCrew(activeCrew.id)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#0e1d32] hover:bg-[#152a48] text-[#fef3c7] font-semibold text-xs sm:text-sm border border-[#f59e0b]/40 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
                  <span>Enlist in this Crew</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {/* ======================================================== */}
        {/* VIEW 2: ACCESSIBLE SHIP'S LOGBOOK (CARDS VIEW)           */}
        {/* ======================================================== */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CREWS.map((crew) => (
              <div
                key={crew.id}
                onClick={() => onSelectCrew(crew)}
                className="group p-6 rounded-2xl bg-[#0b1626]/90 border border-[#f59e0b]/25 hover:border-[#f59e0b] transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-2xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#12233c] border border-[#f59e0b]/30 flex items-center justify-center text-[#f59e0b]">
                      <IslandSvg crewId={crew.id} />
                    </div>
                    <span className="text-xs font-mono-data text-[#a39575]">
                      {crew.coordinates.lat}
                    </span>
                  </div>

                  <div className="text-xs font-mono-data text-[#f59e0b] uppercase tracking-wider">
                    {crew.pirateRole}
                  </div>
                  <h3 
                    className="text-xl font-bold text-[#fbf6e8] mt-1 group-hover:text-[#fbbf24] transition-colors"
                    style={{ fontFamily: 'var(--font-cinzel)' }}
                  >
                    {crew.name}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-[#d4c8ab] leading-relaxed">
                    {crew.brief}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {crew.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2 py-0.5 rounded bg-[#12233c] text-[#93c5fd] border border-[#38bdf8]/15"
                      >
                        {tech}
                      </span>
                    ))}
                    {crew.techStack.length > 4 && (
                      <span className="text-[11px] px-1.5 py-0.5 text-[#a39575]">
                        +{crew.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#f59e0b]/15 flex items-center justify-between text-xs font-semibold text-[#f59e0b]">
                  <span>Inspect Island Dossier</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
