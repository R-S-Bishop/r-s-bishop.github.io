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

## Session: 25 March 2026

### Context
- AI Literacy Series launch — three episodes produced via NotebookLM
- New dedicated AI Literacy tab added to site
- EU AI Act analysis pipeline completed (cheat sheet + four-lens analysis)
- Working directly on `main` branch

### Completed Tasks

#### 1. New Page — AI Literacy Series (`ai-literacy.html`)
- Created standalone AI Literacy Series page as a new nav tab
- **Positioning:** Plain-English explainers on AI topics that matter in practice
- **Structure:** Three episode cards, each with responsive YouTube embed, excerpt, "In this episode" bullet list, NotebookLM attribution, and PDF download CTA(s)
- **Episode 1 — The EU AI Act: What It Actually Means**
  - YouTube: `https://www.youtube.com/embed/6jdQTXq6U2U`
  - Two download buttons: Cheat Sheet first, Four-Lens Analysis second
  - PDFs: `RB_EU_AI_Act_Cheat_Sheet_2026.pdf`, `RB_EU_AI_Act_Four_Lens_Analysis_2026.pdf`
- **Episode 2 — What Happens to Your Data When You Use an LLM?**
  - YouTube: `https://www.youtube.com/embed/77JNO-1Nuzc`
  - PDF: `RB_LLM_Data_Explainer_2026.pdf`
- **Episode 3 — Cookie Policies: What You're Actually Agreeing To**
  - YouTube: `https://www.youtube.com/embed/MTFJz-2uvVQ`
  - No PDF download (episode uses ryanbishop.co.uk cookie policy as live worked example)
- **Files added:** `ai-literacy.html`
- **Files added (PDFs):** `RB_EU_AI_Act_Cheat_Sheet_2026.pdf`, `RB_EU_AI_Act_Four_Lens_Analysis_2026.pdf`, `RB_LLM_Data_Explainer_2026.pdf`

#### 2. Nav Update — All Pages
- Added `AI Literacy` nav link between `Insights` and `Contact` on all 9 pages (including new `ai-literacy.html`)
- **Files changed:** `index.html`, `about.html`, `expertise.html`, `portfolio.html`, `insights.html`, `contact.html`, `privacy.html`, `terms.html`, `ai-literacy.html`

#### 3. Sitemap Update
- Added `ai-literacy.html` to `sitemap.xml` with `lastmod 2026-03-25`, `changefreq monthly`, `priority 0.8`
- Updated `index.html` lastmod to `2026-03-25`
- **Files changed:** `sitemap.xml`

### Post-Deploy Actions Required
- Submit updated sitemap in Google Search Console
- Use URL Inspection tool to request indexing of `ai-literacy.html`
- Publish LinkedIn post (Series launch — EU AI Act as CTA, ryanbishop.co.uk as destination)
- Episode 3 LinkedIn post (cookies) to follow approximately 2 weeks after Series launch post

### Known / Outstanding
- Episode 3 has no PDF download — intentional; the episode uses the live site cookie policy as its worked example
- LinkedIn post drafted and approved — held pending deploy

---

## Session: 14 April 2026

### Context
- Adding `brief.html` (Weekly AI Intelligence Brief) — replaces `ai-literacy.html` in nav across all pages
- Issue 2 of the brief published today (14 Apr 2026)

### Completed Tasks

#### 1. New Page — `brief.html`
- Created Weekly AI Intelligence Brief archive page
- **Features:** intro copy, meta row (format/frequency/audience), issue archive table, EmailOctopus sign-up widget, AI-generation disclaimer
- **Issue archive:** Issue 2 (14 Apr 2026) shown first (most-recent-first order), Issue 1 / Pilot (31 Mar 2026) second
- **Fixes applied during preview:** truncated file bug (missing `</script></body></html>`), "five" → "four" themed sections, italic tagline centred, EmailOctopus widget centred in green box, Issue 1 labelled "(Pilot)"
- **Files added:** `brief.html`

#### 2. New Directory — `briefs/`
- Added PDF download directory to repo root
- **Files added:** `briefs/RB Weekly AI Brief - Issue 1 - 31.03.2026.pdf`, `briefs/RB Weekly AI Brief - Issue 2 - 14.04.2026.pdf`

