export function TreasureChestSvg() {
  return (
    <div className="relative w-16 h-16 sm:w-20 sm:h-20 select-none drop-shadow-[0_10px_25px_rgba(245,158,11,0.6)]">
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="goldChestGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="40%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>

          <linearGradient id="woodGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#451a03" />
            <stop offset="50%" stopColor="#291102" />
            <stop offset="100%" stopColor="#170901" />
          </linearGradient>

          <radialGradient id="chestLight" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fde047" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient treasure glow radiating outward */}
        <circle cx="50" cy="50" r="45" fill="url(#chestLight)" />

        {/* CHEST BASE */}
        <path
          d="M15,48 L85,48 L78,85 L22,85 Z"
          fill="url(#woodGrad)"
          stroke="url(#goldChestGrad)"
          strokeWidth="2.5"
        />

        {/* Wooden Planks Horizontals */}
        <line x1="17" y1="60" x2="83" y2="60" stroke="#78350f" strokeWidth="1.5" />
        <line x1="19" y1="72" x2="81" y2="72" stroke="#78350f" strokeWidth="1.5" />

        {/* Golden Reinforcing Straps */}
        <rect x="28" y="48" width="8" height="37" fill="url(#goldChestGrad)" />
        <rect x="64" y="48" width="8" height="37" fill="url(#goldChestGrad)" />
        {/* Rivets */}
        <circle cx="32" cy="55" r="1.5" fill="#451a03" />
        <circle cx="32" cy="78" r="1.5" fill="#451a03" />
        <circle cx="68" cy="55" r="1.5" fill="#451a03" />
        <circle cx="68" cy="78" r="1.5" fill="#451a03" />

        {/* GLOWING TECH TREASURE INSIDE (Partially Ajar) */}
        <path d="M18,48 C30,35 70,35 82,48 Z" fill="#fde047" opacity="0.9" />
        {/* Golden coins & gems spilling */}
        <circle cx="42" cy="46" r="3.5" fill="#f59e0b" stroke="#fef08a" strokeWidth="1" />
        <circle cx="52" cy="45" r="4" fill="#fbbf24" stroke="#ffffff" strokeWidth="1" />
        <circle cx="60" cy="47" r="3" fill="#38bdf8" />
        <polygon points="36,44 40,40 44,44 40,48" fill="#a855f7" />

        {/* CHEST DOME LID (Curved Pirate Trunk Lid, slightly open) */}
        <path
          d="M12,46 C12,24 88,24 88,46 L82,49 C82,32 18,32 18,49 Z"
          fill="url(#woodGrad)"
          stroke="url(#goldChestGrad)"
          strokeWidth="2.5"
        />
        {/* Gold Trim on Lid */}
        <path d="M14,44 C14,28 86,28 86,44" stroke="url(#goldChestGrad)" strokeWidth="3" fill="none" />

        {/* Large Golden Lock Escutcheon & Keyhole */}
        <rect x="44" y="52" width="12" height="15" rx="3" fill="url(#goldChestGrad)" stroke="#451a03" strokeWidth="1" />
        <circle cx="50" cy="58" r="2.5" fill="#170901" />
        <polygon points="49,58 51,58 51.5,63 48.5,63" fill="#170901" />
      </svg>
    </div>
  );
}
