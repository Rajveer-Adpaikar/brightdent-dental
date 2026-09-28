# IvoryCare Dental & Implant Centre (ivorycare-dental)

React 19 + Vite 6 + TypeScript + Tailwind CSS v4 + motion + react-router-dom v7.
A demo/fictional clinic website for **IvoryCare Dental & Implant Centre**, Bengaluru.
All clinic data is fictional (see `IvoryCare_Dental_Demo_2.pdf`). Branding says
**IvoryCare** — never revert to the old "PearlSmile Dental Care" branding (this demo
was forked from that project) and never call it "AI/virtual dentistry" — it's a
physical Bengaluru clinic, not a SaaS.

> This is one of several demo sites used to present options to clients. Its whole
> job is to look deliberately different from the other demos (especially the green
> "Pearl & Pine" PearlSmile style) — treat every new build as a chance to pick a
> distinct identity, not to reuse this one.

## Stack & Run

- Install: `npm install`
- Dev server: `npm run dev` → **port 3200** (3000 and 3100 are taken by other apps). Vite auto-picks the next free port if 3200 is busy.
- Typecheck / "lint": `npx tsc --noEmit` (no test suite)
- Build: `npm run build` → `dist/`
- Local URL: `http://localhost:3200/`

## Data & Content

- `src/config.ts` — single source of truth: `CLINIC` object (name, tagline, address,
  phone, WhatsApp, email, maps embed + directions, `hours[]`, `dentists[]`,
  `services[]` (5 groups), `stats[]`, `beforeAfter[]` (gallery), `reviews[]`, `faqs[]`).
  **All data lives here** — edit it to change the site's content, not the components.
- Phone numbers must be dummy values. Current: `+91 80 4123 6842` (fictional), WhatsApp
  digits `918041236842`.
- Sections (homepage order): `Hero` → `WhyUs` (#why) → `Dentists` (#dentists) →
  `Treatments` (#treatments) → `Gallery` (#gallery) → `Reviews` (#reviews) →
  `Faq` (#faq) → `FindUs` (#find-us, hours + map + directions).
- Legal pages at `/privacy-policy`, `/terms-of-service`, `/hipaa` — all source their
  branding from `CLINIC`.

## Booking & Enquiry

- `src/booking.tsx` — `BookingProvider` wraps the app in `App.tsx`; components call
  `useBooking()`. Exposes `openBooking(preset?)` (opens the appointment form, optional
  `{ dentist, service }` presets) and `openEnquiry()` (opens the cost-enquiry form).
- `src/components/BookingModal.tsx` — **custom appointment form** (replaces the old
  Cal.com embed): dentist + treatment + date/time chips + name + phone, submitting to
  WhatsApp via `waLink()`. No Cal.com dependency anymore.
- `src/components/EnquiryModal.tsx` — treatment-cost enquiry that hands off to WhatsApp.
- `src/lib.ts` — `waLink(whatsapp, text)` WhatsApp deep-link helper.
- WhatsApp is wired across major calls-to-action (Hero, Dentists, FindUs, booking +
  enquiry handoff, floating button) per the PDF brief.

## Design System ("Consultation Ledger")

- Palette (Tailwind v4 `@theme` tokens in `src/index.css`):
  - `rosewood` (deep claret-rose, primary brand; `rosewood-950` #230d18 → `rosewood-50`)
  - `ivory` (#fffdf8 near-white background — NOT cream/sand)
  - `peach` (action color — call, book, WhatsApp, accents; `peach-500` #e88a42)
- Type: `Newsreader` (`font-display`, editorial serif) + `Manrope` (`font-sans`, body)
  + `Fragment Mono` (`font-data`, clinical data like hours/stats/ledger labels).
  Imported in `src/index.css` via Google Fonts.
- Signature motif: the **tooth mark** (`src/components/Tooth.tsx`) — logo monogram and
  divider; the **consultation ledger card** in the hero.
- Design rules: no green/pine, no teal/slate, no gradient text, no cream/sand/beige bg,
  no card-grid-of-icons uniformity (services and why-us are editorial ledger rows),
  gold/green accents are banned — peach marks every action.
- The impeccable design hook flags the `overused-font` rule — resolved: Fraunces was
  swapped to Newsreader to avoid the guarded list.

## Gotchas

- Section anchors: `#why`, `#dentists`, `#treatments`, `#gallery`, `#reviews`, `#faq`,
  `#find-us`. Link to the real sections.
- Never use root-absolute hrefs (`/#services`) — use page-relative (`#services`) so
  anchors keep working under any Vite base.
- Touch targets: footer links use `py-2`+ padding to stay ≥40px tall — preserve when editing.
- Mobile QA method that works here: Playwright `browser_resize` + `browser_evaluate`
  measuring `getBoundingClientRect()` against `window.innerWidth` (skip elements under
  `pointer-events-none`). DOM measurement via `browser_evaluate` is the reliable check;
  screenshots saved to `.playwright-mcp/` are often unreadable in this environment.
- `.playwright-mcp/` is gitignored; the repo also ignores `.impeccable/`, `dist/`,
  `node_modules/`, `.env*`.