import { motion } from 'motion/react';
import { CalendarCheck, FileText, Stethoscope } from 'lucide-react';

// The patient journey as three ordered steps — a real sequence, so numbering
// earns its place (distinct from the IvoryCare fork's "why us" ledger rows).
const STEPS = [
  {
    icon: CalendarCheck,
    title: 'Book a seat',
    text: 'Online in under a minute — dentist, treatment, date and time. Confirmed by WhatsApp, with a reminder before your visit.',
  },
  {
    icon: Stethoscope,
    title: 'Get examined',
    text: 'Digital X-rays and a consult with the right specialist. You walk out with a written treatment plan and a clear estimate.',
  },
  {
    icon: FileText,
    title: 'Smile with it',
    text: 'Care delivered on the plan, in the time agreed. Review visits, WhatsApp follow-ups, and no surprise charges at the desk.',
  },
];

export default function Steps() {
  return (
    <section className="py-14 lg:py-20 bg-paper border-y border-amber-100/70">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: 'easeOut' }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-50 text-amber-600 shrink-0">
                  <step.icon className="w-5 h-5" />
                </span>
                {idx < STEPS.length - 1 && <span className="w-px flex-1 bg-amber-100 mt-2 hidden md:block" aria-hidden="true" />}
              </div>
              <div>
                <p className="font-data text-[10px] uppercase tracking-[0.22em] text-amber-500 mb-1">Step 0{idx + 1}</p>
                <h3 className="font-display text-lg text-ink mb-1.5">{step.title}</h3>
                <p className="text-sm text-ink/65 leading-relaxed">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}