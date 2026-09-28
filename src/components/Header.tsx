import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useBooking } from '../booking';
import { CLINIC } from '../config';
import { Tooth, ToothyRow } from './Tooth';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const desktopLink = 'text-sm font-medium text-rosewood-800 hover:text-rosewood-600 transition-colors';
  const mobileLink = 'text-lg font-medium text-rosewood-950';

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-ivory/90 backdrop-blur-md shadow-sm py-2.5 border-b border-rosewood-100' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <span className="relative flex h-10 w-10 items-center justify-center">
            <Tooth className="w-7 h-8 text-rosewood-800 group-hover:text-rosewood-600 transition-colors" />
            <ToothyRow className="absolute -bottom-1" />
          </span>
          <span className="font-display font-semibold text-2xl leading-none mt-1 text-rosewood-950 group-hover:text-rosewood-700 transition-colors">
            IvoryCare
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
          <a href={`tel:${CLINIC.phoneHref}`} className="flex items-center gap-2 text-sm font-semibold text-rosewood-800 hover:text-rosewood-600 transition-colors">
            <Phone className="w-4 h-4" />
            {CLINIC.phone}
          </a>
          <button onClick={() => openBooking()} className="px-5 py-2.5 rounded-full bg-rosewood-800 text-ivory text-sm font-semibold hover:bg-rosewood-700 transition-colors shadow-md shadow-rosewood-900/10">
            Book appointment
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden p-2 -mr-2 text-rosewood-950"
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
            className="absolute top-full left-0 w-full bg-ivory border-b border-rosewood-100 shadow-xl md:hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              <a href="#why" className={mobileLink} onClick={() => setIsMobileMenuOpen(false)}>Why us</a>
              <a href="#dentists" className={mobileLink} onClick={() => setIsMobileMenuOpen(false)}>Our dentists</a>
              <a href="#treatments" className={mobileLink} onClick={() => setIsMobileMenuOpen(false)}>Treatments</a>
              <a href="#faq" className={mobileLink} onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
              <a href="#find-us" className={mobileLink} onClick={() => setIsMobileMenuOpen(false)}>Find us</a>
              <a href={`tel:${CLINIC.phoneHref}`} className="flex items-center gap-2 text-lg font-medium text-rosewood-800" onClick={() => setIsMobileMenuOpen(false)}>
                <Phone className="w-5 h-5" />
                {CLINIC.phone}
              </a>
              <hr className="border-rosewood-100 my-2" />
              <button
                onClick={() => { setIsMobileMenuOpen(false); openBooking(); }}
                className="w-full text-center py-3 rounded-xl text-lg font-semibold text-ivory bg-rosewood-800 shadow-md shadow-rosewood-900/10"
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