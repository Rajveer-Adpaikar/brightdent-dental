import { motion } from 'motion/react';
import { CLINIC } from '../config';
import { Plus } from 'lucide-react';

export default function Faq() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:gap-20">
          {/* Left heading */}
          <div className="lg:w-1/3 mb-10 lg:mb-0">
            <p className="font-data text-xs uppercase tracking-[0.28em] text-cobalt-500 mb-4">FAQs</p>
            <h2 className="font-display text-4xl lg:text-5xl text-ink leading-[1.05]">
              Common questions,
              <br />
              <em className="text-cobalt-600 not-italic">straight answers.</em>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-ink/70">
              What patients usually ask before their first visit. Anything else —
              call or WhatsApp us directly.
            </p>
          </div>

          {/* Right accordion */}
          <div className="lg:w-2/3">
            {CLINIC.faqs.map((faq, idx) => (
              <motion.details
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: idx * 0.05, duration: 0.4, ease: 'easeOut' }}
                className="group border-b border-cobalt-100"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer py-5 pr-2 list-none">
                  <span className="font-display text-lg lg:text-xl text-ink leading-snug">{faq.q}</span>
                  <Plus className="w-5 h-5 shrink-0 text-cobalt-400 group-open:rotate-45 transition-transform" />
                </summary>
                <p className="pb-6 pr-10 text-sm leading-relaxed text-ink/70">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}