import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { ASTROLOGER_CONTACT } from '../data';

interface DataDeletionPageProps {
  onBack: () => void;
}

export function DataDeletionPage({ onBack }: DataDeletionPageProps) {
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
          Last Updated: May 25, 2026
        </span>
      </div>

      {/* Styled Plain Document Layout */}
      <div className="space-y-6">
        <div>
          <span className="text-xs text-amber-800 font-bold uppercase tracking-wider block font-mono">
            Guruji Sagar Narayan Astrological Centre
          </span>
          <h1 className="text-2xl sm:text-3xl font-serif text-slate-900 font-bold tracking-tight mt-1">
            Data Deletion Request
          </h1>
          <p className="text-xs text-slate-500 italic mt-0.5">
            Your Right to be Forgotten
          </p>
        </div>

        <p className="text-sm font-medium text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
          At the Divine Astrological Centre of Sagar Narayan, we hold your privacy in the highest regard. We have a straightforward process for you to request the complete deletion of your personal records from our systems.
        </p>

        {/* Content Sections */}
        <div className="space-y-6 pt-4">
          <div className="space-y-1.5">
            <h2 className="text-sm font-bold text-slate-905 uppercase tracking-wide font-serif">
              What We Remove
            </h2>
            <p className="text-xs sm:text-sm text-slate-655 leading-relaxed font-normal">
              Upon your request, we will permanently delete your full name, birth details (date, time, place), email addresses, phone numbers, palm photos, and any personal inquiries or notes from our active systems.
            </p>
          </div>
          <div className="space-y-1.5">
            <h2 className="text-sm font-bold text-slate-905 uppercase tracking-wide font-serif">
              What We Must Keep
            </h2>
            <p className="text-xs sm:text-sm text-slate-655 leading-relaxed font-normal">
              We are required by law to retain records of financial transactions, such as invoices and payment references, for tax and compliance purposes in India. These records are kept securely and are not used for any other purpose.
            </p>
          </div>
          <div className="space-y-1.5">
            <h2 className="text-sm font-bold text-slate-905 uppercase tracking-wide font-serif">
              Processing Duration
            </h2>
            <p className="text-xs sm:text-sm text-slate-655 leading-relaxed font-normal">
              Once you submit a deletion request, our team will remove your profile details from our active databases and communication systems within 30 business days. You will receive a final confirmation once the deletion is complete.
            </p>
          </div>
        </div>

        {/* Submission Instructions */}
        <div className="border-t border-slate-200 pt-8 mt-12 space-y-4 text-center">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
            How to Request Deletion
          </p>
          <p className="text-xs text-slate-600 max-w-lg mx-auto font-medium">
            To request the deletion of your data, please send an email to our support team with the subject line "Data Deletion Request" and include the name and phone number you used for our services.
          </p>
          <div className="text-xs space-y-1 text-slate-700">
            <p className="font-bold">Email: <a href="mailto:privacy@sagarnarayan.com" className="text-amber-700 underline">privacy@sagarnarayan.com</a></p>
            <p className="font-bold">WhatsApp for assistance: {ASTROLOGER_CONTACT.phone}</p>
          </div>
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
