# RB Weekly AI Brief — Issue Publishing Checklist

Follow these steps every time a new issue goes live. Three files change plus one PDF is added.

---

## Step 1 — Copy the PDF

Copy the new issue PDF from Desktop into the `briefs/` directory:

```
cp "/Users/ryan/Desktop/RB Weekly AI Brief/RB Weekly AI Brief - Issue N - DD.MM.YYYY.pdf" \
   "/Users/ryan/Documents/GitHub/ryanbishop.github.io/briefs/"
```

---

## Step 2 — Update `brief.html`

Two changes:

**A. Featured latest issue block** — update issue number, date, standout story, and PDF link:

```html
<span class="featured-issue__num">№N</span>
<span class="featured-issue__date">D Mon YYYY</span>
<p class="featured-issue__standout">STANDOUT STORY TEXT</p>
<a href="briefs/RB Weekly AI Brief - Issue N - DD.MM.YYYY.pdf" ...>Download Issue №N (PDF) ↓</a>
```

**B. Archive rows** — add the *previous* issue as a new row at the top of the archive (above the existing №N-1 row):

```html
<div class="archive-row">
  <span class="archive-row__num">№N-1</span>
  <span class="archive-row__date">D Mon YYYY</span>
  <span class="archive-row__story">CONDENSED STANDOUT (1–2 sentences)</span>
  <a href="briefs/RB Weekly AI Brief - Issue N-1 - DD.MM.YYYY.pdf" target="_blank" class="archive-row__dl">PDF ↓</a>
</div>
```

---

## Step 3 — Update `resources.html`

The "Recent issues" panel shows the 3 most recent issues. Add the new issue at the top and drop the oldest:

```html
<a href="briefs/RB Weekly AI Brief - Issue N - DD.MM.YYYY.pdf" target="_blank" class="resources-archive__row">
  <span class="resources-archive__num">№N</span>
  <span>
    <span class="resources-archive__story">CONDENSED STANDOUT</span>
    <span class="resources-archive__date">D Mon YYYY</span>
  </span>
  <span class="resources-archive__dl">PDF ↓</span>
</a>
```

Keep only №N, №N-1, and №N-2. Remove the oldest row (№N-3).

---

## Step 4 — Update `index.html`

The homepage brief preview widget needs the issue number, date, and 3 story bullets:

```html
<span class="brief-preview__meta">№N · D Mon</span>
...
<div class="brief-preview__story">◆ STORY ONE (standout)</div>
<div class="brief-preview__story">◆ STORY TWO</div>
<div class="brief-preview__story">◆ STORY THREE</div>
```

The 3 bullets are provided by Ryan — ask for them if not supplied with the issue.

---

## Step 5 — Preview

Start the preview servers and check all three pages:

```bash
# File server (use nohup — do NOT use run_in_background)
lsof -ti:3004 | xargs kill -9 2>/dev/null
nohup python3 -m http.server --directory /Users/ryan/Documents/GitHub/ryanbishop.github.io 3004 \
  > /tmp/rb_fileserver.log 2>&1 &
sleep 1 && curl -s -o /dev/null -w "%{http_code}" http://localhost:3004/brief.html
# Expected: 200

# Proxy script (recreate if /tmp was cleared)
# See: memory/project_rb_preview_server.md

# Start preview
preview_start("Ryan Bishop site (static)")
```

**Viewport tip:** use `preview_resize(width=800, height=1600)` for the archive table. Do NOT use `scrollIntoView` or `window.scrollTo` — these blank the preview panel.

Check:
- `brief.html` — new issue at top of featured block, previous issue in archive ✅
- `resources.html` — new issue at top of recent issues panel, 3 issues shown ✅
- `index.html` — brief preview widget shows new issue number, date, and 3 bullets ✅

---

## Step 6 — Update `SESSION_LOG.md` and commit

Update the session log, then stage and commit:

```bash
git add brief.html resources.html index.html \
        "briefs/RB Weekly AI Brief - Issue N - DD.MM.YYYY.pdf" \
        SESSION_LOG.md
git commit -m "Issue N of RB Weekly AI Brief"
```

Then **Push origin** in GitHub Desktop.

---

## Files changed each issue

| File | What changes |
|---|---|
| `briefs/RB Weekly AI Brief - Issue N - DD.MM.YYYY.pdf` | New file added |
| `brief.html` | Featured block updated; previous issue added to archive |
| `resources.html` | №N added to recent issues; oldest row removed |
| `index.html` | Preview widget issue number, date, and 3 story bullets |
| `SESSION_LOG.md` | New session entry |
