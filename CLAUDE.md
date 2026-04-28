# CLAUDE.md — Harvest House Christian Fellowship Website Rebuild

> Read this file in full at the start of every session. Do not ask clarifying questions that are already answered here.
> If something is not covered here, make a reasonable decision and document it in the DECISIONS LOG at the bottom of this file.

---

## PROJECT OVERVIEW

**Client:** Harvest House Christian Fellowship (HHCF)
**Location:** Lewisburg, Pennsylvania
**Purpose:** Rebuild the existing site at hhcf4jesus.org from a legacy PHP/table-based layout into a modern, mobile-first, fast-loading static website.
**Developer:** David Santiago / Doulos Nexus
**Status:** Active build

---

## TECH STACK

| Layer | Tool |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Fonts | Google Fonts (via next/font) |
| Icons | lucide-react |
| Video Embeds | YouTube iframe (responsive wrapper) |
| Hosting | Vercel (recommended) or static export to current host |
| Package Manager | npm |

**No database. No CMS. No authentication. No API routes.**
All content lives in static data files under `/src/data/`.

---

## FILE STRUCTURE

```
/
├── public/
│   ├── images/          # Optimized site images (logo, hero, pastor photo)
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout with Nav and Footer
│   │   ├── page.tsx             # Home page
│   │   ├── about/
│   │   │   └── page.tsx         # About page (tabs or accordion for sub-sections)
│   │   ├── teachings/
│   │   │   └── page.tsx         # Video teachings page
│   │   ├── donate/
│   │   │   └── page.tsx         # Donate page (links to external donation portal)
│   │   └── contact/
│   │       └── page.tsx         # Contact page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Nav.tsx
│   │   │   └── Footer.tsx
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ServiceTimes.tsx
│   │   │   ├── FoodPantry.tsx
│   │   │   └── CommunityMinistries.tsx
│   │   ├── teachings/
│   │   │   ├── TeachingCard.tsx
│   │   │   └── TeachingGrid.tsx
│   │   ├── about/
│   │   │   └── AboutTabs.tsx
│   │   └── shared/
│   │       ├── SectionHeader.tsx
│   │       └── PageWrapper.tsx
│   ├── data/
│   │   ├── teachings.ts         # All video teaching content lives here
│   │   ├── about.ts             # Statement of Faith, Mission, Vision, etc.
│   │   └── site.ts              # Global site config (name, address, phone, hours)
│   └── styles/
│       └── globals.css
├── CLAUDE.md
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## SITE MAP (FINAL — DO NOT ADD PAGES WITHOUT PERMISSION)

| Route | Page | Notes |
|---|---|---|
| `/` | Home | Service times, food pantry info, community ministries, pastor photo |
| `/about` | About | Tabbed: Statement of Faith, Vision, Mission, Core Values, History, Pastoral Bio |
| `/teachings` | Teachings | Video grid — YouTube embeds or video links |
| `/donate` | Donate | Brief copy + external donation link button |
| `/contact` | Contact | Address, phone, map embed (Google Maps) |

**REMOVED FROM ORIGINAL SITE:**
- Biblical Doctrine Institute (entire section removed, do not reference it)
- Media page (Photo Gallery and Music sub-pages removed)

---

## DESIGN SYSTEM

**Aesthetic:** Warm, reverent, community-first. Clean but not cold. Avoid corporate SaaS or megachurch flashiness. This is a small, sincere local fellowship in a Pennsylvania town.

**Color Palette (Tailwind custom tokens — define in tailwind.config.ts):**

```ts
colors: {
  harvest: {
    gold:    '#C8922A',   // Primary accent — warmth, harvest
    cream:   '#FAF6EF',   // Light background
    bark:    '#3B2A1A',   // Dark text, headings
    earth:   '#7A5C3E',   // Secondary text, borders
    green:   '#4A6741',   // Community/life accent
    white:   '#FFFFFF',
    offwhite:'#F5F0E8',
  }
}
```

**Typography:**
- Heading font: `Playfair Display` (Google Fonts) — weight 700
- Body font: `Source Serif 4` (Google Fonts) — weight 400, 600
- Call-to-action / nav: `Inter` — weight 500, 600

**Do not use:** Arial, Roboto, system-ui as display fonts. Do not use purple gradients or generic SaaS color schemes.

**Spacing:** Use Tailwind spacing scale consistently. Section padding: `py-16 md:py-24`. Container max-width: `max-w-5xl mx-auto px-4`.

**Components must be accessible:** All images have alt text. All interactive elements are keyboard navigable. Color contrast meets WCAG AA.

---

## CONTENT: GLOBAL SITE DATA

```ts
// src/data/site.ts
export const SITE = {
  name: 'Harvest House Christian Fellowship',
  shortName: 'HHCF',
  address: {
    street: '9 N 3rd St.',
    city: 'Lewisburg',
    state: 'PA',
    zip: '17837',
  },
  foodPantryAddress: {
    street: '310 Market St, #2',
    city: 'Lewisburg',
    state: 'PA',
    zip: '17837',
  },
  phone: '(570) 713-1693',
  phoneFoodPantry: '(570) 490-3321',
  services: [
    { name: 'Sunday Morning Service', time: '10:00 AM' },
    { name: 'Wednesday Night Bible Study', time: '7:00 PM', note: 'Currently studying Romans' },
    { name: 'Food Pantry', time: 'Wednesdays 5:45 PM – 6:30 PM', location: '310 Market St, #2' },
  ],
  donationUrl: '', // INSERT CLIENT'S ACTUAL DONATION LINK HERE
  googleMapsUrl: 'https://www.google.com/maps/place/Harvest+House+Christian+Fellowship/@40.9646839,-76.8878103,17z/',
  mapEmbedUrl: '', // INSERT GOOGLE MAPS EMBED URL FOR CONTACT PAGE
}
```

---

## CONTENT: TEACHINGS DATA SCHEMA

```ts
// src/data/teachings.ts
export interface Teaching {
  id: string
  title: string
  description: string
  date: string            // ISO format: 'YYYY-MM-DD'
  series?: string         // Optional series name, e.g. 'Romans Study'
  videoUrl: string        // YouTube URL or direct video URL
  type: 'youtube' | 'video' | 'audio'
  thumbnail?: string      // Optional override; YouTube auto-generates thumbnails
}

