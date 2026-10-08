import { motion } from 'motion/react';
import { QrCode, MessageSquare, Anchor } from 'lucide-react';
import { Crew } from '../../types/expedition';

import imgWeb from '../../../assests/islands/web.png';
import imgAi from '../../../assests/islands/ai.png';
import imgDataScience from '../../../assests/islands/datascience.png';
import imgSwe from '../../../assests/islands/swe.png';
import imgCybersecurity from '../../../assests/islands/cybersecurity.png';

const getIslandImage = (id: string) => {
  switch (id) {
    case 'web': return imgWeb;
    case 'ai': return imgAi;
    case 'datascience': return imgDataScience;
    case 'se': return imgSwe;
    case 'cyber': return imgCybersecurity;
    default: return imgWeb;
  }
};

interface SlideCrewProps {
  crew: Crew;
  crewIndex: number;
  totalCrews: number;
  onOpenEnlistModal: () => void;
}

export function SlideCrew({ crew, crewIndex, totalCrews, onOpenEnlistModal }: SlideCrewProps) {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-between p-4 sm:p-6 md:p-8 overflow-hidden bg-[#060c16] select-none">
      {/* Background Subtle Nautical Chart Grid */}
      <div className="absolute inset-0 chart-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#38bdf8]/5 blur-[130px] pointer-events-none" />

      {/* Slide Header: Clean, Uncluttered (No nested tabs) */}
      <div className="z-20 flex-shrink-0 w-full max-w-5xl flex items-center justify-between pb-2 border-b border-[#f59e0b]/20">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono-data text-[#f59e0b] uppercase tracking-wider bg-[#0d1c2e] px-3.5 py-1.5 rounded-full border border-[#f59e0b]/30">
            Technical Fleet 0{crewIndex + 1} of 0{totalCrews}
          </span>
          <span className="hidden sm:inline text-xs text-[#a39575] font-mono-data">
            {crew.islandName}
          </span>
        </div>

        <div className="text-xs font-mono-data text-[#8a7f66]">
          Aswan Base · {crew.coordinates.lat}
        </div>
      </div>

      {/* Main Split Screen Container */}
      <div className="relative z-20 w-full flex-1 min-h-0 max-w-5xl my-2 sm:my-4 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
        {/* ======================================================== */}
        {/* LEFT SIDE: PIRATE-THEMED TECH ILLUSTRATION               */}
        {/* ======================================================== */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 flex flex-col items-center justify-center p-4 sm:p-6 text-center"
        >
          {/* Bespoke Tech Nautical Illustration */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-48 h-48 sm:w-64 sm:h-64 my-2 flex items-center justify-center"
          >
            <img src={getIslandImage(crew.id)} alt={crew.islandName} className="w-full h-full object-contain drop-shadow-2xl" />
          </motion.div>

          <div className="mt-4 text-xs font-mono-data text-[#f59e0b] uppercase tracking-wider">
            {crew.pirateRole}
          </div>
          <div className="text-lg sm:text-xl font-serif font-bold text-[#fbf6e8] mt-2">
            {crew.islandName}
          </div>
          <div className="text-[11px] text-[#a39575] mt-1.5 font-mono-data">
            Coordinates: {crew.coordinates.lat} · {crew.coordinates.lng}
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* RIGHT SIDE: TITLE, DESCRIPTION & CALL TO ACTION / QR CODE*/}
        {/* ======================================================== */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 flex flex-col justify-between p-5 sm:p-8 rounded-2xl bg-[#0b1626]/90 border-2 border-[#8f6932]/50 shadow-2xl relative"
        >
          <div>
            {/* Title Lockup */}
            <div className="text-[10px] sm:text-xs font-mono-data text-[#f59e0b] uppercase tracking-wider mb-1 flex items-center gap-2">
              <Anchor className="w-3.5 h-3.5" />
              <span>Squad Orientation Dossier</span>
            </div>
            
            <h3 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#fbf6e8] tracking-tight"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              {crew.name} Crew
            </h3>

            {/* Subtitle / Role Tag */}
            <div className="text-xs sm:text-sm md:text-base font-semibold text-[#f59e0b] font-serif mt-1">
              ({crew.pirateRole})
            </div>

            {/* Required Tagline / Brief Quote */}
            <p className="mt-3 text-sm sm:text-base text-[#fef3c7] font-serif leading-relaxed italic border-l-4 border-[#f59e0b] pl-3 sm:pl-4">
              “{crew.tagline}”
            </p>

            {/* Crew Duties & Mission */}
            <p className="mt-2 text-[11px] sm:text-xs md:text-sm text-[#c4b998] leading-relaxed">
              {crew.description}
            </p>

            {/* Tech Stack Arsenal */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {crew.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-md text-xs font-mono-data bg-[#12233c] text-[#93c5fd] border border-[#38bdf8]/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CALL TO ACTION & QR CODE PLACEHOLDER */}
          <div className="mt-6 pt-5 border-t border-[#f59e0b]/20 flex flex-col sm:flex-row items-center gap-4">
            {/* QR Code Container Placeholder */}
            <div className="w-24 h-24 rounded-xl bg-[#ffffff] p-2 flex flex-col items-center justify-center shrink-0 shadow-lg border-2 border-[#f59e0b]">
              <div className="w-full h-full bg-[#0a1526] rounded p-1 flex items-center justify-center text-white relative">
                <QrCode className="w-full h-full text-[#f59e0b]" />
              </div>
            </div>

            <div className="space-y-2 flex-1 text-center sm:text-left">
              <div className="text-xs text-[#a39575] font-mono-data uppercase">
                Scan with phone or click button
              </div>

              {/* Glowing CTA Button */}
              <button
                type="button"
                onClick={onOpenEnlistModal}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#fbbf24] hover:to-[#f59e0b] text-[#08111c] font-bold text-xs sm:text-sm tracking-wide shadow-lg gold-glow hover:gold-glow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                style={{ fontFamily: 'var(--font-cinzel)' }}
              >
                <MessageSquare className="w-4 h-4" />
                <span>Join the {crew.name.split(' ')[0]} Fleet (WhatsApp/Discord)</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slide Sub-Footer Stamp: Clean, Minimal (No nested previous/next buttons) */}
      <div className="z-20 flex-shrink-0 w-full max-w-5xl flex items-center justify-between text-[10px] sm:text-xs text-[#a39575] font-mono-data">
        <span>Slide 0{crewIndex + 4} · {crew.name}</span>
        <span className="text-[#8a7f66]">Use Bottom Global Controls or Arrow Keys (→) to Advance</span>
      </div>
    </div>
  );
}
