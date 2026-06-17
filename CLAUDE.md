@AGENTS.md

# Pict n Pick — Project Guide

> ⚠️ See the imported AGENTS.md above: this is a **non-standard Next.js 16** build. Read
> `node_modules/next/dist/docs/` (App Router guides live in `01-app/`) before writing code —
> do not rely on Next.js knowledge from memory.

## What this is

A single-page, Indonesian-language **marketing landing page** for **"Pict n Pick"** — a
photo-experience service (Photobox & Photoreceipt) for coffee shops. It is a university
**Digital Business (UTS) coursework project**, not a live product: contact details, the lead
backend, and revenue figures are all placeholder/illustrative. Treat it as a polished concept site.

## Commands

```bash
npm run dev      # next dev (Turbopack) — http://localhost:3000
npm run build    # next build → static export into out/  (no separate `next export` step)
npm run lint     # eslint (flat config); currently passes clean
npm start        # npx serve@latest out  — serves the static export
```

There are **no tests** and **no CI**. Quality gates = ESLint + the TypeScript `strict` typecheck during build.

## Hard constraints (read before changing anything)

- **Static export.** [next.config.ts](next.config.ts) sets `output: "export"`. That means **no
  SSR/ISR, no API routes, no middleware, no server actions, no runtime image optimization.** Any
  feature needing a server will not work — it must be client-side or build-time only.
- Because of that, `images: { unoptimized: true }` is **mandatory**. Do not remove it; `next/image`
  would otherwise point at a `/_next/image` endpoint that does not exist in the export.
- `npm start` runs `npx serve@latest` — unpinned and **network-dependent** (fails offline, not in deps).

## Architecture

- **One route only:** [app/page.tsx](app/page.tsx) renders [LandingPage.tsx](app/_components/LandingPage.tsx),
  which composes ~13 stacked section components inside `<main>`, plus `Navbar` + `Footer`.
- **Server-first.** Only **two** Client Components carry `"use client"`:
  [Navbar.tsx](app/_components/Navbar.tsx) (mobile menu) and
  [LeadForm.tsx](app/_components/LeadForm.tsx) (the form). Keep new components server-side unless they
  genuinely need state/handlers. The only hook used anywhere is `useState`.
- **Navigation is pure anchors.** No client router, no scroll-spy. `<a href="#id">` + `html { scroll-behavior: smooth }`
  (in [globals.css](app/globals.css)) + per-section `scroll-mt-24` to clear the sticky navbar.
  Anchor map: `#produk`=ProductPhotobox, `#benefit`=BenefitForCafe, `#data`=RevenueSimulation,
  `#partner`=SocialProofTrust, `#faq`=Faq, `#lead-form`=LeadForm.
- **Shared primitives** live in [ui.tsx](app/_components/ui.tsx): `SectionContainer`, `SectionHeading`,
  `SectionImage` (wraps `next/image`), `Card`, `PrimaryButton`, `SecondaryButton`. **Reuse these** instead
  of re-styling. `PrimaryButton` is polymorphic: renders `<a>` when given `href`, else `<button>` (so a
  Client Component can pass `onClick`).
- Sections are marketing-framework-driven (AIDA / PAS / FAB / AAARRR — noted in comments). Preserve the
  funnel ordering and persuasion intent when editing copy.

## Design system (Tailwind CSS v4 — CSS-first)

- **No `tailwind.config.js` exists.** All tokens are defined in an `@theme inline { ... }` block in
  [globals.css](app/globals.css), and CSS uses `@import "tailwindcss";` (not the v3 `@tailwind` directives).
- ⚠️ **Token names are misleading: the palette is blue, not orange/peach.** `--color-orange` is
  `#a0c1ed` (light blue), `--color-orange-600` is `#5a8aca` (primary action blue), `--color-peach` is
  `#d4e6f9`. `bg-orange-600` / `text-orange-600` render **blue**. Don't edit styles by name expecting orange.
- Fonts: Plus Jakarta Sans (`font-sans`) + Geist Mono (`font-mono`), loaded via `next/font/google` in
  [layout.tsx](app/layout.tsx) and bridged into theme vars (`--font-sans` → `--font-jakarta`).
- `lang="id"` is set on `<html>`. Copy is Indonesian — keep new copy Indonesian.

## Known gaps / be careful

- **LeadForm has no backend.** Submit only does `console.log(form)` then shows a success card. It
  collects PII (name, phone, city, IG); a real deploy must wire a backend/email/CRM and stop logging PII.
- **Revenue figures in [RevenueSimulation.tsx](app/_components/RevenueSimulation.tsx) are hardcoded and
  illustrative.** The "Sharing kafe (30%)" label does **not** match the numbers (actual share ≈16–29%,
  rising per tier). Keep this in mind before citing them as real.
- **Placeholder data to replace before launch:** WhatsApp `628xxxxxxxxxx`, `hello@pictnpick.com`,
  IG `@pictnpick_` (in [LeadForm.tsx](app/_components/LeadForm.tsx) and [Footer.tsx](app/_components/Footer.tsx)).
- **Repo hygiene:** `ruvector.db` (a 1.5 MB AI-tool vector DB) is committed by mistake and should be
  removed + gitignored. `public/` still holds unused create-next-app SVGs and unreferenced
  `images/WhatsApp_*`/`CleanShot_*` PNGs that ship in the export. [README.md](README.md) is stale CNA boilerplate.
- **SEO/perf to improve:** no `og:image`/`metadataBase`/`sitemap.ts`/`robots.ts`; section PNGs are
  ~2–2.6 MB each (~11 MB total) and `favicon.png` is 1768×1768 — served raw due to the static export.

## File map

```
app/
  layout.tsx            Root shell: fonts, <html lang="id">, Metadata/OpenGraph
  page.tsx              Single route → <LandingPage/>
  not-found.tsx         Static 404 with a <Link href="/"> (no redirect)
  globals.css           Tailwind v4 @theme tokens + smooth scroll
  _components/
    LandingPage.tsx     Composition root — section order lives here
    ui.tsx              Shared primitives (reuse these)
    Navbar.tsx          Client — sticky nav + mobile menu
    LeadForm.tsx        Client — lead capture (console.log only)
    Hero, ProblemSolution, ProductPhotobox, ProductPhotoreceipt,
    RevenueSimulation, BenefitForCafe, HowItWorks, MidCtaBanner,
    GrowthHackingCampaign, SocialProofTrust, SpecialOffer, Faq, Footer
public/images/          Section images (referenced via SectionImage)
```
