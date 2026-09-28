import { Twitter, Linkedin, Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useBooking } from '../booking';
import { CLINIC } from '../config';

export default function Footer() {
  const openBooking = useBooking();
  return (
    <footer className="bg-pine-950 text-pine-100/60 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top: brand + contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-12 border-b border-pine-800">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-5">
              <span className="relative flex h-10 w-10 items-center justify-center">
                <span className="smile-arch h-7 w-7 block rounded-t-full border-gold-500/70" aria-hidden="true" />
                <span className="absolute bottom-[15%] h-1.5 w-5 rounded-full bg-gold-400" aria-hidden="true" />
              </span>
              <span className="font-display text-2xl text-pearl">PearlSmile</span>
            </div>
            <p className="text-sm leading-relaxed">{CLINIC.tagline}</p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <a href={`tel:${CLINIC.phoneHref}`} className="inline-flex items-center gap-2 text-lg font-medium text-pearl/90 hover:text-gold-400 transition-colors">
              <Phone className="w-4 h-4" />
              {CLINIC.phone}
            </a>
            <a href={`mailto:${CLINIC.email}`} className="inline-flex items-center gap-2 text-pearl/70 hover:text-gold-400 transition-colors">
              <Mail className="w-4 h-4" />
              {CLINIC.email}
            </a>
            <p className="inline-flex items-start gap-2 text-sm text-pearl/55 leading-relaxed max-w-xs">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              {CLINIC.address}
            </p>
          </div>
        </div>

        {/* Middle: links + social */}
        <div className="py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold text-pearl mb-4 text-sm">Patients</h4>
            <ul className="space-y-1">
              <li><a href="#services" className="inline-block py-2 text-sm hover:text-gold-400 transition-colors">Services</a></li>
              <li><a href="#dentists" className="inline-block py-2 text-sm hover:text-gold-400 transition-colors">Our Dentists</a></li>
              <li><button onClick={openBooking} className="inline-block py-2 text-sm hover:text-gold-400 transition-colors">Book Appointment</button></li>
              <li><a href="#clinic" className="inline-block py-2 text-sm hover:text-gold-400 transition-colors">Clinic Hours</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-pearl mb-4 text-sm">Services</h4>
            <ul className="space-y-1">
              {CLINIC.services.map((s) => (
                <li key={s.num}>
                  <a href="#services" className="inline-block py-2 text-sm hover:text-gold-400 transition-colors">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-pearl mb-4 text-sm">Clinic</h4>
            <ul className="space-y-1">
              <li><a href={`tel:${CLINIC.phoneHref}`} className="inline-block py-2 text-sm hover:text-gold-400 transition-colors">Call us</a></li>
              <li><button onClick={openBooking} className="inline-block py-2 text-sm hover:text-gold-400 transition-colors">New patient?</button></li>
              <li><a href="#clinic" className="inline-block py-2 text-sm hover:text-gold-400 transition-colors">Find us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-pearl mb-4 text-sm">Follow</h4>
            <div className="flex gap-3">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="w-10 h-10 rounded-full bg-pine-800 border border-pine-700 flex items-center justify-center text-pine-100/60 hover:text-gold-400 hover:border-gold-500/50 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-pine-800 border border-pine-700 flex items-center justify-center text-pine-100/60 hover:text-gold-400 hover:border-gold-500/50 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-pine-800 border border-pine-700 flex items-center justify-center text-pine-100/60 hover:text-gold-400 hover:border-gold-500/50 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-pine-800 border border-pine-700 flex items-center justify-center text-pine-100/60 hover:text-gold-400 hover:border-gold-500/50 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-pine-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-pine-100/45">
            &copy; {new Date().getFullYear()} {CLINIC.name} &bull; {CLINIC.city}
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link to="/privacy-policy" className="py-2.5 text-pine-100/45 hover:text-gold-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="py-2.5 text-pine-100/45 hover:text-gold-400 transition-colors">Terms of Service</Link>
            <Link to="/hipaa" className="py-2.5 text-pine-100/45 hover:text-gold-400 transition-colors">HIPAA</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}