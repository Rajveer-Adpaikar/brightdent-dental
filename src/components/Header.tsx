import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useBooking } from '../booking';
import { CLINIC } from '../config';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const openBooking = useBooking();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-pearl/90 backdrop-blur-md shadow-sm py-2.5 border-b border-pine-100'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo — pearl-smile monogram */}
        <Link to="/" className="flex items-center gap-3 group">
          <span className="relative flex h-10 w-10 items-center justify-center">
            <span className="smile-arch h-7 w-7 block rounded-t-full" aria-hidden="true" />
            <span className="absolute bottom-[15%] h-1.5 w-5 rounded-full bg-pine-800" aria-hidden="true" />
          </span>
          <span className="font-display text-2xl text-pine-950 group-hover:text-pine-700 transition-colors">
            PearlSmile
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-pine-800 hover:text-pine-600 transition-colors">Services</a>
          <a href="#dentists" className="text-sm font-medium text-pine-800 hover:text-pine-600 transition-colors">Our Dentists</a>
          <a href="#clinic" className="text-sm font-medium text-pine-800 hover:text-pine-600 transition-colors">Visit Us</a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-5">
          <a href={`tel:${CLINIC.phoneHref}`} className="flex items-center gap-2 text-sm font-semibold text-pine-800 hover:text-pine-600 transition-colors">
            <Phone className="w-4 h-4" />
            {CLINIC.phone}
          </a>
          <button onClick={openBooking} className="px-6 py-2.5 rounded-full bg-pine-800 text-pearl text-sm font-semibold hover:bg-pine-700 transition-colors shadow-md shadow-pine-900/10">
            Book Appointment
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden p-2 -mr-2 text-pine-950"
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
            className="absolute top-full left-0 w-full bg-pearl border-b border-pine-100 shadow-xl md:hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              <a href="#services" className="text-lg font-medium text-pine-950" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
              <a href="#dentists" className="text-lg font-medium text-pine-950" onClick={() => setIsMobileMenuOpen(false)}>Our Dentists</a>
              <a href="#clinic" className="text-lg font-medium text-pine-950" onClick={() => setIsMobileMenuOpen(false)}>Visit Us</a>
              <a href={`tel:${CLINIC.phoneHref}`} className="flex items-center gap-2 text-lg font-medium text-pine-800" onClick={() => setIsMobileMenuOpen(false)}>
                <Phone className="w-5 h-5" />
                {CLINIC.phone}
              </a>
              <hr className="border-pine-100 my-2" />
              <button onClick={() => { setIsMobileMenuOpen(false); openBooking(); }} className="w-full text-center py-3 text-lg font-medium text-pearl bg-pine-800 rounded-xl shadow-md shadow-pine-900/10">
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}