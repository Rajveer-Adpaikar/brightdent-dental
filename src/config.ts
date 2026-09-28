// Single source of truth for clinic + booking details.
// All data is fictional demo data (BrightDent_Dental_Demo_Data.pdf).
// WhatsApp number digits only, e.g. '918322786419' → wa.me/918322786419
export const CLINIC = {
  name: "BrightDent Dental & Implant Studio",
  shortName: "BrightDent",
  tagline: "Modern Dentistry. Healthier Smiles.",
  address: "1st Floor, Lotus Business Plaza, 42 18th June Road, Panaji, Goa – 403001, India",
  addressShort: "1st Floor, Lotus Business Plaza, 18th June Road",
  city: "Panaji", // "Goa" is the state
  state: "Goa",
  phone: "+91 832 278 6419",
  phoneHref: "+918322786419",
  whatsapp: "918322786419",
  email: "hello@brightdent.example",
  mapsEmbed: 'https://maps.google.com/maps?q=42%2018th%20June%20Road%2C%20Panaji%2C%20Goa%20403001&t=&z=15&ie=UTF8&iwloc=&output=embed',
  mapsDirections: 'https://www.google.com/maps/dir/?api=1&destination=42+18th+June+Road,+Panaji,+Goa+403001',
  hours: [
    { day: "Monday", time: "9:00 AM – 8:00 PM" },
    { day: "Tuesday", time: "9:00 AM – 8:00 PM" },
    { day: "Wednesday", time: "9:00 AM – 8:00 PM" },
    { day: "Thursday", time: "9:00 AM – 8:00 PM" },
    { day: "Friday", time: "9:00 AM – 8:00 PM" },
    { day: "Saturday", time: "9:00 AM – 5:00 PM" },
    { day: "Sunday", time: "10:00 AM – 2:00 PM" },
  ],
  dentists: [
    {
      initials: "NF",
      name: "Dr. Neil Fernandes",
      specialty: "Implantologist & Prosthodontist",
      qual: "BDS, MDS",
      experience: "13+ years",
      patients: "9,000+",
    },
    {
      initials: "KR",
      name: "Dr. Kavya Rao",
      specialty: "Endodontist / Root Canal Specialist",
      qual: "BDS, MDS",
      experience: "9+ years",
      patients: "6,500+",
    },
    {
      initials: "AD",
      name: "Dr. Arjun Desai",
      specialty: "General & Cosmetic Dentist",
      qual: "BDS",
      experience: "7+ years",
      patients: "4,200+",
    },
  ],
  services: [
    {
      index: "01",
      title: "General Dentistry",
      blurb: "Everyday care that keeps small issues from becoming big ones.",
      items: ["Dental Check-ups", "Teeth Cleaning & Polishing", "Cavity Fillings", "Tooth Extraction", "Gum Disease Treatment", "Dental X-rays"],
    },
    {
      index: "02",
      title: "Root Canal & Restorative",
      blurb: "Saving natural teeth with calm, precise endodontic care.",
      items: ["Root Canal Treatment", "Root Canal Re-treatment", "Dental Crowns", "Dental Bridges", "Dentures"],
    },
    {
      index: "03",
      title: "Implants",
      blurb: "Permanent, natural-feeling replacements — planned and placed in-house.",
      items: ["Dental Implants", "Implant Crowns", "Full-Mouth Rehabilitation", "Bone Grafting Consultation"],
    },
    {
      index: "04",
      title: "Cosmetic Dentistry",
      blurb: "Targeted refinements that change how your smile reads.",
      items: ["Dental Veneers", "Teeth Whitening", "Smile Makeovers", "Composite Bonding", "Cosmetic Contouring"],
    },
    {
      index: "05",
      title: "Other Care",
      blurb: "The trickier cases — handled gently, in-house.",
      items: ["Wisdom Tooth Removal", "Pediatric Dentistry", "Emergency Dental Care"],
    },
  ],
  stats: [
    { value: "13+", label: "Years of experience" },
    { value: "19,700+", label: "Patients treated" },
    { value: "28,000+", label: "Procedures completed" },
    { value: "3", label: "Specialists in-house" },
  ],
  reviews: [
    {
      quote: "I was nervous about getting a root canal, but the entire process was explained clearly and everything went smoothly. Excellent experience from start to finish.",
      name: "Riya M.",
      detail: "Root canal · Panaji",
    },
    {
      quote: "I visited BrightDent for a smile makeover and loved the result. The team was patient and explained every step. My smile looks completely different.",
      name: "Aditya K.",
      detail: "Smile makeover · Goa",
    },
    {
      quote: "The clinic was clean, the staff was helpful, and the dentist took the time to answer all my questions. Very professional and friendly.",
      name: "Sneha P.",
      detail: "General check-up · Taleigao",
    },
  ],
  faqs: [
    { q: "Do I need an appointment for a dental check-up?", a: "Appointments are recommended so the clinic can reserve enough time for your consultation. Walk-ins may be accommodated depending on availability." },
    { q: "How often should I get my teeth cleaned?", a: "Most patients benefit from a professional dental cleaning approximately every six months, depending on their oral health." },
    { q: "Do you provide emergency dental appointments?", a: "Yes. Emergency appointments are available during clinic operating hours. Patients can call or WhatsApp the clinic for assistance." },
    { q: "Do you provide dental implants?", a: "Yes. BrightDent provides dental implant consultations, implant placement and implant crown treatments." },
    { q: "How much does a treatment cost?", a: "Treatment costs vary depending on the patient's condition and the treatment required. Contact the clinic for a consultation and personalised treatment estimate." },
    { q: "Do you treat children?", a: "Yes. Pediatric dental care is available for children and teenagers." },
    { q: "Do you offer teeth whitening?", a: "Yes. Professional teeth-whitening treatments are available after an initial dental assessment." },
    { q: "Can I book an appointment through WhatsApp?", a: "Yes. Patients can contact the clinic through WhatsApp to enquire about available appointments." },
  ],
};

export const CONTACT_EMAIL = CLINIC.email;
export const EMERGENCY_PHONE = CLINIC.phone;
export const EMERGENCY_PHONE_HREF = CLINIC.phoneHref;