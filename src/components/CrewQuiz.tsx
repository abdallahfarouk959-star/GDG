import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Sparkles, RefreshCw, ChevronRight, Check, Anchor } from 'lucide-react';
import { QUIZ_QUESTIONS, CREWS } from '../data/crewsData';
import { Crew, CrewId } from '../types/expedition';

interface CrewQuizProps {
  onSelectCrew: (crew: Crew) => void;
  onEnlistWithCrew: (crewId: CrewId) => void;
}

export function CrewQuiz({ onSelectCrew, onEnlistWithCrew }: CrewQuizProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<CrewId[]>([]);
  const [resultCrew, setResultCrew] = useState<Crew | null>(null);

  const handleSelectOption = (crewId: CrewId) => {
    const nextAnswers = [...answers, crewId];
    setAnswers(nextAnswers);

    if (currentStep + 1 < QUIZ_QUESTIONS.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate match
      const frequency: Record<string, number> = {};
      nextAnswers.forEach((id) => {
        frequency[id] = (frequency[id] || 0) + 1;
      });

      let highestCrewId: CrewId = nextAnswers[0];
      let maxCount = 0;
      Object.entries(frequency).forEach(([id, count]) => {
        if (count > maxCount) {
          maxCount = count;
          highestCrewId = id as CrewId;
        }
      });

      const matched = CREWS.find((c) => c.id === highestCrewId) || CREWS[0];
      setResultCrew(matched);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setResultCrew(null);
  };

  return (
    <section 
      id="quiz"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#050a12] border-t border-[#f59e0b]/15 overflow-hidden"
    >
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono-data uppercase tracking-widest text-[#f59e0b] mb-2 px-3 py-1 bg-[#0b1626] rounded-md border border-[#f59e0b]/30">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Crew Matcher</span>
          </div>
          <h2 
            className="text-3xl sm:text-4xl font-bold text-[#fbf6e8] tracking-tight"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            The Astrolabe Quiz
          </h2>
          <p className="mt-2 text-sm text-[#c4b998] max-w-lg mx-auto">
            Not sure which port calls your name? Answer 3 quick navigator questions to discover where your instincts lie.
          </p>
        </div>

        {/* Quiz Body */}
        <div className="bg-[#0b1626]/90 border-2 border-[#8f6932]/50 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle watermark */}
          <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none text-[#f59e0b]">
            <Anchor className="w-64 h-64 -mb-10 -mr-10" />
          </div>

          <AnimatePresence mode="wait">
            {!resultCrew ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Progress Indicator */}
                <div className="flex items-center justify-between text-xs font-mono-data text-[#a39575] pb-2 border-b border-[#f59e0b]/20">
                  <span>Question {currentStep + 1} of {QUIZ_QUESTIONS.length}</span>
                  <span>Expedition Compass</span>
                </div>

                {/* Question */}
                <h3 
                  className="text-lg sm:text-xl md:text-2xl font-bold text-[#fef3c7] leading-relaxed"
                  style={{ fontFamily: 'var(--font-cinzel)' }}
                >
                  {QUIZ_QUESTIONS[currentStep].question}
                </h3>

                {/* Options */}
                <div className="space-y-3 pt-2">
                  {QUIZ_QUESTIONS[currentStep].options.map((opt, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectOption(opt.crewId)}
                      className="w-full text-left p-4 rounded-xl bg-[#0e1d32] hover:bg-[#152a48] border border-[#f59e0b]/20 hover:border-[#f59e0b] text-sm text-[#cbd5e1] hover:text-[#fef3c7] transition-all duration-200 flex items-start gap-3.5 group cursor-pointer"
                    >
                      <span className="w-6 h-6 rounded-full bg-[#081220] border border-[#f59e0b]/40 text-[#f59e0b] text-xs font-mono-data flex items-center justify-center shrink-0 group-hover:bg-[#f59e0b] group-hover:text-[#081220] transition-colors">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="leading-snug pt-0.5">{opt.text}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              /* Quiz Result */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center space-y-6 py-4"
              >
                <div className="inline-flex items-center gap-2 text-xs font-mono-data text-[#f59e0b] bg-[#12233c] px-3 py-1 rounded-full border border-[#f59e0b]/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The Stars Have Spoken</span>
                </div>

                <div>
                  <div className="text-xs font-mono-data uppercase tracking-widest text-[#a39575]">
                    Your Natural Station on Deck:
                  </div>
                  <h3 
                    className="text-3xl sm:text-4xl font-extrabold text-[#fbf6e8] mt-1"
                    style={{ fontFamily: 'var(--font-cinzel)' }}
                  >
                    {resultCrew.name}
                  </h3>
                  <div className="text-lg font-semibold text-[#f59e0b] font-serif mt-0.5">
                    {resultCrew.pirateRole}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0e1d32] border border-[#f59e0b]/30 text-sm text-[#cbd5e1] max-w-xl mx-auto leading-relaxed">
                  "{resultCrew.brief}"
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => onSelectCrew(resultCrew)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#12233c] hover:bg-[#1a3356] border border-[#f59e0b]/40 text-[#fef3c7] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2"
                  >
                    <span>View {resultCrew.islandName}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onEnlistWithCrew(resultCrew.id)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-[#08111c] font-bold text-xs sm:text-sm tracking-wide shadow gold-glow flex items-center justify-center gap-2"
                    style={{ fontFamily: 'var(--font-cinzel)' }}
                  >
                    <Check className="w-4 h-4" />
                    <span>Enlist in {resultCrew.name}</span>
                  </button>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs text-[#a39575] hover:text-[#f59e0b] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Retake Astrolabe Quiz</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