export const teachings: Teaching[] = [
  // PLACEHOLDER — pastor will provide recordings
  // Example entry:
  // {
  //   id: 'romans-1',
  //   title: 'Introduction to Romans',
  //   description: 'Pastor Dan introduces the book of Romans and its themes of grace and righteousness.',
  //   date: '2025-01-05',
  //   series: 'Romans Study',
  //   videoUrl: 'https://www.youtube.com/watch?v=EXAMPLE',
  //   type: 'youtube',
  // },
]
```

When the client provides video links, add entries to this array only. No component changes are needed.

---

## ABOUT PAGE CONTENT SCHEMA

The About page uses a tabbed layout. Each tab maps to a sub-page from the original site. Content is defined in `src/data/about.ts`.

```ts
export const aboutTabs = [
  { id: 'statement', label: 'Statement of Faith', content: '...' },
  { id: 'vision', label: 'Vision Statement', content: '...' },
  { id: 'mission', label: 'Mission Statement', content: '...' },
  { id: 'values', label: 'Core Values', content: '...' },
  { id: 'history', label: 'Our History', content: '...' },
  { id: 'pastor', label: 'Pastoral Bio', content: '...' },
]
```

Content for each tab must be migrated from the original site pages. Do not fabricate content. If content is missing from context, insert a `// TODO: INSERT CONTENT` comment and move on.

---

## BUILD SEQUENCE (DO NOT SKIP STEPS)

Follow this order. Complete one step fully before moving to the next. Each step is a separate Claude Code session.

