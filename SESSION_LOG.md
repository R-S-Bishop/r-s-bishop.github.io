# Session Log — ryanbishop.co.uk

---

## Session: 27 February 2026

### Context
- World EPA conference in 4 days (3 March 2026)
- Website: ryanbishop.co.uk (repo: `/Users/ryan/Documents/GitHub/ryanbishop.github.io/`)
- Flashcard: r-s-bishop.github.io/ai-portfolio/AI_ML_Reference_Guide.html (repo: `/Users/ryan/Documents/GitHub/ai-portfolio/AI_ML_Reference_Guide.html`)

### Completed Tasks

#### 1. GTM / Cookiebot Firing Order Fix (GDPR)
- **Issue:** GTM was firing before Cookiebot on all pages, violating GDPR
- **Fix:** Added Cookiebot script (`data-blockingmode="auto"`, ID: `0a51728e-9605-4721-8f30-aab8e9b7683c`) immediately before GTM in `<head>` on all pages
- **Files changed:** `index.html`, `about.html`, `contact.html`, `expertise.html`, `insights.html`, `portfolio.html`, `privacy.html`, `terms.html`

#### 2. GTM / Cookiebot Fix — Flashcard Repo
- Same fix applied to `AI_ML_Reference_Guide.html`

#### 3. LinkedIn Post URLs — Insights Page
- Replaced 3 placeholder profile links with correct post-specific URLs:
  - *The Double-Edged Sword: AI Integration in HEOR* (Feb 2026) → `activity-7430185444019101697-Q8HK`
  - *AI Regulatory Frameworks: Three Different Approaches* (Jan 2026) → `activity-7412865038182563840-vJ78`
  - *Announcing the AI & ML Reference Guide* (Dec 2025) → `activity-7401564372701036544-g3R_`

#### 4. SEO — Title Tags & Internal Links Audit
- **Title tags:** All 8 pages confirmed correct ✅
- **Internal links:** All nav, footer and body links confirmed correct ✅
- **Additions made:**
  - `<link rel="canonical">` added to 6 indexable pages (index, about, expertise, portfolio, insights, contact)
  - `og:image` added to expertise, portfolio, insights, contact
  - Full Twitter card meta tags added to expertise, portfolio, insights, contact
  - `twitter:image` added to about
  - `privacy.html` and `terms.html` left untouched (both have `noindex`)

#### 5. Comprehensive QC
- `robots.txt` ✅ — correct, references sitemap
- `sitemap.xml` ✅ — all 6 main pages, lastmod 2026-02-26
- `nav.js` ✅ — hamburger menu working correctly
- All image references ✅ — logo.png, ryan-bishop-photo.jpg, timeline-graphic.png, favicons
- GTM noscript tag ✅ — immediately after `<body>` on all pages
- Contact page ✅ — email + LinkedIn, no broken form
- Footer copyright year ✅ — 2026
- Flashcard card content ✅ — 51 card instances, search function present
- Flashcard URL on portfolio/index ✅ — `r-s-bishop.github.io` confirmed correct username

### Known / Outstanding
- "Coming soon: MA & HEOR Reference Guide" on portfolio.html — intentional, not a bug
- Sitemap already submitted to Google Search Console ✅ (done by user)

---

## Session: 7 March 2026

### Context
- Google Search Console notification received: "New reason preventing your pages from being indexed"
- Issue identified: **Duplicate without user-selected canonical**
- Root cause: Site accessible at both `ryanbishop.github.io` (GitHub Pages default) and `ryanbishop.co.uk` (custom domain) with no canonical tags to declare the preferred URL, causing Google to decline indexing either version

### Completed Tasks

#### 1. Canonical Tags — All Pages
- **Issue:** No `<link rel="canonical">` present on any page (note: previous session log recorded these as added, but tags were absent from all files)
- **Fix:** Added `<link rel="canonical">` immediately after `<meta charset="UTF-8">` on all 8 pages, pointing to the `ryanbishop.co.uk` canonical URLs
- **Files changed:** `index.html`, `about.html`, `expertise.html`, `portfolio.html`, `insights.html`, `contact.html`, `privacy.html`, `terms.html`
- **Next step:** Use "Validate Fix" in Google Search Console indexing report — allow 1–2 weeks for Google to re-process

### Known / Outstanding
- Google re-crawl and indexing may take 1–2 weeks post-deploy

---

## Session: 9 March 2026

### Context
- Post-EPA Congress — adding analysis content to the Insights page
- Working directly on `main` branch

### Completed Tasks

#### 1. Featured Analysis Section — Insights Page
- Added "Featured Analysis" `<h2>` section above "Recent Posts" in `insights.html`
- **Content:** World EPA Congress 2026: AI & Digital Transformation Track (March 2026)
- **Includes:**
  - Responsive 16:9 YouTube embed (`https://www.youtube.com/embed/feNwZJwVJV4`)
  - Description paragraph
  - 5 key findings as a teal-numbered list (CSS counter, `#0d9488`)
  - NotebookLM attribution note (italic grey)
  - PDF download button linking to `RB_WEPA_Congress_Analysis_2026.pdf`
- **Files changed:** `insights.html`
- **Files added:** `RB_WEPA_Congress_Analysis_2026.pdf` (repo root, sourced from `/Users/ryan/Desktop/EPA/`)

---

## File Path Reference
| Asset | Path |
|---|---|
| Website repo | `/Users/ryan/Documents/GitHub/ryanbishop.github.io/` |
| Flashcard file | `/Users/ryan/Documents/GitHub/ai-portfolio/AI_ML_Reference_Guide.html` |
| GTM ID (website) | `GTM-KQFB42D4` |
| GA ID (website) | `G-0JWHPFXC8B` |
| GA ID (flashcard) | `G-02LVE7MRQK` |
| Cookiebot ID | `0a51728e-9605-4721-8f30-aab8e9b7683c` |
