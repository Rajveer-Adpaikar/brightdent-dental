import { useEffect, useState, type FormEvent } from 'react';
import { X, ArrowRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CLINIC } from '../config';
import { waLink } from '../lib';

const INPUT_CLS =
  'w-full rounded-lg border border-cobalt-200 bg-white px-3.5 py-3 text-sm text-ink placeholder:text-cobalt-400/80 focus:outline-none focus:ring-2 focus:ring-marigold-500/60';
const LABEL_CLS =
  'block font-data text-[11px] uppercase tracking-[0.2em] text-cobalt-500 mb-2';

export function EnquiryModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [treatment, setTreatment] = useState('');
  const [question, setQuestion] = useState('');
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState('');

  useEffect(() => {
    if (!open) return;
    setName('');
    setPhone('');
    setTreatment('');
    setQuestion('');
    setSent(false);
    setErr('');
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || phone.trim().length < 7) {
      setErr('Please add your name and phone number so we can reach you.');
      return;
    }
    const msg =
      `Hi BrightDent — I'd like a written estimate for treatment.%0A%0A` +
      `• Name: ${encodeURIComponent(name.trim())}%0A` +
      `• Phone: ${encodeURIComponent(phone.trim())}%0A` +
      `• Treatment: ${encodeURIComponent(treatment || 'Not sure yet')}%0A` +
      `• My question: ${encodeURIComponent(question.trim() || '—')}`;
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
            className="relative bg-plaster rounded-xl shadow-2xl w-full max-w-lg my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-cobalt-100">
              <div>
                <p className="font-data text-[10px] uppercase tracking-[0.3em] text-cobalt-500">Treatment cost guidance</p>
                <h3 className="font-display text-xl text-ink">Get a written estimate</h3>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-md bg-white border border-cobalt-100 flex items-center justify-center text-ink/70 hover:bg-cobalt-50 transition-colors"
                aria-label="Close enquiry"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {sent ? (
              <div className="px-6 py-14 text-center">
                <div className="w-12 h-12 rounded-full bg-marigold-100 text-marigold-700 flex items-center justify-center mx-auto mb-5">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-display text-2xl text-ink mb-2">Estimate request on its way</h4>
                <p className="text-ink/70 text-sm max-w-sm mx-auto leading-relaxed">
                  WhatsApp is opening with your details — press send and our desk will come back with a written, item-by-item estimate after a quick consult.
                </p>
                <button
                  onClick={onClose}
                  className="mt-7 inline-flex items-center justify-center px-8 py-3 rounded-md bg-cobalt-700 text-plaster text-sm font-semibold hover:bg-cobalt-600 transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="px-6 py-6 space-y-5" noValidate>
                <p className="text-sm text-ink/70 leading-relaxed -mt-1">
                  We don’t quote fixed prices over the counter — every plan is written for your case.
                  Tell us what you’re considering and we’ll come back with an estimate.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={LABEL_CLS} htmlFor="eq-name">Your name</label>
                    <input id="eq-name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Asha Kumar" className={INPUT_CLS} />
                  </div>
                  <div>
                    <label className={LABEL_CLS} htmlFor="eq-phone">Phone number</label>
                    <input id="eq-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 …" className={INPUT_CLS} autoComplete="tel" />
                  </div>
                </div>
                <div>
                  <label className={LABEL_CLS} htmlFor="eq-treatment">Which treatment?</label>
                  <select id="eq-treatment" value={treatment} onChange={(e) => setTreatment(e.target.value)} className={INPUT_CLS}>
                    <option value="">Not sure yet — advise me</option>
                    {CLINIC.services.map((s) => (
                      <option key={s.index} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={LABEL_CLS} htmlFor="eq-question">Anything else?</label>
                  <textarea id="eq-question" value={question} onChange={(e) => setQuestion(e.target.value)} rows={3} placeholder="e.g. I need two implants before December…" className={INPUT_CLS} />
                </div>
                {err && <p className="text-sm text-marigold-700 font-medium" role="alert">{err}</p>}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-cobalt-700 text-plaster font-semibold text-sm hover:bg-cobalt-600 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                  Send estimate request
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}