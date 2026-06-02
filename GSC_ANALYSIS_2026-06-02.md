# Google Search Console Analysis — ryanbishop.co.uk
**Date:** 2 June 2026
**Data period:** Last 3 months vs previous 3 months
**Source:** GSC Performance export — `https___ryanbishop.co.uk_-Performance-on-Search-2026-06-02.xlsx`

> ⏰ **Repeat this analysis in ~2 weeks (around 16 June 2026).** Export a fresh Performance report from GSC (same format) and compare against the baselines below. Key things to check: brief.html position stability, resources.html and reference-guide.html appearing, video rich results in Search Appearance tab, and whether the portfolio/expertise redirects have dropped out.

---

## Headline numbers

| Metric | Last 3 months | Previous 3 months |
|---|---|---|
| Total clicks | 21 | 0 |
| Total impressions | 1,009 | 27 |
| CTR | 2.1% | — |
| Avg. position | 13.3 | ~8.5 (very low volume) |

This is a very early-stage baseline — the previous period shows near-zero activity. The site is effectively just beginning to get indexed at scale.

---

## Top queries

| Query | Clicks | Impressions | CTR | Position |
|---|---|---|---|---|
| ryan bishop | 5 | 372 | 1.3% | 18.8 |
| oncology ai consulting | 0 | 11 | — | 16.9 |
| bishop ai | 0 | 4 | — | 10.5 |
| ai transformation is a problem of governance | 0 | 1 | — | **1.0** |
| regulatory framework | 0 | 1 | — | **1.0** |
| weekly intelligence brief | 0 | 1 | — | 3.0 |
| ism001-055 | 0 | 1 | — | 16.0 |

---

## Top pages

| Page | Clicks | Impressions | CTR | Position |
|---|---|---|---|---|
| / (home) | 11 | 454 | 2.4% | 12.7 |
| /about.html | 5 | 211 | 2.4% | 13.7 |
| /contact.html | 3 | 83 | 3.6% | 27.4 |
| /brief.html | 2 | 73 | 2.7% | **4.85** |
| /portfolio.html *(redirect)* | 0 | 72 | — | 9.2 |
| /ai-literacy.html | 0 | 40 | — | 7.9 |
| /insights.html | 0 | 37 | — | 11.7 |
| /expertise.html *(redirect)* | 0 | 37 | — | 16.2 |
| /briefs/RB Weekly AI Brief - Issue 6 - 12.05.2026.pdf | 0 | 1 | — | 7.0 |

---

## Devices

| Device | Clicks | Impressions | CTR | Avg. position |
|---|---|---|---|---|
| Mobile | 14 | 215 | **6.5%** | 8.6 |
| Desktop | 7 | 572 | 1.2% | 16.6 |
| Tablet | 0 | 6 | — | 10.0 |

---

## Top countries

| Country | Clicks | Impressions | Avg. position |
|---|---|---|---|
| United Kingdom | 11 | 252 | 12.0 |
| United States | 4 | 245 | 17.1 |
| Netherlands | 2 | 12 | 6.1 |
| Spain | 1 | 11 | 12.8 |
| Australia | 1 | 8 | 7.1 |
| UAE | 1 | 6 | 43.7 |
| Belgium | 1 | 5 | 7.0 |
| India | 0 | 54 | 23.3 |
| Germany | 0 | 18 | 22.4 |
| France | 0 | 17 | 15.9 |

63 countries total showing impressions.

---

## Analysis & observations

### What's working

**brief.html is the strongest performer** — position 4.85 is page-one territory for a page this young. The AI Brief is the clearest SEO asset on the site.

**Mobile is significantly outperforming desktop** — 6.5% CTR vs 1.2%. Mobile users who find the site are clicking at 5× the rate of desktop users.

**Early global reach** — 63 countries with impressions is broader than expected for a niche professional services site at this stage. UK and US are nearly equal in impressions (252 vs 245).

**Two queries ranking position 1** — "ai transformation is a problem of governance" and "regulatory framework" both show position 1.0 on single impressions. Low volume but signals topical authority.

### Things to monitor

**"ryan bishop" position drop (4.8 → 18.8) is not a concern** — previous period had only 5 impressions; now there are 372. Google is showing the site for far more queries, many of which rank lower, depressing the average. This is normal behaviour for a recently expanded site.

**portfolio.html and expertise.html still appearing** — both are now HTTP redirects. Google hasn't fully processed this yet. Expect these to drop out of Search Console within 2–4 weeks.

**A PDF was indexed** — `/briefs/RB Weekly AI Brief - Issue 6 - 12.05.2026.pdf` appeared. Consider whether PDF direct traffic is desirable or whether you'd prefer all traffic to flow through brief.html. If the latter, add `Disallow: /briefs/` to robots.txt.

**Search Appearance tab is empty** — no rich results yet. The VideoObject schema (added 2 June 2026 to ai-literacy.html and insights.html) needs 2–4 weeks before Google validates and surfaces it.

---

## Baselines to beat at next review (~16 June 2026)

| Metric | Current | Target direction |
|---|---|---|
| brief.html avg. position | 4.85 | Hold or improve |
| ai-literacy.html avg. position | 7.85 | Hold or improve |
| "ryan bishop" impressions | 372 | ↑ |
| resources.html impressions | not yet appearing | First appearance |
| reference-guide.html impressions | not yet appearing | First appearance |
| Video rich results (Search Appearance) | none | First appearance |
| portfolio.html / expertise.html impressions | 72 / 37 | ↓ to zero (redirects resolving) |

---

## Actions taken on 2 June 2026

- Business site redesign deployed (8 pages rebuilt/added)
- VideoObject JSON-LD schema added to `ai-literacy.html` (5 videos) and `insights.html` (1 video)
- Sitemap updated: expertise.html and portfolio.html removed; resources.html and reference-guide.html added; all lastmods set to 2026-06-02
- URL Inspection → Request Indexing submitted for ai-literacy.html and insights.html
- Sitemap resubmitted in GSC
