import { motion } from 'motion/react';
import { CLINIC } from '../config';

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-snow relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] max-w-[520px] max-h-[520px] rounded-full bg-coral-50 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-12 lg:mb-14">
          <p className="font-data text-xs uppercase tracking-[0.28em] text-coral-500 mb-4">Before &amp; after</p>
          <h2 className="font-display text-4xl lg:text-5xl text-ink leading-[1.05]">
            Smiles, changed
            <br />
            <span className="text-coral-600 not-italic">in plain view.</span>
          </h2>
          <p className="mt-5 text-ink/70 leading-relaxed max-w-lg">
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
              className="group rounded-2xl overflow-hidden border border-coral-100/70 bg-cloud"
            >
              {/* Before / After visual band — enamel neutral + coral */}
              <div className="relative h-40 overflow-hidden bg-gradient-to-r from-coral-100 via-coral-50 to-cloud">
                {/* Smile curve */}
                <svg viewBox="0 0 200 80" className="absolute inset-0 w-full h-full" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M10 55 Q100 5 190 55" stroke="rgba(179,40,30,0.55)" strokeWidth="5" fill="none" strokeLinecap="round" />
                </svg>

                <span className="absolute top-3 left-3 font-data text-[10px] uppercase tracking-widest px-2.5 py-1 rounded bg-ink/60 text-cloud">Before</span>
                <span className="absolute top-3 right-3 font-data text-[10px] uppercase tracking-widest px-2.5 py-1 rounded bg-coral-500 text-cloud">After</span>
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