```
Step 1:  Project scaffold — next.js init, tailwind config, font setup, color tokens, globals.css
Step 2:  Data files — site.ts, teachings.ts (schema + placeholders), about.ts (schema + placeholders)
Step 3:  Layout — Nav.tsx + Footer.tsx + root layout.tsx
Step 4:  Shared components — SectionHeader, PageWrapper
Step 5:  Home page — HeroSection, ServiceTimes, FoodPantry, CommunityMinistries
Step 6:  About page — AboutTabs component + content migration from original site
Step 7:  Teachings page — TeachingCard + TeachingGrid + placeholder state
Step 8:  Donate page — copy + CTA button linking to SITE.donationUrl
Step 9:  Contact page — address, phone, Google Maps embed
Step 10: Polish pass — responsive audit, accessibility audit, SEO meta tags, performance check
```

---

## SESSION RULES

These rules apply to every Claude Code session in this project.

1. **Read this file first.** Do not ask questions answered here.
2. **Work on one step at a time.** Do not scaffold multiple steps unless explicitly instructed.
3. **Do not install packages not listed in the tech stack** without stating the reason and asking for confirmation.
4. **All components are TypeScript.** No `.js` or `.jsx` files.
5. **No inline styles.** Use Tailwind utility classes only. If a custom value is needed, add it to `tailwind.config.ts`.
6. **Content placeholders** use the comment pattern `// TODO: INSERT CONTENT` so they are grep-able.
7. **Do not use `any` types.** Define proper interfaces in the data files.
8. **Images use `next/image`.** Always provide `alt`, `width`, and `height` props.
9. **Do not create files outside the structure above** without documenting the reason.
10. **When a session is complete**, summarize what was built and what the next step is. Do not summarize mid-session.

---

## DECISIONS LOG

> Document any architectural or design decisions made during the build that deviate from or extend this file. Include the date and a short reason.

