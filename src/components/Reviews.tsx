import { motion } from 'motion/react';
import { CLINIC } from '../config';
import { Star } from 'lucide-react';

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-plaster relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14 lg:mb-16">
          <p className="font-data text-xs uppercase tracking-[0.28em] text-cobalt-500 mb-4">Patient reviews</p>
          <h2 className="font-display text-4xl lg:text-6xl text-ink leading-[1.05]">
            What patients say
            <br />
            <em className="text-cobalt-600 not-italic">after the chair.</em>
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
              className="rounded-xl border border-cobalt-100 bg-white p-7 flex flex-col gap-4 h-full"
            >
              <div className="flex gap-1" aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-4 h-4 text-marigold-500 fill-marigold-500" />
                ))}
              </div>
              <blockquote className="text-ink/80 leading-relaxed">“{review.quote}”</blockquote>
              <figcaption className="mt-auto pt-3 border-t border-cobalt-100 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-ink">{review.name}</p>
                  <p className="text-xs text-ink/55">{review.detail}</p>
                </div>
                <span className="font-data text-[10px] uppercase tracking-widest text-cobalt-400">Verified patient</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}