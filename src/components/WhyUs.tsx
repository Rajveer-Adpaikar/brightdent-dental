import { motion } from 'motion/react';
import { CLINIC } from '../config';
import { ArchRow } from './Arch';

const REASONS = [
  {
    title: 'A plan in writing before you pay',
    text: 'Every treatment plan is itemised in writing first — dentist, procedure, timeline, and an estimate. No surprise charges at the billing desk.',
  },
  {
    title: 'Specialists, not generalists',
    text: 'Crowns and implants done by the implantologist, root canals by the endodontist. You see the right doctor for the right procedure.',
  },
  {
    title: 'WhatsApp the whole way',
    text: 'Book, confirm, reschedule and ask questions on WhatsApp — the same number before and after your visit. Reminders before every appointment.',
  },
  {
    title: 'Emergency slots held every day',
    text: 'Accidents don’t book ahead. We hold emergency appointments during all clinic hours, including Sunday mornings.',
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-20 lg:py-28 bg-plaster relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 lg:mb-20">
          <div className="max-w-2xl">
            <ArchRow className="mb-5" />
            <p className="font-data text-xs uppercase tracking-[0.28em] text-cobalt-500 mb-4">Why BrightDent</p>
            <h2 className="font-display text-4xl lg:text-6xl text-ink leading-[1.05]">
              A clinic that runs like
              <br />
              <em className="text-cobalt-600 not-italic">your case matters.</em>
            </h2>
          </div>
          <p className="lg:max-w-xs text-ink/70 leading-relaxed">
            {CLINIC.stats[1].value} patients and {CLINIC.stats[2].value} procedures later,
            the rule hasn’t changed — understand before you treat.
          </p>
        </div>

        {/* Reason rows */}
        <div className="border-t border-cobalt-100">
          {REASONS.map((r, idx) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: (idx % 2) * 0.1, duration: 0.5, ease: 'easeOut' }}
              className="grid md:grid-cols-[1fr_auto] md:items-start gap-2 md:gap-10 py-7 border-b border-cobalt-100 group"
            >
              <div className="flex items-baseline gap-5">
                <span className="font-data text-sm text-cobalt-400">0{idx + 1}</span>
                <h3 className="font-display text-2xl lg:text-3xl text-ink group-hover:text-cobalt-700 transition-colors">
                  {r.title}
                </h3>
              </div>
              <p className="md:max-w-sm text-sm leading-relaxed text-ink/70 md:text-right">
                {r.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats band */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px bg-cobalt-100 rounded-xl overflow-hidden border border-cobalt-100">
          {CLINIC.stats.map((stat) => (
            <div key={stat.label} className="bg-white px-6 py-8 lg:py-10 flex flex-col gap-1.5">
              <span className="font-data text-3xl lg:text-4xl text-cobalt-700">{stat.value}</span>
              <span className="text-xs lg:text-sm font-medium text-ink/60">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}