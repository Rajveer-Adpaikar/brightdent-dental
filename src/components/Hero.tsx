import { motion } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';
import { useBooking } from '../booking';
import { CLINIC } from '../config';

export default function Hero() {
  const openBooking = useBooking();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-pearl">
      {/* Decorative pearl-glow shapes */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/4 w-[64vw] h-[64vw] max-w-[820px] max-h-[820px] rounded-full bg-pine-200/40 blur-3xl opacity-70 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-10%] right-[-6%] w-[40vw] h-[40vw] max-w-[520px] max-h-[520px] rounded-full bg-gold-300/30 blur-3xl opacity-60 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-pine-50 text-pine-800 rounded-full text-xs font-semibold tracking-wide mb-7">
              <MapPin className="w-3.5 h-3.5 text-pine-600" />
              Panaji, Goa
            </div>

            <h1 className="font-display text-5xl lg:text-[5.5rem] leading-[1.02] text-pine-950 mb-7">
              Healthy Smiles.
              <br />
              <span className="text-pine-700 italic">Confident You.</span>
            </h1>

            <p className="text-lg lg:text-xl text-pine-900/75 mb-9 leading-relaxed max-w-lg">
              General, root canal &amp; cosmetic dentistry in the heart of Panaji —
              three in-house specialists, one calm room, and care that starts with listening.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="#services" className="w-full sm:w-auto px-8 py-4 rounded-full bg-pine-800 text-pearl font-bold text-lg hover:bg-pine-700 transition-colors flex items-center justify-center gap-2 group">
                Explore our services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button onClick={openBooking} className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-pine-900 font-bold text-lg border border-pine-200 hover:border-pine-300 hover:bg-white/70 transition-colors">
                Book an appointment
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-tr from-pine-700 to-pine-400 rounded-[2.5rem] blur-2xl opacity-25 transform rotate-3" />
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="A smiling patient with healthy teeth"
                className="relative z-10 w-full h-[480px] object-cover rounded-[2.5rem] shadow-2xl border border-white/60"
              />

              {/* Floating stat chip */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5, ease: 'easeOut' }}
                className="absolute top-10 -right-3 sm:-right-10 z-20 bg-white p-4 pr-5 rounded-2xl shadow-xl border border-pine-100"
              >
                <div className="font-data text-2xl font-semibold text-pine-800">17,000+</div>
                <div className="text-xs font-medium text-pine-900/60">patients treated</div>
              </motion.div>

              {/* Floating specialty chip */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5, ease: 'easeOut' }}
                className="absolute bottom-12 -left-3 sm:-left-10 z-20 bg-white p-4 pr-5 rounded-2xl shadow-xl border border-pine-100"
              >
                <div className="font-data text-2xl font-semibold text-pine-800">3</div>
                <div className="text-xs font-medium text-pine-900/60">in-house specialists</div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}