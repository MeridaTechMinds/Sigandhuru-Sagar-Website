import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, Clock, User, MapPin, MessageSquare, Phone, Lock, Scroll, RefreshCw } from 'lucide-react';
import { ASTROLOGER_CONTACT, ZODIAC_SIGNS } from '../data';

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    zodiacId: 'aries',
    problemCategory: 'love-problems',
    details: '',
  });

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [report, setReport] = useState<null | {
    planetStrength: Array<{ name: string; level: number; status: string; color: string }>;
    astrologicalReading: string;
    suggestedRemedy: string;
  }>(null);

  const problemTitles: Record<string, string> = {
    'love-problems': 'Love Problem & Attraction Blockages',
    'breakup-solutions': 'Breakup & Divorce Threats',
    'marriage-disputes': 'Marriage Conflicts & Manglik Hurdles',
    'family-problems': 'Family Disputes & Lost Domestic Peace',
    'black-magic': 'Black Magic & Evil Eye Influences',
    'hand-reading': 'Destiny Line & Career Obstacles',
    'horoscope-consultation': 'Planetary Sade Sati or Rahu-Ketu Dosha',
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const startAnalysis = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) return;

    setIsAnalyzing(true);
    setAnalysisStep(1);

    // Dynamic step animation for planet alignments
    setTimeout(() => {
      setAnalysisStep(2);
      setTimeout(() => {
        setAnalysisStep(3);
        setTimeout(() => {
          generateAstrologicalReport();
          setIsAnalyzing(false);
        }, 1000);
      }, 1000);
    }, 1000);
  };

  const generateAstrologicalReport = () => {
    const selectedZodiac = ZODIAC_SIGNS.find((z) => z.id === formData.zodiacId) || ZODIAC_SIGNS[0];
    const cat = formData.problemCategory;

    let planetStrength = [];
    let astrologicalReading = '';
    let suggestedRemedy = '';

    if (cat.includes('love') || cat.includes('breakup')) {
      planetStrength = [
        { name: 'Venus (Shukra) - Relationship Protection', level: 35, status: 'Weak / Needs Aligning', color: 'bg-rose-500' },
        { name: 'Moon (Chandra) - Emotional Harmony', level: 45, status: 'Disturbed Transition', color: 'bg-indigo-500' },
        { name: 'Jupiter (Guru) - Support of Elders', level: 70, status: 'Favorable Blessings', color: 'bg-emerald-650' },
      ];
      astrologicalReading = `Dear ${formData.name}, currently your 7th house of relationships is experiencing a retrograde shadow. Venus, the driver of romantic bonds, is facing temporary friction in your birth chart, explaining the sudden distance or severe love problems you are going through.`;
      suggestedRemedy = `Guruji Sagar Narayan recommends Venus Aura Cleansing and Venus mantra counts. Sharing this report with Guruji allows him to chart the precise remediation.`;
    } else if (cat.includes('black') || cat.includes('evil')) {
      planetStrength = [
        { name: 'Negative Transit Shadows', level: 85, status: 'Active Force', color: 'bg-red-500' },
        { name: 'Mars (Mangal) - Protective Health', level: 30, status: 'Weak Strength', color: 'bg-amber-600' },
        { name: 'Sun (Surya) - Vital Aura Protective Shield', level: 40, status: 'Blocked', color: 'bg-yellow-500' },
      ];
      astrologicalReading = `Dear ${formData.name}, your birth chart exhibits sudden heavy shadows on the 8th house. This signifies toxic eye (Buri Nazar) or malicious negative forces interfering with your domestic peace, health, and mind. Immediate protective shields are recommended.`;
      suggestedRemedy = `Guruji Sagar Narayan recommends establishing a sacred energized Copper Protection Shield (Kavach). A detailed horoscope scan can neutralize these dark vibrations permanently.`;
    } else if (cat.includes('marriage')) {
      planetStrength = [
        { name: 'Jupiter (Guru) - Marital Prosperity', level: 40, status: 'Shani Sade Sati Obstruction', color: 'bg-amber-500' },
        { name: 'Mars (Mangal) - Manglik Position', level: 75, status: 'Intense Conflict', color: 'bg-orange-600' },
        { name: 'Venus (Shukra) - Marriage Lustre', level: 60, status: 'Average Energy', color: 'bg-yellow-600' },
      ];
      astrologicalReading = `Dear ${formData.name}, your family Kundali matching index displays delay due to a Mars-Ketu opposition or Manglik influence. This combination creates sudden delays in proposals or unexplained friction right before marriage matches materialize.`;
      suggestedRemedy = `Sagar Narayan recommends matching horoscope Guna index and planetary fastings on auspicious days to pacify Mars permanently.`;
    } else {
      planetStrength = [
        { name: 'Saturn (Shani) - Career Progress', level: 38, status: 'Astrological Delay Period', color: 'bg-slate-600' },
        { name: 'Mercury (Budh) - Wisdom & Guidance', level: 50, status: 'Friction', color: 'bg-blue-600' },
        { name: 'Jupiter (Guru) - Wealth & Peace', level: 65, status: 'Supportive', color: 'bg-emerald-600' },
      ];
      astrologicalReading = `Dear ${formData.name}, your celestial charts are transiting through a crucial karmic cycle. The heavy position of Saturn slows down efforts, leading to career delay or domestic fights.`;
      suggestedRemedy = `Guruji suggests doing simple Saturday morning prayers and strengthening Jupiter values. Contact Sagar Narayan to identify when this planetary cycle safely transitions.`;
    }

    setReport({
      planetStrength,
      astrologicalReading,
      suggestedRemedy,
    });
  };

  const getWhatsAppURL = () => {
    if (!report) return ASTROLOGER_CONTACT.whatsappUrl;
    const selectedZodiac = ZODIAC_SIGNS.find((z) => z.id === formData.zodiacId);
    const text = `*KUNDALI RAPID REPORT FOR ${formData.name.toUpperCase()}*
---------------------------
🔮 *Zodiac Sign*: ${selectedZodiac?.name || ''} (${selectedZodiac?.symbol || ''})
❓ *Problem Area*: ${problemTitles[formData.formData?.problemCategory || formData.problemCategory] || formData.problemCategory}
📅 *DOB*: ${formData.birthDate || 'Not specified'}
⏰ *Birth Time*: ${formData.birthTime || 'Not specified'}
📍 *Birth Place*: ${formData.birthPlace || 'Not specified'}

🪐 *Astrologer Sagar Narayan Guruji*, I completed your web chart analysis. My dominant problem is: "${formData.details || 'Restoring Peace in My Life'}". Please review my planet transit chart and suggest powerful remedies. Please schedule my consultation call!`;

    return `https://wa.me/919845515558?text=${encodeURIComponent(text)}`;
  };

  const handleReset = () => {
    setReport(null);
    setFormData({
      name: '',
      birthDate: '',
      birthTime: '',
      birthPlace: '',
      zodiacId: 'aries',
      problemCategory: 'love-problems',
      details: '',
    });
  };

  return (
    <div id="consultation-form" className="w-full bg-white/95 backdrop-blur-md rounded-2xl border border-amber-400 p-6 md:p-8 shadow-[0_15px_40px_rgba(212,181,132,0.18)] relative overflow-hidden text-slate-800">
      {/* Absolute ambient lights inside card */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl pointer-events-none" />

      <h3 className="text-xl md:text-2xl font-serif font-semibold tracking-tight text-amber-950 flex items-center gap-3">
        <Sparkles className="w-6 h-6 text-amber-600 animate-pulse" />
        Kundali & Relationship Problem Analyzer
      </h3>
      <p className="text-slate-600 text-sm mt-2 mb-6">
        Generate your instant planetary transit feedback report. Sagar Narayan will analyze this report to suggest permanent Vedic remedies.
      </p>

      <AnimatePresence mode="wait">
        {!isAnalyzing && !report && (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={startAnalysis}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-amber-900/90 mb-1 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-amber-700" /> Full Name <span className="text-rose-600 font-bold">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full text-sm py-2 px-3 bg-amber-50/50 border border-amber-200/80 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-900/90 mb-1 flex items-center gap-1.5">
                  🔮 Select Your Zodiac Sign
                </label>
                <select
                  name="zodiacId"
                  value={formData.zodiacId}
                  onChange={handleInputChange}
                  className="w-full text-sm py-2 px-3 bg-amber-50/50 border border-amber-200/80 rounded-lg text-slate-905 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-medium"
                >
                  {ZODIAC_SIGNS.map((sign) => (
                    <option key={sign.id} value={sign.id} className="bg-white text-slate-900">
                      {sign.name} {sign.symbol} ({sign.dateRange})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-amber-900/90 mb-1 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-750" /> Birth Date (Optional)
                </label>
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleInputChange}
                  className="w-full text-sm py-2 px-3 bg-amber-50/50 border border-amber-200/80 rounded-lg text-slate-900 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-900/90 mb-1 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-750" /> Birth Time (Optional)
                </label>
                <input
                  type="time"
                  name="birthTime"
                  value={formData.birthTime}
                  onChange={handleInputChange}
                  className="w-full text-sm py-2 px-3 bg-amber-50/50 border border-amber-200/80 rounded-lg text-slate-900 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-900/90 mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-750" /> Birth Place (Optional)
                </label>
                <input
                  type="text"
                  name="birthPlace"
                  value={formData.birthPlace}
                  onChange={handleInputChange}
                  placeholder="City or State"
                  className="w-full text-sm py-2 px-3 bg-amber-50/50 border border-amber-200/80 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-amber-900/90 mb-1">
                ⚠️ Select What Problem You Are Facing <span className="text-rose-600 font-bold">*</span>
              </label>
              <select
                name="problemCategory"
                value={formData.problemCategory}
                onChange={handleInputChange}
                className="w-full text-sm py-2 px-3 bg-amber-50/50 border border-amber-200/80 rounded-lg text-slate-910 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-505 transition-all font-medium"
              >
                <option value="love-problems">Love & Relationship Conflicts</option>
                <option value="breakup-solutions">Breakup & Stop Impending Divorce</option>
                <option value="marriage-disputes">Inter-Caste Marriage, Manglik Blockage, Delay</option>
                <option value="family-problems">Family Disputes, Property Battles, Peace Loss</option>
                <option value="black-magic">Black Magic Removal, Negative Energy Shielding</option>
                <option value="hand-reading">Palm Reading / Future Consultation</option>
                <option value="horoscope-consultation">General Horoscope & Kundali Consultation</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-amber-900/90 mb-1">
                Tell Guruji about your situation (confidential)
              </label>
              <textarea
                name="details"
                rows={3}
                value={formData.details}
                onChange={handleInputChange}
                placeholder="Briefly explain your concern (e.g. Partner has stopped talking, family opposition to marriage, bad nightmares/stress etc.)"
                className="w-full text-sm py-2 px-3 bg-amber-50/50 border border-amber-200/80 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-lg text-sm font-semibold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 flex items-center justify-center gap-2 shadow-[0_5px_22px_rgba(245,158,11,0.25)] transition duration-200 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              Analyze My Astrological Chart Now
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2">
              <Lock className="w-3.5 h-3.5 text-amber-600/60" />
              Your birth registration & details are 100% confidential.
            </div>
          </motion.form>
        )}

        {isAnalyzing && (
          <motion.div
            key="analyzing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <div className="w-16 h-16 rounded-full border border-dashed border-amber-500 flex items-center justify-center animate-spin mb-6">
              <RefreshCw className="w-8 h-8 text-amber-600" />
            </div>

            <h4 className="text-lg font-semibold text-amber-950 font-serif">
              {analysisStep === 1 && 'Aligning Planetary Vectors...'}
              {analysisStep === 2 && 'Mapping 12 Houses of Janam Kundali...'}
              {analysisStep === 3 && 'Evaluating Influential transits of Venus & Shani...'}
            </h4>

            <p className="text-slate-500 text-xs mt-2 max-w-xs">
              Calculating zodiac elements, current house alignments, and matching indicators for {formData.name}...
            </p>
          </motion.div>
        )}

        {!isAnalyzing && report && (
          <motion.div
            key="report"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="border border-amber-300 rounded-xl bg-amber-50/50 p-5 relative overflow-hidden">
              <div className="absolute top-2 right-2 flex opacity-5">
                <Scroll className="w-24 h-24 text-amber-800" />
              </div>

              <div className="flex items-center justify-between border-b border-amber-200 pb-3 mb-4">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amber-705 font-mono">ASTROLOGY TRANSIT INDEX</span>
                  <h4 className="text-lg text-amber-950 font-semibold font-serif">{formData.name}&apos;s Planetary Health</h4>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 font-mono">ZODIAC</span>
                  <p className="text-amber-950 text-sm font-semibold font-serif">
                    {ZODIAC_SIGNS.find((z) => z.id === formData.zodiacId)?.name} 
                    {ZODIAC_SIGNS.find((z) => z.id === formData.zodiacId)?.symbol}
                  </p>
                </div>
              </div>

              {/* Planets Strengths */}
              <div className="space-y-3.5">
                <p className="text-slate-700 text-xs font-semibold">Planetary Strength Estimates:</p>
                {report.planetStrength.map((planet, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-xs font-serif font-medium">
                      <span className="text-amber-950">{planet.name}</span>
                      <span className="text-slate-600 font-mono">{planet.level}% ({planet.status})</span>
                    </div>
                    <div className="w-full bg-amber-100/50 h-2.5 rounded-full overflow-hidden border border-amber-200/50">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${planet.level}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className={`h-full ${planet.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Core Astrological reading text */}
              <div className="mt-5 pt-4 border-t border-amber-200 space-y-2">
                <p className="text-amber-800 text-xs font-bold flex items-center gap-1.5 uppercase tracking-wider font-mono">
                  ✨ Guruji&apos;s Initial Assessment:
                </p>
                <p className="text-slate-800 text-sm leading-relaxed italic bg-white/75 p-3 rounded-lg border border-amber-100">
                  &ldquo;{report.astrologicalReading}&rdquo;
                </p>
              </div>

              {/* Suggested Remedy summary */}
              <div className="mt-4 p-3 bg-amber-100/40 border border-dashed border-amber-500/30 rounded-lg">
                <p className="text-xs font-bold text-amber-900">Vedic Remedial Insight:</p>
                <p className="text-slate-700 text-xs mt-1 leading-relaxed">
                  {report.suggestedRemedy}
                </p>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="space-y-3">
              <a
                href={getWhatsAppURL()}
                target="_blank"
                rel="noreferrer noopener"
                className="w-full py-4 px-4 rounded-lg text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center gap-2 shadow-[0_4px_22px_rgba(16,185,129,0.3)] transition duration-200 font-sans"
              >
                <MessageSquare className="w-5 h-5 fill-slate-950 text-slate-950" />
                Send Astrological Report to Guruji on WhatsApp
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${ASTROLOGER_CONTACT.phone.replace(/\s+/g, '')}`}
                  className="py-3 px-4 rounded-lg text-xs font-bold bg-amber-50 hover:bg-amber-100 text-amber-950 border border-amber-400 flex items-center justify-center gap-2 transition duration-150"
                >
                  <Phone className="w-4 h-4 text-amber-805" />
                  Call +91 98455 15558 Now
                </a>

                <button
                  onClick={handleReset}
                  className="py-3 px-4 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-350 flex items-center justify-center gap-2 transition duration-150"
                >
                  Configure New Reading Analysis
                </button>
              </div>
            </div>

            <p className="text-[10px] text-slate-500 text-center font-medium">
              *Full birth chart parsing requires Guruji to manually sync planetary angles. Sharing with WhatsApp coordinates instant help.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
