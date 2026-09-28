# BrightDent Dental & Implant Studio (brightdent-dental)

React 19 + Vite 6 + TypeScript + Tailwind CSS v4 + motion + react-router-dom v7.
A demo/fictional clinic website for **BrightDent Dental & Implant Studio**, Panaji, Goa.
All clinic data is fictional (see `BrightDent_Dental_Demo_Data.pdf`). Branding says
**BrightDent** — this repo was forked from the IvoryCare demo; never revert to
"IvoryCare" / "PearlSmile" branding and never call it "AI/virtual dentistry" — it's a
physical Panaji clinic, not a SaaS.

> This is one of several demo sites used to present options to clients. Its whole
> job is to look deliberately different from the other demos (rosewood/peach
> IvoryCare, green PearlSmile) — treat every new build as a chance to pick a
> distinct identity, not to reuse this one.

## Stack & Run

- Install: `npm install`
- Dev server: `npm run dev` → **port 3300** (3000/3100/3200 are taken by other apps).
  Vite auto-picks the next free port if 3300 is busy.
- Typecheck / "lint": `npx tsc --noEmit` (no test suite)
- Build: `npm run build` → `dist/`
- Local URL: `http://localhost:3300/`

## Git / Pages

- Remote: `git@github.com:Rajveer-Adpaikar/brightdent-dental.git` (GitHub Pages project site → `https://rajveer-adpaikar.github.io/brightdent-dental/`).
- `vite.config.ts` uses `base: process.env.GH_PAGES ? '/brightdent-dental/' : '/'` so
  dev runs at the root. **Deploy with `GH_PAGES=1`** or the subpath base won't be stamped.
- `public/404.html` + the inline `sessionStorage.redirect` script in `index.html` give
  Pages its SPA fallback (deep links and hard refreshes render the React 404).

## Data & Content

- `src/config.ts` — single source of truth: `CLINIC` object (name, tagline, address,
  phone, WhatsApp, email, maps embed + directions, `hours[]`, `dentists[]`,
  `services[]` (5 groups), `stats[]`, `beforeAfter[]` (gallery), `reviews[]`, `faqs[]`).
  **All data lives here** — edit it to change the site's content, not the components.
- Phone numbers must be dummy values. Current: `+91 832 278 6419` (fictional), WhatsApp
  digits `918322786419`.
- Sections (homepage order): `Hero` → `WhyUs` (#why) → `Dentists` (#dentists) →
  `Treatments` (#treatments) → `Gallery` (#gallery, before/after) → `Reviews` (#reviews) →
  `Faq` (#faq) → `FindUs` (#find-us, hours + map + directions).
- Legal pages at `/privacy-policy`, `/terms-of-service`, `/hipaa` — all source their
  branding from `CLINIC`.

## Booking & Enquiry

- `src/booking.tsx` — `BookingProvider` wraps the app in `App.tsx`; components call
  `useBooking()`. Exposes `openBooking(preset?)` (opens the appointment form, optional
  `{ dentist, service }` presets) and `openEnquiry()` (opens the cost-enquiry form).
- `src/components/BookingModal.tsx` — **custom appointment form**: dentist +
  treatment + date/time chips + name + phone, submitting to WhatsApp via `waLink()`.
  No Cal.com dependency.
- `src/components/EnquiryModal.tsx` — treatment-cost enquiry that hands off to WhatsApp.
- `src/lib.ts` — `waLink(whatsapp, text)` WhatsApp deep-link helper.
- WhatsApp is wired across major calls-to-action (Hero, Dentists, FindUs, booking +
  enquiry handoff, floating button) per the PDF brief.

## Design System ("The Azulejo Clinic")

- Palette (Tailwind v4 `@theme` tokens in `src/index.css`):
  - `cobalt` (azulejo-tile azure, primary brand; `cobalt-950` #0a142e → `cobalt-50` #eef4fb)
  - `plaster` (#fafbfd cool near-white background — NOT cream/sand)
  - `ink` (#0d1830 deep blue-black for text / dark sections)
  - `marigold` (action color — call, book, WhatsApp, accents; `marigold-500` #e99a1c)
- Type: `Bricolage Grotesque` (`font-display`, grotesque display) + `Golos Text`
  (`font-sans`, body) + `JetBrains Mono` (`font-data`, clinical data). Imported in
  `src/index.css` via Google Fonts. None are on the impeccable reflex-reject list.
- Signature motif: the **arch mark** (`src/components/Arch.tsx`) — a Goan church arch
  that doubles as a smile; logo monogram and azulejo tile-row divider. The hero uses an
  **appointment ticket stub** card (perforation rules + seat number) instead of a ledger.
- Design rules: no rosewood/peach, no green/pine, no teal/slate, no beige/cream/sand bg,
  no gradient text, no gold, marigold marks every action. Borders are rarely rounded
  (rounded-md max) — this build reads sharper and more "tiled" than IvoryCare.
- The impeccable design hook has scanned every file in this build; no deterministic
  issues found. Contrast pairs are all WCAG-AA verified (ink-on-plaster 17:1,
  ink-on-marigold 7.65:1, plaster-on-cobalt 9.89:1).

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