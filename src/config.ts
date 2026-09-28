// Single source of truth for clinic + booking details.
// All data here is fictional demo data (PearlSmile_Dental_Demo_Data.pdf).
export const CLINIC = {
  name: "PearlSmile Dental Care",
  tagline: "Healthy Smiles. Confident You.",
  address: "2nd Floor, Coral Square, 18 MG Road, Panaji, Goa — 403001, India",
  addressShort: "2nd Floor, Coral Square, 18 MG Road, Panjim",
  city: "Panaji, Goa",
  phone: "+91 832 245 7812",
  phoneHref: "+918322457812",
  email: "hello@pearlsmiledental.in",
  hours: [
    { day: "Monday", time: "9:00 AM – 7:00 PM" },
    { day: "Tuesday", time: "9:00 AM – 7:00 PM" },
    { day: "Wednesday", time: "9:00 AM – 7:00 PM" },
    { day: "Thursday", time: "9:00 AM – 7:00 PM" },
    { day: "Friday", time: "9:00 AM – 7:00 PM" },
    { day: "Saturday", time: "9:00 AM – 4:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  dentists: [
    {
      initials: "AM",
      name: "Dr. Ananya Mehta",
      specialty: "Prosthodontist",
      qual: "BDS, MDS",
      experience: "11+ years",
      patients: "8,000+",
    },
    {
      initials: "RS",
      name: "Dr. Rohan Shah",
      specialty: "Endodontist",
      qual: "BDS, MDS",
      experience: "8+ years",
      patients: "5,500+",
    },
    {
      initials: "PN",
      name: "Dr. Priya Nair",
      specialty: "General & Cosmetic Dentist",
      qual: "BDS",
      experience: "6+ years",
      patients: "3,500+",
    },
  ],
  services: [
    {
      num: "01",
      title: "General Dentistry",
      blurb: "Everyday care that keeps small issues from becoming big ones.",
      items: [
        "Dental Check-ups",
        "Teeth Cleaning & Polishing",
        "Tooth Extraction",
        "Cavity Fillings",
        "Gum Disease Treatment",
      ],
    },
    {
      num: "02",
      title: "Root Canal & Restorative",
      blurb: "Saving natural teeth with calm, precise endodontic care.",
      items: ["Root Canal Treatment", "Dental Crowns", "Dental Bridges", "Dentures"],
    },
    {
      num: "03",
      title: "Cosmetic Dentistry",
      blurb: "Targeted refinements that change how your smile reads.",
      items: ["Dental Veneers", "Teeth Whitening", "Smile Makeovers", "Composite Bonding"],
    },
    {
      num: "04",
      title: "Specialized",
      blurb: "The tricky cases — handled gently, in-house.",
      items: ["Dental Implants", "Wisdom Tooth Removal", "Pediatric Dentistry", "Emergency Dental Care"],
    },
  ],
  stats: [
    { value: "15+", label: "Years of care" },
    { value: "17,000+", label: "Patients treated" },
    { value: "25,000+", label: "Procedures completed" },
    { value: "3", label: "Specialists in-house" },
  ],
};

// Cal.com event-type link (username/event-slug). While empty, booking buttons
// show a "coming soon" panel instead of the calendar.
export const CAL_COM_URL = "envoyc/demo-dental";

export const CONTACT_EMAIL = CLINIC.email;
export const EMERGENCY_PHONE = CLINIC.phone;
export const EMERGENCY_PHONE_HREF = CLINIC.phoneHref;