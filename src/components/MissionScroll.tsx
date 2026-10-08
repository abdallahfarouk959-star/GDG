import { motion } from 'motion/react';
import { Scroll, Compass, Heart, Users, Flame, Award } from 'lucide-react';
import { EXPEDITION_STATS } from '../data/crewsData';

interface MissionScrollProps {
  onExploreMap: () => void;
}

export function MissionScroll({ onExploreMap }: MissionScrollProps) {
  return (
    <section 
      id="mission"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#060b13] overflow-hidden"
    >
      {/* Subtle sea depth background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#f59e0b]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section kicker */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-xs text-[#f59e0b] font-mono-data uppercase tracking-widest px-3 py-1 bg-[#121c2b] rounded-md border border-[#f59e0b]/30">
            <Scroll className="w-3.5 h-3.5" />
            <span>The Captain's Parchment Log</span>
          </div>
          <h2 
            className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-[#fbf6e8] tracking-tight"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            The Mission Scroll
          </h2>
          <p className="mt-2 text-sm text-[#a39575] max-w-xl mx-auto">
            Unrolled under the lanterns of the Nile harbor — our eternal pact with every aspiring sailor.
          </p>
        </div>

        {/* The Unrolled Parchment Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative my-8"
        >
          {/* Top Wooden Scroll Roller */}
          <div className="relative z-20 h-7 mx-4 sm:mx-8 bg-gradient-to-r from-[#29170a] via-[#5c3516] to-[#29170a] rounded-full shadow-2xl border-y border-[#804b20] flex items-center justify-between px-6">
            <div className="w-4 h-4 rounded-full bg-[#f59e0b] border-2 border-[#78350f] shadow-inner" />
            <div className="h-1 flex-1 mx-4 bg-[#78350f]/60 rounded-full" />
            <div className="w-4 h-4 rounded-full bg-[#f59e0b] border-2 border-[#78350f] shadow-inner" />
          </div>

          {/* Parchment Body */}
          <div className="parchment-texture text-[#2a1b0c] mx-2 sm:mx-6 px-6 sm:px-12 md:px-16 py-12 sm:py-16 rounded-sm border-x-4 border-[#8f6932] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] relative overflow-hidden">
            {/* Compass Rose Watermark inside Parchment */}
            <div className="absolute right-4 bottom-4 w-64 h-64 opacity-10 pointer-events-none text-[#78350f]">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <polygon points="50,5 55,45 50,50 45,45" />
                <polygon points="50,95 55,55 50,50 45,55" />
                <polygon points="95,50 55,55 50,50 55,45" />
                <polygon points="5,50 45,55 50,50 45,45" />
                <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
              </svg>
            </div>

            {/* Decorative Vintage Corner Flourishes */}
            <div className="absolute top-4 left-4 text-[#8f6932]/40 text-xl font-serif select-none">❧</div>
            <div className="absolute top-4 right-4 text-[#8f6932]/40 text-xl font-serif select-none">☙</div>
            <div className="absolute bottom-4 left-4 text-[#8f6932]/40 text-xl font-serif select-none">⚓</div>

            {/* Red Wax Seal */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-12 z-10 select-none">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#dc2626] via-[#991b1b] to-[#7f1d1d] shadow-lg border-2 border-[#f87171]/40 flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-dashed border-[#fecaca]/50 flex flex-col items-center justify-center text-[#fee2e2] text-center font-bold">
                  <span className="text-[10px] uppercase tracking-tighter">GDGoC</span>
                  <span className="text-xs sm:text-sm font-serif">ASWAN</span>
                </div>
              </div>
            </div>

            {/* Core Mission Text */}
            <div className="max-w-3xl">
              <div className="text-xs font-mono-data tracking-widest text-[#78350f] uppercase mb-4 flex items-center gap-2">
                <span className="w-6 h-px bg-[#78350f]" />
                <span>Voyage Decree · Season Orientation</span>
              </div>

              {/* Required Exact Story Quote */}
              <blockquote className="text-xl sm:text-2xl md:text-3xl font-serif text-[#1c1206] leading-relaxed tracking-wide font-medium italic border-l-4 border-[#9a3412] pl-6 my-6">
                “We are not just looking for experienced sailors. We seek those with <strong className="font-semibold text-[#991b1b]">passion</strong>, <strong className="font-semibold text-[#b45309]">curiosity</strong>, and the <strong className="font-semibold text-[#78350f]">will to grow</strong>. The real treasure isn't what you find at the end, but what you learn and who you sail with.”
              </blockquote>

              {/* Expedition Charter Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-8 border-t border-[#8f6932]/30">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[#78350f] font-semibold font-serif text-base">
                    <Flame className="w-4 h-4 text-[#b91c1c]" />
                    <span>Curiosity First</span>
                  </div>
                  <p className="text-xs text-[#452b14] leading-relaxed">
                    Zero prerequisites for passion. If you have the appetite to code, build, or analyze, you belong on deck.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[#78350f] font-semibold font-serif text-base">
                    <Users className="w-4 h-4 text-[#0284c7]" />
                    <span>Brotherhood of Sailors</span>
                  </div>
                  <p className="text-xs text-[#452b14] leading-relaxed">
                    No sailor gets left adrift. Seniors and core officers guide first-year sailors through storms and bug hunts.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[#78350f] font-semibold font-serif text-base">
                    <Award className="w-4 h-4 text-[#d97706]" />
                    <span>Battle-Tested Craft</span>
                  </div>
                  <p className="text-xs text-[#452b14] leading-relaxed">
                    Real software products, Google Solution Challenges, and community initiatives that make an impact across Upper Egypt.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Wooden Scroll Roller */}
          <div className="relative z-20 h-7 mx-4 sm:mx-8 bg-gradient-to-r from-[#29170a] via-[#5c3516] to-[#29170a] rounded-full shadow-2xl border-y border-[#804b20] flex items-center justify-between px-6">
            <div className="w-4 h-4 rounded-full bg-[#f59e0b] border-2 border-[#78350f] shadow-inner" />
            <div className="h-1 flex-1 mx-4 bg-[#78350f]/60 rounded-full" />
            <div className="w-4 h-4 rounded-full bg-[#f59e0b] border-2 border-[#78350f] shadow-inner" />
          </div>
        </motion.div>

        {/* Quantitative Proof Adjacency: Community Stats */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {EXPEDITION_STATS.map((stat) => (
            <div 
              key={stat.label}
              className="bg-[#0b1626]/80 border border-[#f59e0b]/20 hover:border-[#f59e0b]/50 rounded-xl p-5 text-center transition-all duration-200"
            >
              <div 
                className="text-3xl sm:text-4xl font-bold font-mono-data text-[#f59e0b]"
              >
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-[#fbf6e8] mt-1 font-serif">
                {stat.label}
              </div>
              <div className="text-xs text-[#9c8e71] mt-1 line-clamp-2">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Call to set sail to the Map */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onExploreMap}
            className="inline-flex items-center gap-2.5 text-sm font-semibold text-[#f59e0b] hover:text-[#fbbf24] transition-colors group cursor-pointer"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            <span>Proceed to the Cartographer's Chart</span>
            <Compass className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
