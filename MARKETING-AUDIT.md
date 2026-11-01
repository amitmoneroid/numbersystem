# Marketing Audit & Implementation — numbersystemconverter.com

**Audit date:** 1 November 2026  
**Scope:** Live site crawl (12 indexable URLs), mobile Lighthouse, on-page content fact-check, conversion/UX review, trust and privacy review, schema/GEO checks.  
**Result:** Findings implemented in the Astro codebase; the site is ready to deploy.

---

## Executive summary

The site already had strong SEO fundamentals (SEO 100, best practices 100) and unusually good long-form content for a utility tool. The audit found four issues that were costing real trust and conversions:

1. **Factual errors in a calculator brand.** Several headline conversions on the homepage and catalog were wrong by a factor of ten — the exact mistake the product exists to prevent.
2. **A privacy promise the site did not keep.** Google Analytics was live while the privacy policy said no analytics were used.
3. **An unsupported “works offline” claim.** The copy promised offline use, but there was no service worker.
4. **A dark-mode CSS scoping bug.** Most dark-mode overrides in scoped Astro styles never applied, producing low-contrast text and buttons.

All four are fixed, along with accessibility, performance, CRO and schema improvements.

### Lighthouse (mobile)

| Category | Before | After |
|---|---:|---:|
| Performance | 75 | **97** |
| Accessibility | 93 | **100** |
| Best practices | 100 | **100** |
| SEO | 100 | **100** |

Supporting metrics: **CLS 0.167 → 0**, **TBT 670 ms → 60 ms**, **FCP 2.6 s → 1.6 s**.

---

## 1. Content accuracy (critical)

Wrong numbers on a conversion site are a brand-level trust problem, and Google’s helpful-content systems reward demonstrated accuracy. Fixed:

| Page | Claim before | Corrected to |
|---|---|---|
| Home / quick reference | 1 trillion = 1 Padma (1,000 lakh crore) | 1 trillion = **1 lakh crore** |
| Home / quick reference | 1 quadrillion = 1 lakh crore | 1 quadrillion = **1 Padma (100 lakh crore)** |
| Home / international business | $394 bn = 39.4 arab ≈ 3,940 crore | $394 bn = **394 arab = 39,400 crore** |
| Home / finance | ₹50 crore ≈ $60 million | ₹50 crore = **500 million rupees = 0.5 billion rupees** (FX removed) |
| Home / real estate | ₹2.5 crore = $300,000 ≈ 0.3 million | ₹2.5 crore = **25 million rupees = 0.025 billion rupees**; FX applied separately |
| Home / converter guide | 2.5 crore written as “$30 million” | 2.5 crore = **25 million** |
| Home / converter guide | crore vs billion differs by ten | differs by **one hundred** |
| Knowledge catalog | $394 bn read as 39.4 arab | **394 arab (39,400 crore)** |
| Conversion table guide | 10¹² Indian format “1,00,000 crore” | **10,00,00,00,00,000** |

**Why it matters:** a visitor who spots one wrong conversion stops trusting every result. These were the highest-priority fixes in the audit.

---

## 2. Trust, privacy and legal consistency

**Finding:** Google Analytics 4 (`G-3E6Y8CWECC`) loaded on every page while `/privacy-policy/` stated “we don’t collect any” data and “no analytics platforms”. That is both a trust contradiction and a GDPR/ePrivacy risk.

**Implemented:**
- Analytics is now **opt-in only** via a new `ConsentBanner.astro`. No GA script is requested until the visitor clicks **Accept analytics**.
- **Decline** sets a local flag, loads nothing, and deletes any `_ga*` cookies.
- The footer now has an **Analytics settings** control that revokes consent, clears the choice and reopens the banner.
- Privacy policy rewritten to disclose GA4 accurately (aggregate page data, no input values, no IP storage), the consent keys, the opt-out add-on, and the visitor’s choices. Updated to **1 November 2026**.
- About-page claims changed from “Zero Data Collection” to “Zero input collection” and “no tracking” to “no tracking of the numbers you enter”.
- **Google Fonts removed** and Inter / JetBrains Mono self-hosted, so the only remaining third-party request is optional analytics.

---

## 3. “Works offline once loaded” is now true

**Finding:** the claim appeared in the hero, about page, knowledge catalog and the online-converter guide, but the site had no service worker.

**Implemented:**
- New `public/sw.js`:
  - network-first for navigations, cached fallback when offline;
  - cache-first for hashed `/_astro/*` assets and `/fonts/*`;
  - precaches the home page plus its CSS, JS and fonts on install, so the **first** visit is usable offline, not just the second.
- Registered from `Layout.astro` (skipped on localhost).
- `/sw.js` served with `Cache-Control: no-cache`; static assets now cached immutably.

---

## 4. Dark-mode CSS scoping bug (site-wide)