#### 3. Nav Update — All Pages
- Replaced `<a href="ai-literacy.html">AI Literacy</a>` with `<a href="brief.html">AI Brief</a>` across all 9 HTML pages
- **Files changed:** `index.html`, `about.html`, `expertise.html`, `portfolio.html`, `insights.html`, `contact.html`, `privacy.html`, `terms.html`, `brief.html`

#### 4. Sitemap Update — `sitemap.xml`
- Replaced `ai-literacy.html` entry with `brief.html`
- Updated `lastmod` for index and brief to `2026-04-14`
- Set `changefreq: weekly`, `priority: 0.9` for brief

#### 5. QC — Preview & Interactive Testing
- Previewed all pages via local Ruby/WEBrick server (`/tmp/rb-preview`)
- Hamburger nav tested on mobile (375px) — all 7 links present, open/close working ✅
- Both PDF download links confirmed 200 OK ✅
- EmailOctopus form fields accept input ✅
- GA `brief_download` event wired on both download buttons ✅

#### 6. Post-Deploy Fix — `ai-literacy.html` Nav
- After push, GitHub Pages showed an issue caused by `ai-literacy.html` (brought in via merge from the 25 March branch) still having the old nav (`AI Literacy` → `ai-literacy.html`)
- Fixed: nav updated to match all other pages (`AI Brief` → `brief.html`), committed and pushed

### Post-Deploy Confirmed ✅
- GitHub Pages live and correct
- EmailOctopus subscribe workflow set up and tested ✅

---

## Session: 16 April 2026

### Context
- Bug fix: AI Brief and AI Literacy nav tabs were competing — only one appeared depending on which page you were on
- Root cause: when `brief.html` was added in the previous session, the nav on each page replaced `AI Literacy` with `AI Brief` rather than adding it alongside; `ai-literacy.html` was then fixed in isolation, leaving the two pages with mutually exclusive navs

### Completed Tasks

#### 1. Nav Fix — Both Tabs Present on All Pages
- **Issue:** Every page showed either `AI Brief` OR `AI Literacy` in the nav, never both
  - `brief.html` had `AI Brief` (active) but no `AI Literacy` link
  - `ai-literacy.html` had `AI Literacy` (active) but no `AI Brief` link
  - All other 8 pages had `AI Brief` only — no `AI Literacy`
- **Fix:** Added the missing link to each page so the full nav order is: Home → About → Expertise → Portfolio → Insights → AI Brief → AI Literacy → Contact
- **Files changed:** `index.html`, `about.html`, `expertise.html`, `portfolio.html`, `insights.html`, `contact.html`, `privacy.html`, `terms.html`, `brief.html`, `ai-literacy.html`
- **Verified live:** Site confirmed rendering and responding correctly in the real world ✅

---

## Session: 19 April 2026

### Context
- Adding Episode 4 to the AI Literacy Series
- New episode: *What is an AI model, really?* — covers LLM fundamentals via a recipe analogy, with dual audience framing (families and organisations)

### Completed Tasks

#### 1. New Episode — AI Literacy Series Episode 4
- **Title:** What is an AI model, really?
- **YouTube:** `https://www.youtube.com/embed/eu7xhZq05q4`
- **PDF:** `RB_AI_Model_Explainer_2026.pdf` (sourced from `/Users/ryan/Desktop/Ryan Bishop/AI Literacy/What is an AI model?/`)
- **Card content:** Dual-audience excerpt (families + organisations), four bullets covering: AI taxonomy, recipe analogy, pattern matching, model vs product distinction
- **Files changed:** `ai-literacy.html`
- **Files added:** `RB_AI_Model_Explainer_2026.pdf`

#### 2. Keywords Meta — `ai-literacy.html`
- Added: `what is an AI model`, `large language model explained`

#### 3. Sitemap — `sitemap.xml`
- Re-added `ai-literacy.html` (had been dropped in the 14 Apr session when `brief.html` replaced it)
- Updated `index.html` lastmod to `2026-04-19`
- Set `ai-literacy.html` lastmod to `2026-04-19`, `changefreq monthly`, `priority 0.8`

### Post-Deploy Actions Required
- Use URL Inspection in Google Search Console to request re-indexing of `ai-literacy.html` (sitemap was out of date)
- Consider a LinkedIn post for Episode 4 launch

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
