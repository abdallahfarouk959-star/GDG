import { motion } from 'motion/react';
import { Scroll, Compass, Award, Users, BookOpen, Sparkles } from 'lucide-react';

interface Slide2VoyageProps {
  onNext: () => void;
}

export function Slide2Voyage({ onNext }: Slide2VoyageProps) {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-between p-4 sm:p-6 md:p-8 overflow-hidden bg-[#070e1a] select-none">
      {/* Background Dark Parchment Texture & Subtle Chart Grid */}
      <div className="absolute inset-0 chart-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#f59e0b]/5 blur-[120px] pointer-events-none" />

      {/* Decorative Compass Watermark */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 opacity-10 pointer-events-none text-[#f59e0b]">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <polygon points="50,2 54,40 50,45 46,40" />
          <polygon points="50,98 54,60 50,55 46,60" />
          <polygon points="98,50 60,54 55,50 60,46" />
          <polygon points="2,50 40,54 45,50 40,46" />
          <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
        </svg>
      </div>

      {/* Slide Kicker */}
      <motion.div 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-20 flex-shrink-0 inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono-data text-[#f59e0b] uppercase tracking-widest bg-[#0d1c2e] px-4 py-1.5 rounded-full border border-[#f59e0b]/30"
      >
        <Scroll className="w-4 h-4" />
        <span>Chapter 01 · About GDGoC Aswan</span>
      </motion.div>

      {/* Center Parchment Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 max-w-4xl w-full flex-1 flex flex-col justify-center min-h-0 py-2 sm:py-4"
      >
        {/* Top Wooden Roller Edge */}
        <div className="h-4 mx-6 bg-gradient-to-r from-[#29170a] via-[#5c3516] to-[#29170a] rounded-full border-t border-[#804b20] shadow-md flex items-center justify-between px-4">
          <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
        </div>

        {/* Elegant Dark Parchment Map Body */}
        <div className="dark-parchment border-x-4 border-y-2 border-[#8f6932] rounded-lg p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden text-[#ede5d0]">
          {/* Crimson Wax Seal Stamp */}
          <div className="absolute top-6 right-6 select-none hidden sm:block">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#dc2626] via-[#991b1b] to-[#7f1d1d] shadow-lg border-2 border-[#f87171]/40 flex flex-col items-center justify-center text-[#fee2e2] transform rotate-12">
              <span className="text-[9px] font-mono font-bold">GDGoC</span>
              <span className="text-xs font-serif font-bold">ASWAN</span>
            </div>
          </div>

          {/* Slide Heading */}
          <div className="text-[10px] sm:text-xs font-mono-data text-[#f59e0b] tracking-widest uppercase mb-1 sm:mb-2">
            The Captain’s Manifest
          </div>
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#fbf6e8] tracking-tight"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            The Voyage
          </h2>

          {/* Required Storytelling Paragraph */}
          <blockquote className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-[#fef3c7] font-serif leading-relaxed border-l-4 border-[#f59e0b] pl-4 sm:pl-6 italic">
            “Every successful voyage needs a brave crew. Today, you choose your path, learn modern tech, and find the ultimate treasure: <strong className="text-[#fbbf24] font-semibold not-italic">Knowledge</strong>. Choose your track and join our learning fleets.”
          </blockquote>

          {/* Three Pillars of the Fleet */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8 pt-8 border-t border-[#f59e0b]/20 text-left">
            <div className="p-3.5 rounded-xl bg-[#081220]/80 border border-[#f59e0b]/20">
              <div className="flex items-center gap-2 text-[#fbbf24] font-serif font-semibold text-sm">
                <BookOpen className="w-4 h-4 text-[#f59e0b]" />
                <span>Hands-on Bootcamps</span>
              </div>
              <p className="text-xs text-[#c4b998] mt-1.5 leading-relaxed">
                Workshops where you code in real-time alongside passionate developers and mentors.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#081220]/80 border border-[#f59e0b]/20">
              <div className="flex items-center gap-2 text-[#fbbf24] font-serif font-semibold text-sm">
                <Users className="w-4 h-4 text-[#38bdf8]" />
                <span>Peer Brotherhood</span>
              </div>
              <p className="text-xs text-[#c4b998] mt-1.5 leading-relaxed">
                Connect with upperclassmen, alumni, and tech enthusiasts across Aswan University.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#081220]/80 border border-[#f59e0b]/20">
              <div className="flex items-center gap-2 text-[#fbbf24] font-serif font-semibold text-sm">
                <Award className="w-4 h-4 text-[#10b981]" />
                <span>Solution Challenge</span>
              </div>
              <p className="text-xs text-[#c4b998] mt-1.5 leading-relaxed">
                Compete globally in Google’s Solution Challenge to build tech that impacts our community.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Wooden Roller Edge */}
        <div className="h-4 mx-6 bg-gradient-to-r from-[#29170a] via-[#5c3516] to-[#29170a] rounded-full border-b border-[#804b20] shadow-md flex items-center justify-between px-4">
          <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
        </div>
      </motion.div>

      {/* Slide Footer with Action */}
      <div className="z-20 flex-shrink-0 flex items-center justify-between w-full max-w-4xl text-[10px] sm:text-xs text-[#a39575] font-mono-data">
        <span>Slide 02 · The Voyage</span>
        <button
          type="button"
          onClick={onNext}
          className="hover:text-[#f59e0b] flex items-center gap-1.5 transition-colors cursor-pointer text-sm font-semibold"
          style={{ fontFamily: 'var(--font-cinzel)' }}
        >
          <span>Explore The Ocean Map</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
}
