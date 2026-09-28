import { motion } from 'motion/react';
import { CLINIC } from '../config';

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-plaster relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute bottom-[-25%] left-[-10%] w-[44vw] h-[44vw] max-w-[560px] max-h-[560px] rounded-full bg-marigold-100/60 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-14 lg:mb-16">
          <p className="font-data text-xs uppercase tracking-[0.28em] text-cobalt-500 mb-4">Before &amp; after</p>
          <h2 className="font-display text-4xl lg:text-6xl text-ink leading-[1.05]">
            Smiles, changed
            <br />
            <em className="text-cobalt-600 not-italic">in plain view.</em>
          </h2>
          <p className="mt-6 text-ink/70 leading-relaxed max-w-lg">
            Real categories we treat, shown the honest way — no filters, just the work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {CLINIC.beforeAfter.map((item, idx) => (
            <motion.article
              key={item.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: (idx % 2) * 0.1, duration: 0.5, ease: 'easeOut' }}
              className="group rounded-xl overflow-hidden border border-cobalt-100 bg-white"
            >
              {/* Before / After visual band */}
              <div className="relative h-44 overflow-hidden">
                {/* Before — desaturated cobalt wash */}
                <div className="absolute inset-0 bg-gradient-to-r from-cobalt-900 via-cobalt-700 to-cobalt-500" />
                {/* After — bright enamel + marigold glow */}
                <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-marigold-200 via-marigold-300 to-marigold-400" />

                {/* Arch "smile" line */}
                <svg viewBox="0 0 200 80" className="absolute inset-0 w-full h-full" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M10 55 Q100 5 190 55" stroke="rgba(255,255,255,0.65)" strokeWidth="5" fill="none" strokeLinecap="round" />
                </svg>

                {/* Labels */}
                <span className="absolute top-3 left-3 font-data text-[10px] uppercase tracking-widest px-2.5 py-1 rounded bg-ink/40 text-plaster">Before</span>
                <span className="absolute top-3 right-3 font-data text-[10px] uppercase tracking-widest px-2.5 py-1 rounded bg-marigold-500 text-ink">After</span>

                {/* Divider */}
                <span className="absolute inset-y-0 left-1/2 w-px bg-white/70" aria-hidden="true" />
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl text-ink mb-1.5">{item.category}</h3>
                <p className="text-sm text-ink/65 leading-relaxed">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}