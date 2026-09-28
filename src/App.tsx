import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BookingProvider } from './booking';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Dentists from './components/Dentists';
import Treatments from './components/Treatments';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Faq from './components/Faq';
import FindUs from './components/FindUs';
import Footer from './components/Footer';
import { WhatsAppFab } from './components/WhatsAppFab';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import HIPAA from './components/HIPAA';

function HomePage() {
  return (
    <main>
      <Hero />
      <WhyUs />
      <Dentists />
      <Treatments />
      <Gallery />
      <Reviews />
      <Faq />
      <FindUs />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <BookingProvider>
        <div className="min-h-screen bg-ivory font-sans text-rosewood-950 selection:bg-peach-400 selection:text-rosewood-950">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/hipaa" element={<HIPAA />} />
          </Routes>
          <Footer />
          <WhatsAppFab />
        </div>
      </BookingProvider>
    </BrowserRouter>
  );
}