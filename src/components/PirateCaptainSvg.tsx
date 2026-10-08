import { motion } from 'motion/react';

export function PirateCaptainSvg() {
  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 mx-auto select-none flex items-center justify-center"
    >
      {/* Ambient mystical starlight glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#f59e0b]/20 via-[#38bdf8]/15 to-transparent blur-3xl pointer-events-none" />

      {/* Floating Captain Container */}
      <motion.div
        animate={{
          y: [-6, 6, -6],
          rotate: [-1, 1, -1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="w-full h-full relative"
      >
        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
        >
          <defs>
            {/* Captain's Coat Gradient */}
            <linearGradient id="coatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="60%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>

            {/* Hat Gradient */}
            <linearGradient id="hatGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2c3a4f" />
              <stop offset="100%" stopColor="#0b1320" />
            </linearGradient>

            {/* Gold Trim */}
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>

            {/* Spyglass Brass */}
            <linearGradient id="brassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="50%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>

            {/* Lantern Glow */}
            <radialGradient id="lanternGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#f59e0b" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* BACKGROUND SHIP'S WHEEL (HELM) */}
          <g opacity="0.4">
            <circle cx="200" cy="200" r="140" stroke="#b45309" strokeWidth="6" strokeDasharray="14 8" />
            <circle cx="200" cy="200" r="110" stroke="#f59e0b" strokeWidth="3" />
            {/* Wheel spokes */}
            <line x1="200" y1="50" x2="200" y2="350" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />
            <line x1="50" y1="200" x2="350" y2="200" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />
            <line x1="94" y1="94" x2="306" y2="306" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />
            <line x1="94" y1="306" x2="306" y2="94" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />
            {/* Spoke knobs */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => {
              const rad = (angle * Math.PI) / 180;
              const x = 200 + 152 * Math.cos(rad);
              const y = 200 + 152 * Math.sin(rad);
              return <circle key={idx} cx={x} cy={y} r="6" fill="#f59e0b" />;
            })}
          </g>

          {/* COAT & TORSO */}
          <g>
            {/* Shoulders & Greatcoat */}
            <path
              d="M120 340 C120 280, 140 240, 200 240 C260 240, 280 280, 280 340 L310 380 L90 380 Z"
              fill="url(#coatGrad)"
              stroke="#f59e0b"
              strokeWidth="2"
            />

            {/* Gold Lapels / Trim */}
            <path d="M165 240 L180 340 L200 370 L220 340 L235 240" stroke="url(#goldGrad)" strokeWidth="4" fill="none" />
            
            {/* Brass Coat Buttons */}
            <circle cx="185" cy="280" r="4.5" fill="url(#goldGrad)" />
            <circle cx="215" cy="280" r="4.5" fill="url(#goldGrad)" />
            <circle cx="188" cy="315" r="4.5" fill="url(#goldGrad)" />
            <circle cx="212" cy="315" r="4.5" fill="url(#goldGrad)" />

            {/* Epaulets (Captain's Gold Shoulder fringes) */}
            <path d="M115 275 C125 265, 145 265, 155 272" stroke="url(#goldGrad)" strokeWidth="6" strokeLinecap="round" />
            <path d="M285 275 C275 265, 255 265, 245 272" stroke="url(#goldGrad)" strokeWidth="6" strokeLinecap="round" />
          </g>

          {/* SPYGLASS / TELESCOPE HELD AT SIDE */}
          <g transform="rotate(-25 105 270)">
            <rect x="70" y="270" width="18" height="60" rx="3" fill="url(#brassGrad)" stroke="#451a03" strokeWidth="1.5" />
            <rect x="68" y="260" width="22" height="12" rx="2" fill="url(#goldGrad)" />
            <rect x="73" y="325" width="12" height="25" rx="2" fill="url(#brassGrad)" />
            {/* Spyglass Glass Lens reflection */}
            <ellipse cx="79" cy="262" rx="7" ry="2" fill="#38bdf8" opacity="0.8" />
          </g>

          {/* NECK & BEARD / CHIN */}
          <g>
            <path d="M182 210 L182 245 C182 255, 218 255, 218 245 L218 210 Z" fill="#d97706" opacity="0.6" />
            {/* Pirate Crimson Scarf / Ascots */}
            <path d="M175 235 C190 250, 210 250, 225 235 L200 270 Z" fill="#b91c1c" stroke="#f87171" strokeWidth="1" />
          </g>

          {/* CAPTAIN'S FACE & HEAD */}
          <g>
            {/* Jaw and Face silhouette */}
            <path
              d="M170 170 C165 210, 175 235, 200 235 C225 235, 235 210, 230 170 C230 145, 170 145, 170 170 Z"
              fill="#d4a373"
            />

            {/* Pirate Beard / Goatee */}
            <path
              d="M185 208 C192 212, 208 212, 215 208 C215 232, 200 242, 200 242 C200 242, 185 232, 185 208 Z"
              fill="#1e293b"
            />
            {/* Captain's Mustache */}
            <path
              d="M180 195 Q200 192 200 198 Q200 192 220 195 Q200 203 180 195 Z"
              fill="#0f172a"
            />

            {/* Tech Eye-Patch (Right Eye) */}
            <ellipse cx="214" cy="174" rx="8" ry="7" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
            <line x1="190" y1="165" x2="230" y2="178" stroke="#1e293b" strokeWidth="2.5" />
            {/* Subtle Cyan Tech Reticle in Eye Patch */}
            <circle cx="214" cy="174" r="3" fill="#38bdf8" opacity="0.9" />
            <circle cx="214" cy="174" r="5" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="2 2" />

            {/* Natural Left Eye (Observant Sailor) */}
            <ellipse cx="186" cy="173" rx="4" ry="2.5" fill="#0f172a" />
            <circle cx="187" cy="172.5" r="1" fill="#ffffff" />
            {/* Determined Eyebrow */}
            <path d="M178 165 Q186 161 193 166" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* CAPTAIN'S TRICORN HAT */}
          <g>
            {/* Back brim */}
            <path
              d="M125 160 C120 120, 280 120, 275 160 Z"
              fill="#0b1320"
            />

            {/* Main Tricorn Hat Silhouette */}
            <path
              d="M100 155 
                 C115 140, 140 120, 160 115 
                 C180 75, 220 75, 240 115 
                 C260 120, 285 140, 300 155 
                 C270 170, 240 162, 200 165 
                 C160 162, 130 170, 100 155 Z"
              fill="url(#hatGrad)"
              stroke="url(#goldGrad)"
              strokeWidth="3.5"
            />

            {/* Hat Fold Creases */}
            <path d="M160 115 Q200 145 240 115" stroke="#1e293b" strokeWidth="3" fill="none" />
            <path d="M200 80 L200 135" stroke="url(#goldGrad)" strokeWidth="1.5" opacity="0.6" />

            {/* FEATHER IN CAPTAIN'S HAT (White & Gold plume) */}
            <path
              d="M245 115 C265 85, 290 70, 310 60 C300 85, 280 110, 260 125 Z"
              fill="#f8fafc"
              opacity="0.95"
            />
            <path d="M250 110 Q280 85 305 65" stroke="#f59e0b" strokeWidth="1.5" />

            {/* ======================================================== */}
            {/* ICONIC GOOGLE DEVELOPER GROUPS (GDG) LOGO EMBLEM ON HAT */}
            {/* ======================================================== */}
            <g transform="translate(168, 105)">
              {/* Emblem Golden Medallion Background */}
              <circle cx="32" cy="22" r="24" fill="#0f172a" stroke="url(#goldGrad)" strokeWidth="3" />
              <circle cx="32" cy="22" r="21" stroke="#fef08a" strokeWidth="0.8" opacity="0.5" />

              {/* GDG Left Code Bracket < (Blue & Green) */}
              {/* Blue top arm of < */}
              <path
                d="M26 12 L18 20 L22 23 L29 16 Z"
                fill="#4285F4"
              />
              {/* Green bottom arm of < */}
              <path
                d="M18 20 L26 28 L29 25 L22 18 Z"
                fill="#0F9D58"
              />

              {/* GDG Right Code Bracket > (Red & Yellow) */}
              {/* Red top arm of > */}
              <path
                d="M38 12 L46 20 L42 23 L35 16 Z"
                fill="#EA4335"
              />
              {/* Yellow bottom arm of > */}
              <path
                d="M46 20 L38 28 L35 25 L42 18 Z"
                fill="#FBBC04"
              />

              {/* Tech center dot / compass star */}
              <circle cx="32" cy="20" r="2.5" fill="#ffffff" />
            </g>
          </g>

          {/* NAUTICAL LANTERN (Gently glowing on the right) */}
          <g transform="translate(305, 180)">
            <circle cx="20" cy="25" r="35" fill="url(#lanternGlow)" />
            {/* Lantern Chain */}
            <line x1="20" y1="0" x2="20" y2="12" stroke="#d97706" strokeWidth="2" strokeDasharray="3 2" />
            {/* Lantern Cap */}
            <path d="M10 12 L30 12 L25 8 L15 8 Z" fill="#78350f" stroke="#f59e0b" strokeWidth="1" />
            {/* Glass Cage */}
            <rect x="11" y="12" width="18" height="26" rx="2" fill="#fef08a" opacity="0.85" stroke="#78350f" strokeWidth="1.5" />
            {/* Filament flame */}
            <circle cx="20" cy="25" r="4" fill="#ea580c" />
            <circle cx="20" cy="25" r="2" fill="#fef08a" />
            {/* Lantern Base */}
            <rect x="9" y="38" width="22" height="6" rx="2" fill="#78350f" stroke="#f59e0b" strokeWidth="1" />
          </g>
        </svg>
      </motion.div>
    </motion.div>
  );
}
