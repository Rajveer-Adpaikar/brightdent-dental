import { motion } from 'motion/react';
import { CLINIC } from '../config';

export default function Dentists() {
  return (
    <section id="dentists" className="py-24 lg:py-32 bg-pine-950 text-pearl relative overflow-hidden">
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] max-w-[640px] max-h-[640px] rounded-full bg-pine-800/50 blur-3xl opacity-70 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-16">
          <p className="font-data text-xs uppercase tracking-[0.25em] text-gold-400 mb-4">
            PearlSmile · The team
          </p>
          <h2 className="font-display text-4xl lg:text-6xl text-pearl leading-[1.05]">
            Three dentists,
            <br />
            <span className="text-pearl/80 italic">no hand-offs in the hall.</span>
          </h2>
          <p className="mt-6 text-lg text-pearl/70 leading-relaxed">
            Every patient is under one consultant's eye end to end — from the first
            examination to the final polish.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {CLINIC.dentists.map((dentist, idx) => (
            <motion.article
              key={dentist.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: idx * 0.12, duration: 0.55, ease: 'easeOut' }}
              className="bg-pine-900/60 border border-pine-800 rounded-2xl p-8 flex flex-col h-full group hover:border-gold-500/40 transition-colors"
            >
              {/* Smile-arch monogram */}
              <div className="relative flex h-16 w-16 items-center justify-center mb-7">
                <span className="smile-arch h-11 w-11 block rounded-t-full border-gold-500/70" aria-hidden="true" />
                <span className="absolute bottom-[18%] h-2 w-8 rounded-full bg-gold-400" aria-hidden="true" />
              </div>

              <h3 className="font-display text-2xl text-pearl mb-1">{dentist.name}</h3>
              <p className="font-data text-sm text-gold-400 mb-5">{dentist.specialty}</p>

              <p className="text-sm text-pearl/60 leading-relaxed mb-7">
                {dentist.qual} · {dentist.experience} experience
              </p>

              <dl className="mt-auto grid grid-cols-2 gap-x-4 gap-y-6 pt-6 border-t border-pine-800">
                <div>
                  <dt className="text-xs text-pearl/50 uppercase tracking-wider mb-1">Patients</dt>
                  <dd className="font-data text-2xl text-pearl">{dentist.patients}</dd>
                </div>
                <div>
                  <dt className="text-xs text-pearl/50 uppercase tracking-wider mb-1">Experience</dt>
                  <dd className="font-data text-2xl text-pearl">{dentist.experience}</dd>
                </div>
              </dl>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}