**Finding:** scoped Astro styles such as `.dark .btn-primary` compiled to `.dark[data-astro-cid-…] .btn-primary`, which never matched `<html class="dark">`. Dark-mode overrides were silently dead across the site. The contact “View FAQ” button rendered white text on `#ededed` (1.17:1 contrast).

**Implemented:** converted every scoped `.dark` selector to `:global(.dark)` in BaseConverter, FAQ, 404, 500, contact, home and knowledge catalog. Verified the contact page now scores **100 accessibility**.

---

## 5. Accessibility

Fixed to **100** on the home, guide and contact pages:

- Dark-mode `--color-mute` raised from `#666` to `#a1a1a1`; light mode from `#888` to `#6b6b6b`.
- Result labels/base labels overridden to `#c9d7e8` on the blue result panel.
- Heading order fixed: converter `h3 → h2`, step titles `h4 → h3`, footer nav `h4 → h2`, contact cards `h3 → h2`.
- Inline links in prose are now underlined, not distinguished by colour alone.
- Added a **skip link** and `id="main"` on every page.
- Added visible focus styles, `aria-current` nav state, `aria-pressed` theme toggle, Escape-to-close mobile menu, `role="alert"` on the converter error.
- Fixed the tablet navigation: the hamburger breakpoint moved from 600px to 900px, so links no longer wrap inside the fixed-height navbar at 601–900px.
- Fixed light mode: choosing light now applies the `.light` class instead of only removing `.dark`, so the light token overrides actually run.
- Removed the empty `h3` placeholder in the naming results.

---

## 6. Performance

- **Self-hosted fonts** with `font-display: optional` + preload removed the third-party font swap. This alone eliminated CLS (0.167 → 0) and lifted performance from 75 to the mid-90s.
- **Consent-gated GA** removes ~70 KB of unused JavaScript from the first load.
- **Removed the forced reflow** (`offsetHeight`) in the naming converter’s animation.
- **Fixed a caching bug:** `_headers` cached `/assets/*` immutably, but Astro emits `/_astro/*`. Added the correct immutable rule (and one for `/fonts/*`).
- **Pre-rendered the default base-converter result and steps**, removing the JS-driven layout shift on load.
- **OG image** recompressed from 215 KB to 108 KB (still 1200×630).

---

## 7. Conversion / CRO

- Added a capability strip under the hero: Base 2–36 · 13 naming scales · Every step shown · Runs in your browser.
- Added a visible **reviewed-by / how-we-check** line beside the converter.
- Changed the “100% Free & Accurate” stat to **“0 sign-ups or uploads”** — a concrete trust signal instead of an unverifiable claim.
- Naming converter:
  - **Swap** button between From and To (now visible on mobile too);
  - **Copy result** button that copies the value **with its unit** (e.g. “540 Crore”);
  - labels left-aligned;
  - very small results now display as `0.000000054`, not `5.4e-8`.
- Kept the existing pre-filled default (`5.4 Billion → 540 Crore`) so the first view always contains a result.

---

## 8. SEO / E-E-A-T / GEO

- Organization schema now includes `publishingPrinciples`, `correctionsPolicy` and a `contactPoint`.
- `WebApplication` schema now includes `image`.
- Homepage `dateModified`, sitemap `lastmod`, footer date, about-page review date and `llms-full.txt` updated to **2026-11-01**.
- 404 and 500 pages now send `noindex, follow`.
- Preview deployments (`*.pages.dev`) now receive `X-Robots-Tag: noindex` from `functions/_middleware.js`; the old host-based `_headers` rule was ineffective.
- `robots.txt`, `sitemap.xml`, canonical URLs, titles, descriptions and H1s verified across all 12 indexable URLs.
- All internal links and anchor targets verified: **0 broken**.
- All JSON-LD blocks parse.

---

## Files changed

```
README.md
public/_headers
public/fonts/inter-latin.woff2
public/fonts/jetbrains-mono-latin.woff2
public/fonts/OFL.txt
public/llms-full.txt
public/og-image.png
public/site.webmanifest
public/sitemap.xml
public/sw.js
scripts/generate-og.mjs
functions/_middleware.js
src/components/BaseConverter.astro
src/components/ConsentBanner.astro
src/components/FAQ.astro
src/components/Footer.astro
src/components/Navbar.astro
src/data/guides.ts
src/layouts/GuideLayout.astro
src/layouts/Layout.astro
src/pages/404.astro
src/pages/500.astro
src/pages/about.astro
src/pages/contact.astro
src/pages/index.astro
src/pages/knowledge-catalog.astro
src/pages/knowledge-catalog/number-system-conversion-table.astro
src/pages/privacy-policy.astro
src/pages/terms.astro
src/styles/global.css
```

---

## Verification performed

- `npm run build` — 14 pages built successfully.
- `node` crawl of `dist/` — 0 broken internal links, 0 missing anchors.
- JSON-LD parse check — all blocks valid.
- Lighthouse mobile (home, conversion-table guide, contact) — accessibility 100, best practices 100, SEO 100.
- Desktop and mobile screenshots reviewed for the base converter, naming converter and contact page.
- Encoding check — no mojibake or BOM in source files.

