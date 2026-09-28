import { motion } from 'motion/react';
import { CLINIC } from '../config';
import { Star } from 'lucide-react';

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-cloud">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-12 lg:mb-14">
          <p className="font-data text-xs uppercase tracking-[0.28em] text-coral-500 mb-4">Patient reviews</p>
          <h2 className="font-display text-4xl lg:text-5xl text-ink leading-[1.05]">
            What patients say
            <br />
            <span className="text-coral-600 not-italic">after the chair.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLINIC.reviews.map((review, idx) => (
            <motion.figure
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: (idx % 2) * 0.1, duration: 0.5, ease: 'easeOut' }}
              className="rounded-2xl border border-coral-100/70 bg-snow p-7 flex flex-col gap-4 h-full"
            >
              <div className="flex gap-1" aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-4 h-4 text-coral-500 fill-coral-500" />
                ))}
              </div>
              <blockquote className="text-ink/80 leading-relaxed">“{review.quote}”</blockquote>
              <figcaption className="mt-auto pt-3 border-t border-coral-100 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-ink">{review.name}</p>
                  <p className="text-xs text-ink/55">{review.detail}</p>
                </div>
                <span className="font-data text-[10px] uppercase tracking-widest text-coral-500">Verified patient</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}