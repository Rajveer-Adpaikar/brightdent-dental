import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useBooking } from '../booking';
import { CLINIC } from '../config';
import { Smile, SmileRow } from './Smile';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const desktopLink = 'text-sm font-medium text-ink/70 hover:text-amber-600 transition-colors';
  const mobileLink = 'text-lg font-medium text-ink';

  return (
    <>
      {/* Slim top utility bar */}
      <div className="fixed top-0 inset-x-0 z-50 bg-ink text-oat/85 text-xs h-9 flex items-center px-6">
        <div className="max-w-7xl w-full mx-auto flex items-center justify-between gap-4">
          <p className="font-data tracking-wide truncate">
            {CLINIC.addressShort}
          </p>
          <a href={`tel:${CLINIC.phoneHref}`} className="hidden sm:inline-flex items-center gap-1.5 font-semibold text-oat hover:text-amber-300 transition-colors shrink-0">
            <Phone className="w-3 h-3" />
            {CLINIC.phone}
          </a>
        </div>
      </div>

      <header
        className={`fixed top-9 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-oat/90 backdrop-blur-md shadow-sm py-2.5 border-b border-amber-100' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="relative flex h-9 w-9 items-center justify-center bg-amber-500 text-ink rounded-lg group-hover:bg-amber-500 transition-colors">
              <Smile className="w-5 h-4" />
            </span>
            <span className="inline-flex flex-col leading-none">
              <span className="font-display font-bold text-xl tracking-tight text-ink group-hover:text-amber-700 transition-colors">
                BrightDent
              </span>
              <span className="font-data text-[9px] uppercase tracking-[0.22em] text-ink/50 mt-0.5">
                Dental &amp; Implant
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#why" className={desktopLink}>Why us</a>
            <a href="#dentists" className={desktopLink}>Our dentists</a>
            <a href="#treatments" className={desktopLink}>Treatments</a>
            <a href="#faq" className={desktopLink}>FAQ</a>
            <a href="#find-us" className={desktopLink}>Find us</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${CLINIC.phoneHref}`} className="flex items-center gap-2 text-sm font-semibold text-ink/70 hover:text-amber-600 transition-colors">
              <Phone className="w-4 h-4" />
              {CLINIC.phone}
            </a>
            <button onClick={() => openBooking()} className="px-5 py-2.5 rounded-lg bg-amber-500 text-ink text-sm font-semibold hover:bg-amber-500 transition-colors shadow-md shadow-amber-600/20">
              Book appointment
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden p-2 -mr-2 text-ink"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 w-full bg-oat border-b border-amber-100 shadow-xl lg:hidden"
            >
              <div className="p-6 flex flex-col gap-4">
                <a href="#why" className={mobileLink} onClick={() => setIsMobileMenuOpen(false)}>Why us</a>
                <a href="#dentists" className={mobileLink} onClick={() => setIsMobileMenuOpen(false)}>Our dentists</a>
                <a href="#treatments" className={mobileLink} onClick={() => setIsMobileMenuOpen(false)}>Treatments</a>
                <a href="#faq" className={mobileLink} onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
                <a href="#find-us" className={mobileLink} onClick={() => setIsMobileMenuOpen(false)}>Find us</a>
                <a href={`tel:${CLINIC.phoneHref}`} className="flex items-center gap-2 text-lg font-medium text-ink/70" onClick={() => setIsMobileMenuOpen(false)}>
                  <Phone className="w-5 h-5" />
                  {CLINIC.phone}
                </a>
                <hr className="border-amber-100 my-2" />
                <button
                  onClick={() => { setIsMobileMenuOpen(false); openBooking(); }}
                  className="w-full text-center py-3 rounded-lg text-lg font-semibold text-ink bg-amber-500 shadow-md shadow-amber-600/20"
                >
                  Book appointment
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer so content clears the stacked bars */}
      <div aria-hidden="true" className="h-24 lg:h-[4.5rem]" />
    </>
  );
}