---

## Manual follow-ups (not code)

1. **Deploy:** `npm run deploy` (Cloudflare Pages via Wrangler). Changes are built but not deployed.
2. **Cloudflare dashboard:** the live `robots.txt` currently contains two `User-agent: *` blocks — Cloudflare’s managed Content-Signal block (without `ai-input=yes`) followed by the project file (with it). Decide whether to keep Cloudflare’s managed block; if yes, remove the duplicate `Content-Signal` line from the project file to avoid conflicting signals.
3. **Search Console:** after deploy, re-submit `sitemap.xml` and request indexing for the homepage and the updated conversion-table guide. Watch for “Low value content” recovery.
4. **Analytics:** consent rate will reduce reported sessions; this is expected. Use the footer “Analytics settings” control to test grant/decline/revoke.
5. **Content template:** the audit found that prose conversions were the weak point, not the calculator. Add a pre-publish check that every prose example is recomputed against the converter (the page already claims this in the metadata, so make it true operationally).

---

## Conversion defaults (latest preference pass)

- Both converters now start with **value 1**: the base converter renders `1₁₀ = 1₂` with one division step, and the naming converter renders `1 Billion = 100 Crore`.
- The homepage now opens on **Indian ⇄ International**; the base converter is one tab away and still opens automatically for `/#converter` or `/#base-converter`.
- The navbar order follows the default: **Lakh & Crore** before **Base Converter**.
- `public/llms.txt` was updated to describe the naming-first default.

---

## GSC error remediation (1 November 2026)

The Google Search Console skill's indexing/canonicalisation checklist was applied to the live redirect matrix. No GSC API credentials are available in this workspace, so the fixes below are code/edge-level; the final "Validate fix" click is a manual GSC action.

| GSC issue | URLs | Finding | Fix |
|---|---|---|---|
| Page with redirect | `http://numbersystemconverter.com/`, `https://numbersystemconverter.com/privacy-policy` | Both are legacy variants of canonical URLs. HTTP → HTTPS and slash-less → slash are correct 301s. | Confirmed 301 targets are HTTPS + trailing slash. Added scheme/host/slash canonicalisation to middleware so HTTP requests resolve in one hop when the Function sees them. Removed all HTTP and slash-less internal links; sitemap and `llms.txt` already use the canonical form. |
| Redirect error | `/contact`, `/about`, `/terms` (slash-less) | The redirect target was correct (200), but `_redirects` used relative targets and middleware used a fixed path list, leaving room for a two-hop chain on HTTP/www requests. | `_redirects` now redirects to absolute HTTPS + trailing-slash URLs. Middleware now handles scheme, `www`, and any extensionless path in a single 301. Verified `301 → 200` for each URL. |
| Alternate page with proper canonical tag | `/`, `/privacy-policy/` | The most likely alternate is the `*.pages.dev` preview deployment (same pages, canonical pointing at the apex). `www` and HTTP variants were already 301s; `index.html` returns Cloudflare's 308. | Preview deployments now receive `X-Robots-Tag: noindex` from `functions/_middleware.js`. The ineffective host-based `_headers` rule was removed. Canonical tags and sitemap URLs are the apex HTTPS trailing-slash form. |

### Verified redirect matrix

| Request | Response |
|---|---|
| `http://numbersystemconverter.com/` | `301 → https://numbersystemconverter.com/` |
| `http://numbersystemconverter.com/contact` | `301 → https://numbersystemconverter.com/contact/` |
| `https://numbersystemconverter.com/privacy-policy` | `301 → https://numbersystemconverter.com/privacy-policy/` |
| `https://numbersystemconverter.com/contact` | `301 → https://numbersystemconverter.com/contact/` |
| `https://numbersystemconverter.com/about` | `301 → https://numbersystemconverter.com/about/` |
| `https://numbersystemconverter.com/terms` | `301 → https://numbersystemconverter.com/terms/` |
| `https://www.numbersystemconverter.com/` | `301 → https://numbersystemconverter.com/` |
| `https://numbersystem.pages.dev/` | `200` + `X-Robots-Tag: noindex` |

### Manual GSC steps after deploy

1. Deploy, then re-check each URL in GSC URL Inspection; confirm "Page is not indexed: Page with redirect" or "Alternate page with proper canonical tag" now points only at the canonical URL.
2. Click **Validate fix** on each issue. Google will recrawl; "Page with redirect" and "Alternate page with proper canonical tag" are informational and can take weeks to clear.
3. Resubmit `sitemap.xml`.
4. For the preview domain, use **Removals → Temporary removal** only if it still appears after the noindex recrawl.
5. Keep Cloudflare **Always Use HTTPS** enabled; it is currently returning the HTTP → HTTPS 301 before the Function runs.
