import { motion } from 'motion/react';
import { CLINIC } from '../config';
import { ArrowUpRight } from 'lucide-react';

export default function Features() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <p className="font-data text-xs uppercase tracking-[0.25em] text-pine-600 mb-4">
              PearlSmile · Services
            </p>
            <h2 className="font-display text-4xl lg:text-6xl text-pine-950 leading-[1.05]">
              Care under one roof,
              <br />
              <span className="text-pine-700 italic">the way a clinic should be.</span>
            </h2>
          </div>
          <p className="lg:max-w-xs text-pine-900/70 leading-relaxed">
            Four branches of dentistry, three specialists. Every visit anchored by the same
            plain rule — understand before you treat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-14">
          {CLINIC.services.map((service, idx) => (
            <motion.article
              key={service.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: (idx % 2) * 0.12, duration: 0.55, ease: 'easeOut' }}
              className="border-t-2 border-pine-100 pt-6 flex flex-col h-full group"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-data text-sm text-gold-600">{service.num}</span>
                <h3 className="font-display text-2xl lg:text-3xl text-pine-950 group-hover:text-pine-700 transition-colors">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm text-pine-900/65 mb-5 leading-relaxed max-w-md">{service.blurb}</p>
              <ul className="mt-auto flex flex-wrap gap-x-5 gap-y-2.5">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-1.5 text-sm font-medium text-pine-800">
                    <ArrowUpRight className="w-3.5 h-3.5 text-gold-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}