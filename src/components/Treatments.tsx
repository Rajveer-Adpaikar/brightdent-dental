import { motion } from 'motion/react';
import { CLINIC } from '../config';
import { useBooking } from '../booking';
import { ArrowUpRight } from 'lucide-react';

export default function Treatments() {
  const { openBooking } = useBooking();

  return (
    <section id="treatments" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 lg:mb-20">
          <div className="max-w-2xl">
            <p className="font-data text-xs uppercase tracking-[0.28em] text-cobalt-500 mb-4">Treatments offered</p>
            <h2 className="font-display text-4xl lg:text-6xl text-ink leading-[1.05]">
              Every branch of care,
              <br />
              <em className="text-cobalt-600 not-italic">under this roof.</em>
            </h2>
          </div>
          <p className="lg:max-w-xs text-ink/70 leading-relaxed">
            Five groups of treatment, one standard of care. Not sure what you need? Our
            desk will point you to the right specialist.
          </p>
        </div>

        {/* Treatment rows */}
        <div className="border-t border-cobalt-100">
          {CLINIC.services.map((service, idx) => (
            <motion.article
              key={service.index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: (idx % 2) * 0.1, duration: 0.5, ease: 'easeOut' }}
              className="grid md:grid-cols-[1fr_auto] gap-4 md:gap-10 py-8 border-b border-cobalt-100 group"
            >
              <div>
                <div className="flex items-baseline gap-5 mb-3">
                  <span className="font-data text-sm text-cobalt-400">{service.index}</span>
                  <h3 className="font-display text-2xl lg:text-3xl text-ink group-hover:text-cobalt-700 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm text-ink/65 leading-relaxed max-w-md">{service.blurb}</p>
              </div>
              <div className="md:max-w-md md:text-right">
                <ul className="flex flex-wrap gap-x-4 gap-y-2.5 md:justify-end">
                  {service.items.map((item) => (
                    <li key={item} className="inline-flex items-center gap-1.5 text-sm font-medium text-cobalt-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-marigold-400" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Cost enquiry band */}
        <div className="mt-14 rounded-xl bg-cobalt-50 border border-cobalt-100 p-8 lg:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-md">
            <h3 className="font-display text-2xl text-ink mb-2">How much will my treatment cost?</h3>
            <p className="text-sm text-ink/70">
              No fixed price lists — every treatment plan is written for your case. Tell us what
              you’re considering and we’ll come back with a written estimate.
            </p>
          </div>
          <button
            onClick={() => openBooking()}
            className="inline-flex items-center justify-center gap-2 shrink-0 px-6 py-3.5 rounded-md bg-cobalt-700 text-plaster font-semibold text-sm hover:bg-cobalt-600 transition-colors"
          >
            Get a written estimate
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}