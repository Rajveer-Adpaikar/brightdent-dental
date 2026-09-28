import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, CalendarCheck, PhoneCall } from 'lucide-react';
import { useBooking } from '../booking';
import { CLINIC } from '../config';
import { Smile, SmileRow } from './Smile';

export default function NotFound() {
  const { openBooking } = useBooking();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative pt-40 pb-28 overflow-hidden bg-oat">
      {/* Warm amber wash */}
      <div
        aria-hidden="true"
        className="absolute top-[-20%] right-[-10%] w-[46vw] h-[46vw] max-w-[600px] max-h-[600px] rounded-full bg-amber-50 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vw] max-w-[520px] max-h-[520px] rounded-full bg-amber-100/50 blur-3xl pointer-events-none"
      />

      <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
        <div className="flex justify-center mb-7">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500 text-ink shadow-lg shadow-amber-600/20">
            <Smile className="w-8 h-6" />
          </span>
        </div>

        <p className="font-data text-xs uppercase tracking-[0.3em] text-amber-500 mb-5">
          Dental &amp; Implant Studio · Panaji · 404
        </p>

        <h1 className="font-display text-7xl lg:text-8xl text-ink leading-[0.95] mb-6">
          This page
          <br />
          <span className="text-amber-600 not-italic">isn&rsquo;t on file.</span>
        </h1>

        <p className="text-lg text-ink/70 leading-relaxed max-w-md mx-auto mb-10">
          The page you&rsquo;re looking for isn&rsquo;t on file at the clinic. It may have moved,
          or the link may have a typo — let&rsquo;s get you back to the right chair.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-amber-500 text-ink font-bold text-lg hover:bg-amber-500 transition-colors"
          >
            <Home className="w-5 h-5" />
            Back to home
          </Link>
          <button
            onClick={() => openBooking()}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white text-ink font-bold text-lg border border-amber-200 hover:border-amber-300 hover:bg-amber-50 transition-colors"
          >
            <CalendarCheck className="w-5 h-5" />
            Book an appointment
          </button>
        </div>

        <p className="mt-10 text-sm text-ink/60">
          Or call the clinic directly —{' '}
          <a href={`tel:${CLINIC.phoneHref}`} className="inline-flex items-center gap-1.5 font-semibold text-amber-700 hover:underline">
            <PhoneCall className="w-3.5 h-3.5" />
            {CLINIC.phone}
          </a>
        </p>

        <div className="mt-14 flex justify-center">
          <SmileRow />
        </div>
      </div>
    </section>
  );
}