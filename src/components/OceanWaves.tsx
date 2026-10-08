import { motion } from 'motion/react';

export function OceanWaves() {
  return (
    <div className="absolute inset-x-0 bottom-0 overflow-hidden pointer-events-none h-24 sm:h-32 md:h-36 z-10">
      {/* Wave Layer 1 - Deep Midnight Blue (Furthest, slowest) */}
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
        className="absolute bottom-0 left-0 w-[200vw] h-28 opacity-40"
      >
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-[#0a192f]">
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,50 L1200,120 L0,120 Z" />
        </svg>
      </motion.div>

      {/* Wave Layer 2 - Nautical Ocean Teal / Blue */}
      <motion.div
        animate={{ x: [-1000, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        className="absolute bottom-0 left-0 w-[200vw] h-22 opacity-65"
      >
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-[#0c243d]">
          <path d="M0,30 C300,90 400,0 700,60 C950,110 1100,10 1200,40 L1200,120 L0,120 Z" />
        </svg>
      </motion.div>

      {/* Wave Layer 3 - Foam & Crest (Fastest, closest) */}
      <motion.div
        animate={{ x: [0, -800] }}
        transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
        className="absolute bottom-0 left-0 w-[200vw] h-16 opacity-90"
      >
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-[#070f1a]">
          <path d="M0,45 C200,15 400,80 600,45 C800,10 1000,75 1200,45 L1200,120 L0,120 Z" />
        </svg>
      </motion.div>

      {/* Subtle sea mist gradient blending to the background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#060b13] via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
