import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, CalendarCheck, PhoneCall } from 'lucide-react';
import { useBooking } from '../booking';
import { CLINIC } from '../config';
import { Tooth, ToothRow } from './Tooth';

export default function NotFound() {
  const { openBooking } = useBooking();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative pt-40 pb-28 overflow-hidden bg-ivory">
      {/* Rose + peach washes */}
      <div
        aria-hidden="true"
        className="absolute top-[-20%] right-[-10%] w-[46vw] h-[46vw] max-w-[600px] max-h-[600px] rounded-full bg-rosewood-100/60 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vw] max-w-[520px] max-h-[520px] rounded-full bg-peach-100/70 blur-3xl pointer-events-none"
      />

      <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
        <div className="flex items-center justify-center mb-8">
          <Tooth className="w-12 h-14 text-rosewood-200" />
        </div>

        <p className="font-data text-xs uppercase tracking-[0.3em] text-rosewood-500 mb-6">
          Error 404 · IVC-404 — not in the ledger
        </p>

        <h1 className="font-display text-7xl lg:text-8xl text-rosewood-950 leading-[1.02] mb-6">
          This page
          <br />
          <em className="text-rosewood-600 italic">isn&rsquo;t on file.</em>
        </h1>

        <p className="text-lg text-rosewood-900/70 leading-relaxed max-w-lg mx-auto mb-10">
          The page you&rsquo;re looking for isn&rsquo;t in our records. It may have moved,
          or the link may have a typo — let&rsquo;s get you back to the right chair.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-rosewood-800 text-ivory font-bold text-lg hover:bg-rosewood-700 transition-colors"
          >
            <Home className="w-5 h-5" />
            Back to home
          </Link>
          <button
            onClick={() => openBooking()}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-rosewood-900 font-bold text-lg border border-rosewood-200 hover:border-rosewood-300 hover:bg-white/70 transition-colors"
          >
            <CalendarCheck className="w-5 h-5" />
            Book an appointment
          </button>
        </div>

        <p className="mt-10 text-sm text-rosewood-900/60">
          Or call the clinic directly —{' '}
          <a href={`tel:${CLINIC.phoneHref}`} className="inline-flex items-center gap-1.5 font-semibold text-rosewood-700 hover:underline">
            <PhoneCall className="w-3.5 h-3.5" />
            {CLINIC.phone}
          </a>
        </p>

        <div className="mt-14 flex justify-center">
          <ToothRow />
        </div>
      </div>
    </section>
  );
}