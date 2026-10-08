import { CrewId } from '../types/expedition';

interface IslandSvgProps {
  crewId: CrewId;
  isSelected?: boolean;
  isHovered?: boolean;
}

export function IslandSvg({ crewId, isSelected, isHovered }: IslandSvgProps) {
  // Vibrant accents corresponding to each crew
  const isHighlighted = isSelected || isHovered;

  switch (crewId) {
    case 'web':
      // The Shipbuilders - Port with harbor docks & lighthouse
      return (
        <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-lg overflow-visible">
          <defs>
            <radialGradient id="islandSand1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="70%" stopColor="#92400e" />
              <stop offset="100%" stopColor="#451a03" />
            </radialGradient>
            <radialGradient id="waterRipples1" cx="50%" cy="50%" r="50%">
              <stop offset="60%" stopColor="transparent" />
              <stop offset="90%" stopColor="#38bdf8" stopOpacity={isHighlighted ? "0.8" : "0.3"} />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          {/* Water ripples */}
          <ellipse cx="80" cy="85" rx="72" ry="45" fill="url(#waterRipples1)" />
          {/* Main Island mass */}
          <path
            d="M30,85 C25,60 55,40 85,42 C120,44 140,65 135,90 C130,115 105,125 75,120 C45,115 35,110 30,85 Z"
            fill="url(#islandSand1)"
            stroke={isHighlighted ? "#38bdf8" : "#d97706"}
            strokeWidth={isHighlighted ? "3" : "1.5"}
          />
          {/* Green vegetation patch */}
          <path d="M50,75 C55,58 85,55 105,70 C115,80 95,100 70,95 C55,92 45,90 50,75 Z" fill="#15803d" opacity="0.85" />
          {/* Lighthouse */}
          <polygon points="76,75 84,75 82,38 78,38" fill="#f8fafc" stroke="#0f172a" strokeWidth="1" />
          <rect x="76" y="34" width="8" height="6" fill="#f59e0b" />
          <polygon points="75,34 85,34 80,26" fill="#dc2626" />
          {/* Beacon light beam */}
          <polygon points="80,36 140,20 140,52" fill="#38bdf8" opacity={isHighlighted ? "0.6" : "0.25"} />
          {/* Wooden Harbor Dock */}
          <rect x="25" y="88" width="28" height="6" fill="#78350f" stroke="#451a03" strokeWidth="1" />
          <rect x="30" y="94" width="4" height="12" fill="#451a03" />
          <rect x="44" y="94" width="4" height="12" fill="#451a03" />
        </svg>
      );

    case 'ai':
      // The Navigators - Island with celestial crystal observatory & neural spire
      return (
        <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-lg overflow-visible">
          <defs>
            <radialGradient id="islandSand2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#7e22ce" />
              <stop offset="70%" stopColor="#4c1d95" />
              <stop offset="100%" stopColor="#2e1065" />
            </radialGradient>
            <radialGradient id="waterRipples2" cx="50%" cy="50%" r="50%">
              <stop offset="60%" stopColor="transparent" />
              <stop offset="90%" stopColor="#c084fc" stopOpacity={isHighlighted ? "0.85" : "0.3"} />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <ellipse cx="80" cy="85" rx="70" ry="46" fill="url(#waterRipples2)" />
          {/* Rocky floating crag */}
          <path
            d="M35,90 C30,65 50,35 90,40 C130,45 135,75 130,95 C125,115 95,125 65,120 C45,115 40,110 35,90 Z"
            fill="url(#islandSand2)"
            stroke={isHighlighted ? "#c084fc" : "#a855f7"}
            strokeWidth={isHighlighted ? "3" : "1.5"}
          />
          {/* Crystalline plateau */}
          <polygon points="60,85 75,55 105,60 115,85 85,95" fill="#581c87" />
          {/* Floating Neural Crystal Spire */}
          <polygon points="80,18 90,42 80,55 70,42" fill="#e879f9" stroke="#fae8ff" strokeWidth="1" />
          {/* Crystal glow rings */}
          <circle cx="80" cy="36" r="14" fill="none" stroke="#f0abfc" strokeWidth="1" strokeDasharray="3 3" opacity={isHighlighted ? "1" : "0.5"} />
          {/* Neural circuits glowing */}
          <path d="M65,75 L75,85 L85,75 L100,85" stroke="#f0abfc" strokeWidth="2" fill="none" opacity="0.8" />
        </svg>
      );

    case 'datascience':
      // The Map Readers - Archipelago of atolls, compass stone & sandbars
      return (
        <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-lg overflow-visible">
          <defs>
            <radialGradient id="islandSand3" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#047857" />
              <stop offset="70%" stopColor="#064e3b" />
              <stop offset="100%" stopColor="#022c22" />
            </radialGradient>
            <radialGradient id="waterRipples3" cx="50%" cy="50%" r="50%">
              <stop offset="60%" stopColor="transparent" />
              <stop offset="90%" stopColor="#34d399" stopOpacity={isHighlighted ? "0.8" : "0.3"} />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <ellipse cx="80" cy="85" rx="74" ry="46" fill="url(#waterRipples3)" />
          {/* Main cluster */}
          <path
            d="M32,82 C30,60 55,48 80,48 C105,48 135,62 130,86 C125,110 100,120 70,118 C40,115 34,105 32,82 Z"
            fill="url(#islandSand3)"
            stroke={isHighlighted ? "#34d399" : "#059669"}
            strokeWidth={isHighlighted ? "3" : "1.5"}
          />
          {/* Small companion islet */}
          <ellipse cx="125" cy="50" rx="14" ry="8" fill="#047857" stroke="#10b981" strokeWidth="1" />
          {/* Golden Compass Stone Monolith */}
          <circle cx="78" cy="82" r="16" fill="#065f46" stroke="#fbbf24" strokeWidth="2" />
          <polygon points="78,72 82,82 78,84 74,82" fill="#ef4444" />
          <polygon points="78,92 82,82 78,80 74,82" fill="#f8fafc" />
          {/* Palm Trees */}
          <path d="M52,82 Q56,66 60,60" stroke="#78350f" strokeWidth="2.5" fill="none" />
          <circle cx="60" cy="58" r="8" fill="#15803d" />
        </svg>
      );

    case 'se':
      // The Hull Crafters - Ironclad Stone Fortress Citadel
      return (
        <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-lg overflow-visible">
          <defs>
            <radialGradient id="islandSand4" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#b45309" />
              <stop offset="70%" stopColor="#78350f" />
              <stop offset="100%" stopColor="#451a03" />
            </radialGradient>
            <radialGradient id="waterRipples4" cx="50%" cy="50%" r="50%">
              <stop offset="60%" stopColor="transparent" />
              <stop offset="90%" stopColor="#fbbf24" stopOpacity={isHighlighted ? "0.85" : "0.3"} />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <ellipse cx="80" cy="85" rx="72" ry="45" fill="url(#waterRipples4)" />
          {/* Mountainous rugged island */}
          <path
            d="M30,88 C32,60 55,42 88,40 C118,38 136,65 132,92 C128,118 95,124 68,122 C42,120 28,110 30,88 Z"
            fill="url(#islandSand4)"
            stroke={isHighlighted ? "#fbbf24" : "#d97706"}
            strokeWidth={isHighlighted ? "3" : "1.5"}
          />
          {/* Stone Fortress & Anvil Citadel */}
          <polygon points="55,85 62,55 98,55 105,85" fill="#334155" stroke="#64748b" strokeWidth="1.5" />
          {/* Fortress battlements */}
          <rect x="62" y="50" width="8" height="6" fill="#475569" />
          <rect x="76" y="50" width="8" height="6" fill="#475569" />
          <rect x="90" y="50" width="8" height="6" fill="#475569" />
          {/* Glowing Forge Hearth */}
          <circle cx="80" cy="72" r="6" fill="#ea580c" />
          <circle cx="80" cy="72" r="3" fill="#fde047" />
          {/* Drydock Shipyard Rails */}
          <line x1="95" y1="90" x2="125" y2="105" stroke="#f59e0b" strokeWidth="2.5" />
          <line x1="98" y1="94" x2="128" y2="109" stroke="#f59e0b" strokeWidth="2.5" />
        </svg>
      );

    case 'cyber':
      // The Cannons & Lookouts - High Watchtower & Cannon Emplacements
      return (
        <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-lg overflow-visible">
          <defs>
            <radialGradient id="islandSand5" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#991b1b" />
              <stop offset="70%" stopColor="#7f1d1d" />
              <stop offset="100%" stopColor="#450a0a" />
            </radialGradient>
            <radialGradient id="waterRipples5" cx="50%" cy="50%" r="50%">
              <stop offset="60%" stopColor="transparent" />
              <stop offset="90%" stopColor="#f87171" stopOpacity={isHighlighted ? "0.85" : "0.3"} />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <ellipse cx="80" cy="85" rx="72" ry="45" fill="url(#waterRipples5)" />
          {/* Island Crags */}
          <path
            d="M32,84 C30,55 52,44 82,42 C115,40 135,68 130,94 C125,118 95,125 65,120 C38,115 34,106 32,84 Z"
            fill="url(#islandSand5)"
            stroke={isHighlighted ? "#f87171" : "#ef4444"}
            strokeWidth={isHighlighted ? "3" : "1.5"}
          />
          {/* Tall Stone Watchtower */}
          <polygon points="73,90 87,90 85,32 75,32" fill="#1e293b" stroke="#ef4444" strokeWidth="1.5" />
          {/* Crow's Nest Lookout Deck */}
          <rect x="71" y="28" width="18" height="6" fill="#0f172a" stroke="#f87171" strokeWidth="1" />
          {/* Red Warning Beacon */}
          <circle cx="80" cy="22" r="4" fill="#ef4444" />
          <circle cx="80" cy="22" r="8" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" opacity={isHighlighted ? "1" : "0.5"} />
          {/* Pirate Defense Cannons */}
          <rect x="52" y="86" width="16" height="5" rx="1.5" transform="rotate(-15 52 86)" fill="#0f172a" stroke="#475569" strokeWidth="0.8" />
          <rect x="94" y="84" width="16" height="5" rx="1.5" transform="rotate(15 94 84)" fill="#0f172a" stroke="#475569" strokeWidth="0.8" />
        </svg>
      );
  }
}
