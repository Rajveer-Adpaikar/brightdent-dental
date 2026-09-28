import { motion } from 'motion/react';
import { CLINIC } from '../config';
import { useBooking } from '../booking';
import { Smile } from './Smile';

export default function Dentists() {
  const { openBooking } = useBooking();

  return (
    <section id="dentists" className="py-20 lg:py-28 bg-snow relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] max-w-[520px] max-h-[520px] rounded-full bg-coral-50 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-12 lg:mb-14">
          <p className="font-data text-xs uppercase tracking-[0.28em] text-coral-500 mb-4">Our dentists</p>
          <h2 className="font-display text-4xl lg:text-5xl text-ink leading-[1.05]">
            Three specialists,
            <br />
            <span className="text-coral-600 not-italic">one plan per patient.</span>
          </h2>
          <p className="mt-5 text-ink/70 leading-relaxed">
            Every patient stays under one consultant&rsquo;s eye end to end — from the first
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
              className="bg-cloud border border-coral-100/70 rounded-2xl p-7 lg:p-8 flex flex-col h-full group hover:border-coral-300 hover:shadow-lg hover:shadow-coral-100/40 transition-all"
            >
              {/* Smile monogram */}
              <div className="relative flex h-16 w-16 items-center justify-center mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border border-coral-100 text-coral-600 group-hover:bg-coral-600 group-hover:text-cloud group-hover:border-coral-600 transition-colors">
                  <Smile className="w-7 h-6" />
                </div>
                <span className="absolute -bottom-1 font-data text-[10px] font-bold text-ink/50">{dentist.initials}</span>
              </div>

              <h3 className="font-display text-2xl text-ink mb-1">{dentist.name}</h3>
              <p className="font-data text-sm text-coral-600 mb-4">{dentist.specialty}</p>

              <p className="text-sm text-ink/60 leading-relaxed mb-7">
                {dentist.qual} · {dentist.experience} experience
              </p>

              <dl className="mt-auto grid grid-cols-2 gap-x-4 gap-y-5 pt-6 border-t border-coral-100">
                <div>
                  <dt className="text-xs text-ink/50 uppercase tracking-wider mb-1">Patients</dt>
                  <dd className="font-data text-2xl text-ink">{dentist.patients}</dd>
                </div>
                <div>
                  <dt className="text-xs text-ink/50 uppercase tracking-wider mb-1">Experience</dt>
                  <dd className="font-data text-2xl text-ink">{dentist.experience}</dd>
                </div>
              </dl>

              <button
                onClick={() => openBooking({ dentist: dentist.name })}
                className="mt-7 w-full py-3 rounded-lg bg-coral-600 text-cloud font-semibold text-sm hover:bg-coral-500 transition-colors"
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