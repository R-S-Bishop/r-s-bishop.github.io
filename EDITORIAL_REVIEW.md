# EDITORIAL REVIEW - AMENDMENTS NEEDED FOR V1

**[2026-01-05, 15:05 GMT]**

## Issues Found During Thorough Read-Through

### CRITICAL - Must Fix Before Launch

#### 1. **Date Inconsistency - Cancer Research**

**Location:** About page  
**Current:** "Cancer research (2008-2012)"  
**Should be:** "Cancer research (2008-2011)"  
**Reason:** Your CV shows 09/2008 – 09/2011, and Portfolio page correctly says 2008-2011

**Also affects:**
- Timeline placeholder alt text says "(2008-2012)" - needs to be "(2008-2011)"
- Your actual Gemini timeline should show 2008-2011

**Impact:** Factual error visible across pages

---

#### 2. **Inconsistent Phrasing - About Page**

**Location:** About page, biomechanics paragraph  
**Current:** "Alongside this, I completed an MSc in Biomechanics at Roehampton University, which deepened my understanding of quantitative analysis and complex systems."  
**Issue:** Awkward transition, feels inserted rather than integrated

**Suggested amendment:** Move to end of cancer research section or integrate better:

**Option A (recommended):**
"I started at the Institute of Cancer Research investigating phosphorylation cascades in paediatric tumours - technical lab work combining gene knockdown and early-stage drug screening. Alongside this research, I completed an MSc in Biomechanics at Roehampton University. Published research contributed to national and European collaborations, and this phase gave me a foundation in experimental rigor, quantitative analysis, and biological complexity."

**Option B:** Keep separate but improve flow

---

### MEDIUM PRIORITY - Should Fix

#### 3. **Repetitive Phrasing - "demonstrating commitment"**

**Locations:** 
- Homepage BCS credential: "demonstrating commitment to technology standards"
- About page: "demonstrating commitment to professional standards"

**Issue:** Same verb phrase used twice

**Suggested fix for About page:**
Change to: "...professional member of BCS, The Chartered Institute for IT, reflecting my commitment to professional standards..."

