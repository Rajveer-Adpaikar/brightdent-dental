import { motion } from 'motion/react';
import { ArrowRight, PhoneCall, MapPin } from 'lucide-react';
import { useBooking } from '../booking';
import { CLINIC } from '../config';
import { waLink } from '../lib';
import { WhatsAppIcon } from './icons';
import { Arch, ArchRow } from './Arch';

export default function Hero() {
  const { openBooking } = useBooking();

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-plaster">
      {/* Cool cobalt top wash */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[52vw] h-[52vw] max-w-[720px] max-h-[720px] rounded-full bg-cobalt-100/60 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-12 items-center">

          {/* Left — copy + emergency cluster */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-cobalt-50 border border-cobalt-100 text-cobalt-800 text-xs font-semibold rounded-md mb-7">
              <MapPin className="w-3.5 h-3.5 text-cobalt-500" />
              {CLINIC.city}, {CLINIC.state} · {CLINIC.addressShort}
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-[5rem] leading-[1.02] text-ink mb-6">
              Modern Dentistry.
              <br />
              <em className="text-cobalt-600 not-italic">Healthier Smiles.</em>
            </h1>
            <p className="text-lg lg:text-xl text-ink/75 mb-9 leading-relaxed max-w-xl">
              Implants, root canals &amp; cosmetic dentistry on 18th June Road in Panaji —
              three specialists, one treatment plan, and a WhatsApp line that actually answers.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
              <button
                onClick={() => openBooking()}
                className="w-full sm:w-auto px-8 py-4 rounded-md bg-cobalt-700 text-plaster font-bold text-lg hover:bg-cobalt-600 transition-colors flex items-center justify-center gap-2 group"
              >
                Book an appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#treatments"
                className="w-full sm:w-auto px-8 py-4 rounded-md bg-white text-ink font-bold text-lg border border-cobalt-200 hover:border-cobalt-300 hover:bg-white/70 transition-colors flex items-center justify-center"
              >
                View treatments
              </a>
            </div>

            {/* Emergency cluster */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${CLINIC.phoneHref}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-marigold-500 text-ink font-bold hover:bg-marigold-400 transition-colors"
              >
                <PhoneCall className="w-5 h-5" />
                Emergency? Call now
              </a>
              <a
                href={waLink(CLINIC.whatsapp, 'Hello BrightDent — I need an urgent appointment.')}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-ink text-plaster font-semibold hover:bg-cobalt-900 transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp us
              </a>
            </div>
          </motion.div>

          {/* Right — the ticket stub / azulejo panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="relative"
          >
            {/* Azulejo border panel behind the card */}
            <div
              aria-hidden="true"
              className="absolute -inset-2.5 rounded-2xl border-4 border-cobalt-200/70"
            >
              <Arch className="absolute top-2 left-2 w-6 h-7 text-cobalt-300" />
              <Arch className="absolute top-2 right-2 w-6 h-7 text-cobalt-300" />
              <Arch className="absolute bottom-2 left-2 w-6 h-7 text-cobalt-300" />
              <Arch className="absolute bottom-2 right-2 w-6 h-7 text-cobalt-300" />
            </div>

            <div className="relative bg-white rounded-xl shadow-xl shadow-ink/10 border border-cobalt-100 p-7 lg:p-9">
              {/* Ticket header */}
              <div className="flex items-center justify-between mb-5">
                <p className="font-data text-[10px] uppercase tracking-[0.3em] text-cobalt-500">
                  Appointment · Seat No.
                </p>
                <span className="font-data text-xs text-cobalt-700 font-semibold">BDP-{new Date().getFullYear()}</span>
              </div>

              {/* Perforation */}
              <div aria-hidden="true" className="border-t border-dashed border-cobalt-200 mb-6" />

              {/* Doctor slots */}
              <div className="space-y-3">
                {CLINIC.dentists.map((d) => (
                  <div key={d.name} className="flex items-center gap-4 rounded-lg border border-cobalt-100 bg-cobalt-50/40 px-4 py-3 group">
                    <span className="font-data text-[11px] font-bold text-cobalt-500 shrink-0">{d.initials}</span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-ink truncate">{d.name}</p>
                      <p className="text-xs text-ink/60 truncate">{d.specialty}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Perforation */}
              <div aria-hidden="true" className="border-t border-dashed border-cobalt-200 my-6" />

              {/* Hours strip */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-medium text-ink/70">
                  <MapPin className="w-3.5 h-3.5 text-marigold-600" />
                  {CLINIC.addressShort}
                </div>
                <div className="text-right">
                  <p className="font-data text-xs text-ink/70">Mon–Fri 9–8 · Sat 9–5 · Sun 10–2</p>
                </div>
              </div>

              <p className="text-[11px] text-ink/45 mt-4 leading-relaxed">
                Demo clinic for illustration. Emergency appointments available during clinic hours.
              </p>
            </div>

            {/* Floating stat chip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5, ease: 'easeOut' }}
              className="absolute -top-5 -right-3 sm:-right-5 z-10 bg-marigold-100 text-ink px-4 py-2.5 rounded-lg shadow-lg flex items-center gap-2"
            >
              <span className="font-data text-lg font-semibold">28,000+</span>
              <span className="text-xs font-medium">procedures</span>
              <ArchRow className="ml-1" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}