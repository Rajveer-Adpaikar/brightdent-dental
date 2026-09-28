import { motion } from 'motion/react';
import { CLINIC } from '../config';
import { ToothRow } from './Tooth';

const REASONS = [
  {
    title: 'A plan in writing before you pay',
    text: 'Every treatment plan is itemised in writing first — dentist, procedure, timeline, and an estimate. No surprise charges at the billing desk.',
  },
  {
    title: 'Specialists, not generalists',
    text: 'Crowns and implants done by the prosthodontist, root canals by the endodontist. You see the right doctor for the right procedure.',
  },
  {
    title: 'Online booking, confirmed on WhatsApp',
    text: 'Pick a dentist, a time, and a chair in under a minute. Your confirmation arrives on WhatsApp — and your reminder before every visit.',
  },
  {
    title: 'Emergency slots held every day',
    text: 'Accidents don’t book ahead. We hold emergency appointments during all clinic hours, including Sunday mornings.',
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-20 lg:py-28 bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 lg:mb-20">
          <div className="max-w-2xl">
            <ToothRow className="mb-5" />
            <p className="font-data text-xs uppercase tracking-[0.28em] text-rosewood-500 mb-4">Why IvoryCare</p>
            <h2 className="font-display text-4xl lg:text-6xl text-rosewood-950 leading-[1.05]">
              A clinic that runs like
              <br />
              <em className="text-rosewood-600 italic">your case matters.</em>
            </h2>
          </div>
          <p className="lg:max-w-xs text-rosewood-900/70 leading-relaxed">
            {CLINIC.stats[1].value} patients and {CLINIC.stats[2].value} procedures later,
            the rule hasn’t changed — understand before you treat.
          </p>
        </div>

        {/* Ledger-style reason rows */}
        <div className="border-t border-rosewood-100">
          {REASONS.map((r, idx) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: (idx % 2) * 0.1, duration: 0.5, ease: 'easeOut' }}
              className="grid md:grid-cols-[1fr_auto] md:items-start gap-2 md:gap-10 py-7 border-b border-rosewood-100 group"
            >
              <div className="flex items-baseline gap-5">
                <span className="font-data text-sm text-rosewood-400">0{idx + 1}</span>
                <h3 className="font-display text-2xl lg:text-3xl text-rosewood-950 group-hover:text-rosewood-700 transition-colors">
                  {r.title}
                </h3>
              </div>
              <p className="md:max-w-sm text-sm leading-relaxed text-rosewood-900/70 md:text-right">
                {r.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats band */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px bg-rosewood-100 rounded-2xl overflow-hidden border border-rosewood-100">
          {CLINIC.stats.map((stat) => (
            <div key={stat.label} className="bg-white px-6 py-8 lg:py-10 flex flex-col gap-1.5">
              <span className="font-data text-3xl lg:text-4xl text-rosewood-800">{stat.value}</span>
              <span className="text-xs lg:text-sm font-medium text-rosewood-900/60">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}