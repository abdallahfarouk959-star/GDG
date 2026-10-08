import { CrewId } from '../types/expedition';

interface CrewIllustrationProps {
  crewId: CrewId;
}

export function CrewIllustration({ crewId }: CrewIllustrationProps) {
  switch (crewId) {
    case 'web':
      // The Shipbuilders: Code brackets helm wheel
      return (
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
          <circle cx="100" cy="100" r="76" stroke="#b45309" strokeWidth="4" strokeDasharray="8 6" />
          <circle cx="100" cy="100" r="62" stroke="#f59e0b" strokeWidth="2.5" />
          {/* Top Handle < > */}
          <path d="M92 20 L84 28 L92 36" stroke="#4285F4" strokeWidth="3" strokeLinecap="round" />
          <path d="M108 20 L116 28 L108 36" stroke="#EA4335" strokeWidth="3" strokeLinecap="round" />
          <line x1="100" y1="38" x2="100" y2="62" stroke="#f59e0b" strokeWidth="3" />
          {/* Bottom Handle */}
          <path d="M92 164 L84 172 L92 180" stroke="#0F9D58" strokeWidth="3" strokeLinecap="round" />
          <path d="M108 164 L116 172 L108 180" stroke="#FBBC04" strokeWidth="3" strokeLinecap="round" />
          <line x1="100" y1="138" x2="100" y2="162" stroke="#f59e0b" strokeWidth="3" />
          {/* Left Handle */}
          <path d="M20 92 L28 84 L36 92" stroke="#4285F4" strokeWidth="3" strokeLinecap="round" />
          <path d="M20 108 L28 116 L36 108" stroke="#0F9D58" strokeWidth="3" strokeLinecap="round" />
          <line x1="38" y1="100" x2="62" y2="100" stroke="#f59e0b" strokeWidth="3" />
          {/* Right Handle */}
          <path d="M164 92 L172 84 L180 92" stroke="#EA4335" strokeWidth="3" strokeLinecap="round" />
          <path d="M164 108 L172 116 L180 108" stroke="#FBBC04" strokeWidth="3" strokeLinecap="round" />
          <line x1="138" y1="100" x2="162" y2="100" stroke="#f59e0b" strokeWidth="3" />
          {/* Diagonal Spokes */}
          <line x1="56" y1="56" x2="144" y2="144" stroke="#78350f" strokeWidth="3" />
          <line x1="56" y1="144" x2="144" y2="56" stroke="#78350f" strokeWidth="3" />
          {/* Hub */}
          <circle cx="100" cy="100" r="28" fill="#091424" stroke="#f59e0b" strokeWidth="3" />
          <path d="M90 92 L82 100 L90 108" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M110 92 L118 100 L110 108" stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="100" cy="100" r="3" fill="#ffffff" />
        </svg>
      );

    case 'ai':
      // The Navigators: Neural Astrolabe & Constellation Spire
      return (
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
          <circle cx="100" cy="100" r="76" stroke="#7e22ce" strokeWidth="3" strokeDasharray="6 4" />
          <circle cx="100" cy="100" r="64" stroke="#c084fc" strokeWidth="2" />
          {/* Astrolabe Axis Rings */}
          <ellipse cx="100" cy="100" rx="64" ry="24" stroke="#a855f7" strokeWidth="1.5" />
          <ellipse cx="100" cy="100" rx="24" ry="64" stroke="#a855f7" strokeWidth="1.5" />
          {/* Neural Nodes & Synaptic Connections */}
          <line x1="60" y1="60" x2="100" y2="100" stroke="#e879f9" strokeWidth="2" />
          <line x1="140" y1="60" x2="100" y2="100" stroke="#e879f9" strokeWidth="2" />
          <line x1="60" y1="140" x2="100" y2="100" stroke="#e879f9" strokeWidth="2" />
          <line x1="140" y1="140" x2="100" y2="100" stroke="#e879f9" strokeWidth="2" />
          {/* Neural Crystal Spire */}
          <polygon points="100,45 116,100 100,125 84,100" fill="#a855f7" stroke="#f0abfc" strokeWidth="2" />
          <circle cx="60" cy="60" r="7" fill="#4c1d95" stroke="#f0abfc" strokeWidth="2" />
          <circle cx="140" cy="60" r="7" fill="#4c1d95" stroke="#f0abfc" strokeWidth="2" />
          <circle cx="60" cy="140" r="7" fill="#4c1d95" stroke="#f0abfc" strokeWidth="2" />
          <circle cx="140" cy="140" r="7" fill="#4c1d95" stroke="#f0abfc" strokeWidth="2" />
          <circle cx="100" cy="100" r="4" fill="#ffffff" />
        </svg>
      );

    case 'datascience':
      // The Map Readers: Cartographic Quadrant & Tidal Graphs
      return (
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
          <circle cx="100" cy="100" r="74" stroke="#059669" strokeWidth="3" />
          <circle cx="100" cy="100" r="60" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 4" />
          {/* Coordinate Quadrant Grid */}
          <line x1="30" y1="100" x2="170" y2="100" stroke="#34d399" strokeWidth="2" />
          <line x1="100" y1="30" x2="100" y2="170" stroke="#34d399" strokeWidth="2" />
          {/* Tidal Data Curve */}
          <path d="M45,130 Q70,70 100,105 T155,75" stroke="#fbbf24" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          {/* Data Points on Curve */}
          <circle cx="45" cy="130" r="4.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1" />
          <circle cx="78" cy="80" r="4.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1" />
          <circle cx="100" cy="105" r="4.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1" />
          <circle cx="130" cy="95" r="4.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1" />
          <circle cx="155" cy="75" r="4.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1" />
          {/* Central Compass Stone */}
          <polygon points="100,60 108,100 100,106 92,100" fill="#ef4444" />
          <polygon points="100,140 108,100 100,94 92,100" fill="#f8fafc" />
        </svg>
      );

    case 'se':
      // The Hull Crafters: Ironclad Anvil, Keel & Gears
      return (
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
          <circle cx="100" cy="100" r="76" stroke="#b45309" strokeWidth="4" />
          {/* Iron Gear Teeth around rim */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => {
            const rad = (angle * Math.PI) / 180;
            const x = 100 + 78 * Math.cos(rad);
            const y = 100 + 78 * Math.sin(rad);
            return <rect key={idx} x={x - 6} y={y - 6} width="12" height="12" rx="2" fill="#78350f" />;
          })}
          {/* Iron Fortress Citadel & Keel Anvil */}
          <path d="M50,130 L70,80 L130,80 L150,130 Z" fill="#334155" stroke="#64748b" strokeWidth="2" />
          {/* Castle Battlements */}
          <rect x="75" y="72" width="12" height="10" fill="#475569" />
          <rect x="94" y="72" width="12" height="10" fill="#475569" />
          <rect x="113" y="72" width="12" height="10" fill="#475569" />
          {/* Fiery Core Forge */}
          <circle cx="100" cy="105" r="14" fill="#ea580c" stroke="#fbbf24" strokeWidth="2" />
          <circle cx="100" cy="105" r="7" fill="#fef08a" />
          {/* Architecture Structure lines */}
          <line x1="60" y1="130" x2="140" y2="130" stroke="#f59e0b" strokeWidth="3" />
          <line x1="75" y1="145" x2="125" y2="145" stroke="#d97706" strokeWidth="3" />
        </svg>
      );

    case 'cyber':
      // The Cannons & Lookouts: Watchtower Periscope & Defense Shield
      return (
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
          {/* Threat Radar Rings */}
          <circle cx="100" cy="100" r="76" stroke="#991b1b" strokeWidth="3" strokeDasharray="8 4" />
          <circle cx="100" cy="100" r="58" stroke="#ef4444" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="40" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" />
          {/* Crosshair Target Scan Lines */}
          <line x1="100" y1="20" x2="100" y2="180" stroke="#f87171" strokeWidth="1.5" />
          <line x1="20" y1="100" x2="180" y2="100" stroke="#f87171" strokeWidth="1.5" />
          {/* Watchtower Bastion */}
          <polygon points="90,140 110,140 106,60 94,60" fill="#1e293b" stroke="#ef4444" strokeWidth="2" />
          {/* Lookout Crow's Nest Platform */}
          <rect x="88" y="52" width="24" height="10" rx="2" fill="#0f172a" stroke="#f87171" strokeWidth="1.5" />
          {/* Warning Red Beacon */}
          <circle cx="100" cy="44" r="6" fill="#ef4444" />
          <circle cx="100" cy="44" r="10" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" />
          {/* Cannons Left & Right */}
          <rect x="62" y="125" width="24" height="6" rx="2" transform="rotate(-20 62 125)" fill="#0f172a" stroke="#f87171" strokeWidth="1" />
          <rect x="114" y="125" width="24" height="6" rx="2" transform="rotate(20 114 125)" fill="#0f172a" stroke="#f87171" strokeWidth="1" />
        </svg>
      );
  }
}
