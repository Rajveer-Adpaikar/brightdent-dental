import { useEffect, useState, type FormEvent } from 'react';
import { X, Check, PhoneCall, CalendarCheck, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CLINIC } from '../config';
import { waLink } from '../lib';

type Preset = { dentist?: string; service?: string };

const SELECT_CLS =
  'w-full rounded-lg border border-cobalt-200 bg-white px-3.5 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-marigold-500/60';
const INPUT_CLS =
  'w-full rounded-lg border border-cobalt-200 bg-white px-3.5 py-3 text-sm text-ink placeholder:text-cobalt-400/80 focus:outline-none focus:ring-2 focus:ring-marigold-500/60';

function label(c: string) {
  return c.replace(/\s*\(.*/, ''); // drop "Endodontist / Root Canal Specialist"
}

// Next 7 booking days, excluding Sunday (clinic closed for bookings).
function nextDays(count: number) {
  const days: { date: string; weekday: string }[] = [];
  const d = new Date();
  d.setDate(d.getDate() + 1);
  while (days.length < count) {
    if (d.getDay() !== 0) {
      days.push({
        date: d.toISOString().slice(0, 10),
        weekday: d.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' }),
      });
    }
    d.setDate(d.getDate() + 1);
  }
  return days;
}

export function BookingModal({
  open,
  onClose,
  preset,
  openEnquiry,
}: {
  open: boolean;
  onClose: () => void;
  preset?: Preset;
  openEnquiry: () => void;
}) {
  const days = nextDays(7);
  const [dentist, setDentist] = useState<string>('');
  const [service, setService] = useState<string>('');
  const [date, setDate] = useState<string>(''); // ISO date
  const [time, setTime] = useState<string>('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState('');

  // Populate presets + focus-first-field when the modal opens.
  useEffect(() => {
    if (!open) return;
    setDentist(preset?.dentist ?? '');
    setService(preset?.service ?? '');
    setDate('');
    setTime('');
    setName('');
    setPhone('');
    setSent(false);
    setErr('');
  }, [open, preset]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || phone.trim().length < 7) {
      setErr('Please add your name and a phone number so we can confirm.');
      return;
    }
    const d = days.find((x) => x.date === date);
    const fmtD = d ? `${d.weekday}` : date;
    const msg =
      `New booking request%0A` +
      `%0A` +
      `• Patient: ${encodeURIComponent(name.trim())}%0A` +
      `• Phone: ${encodeURIComponent(phone.trim())}%0A` +
      `• Dentist: ${encodeURIComponent(dentist || 'Any available')}%0A` +
      `• Service: ${encodeURIComponent(service || '—')}%0A` +
      `• Date: ${encodeURIComponent(fmtD)}%0A` +
      `• Time: ${encodeURIComponent(time || 'Any')}%0A` +
      `%0A` +
      `(Sent from the BrightDent website — please confirm.)`;
    window.location.href = waLink(CLINIC.whatsapp, msg.replace(/%0A/g, '\n'));
    setSent(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-ink/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="relative bg-plaster rounded-xl shadow-2xl w-full max-w-2xl my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ticket header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-cobalt-100">
              <div>
                <p className="font-data text-[10px] uppercase tracking-[0.3em] text-cobalt-500">Appointment request · No fees held</p>
                <h3 className="font-display text-xl text-ink">Request a seat</h3>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-md bg-white border border-cobalt-100 flex items-center justify-center text-ink/70 hover:bg-cobalt-50 transition-colors"
                aria-label="Close booking"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {sent ? (
              <div className="px-6 py-14 text-center">
                <div className="w-12 h-12 rounded-full bg-marigold-100 text-marigold-700 flex items-center justify-center mx-auto mb-5">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-display text-2xl text-ink mb-2">Request sent</h4>
                <p className="text-ink/70 text-sm max-w-sm mx-auto leading-relaxed">
                  WhatsApp is opening with your booking details pre-filled — just hit send there and our desk will confirm a time for you. Clinic hours are online below.
                </p>
                <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={waLink(CLINIC.whatsapp, 'Hello BrightDent — following up on my booking request.')}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-cobalt-700 text-plaster text-sm font-semibold hover:bg-cobalt-600 transition-colors"
                  >
                    Need help? Chat on WhatsApp
                  </a>
                  <button
                    onClick={onClose}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white border border-cobalt-200 text-ink text-sm font-semibold hover:bg-cobalt-50 transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} className="px-6 py-6 space-y-5" noValidate>
                {/* Dentist */}
                <div>
                  <label className="block font-data text-[11px] uppercase tracking-[0.2em] text-cobalt-500 mb-2" htmlFor="bk-dentist">
                    Dentist <span className="text-cobalt-300">(optional)</span>
                  </label>
                  <select id="bk-dentist" value={dentist} onChange={(e) => setDentist(e.target.value)} className={SELECT_CLS}>
                    <option value="">Any available specialist</option>
                    {CLINIC.dentists.map((d) => (
                      <option key={d.name} value={d.name}>
                        {d.name} — {label(d.specialty)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Service */}
                <div>
                  <label className="block font-data text-[11px] uppercase tracking-[0.2em] text-cobalt-500 mb-2" htmlFor="bk-service">
                    Treatment
                  </label>
                  <select id="bk-service" value={service} onChange={(e) => setService(e.target.value)} className={SELECT_CLS}>
                    <option value="">I’m not sure yet — advise me</option>
                    {CLINIC.services.map((s) => (
                      <option key={s.index} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date + Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="block font-data text-[11px] uppercase tracking-[0.2em] text-cobalt-500 mb-2">Preferred date</span>
                    <div className="flex flex-wrap gap-1.5">
                      {days.map((d) => (
                        <button
                          type="button"
                          key={d.date}
                          onClick={() => setDate(d.date)}
                          aria-pressed={date === d.date}
                          className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-colors ${
                            date === d.date
                              ? 'bg-cobalt-700 text-plaster border-cobalt-700'
                              : 'bg-white text-cobalt-800 border-cobalt-200 hover:border-cobalt-400'
                          }`}
                        >
                          {d.weekday}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="block font-data text-[11px] uppercase tracking-[0.2em] text-cobalt-500 mb-2">Preferred time</span>
                    <div className="flex flex-wrap gap-1.5">
                      {['9 AM', '11 AM', '1 PM', '3 PM', '5 PM', '7 PM'].map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => setTime(t)}
                          aria-pressed={time === t}
                          className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-colors ${
                            time === t
                              ? 'bg-cobalt-700 text-plaster border-cobalt-700'
                              : 'bg-white text-cobalt-800 border-cobalt-200 hover:border-cobalt-400'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-data text-[11px] uppercase tracking-[0.2em] text-cobalt-500 mb-2" htmlFor="bk-name">
                      Your name
                    </label>
                    <input id="bk-name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Asha Kumar" className={INPUT_CLS} />
                  </div>
                  <div>
                    <label className="block font-data text-[11px] uppercase tracking-[0.2em] text-cobalt-500 mb-2" htmlFor="bk-phone">
                      Phone number
                    </label>
                    <input id="bk-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 …" className={INPUT_CLS} autoComplete="tel" />
                  </div>
                </div>

                {err && <p className="text-sm text-marigold-700 font-medium" role="alert">{err}</p>}

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-cobalt-700 text-plaster font-semibold text-sm hover:bg-cobalt-600 transition-colors"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    Send booking request
                  </button>
                  <button type="button" onClick={openEnquiry} className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-white border border-cobalt-200 text-ink font-semibold text-sm hover:bg-cobalt-50 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                    Ask about treatment cost
                  </button>
                  <p className="text-xs text-ink/60 sm:ml-auto">
                    Or call us — <a href={`tel:${CLINIC.phoneHref}`} className="inline-flex items-center gap-1 font-semibold text-cobalt-700 hover:underline"><PhoneCall className="w-3.5 h-3.5" />{CLINIC.phone}</a>
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}