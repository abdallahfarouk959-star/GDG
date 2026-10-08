import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize, 
  Minimize 
} from 'lucide-react';
import { Slide1Welcome } from './slides/Slide1Welcome';
import { Slide2Voyage } from './slides/Slide2Voyage';
import { Slide3MapOverview } from './slides/Slide3MapOverview';
import { SlideCrew } from './slides/SlideCrew';
import { Slide5FinalCall } from './slides/Slide5FinalCall';
import { EnlistModal } from './EnlistModal';
import { CREWS } from '../data/crewsData';

const SLIDE_TITLES = [
  'Welcome Aboard (The Hook)',
  'The Voyage (About Us)',
  'The Ocean Map (5 Fleets)',
  'Web Development Crew',
  'Artificial Intelligence Crew',
  'Data Science Crew',
  'Software Engineering Crew',
  'Cybersecurity Crew',
  'Live Game: Find The Treasure',
];

const TOTAL_SLIDES = SLIDE_TITLES.length; // 9 slides

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring' as const, stiffness: 260, damping: 28 },
      opacity: { duration: 0.35 },
      scale: { duration: 0.35 },
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
    scale: 0.95,
    transition: {
      x: { type: 'spring' as const, stiffness: 260, damping: 28 },
      opacity: { duration: 0.25 },
    },
  }),
};

