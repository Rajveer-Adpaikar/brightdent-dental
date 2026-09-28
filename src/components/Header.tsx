import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useBooking } from '../booking';
import { CLINIC } from '../config';
import { Arch, ArchRow } from './Arch';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const desktopLink = 'text-sm font-medium text-cobalt-800 hover:text-cobalt-600 transition-colors';
  const mobileLink = 'text-lg font-medium text-ink';

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-plaster/90 backdrop-blur-md shadow-sm py-2.5 border-b border-cobalt-100' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <span className="relative flex h-10 w-10 items-center justify-center">
            <Arch className="w-8 h-9 text-cobalt-600 group-hover:text-cobalt-500 transition-colors" />
            <ArchRow className="absolute -bottom-0.5 scale-75" />
          </span>
          <span className="font-display font-bold text-2xl leading-none tracking-tight text-ink group-hover:text-cobalt-700 transition-colors">
            BrightDent
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#why" className={desktopLink}>Why us</a>
          <a href="#dentists" className={desktopLink}>Our dentists</a>
          <a href="#treatments" className={desktopLink}>Treatments</a>
          <a href="#faq" className={desktopLink}>FAQ</a>
          <a href="#find-us" className={desktopLink}>Find us</a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a href={`tel:${CLINIC.phoneHref}`} className="flex items-center gap-2 text-sm font-semibold text-cobalt-800 hover:text-cobalt-600 transition-colors">
            <Phone className="w-4 h-4" />
            {CLINIC.phone}
          </a>
          <button onClick={() => openBooking()} className="px-5 py-2.5 rounded-md bg-cobalt-700 text-plaster text-sm font-semibold hover:bg-cobalt-600 transition-colors shadow-md shadow-ink/10">
            Book appointment
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden p-2 -mr-2 text-ink"
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
            className="absolute top-full left-0 w-full bg-plaster border-b border-cobalt-100 shadow-xl md:hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              <a href="#why" className={mobileLink} onClick={() => setIsMobileMenuOpen(false)}>Why us</a>
              <a href="#dentists" className={mobileLink} onClick={() => setIsMobileMenuOpen(false)}>Our dentists</a>
              <a href="#treatments" className={mobileLink} onClick={() => setIsMobileMenuOpen(false)}>Treatments</a>
              <a href="#faq" className={mobileLink} onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
              <a href="#find-us" className={mobileLink} onClick={() => setIsMobileMenuOpen(false)}>Find us</a>
              <a href={`tel:${CLINIC.phoneHref}`} className="flex items-center gap-2 text-lg font-medium text-cobalt-800" onClick={() => setIsMobileMenuOpen(false)}>
                <Phone className="w-5 h-5" />
                {CLINIC.phone}
              </a>
              <hr className="border-cobalt-100 my-2" />
              <button
                onClick={() => { setIsMobileMenuOpen(false); openBooking(); }}
                className="w-full text-center py-3 rounded-md text-lg font-semibold text-plaster bg-cobalt-700 shadow-md shadow-ink/10"
              >
                Book appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}