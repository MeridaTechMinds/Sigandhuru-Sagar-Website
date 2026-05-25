import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { ASTROLOGER_CONTACT } from '../data';

interface DedicatedPolicyPageProps {
  type: 'terms' | 'privacy' | 'cookies';
  onBack: () => void;
}

export function DedicatedPolicyPage({ type, onBack }: DedicatedPolicyPageProps) {
  
  // Clean, straightforward text content matching traditional legal structures
  const getPolicyContent = () => {
    switch (type) {
      case 'terms':
        return {
          title: 'Terms & Conditions',
          subtitle: 'Astrological Consulting & Services Agreement',
          effectiveDate: 'Effective Date: May 25, 2026',
          introduction: 'Welcome to terms and conditions governing the astrological services, calculations, and consultations provided by Pandit Sagar Narayan. Please read this document before seeking consultations.',
          sections: [
            {
              heading: '1. Traditional Methodology of Astrological Readings',
              content: 'All birth chart evaluations (Janam Kundali), transit calculations, planetary alignments, and personalized charts offered by Guruji Sagar Narayan are guided by calculations from traditional Vedic scriptures. Astrology is a spiritual and science-based interpretation metric aligning cosmic planetary positions to human traits. Because life transits involve complex human variables, individual results and advice remain subject to the client’s private faith and spiritual efforts.'
            },
            {
              heading: '2. Disclaimer of Professional Advice',
              content: 'Spiritual suggestions, ritual home poojas, planetary pacifications (such as Mars or Venus remedial cleansings), and custom copper or silver kavachs are intended to restore energy alignment and mental clarity. They do NOT substitute for licensed professional physical medicine, direct mental healthcare, public legal representatives, or certified planetary financial services.'
            },
            {
              heading: '3. Personal Information & Booking Accuracy',
              content: 'To generate precise astrological metrics, clients are required to voluntarily provide correct coordinates: Full Name, Date of Birth, approximate Time of Birth, and Birth City/Town. Providing inaccurate birth variables will result in invalid celestial charts and incorrect calculations. We are not liable for calculations built upon faulty inputs.'
            },
            {
              heading: '4. Sacred Code of Client Confidentiality',
              content: 'All personal background narratives, family relationship hardships, distress logs, or palm photos shared with Astrologer Sagar Narayan via calls, text, or WhatsApp chats are governed under total sacred confidentiality. No detail, personal coordinates, or conversation record will ever be shared, publicized, or sold to third parties.'
            },
            {
              heading: '5. Appointment Cancellation Policies',
              content: 'Direct PDF interpretations or text zodiac predictions are fully compiled instantly and cannot be cancelled or retracted. For custom video consultations or booked manual ritual sessions, cancellation requests must be sent at least 24 hours prior to the ritual event to claim a full refund.'
            }
          ]
        };

      case 'privacy':
        return {
          title: 'Privacy Policy',
          subtitle: 'Vedic Identity & Data Secrecy Guidelines',
          effectiveDate: 'Last Revised: May 25, 2026',
          introduction: 'This Privacy Policy details how we securely handle, register, and protect the astrological coordinates and text communication logs voluntarily supplied by you.',
          sections: [
            {
              heading: '1. Astrological Information We Collect',
              content: 'We only request the minimal necessary details required to draft your birth calculations: Full Name, Selected Zodiac Sign, Date of Birth, exact Time of Birth, and Birth City/State. If you request direct custom readings, we may process palm images and private context notes details regarding marriage or family circumstances.'
            },
            {
              heading: '2. How and Why This Data is Used',
              content: 'Your temporal data variables are used solely to locate planetary placements: identifying the houses of Jupiter, Saturn, Rahu, and Ketu inside your Janam Kundali, calculating romantic matches, and preparing direct text templates on WhatsApp to contact Guruji Sagar Narayan seamlessly.'
            },
            {
              heading: '3. Strict Zero-Data Sales Policy',
              content: 'We never sell your phone number, names, palm records, or chat inquiries to third-party ad brokers, programmatic sales groups, or behavioral search engines. All systems operate on a private local client-to-master sequence.'
            },
            {
              heading: '4. Absolute Data Deletion Rights',
              content: 'You own your celestial records. If you wish to purge your astrological context history, you can do so immediately. Send a simple message saying "Delete My Records" via WhatsApp to +91 98455 15558. Our administrator will wipe all database log entries within 24 hours.'
            },
            {
              heading: '5. Technical Security and Storage',
              content: 'All birth charts and custom messages are handled over secure encrypted channels. Access is restricted strictly to Sagar Narayan and authorized assistants who maintain a spiritual confidentiality oath.'
            }
          ]
        };

      case 'cookies':
        return {
          title: 'Cookies & Storage Policy',
          subtitle: 'Local State & Browser Settings Policy',
          effectiveDate: 'Effective Date: May 25, 2026',
          introduction: 'Our portal uses standard local browser storage to keep your selections clean and ensure an optimal, frictionless interactive experience.',
          sections: [
            {
              heading: '1. What are Local Cookies?',
              content: 'Cookies are minor secure text items stored locally on your device by your web browser. They do not download viruses, run computer code, or scan your hard drives.'
            },
            {
              heading: '2. Functional Local Store Use',
              content: 'We use local flags to save user selections during your session. This ensures that when you select your Zodiac Sign (e.g. Leo, Virgo) inside the 2026 Transit Dial, your choice remains stable when clicking through other features or reviewing description lists.'
            },
            {
              heading: '3. Zero Third-Party Tracker Integration',
              content: 'We do not run tracking cookies, social analytics beacons, Meta pixels, or Google Adsense codes. Your activity is completely isolated to this domain.'
            },
            {
              heading: '4. How to Manage Cookies',
              content: 'You can block or purge browser cookie logs within your browser settings at any moment. If you clear local parameters, you still retain complete access to all astrological functions, direct WhatsApp links, and helpline phone numbers.'
            }
          ]
        };
    }
  };

  const documentContent = getPolicyContent();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-3xl mx-auto px-4 py-6 text-slate-800 bg-white"
    >
      {/* Return Navigation */}
      <div className="mb-8 pb-4 border-b border-slate-200 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs text-amber-900 hover:text-amber-700 font-bold hover:underline cursor-pointer transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Astrological Home</span>
        </button>
        <span className="text-[10px] font-mono text-slate-500 font-bold">
          {documentContent.effectiveDate}
        </span>
      </div>

      {/* Styled Plain Document Layout */}
      <div className="space-y-6">
        <div>
          <span className="text-xs text-amber-800 font-bold uppercase tracking-wider block font-mono">
            Guruji Sagar Narayan Astrological Centre
          </span>
          <h1 className="text-2xl sm:text-3xl font-serif text-slate-900 font-bold tracking-tight mt-1">
            {documentContent.title}
          </h1>
          <p className="text-xs text-slate-500 italic mt-0.5">
            {documentContent.subtitle}
          </p>
        </div>

        <p className="text-sm font-medium text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
          {documentContent.introduction}
        </p>

        {/* Content Sections in Simplest Plain Layout (No Cards) */}
        <div className="space-y-6 pt-4">
          {documentContent.sections.map((sec, idx) => (
            <div key={idx} className="space-y-1.5">
              <h2 className="text-sm font-bold text-slate-905 uppercase tracking-wide font-serif">
                {sec.heading}
              </h2>
              <p className="text-xs sm:text-sm text-slate-655 leading-relaxed font-normal whitespace-pre-line">
                {sec.content}
              </p>
            </div>
          ))}
        </div>

        {/* Simplest Plain Footer Help Text */}
        <div className="border-t border-slate-200 pt-8 mt-12 space-y-4 text-center">
          <div className="pt-4">
            <button
              onClick={onBack}
              className="text-xs font-bold text-amber-800 hover:text-amber-950 underline inline-flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3 h-3" /> Return to Astrological Home
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
