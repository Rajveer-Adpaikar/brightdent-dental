import { motion } from 'motion/react';
import { CLINIC } from '../config';
import { waLink } from '../lib';
import { Phone, MapPin, Clock, Mail, ExternalLink } from 'lucide-react';
import { WhatsAppIcon } from './icons';

export default function FindUs() {
  const todayIndex = (new Date().getDay() + 6) % 7; // Monday=0

  return (
    <section id="find-us" className="py-20 lg:py-28 bg-oat">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-12 lg:mb-14">
          <p className="font-data text-xs uppercase tracking-[0.28em] text-amber-500 mb-4">Find us</p>
          <h2 className="font-display text-4xl lg:text-5xl text-ink leading-[1.05]">
            Easy to find.
            <br />
            <span className="text-amber-600 not-italic">Easier to reach.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="rounded-2xl overflow-hidden border border-amber-100 shadow-lg"
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
              <Clock className="w-4 h-4 text-amber-600" />
              <h3 className="font-display text-2xl text-ink">Clinic hours</h3>
            </div>
            <table className="w-full border-collapse text-left mb-10">
              <tbody>
                {CLINIC.hours.map((row, idx) => {
                  const isToday = idx === todayIndex;
                  return (
                    <tr key={row.day} className={`border-b last:border-b-0 ${isToday ? 'border-amber-400/60' : 'border-amber-100'}`}>
                      <td className="py-3 pr-4">
                        <span className={`text-sm ${isToday ? 'font-bold text-ink' : 'text-ink/70'}`}>
                          {row.day}
                          {isToday && (
                            <span className="ml-2 inline-block font-data text-[10px] uppercase tracking-widest text-amber-600">today</span>
                          )}
                        </span>
                      </td>
                      <td className="py-3 text-right">
                        <span className={`font-data text-sm ${isToday ? 'text-amber-700 font-semibold' : 'text-ink/70'}`}>
                          {row.time}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="bg-ink text-oat rounded-2xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-5">
                <MapPin className="w-4 h-4 text-amber-300" />
                <h3 className="font-display text-2xl text-oat">Reach the clinic</h3>
              </div>
              <address className="not-italic text-oat/70 leading-relaxed mb-8">
                {CLINIC.address}
              </address>

              <dl className="space-y-5">
                <div>
                  <dt className="font-data text-[11px] uppercase tracking-widest text-oat/45 mb-1.5">Phone</dt>
                  <dd>
                    <a href={`tel:${CLINIC.phoneHref}`} className="text-xl font-medium text-oat hover:text-amber-300 transition-colors">
                      {CLINIC.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-data text-[11px] uppercase tracking-widest text-oat/45 mb-1.5">Email</dt>
                  <dd>
                    <a href={`mailto:${CLINIC.email}`} className="text-lg text-oat hover:text-amber-300 transition-colors break-all">
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
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#25D366] text-ink font-bold hover:opacity-90 transition-opacity"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp the desk
                </a>
                <a
                  href={CLINIC.mapsDirections}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-oat text-ink font-semibold border border-oat/30 hover:bg-oat/10 transition-colors"
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