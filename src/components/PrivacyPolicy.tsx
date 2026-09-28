import { useEffect } from 'react';
import { CLINIC } from '../config';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
      <h1 className="font-display text-4xl lg:text-5xl text-ink mb-8">Privacy Policy</h1>
      <div className="space-y-6 text-ink/75">
        <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>

        <h2 className="text-xl font-bold text-ink mt-8 mb-4">1. Information We Collect</h2>
        <p>At {CLINIC.name}, we collect personal information such as your name, contact details, and dental health history to provide you with tailored care at our {CLINIC.city}, {CLINIC.state} clinic.</p>

        <h2 className="text-xl font-bold text-ink mt-8 mb-4">2. How We Use Your Information</h2>
        <p>We use the information collected to schedule appointments, maintain your dental records, coordinate treatment with your dentist, and keep you informed about your care. Your data is used to deliver a secure and personal dental care experience.</p>

        <h2 className="text-xl font-bold text-ink mt-8 mb-4">3. Data Security and Sharing</h2>
        <p>We implement robust security measures to protect your personal and medical information. We do not sell your personal data. Information is only shared with the dental professionals at {CLINIC.name} as necessary to provide your care.</p>

        <h2 className="text-xl font-bold text-ink mt-8 mb-4">4. Your Rights</h2>
        <p>You have the right to access, correct, or request the deletion of your personal data at any time. You can manage your preferences by contacting our clinic directly.</p>
      </div>
    </div>
  );
}