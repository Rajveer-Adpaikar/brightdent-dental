import { motion } from 'motion/react';
import { ArrowRight, PhoneCall, MapPin } from 'lucide-react';
import { useBooking } from '../booking';
import { CLINIC } from '../config';
import { waLink } from '../lib';
import { WhatsAppIcon } from './icons';

export default function Hero() {
  const { openBooking } = useBooking();

  return (
    <section className="relative pt-28 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-ivory">
      {/* Soft rose wash + peach glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[52vw] h-[52vw] max-w-[720px] max-h-[720px] rounded-full bg-rosewood-100/60 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-20%] left-[-10%] w-[46vw] h-[46vw] max-w-[560px] max-h-[560px] rounded-full bg-peach-100/70 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-12 items-center">

          {/* Left — copy + emergency cluster */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-rosewood-50 border border-rosewood-100 text-rosewood-800 text-xs font-semibold rounded-full mb-7">
              <MapPin className="w-3.5 h-3.5 text-rosewood-500" />
              {CLINIC.city} · {CLINIC.addressShort}
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-[5.25rem] leading-[1.02] text-rosewood-950 mb-6">
              Advanced Dentistry.
              <br />
              <em className="text-rosewood-600 italic">Personalised Care.</em>
            </h1>
            <p className="text-lg lg:text-xl text-rosewood-900/75 mb-9 leading-relaxed max-w-xl">
              Implants, root canals &amp; cosmetic dentistry under one roof in Bengaluru —
              with three specialists, one treatment plan, and a desk that picks up the phone.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
              <button
                onClick={() => openBooking()}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-rosewood-800 text-ivory font-bold text-lg hover:bg-rosewood-700 transition-colors flex items-center justify-center gap-2 group"
              >
                Book an appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#treatments"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-rosewood-900 font-bold text-lg border border-rosewood-200 hover:border-rosewood-300 hover:bg-white/70 transition-colors flex items-center justify-center"
              >
                View treatments
              </a>
            </div>

            {/* Emergency cluster */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${CLINIC.phoneHref}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-peach-500 text-rosewood-950 font-bold hover:bg-peach-400 transition-colors"
              >
                <PhoneCall className="w-5 h-5" />
                Emergency? Call now
              </a>
              <a
                href={waLink(CLINIC.whatsapp, 'Hello IvoryCare — I need an urgent appointment.')}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-rosewood-950 text-ivory font-semibold hover:bg-rosewood-800 transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp us
              </a>
            </div>
          </motion.div>

          {/* Right — consultation ledger card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl shadow-rosewood-950/10 border border-rosewood-100 p-7 lg:p-9">
              <div className="flex items-center justify-between mb-6">
                <p className="font-data text-[10px] uppercase tracking-[0.3em] text-rosewood-500">
                  Consultation ledger · Est. 2011
                </p>
                <span className="font-data text-xs text-peach-600">IVC-{new Date().getFullYear()}</span>
              </div>

              {/* Appointment slots */}
              <div className="space-y-3">
                {CLINIC.dentists.map((d) => (
                  <div key={d.name} className="flex items-center gap-4 rounded-xl border border-rosewood-100 bg-ivory px-4 py-3.5 group">
                    <span className="font-data text-[11px] text-rosewood-400 shrink-0">{d.initials}</span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-rosewood-950 truncate">{d.name}</p>
                      <p className="text-xs text-rosewood-900/60 truncate">{d.specialty}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hours strip */}
              <div className="mt-6 pt-5 border-t border-rosewood-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-medium text-rosewood-900/70">
                  <MapPin className="w-3.5 h-3.5 text-peach-500" />
                  {CLINIC.addressShort}
                </div>
                <div className="text-right">
                  <p className="font-data text-xs text-rosewood-900/70">Mon–Fri 9–8 · Sat 9–6 · Sun 10–2</p>
                </div>
              </div>

              <p className="text-[11px] text-rosewood-900/45 mt-4 leading-relaxed">
                Demo clinic for illustration. Emergency appointments available during hours.
              </p>
            </div>

            {/* Floating stat chip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5, ease: 'easeOut' }}
              className="absolute -top-5 -right-3 sm:-right-5 z-10 bg-peach-100 text-rosewood-950 px-4 py-2.5 rounded-xl shadow-lg"
            >
              <span className="font-data text-lg font-semibold">30,000+</span>
              <span className="text-xs font-medium ml-2">procedures</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}