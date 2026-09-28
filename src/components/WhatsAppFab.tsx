import { motion } from 'motion/react';
import { CLINIC } from '../config';
import { waLink } from '../lib';
import { WhatsAppIcon } from './icons';

// Floating WhatsApp action button — always one tap from a human.
export function WhatsAppFab() {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.4, ease: 'easeOut' }}
      href={waLink(CLINIC.whatsapp, 'Hello BrightDent — I found you online.')}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with BrightDent on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-black/20 hover:scale-105 active:scale-95 transition-transform"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </motion.a>
  );
}