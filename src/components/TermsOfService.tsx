import { useEffect } from 'react';
import { CLINIC } from '../config';

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
      <h1 className="font-display text-4xl lg:text-5xl text-pine-950 mb-8">Terms of Service</h1>
      <div className="prose prose-slate max-w-none text-pine-900/75 space-y-6">
        <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>

        <h2 className="text-xl font-bold text-pine-950 mt-8 mb-4">1. Acceptance of Terms</h2>
        <p>By accessing or using {CLINIC.name}, you agree to be bound by these Terms of Service. Our clinic provides general, restorative, cosmetic, and specialised dental care from our Panaji, Goa practice.</p>

        <h2 className="text-xl font-bold text-pine-950 mt-8 mb-4">2. Medical Disclaimer</h2>
        <p>Information on this website is provided for general guidance and does not replace professional medical advice, diagnosis, or treatment by a qualified dental professional. Always seek the advice of your dentist with any questions you may have regarding a medical condition.</p>

        <h2 className="text-xl font-bold text-pine-950 mt-8 mb-4">3. User Responsibilities</h2>
        <p>You agree to provide accurate and complete information when scheduling appointments and receiving care. You are responsible for arriving on time for your scheduled visits or notifying us if you need to cancel.</p>

        <h2 className="text-xl font-bold text-pine-950 mt-8 mb-4">4. Service Modifications</h2>
        <p>{CLINIC.name} reserves the right to modify clinic hours, services, or appointment availability with reasonable notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of services.</p>
      </div>
    </div>
  );
}