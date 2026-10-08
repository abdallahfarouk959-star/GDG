import { useState } from 'react';
import { motion } from 'motion/react';
import { QrCode, Sparkles, Compass, Smartphone, Gamepad2, Play } from 'lucide-react';
import { TreasureChestSvg } from '../TreasureChestSvg';

interface Slide5FinalCallProps {
  onOpenEnlistModal?: () => void;
  onRestartPresentation: () => void;
}

export function Slide5FinalCall({ onRestartPresentation }: Slide5FinalCallProps) {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleLaunchGame = () => {
    // Interactive prompt / feedback for the presenter
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-between p-4 sm:p-6 md:p-8 overflow-hidden bg-[#040810] select-none text-center">
      {/* Background Starlight & Chart Grid */}
      <div className="absolute inset-0 chart-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#f59e0b]/15 blur-[140px] pointer-events-none" />

      {/* Floating Constellation Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-16 w-2 h-2 rounded-full bg-[#fef08a] animate-pulse opacity-80" />
        <div className="absolute top-24 right-20 w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse opacity-80" />
        <div className="absolute bottom-24 left-24 w-1.5 h-1.5 rounded-full bg-white opacity-70" />
        <div className="absolute bottom-32 right-32 w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse opacity-80" />
      </div>

      {/* Top Slide Header Stamp */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="z-20 flex-shrink-0 inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono-data text-[#f59e0b] uppercase tracking-widest bg-[#0b1626] px-4 py-1.5 rounded-full border border-[#f59e0b]/30 mb-2"
      >
        <Gamepad2 className="w-4 h-4 text-[#f59e0b]" />
        <span>Live Interactive Orientation Challenge</span>
      </motion.div>

      {/* Main Game Showcase Centerpiece */}
      <div className="relative z-20 max-w-3xl flex-1 min-h-0 w-full mx-auto my-2 flex flex-col items-center justify-center">
        {/* Glowing Animated Treasure Chest Icon */}
        <motion.div
          animate={{
            y: [-6, 6, -6],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="mb-3 relative"
        >
          {/* Radiant Aura */}
          <div className="absolute inset-0 rounded-full bg-[#f59e0b]/30 blur-2xl pointer-events-none" />
          <TreasureChestSvg />
        </motion.div>

        {/* Required Headline: "THE REAL TREASURE AWAITS!" */}
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#fbf6e8] tracking-tight uppercase leading-tight"
          style={{ fontFamily: 'var(--font-cinzel)' }}
        >
          The Real Treasure Awaits! <br />
          <span className="bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#ea580c] bg-clip-text text-transparent">
            Find The Treasure
          </span>
        </motion.h2>

        {/* Clear Instruction Text */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-[#fef3c7] font-medium max-w-xl flex items-center justify-center gap-2"
        >
          <Smartphone className="w-4 h-4 text-[#f59e0b] animate-bounce" />
          <span>Scan the QR code to enter the live game</span>
        </motion.p>

        {/* ======================================================== */}
        {/* LARGE, HIGHLY VISIBLE QR CODE CENTERPIECE                */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 relative group"
        >
          {/* Glowing Golden Treasure Frame */}
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] opacity-75 blur-md group-hover:opacity-100 transition duration-500 animate-pulse" />
          
          <div className="relative p-5 sm:p-6 bg-[#ffffff] rounded-2xl shadow-2xl border-4 border-[#b45309] flex flex-col items-center justify-center text-[#091526]">
            {/* Large QR Code Visual Canvas */}
            <div className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-[#ffffff] rounded-xl flex items-center justify-center p-1 relative">
              <QrCode className="w-full h-full text-[#0a1526]" strokeWidth={1.5} />
              
              {/* Center Game Crest Badge */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 rounded-xl bg-[#0a1526] border-2 border-[#f59e0b] flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-[#f59e0b]" />
                </div>
              </div>
            </div>

            {/* Sub-label under QR Code */}
            <div className="mt-3 font-mono-data text-xs font-bold text-[#78350f] uppercase tracking-wider flex items-center gap-1.5">
              <span>Game Room: ASWAN-TREASURE</span>
            </div>
          </div>
        </motion.div>

        {/* Interactive Presenter Control Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-5"
        >
          <button
            type="button"
            onClick={handleLaunchGame}
            className="px-5 py-2 rounded-xl bg-[#091526] hover:bg-[#12233c] border border-[#f59e0b]/40 hover:border-[#f59e0b] text-xs font-mono-data text-[#fef3c7] transition-all flex items-center gap-2 cursor-pointer shadow-md"
          >
            <Play className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>{copiedLink ? '✓ Game Lobby Ready!' : 'Start Live Hunt Session'}</span>
          </button>
        </motion.div>
      </div>

      {/* Slide Navigation Footer */}
      <div className="z-20 flex-shrink-0 w-full max-w-4xl flex items-center justify-between text-[10px] sm:text-xs text-[#a39575] font-mono-data">
        <span>Slide 09 · Live Game: Find The Treasure</span>
        <button
          type="button"
          onClick={onRestartPresentation}
          className="hover:text-[#f59e0b] flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <Compass className="w-4 h-4" />
          <span>Restart Voyage From Slide 1</span>
        </button>
      </div>
    </div>
  );
}
