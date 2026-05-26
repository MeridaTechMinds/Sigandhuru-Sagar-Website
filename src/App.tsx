import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { 
  Phone, 
  MessageSquare,
} from 'lucide-react';
import { ASTROLOGER_CONTACT } from './data';
import CelestialBackground from './components/CelestialBackground';
import { DedicatedPolicyPage } from './components/LegalPolicies';
import { DataDeletionPage } from './components/DataDeletionPage';

function MainPage() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero-portal" className="py-12 md:py-20 text-center space-y-8 relative">
        
        {/* Top Live consulting status ribbon */}
        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-400/80 rounded-full px-4 py-1.5 pl-3 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
          </span>
          <span className="text-xs font-bold text-amber-900 tracking-wide">
            Online Astro Consultations Active: Call/WhatsApp Sigandur Chowdeshwari Jyothishya Peeta 
          </span>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-amber-950 font-bold leading-[1.12] tracking-tight">
            Are You Facing <span className="text-rose-600 underline decoration-rose-500/40 underline-offset-8">Love Concerns</span>, 
            <br className="hidden sm:inline" /> <span className="text-amber-800">Breakup Pain</span>, or <span className="text-orange-600">Marriage Obstacles</span>?
          </h1>
          <p className="text-slate-700 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Let the powerful planetary alignment insights of <strong className="text-amber-950 font-serif font-bold">Sigandur Chowdeshwari Jyothishya Peeta </strong> restore peace, remove dark forces (black magic), and bring sweet love back into your life.
          </p>
        </div>

        {/* Quick core CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a 
            href={`https://wa.me/919845515558?text=${encodeURIComponent(ASTROLOGER_CONTACT.whatsappText)}`}
            target="_blank"
            rel="noreferrer noopener"
            className="w-full sm:w-auto py-4 px-8 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold flex items-center justify-center gap-2.5 text-base shadow-[0_5px_25px_rgba(16,185,129,0.35)] transition transform hover:-translate-y-0.5 cursor-pointer"
          >
            <MessageSquare className="w-6 h-6 fill-slate-950 text-slate-950" />
            WhatsApp Message: +91 98455 15558
          </a>

          <a 
            href={`tel:${ASTROLOGER_CONTACT.phone.replace(/\s+/g, '')}`} 
            className="w-full sm:w-auto py-4 px-8 rounded-full border border-amber-400 bg-white hover:bg-amber-50 text-amber-950 font-bold flex items-center justify-center gap-2 text-base shadow-sm transition transform hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5 text-amber-600" />
            Call Sigandur Chowdeshwari Jyothishya Peeta Immediately
          </a>
        </div>

        {/* Trust points bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 max-w-4xl mx-auto border-t border-amber-200">
          <div className="p-4 bg-white/80 border border-amber-200 rounded-xl shadow-sm">
            <span className="text-amber-700 text-base sm:text-lg font-bold font-mono">100% PRIVATE</span>
            <p className="text-[10px] text-slate-500 mt-1 uppercase font-bold tracking-wider">Confidential consultations</p>
          </div>
          <div className="p-4 bg-white/80 border border-amber-200 rounded-xl shadow-sm">
            <span className="text-amber-700 text-base sm:text-lg font-bold font-mono">25+ YEARS</span>
            <p className="text-[10px] text-slate-500 mt-1 uppercase font-bold tracking-wider">Vedic wisdom chartings</p>
          </div>
          <div className="p-4 bg-white/80 border border-amber-200 rounded-xl shadow-sm">
            <span className="text-amber-700 text-base sm:text-lg font-bold font-mono">15,050+</span>
            <p className="text-[10px] text-slate-500 mt-1 uppercase font-bold tracking-wider">Happy clients worldwide</p>
          </div>
          <div className="p-4 bg-white/80 border border-amber-200 rounded-xl shadow-sm">
            <span className="text-amber-700 text-base sm:text-lg font-bold font-mono">GENUINE REMEDIES</span>
            <p className="text-[10px] text-slate-500 mt-1 uppercase font-bold tracking-wider">Effective Vedic mantras</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-slate-800 font-sans relative pb-20 sm:pb-0 select-none overflow-x-hidden pt-16 selection:bg-amber-500 selection:text-slate-900">
      {/* Dynamic Cosmic Light Sunburst Cover */}
      <CelestialBackground />

      {/* Top Header Navbar */}
      <nav id="header-navbar" className="fixed top-0 left-0 right-0 h-16 bg-white/85 backdrop-blur-md border-b border-amber-200/60 z-50 transition-all duration-300 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center justify-between">
          
          {/* Logo Brand */}
          <Link 
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="flex items-center gap-2 cursor-pointer text-left"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 p-[1px] flex items-center justify-center shadow-[0_2px_8px_rgba(212,181,132,0.3)]">
              <div className="w-full h-full bg-amber-50 rounded-full flex items-center justify-center">
                <span className="text-sm">✨</span>
              </div>
            </div>
            <div>
              <p className="font-serif font-bold text-sm tracking-wide text-amber-950">Sigandur Chowdeshwari Jyothishya Peeta </p>
              <p className="text-[10px] font-mono tracking-widest text-amber-800 font-bold -mt-0.5">DIVINE ASTROLOGER</p>
            </div>
          </Link>

          {/* Quick Call / Messenger Actions on the right size of navbar */}
          <div className="flex items-center gap-2">
            <a 
              href={`tel:${ASTROLOGER_CONTACT.phone.replace(/\s+/g, '')}`} 
              className="py-1.5 px-3 rounded-full border border-amber-400 bg-amber-50 hover:bg-amber-100 text-amber-950 text-xs font-semibold flex items-center gap-1 transition duration-150 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span className="hidden sm:inline">Call Now</span>
            </a>
            <a 
              href={`https://wa.me/919845515558?text=${encodeURIComponent(ASTROLOGER_CONTACT.whatsappText)}`}
              target="_blank"
              rel="noreferrer noopener"
              className="py-1.5 px-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold flex items-center gap-1 transition duration-150 shadow-md"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>

        </div>
      </nav>

      {/* Main Container Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/terms-and-conditions" element={
            <div className="pt-6 pb-12 max-w-4xl mx-auto">
              <DedicatedPolicyPage type="terms" onBack={() => navigate(-1)} />
            </div>
          } />
          <Route path="/privacy-policy" element={
            <div className="pt-6 pb-12 max-w-4xl mx-auto">
              <DedicatedPolicyPage type="privacy" onBack={() => navigate(-1)} />
            </div>
          } />
          <Route path="/cookies-policy" element={
            <div className="pt-6 pb-12 max-w-4xl mx-auto">
              <DedicatedPolicyPage type="cookies" onBack={() => navigate(-1)} />
            </div>
          } />
          <Route path="/data-deletion" element={
            <div className="pt-6 pb-12 max-w-4xl mx-auto">
              <DataDeletionPage onBack={() => navigate(-1)} />
            </div>
          } />
        </Routes>
      </main>

      {/* Styled Footer */}
      <footer id="main-footer" className="bg-[#0f1115] text-slate-400 pt-12 pb-6 mt-20 border-t border-amber-500/20 relative z-10 font-sans">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
            
            {/* Column 1: Brand & Intro */}
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-2">
                <span className="text-xl">✨</span>PANDIT Surya Narayan
                <p className="font-serif font-black text-white text-base tracking-wide"></p>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed font-semibold">
                Vedic Divine Astrological Centre. A legacy of traditional astronomical math, spiritual guidance, and authentic lifestyle energy corrections since 2001. Serving global seekers with absolute truth.
              </p>
            </div>

            {/* Column 2: Spiritual Domains */}
            <div className="space-y-4 text-left">
              <h4 className="text-xs font-bold tracking-widest text-white uppercase">Astro Competencies</h4>
              <ul className="space-y-2 text-xs font-semibold text-slate-400">
                <li className="hover:text-amber-500 transition duration-150">Love Problems & Relationships</li>
                <li className="hover:text-amber-500 transition duration-150">Breakup Recovery & Reconnections</li>
                <li className="hover:text-amber-500 transition duration-150">Marriage Alignments & Manglik Resolves</li>
                <li className="hover:text-amber-500 transition duration-150">Dark Forces & Negative Energy Shields</li>
                <li className="hover:text-amber-500 transition duration-150">Janam Kundali & Vedic Chart Math</li>
              </ul>
            </div>

            {/* Column 3: Location / Hours */}
            <div className="space-y-4 text-left">
              <h4 className="text-xs font-bold tracking-widest text-white uppercase">Vedic Sanctorum</h4>
              <div className="space-y-2.5 text-xs text-slate-400 font-semibold leading-relaxed">
                <p className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5 shrink-0">📍</span>
                  <span>{ASTROLOGER_CONTACT.address}</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-amber-500 shrink-0">📞</span>
                  <span>{ASTROLOGER_CONTACT.phone}</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-amber-500 shrink-0">🕒</span>
                  <span>Daily: 8:00 AM – 9:00 PM IST</span>
                </p>
              </div>
            </div>

            {/* Column 4: Client Protection / Legal Links */}
            <div className="space-y-4 text-left">
              <h4 className="text-xs font-bold tracking-widest text-white uppercase">Client Covenant</h4>
              <p className="text-slate-400 text-xs leading-relaxed font-semibold">
                Every consultation is protected by a lifelong 100% data confidentiality promise. Your personal charts and family details remain absolute secrets.
              </p>
              
              {/* Document/Policy triggers */}
              <div className="flex flex-col gap-2 pt-2 text-xs font-bold font-mono">
                <Link 
                  to="/terms-and-conditions"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                  className="text-left hover:text-white transition cursor-pointer text-amber-500"
                >
                  &rarr; Terms & Conditions
                </Link>
                <Link 
                  to="/privacy-policy"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                  className="text-left hover:text-white transition cursor-pointer text-amber-500"
                >
                  &rarr; Privacy Policy
                </Link>
                <Link 
                  to="/cookies-policy"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                  className="text-left hover:text-white transition cursor-pointer text-amber-500"
                >
                  &rarr; Cookies & browser variables
                </Link>
                <Link 
                  to="/data-deletion"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                  className="text-left hover:text-white transition cursor-pointer text-amber-500"
                >
                  &rarr; Data Deletion
                </Link>
              </div>
            </div>

          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-500 font-semibold gap-3 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Astrologer Sigandur Chowdeshwari Jyothishya Peeta . All sacred rights reserved.</p>
            <p className="mt-2 md:mt-0 font-bold tracking-wider text-slate-600 font-mono uppercase text-[9px]">
              Confidentially Audited &middot; Spiritual Integrity Pledge
            </p>
          </div>
        </div>
      </footer>

      {/* STICKY BOTTOM TOOLBAR - EXTREMELY vital to astrologer conversion triggers on mobile screens */}
      <div id="sticky-call-bar" className="fixed bottom-0 left-0 right-0 h-16 bg-white/95 border-t border-amber-200 px-3 py-2 z-50 flex sm:hidden items-center justify-between gap-3 backdrop-blur-md shadow-lg">
        <a
          href={`tel:${ASTROLOGER_CONTACT.phone.replace(/\s+/g, '')}`}
          className="flex-1 h-full rounded-xl bg-amber-50 border border-amber-400 text-amber-950 flex items-center justify-center gap-1.5 text-xs font-bold px-2"
        >
          <Phone className="w-4 h-4 text-amber-600 animate-bounce" />
          Call Guruji
        </a>
        <a
          href={`https://wa.me/919845515558?text=${encodeURIComponent(ASTROLOGER_CONTACT.whatsappText)}`}
          target="_blank"
          rel="noreferrer noopener"
          className="flex-2 h-full rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center gap-1.5 text-xs font-extrabold px-2 shadow-md"
        >
          <MessageSquare className="w-4.5 h-4.5 fill-slate-950" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
