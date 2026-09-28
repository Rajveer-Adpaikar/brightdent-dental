import { useEffect } from 'react';
import { CLINIC } from '../config';

export default function HIPAA() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
      <h1 className="font-display text-4xl lg:text-5xl text-ink mb-8">HIPAA Notice of Privacy Practices</h1>
      <div className="space-y-6 text-ink/75">
        <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
        <p className="font-semibold italic bg-coral-50 p-4 rounded-lg">THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.</p>

        <h2 className="text-xl font-bold text-ink mt-8 mb-4">1. Our Commitment to Your Privacy</h2>
        <p>{CLINIC.name} is fully compliant with the Health Insurance Portability and Accountability Act (HIPAA). We understand that medical information about you and your health is personal, and we are committed to protecting it. We create a record of the care and services you receive to provide you with quality care and to comply with legal requirements.</p>

        <h2 className="text-xl font-bold text-ink mt-8 mb-4">2. How We May Use and Disclose Health Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>For Treatment:</strong> We may use health information about you to provide, coordinate, or manage your dental treatment and related services.</li>
          <li><strong>For Payment:</strong> We may use and disclose your health information so that the treatment and services you receive may be billed to and payment may be collected from you, an insurance company, or a third party.</li>
          <li><strong>For Health Care Operations:</strong> We may use and disclose your health information for our business operations, which are necessary to run {CLINIC.name} and make sure all our patients receive quality care.</li>
        </ul>
      </div>
    </div>
  );
}