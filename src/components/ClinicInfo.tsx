import { motion } from 'motion/react';
import { CLINIC } from '../config';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function ClinicInfo() {
  const todayIndex = (new Date().getDay() + 6) % 7; // Monday=0

  return (
    <section id="clinic" className="py-24 lg:py-32 bg-pearl relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats band */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-pine-100 rounded-2xl overflow-hidden border border-pine-100 mb-20 lg:mb-28">
          {CLINIC.stats.map((stat) => (
            <div key={stat.label} className="bg-white px-6 py-8 lg:py-10 flex flex-col gap-1.5">
              <span className="font-data text-3xl lg:text-4xl text-pine-800">{stat.value}</span>
              <span className="text-xs lg:text-sm font-medium text-pine-900/60">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Clinic hours — a real table, not cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="lg:col-span-3"
          >
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-4 h-4 text-pine-600" />
              <h2 className="font-display text-3xl lg:text-4xl text-pine-950">Clinic hours</h2>
            </div>
            <p className="text-pine-900/65 mb-8 max-w-md">
              Walk-ins welcome during the day. Evenings reserved for appointments —
              call ahead and we'll keep a chair for you.
            </p>
            <table className="w-full border-collapse text-left">
              <tbody>
                {CLINIC.hours.map((row, idx) => {
                  const isToday = idx === todayIndex;
                  const isClosed = row.time === 'Closed';
                  return (
                    <tr
                      key={row.day}
                      className={`border-b last:border-b-0 ${
                        isToday ? 'border-gold-500/50' : 'border-pine-100'
                      }`}
                    >
                      <td className="py-3.5 pr-4">
                        <span className={`text-sm ${isToday ? 'font-bold text-pine-950' : 'text-pine-900/70'}`}>
                          {row.day}
                          {isToday && (
                            <span className="ml-2 inline-block font-data text-[10px] uppercase tracking-widest text-gold-600">
                              today
                            </span>
                          )}
                        </span>
                      </td>
                      <td className="py-3.5 text-right">
                        <span
                          className={`font-data text-sm ${
                            isClosed
                              ? 'text-pine-900/40'
                              : isToday
                                ? 'text-pine-800 font-semibold'
                                : 'text-pine-900/70'
                          }`}
                        >
                          {row.time}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </motion.div>

          {/* Address / contact */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.12, ease: 'easeOut' }}
            className="lg:col-span-2"
          >
            <div className="bg-pine-950 text-pearl rounded-2xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-4 h-4 text-gold-400" />
                <h2 className="font-display text-2xl text-pearl">Find the clinic</h2>
              </div>
              <address className="not-italic text-pearl/75 leading-relaxed mb-8">
                {CLINIC.address}
              </address>

              <dl className="space-y-5">
                <div>
                  <dt className="font-data text-[11px] uppercase tracking-widest text-pearl/45 mb-1.5">Phone</dt>
                  <dd>
                    <a href={`tel:${CLINIC.phoneHref}`} className="text-xl font-medium text-pearl hover:text-gold-400 transition-colors">
                      {CLINIC.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-data text-[11px] uppercase tracking-widest text-pearl/45 mb-1.5">Email</dt>
                  <dd>
                    <a href={`mailto:${CLINIC.email}`} className="text-lg text-pearl hover:text-gold-400 transition-colors break-all">
                      {CLINIC.email}
                    </a>
                  </dd>
                </div>
              </dl>

              <a
                href={`tel:${CLINIC.phoneHref}`}
                className="mt-10 inline-flex items-center gap-2 w-full justify-center px-6 py-4 rounded-full bg-gold-500 text-pine-950 font-bold hover:bg-gold-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call the clinic
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}