import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Anchor, CheckCircle2, Copy, Check, Sparkles, Compass } from 'lucide-react';
import { CrewId, ApplicationFormData, BoardingPassData } from '../types/expedition';
import { CREWS } from '../data/crewsData';

interface EnlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCrewId?: CrewId;
}

export function EnlistModal({ isOpen, onClose, initialCrewId }: EnlistModalProps) {
  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: '',
    email: '',
    phone: '',
    faculty: 'Faculty of Computers & Information / AI',
    academicYear: 'Year 2',
    crew: initialCrewId || 'web',
    roleType: 'core',
    githubOrPortfolio: '',
    voyageStatement: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [boardingPass, setBoardingPass] = useState<BoardingPassData | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialCrewId) {
      setFormData((prev) => ({ ...prev, crew: initialCrewId }));
    }
  }, [initialCrewId]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please state your sailor name.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Valid parchment email address required.';
    }
    if (!formData.voyageStatement.trim() || formData.voyageStatement.length < 15) {
      errs.voyageStatement = 'Share at least a short sentence on your passion or curiosity.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const selectedCrew = CREWS.find((c) => c.id === formData.crew) || CREWS[0];
      const randomId = 'ASW-' + Math.floor(1000 + Math.random() * 9000);
      setBoardingPass({
        id: randomId,
        fullName: formData.fullName,
        crewName: selectedCrew.name,
        crewRole: selectedCrew.pirateRole,
        roleType: formData.roleType,
        timestamp: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        islandDestination: selectedCrew.islandName,
        flightRank: formData.roleType === 'head' ? 'Squad Lead Navigator' : 'First-Class Able Sailor',
      });
      setIsSubmitting(false);
    }, 600);
  };

  const handleCopyPass = () => {
    if (!boardingPass) return;
    const text = `⚓ GDGoC Aswan Expedition Boarding Pass\nApplicant: ${boardingPass.fullName}\nID: ${boardingPass.id}\nCrew: ${boardingPass.crewName} (${boardingPass.crewRole})\nRank: ${boardingPass.flightRank}\nDestination: ${boardingPass.islandDestination}\nVerified: ${boardingPass.timestamp}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#040810]/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 w-full max-w-2xl bg-[#091322] border-2 border-[#f59e0b]/50 rounded-2xl shadow-2xl overflow-hidden my-6"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0d1e35] via-[#162a4a] to-[#0d1e35] p-6 border-b border-[#f59e0b]/30 flex items-center justify-between">
            <div>
              <div className="text-xs font-mono-data text-[#f59e0b] uppercase tracking-wider flex items-center gap-2">
                <Anchor className="w-3.5 h-3.5" />
                <span>GDGoC Aswan · Fleet Enlistment Manifest</span>
              </div>
              <h3 
                className="text-2xl font-bold text-[#fbf6e8] mt-1"
                style={{ fontFamily: 'var(--font-cinzel)' }}
              >
                Sign the Pirate Articles
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg bg-[#070e1a]/80 text-[#a39575] hover:text-[#fbf6e8] border border-[#f59e0b]/20"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
            {!boardingPass ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-mono-data text-[#cbd5e1] uppercase tracking-wider mb-1.5">
                    Sailor Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Youssef Ahmed"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#070e1a] border border-[#f59e0b]/30 focus:border-[#f59e0b] text-[#fbf6e8] text-sm outline-none transition-colors"
                  />
                  {errors.fullName && <p className="text-xs text-[#ef4444] mt-1">{errors.fullName}</p>}
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-data text-[#cbd5e1] uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sailor@university.edu"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#070e1a] border border-[#f59e0b]/30 focus:border-[#f59e0b] text-[#fbf6e8] text-sm outline-none transition-colors"
                    />
                    {errors.email && <p className="text-xs text-[#ef4444] mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-mono-data text-[#cbd5e1] uppercase tracking-wider mb-1.5">
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+20 100 000 0000"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#070e1a] border border-[#f59e0b]/30 focus:border-[#f59e0b] text-[#fbf6e8] text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Faculty & Year */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-data text-[#cbd5e1] uppercase tracking-wider mb-1.5">
                      Aswan University Faculty
                    </label>
                    <input
                      type="text"
                      value={formData.faculty}
                      onChange={(e) => setFormData({ ...formData, faculty: e.target.value })}
                      placeholder="e.g. Computers & AI, Engineering, Science"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#070e1a] border border-[#f59e0b]/30 focus:border-[#f59e0b] text-[#fbf6e8] text-sm outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono-data text-[#cbd5e1] uppercase tracking-wider mb-1.5">
                      Academic Year
                    </label>
                    <select
                      value={formData.academicYear}
                      onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#070e1a] border border-[#f59e0b]/30 focus:border-[#f59e0b] text-[#fbf6e8] text-sm outline-none transition-colors cursor-pointer"
                    >
                      <option value="Year 1">Year 1 (Freshman Sailor)</option>
                      <option value="Year 2">Year 2 (Seasoned Sailor)</option>
                      <option value="Year 3">Year 3 (Veteran Sailor)</option>
                      <option value="Year 4">Year 4 (Senior Officer)</option>
                      <option value="Postgrad / Recent Grad">Postgrad / Recent Grad</option>
                    </select>
                  </div>
                </div>

                {/* Desired Crew Selection */}
                <div>
                  <label className="block text-xs font-mono-data text-[#cbd5e1] uppercase tracking-wider mb-2">
                    Choose Your Technical Crew Station *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {CREWS.map((crew) => (
                      <button
                        key={crew.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, crew: crew.id })}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          formData.crew === crew.id
                            ? 'bg-[#12233c] border-[#f59e0b] text-[#fbbf24] shadow'
                            : 'bg-[#070e1a] border-[#f59e0b]/20 text-[#cbd5e1] hover:border-[#f59e0b]/60'
                        }`}
                      >
                        <div className="text-xs font-bold font-serif">{crew.name}</div>
                        <div className="text-[11px] text-[#a39575] font-mono-data uppercase">
                          {crew.pirateRole}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Role Type Selection: Core vs Head */}
                <div>
                  <label className="block text-xs font-mono-data text-[#cbd5e1] uppercase tracking-wider mb-2">
                    Applying Rank & Role Deadline
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, roleType: 'core' })}
                      className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                        formData.roleType === 'core'
                          ? 'bg-[#12233c] border-[#f59e0b] text-[#fbbf24]'
                          : 'bg-[#070e1a] border-[#f59e0b]/20 text-[#cbd5e1]'
                      }`}
                    >
                      <div className="font-bold text-xs sm:text-sm">Core Member</div>
                      <div className="text-[11px] text-[#a39575] font-mono-data">
                        Deadline: October 2 · Active Contributor
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, roleType: 'head' })}
                      className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                        formData.roleType === 'head'
                          ? 'bg-[#12233c] border-[#f59e0b] text-[#fbbf24]'
                          : 'bg-[#070e1a] border-[#f59e0b]/20 text-[#cbd5e1]'
                      }`}
                    >
                      <div className="font-bold text-xs sm:text-sm">Head Position (Lead)</div>
                      <div className="text-[11px] text-[#a39575] font-mono-data">
                        Deadline: September 30 · Crew Leadership
                      </div>
                    </button>
                  </div>
                </div>

                {/* Portfolio / GitHub */}
                <div>
                  <label className="block text-xs font-mono-data text-[#cbd5e1] uppercase tracking-wider mb-1.5">
                    GitHub / LinkedIn / Portfolio (Optional)
                  </label>
                  <input
                    type="url"
                    value={formData.githubOrPortfolio}
                    onChange={(e) => setFormData({ ...formData, githubOrPortfolio: e.target.value })}
                    placeholder="https://github.com/your-handle"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#070e1a] border border-[#f59e0b]/30 focus:border-[#f59e0b] text-[#fbf6e8] text-sm outline-none transition-colors"
                  />
                </div>

                {/* Voyage Statement */}
                <div>
                  <label className="block text-xs font-mono-data text-[#cbd5e1] uppercase tracking-wider mb-1.5">
                    Why sail with GDGoC Aswan? (Passion, Curiosity, Will to Grow) *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.voyageStatement}
                    onChange={(e) => setFormData({ ...formData, voyageStatement: e.target.value })}
                    placeholder="Tell us what excites you about this voyage and what you wish to learn..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#070e1a] border border-[#f59e0b]/30 focus:border-[#f59e0b] text-[#fbf6e8] text-sm outline-none transition-colors"
                  />
                  {errors.voyageStatement && (
                    <p className="text-xs text-[#ef4444] mt-1">{errors.voyageStatement}</p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#fbbf24] hover:to-[#f59e0b] text-[#08111c] font-bold text-sm tracking-wide shadow-lg gold-glow flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    style={{ fontFamily: 'var(--font-cinzel)' }}
                  >
                    {isSubmitting ? (
                      <span>Recording Your Signature...</span>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>Sign Manifest & Claim Boarding Pass</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              /* SUCCESS: PERSONALIZED OFFICIAL PIRATE LETTER OF MARQUE & BOARDING PASS */
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#10b981]/20 border border-[#10b981] flex items-center justify-center text-[#10b981] mb-2">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 
                    className="text-2xl font-bold text-[#fbf6e8]"
                    style={{ fontFamily: 'var(--font-cinzel)' }}
                  >
                    Welcome Aboard, Sailor!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#c4b998] mt-1">
                    Your name is officially inscribed upon the ship's logbook.
                  </p>
                </div>

                {/* THE GOLDEN BOARDING PASS TICKET */}
                <div className="parchment-texture text-[#1a1005] p-6 sm:p-8 rounded-xl border-2 border-[#b45309] shadow-2xl relative overflow-hidden">
                  {/* Decorative cutouts on ticket sides */}
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#091322]" />
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#091322]" />

                  <div className="flex items-center justify-between border-b-2 border-dashed border-[#8f6932]/50 pb-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Compass className="w-5 h-5 text-[#b45309]" />
                      <span className="font-bold tracking-wider font-serif text-sm sm:text-base">
                        GDGoC ASWAN EXPEDITION PASS
                      </span>
                    </div>
                    <span className="font-mono-data text-xs font-bold text-[#b45309]">
                      {boardingPass.id}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs font-serif">
                    <div>
                      <div className="text-[10px] text-[#78350f] uppercase tracking-wider font-sans">
                        Sailor Name
                      </div>
                      <div className="font-bold text-sm sm:text-base text-[#1a1005]">
                        {boardingPass.fullName}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-[#78350f] uppercase tracking-wider font-sans">
                        Crew Assignment
                      </div>
                      <div className="font-bold text-sm sm:text-base text-[#9a3412]">
                        {boardingPass.crewName}
                      </div>
                      <div className="text-[11px] text-[#78350f]">
                        ({boardingPass.crewRole})
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-[#78350f] uppercase tracking-wider font-sans">
                        Naval Rank
                      </div>
                      <div className="font-bold text-xs text-[#1a1005]">
                        {boardingPass.flightRank}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-[#78350f] uppercase tracking-wider font-sans">
                        Port Destination
                      </div>
                      <div className="font-bold text-xs text-[#1a1005] truncate">
                        {boardingPass.islandDestination}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#8f6932]/30 flex items-center justify-between text-[11px] text-[#78350f]">
                    <span>Seal of Aswan Nile Fleet Base</span>
                    <span>Date: {boardingPass.timestamp}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleCopyPass}
                    className="w-full sm:w-1/2 py-3 rounded-xl bg-[#0e1d32] hover:bg-[#152a48] border border-[#f59e0b]/40 text-[#fef3c7] font-semibold text-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#10b981]" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Pass Copied to Clipboard!' : 'Copy Boarding Pass Details'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full sm:w-1/2 py-3 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-[#08111c] font-bold text-xs flex items-center justify-center gap-2 cursor-pointer"
                    style={{ fontFamily: 'var(--font-cinzel)' }}
                  >
                    <span>Done & Return to Voyage</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
