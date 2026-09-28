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

Modern · Approachable · Goan
Confident clinical expertise fronted by warm human care — with the laid-back
wayfinding of a well-run Panaji clinic. Speaks plainly, never in jargon.

## Anti-references

- Every pale-blue / teal corporate-dental template site.
- The rosewood/peach "IvoryCare" and green "PearlSmile" sibling demos.
- Generic AI-slop beige + terracotta + serif landing pages.
- Fake urgency, wall-to-wall stock carousels, fixed price-list walls.

## Design Principles

1. The city is the cue — Goan azulejo cobalt, white plaster, church arches.
2. Cobalt-and-plaster carries identity; marigold is the action color
   (call, book, WhatsApp).
3. Every path ends in an action: call, WhatsApp, or booking form.
4. Mobile-first: tap targets ≥ 40px, one-thumb CTAs, no hover-only content.

## Accessibility & Inclusion

WCAG 2.1 AA. ≥ 4.5:1 body contrast, visible focus rings, keyboard-reachable
forms, reduced-motion fallbacks for all reveals.

---

# BrightDent Dental & Implant Studio — DESIGN.md

## Visual Theme

**"The Azulejo Clinic."** Cool plaster-white surfaces, cobalt (azulejo tile
azure) for identity, and marigold (saffron) for every action. The hero and
contact cards sit in an arch-and-tile language borrowed from Goan church
architecture — appointment is the product, so the page is laid out like a
ticket stub, not a brochure.

Two-band rhythm: plaster light for content, cobalt-950 dark for
dentists/CTA/footer. Warmth lives in the marigold action color, not the surface.

## Color Palette (Tailwind v4 `@theme` tokens)

| Token | Role | Hex |
|---|---|---|
| `cobalt-950…900` | dark ink / dark sections | #0a142e → #112043 |
| `cobalt-800…600` | primary / links / headings | #182f5e → #2a5097 |
| `cobalt-100/50` | soft washes, dividers | #dbe7f7 / #eef4fb |
| `plaster` | page background (cool near-white) | #fafbfd |
| `ink` | deep blue-black text | #0d1830 |
| `marigold-500/400` | action — call, book, WhatsApp, accents | #e99a1c / #f2b53f |
| `marigold-100` | warm highlights on light | #fdf0d1 |

Accent rule: marigold marks actions and small confirmed data points (today,
seat no., procedure counts). Rosewood/peach/green/teal/gold are banned.

## Typography

- **Display — Bricolage Grotesque** (grotesque, weight 700, `opsz` auto, tracking
  −0.02em). Headings h1–h3, `.font-display`.
- **Body — Golos Text** (400–800). UI text, `.font-sans`.
- **Data — JetBrains Mono** (400–700). Hours, stats, ticket labels, uppercase
  tracked micro-labels, `.font-data`.

## Signature / Motif

The **arch mark** (`Arch.tsx`) — a Goan church arch that doubles as a dental
arch/smile; logo monogram, divider row (`ArchRow`), and hero corner accents.
The hero uses an **appointment ticket stub card** (perforated rules, seat
number) rather than a consultation ledger. The before/after gallery uses
cobalt→marigold split-gradient bands with an arch "smile" curve.

## Motion

Reveal via `motion` whileInView on transform/opacity only; content is visible
by default (never gated on JS). Easing: cubic-bezier easeOut.
`prefers-reduced-motion` reduces all durations to ~0.

## Components / Layouts

- Header: fixed, plaster blur on scroll, arch monogram + "BrightDent", phone +
  Book appointment button.
- Hero: split — left copy + call/WhatsApp emergency cluster; right = tile-bordered
  ticket stub with three specialists and hours.
- WhyUs: 4 reason rows + stats band (13+ / 19,700+ / 28,000+ / 3).
- Dentists: dark cobalt-950, 3 arch-monogram cards (initials + arch).
- Treatments: 5 groups as rows — index, title, item chips. Cost enquiry band at foot.
- Gallery: 4 before/after cards — Split cobalt/plaster + marigold visual band,
  before/after labels, arch smile line.
- Reviews: 3 patient cards. FAQ: `<details>` accordion, 8 items.
- FindUs: hours table (Mon–Fri 9–8, Sat 9–5, Sun 10–2), phone/WhatsApp/email,
  directions + Google Maps iframe.
- Footer + WhatsApp floating action button (bottom-right).
- 404: "Panaji/404" placard with Goa-coordinate kicker, corner ticks, arch motif.