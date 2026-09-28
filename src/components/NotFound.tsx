import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, CalendarCheck, PhoneCall } from 'lucide-react';
import { useBooking } from '../booking';
import { CLINIC } from '../config';
import { Arch, ArchRow } from './Arch';

export default function NotFound() {
  const { openBooking } = useBooking();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative pt-40 pb-28 overflow-hidden bg-plaster">
      {/* Cool cobalt wash */}
      <div
        aria-hidden="true"
        className="absolute top-[-20%] right-[-10%] w-[46vw] h-[46vw] max-w-[600px] max-h-[600px] rounded-full bg-cobalt-100/60 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vw] max-w-[520px] max-h-[520px] rounded-full bg-marigold-100/70 blur-3xl pointer-events-none"
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Placard / label-style card — off-center, bordered, like a Goan bottle label */}
        <div className="relative border-2 border-cobalt-200 rounded-none p-10 lg:p-14 bg-white shadow-xl shadow-ink/5 max-w-2xl mx-auto">
          {/* Corner ticks */}
          <span aria-hidden="true" className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-cobalt-300" />
          <span aria-hidden="true" className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-cobalt-300" />
          <span aria-hidden="true" className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-cobalt-300" />
          <span aria-hidden="true" className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-cobalt-300" />

          <div className="flex justify-center mb-6">
            <Arch className="w-11 h-13 text-cobalt-300" />
          </div>

          <p className="font-data text-xs uppercase tracking-[0.3em] text-cobalt-500 mb-4 text-center">
            Goa · 18.52°N / 73.86°E · GPOG-404
          </p>

          <h1 className="font-display text-7xl lg:text-8xl text-ink leading-[0.95] text-center mb-6">
            {CLINIC.city.split(' ')[0]}
            <span className="text-marigold-500">/</span>404
          </h1>

          <p className="text-center text-ink/70 text-lg leading-relaxed mb-8 max-w-md mx-auto">
            This page isn&rsquo;t part of the tour. It may have moved, or the link may have a typo
            — either way, the clinic&rsquo;s the same as always. Let&rsquo;s get you back to the right chair.
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-12 bg-cobalt-200" aria-hidden="true" />
            <ArchRow className="opacity-80" />
            <span className="h-px w-12 bg-cobalt-200" aria-hidden="true" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-cobalt-700 text-plaster font-bold text-lg hover:bg-cobalt-600 transition-colors"
            >
              <Home className="w-5 h-5" />
              Back to home
            </Link>
            <button
              onClick={() => openBooking()}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-white text-ink font-bold text-lg border border-cobalt-200 hover:border-cobalt-300 hover:bg-white/70 transition-colors"
            >
              <CalendarCheck className="w-5 h-5" />
              Book an appointment
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-ink/60">
            Or call the clinic directly —{' '}
            <a href={`tel:${CLINIC.phoneHref}`} className="inline-flex items-center gap-1.5 font-semibold text-cobalt-700 hover:underline">
              <PhoneCall className="w-3.5 h-3.5" />
              {CLINIC.phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}