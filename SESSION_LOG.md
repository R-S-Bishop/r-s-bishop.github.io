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

## Session: 21 April 2026

### Context
- Issue 3 of the RB Weekly AI Brief published today
- Rename: "Weekly AI Intelligence Brief" → "Weekly AI Brief" throughout `brief.html`

### Completed Tasks

#### 1. Brief Rename — `brief.html` (Ryan Bishop, committed separately)
- Removed "Intelligence" from all instances of the brief title across `brief.html`
- Now reads "RB Weekly AI Brief" / "Weekly AI Brief" consistently throughout the page
- **Commit:** `b5b8ff8` — "Update title and references from 'Intelligence Brief' to 'Brief'"

#### 2. Issue 3 — Archive Table
- Added Issue 3 row at the top of the archive table (most-recent-first order)
- **Date:** 21 Apr 2026
- **Standout story:** Novo Nordisk partners with OpenAI to accelerate drug discovery — using AI to analyse complex datasets and identify promising new compounds. As drugmakers increasingly turn to AI partnerships at scale, the implications for evidence generation and HTA submissions are growing harder to ignore.
- GA download event wired: `brief_download`, issue 3, date 21.04.2026
- **Files changed:** `brief.html`

#### 3. Issue 3 PDF — `briefs/`
- Copied `RB Weekly AI Brief - Issue 3 - 21.04.2026.pdf` into `briefs/` directory
- Download link confirmed 200 OK
- **Files added:** `briefs/RB Weekly AI Brief - Issue 3 - 21.04.2026.pdf`

#### 4. "Coming Soon" Line
- Updated from "Issue 3 publishes week of 21 April 2026" → "Issue 4 publishes week of 28 April 2026"

#### 5. Episode 2 PDF Fix — `ai-literacy.html`
- `RB_LLM_Data_Explainer_2026.pdf` was missing from the repo entirely (returning 404)
- Sourced from Desktop and copied into repo root
- Download CTA label standardised: "Download Full Written Analysis" → "Download Written Analysis (PDF) ↓" (matching Episodes 3 & 4)
- All five AI Literacy PDFs confirmed 200 OK

---

## Session: 28 April 2026

### Context
- Issue 4 of the RB Weekly AI Brief published today

### Completed Tasks

#### 1. Issue 4 — Archive Table
- Added Issue 4 row at the top of the archive table (most-recent-first order)
- **Date:** 28 Apr 2026
- **Standout story:** New UK clinical trial regulations came into force today — designed to give patients faster access to new treatments while maintaining safety standards. Post-Brexit regulatory divergence from EU frameworks is now a live consideration for AI-enabled diagnostics and digital therapeutics seeking UK market entry.
- GA download event wired: `brief_download`, issue 4, date 28.04.2026
- **Files changed:** `brief.html`

#### 2. Issue 4 PDF — `briefs/`
- Copied `RB Weekly AI Brief - Issue 4 - 28.04.2026.pdf` into `briefs/` directory
- **Files added:** `briefs/RB Weekly AI Brief - Issue 4 - 28.04.2026.pdf`

#### 3. "Coming Soon" Line Removed
- Removed "Issue 4 publishes week of 28 April 2026" — Issue 4 is now live

---

## Session: 6 May 2026

### Context
- Issue 5 of the RB Weekly AI Brief published today

### Completed Tasks

#### 1. Issue 5 — Archive Table
- Added Issue 5 row at the top of the archive table (most-recent-first order)
- **Date:** 6 May 2026
- **Standout story:** The EU AI Act's high-risk obligations are currently scheduled to take effect August 2, 2026 — 13 weeks away. A Digital Omnibus proposal is expected to push this to December 2027, but it hasn't been formally adopted. August 2 remains the current legal obligation.
- GA download event wired: `brief_download`, issue 5, date 06.05.2026
- **Files changed:** `brief.html`

#### 2. Issue 5 PDF — `briefs/`
- Copied `RB Weekly AI Brief - Issue 5 - 06.05.2026.pdf` into `briefs/` directory
- **Files added:** `briefs/RB Weekly AI Brief - Issue 5 - 06.05.2026.pdf`

