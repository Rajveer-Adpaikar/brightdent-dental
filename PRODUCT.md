# BrightDent Dental & Implant Studio — Website

## Register

brand

## Users

Prospective and existing dental patients in Panaji, Goa looking for a
trustworthy clinic for implants, root canals, and cosmetic dentistry.
Most arrive on phones, mid-decision, and want to book a seat or reach a
human fast.

## Product Purpose

A fictional demo marketing site whose single job is converting visitors
into appointments: clear treatment scope, trustworthy doctor profiles,
before/after evidence, cost guidance via enquiry (never fixed price lists),
and one-tap call/WhatsApp paths everywhere. Success = the phone rings.

## Brand Personality

Modern · Approachable · Friendly-professional
A confident, upfront dental clinic in Panaji that speaks plainly: careful
clinical care, honest prices, quick WhatsApp answers. Warm without being
chirpy, squeaky-clean without feeling clinical-cold.

## Anti-references

- Every pale-blue / teal corporate-dental template site.
- The rosewood/peach "IvoryCare" and green "PearlSmile" sibling demos.
- Generic AI-slop beige + terracotta + serif landing pages.
- Fake urgency, wall-to-wall stock carousels, fixed price-list walls.

## Design Principles

1. Dentistry is the cue — enamel-white, surgical surfaces, a warm coral
   pulse. The subject is the clinic, not the city.
2. Cloud-and-snow carries the clean clinical identity; coral is the single
   action color (call, book, WhatsApp, accents).
3. Every path ends in an action: call, WhatsApp, or booking form.
4. Mobile-first: tap targets ≥ 40px, one-thumb CTAs, no hover-only content.

## Accessibility & Inclusion

WCAG 2.1 AA. ≥ 4.5:1 body contrast, visible focus rings, keyboard-reachable
forms, reduced-motion fallbacks for all reveals.

---

# BrightDent Dental & Implant Studio — DESIGN.md

## Visual Theme

**"The Enamel Studio."** Cool surgical-white surfaces (cloud / snow), soft
graphite-navy ink, and a single warm coral accent that carries every action.
The subject is the dental clinic itself — enamel, porcelain, sterile white
with a friendly pulse — not a city or a tile style. Reads unmistakably as
dentistry, and is a clear departure from every sibling demo.

Rhythm: light cloud/snow for content; the dark ink band shows up on the
cost-enquiry panel and clinic-hours/contact card, not on the full dentist
section. Warmth lives in the coral action color, not the surface.

## Color Palette (Tailwind v4 `@theme` tokens)

| Token | Role | Hex |
|---|---|---|
| `cloud` | page background (cool surgical white) | #f5f8fb |
| `snow` | panel / card surface | #ffffff |
| `ink` | deep graphite-navy text & dark cards | #15202e |
| `coral-700…600` | primary / links / headings | #8f2019 → #b3281e |
| `coral-100/50` | soft washes, dividers | #fbdcdb / #fdeeee |
| `coral-500/400` | action — call, book, WhatsApp, accents | #d93a2e / #e75f54 |
| `coral-300/200` | warm highlights on light | #f08c85 / #f6b9b5 |

Accent rule: coral marks all actions + small confirmed data (today, step
labels, stars). No teal/rosewood/pine/beige default bands.

## Typography

- **Display — Sora** (geometric, confident; weight 700, tracking −0.02em).
  Headings h1–h3, `.font-display`.
- **Body — Figtree** (humanist, 400–800). UI text, `.font-sans`.
- **Data — JetBrains Mono** (400–700). Hours, stats, ticket labels, uppercase
  tracked micro-labels, `.font-data`.

## Signature / Motif

The **smile mark** (`Smile.tsx`) — a tooth-peaked smile arc that instantly
reads "dental"; logo monogram, divider strip (`SmileRow`), and doctor
monogram. The hero uses an **editorial smile-arc illustration panel** (open
arc with a row of small teeth + floating trust chips: "28,000+ procedures",
"Painless-first care", "Mon–Sat till 8") instead of any card.

## Layout (deliberately varied vs the IvoryCare fork)

- Slim dark **utility bar** (address + phone) stacks above the header.
- Hero has **no dentist-card** — a copy block + the smile panel.
- A dedicated 3-step **"How it works" band** (book → examine → smile).
- WhyUs is a **2×2 feature-tile grid** (not numbered ledger rows).
- Dentists is a **light** section.
- Treatments are a **5-card grid**, with the dark identity concentrated on
  the cost-enquiry band.
- Gallery cards use **coral-wash before/after bands**.
- FAQ pairs the accordion with a **"Ask us on WhatsApp" ink card**.

## Motion

Reveal via `motion` whileInView on transform/opacity only; content is visible
by default (never gated on JS). Easing: cubic-bezier easeOut.
`prefers-reduced-motion` reduces all durations to ~0.

## Components / Layouts

- Utility bar + Header: fixed; ink bar (address+phone) on top, cloud blur on
  scroll; smile monogram + "BrightDent / Dental & Implant", phone + coral
  Book button.
- Hero: split — copy + coral Book/Emergency call + WhatsApp link; right =
  coral-smile arc illustration with floating trust chips.
- Steps: 3-step journey band with icons + connector line.
- WhyUs: 2×2 feature tiles + stats band (13+ / 19,700+ / 28,000+ / 3).
- Dentists: light cloud cards, smile monograms, initials, coral Book.
- Treatments: 5-card grid; dark ink enquiry band ("Get a written estimate").
- Gallery: 4 before/after cards — coral-wash enamel band, labels, smile curve.
- Reviews: 3 patient cards. FAQ: `<details>` accordion, 8 items + WhatsApp card.
- FindUs: hours table (Mon–Fri 9–8, Sat 9–5, Sun 10–2) + ink contact card + map.
- Footer: ink, smile monogram + contact + links.
- 404: centered "This page isn't on file" with coral smile mark + split CTAs.