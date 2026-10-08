import { motion } from 'motion/react';

export function SailingPirateShip() {
  return (
    <motion.div
      // Continuous slow voyage drift horizontally across the horizon
      animate={{
        x: [-90, 90, -90],
      }}
      transition={{
        duration: 36,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="relative select-none pointer-events-none"
    >
      {/* Ship hull bobbing & wave pitching motion */}
      <motion.div
        animate={{
          y: [-12, 10, -12],
          rotate: [-3, 3.5, -3],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="w-48 sm:w-64 md:w-80 h-32 sm:h-44 md:h-52 relative drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
      >
        <svg
          viewBox="0 0 320 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            {/* Hull Wood Gradient */}
            <linearGradient id="shipWood" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2a180e" />
              <stop offset="50%" stopColor="#1a0e08" />
              <stop offset="100%" stopColor="#0c0704" />
            </linearGradient>

            {/* Sails Gradient */}
            <linearGradient id="sailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ede5d0" />
              <stop offset="60%" stopColor="#c5baa0" />
              <stop offset="100%" stopColor="#8c8166" />
            </linearGradient>

            {/* Fore Sail (Slightly darker for depth) */}
            <linearGradient id="foreSailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#dfd5bc" />
              <stop offset="100%" stopColor="#7a7056" />
            </linearGradient>

            {/* Golden Lantern Glow at Stern */}
            <radialGradient id="sternGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fde047" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#f59e0b" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* ======================================================== */}
          {/* SHIP RIGGING & ROPES (Behind Sails)                      */}
          {/* ======================================================== */}
          <g opacity="0.45" stroke="#a89a78" strokeWidth="0.8">
            {/* Bowsprit stays */}
            <line x1="28" y1="126" x2="88" y2="40" />
            <line x1="28" y1="126" x2="88" y2="70" />
            {/* Main stays */}
            <line x1="88" y1="40" x2="160" y2="18" />
            <line x1="160" y1="18" x2="238" y2="48" />
            {/* Shrouds / ratlines back to hull */}
            <line x1="88" y1="50" x2="72" y2="148" />
            <line x1="160" y1="30" x2="145" y2="152" />
            <line x1="238" y1="55" x2="252" y2="148" />
          </g>

          {/* ======================================================== */}
          {/* MASTS                                                    */}
          {/* ======================================================== */}
          {/* Fore Mast */}
          <line x1="90" y1="36" x2="90" y2="155" stroke="#452715" strokeWidth="3.5" strokeLinecap="round" />
          {/* Main Mast (Tallest, Center) */}
          <line x1="160" y1="14" x2="160" y2="155" stroke="#452715" strokeWidth="4.5" strokeLinecap="round" />
          {/* Mizzen Mast (Stern) */}
          <line x1="236" y1="46" x2="236" y2="155" stroke="#452715" strokeWidth="3.5" strokeLinecap="round" />

          {/* Bowsprit (front wooden spar extending forward) */}
          <line x1="105" y1="146" x2="18" y2="124" stroke="#5a341c" strokeWidth="3.5" strokeLinecap="round" />

          {/* ======================================================== */}
          {/* BILLOWING SAILS                                          */}
          {/* ======================================================== */}

          {/* FORE MAST SAILS (Left) */}
          {/* Fore Topsail */}
          <path
            d="M74,48 C88,44 96,44 106,48 C102,68 82,68 74,48 Z"
            fill="url(#foreSailGrad)"
            stroke="#52462e"
            strokeWidth="0.8"
          />
          {/* Fore Course (Lower Sail) */}
          <path
            d="M66,75 C86,70 98,70 114,75 C108,106 72,106 66,75 Z"
            fill="url(#foreSailGrad)"
            stroke="#52462e"
            strokeWidth="0.8"
          />

          {/* MAIN MAST SAILS (Center, Grand Sails) */}
          {/* Main Topgallant Sail */}
          <path
            d="M145,24 C158,21 166,21 175,24 C172,42 148,42 145,24 Z"
            fill="url(#sailGrad)"
            stroke="#52462e"
            strokeWidth="0.8"
          />
          {/* Main Topsail */}
          <path
            d="M136,46 C156,41 168,41 184,46 C180,72 140,72 136,46 Z"
            fill="url(#sailGrad)"
            stroke="#52462e"
            strokeWidth="0.8"
          />
          {/* Main Course Sail (Largest) */}
          <path
            d="M125,78 C155,71 172,71 195,78 C190,116 130,116 125,78 Z"
            fill="url(#sailGrad)"
            stroke="#52462e"
            strokeWidth="1"
          />

          {/* MIZZEN MAST SAILS (Right / Stern) */}
          {/* Lateen / Mizzen Sail */}
          <path
            d="M218,58 C232,54 245,54 254,58 C250,84 222,84 218,58 Z"
            fill="url(#foreSailGrad)"
            stroke="#52462e"
            strokeWidth="0.8"
          />
          {/* Mizzen Lower Sail */}
          <path
            d="M214,90 C234,85 248,85 258,90 C254,118 218,118 214,90 Z"
            fill="url(#foreSailGrad)"
            stroke="#52462e"
            strokeWidth="0.8"
          />

          {/* Jib Sail (Triangular front sail to bowsprit) */}
          <path
            d="M86,72 L26,125 L86,118 Z"
            fill="url(#foreSailGrad)"
            stroke="#52462e"
            strokeWidth="0.8"
            opacity="0.9"
          />

          {/* ======================================================== */}
          {/* PIRATE FLAGS (WAVING IN THE SEA BREEZE)                  */}
          {/* ======================================================== */}
          {/* Main Mast Pirate Flag */}
          <g transform="translate(160, 10)">
            <motion.path
              animate={{
                d: [
                  "M0,0 Q14,-4 28,2 Q14,8 0,6 Z",
                  "M0,0 Q14,3 28,-1 Q14,5 0,6 Z",
                  "M0,0 Q14,-4 28,2 Q14,8 0,6 Z",
                ],
              }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
              fill="#090d16"
              stroke="#dc2626"
              strokeWidth="0.8"
            />
            {/* Tiny Skull / Crossbones dot */}
            <circle cx="12" cy="2" r="1.5" fill="#fef08a" />
          </g>

          {/* Fore Mast Flag (Blue pennant) */}
          <polygon points="90,32 106,35 90,38" fill="#2563eb" />
          {/* Mizzen Flag (Gold pennant) */}
          <polygon points="236,42 250,45 236,48" fill="#f59e0b" />

          {/* ======================================================== */}
          {/* SHIP'S WOODEN HULL                                       */}
          {/* ======================================================== */}
          <g>
            {/* Main Galleon Hull Silhouette */}
            <path
              d="M48,138 
                 C58,154, 82,176, 160,178 
                 C240,178, 275,158, 285,135 
                 L272,122 
                 C260,128, 245,130, 220,132 
                 L110,132 
                 C70,132, 54,128, 48,138 Z"
              fill="url(#shipWood)"
              stroke="#b45309"
              strokeWidth="1.5"
            />

            {/* Stern Castle / Poop Deck (Raised rear cabin) */}
            <path
              d="M228,132 L274,122 L278,142 L232,146 Z"
              fill="#3a1e0f"
              stroke="#f59e0b"
              strokeWidth="1"
            />
            {/* Stern Cabin Windows */}
            <rect x="246" y="128" width="5" height="6" rx="1" fill="#fde047" opacity="0.85" />
            <rect x="255" y="127" width="5" height="6" rx="1" fill="#fde047" opacity="0.85" />
            <rect x="264" y="126" width="5" height="6" rx="1" fill="#fde047" opacity="0.85" />

            {/* Hull Planking Gold Trim Stripe */}
            <path
              d="M52,145 C95,160 215,162 278,140"
              stroke="#d97706"
              strokeWidth="1.5"
              fill="none"
            />

            {/* Cannon Ports (Gun deck ports along hull) */}
            <circle cx="95" cy="151" r="2.2" fill="#090d16" stroke="#b45309" strokeWidth="0.8" />
            <circle cx="125" cy="153" r="2.2" fill="#090d16" stroke="#b45309" strokeWidth="0.8" />
            <circle cx="155" cy="154" r="2.2" fill="#090d16" stroke="#b45309" strokeWidth="0.8" />
            <circle cx="185" cy="154" r="2.2" fill="#090d16" stroke="#b45309" strokeWidth="0.8" />
            <circle cx="215" cy="152" r="2.2" fill="#090d16" stroke="#b45309" strokeWidth="0.8" />

            {/* Bow Anchor hanging on side */}
            <circle cx="68" cy="147" r="2.5" fill="none" stroke="#78350f" strokeWidth="1" />
            <line x1="68" y1="147" x2="68" y2="157" stroke="#78350f" strokeWidth="1.2" />
            <path d="M63,155 C65,158 71,158 73,155" stroke="#78350f" strokeWidth="1.2" fill="none" />
          </g>

          {/* ======================================================== */}
          {/* GLOWING STERN LANTERN (Pirate Ship Lantern Light)        */}
          {/* ======================================================== */}
          <g transform="translate(276, 120)">
            {/* Ambient Lantern Glow */}
            <circle cx="5" cy="6" r="16" fill="url(#sternGlow)" />
            {/* Lantern Bracket */}
            <path d="M-2,6 L4,4 L4,10 Z" fill="#78350f" />
            {/* Glass Cage */}
            <rect x="2" y="3" width="6" height="7" rx="1" fill="#fef08a" stroke="#78350f" strokeWidth="0.8" />
            {/* Flame */}
            <circle cx="5" cy="6.5" r="1.5" fill="#ea580c" />
          </g>

          {/* ======================================================== */}
          {/* WATER WAKE / FOAM UNDER SHIP'S KEEL                      */}
          {/* ======================================================== */}
          <g opacity="0.6">
            <ellipse cx="160" cy="177" rx="100" ry="4" fill="#38bdf8" opacity="0.25" />
            {/* Bow wave splash */}
            <path d="M42,148 Q35,155 48,158" stroke="#f0f9ff" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            {/* Stern wake foam */}
            <path d="M280,146 Q295,152 284,158" stroke="#38bdf8" strokeWidth="1.2" fill="none" />
          </g>
        </svg>
      </motion.div>
    </motion.div>
  );
}
