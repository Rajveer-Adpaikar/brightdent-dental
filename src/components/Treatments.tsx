import { motion } from 'motion/react';
import { CLINIC } from '../config';
import { useBooking } from '../booking';
import { ArrowUpRight } from 'lucide-react';

export default function Treatments() {
  const { openBooking } = useBooking();

  return (
    <section id="treatments" className="py-20 lg:py-28 bg-oat">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-14">
          <div className="max-w-2xl">
            <p className="font-data text-xs uppercase tracking-[0.28em] text-amber-500 mb-4">Treatments offered</p>
            <h2 className="font-display text-4xl lg:text-5xl text-ink leading-[1.05]">
              Every branch of care,
              <br />
              <span className="text-amber-600 not-italic">under this roof.</span>
            </h2>
          </div>
          <p className="lg:max-w-xs text-ink/70 leading-relaxed">
            Five groups of treatment, one standard of care. Not sure what you need? Our
            desk will point you to the right specialist.
          </p>
        </div>

        {/* Card grid (vs the fork's ledger rows) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {CLINIC.services.map((service, idx) => (
            <motion.article
              key={service.index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: idx * 0.06, duration: 0.45, ease: 'easeOut' }}
              className="bg-paper border border-amber-100/70 rounded-2xl p-6 flex flex-col h-full group hover:border-amber-300 hover:shadow-lg hover:shadow-amber-100/30 transition-all"
            >
              <span className="font-data text-xs text-amber-500 mb-4">{service.index}</span>
              <h3 className="font-display text-lg text-ink group-hover:text-amber-700 transition-colors mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-ink/65 leading-relaxed mb-5">{service.blurb}</p>
              <ul className="mt-auto flex flex-wrap gap-x-3 gap-y-2">
                {service.items.map((item) => (
                  <li key={item} className="inline-flex items-center gap-1.5 text-xs font-medium text-ink/70">
                    <span className="w-1 h-1 rounded-full bg-amber-400" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        {/* Enquiry band — dark panel carries the identity here */}
        <div className="mt-12 rounded-2xl bg-ink text-oat p-8 lg:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-md">
            <p className="font-data text-[10px] uppercase tracking-[0.24em] text-amber-300 mb-2">Cost guidance</p>
            <h3 className="font-display text-2xl text-oat mb-2">How much will my treatment cost?</h3>
            <p className="text-sm text-oat/70">
              No fixed price lists — every treatment plan is written for your case. Tell us what
              you&rsquo;re considering and we&rsquo;ll come back with a written estimate.
            </p>
          </div>
          <button
            onClick={() => openBooking()}
            className="inline-flex items-center justify-center gap-2 shrink-0 px-6 py-3.5 rounded-lg bg-amber-500 text-ink font-semibold text-sm hover:bg-amber-400 transition-colors"
          >
            Get a written estimate
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}