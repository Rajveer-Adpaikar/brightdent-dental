import { motion } from 'motion/react';
import { ArrowRight, PhoneCall, MapPin, ShieldCheck, Sparkles, Clock } from 'lucide-react';
import { useBooking } from '../booking';
import { CLINIC } from '../config';
import { waLink } from '../lib';
import { WhatsAppIcon } from './icons';

// Hero "panel" — the editorial smile-arc illustration, on-brand and vector.
function SmilePanel() {
  return (
    <div className="relative h-[420px] lg:h-[520px] w-full overflow-hidden rounded-2xl bg-coral-50 border border-coral-100">
      {/* Big smile arc */}
      <svg viewBox="0 0 600 520" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <path d="M70 330 Q300 60 530 330" stroke="#b3281e" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.85" />
        {/* Teeth along the arc */}
        {[90, 130, 170, 210, 250, 290, 330, 370, 410, 450, 490, 530].map((cx, i) => {
          const t = i / 11;
          const x = 70 + t * 460;
          const y = 330 - Math.sin(t * Math.PI) * 265;
          return (
            <g key={cx} transform={`translate(${x} ${y})`}>
              <rect x="-6" y="0" width="12" height="22" rx="5" fill="#ffffff" stroke="#e75f54" strokeWidth="2" />
            </g>
          );
        })}
      </svg>

      {/* Floating trust chips */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5, ease: 'easeOut' }}
        className="absolute top-5 left-5 bg-snow px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2"
      >
        <ShieldCheck className="w-4 h-4 text-coral-600" />
        <span className="text-xs font-semibold text-ink">28,000+ procedures</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 0.5, ease: 'easeOut' }}
        className="absolute bottom-5 left-5 bg-snow px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2"
      >
        <Sparkles className="w-4 h-4 text-coral-500" />
        <span className="text-xs font-semibold text-ink">Painless-first care</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5, ease: 'easeOut' }}
        className="absolute bottom-5 right-5 bg-ink text-cloud px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2"
      >
        <Clock className="w-4 h-4 text-coral-300" />
        <span className="text-xs font-semibold">Mon–Sat till 8</span>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const { openBooking } = useBooking();

  return (
    <section className="relative pt-28 pb-16 lg:pt-28 lg:pb-20 overflow-hidden bg-cloud">
      {/* Warm coral wash */}
      <div
        aria-hidden="true"
        className="absolute top-[-15%] right-[-10%] w-[50vw] h-[50vw] max-w-[680px] max-h-[680px] rounded-full bg-coral-50 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-14 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-snow border border-coral-100 text-coral-700 text-xs font-semibold rounded-full mb-6">
              <MapPin className="w-3.5 h-3.5 text-coral-500" />
              {CLINIC.city}, {CLINIC.state} · {CLINIC.addressShort}
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-[4.4rem] leading-[1.02] text-ink mb-6">
              Dental care
              <br />
              <span className="text-coral-600 not-italic">worth smiling</span> about.
            </h1>
            <p className="text-lg lg:text-xl text-ink/70 mb-9 leading-relaxed max-w-md">
              Implants, root canals &amp; cosmetic dentistry on 18th June Road, Panaji —
              careful, kind, and priced honestly. Book a seat in under a minute.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-9">
              <button
                onClick={() => openBooking()}
                className="w-full sm:w-auto px-8 py-4 rounded-lg bg-coral-600 text-cloud font-bold text-lg hover:bg-coral-500 transition-colors flex items-center justify-center gap-2 group"
              >
                Book an appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href={`tel:${CLINIC.phoneHref}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-ink text-cloud font-semibold text-lg hover:bg-ink/90 transition-colors"
              >
                <PhoneCall className="w-5 h-5" />
                Emergency? Call now
              </a>
            </div>

            <a
              href={waLink(CLINIC.whatsapp, 'Hello BrightDent — I need an urgent appointment.')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink/70 hover:text-coral-600 transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              Prefer WhatsApp? Message the desk
            </a>
          </motion.div>

          {/* Right — smile panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="relative"
          >
            <SmilePanel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}