Or even simpler: "...professional member of BCS, The Chartered Institute for IT."
(The credential speaks for itself - don't need to over-explain)

---

#### 4. **Timeline Placeholder Text on About Page**

**Location:** About page, timeline section  
**Current:** Has instructional text visible: "Replace timeline-graphic.png with your Gemini-created timeline (recommended: 1200px × 400px PNG)"

**Issue:** This instruction shouldn't be visible to site visitors

**Fix needed:** Remove the instructional paragraph or make it a HTML comment:
```html
<!-- Replace timeline-graphic.png with your Gemini-created timeline (1200px × 400px PNG) -->
```

---

#### 5. **"Current Development" Section - Expertise Page**

**Location:** Expertise page, bottom  
**Current:** Lists MA modules

**Issue:** You've already completed one module (80% grade), so saying "building structured knowledge in" makes it sound all future tense

**Suggested amendment:**
"My MA in AI & Digital Transformation at the University of Southampton has built and is building structured knowledge in:"

Or simpler:
"Through my MA in AI & Digital Transformation at the University of Southampton, I'm developing expertise in:"

---

### MINOR - Polish (Nice to Have)

#### 6. **Footer Copyright Date**

**Location:** All pages  
**Current:** "© 2026 Ryan Bishop. All rights reserved."

**Question:** Do you want this to say 2025 (when you built it) or 2026 (current year when launching)?

**Recommendation:** Keep 2026 since you're launching in January 2026

---

#### 7. **Homepage Hero - Grammar Check**

**Location:** Homepage hero description  
**Current:** "Bridging 12 years of pharmaceutical industry experience with AI capability to help organizations and individuals navigate transformation thoughtfully."

**Minor issue:** Could be smoother

**Suggested:** "Bridging 12 years of pharmaceutical experience with AI capability to help organizations and individuals navigate transformation thoughtfully."

(Removed "industry" - slightly cleaner, and "pharmaceutical experience" is clear enough)

---

#### 8. **Contact Page - Current Status**

**Location:** Contact page  
**Current:** "I'm currently completing my MA in AI & Digital Transformation at the University of Southampton (expected completion September 2026)..."

**Issue:** "Completing" sounds like you're nearly done, but you're in progress

**Suggested:** "I'm currently pursuing my MA in AI & Digital Transformation at the University of Southampton (expected completion September 2026)..."

---

#### 9. **Insights Page - Post Excerpts**

**Location:** Insights page, three post excerpts  
**Issue:** These are placeholder excerpts that don't match actual LinkedIn posts

**Options:**
- Keep as-is (generic but works)
- Write actual excerpts from real LinkedIn posts if they exist
- Acknowledge these are "themes" rather than verbatim posts

**Recommendation:** Keep as-is for v1 launch, update with real excerpts as you publish actual posts

---

### TYPOS / TECHNICAL

#### 10. **No Critical Typos Found** ✅

Grammar, spelling, and punctuation all look good across all pages.

---

### CONTENT ACCURACY CHECK

#### 11. **Years of Experience - Consistency Check**

**Referenced as "12 years" throughout:**
- ✅ Homepage: "12 years of pharmaceutical experience"
- ✅ About: "After 12 years in consulting"
- ✅ Expertise: "After 12 years navigating HEOR..."
- ✅ All structured data: "12 years pharmaceutical consulting"

**Actual dates:** 2013-2025 = 12 years ✅  
**Status:** Accurate and consistent

---

#### 12. **Educational Credentials - Accuracy Check**

**Claimed credentials:**
- MSc Biomechanics (Roehampton University) - Distinction
- BSc Biochemistry (Royal Holloway) - 2:1
- MA AI & Digital Transformation (Southampton) - In progress

**Status:** All match CV ✅

---

#### 13. **BCS Membership**

**Status:** Newly added, accurate
**Placement:** Homepage, About page, structured data ✅
**Reminder:** Add to LinkedIn profile too

---

### LINK CHECK

#### 14. **All External Links Working**

✅ LinkedIn profile: https://www.linkedin.com/in/ryan-bishop-66248164/  
✅ Email: ryanbishop23@gmail.com  
✅ AI/ML Reference Guide: https://r-s-bishop.github.io/ai-ml-reference-guide/AI_ML_Reference_Guide.html  
✅ BCS website reference in structured data

---

### MOBILE RESPONSIVENESS

#### 15. **Design System Check**

✅ CSS has proper media queries  
✅ Responsive breakpoints at 768px and 480px  
✅ Mobile navigation, images, and cards all have responsive rules  
✅ Buttons sized appropriately for touch  

**Status:** Should work well on mobile (test after deployment)

---

## PRIORITY SUMMARY

### Must Fix (Critical):
1. ✅ **Cancer research dates:** 2008-2012 → 2008-2011 (About page)
2. ✅ **Timeline placeholder:** Remove or comment out instructional text

### Should Fix (Recommended):
3. **Repetitive "demonstrating commitment"** - vary the language
4. **"Current development" tense** - acknowledge completed module
5. **Contact page "completing"** → "pursuing"

### Nice to Have (Polish):
6. Homepage hero minor grammar smoothing
7. Biomechanics paragraph flow

---

## AMENDMENTS TO MAKE

I'll make the critical and recommended fixes now, then give you final v1.

**Changes I'll implement:**
1. Fix cancer research dates (2008-2011)
2. Remove/comment timeline placeholder instructions
3. Simplify BCS mention on About page (remove repetitive "demonstrating")
4. Fix "completing" → "pursuing" on Contact page
5. Adjust "Current development" tense on Expertise page

**You can decide on these:**
- Homepage hero grammar smoothing (minor)
- Biomechanics paragraph flow (minor)

---

**Ready to apply these fixes and create final v1?**