| Date | Decision | Reason |
|---|---|---|
| 2026-04-16 | Used `next.config.mjs` instead of `next.config.ts` | Next.js 14 does not natively support TypeScript config files (introduced in Next.js 15). All other config files remain `.ts` as specified. |
| 2026-04-16 | Installed Next.js `^14.2.35` (not `14.2.15`) | Security advisory on 14.2.15 (see https://nextjs.org/blog/security-update-2025-12-11). Staying within the 14.x line per CLAUDE.md. |
| 2026-04-16 | Added Tailwind `fontFamily` tokens: `font-display` (Playfair), `font-body` (Source Serif 4), `font-ui` (Inter), wired via CSS variables `--font-display` / `--font-body` / `--font-ui` from `next/font` in `layout.tsx` | CLAUDE.md specifies the three fonts but not how to expose them to Tailwind. Using CSS variables keeps `next/font`'s self-hosting benefits while making fonts available as utility classes. Fallbacks: Georgia for serifs, system-ui for Inter. |
| 2026-04-16 | App-route placeholder pages (`about/page.tsx`, `teachings/page.tsx`, `donate/page.tsx`, `contact/page.tsx`) contain `// placeholder` plus a minimal `export default function Page() { return null }` stub | Next.js App Router requires every `page.tsx` to provide a default export or the build fails. The stub preserves the "no component logic yet" intent while keeping the project buildable. Replace with real content in Steps 6–9. |
| 2026-04-16 | External image config uses `images.remotePatterns` (not legacy `images.domains`) in `next.config.mjs` | `images.domains` is soft-deprecated in Next 14; `remotePatterns` is the recommended form and allows per-host protocol/path scoping. Both configured hosts (`www.hhcf4jesus.org`, `images.unsplash.com`) are pinned to `https`. |
| 2026-04-16 | Root `layout.tsx` owns the `<main>` landmark; pages render content directly without their own `<main>` wrapper | Avoids nested `<main>` elements (invalid HTML) and DRYs up every page. Layout body uses `flex min-h-screen flex-col` with `<main className="flex-1">` so the footer pins to the bottom on short pages. |
| 2026-04-16 | `Nav` brand link doubles as the home link; "Home" is omitted from the nav list (4 items: About, Teachings, Donate, Contact) | Standard convention. Brand mark is text-only `HHCF · Lewisburg, PA` until a logo image is supplied (already an open client item). |
| 2026-04-16 | `Nav` is sticky (`sticky top-0 z-40`) with `bg-harvest-cream/95 backdrop-blur` and bottom border in `harvest-earth/15` | Keeps navigation in reach during scroll without feeling heavy. Translucent cream + blur preserves the warm aesthetic. |
| 2026-04-16 | `SectionHeader` props: `title` (required), `eyebrow?`, `description?`, `align?: 'left' \| 'center'` (default `left`), `as?: 'h1' \| 'h2' \| 'h3'` (default `h2`), `className?` | Single component handles both page-level titles (`as="h1"`) and in-page section titles (`as="h2"` or `h3`) so heading hierarchy stays correct. Eyebrow renders as small uppercase tracking-widest in `harvest-gold`; description in `harvest-earth`. Wrapped in semantic `<header>` element. Title size scales with `as`: h1 = `text-4xl md:text-5xl`, otherwise `text-3xl md:text-4xl`. |
| 2026-04-16 | `PageWrapper` is a thin `<div>` that applies `container-site section-pad`; accepts `className` for per-page overrides | Single hook to change page-level container/padding later. Uses `<div>` (not `<section>`) so callers can still own sub-section semantics inside. |
| 2026-04-16 | `src/data/site.ts` now exports `SiteAddress`, `Service`, `SiteConfig` interfaces and types `SITE` as `SiteConfig` | The literal values are unchanged from CLAUDE.md's spec. Adding interfaces makes optional `note` / `location` on services accessible without union-type narrowing in consumers, and satisfies the "no `any` types, define proper interfaces" rule. |
| 2026-04-16 | Home `HeroSection` is a 2-column grid (text left, pastor photo placeholder right) on `bg-harvest-offwhite`; mobile stacks single-column | The pastor photo is an open client item, so the right column renders a styled placeholder div with `// TODO: REPLACE` comment instead of an `<img>`. Tagline text is also marked `// TODO: REPLACE` until client confirms copy. CTAs: gold "Plan a visit" → `/contact`, outlined "Watch teachings" → `/teachings`. |
| 2026-04-16 | Primary button style: `bg-harvest-gold text-harvest-white` with `hover:bg-harvest-bark`; secondary: `border-2 border-harvest-bark text-harvest-bark` with `hover:bg-harvest-bark hover:text-harvest-cream` | Establishes a 2-tier button vocabulary using the harvest palette. Both apply `transition-colors` and `focus-visible` rings. Apply consistently in Donate and other CTAs. |
| 2026-04-16 | `ServiceTimes` renders `SITE.services` as a 3-column card grid with `Clock` icons; conditionally shows `note` (italic) and `location` per-service | Direct read from `SITE.services` keeps the Wednesday Bible Study note and Food Pantry location synced from one data source. |
| 2026-04-16 | `FoodPantry` section uses `bg-harvest-green text-harvest-cream` for visual distinction from neutral sections | Green is the palette's "community/life" accent (CLAUDE.md). Highlighting the pantry visually emphasizes the church's local service work. Pantry description is marked `// TODO: REPLACE` for client confirmation. |
| 2026-04-16 | `CommunityMinistries` ships with 3 placeholder cards (Sunday Worship, Bible Study, Food Pantry) using lucide `Sun`, `BookOpen`, `Heart` | Without a confirmed ministries list from the client, the cards are derived from facts already present in `SITE.services`. Each card is marked via a top-of-file `// TODO: REPLACE` comment. Replace when the client provides the full list. |
| 2026-04-16 | Placeholder copy convention: `// TODO: REPLACE — <what to swap and why>` for paraphrased prose; `// TODO: INSERT CONTENT` for empty fields awaiting source material | Both markers are grep-able. `REPLACE` flags fabricated/derived prose that needs client review; `INSERT CONTENT` flags fields left intentionally empty (e.g., About tabs). |
| 2026-04-16 | Verification between steps: use `npx tsc --noEmit` only. Do **not** run `npm run build` while `npm run dev` is bound to the same `.next/` directory | Mixing dev HMR chunks with production-build chunks corrupts the webpack runtime and produces `Cannot find module './<chunk>.js'` server errors on next request. If a full prod build is required, stop the dev server first or run `rm -rf .next` afterward before restarting dev. |
| 2026-04-16 | `AboutTabs` is a horizontal tablist using the WAI-ARIA tabs pattern: `role="tablist"`, per-tab `role="tab"` + `aria-selected` + `aria-controls`, and a single `role="tabpanel"` with `aria-labelledby`. Roving `tabIndex` (active=0, others=-1). Arrow Left/Right wrap, Home/End jump to ends. | Standard accessible tab implementation without adding a UI library. Hand-rolled keeps the dependency surface small per the CLAUDE.md tech stack ("no CMS, no DB"); semantics match the W3C tabs pattern so screen readers and keyboard users get the expected behavior. |
| 2026-04-16 | Active tab styling: bottom border in `harvest-gold` + `harvest-bark` text. Inactive: transparent border + `harvest-earth` text with hover `harvest-bark`. Tabs are horizontally scrollable on narrow viewports (`overflow-x-auto`, `whitespace-nowrap`) | Mirrors the gold underline used for active links in `Nav`, so the visual vocabulary is consistent. Horizontal scroll avoids cramming 6 tab labels onto a phone screen. |
| 2026-04-16 | Empty `aboutTabs` content renders an italic `harvest-earth` placeholder line ("Content coming soon. This section will be filled in when the original text is migrated…") | Better UX than a blank panel and self-documents the open-item to anyone viewing the staged site (including the client). The `// TODO: INSERT CONTENT` markers in `about.ts` remain the developer-facing prompt; this is the user-facing fallback. |
| 2026-04-16 | Tab panel content is rendered with `whitespace-pre-line` on the wrapper | Lets the migrated tab content (in `about.ts`) preserve paragraph breaks using simple `\n\n` in source strings without needing a Markdown renderer. If richer formatting is needed later, swap for `react-markdown` (would need to be added to the tech stack). |
| 2026-04-16 | About page uses `as="h1"` on `SectionHeader` for the page title; `AboutTabs` uses an internal `<h2>` per active panel | Keeps a single `<h1>` per route (SEO + a11y) and gives each tab panel its own clear sub-heading. |
| 2026-04-16 | Per-route `metadata` (title + description) added on `/about` via Next 14's `export const metadata` | Improves SEO/share previews per route. Use the same pattern on Teachings, Donate, Contact in their respective steps. |
| 2026-04-16 | Added `i.ytimg.com` to `next.config.mjs` `images.remotePatterns` (in addition to the original `www.hhcf4jesus.org` and `images.unsplash.com`) | YouTube auto-generates per-video thumbnails at `https://i.ytimg.com/vi/<id>/hqdefault.jpg` — required by `TeachingCard` for `youtube`-type entries. Without this, `next/image` rejects the URL at request time. |
| 2026-04-16 | `TeachingCard` derives the thumbnail in this order: explicit `teaching.thumbnail` → YouTube auto-thumb (when `type === 'youtube'`) → icon placeholder | Lets YouTube entries omit `thumbnail` while still showing a real image, and gives non-YouTube entries (`video`, `audio`) a graceful icon fallback (`Video` / `Headphones` from lucide). |
| 2026-04-16 | YouTube ID parsing: regex `/(?:youtube\.com\/watch\?v=\|youtu\.be\/\|youtube\.com\/embed\/)([\w-]{11})/` covers `watch?v=`, `youtu.be/`, and `embed/` URL forms | Pastor may paste any of these URL shapes; the helper normalizes them to the 11-char ID. Missing or malformed URLs fall through to the icon placeholder rather than throwing. |
| 2026-04-16 | `TeachingCard` is an `<a target="_blank" rel="noopener noreferrer">` wrapping the entire card — videos open in a new tab | Sermon recordings live on YouTube; embedding inline would require client JS, fight YouTube's tracking, and break offline use. New-tab + `noopener` is the safest, simplest pattern. Revisit if the client wants inline playback or an audio-only player. |
| 2026-04-16 | Date formatting helper parses `YYYY-MM-DD` as local time via `new Date('YYYY-MM-DDT00:00:00')` (no `Z`) | Parsing the ISO date directly with `new Date('YYYY-MM-DD')` treats it as UTC midnight, which displays as the previous day in negative-offset timezones (US Eastern). Adding `T00:00:00` (without `Z`) anchors it to local midnight so the displayed date matches what was entered. |
| 2026-04-16 | `TeachingGrid` sorts entries newest-first by `date.localeCompare` and renders an empty state (icon + heading + body + "Visit us in person" CTA) when `teachings.length === 0` | Newest-first matches sermon-archive convention. Empty state preserves the page's polish while pastor's recordings are pending — same UX intent as the AboutTabs "Content coming soon" placeholder. ISO `YYYY-MM-DD` strings sort correctly via `localeCompare` so we avoid `new Date()` for sort. |
| 2026-04-16 | Teaching grid columns: 1 col phone, 2 col tablet (`sm:`), 3 col desktop (`lg:`) | Standard archive grid. The `<a>`-card wrapper plus `aspect-video` thumbnail + metadata block reads well at all three breakpoints without needing to clamp the description. |
| 2026-04-16 | `SITE.donationUrl` set to `https://harvesthousechristianfellowsh.betterworld.org/donate` (BetterWorld portal supplied by client) | First open-item resolved. Removes the empty-string fallback from the Donate page. |
| 2026-04-16 | Donate page layout: 3-column grid (`md:col-span-2` primary "Give online" card + 1-column "Questions about giving?" aside) | Primary card carries the CTA and explanatory copy; the aside provides a phone/contact escape hatch for donors who'd rather speak with someone. Stacks single-column on mobile. |
| 2026-04-16 | Donate CTA renders only when `SITE.donationUrl` is non-empty; otherwise shows an italic fallback ("Online giving coming soon — please call us to arrange a gift.") | Defensive guard. If the URL is ever cleared in `site.ts`, the page degrades gracefully instead of producing a broken `<a href="">` link. Phone `<a tel:>` in the aside is the fallback contact path. |
| 2026-04-16 | External giving link uses `<a target="_blank" rel="noopener noreferrer">` with a trailing lucide `ExternalLink` icon | Same new-tab convention as `TeachingCard`. The icon visually signals "leaves this site" so donors aren't surprised by the BetterWorld redirect. |
| 2026-04-16 | Donate page intro copy is paraphrased (`// TODO: REPLACE` marker on the `description` prop) | Wording references our worship/Bible study/food pantry — derived from `SITE` facts but not the client's own words. Replace when the client supplies preferred giving copy. |
| 2026-04-16 | Added Tailwind token `maxWidth.container: '64rem'` and component classes `.container-site` / `.section-pad` in `globals.css` | CLAUDE.md specifies `max-w-5xl mx-auto px-4` and `py-16 md:py-24` as repeated patterns. Extracting to named utilities avoids scattering the same class strings across every page. `max-w-5xl` in Tailwind = 64rem, so `.container-site` is equivalent. Use `.container-site` and `.section-pad` in new components. |
| 2026-04-16 | Added `typecheck` npm script (`tsc --noEmit`) | Not listed in CLAUDE.md's build commands but standard practice. Use `npm run typecheck` to verify types without a full build. |
| 2026-04-16 | Added `scroll-behavior: smooth` to `html` in base layer | Small UX polish for in-page anchor navigation (e.g., about page tabs). Not in spec — revert if undesired. |

---

## OPEN ITEMS (WAITING ON CLIENT)

- [x] Donation portal URL (received 2026-04-16 — BetterWorld, wired to `SITE.donationUrl`)
- [ ] Video teaching recordings or YouTube links (needed for `/teachings` page)
- [ ] Google Maps embed URL for contact page
- [ ] Pastor Dan photo (high-res, for home page hero area)
- [ ] Any updated logo or header image to replace existing banner
- [ ] Confirmation of whether music/audio teachings will also be included or only video
