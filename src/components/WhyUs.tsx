import { motion } from 'motion/react';
import { CLINIC } from '../config';
import { SmileRow } from './Smile';

const REASONS = [
  {
    title: 'Specialists, not generalists',
    text: 'Crowns and implants by the implantologist, root canals by the endodontist — you see the right doctor for the right procedure.',
    tag: 'Right doctor',
  },
  {
    title: 'A written plan before you pay',
    text: 'Every treatment plan is itemised in writing first — procedure, timeline, and an estimate. No surprise charges at the billing desk.',
    tag: 'No surprises',
  },
  {
    title: 'WhatsApp the whole way',
    text: 'Book, confirm, reschedule and ask questions on WhatsApp — the same number before and after your visit.',
    tag: 'Always in touch',
  },
  {
    title: 'Emergency slots every day',
    text: 'Accidents don’t book ahead. We hold emergency appointments during all clinic hours, including Sunday mornings.',
    tag: 'We hold chairs',
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-20 lg:py-28 bg-cloud">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14 lg:mb-16">
          <SmileRow className="mb-5" />
          <p className="font-data text-xs uppercase tracking-[0.28em] text-coral-500 mb-4">Why BrightDent</p>
          <h2 className="font-display text-4xl lg:text-5xl text-ink leading-[1.05]">
            A clinic that runs like
            <br />
            <span className="text-coral-600 not-italic">your case matters.</span>
          </h2>
        </div>

        {/* 2×2 feature tiles (vs the fork's numbered ledger rows) */}
        <div className="grid md:grid-cols-2 gap-6">
          {REASONS.map((r, idx) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: (idx % 2) * 0.1, duration: 0.5, ease: 'easeOut' }}
              className="bg-snow border border-coral-100/70 rounded-2xl p-7 lg:p-8 h-full flex flex-col group hover:border-coral-200 transition-colors"
            >
              <span className="font-data text-[10px] uppercase tracking-[0.22em] text-coral-500 mb-3">{r.tag}</span>
              <h3 className="font-display text-xl lg:text-2xl text-ink group-hover:text-coral-700 transition-colors mb-2.5">
                {r.title}
              </h3>
              <p className="text-sm text-ink/65 leading-relaxed">{r.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats band */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-px bg-coral-100 overflow-hidden rounded-2xl border border-coral-100">
          {CLINIC.stats.map((stat) => (
            <div key={stat.label} className="bg-snow px-6 py-8 lg:py-10 flex flex-col gap-1.5">
              <span className="font-data text-3xl lg:text-4xl text-coral-700">{stat.value}</span>
              <span className="text-xs lg:text-sm font-medium text-ink/60">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}