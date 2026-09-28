import { motion } from 'motion/react';
import { CLINIC } from '../config';
import { waLink } from '../lib';
import { Phone, MapPin, Clock, Mail, ExternalLink } from 'lucide-react';
import { WhatsAppIcon } from './icons';

export default function FindUs() {
  const todayIndex = (new Date().getDay() + 6) % 7; // Monday=0

  return (
    <section id="find-us" className="py-20 lg:py-28 bg-plaster relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14 lg:mb-16">
          <p className="font-data text-xs uppercase tracking-[0.28em] text-cobalt-500 mb-4">Find us</p>
          <h2 className="font-display text-4xl lg:text-6xl text-ink leading-[1.05]">
            Easy to find.
            <br />
            <em className="text-cobalt-600 not-italic">Easier to reach.</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="rounded-xl overflow-hidden border border-cobalt-100 shadow-lg"
          >
            <iframe
              title="Map to BrightDent Dental & Implant Studio, Panaji"
              src={CLINIC.mapsEmbed}
              className="w-full h-[420px] lg:h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>

          {/* Hours + contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-3 mb-5">
              <Clock className="w-4 h-4 text-cobalt-500" />
              <h3 className="font-display text-2xl text-ink">Clinic hours</h3>
            </div>
            <table className="w-full border-collapse text-left mb-10">
              <tbody>
                {CLINIC.hours.map((row, idx) => {
                  const isToday = idx === todayIndex;
                  return (
                    <tr key={row.day} className={`border-b last:border-b-0 ${isToday ? 'border-marigold-400/60' : 'border-cobalt-100'}`}>
                      <td className="py-3 pr-4">
                        <span className={`text-sm ${isToday ? 'font-bold text-ink' : 'text-ink/70'}`}>
                          {row.day}
                          {isToday && (
                            <span className="ml-2 inline-block font-data text-[10px] uppercase tracking-widest text-marigold-600">today</span>
                          )}
                        </span>
                      </td>
                      <td className="py-3 text-right">
                        <span className={`font-data text-sm ${isToday ? 'text-cobalt-800 font-semibold' : 'text-ink/70'}`}>
                          {row.time}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="bg-cobalt-950 text-plaster rounded-xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-5">
                <MapPin className="w-4 h-4 text-marigold-300" />
                <h3 className="font-display text-2xl text-plaster">Reach the clinic</h3>
              </div>
              <address className="not-italic text-plaster/75 leading-relaxed mb-8">
                {CLINIC.address}
              </address>

              <dl className="space-y-5">
                <div>
                  <dt className="font-data text-[11px] uppercase tracking-widest text-plaster/45 mb-1.5">Phone</dt>
                  <dd>
                    <a href={`tel:${CLINIC.phoneHref}`} className="text-xl font-medium text-plaster hover:text-marigold-300 transition-colors">
                      {CLINIC.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-data text-[11px] uppercase tracking-widest text-plaster/45 mb-1.5">Email</dt>
                  <dd>
                    <a href={`mailto:${CLINIC.email}`} className="text-lg text-plaster hover:text-marigold-300 transition-colors break-all">
                      {CLINIC.email}
                    </a>
                  </dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={waLink(CLINIC.whatsapp, 'Hello BrightDent — I’d like to talk about an appointment.')}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-marigold-500 text-ink font-bold hover:bg-marigold-400 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp the desk
                </a>
                <a
                  href={CLINIC.mapsDirections}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-cobalt-700 text-plaster font-semibold hover:bg-cobalt-600 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Get directions
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}