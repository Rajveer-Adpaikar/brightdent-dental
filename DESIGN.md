# IvoryCare Dental & Implant Centre — DESIGN.md

## Visual Theme

**"The consultation ledger."** Clean ivory surfaces, deep rosewood (claret-rose)
for identity, and peach for every action. Dates, doctors, and procedures are
presented as ledger rows and case cards — appointment is the product, so the
page is laid out like a well-kept clinic register, not a brochure.

Two-band rhythm: ivory light for content, rosewood-950 dark for
dentists/CTA/footer. Warmth lives in the brand pair, not the surface.

## Color Palette (Tailwind v4 `@theme` tokens)

| Token | Role | Hex |
|---|---|---|
| `rosewood-950…900` | dark ink / dark sections | #230d18 → #3d1728 |
| `rosewood-800…600` | primary / links / headings | #5c243b → #913c5d |
| `rosewood-100/50` | soft washes, dividers | #f7e3ea / #fbf3f6 |
| `ivory` | page background (near-white) | #fffdf8 |
| `peach-500/400` | action color — call, book, WhatsApp, accents | #e88a42 / #f5a463 |
| `peach-100` | warm highlights on dark | #ffeede |

Accent rule: peach marks actions and small confirmed data points (dates,
prices-enquiry, "today"). Gold/green/teal are banned.

## Typography

- **Display — Newsreader** (variable serif, `opsz` auto, wght 400–600). Headings
  h1–h3, `.font-display`. Letter-spacing −0.02em.
- **Body — Manrope** (400–700). UI text, `.font-sans`.
- **Data — Fragment Mono** (400). Hours, stats, ledger labels, uppercase
  tracked micro-labels, `.font-data`.

## Signature / Motif

The **tooth mark** — a single line-drawn tooth SVG (`Tooth.tsx`) — is the logo
monogram and threads through dividers and cards. The **ledger card** (hero,
booking modal) presents a consultation the way a clinic case sheet does, with
mono rows and a peach rubber-stamp accent.

## Motion

Reveal via `motion` whileInView on transform/opacity only; content is visible
by default (never gated on JS). Easing: cubic-bezier expo-out-ish `easeOut`.
`prefers-reduced-motion` reduces all durations to ~0.

## Components / Layouts

- Header: fixed, ivory blur on scroll, tooth monogram + "IvoryCare", phone +
  Book Appointment pill.
- Hero: split — left copy + call/WhatsApp emergency cluster; right = ledger
  card with three specialists and hours.
- WhyUs: 4 ledger rows + stats band (14+ / 21,500+ / 30,000+ / 3).
- Dentists: dark rosewood-950, 3 monogram cards (initials + tooth).
- Treatments: 5 groups as a ledger — index, title, item chips.
  Cost enquiry band at foot (no fixed prices).
- Gallery: 3 before/after comparison sliders (Veneers / Whitening / Smile
  Makeover); "before" is a desaturated frame of the same image.
- Reviews: 4 patient cards. FAQ: `<details>` accordion, 7 items.
- FindUs: hours table (Mon–Fri 9–8, Sat 9–6, Sun 10–2), phone/WhatsApp/email,
  directions + Google Maps iframe.
- Footer + WhatsApp floating action button (bottom-right).