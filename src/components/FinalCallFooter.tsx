import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Anchor, Compass, Sparkles, MapPin, ExternalLink } from 'lucide-react';
import { TreasureChestSvg } from './TreasureChestSvg';

interface FinalCallFooterProps {
  onOpenEnlistModal: () => void;
}

export function FinalCallFooter({ onOpenEnlistModal }: FinalCallFooterProps) {
  // Target deadline countdown timer (Core Members: Oct 2)
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 14,
    minutes: 38,
    seconds: 20,
  });

  useEffect(() => {
    // Dynamic tick countdown
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer id="deadlines" className="relative bg-[#040810] text-[#c4b998] border-t-2 border-[#8f6932]/40 overflow-hidden">
      {/* Background glow behind treasure chest */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-[#f59e0b]/10 to-transparent blur-[120px] pointer-events-none" />

      {/* ======================================================== */}
      {/* SECTION 4: THE FINAL CALL & GLOWING CHEST CTA            */}
      {/* ======================================================== */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10 text-center">
        {/* Section Kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-mono-data uppercase tracking-widest text-[#f59e0b] px-3.5 py-1 rounded-md bg-[#0a1424] border border-[#f59e0b]/30 mb-4">
          <Anchor className="w-3.5 h-3.5" />
          <span>The Anchor Drops Soon</span>
        </div>

        {/* Required Headline Text */}
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#fbf6e8] tracking-tight text-balance max-w-3xl mx-auto"
          style={{ fontFamily: 'var(--font-cinzel)' }}
        >
          Is your place on our ship? <br />
          <span className="bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#ea580c] bg-clip-text text-transparent">
            The voyage begins soon.
          </span>
        </h2>

        {/* ======================================================== */}
        {/* DEADLINES NOTICE: HEAD POSITIONS (SEPT 30) | CORE (OCT 2) */}
        {/* ======================================================== */}
        <div className="mt-8 max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {/* Head Positions Card */}
          <div className="p-4 rounded-xl bg-[#0b1626]/90 border border-[#f59e0b]/30 relative overflow-hidden">
            <div className="flex items-center gap-2 text-xs font-mono-data text-[#f59e0b] uppercase tracking-wider mb-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>Head Positions</span>
            </div>
            <div 
              className="text-xl font-bold text-[#fbf6e8]"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              September 30
            </div>
            <p className="text-xs text-[#a39575] mt-0.5">
              Crew leads, technical navigators & organizers.
            </p>
          </div>

          {/* Core Members Card */}
          <div className="p-4 rounded-xl bg-[#0b1626]/90 border border-[#f59e0b]/40 relative overflow-hidden shadow-lg">
            <div className="flex items-center gap-2 text-xs font-mono-data text-[#fbbf24] uppercase tracking-wider mb-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>Core Members</span>
            </div>
            <div 
              className="text-xl font-bold text-[#fbf6e8]"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              October 2
            </div>
            <p className="text-xs text-[#a39575] mt-0.5">
              Active builders, learners & community sailors.
            </p>
          </div>
        </div>

        {/* Live Countdown Display */}
        <div className="mt-8 flex items-center justify-center gap-3 sm:gap-6 font-mono-data text-center">
          <div className="bg-[#0b1626] border border-[#f59e0b]/20 px-3 py-2 rounded-lg min-w-[64px]">
            <span className="text-2xl sm:text-3xl font-bold text-[#f59e0b] tabular-nums">{timeLeft.days}</span>
            <div className="text-[10px] text-[#a39575] uppercase">Days</div>
          </div>
          <span className="text-xl text-[#f59e0b] font-bold">:</span>
          <div className="bg-[#0b1626] border border-[#f59e0b]/20 px-3 py-2 rounded-lg min-w-[64px]">
            <span className="text-2xl sm:text-3xl font-bold text-[#f59e0b] tabular-nums">{String(timeLeft.hours).padStart(2, '0')}</span>
            <div className="text-[10px] text-[#a39575] uppercase">Hours</div>
          </div>
          <span className="text-xl text-[#f59e0b] font-bold">:</span>
          <div className="bg-[#0b1626] border border-[#f59e0b]/20 px-3 py-2 rounded-lg min-w-[64px]">
            <span className="text-2xl sm:text-3xl font-bold text-[#f59e0b] tabular-nums">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <div className="text-[10px] text-[#a39575] uppercase">Mins</div>
          </div>
          <span className="text-xl text-[#f59e0b] font-bold">:</span>
          <div className="bg-[#0b1626] border border-[#f59e0b]/20 px-3 py-2 rounded-lg min-w-[64px]">
            <span className="text-2xl sm:text-3xl font-bold text-[#f59e0b] tabular-nums">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <div className="text-[10px] text-[#a39575] uppercase">Secs</div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* LARGE CTA BUTTON: GLOWING TREASURE CHEST / GOLDEN TICKET */}
        {/* ======================================================== */}
        <div className="mt-12 flex flex-col items-center justify-center">
          <motion.button
            type="button"
            onClick={onOpenEnlistModal}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-5 px-8 sm:px-12 py-5 sm:py-6 rounded-2xl bg-gradient-to-r from-[#b45309] via-[#f59e0b] to-[#d97706] hover:from-[#d97706] hover:via-[#fbbf24] hover:to-[#b45309] text-[#0a121c] font-black tracking-wider text-lg sm:text-2xl shadow-2xl gold-glow-lg border-2 border-[#fef08a] cursor-pointer transition-all duration-300"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            {/* The Glowing Treasure Chest Icon */}
            <div className="transform group-hover:scale-110 transition-transform duration-300">
              <TreasureChestSvg />
            </div>

            <div className="text-left">
              <div className="text-xs uppercase tracking-widest font-mono-data text-[#451a03] font-bold">
                Official Letter of Marque
              </div>
              <div className="flex items-center gap-2">
                <span>Join the Crew</span>
                <Sparkles className="w-5 h-5 text-[#451a03]" />
              </div>
            </div>
          </motion.button>
          
          <p className="mt-4 text-xs text-[#a39575] font-mono-data">
            Open to all students of Aswan University & tech explorers across Egypt.
          </p>
        </div>
      </div>

      {/* ======================================================== */}
      {/* QUIET SITE FOOTER (Anti-Slop Cleanliness)                 */}
      {/* ======================================================== */}
      <div className="border-t border-[#f59e0b]/15 bg-[#03060c] py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#8a7f66]">
          {/* Brand & Location */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span 
              className="text-sm font-bold text-[#f59e0b]"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              GDGoC Aswan
            </span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>Google Developer Groups on Campus · Aswan University</span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>Nile River Basin Expedition</span>
          </div>

          {/* Social and Campus Links */}
          <div className="flex items-center gap-5">
            <a 
              href="https://gdg.community.dev" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-[#f59e0b] transition-colors flex items-center gap-1"
            >
              <span>GDG Community</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span aria-hidden="true">·</span>
            <a 
              href="#map" 
              className="hover:text-[#f59e0b] transition-colors"
            >
              Treasure Map
            </a>
            <span aria-hidden="true">·</span>
            <button 
              type="button" 
              onClick={onOpenEnlistModal}
              className="hover:text-[#f59e0b] transition-colors cursor-pointer"
            >
              Manifest
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-[#f59e0b]/10 text-center text-[11px] text-[#6b624d]">
          GDGoC Aswan is an independent student community and does not formally represent Google LLC. Powered by passion, peer mentorship, and curiosity.
        </div>
      </div>
    </footer>
  );
}
