import { motion } from 'motion/react';
import { CLINIC } from '../config';
import { Plus } from 'lucide-react';
import { waLink } from '../lib';
import { WhatsAppIcon } from './icons';

export default function Faq() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-paper">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:gap-16">
          {/* Left heading + WhatsApp card */}
          <div className="lg:w-[38%] mb-10 lg:mb-0 flex flex-col">
            <p className="font-data text-xs uppercase tracking-[0.28em] text-amber-500 mb-4">FAQs</p>
            <h2 className="font-display text-4xl lg:text-5xl text-ink leading-[1.05]">
              Common questions,
              <br />
              <span className="text-amber-600 not-italic">straight answers.</span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-ink/70">
              What patients usually ask before their first visit.
            </p>

            {/* Ask-us card */}
            <div className="mt-8 bg-ink text-oat rounded-2xl p-7">
              <div className="flex items-center gap-2.5 mb-3">
                <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                <h3 className="font-display text-lg text-oat">Ask us anything</h3>
              </div>
              <p className="text-sm text-oat/70 leading-relaxed mb-5">
                Anything not covered here — message the desk on WhatsApp and a human
                replies during clinic hours.
              </p>
              <a
                href={waLink(CLINIC.whatsapp, 'Hello BrightDent — I have a question.')}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] text-ink font-bold text-sm hover:opacity-90 transition-opacity"
              >
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp the desk
              </a>
            </div>
          </div>

          {/* Right accordion */}
          <div className="lg:w-[62%]">
            {CLINIC.faqs.map((faq, idx) => (
              <motion.details
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: idx * 0.04, duration: 0.4, ease: 'easeOut' }}
                className="group border-b border-amber-100"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer py-5 pr-2 list-none">
                  <span className="font-display text-lg lg:text-xl text-ink leading-snug">{faq.q}</span>
                  <Plus className="w-5 h-5 shrink-0 text-amber-500 group-open:rotate-45 transition-transform" />
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