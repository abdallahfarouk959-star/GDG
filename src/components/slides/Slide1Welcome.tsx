import { motion } from 'motion/react';
import { PirateCaptainSvg } from '../PirateCaptainSvg';
import { SailingPirateShip } from '../SailingPirateShip';
import { OceanWaves } from '../OceanWaves';

interface Slide1WelcomeProps {
  onNext?: () => void;
}

export function Slide1Welcome({}: Slide1WelcomeProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#03060c] via-[#06101e] to-[#040810] select-none">
      {/* ======================================================== */}
      {/* LAYER 1: VIDEO-GAME STYLE NAUTICAL NIGHT SKY BACKGROUND  */}
      {/* (Anchored high up in the composition)                    */}
      {/* ======================================================== */}
      
      {/* Ambient Sea Chart Grid Lines */}
      <div className="absolute inset-0 chart-grid opacity-20 pointer-events-none" />

      {/* Luminous Full Moon with Mystical Sea Glow (Anchored high up) */}
      <div className="absolute top-6 sm:top-8 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-48 sm:h-64 pointer-events-none">
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#fef08a]/15 via-[#38bdf8]/10 to-transparent blur-3xl" />
        <div className="w-20 sm:w-28 h-20 sm:h-28 mx-auto rounded-full bg-gradient-to-br from-[#fffbeb] via-[#fef3c7] to-[#e2d5b5] shadow-[0_0_45px_rgba(254,240,138,0.35)] opacity-85 relative overflow-hidden">
          <div className="absolute top-3 left-4 w-5 h-3 rounded-full bg-[#d6c79f]/40" />
          <div className="absolute bottom-5 right-6 w-6 h-4 rounded-full bg-[#d6c79f]/35" />
          <div className="absolute top-8 right-3 w-3 h-3 rounded-full bg-[#d6c79f]/30" />
        </div>
      </div>

      {/* Drifting Night Sea Clouds */}
      <motion.div
        animate={{ x: [-180, 180] }}
        transition={{ repeat: Infinity, duration: 45, ease: 'linear', repeatType: 'reverse' }}
        className="absolute top-10 sm:top-14 left-1/4 w-[400px] sm:w-[550px] h-16 opacity-20 pointer-events-none"
      >
        <svg viewBox="0 0 500 100" fill="#38bdf8" className="w-full h-full blur-sm">
          <ellipse cx="120" cy="50" rx="90" ry="25" />
          <ellipse cx="240" cy="45" rx="110" ry="32" />
          <ellipse cx="360" cy="55" rx="80" ry="22" />
        </svg>
      </motion.div>

      {/* Twinkling Starfield Constellations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-8 left-12 w-1.5 h-1.5 rounded-full bg-[#fef08a] animate-pulse opacity-80" />
        <div className="absolute top-20 left-1/5 w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse opacity-75" />
        <div className="absolute top-10 right-20 w-1.5 h-1.5 rounded-full bg-white animate-pulse opacity-90" />
        <div className="absolute top-24 right-1/4 w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse opacity-80" />
        <div className="absolute top-32 left-16 w-1 h-1 rounded-full bg-white opacity-60" />
        <div className="absolute top-40 right-14 w-1 h-1 rounded-full bg-[#38bdf8] opacity-70" />
      </div>

      {/* ======================================================== */}
      {/* LAYER 2: ANIMATED PIRATE SHIP (ANCHORED HIGH IN DISTANCE)*/}
      {/* ======================================================== */}
      <div className="absolute top-[14%] sm:top-[13%] md:top-[12%] left-1/2 -translate-x-1/2 z-10 pointer-events-none">
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-64 sm:w-80 h-10 bg-gradient-to-r from-transparent via-[#38bdf8]/15 to-transparent blur-md" />
        <SailingPirateShip />
      </div>

      {/* Mid-Depth Animated Ocean Swell behind ship */}
      <div className="absolute top-[30%] sm:top-[29%] md:top-[28%] inset-x-0 h-24 pointer-events-none z-10 opacity-30 overflow-hidden">
        <motion.div
          animate={{ x: [0, -600] }}
          transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
          className="w-[200vw] h-full"
        >
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-full fill-[#0b1d33]">
            <path d="M0,25 C200,60 400,-10 600,30 C800,65 1000,-5 1200,25 L1200,80 L0,80 Z" />
          </svg>
        </motion.div>
      </div>

      {/* ======================================================== */}
      {/* LAYER 3: FOREGROUND GROUP ANCHORED STRICTLY TO BOTTOM    */}
      {/* (Right above the footer navigation controls)             */}
      {/* ======================================================== */}
      <div className="absolute bottom-[76px] sm:bottom-[82px] md:bottom-[88px] left-0 right-0 w-full z-20 flex flex-col items-center justify-end text-center mx-auto px-4 pointer-events-none">
        {/* Pirate Captain Character (Strict horizontal centering) */}
        <motion.div
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex justify-center mb-1 drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)] pointer-events-auto"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#f59e0b]/15 blur-2xl pointer-events-none" />
            <PirateCaptainSvg />
          </div>
        </motion.div>

        {/* Main Headline: "WELCOME ABOARD GDGoC ASWAN!" (Strict horizontal centering) */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full max-w-4xl mx-auto text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#fbf6e8] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] uppercase leading-tight pointer-events-auto"
          style={{ fontFamily: 'var(--font-cinzel)' }}
        >
          Welcome Aboard <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#ea580c] bg-clip-text text-transparent">
            GDGoC Aswan
          </span>
        </motion.h1>
      </div>

      {/* ======================================================== */}
      {/* LAYER 4: ANIMATED OCEAN WAVES AT BOTTOM                  */}
      {/* ======================================================== */}
      <OceanWaves />
    </div>
  );
}
