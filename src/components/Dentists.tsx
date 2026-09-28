import { motion } from 'motion/react';
import { CLINIC } from '../config';
import { useBooking } from '../booking';
import { Tooth } from './Tooth';

export default function Dentists() {
  const { openBooking } = useBooking();

  return (
    <section id="dentists" className="py-20 lg:py-28 bg-rosewood-950 text-ivory relative overflow-hidden">
      {/* Rose glow */}
      <div
        aria-hidden="true"
        className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] max-w-[640px] max-h-[640px] rounded-full bg-rosewood-800/50 blur-3xl opacity-70 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-14 lg:mb-16">
          <p className="font-data text-xs uppercase tracking-[0.28em] text-peach-300 mb-4">Our dentists</p>
          <h2 className="font-display text-4xl lg:text-6xl text-ivory leading-[1.05]">
            Three specialists,
            <br />
            <em className="text-ivory/80 italic">one plan per patient.</em>
          </h2>
          <p className="mt-6 text-lg text-ivory/70 leading-relaxed">
            Every patient stays under one consultant’s eye end to end — from the first
            X-ray to the last review.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {CLINIC.dentists.map((dentist, idx) => (
            <motion.article
              key={dentist.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: idx * 0.12, duration: 0.55, ease: 'easeOut' }}
              className="bg-rosewood-900/60 border border-rosewood-800 rounded-2xl p-8 flex flex-col h-full group hover:border-peach-400/40 transition-colors"
            >
              {/* Monogram */}
              <div className="relative flex h-16 w-16 items-center justify-center mb-7">
                <Tooth className="w-9 h-12 text-rosewood-700 transition-colors group-hover:text-peach-300" />
                <span className="absolute -bottom-1.5 font-data text-[10px] text-peach-200">{dentist.initials}</span>
              </div>

              <h3 className="font-display text-2xl text-ivory mb-1">{dentist.name}</h3>
              <p className="font-data text-sm text-peach-300 mb-5">{dentist.specialty}</p>

              <p className="text-sm text-ivory/60 leading-relaxed mb-7">
                {dentist.qual} · {dentist.experience} experience
              </p>

              <dl className="mt-auto grid grid-cols-2 gap-x-4 gap-y-6 pt-6 border-t border-rosewood-800">
                <div>
                  <dt className="text-xs text-ivory/50 uppercase tracking-wider mb-1">Patients</dt>
                  <dd className="font-data text-2xl text-ivory">{dentist.patients}</dd>
                </div>
                <div>
                  <dt className="text-xs text-ivory/50 uppercase tracking-wider mb-1">Experience</dt>
                  <dd className="font-data text-2xl text-ivory">{dentist.experience}</dd>
                </div>
              </dl>

              <button
                onClick={() => openBooking({ dentist: dentist.name })}
                className="mt-7 w-full py-3 rounded-full bg-peach-500 text-rosewood-950 font-semibold text-sm hover:bg-peach-400 transition-colors"
              >
                Book with {dentist.name.split(' ')[1]}
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}