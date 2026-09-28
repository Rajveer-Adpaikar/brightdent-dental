import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useBooking } from '../booking';
import { CLINIC } from '../config';
import { Smile } from './Smile';

export default function Footer() {
  const { openBooking } = useBooking();
  return (
    <footer className="bg-ink text-oat/60 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top: brand + contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-12 border-b border-oat/10">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="flex h-8 w-8 items-center justify-center bg-amber-500 text-ink rounded-lg">
                <Smile className="w-5 h-4" />
              </span>
              <span className="font-display font-bold text-2xl tracking-tight text-oat">BrightDent</span>
            </div>
            <p className="text-sm leading-relaxed">{CLINIC.tagline}</p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <a href={`tel:${CLINIC.phoneHref}`} className="inline-flex items-center gap-2 text-lg font-medium text-oat/90 hover:text-amber-300 transition-colors">
              <Phone className="w-4 h-4" />
              {CLINIC.phone}
            </a>
            <a href={`mailto:${CLINIC.email}`} className="inline-flex items-center gap-2 text-oat/70 hover:text-amber-300 transition-colors">
              <Mail className="w-4 h-4" />
              {CLINIC.email}
            </a>
            <p className="inline-flex items-start gap-2 text-sm text-oat/55 leading-relaxed max-w-xs">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              {CLINIC.address}
            </p>
          </div>
        </div>

        {/* Middle: links */}
        <div className="py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold text-oat mb-4 text-sm">Patients</h4>
            <ul className="space-y-1">
              <li><a href="#why" className="inline-block py-2 text-sm hover:text-amber-300 transition-colors">Why us</a></li>
              <li><a href="#dentists" className="inline-block py-2 text-sm hover:text-amber-300 transition-colors">Our dentists</a></li>
              <li><button onClick={() => openBooking()} className="inline-block py-2 text-sm hover:text-amber-300 transition-colors">Book appointment</button></li>
              <li><a href="#faq" className="inline-block py-2 text-sm hover:text-amber-300 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-oat mb-4 text-sm">Treatments</h4>
            <ul className="space-y-1">
              {CLINIC.services.map((s) => (
                <li key={s.index}>
                  <a href="#treatments" className="inline-block py-2 text-sm hover:text-amber-300 transition-colors">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-oat mb-4 text-sm">Clinic</h4>
            <ul className="space-y-1">
              <li><a href={`tel:${CLINIC.phoneHref}`} className="inline-block py-2 text-sm hover:text-amber-300 transition-colors">Call us</a></li>
              <li><button onClick={() => openBooking()} className="inline-block py-2 text-sm hover:text-amber-300 transition-colors">New patient?</button></li>
              <li><a href="#find-us" className="inline-block py-2 text-sm hover:text-amber-300 transition-colors">Find us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-oat mb-4 text-sm">Legal</h4>
            <ul className="space-y-1">
              <li><Link to="/privacy-policy" className="inline-block py-2 text-sm hover:text-amber-300 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="inline-block py-2 text-sm hover:text-amber-300 transition-colors">Terms of Service</Link></li>
              <li><Link to="/hipaa" className="inline-block py-2 text-sm hover:text-amber-300 transition-colors">HIPAA</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-oat/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-oat/40">
            &copy; {new Date().getFullYear()} {CLINIC.name} &bull; {CLINIC.city}, {CLINIC.state} &bull; Demo site — all details fictional
          </p>
        </div>
      </div>
    </footer>
  );
}