import { useState } from 'react';
import { Volume2, VolumeX, Anchor, Menu, X } from 'lucide-react';
import { oceanAudio } from '../utils/audio';

interface NavbarProps {
  onOpenEnlistModal: () => void;
}

export function Navbar({ onOpenEnlistModal }: NavbarProps) {
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleAudio = () => {
    const active = oceanAudio.toggle();
    setIsAudioActive(active);
    if (active) {
      oceanAudio.playChime();
    }
  };

  const navLinks = [
    { label: 'Voyage', href: '#voyage' },
    { label: 'Mission', href: '#mission' },
    { label: 'Treasure Map', href: '#map' },
    { label: 'Crew Matcher', href: '#quiz' },
    { label: 'Deadlines', href: '#deadlines' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#070d16]/90 backdrop-blur-md border-b border-[#f59e0b]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#voyage" 
          className="text-lg md:text-xl font-bold tracking-wider text-[#f59e0b] hover:text-[#fbbf24] transition-colors flex items-center gap-2.5 group"
          style={{ fontFamily: 'var(--font-cinzel)' }}
        >
          <span className="w-8 h-8 rounded-lg bg-[#0e1c2e] border border-[#f59e0b]/40 flex items-center justify-center text-[#f59e0b] group-hover:border-[#f59e0b] transition-colors">
            <Anchor className="w-4 h-4" />
          </span>
          <span className="whitespace-nowrap">GDGoC Aswan</span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#c4b998]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#f59e0b] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#f59e0b] hover:after:w-full after:transition-all whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary actions (Sound toggle + Enlist CTA) */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleToggleAudio}
            title={isAudioActive ? 'Mute Ocean Ambiance' : 'Listen to Ocean Ambiance'}
            aria-label="Toggle ocean audio soundscape"
            className="p-2 rounded-lg border border-[#f59e0b]/30 bg-[#0b1626] text-[#e8dfc8] hover:text-[#f59e0b] hover:border-[#f59e0b]/60 transition-colors"
          >
            {isAudioActive ? <Volume2 className="w-4 h-4 text-[#f59e0b]" /> : <VolumeX className="w-4 h-4 text-[#8a7f66]" />}
          </button>

          <button
            type="button"
            onClick={onOpenEnlistModal}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-[#09121d] bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#fbbf24] hover:to-[#f59e0b] rounded-lg shadow-sm transition-all whitespace-nowrap border border-[#fcd34d]/60 cursor-pointer"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            Join the Crew
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-[#f59e0b]/30 bg-[#0b1626] text-[#e8dfc8]"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070d16] border-b border-[#f59e0b]/20 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#c4b998] hover:text-[#f59e0b] py-1.5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-[#f59e0b]/15">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnlistModal();
              }}
              className="w-full py-2.5 text-center text-sm font-bold text-[#09121d] bg-gradient-to-r from-[#f59e0b] to-[#d97706] rounded-lg"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              Join the Crew
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
