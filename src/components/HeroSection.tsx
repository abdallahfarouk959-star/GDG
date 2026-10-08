import { motion } from 'motion/react';
import { Compass, ChevronDown, Sparkles } from 'lucide-react';
import { PirateCaptainSvg } from './PirateCaptainSvg';
import { OceanWaves } from './OceanWaves';

interface HeroSectionProps {
  onStartJourney: () => void;
  onOpenEnlistModal: () => void;
}

export function HeroSection({ onStartJourney, onOpenEnlistModal }: HeroSectionProps) {
  return (
    <section 
      id="voyage"
      className="relative min-h-screen flex flex-col items-center justify-between pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#050912] via-[#081220] to-[#060b13]"
    >
      {/* Background Starfield & Nautical Grid lines */}
      <div className="absolute inset-0 chart-grid opacity-20 pointer-events-none" />
      
      {/* Distant constellations / stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/6 left-1/10 w-1.5 h-1.5 rounded-full bg-[#fef08a] animate-pulse opacity-70" />
        <div className="absolute top-1/4 left-3/4 w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse opacity-60" />
        <div className="absolute top-1/3 left-1/4 w-1 h-1 rounded-full bg-white opacity-80" />
        <div className="absolute top-1/5 right-1/6 w-1.5 h-1.5 rounded-full bg-[#fbbf24] opacity-75" />
        <div className="absolute top-2/5 right-1/3 w-1 h-1 rounded-full bg-white opacity-60" />
      </div>

      {/* Atmospheric Moon / Beacon Glow in the distance */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#38bdf8]/10 via-[#f59e0b]/5 to-transparent blur-3xl pointer-events-none" />

      {/* Subtle Nautical Compass Rose Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[750px] md:h-[750px] opacity-5 pointer-events-none text-[#f59e0b]">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full animate-[spin_180s_linear_infinite]">
          <polygon points="50,0 53,40 50,45 47,40" />
          <polygon points="50,100 53,60 50,55 47,60" />
          <polygon points="100,50 60,53 55,50 60,47" />
          <polygon points="0,50 40,53 45,50 40,47" />
          <polygon points="85,15 58,45 54,43 56,38" opacity="0.6" />
          <polygon points="15,85 42,55 46,57 44,62" opacity="0.6" />
          <polygon points="15,15 45,42 43,46 38,44" opacity="0.6" />
          <polygon points="85,85 55,58 57,54 62,56" opacity="0.6" />
          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
        </svg>
      </div>

      {/* Coordinates Tag (Clean unboxed metadata) */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-20 flex items-center gap-2 text-xs text-[#a39575] font-mono-data tracking-wider uppercase"
      >
        <span>Aswan Fleet Base</span>
        <span aria-hidden="true">·</span>
        <span>24.0889° N, 32.8998° E</span>
        <span aria-hidden="true">·</span>
        <span className="text-[#f59e0b]">Season 2026/2027</span>
      </motion.div>

      {/* Main Hero Content Area */}
      <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center my-auto py-6">
        {/* The Captain Centerpiece */}
        <div className="mb-4">
          <PirateCaptainSvg />
        </div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-balance text-[#fbf6e8] drop-shadow-md"
          style={{ fontFamily: 'var(--font-cinzel)' }}
        >
          GDGoC Aswan <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#ea580c] bg-clip-text text-transparent">
            Pirate Expedition
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-5 text-base sm:text-lg md:text-xl text-[#d4c8ab] max-w-2xl text-balance leading-relaxed"
        >
          Every successful voyage begins with a strong crew... <br className="hidden md:inline" />
          Find your place on the ship.
        </motion.p>

        {/* Call to Action Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
        >
          {/* Primary CTA: "Start the Journey" */}
          <button
            type="button"
            onClick={onStartJourney}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#fbbf24] hover:to-[#f59e0b] text-[#08111c] font-bold text-base tracking-wide shadow-lg gold-glow hover:gold-glow-lg transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer group"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            <Compass className="w-5 h-5 text-[#08111c] group-hover:rotate-45 transition-transform duration-300" />
            <span>Start the Journey</span>
          </button>

          {/* Secondary CTA: Quick Enlist */}
          <button
            type="button"
            onClick={onOpenEnlistModal}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0c192c]/90 hover:bg-[#12233c] text-[#fef3c7] font-semibold text-sm tracking-wide border border-[#f59e0b]/40 hover:border-[#f59e0b] transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#f59e0b]" />
            <span>Enlist Directly</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        type="button"
        onClick={onStartJourney}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="z-20 text-[#a39575] hover:text-[#f59e0b] flex flex-col items-center gap-1.5 transition-colors cursor-pointer text-xs uppercase tracking-widest font-mono-data"
        aria-label="Scroll down to the Mission Scroll"
      >
        <span>Chart Course Below</span>
        <ChevronDown className="w-4 h-4" />
      </motion.button>

      {/* Animated Ocean Waves background at bottom */}
      <OceanWaves />
    </section>
  );
}
