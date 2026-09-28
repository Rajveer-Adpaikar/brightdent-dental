// Single source of truth for clinic + booking details.
// All data here is fictional demo data (IvoryCare_Dental_Demo_2.pdf).
// WhatsApp number digits only, e.g. '918041236842' → wa.me/918041236842
export const CLINIC = {
  name: "IvoryCare Dental & Implant Centre",
  tagline: "Advanced Dentistry. Personalised Care.",
  address: "3rd Floor, Meridian Business Centre, 24 Park Street, Bengaluru, Karnataka — 560025, India",
  addressShort: "3rd Floor, Meridian Business Centre, 24 Park Street",
  city: "Bengaluru",
  phone: "+91 80 4123 6842",
  phoneHref: "+918041236842",
  whatsapp: "918041236842",
  email: "care@ivorycaredental.example",
  mapsEmbed: 'https://maps.google.com/maps?q=24%20Park%20Street%2C%20Bengaluru%2C%20Karnataka%20560025&t=&z=14&ie=UTF8&iwloc=&output=embed',
  mapsDirections: 'https://www.google.com/maps/dir/?api=1&destination=24+Park+Street,+Bengaluru,+Karnataka+560025',
  hours: [
    { day: "Monday", time: "9:00 AM – 8:00 PM" },
    { day: "Tuesday", time: "9:00 AM – 8:00 PM" },
    { day: "Wednesday", time: "9:00 AM – 8:00 PM" },
    { day: "Thursday", time: "9:00 AM – 8:00 PM" },
    { day: "Friday", time: "9:00 AM – 8:00 PM" },
    { day: "Saturday", time: "9:00 AM – 6:00 PM" },
    { day: "Sunday", time: "10:00 AM – 2:00 PM" },
  ],
  dentists: [
    {
      initials: "AK",
      name: "Dr. Aarav Kapoor",
      specialty: "Implantologist & Prosthodontist",
      qual: "BDS, MDS",
      experience: "14+ years",
      patients: "10,000+",
    },
    {
      initials: "MI",
      name: "Dr. Meera Iyer",
      specialty: "Endodontist / Root Canal Specialist",
      qual: "BDS, MDS",
      experience: "10+ years",
      patients: "7,500+",
    },
    {
      initials: "KM",
      name: "Dr. Kabir Malhotra",
      specialty: "Cosmetic & General Dentist",
      qual: "BDS",
      experience: "7+ years",
      patients: "4,000+",
    },
  ],
  services: [
    {
      index: "01",
      title: "General Dentistry",
      blurb: "Everyday care that keeps small issues from becoming big ones.",
      items: ["Dental Check-up", "Teeth Cleaning", "Cavity Filling", "Tooth Extraction", "Gum Disease Treatment"],
    },
    {
      index: "02",
      title: "Root Canal & Restorative",
      blurb: "Saving natural teeth with calm, precise endodontic care.",
      items: ["Root Canal Treatment", "Dental Crowns", "Dental Bridges", "Dentures", "Root Canal Re-treatment"],
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
      items: ["Dental Veneers", "Teeth Whitening", "Smile Makeover", "Composite Bonding", "Cosmetic Contouring"],
    },
    {
      index: "05",
      title: "Other Specialised Care",
      blurb: "The trickier cases — handled gently, in-house.",
      items: ["Wisdom Tooth Removal", "Pediatric Dentistry", "Dental X-rays", "Emergency Dental Care"],
    },
  ],
  stats: [
    { value: "14+", label: "Years of experience" },
    { value: "21,500+", label: "Patients treated" },
    { value: "30,000+", label: "Procedures completed" },
    { value: "3", label: "Specialists in-house" },
  ],
  beforeAfter: [
    {
      id: "veneers",
      label: "Veneers",
      title: "Porcelain veneers",
      desc: "Worn edges brought back to a clean, even line in four visits.",
      avatar: "atharv",
      patient: "Atharv, 31",
      imgA: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=640&q=70&auto=format&fit=crop",
      imgB: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=640&q=70&auto=format&fit=crop",
      beforeLabel: "Before",
      afterLabel: "In progress — sample imagery",
    },
    {
      id: "whitening",
      label: "Whitening",
      title: "In-office whitening",
      desc: "Two shades lifted in a single sitting, with take-home trays after.",
      avatar: "aisha",
      patient: "Aisha, 28",
      imgA: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=640&q=70&auto=format&fit=crop",
      imgB: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=640&q=70&auto=format&fit=crop",
      beforeLabel: "Before",
      afterLabel: "In progress — sample imagery",
    },
    {
      id: "smile-makeover",
      label: "Smile Makeover",
      title: "Six-month smile makeover",
      desc: "Layer-by-layer alignment and contouring, photographed each visit.",
      avatar: "ravi",
      patient: "Ravi, 44",
      imgA: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=640&q=70&auto=format&fit=crop",
      imgB: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=640&q=70&auto=format&fit=crop",
      beforeLabel: "Before",
      afterLabel: "In progress — sample imagery",
    },
  ],
  reviews: [
    {
      quote: "Heard every word, never felt rushed. My root canal — which I’d put off for a year — was done in two visits and I honestly kept waiting for the pain that never came.",
      name: "Ananya S.",
      detail: "Root canal · Bengaluru",
    },
    {
      quote: "Booked online on a Monday, saw the implantologist by Friday. The estimate came as a proper breakdown, nothing hidden. That’s rare now.",
      name: "Rohit M.",
      detail: "Dental implant · Bengaluru",
    },
    {
      quote: "My daughter is terrified of dentists. Dr. Malhotra had her laughing by the second visit. We won’t go anywhere else now.",
      name: "Lakshmi R.",
      detail: "Pediatric care · Bengaluru",
    },
    {
      quote: "The WhatsApp reminders save my life — they text before every appointment. The whole team knows my name. It feels like a clinic that remembers you.",
      name: "Vikram T.",
      detail: "Full-mouth rehab · Bengaluru",
    },
  ],
  faqs: [
    {
      q: "Is online booking really instant?",
      a: "Yes. Pick a dentist, a treatment, a date and a time slot, share your name and phone number, and the clinic confirms by SMS and WhatsApp — usually within the hour during working hours.",
    },
    {
      q: "Do you treat dental anxiety?",
      a: "Every member of our team is trained in calm-chair techniques: slower pacing, clear explanations of every step, and breaks whenever you need them. Nitrous oxide sedation is available for longer procedures — ask when you book.",
    },
    {
      q: "How much do implants cost?",
      a: "Implant cost depends on bone condition, the implant system, and whether you need a crown or a full-arch solution. We give you a written, item-by-item estimate after a free consult — no surprise numbers over the phone.",
    },
    {
      q: "What should I bring to my first visit?",
      a: "Photo ID, any previous X-rays or treatment records, and a list of medications you take. If you don’t have past records, that’s fine — we take fresh digital X-rays in-clinic.",
    },
    {
      q: "Do you handle dental emergencies on Sundays?",
      a: "Emergency appointments are available during clinic hours, including Sunday 10 AM – 2 PM. Call or WhatsApp ahead and we’ll fit you in, usually the same day.",
    },
    {
      q: "Is the clinic accessible and easy to reach?",
      a: "We’re on the 3rd floor of the Meridian Business Centre at 24 Park Street, with a lift and step-free access to the building. Parking is available on the adjoining lot, and we’re a five-minute walk from the metro station.",
    },
    {
      q: "Do you see children?",
      a: "Yes — Dr. Malhotra sees children from age four, and we keep the chair, the lights and the language child-friendly. First visits are short and pressure-free.",
    },
  ],
};

export const CONTACT_EMAIL = CLINIC.email;
export const EMERGENCY_PHONE = CLINIC.phone;
export const EMERGENCY_PHONE_HREF = CLINIC.phoneHref;