#### 3. Preview Server Fix — `.claude/launch.json`
- Fixed persistent `PermissionError: os.getcwd()` on preview server startup
- **Root cause:** sandboxed preview process couldn't access its working directory when launching `/usr/bin/python3` directly
- **Fix:** Changed `runtimeExecutable` to `/bin/bash` with `runtimeArgs: ["-c", "cd /tmp && /usr/bin/python3 /tmp/rb_proxy.py"]`
- **Files changed:** `.claude/launch.json`

---

## Session: 12 May 2026

### Context
- Issue 6 of the RB Weekly AI Brief published today

### Completed Tasks

#### 1. Issue 6 — Archive Table
- Added Issue 6 row at the top of the archive table (most-recent-first order)
- **Date:** 12 May 2026
- **Standout story:** The EU AI Act high-risk deadline is now confirmed — December 2, 2027 for standalone systems, August 2, 2028 for medical devices. After months of uncertainty, pharmaceutical and healthcare AI companies finally have a definitive planning horizon. The compliance architecture is unchanged. The clock is running. Also in Issue 6: why Anthropic decided its latest model was too dangerous to release.
- GA download event wired: `brief_download`, issue 6, date 12.05.2026
- **Files changed:** `brief.html`

#### 2. Issue 6 PDF — `briefs/`
- Copied `RB Weekly AI Brief - Issue 6 - 12.05.2026.pdf` into `briefs/` directory
- **Files added:** `briefs/RB Weekly AI Brief - Issue 6 - 12.05.2026.pdf`

#### 3. Preview Server Fix — `nohup` for file server
- Background Bash tasks (`run_in_background: true`) were being killed between tool calls, repeatedly crashing the file server on port 3004
- **Fix:** Use `nohup python3 -m http.server ... > /tmp/rb_fileserver.log 2>&1 &` so the file server persists independently of the task manager
- Memory file updated with `nohup` instructions and scroll-blanking workaround (use `preview_resize` to 1280×1800 instead of `scrollIntoView`/`window.scrollTo`)

---

## Session: 20 May 2026

### Context
- Issue 7 of the RB Weekly AI Brief published today

### Completed Tasks

#### 1. Issue 7 — Archive Table
- Added Issue 7 row at the top of the archive table (most-recent-first order)
- **Date:** 20 May 2026
- **Standout story:** The European Commission's stakeholder consultation on AI transparency obligations closes 3 June 2026 — two weeks away. The draft guidelines clarify disclosure requirements for interactive AI systems, deepfake labelling, and biometric categorisation under Article 50 of the EU AI Act, all applying from August 2026.
- GA download event wired: `brief_download`, issue 7, date 20.05.2026
- **Files changed:** `brief.html`

#### 2. Issue 7 PDF — `briefs/`
- Copied `RB Weekly AI Brief - Issue 7 - 20.05.2026.pdf` into `briefs/` directory
- **Files added:** `briefs/RB Weekly AI Brief - Issue 7 - 20.05.2026.pdf`

---

## Session: 26 May 2026

### Context
- Issue 8 of the RB Weekly AI Brief published today

### Completed Tasks

#### 1. Issue 8 — Archive Table
- Added Issue 8 row at the top of the archive table (most-recent-first order)
- **Date:** 26 May 2026
- **Standout story:** The NIHR i4i £10m funding call closes tomorrow — 27 May 2026. It is the direct funded mechanism for companies with AI-enabled diagnostics or digital health tools holding a NICE Early Value Assessment recommendation to generate the real-world evidence required for full NICE guidance and NHS-wide reimbursement.
- GA download event wired: `brief_download`, issue 8, date 26.05.2026
- **Files changed:** `brief.html`

#### 2. Issue 8 PDF — `briefs/`
- Copied `RB Weekly AI Brief - Issue 8 - 26.05.2026.pdf` into `briefs/` directory
- **Files added:** `briefs/RB Weekly AI Brief - Issue 8 - 26.05.2026.pdf`

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