export function SlideDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isEnlistModalOpen, setIsEnlistModalOpen] = useState(false);
  const [enlistCrewId, setEnlistCrewId] = useState<any>('web');

  const goToSlide = useCallback((newIndex: number) => {
    if (newIndex >= 0 && newIndex < TOTAL_SLIDES && newIndex !== currentSlide) {
      setDirection(newIndex > currentSlide ? 1 : -1);
      setCurrentSlide(newIndex);
    }
  }, [currentSlide]);

  const handleNext = useCallback(() => {
    if (currentSlide < TOTAL_SLIDES - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide]);

  const handlePrev = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  // Stage presentation clicker & keyboard navigation listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Avoid intercepting inputs inside modals
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
        case ' ': // Spacebar
          e.preventDefault();
          handleNext();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          handlePrev();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(TOTAL_SLIDES - 1);
          break;
        case 'f':
        case 'F':
          toggleFullscreen();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, goToSlide]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  // On Slide 3 (The Ocean Map), selecting an island jumps directly to that crew's slide!
  const handleSelectCrewFromMap = (crewIdx: number) => {
    goToSlide(3 + crewIdx);
  };

  const handleOpenEnlistWithCrew = (crewId: string) => {
    setEnlistCrewId(crewId);
    setIsEnlistModalOpen(true);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#040810] text-[#ede5d0] select-none font-sans">
      {/* ======================================================== */}
      {/* FLOATING FULLSCREEN TOGGLE BUTTON IN TOP-RIGHT CORNER    */}
      {/* ======================================================== */}
      <button
        type="button"
        onClick={toggleFullscreen}
        title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen (F)'}
        aria-label="Toggle full screen"
        className="fixed top-6 right-6 z-50 p-2.5 rounded-xl bg-[#081220]/80 hover:bg-[#0f1f35] border border-[#f59e0b]/30 hover:border-[#f59e0b] text-[#fbf6e8] shadow-2xl backdrop-blur-md transition-all duration-200 cursor-pointer group hover:scale-105 active:scale-95"
      >
        {isFullscreen ? (
          <Minimize className="w-5 h-5 text-[#f59e0b] group-hover:scale-110 transition-transform" />
        ) : (
          <Maximize className="w-5 h-5 text-[#c4b998] group-hover:text-[#f59e0b] group-hover:scale-110 transition-transform" />
        )}
      </button>

      {/* ======================================================== */}
      {/* SLIDE CONTENT AREA (ONLY ONE SLIDE RENDERED AT A TIME)   */}
      {/* ======================================================== */}
      <main className="relative w-full h-full overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full flex flex-col pb-16"
          >
            {/* Slide 1: Welcome Aboard */}
            {currentSlide === 0 && (
              <Slide1Welcome onNext={handleNext} />
            )}

            {/* Slide 2: The Voyage (About Us) */}
            {currentSlide === 1 && (
              <Slide2Voyage onNext={handleNext} />
            )}

            {/* Slide 3: The Ocean Map (Overview of all 5 Fleets) */}
            {currentSlide === 2 && (
              <Slide3MapOverview 
                onNext={handleNext} 
                onSelectCrewIndex={handleSelectCrewFromMap} 
              />
            )}

            {/* Slide 4: Web Development Crew */}
            {currentSlide === 3 && (
              <SlideCrew 
                crew={CREWS[0]} 
                crewIndex={0} 
                totalCrews={CREWS.length}
                onOpenEnlistModal={() => handleOpenEnlistWithCrew('web')}
              />
            )}

            {/* Slide 5: Artificial Intelligence Crew */}
            {currentSlide === 4 && (
              <SlideCrew 
                crew={CREWS[1]} 
                crewIndex={1} 
                totalCrews={CREWS.length}
                onOpenEnlistModal={() => handleOpenEnlistWithCrew('ai')}
              />
            )}

            {/* Slide 6: Data Science Crew */}
            {currentSlide === 5 && (
              <SlideCrew 
                crew={CREWS[2]} 
                crewIndex={2} 
                totalCrews={CREWS.length}
                onOpenEnlistModal={() => handleOpenEnlistWithCrew('datascience')}
              />
            )}

            {/* Slide 7: Software Engineering Crew */}
            {currentSlide === 6 && (
              <SlideCrew 
                crew={CREWS[3]} 
                crewIndex={3} 
                totalCrews={CREWS.length}
                onOpenEnlistModal={() => handleOpenEnlistWithCrew('se')}
              />
            )}

            {/* Slide 8: Cybersecurity Crew */}
            {currentSlide === 7 && (
              <SlideCrew 
                crew={CREWS[4]} 
                crewIndex={4} 
                totalCrews={CREWS.length}
                onOpenEnlistModal={() => handleOpenEnlistWithCrew('cyber')}
              />
            )}

            {/* Slide 9: Final Call & Deadlines */}
            {currentSlide === 8 && (
              <Slide5FinalCall 
                onOpenEnlistModal={() => handleOpenEnlistWithCrew('web')}
                onRestartPresentation={() => goToSlide(0)}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ======================================================== */}
      {/* PERSISTENT BOTTOM PRESENTATION CONTROLLER DOCK           */}
      {/* ======================================================== */}
      <footer className="absolute bottom-0 left-0 right-0 z-40 h-16 px-4 sm:px-6 flex items-center justify-between bg-gradient-to-t from-[#040810]/95 via-[#040810]/70 to-transparent backdrop-blur-sm pointer-events-auto border-t border-[#f59e0b]/15">
        {/* Left: Global Previous Slide Button */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentSlide === 0}
            className={`px-4 py-2 rounded-xl flex items-center gap-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
              currentSlide === 0
                ? 'opacity-30 border-transparent text-[#78716c] cursor-not-allowed'
                : 'bg-[#091526] hover:bg-[#10223b] border-[#f59e0b]/40 text-[#fef3c7] hover:border-[#f59e0b]'
            }`}
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous Slide</span>
          </button>
        </div>

        {/* Center: Slide Progress Dots with Slide Name Tooltips */}
        <div className="flex items-center gap-2">
          {Array.from({ length: TOTAL_SLIDES }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goToSlide(idx)}
              title={`${idx + 1}. ${SLIDE_TITLES[idx]}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentSlide
                  ? 'w-8 bg-gradient-to-r from-[#f59e0b] to-[#d97706] shadow gold-glow'
                  : 'w-2.5 bg-[#1b2b42] hover:bg-[#f59e0b]/50'
              }`}
              aria-label={`Jump to slide ${idx + 1}: ${SLIDE_TITLES[idx]}`}
            />
          ))}
        </div>

        {/* Right: Global Next Slide Button */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleNext}
            disabled={currentSlide === TOTAL_SLIDES - 1}
            className={`px-5 py-2 rounded-xl flex items-center gap-2 text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
              currentSlide === TOTAL_SLIDES - 1
                ? 'opacity-30 border-transparent text-[#78716c] cursor-not-allowed'
                : 'bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#fbbf24] hover:to-[#f59e0b] text-[#08111c] border-[#fde047]/60 shadow gold-glow'
            }`}
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            <span className="hidden sm:inline">Next Slide</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </footer>

      {/* Fleet Enlistment Manifest & Boarding Pass Generator */}
      <EnlistModal
        isOpen={isEnlistModalOpen}
        onClose={() => setIsEnlistModalOpen(false)}
        initialCrewId={enlistCrewId}
      />
    </div>
  );
}
