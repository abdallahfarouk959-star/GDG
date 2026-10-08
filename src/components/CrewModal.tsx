import { motion, AnimatePresence } from 'motion/react';
import { X, Anchor, Compass, Wrench, Shield, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { Crew, CrewId } from '../types/expedition';
import { IslandSvg } from './IslandSvg';

interface CrewModalProps {
  crew: Crew | null;
  onClose: () => void;
  onEnlist: (crewId: CrewId) => void;
}

export function CrewModal({ crew, onClose, onEnlist }: CrewModalProps) {
  if (!crew) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop Scrim */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#040810]/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-2xl bg-[#091322] border-2 border-[#f59e0b]/50 rounded-2xl shadow-2xl overflow-hidden my-8"
        >
          {/* Header Banner */}
          <div className="relative bg-gradient-to-r from-[#0d1e35] via-[#162a4a] to-[#0d1e35] p-6 border-b border-[#f59e0b]/30">
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg bg-[#070e1a]/80 text-[#a39575] hover:text-[#fbf6e8] border border-[#f59e0b]/20 hover:border-[#f59e0b]/60 transition-colors"
              aria-label="Close Crew Details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-[#070e1a] border border-[#f59e0b]/40 flex items-center justify-center p-1 shrink-0">
                <IslandSvg crewId={crew.id} isSelected={true} />
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-mono-data text-[#f59e0b] uppercase tracking-wider">
                  <Anchor className="w-3.5 h-3.5" />
                  <span>{crew.islandName}</span>
                </div>
                <h3 
                  className="text-2xl sm:text-3xl font-bold text-[#fbf6e8]"
                  style={{ fontFamily: 'var(--font-cinzel)' }}
                >
                  {crew.name}
                </h3>
                <div className="text-sm font-semibold text-[#f59e0b] font-serif">
                  {crew.pirateRole}
                </div>
              </div>
            </div>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
            {/* Required Tagline / Brief Box */}
            <div className="p-4 rounded-xl bg-[#0d1a2d] border-l-4 border-[#f59e0b] text-[#fef3c7] font-medium text-sm sm:text-base leading-relaxed">
              {crew.brief}
            </div>

            {/* Narrative description */}
            <div className="space-y-2">
              <h4 
                className="text-sm font-bold uppercase tracking-wider text-[#a39575] font-mono-data flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-[#f59e0b]" />
                <span>Voyage Role & Duties</span>
              </h4>
              <p className="text-sm text-[#d4c8ab] leading-relaxed">
                {crew.description}
              </p>
            </div>

            {/* Captain's Log Quote */}
            <div className="p-4 rounded-xl bg-[#070f1a] border border-[#f59e0b]/20 italic text-xs sm:text-sm text-[#fef08a] font-serif">
              {crew.captainLogQuote}
              <div className="text-right text-[11px] font-sans text-[#a39575] mt-1 not-italic">
                — Captain’s Logbook Entry
              </div>
            </div>

            {/* Voyage Quest */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#a39575] font-mono-data flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#38bdf8]" />
                <span>The Flagship Mission (What You'll Build)</span>
              </h4>
              <p className="text-sm text-[#cbd5e1] leading-relaxed">
                {crew.voyageQuest}
              </p>
            </div>

            {/* Tech Stack Arsenal */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#a39575] font-mono-data flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#f59e0b]" />
                <span>Technical Stack & Tools</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {crew.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono-data bg-[#0e1f36] text-[#93c5fd] border border-[#38bdf8]/30 flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#38bdf8]" />
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Pirate Gear & Weapons */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#a39575] font-mono-data">
                Shipboard Weapons & Arsenal
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-[#cbd5e1]">
                {crew.weaponsAndTools.map((gear) => (
                  <div key={gear} className="flex items-center gap-2 bg-[#081220] p-2 rounded-lg border border-[#f59e0b]/15">
                    <span className="text-[#f59e0b]">⚔</span>
                    <span>{gear}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div className="p-6 bg-[#070e1a] border-t border-[#f59e0b]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#a39575] font-mono-data text-center sm:text-left">
              Coordinates: {crew.coordinates.lat} · {crew.coordinates.lng}
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-[#a39575]/40 text-[#c4b998] hover:text-[#fbf6e8] text-xs font-semibold"
              >
                Back to Map
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onEnlist(crew.id);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#fbbf24] hover:to-[#f59e0b] text-[#08111c] font-bold text-xs sm:text-sm tracking-wide shadow gold-glow flex items-center justify-center gap-2 cursor-pointer"
                style={{ fontFamily: 'var(--font-cinzel)' }}
              >
                <Sparkles className="w-4 h-4" />
                <span>Enlist in {crew.name}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
