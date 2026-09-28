import { createContext, useContext, useState, type ReactNode, useCallback } from 'react';
import { BookingModal } from './components/BookingModal';
import { EnquiryModal } from './components/EnquiryModal';

type BookingContextValue = {
  // Opens the appointment booking form. Optional presets fill the form.
  openBooking: (preset?: { dentist?: string; service?: string }) => void;
  // Opens the treatment-cost enquiry form.
  openEnquiry: () => void;
};

const BookingContext = createContext<BookingContextValue>({
  openBooking: () => {},
  openEnquiry: () => {},
});

export const useBooking = () => useContext(BookingContext);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [preset, setPreset] = useState<{ dentist?: string; service?: string } | undefined>();
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const openBooking = useCallback((p?: { dentist?: string; service?: string }) => {
    setPreset(p);
    setEnquiryOpen(false);
    setBookingOpen(true);
  }, []);

  const openEnquiry = useCallback(() => {
    setBookingOpen(false);
    setEnquiryOpen(true);
  }, []);

  return (
    <BookingContext.Provider value={{ openBooking, openEnquiry }}>
      {children}
      <BookingModal
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preset={preset}
        openEnquiry={openEnquiry}
      />
      <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </BookingContext.Provider>
  );
}