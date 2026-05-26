import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, MessageSquare } from 'lucide-react';
import { ZODIAC_SIGNS, ASTROLOGER_CONTACT } from '../data';

export default function ZodiacSignSelector() {
  const [selectedId, setSelectedId] = useState('aries');

  const selectedSign = ZODIAC_SIGNS.find((sign) => sign.id === selectedId) || ZODIAC_SIGNS[0];

  const getElementColor = (element: string) => {
    switch (element) {
      case 'Fire': return 'text-rose-700 bg-rose-50 border-rose-200';
      case 'Water': return 'text-sky-700 bg-sky-50 border-sky-200';
      case 'Air': return 'text-teal-700 bg-teal-50 border-teal-200';
      case 'Earth': return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      default: return 'text-slate-700 bg-slate-50 border-slate-200';
    }
  };

  const getWhatsAppQuery = () => {
    const text = `Hello Astrologer Sigandur Chowdeshwari Jyothishya Peeta , my name is ___________. My Zodiac Sign is ${selectedSign.name} (${selectedSign.symbol}). I read your horoscope prediction. I would like to get a personalized planetary reading and discuss some concerns. Please advise me!`;
    return `https://wa.me/919845515558?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="w-full space-y-8 text-slate-800">
      {/* 12 Zodiac Circular grid wrapper */}
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-2.5">
        {ZODIAC_SIGNS.map((sign) => {
          const isSelected = sign.id === selectedId;
          return (
            <button
              key={sign.id}
              onClick={() => setSelectedId(sign.id)}
              className={`p-3.5 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 relative cursor-pointer ${
                isSelected
                  ? 'bg-amber-500 border-amber-600 text-slate-950 font-semibold shadow-[0_5px_15px_rgba(245,158,11,0.25)] scale-105'
                  : 'bg-white/90 border-amber-200 text-slate-700 hover:text-slate-900 hover:bg-white hover:border-amber-400'
              }`}
            >
              <span className="text-2xl mb-1">{sign.symbol}</span>
              <span className="text-[10px] font-bold tracking-wide">{sign.name}</span>
              {isSelected && (
                <motion.div
                  layoutId="zodiacActiveDot"
                  className="absolute -bottom-1.5 w-1.5 h-1.5 bg-amber-700 rounded-full"
                />
              )}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedId}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-5 gap-6 bg-white/95 border border-amber-200/80 rounded-2xl p-6 md:p-8 shadow-[0_10px_30px_rgba(212,181,132,0.1)] backdrop-blur-sm relative"
        >
          {/* Decorative Zodiac Sign background symbol */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[180px] md:text-[240px] text-amber-500/5 select-none font-serif pointer-events-none">
            {selectedSign.symbol}
          </div>

          <div className="md:col-span-2 space-y-4 relative z-10 text-slate-800">
            <div className="flex items-center gap-3">
              <span className="text-4xl md:text-5xl">{selectedSign.symbol}</span>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-2xl font-serif font-bold text-amber-950">{selectedSign.name}</h4>
                  <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold border ${getElementColor(selectedSign.element)}`}>
                    {selectedSign.element} Sign
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium tracking-wide">{selectedSign.dateRange}</p>
              </div>
            </div>

            <div className="space-y-2 pt-2 text-sm border-t border-amber-100">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-slate-500">Ruling Celestial Planet:</span>
                <span className="text-amber-900 font-bold">{selectedSign.rulingPlanet}</span>
              </div>
              <div className="flex justify-between text-xs font-medium">
                <span className="text-slate-500">Primary Element:</span>
                <span className="text-amber-900 font-bold">{selectedSign.element}</span>
              </div>
            </div>

            <div className="bg-amber-50/50 rounded-xl p-4 border border-amber-100">
              <h5 className="text-xs font-bold text-amber-900 flex items-center gap-1.5 mb-1">
                🌌 Core Traits:
              </h5>
              <p className="text-xs text-slate-700 leading-relaxed italic">
                &ldquo;{selectedSign.trait}&rdquo;
              </p>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col justify-between space-y-4 relative z-10 border-t md:border-t-0 md:border-l border-amber-100 pt-6 md:pt-0 md:pl-6">
            <div className="space-y-3">
              <span className="text-xs font-bold text-amber-800 font-mono tracking-widest block uppercase">
                🪐 CURRENT PLANETARY HOROSCOPE TRANSIT
              </span>
              <p className="text-slate-800 text-sm md:text-base leading-relaxed font-serif font-medium">
                {selectedSign.prediction}
              </p>
            </div>

            <div className="space-y-3 pt-5 border-t border-amber-100">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-amber-50 border border-dashed border-amber-400 rounded-xl p-4">
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-amber-600 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-amber-950">Need custom matching or ritual timings?</p>
                    <p className="text-[11px] text-slate-650 font-medium">Guruji remedies Mars, Saturn delay, and matches Kundalis.</p>
                  </div>
                </div>
                <a
                  href={getWhatsAppQuery()}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-full sm:w-auto px-4 py-2.5 rounded-lg text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center gap-1.5 transition duration-150 shadow"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-slate-950" />
                  Query Guruji
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
