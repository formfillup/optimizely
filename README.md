# Optimizely — Recruitment Website

A complete front-end hiring website for Optimizely, styled after your
recruitment poster (neon lime green, dark outlines, grid background,
chunky rounded headlines).

## File structure

```
index.html          Homepage — hero, open positions preview, about, contact
jobs.html            Full list of Open Positions and Closed Positions
job-details.html     Job detail page (reads ?id= from the URL)
apply.html           Application form (reads ?id= from the URL)
css/style.css        All styling / design system
js/jobs-data.js      ⭐ All job listings live here
js/main.js           Shared behavior (mobile nav, rendering job cards)
assets/optimizely-logo.png   Your uploaded logo, used as-is
```

## How to add, edit, or close a job

Open `js/jobs-data.js`. Every job is one object in the `JOBS` array.

- **Add a job:** copy an existing object, paste it into the array, and
  change the values. Give it a unique `id` (used in the URL).
- **Close a job:** change `status: "open"` to `status: "closed"`.
  It will automatically move to the Closed Positions section, lose its
  Apply Now button, and stop appearing on the homepage preview.
- **Remove a job:** delete its object from the array.

No other file needs to change — every page reads from this same file.

## The application form

`apply.html` is front-end only, as requested:

- It validates all required fields, the file type/size (PDF, DOC, DOCX,
  max 5MB), and the consent checkbox before allowing submission.
- On successful validation it redirects to `thankyou.html`, which you
  will create yourself. This file does not exist yet — that's expected.
- To connect a real backend later, look for the comment
  `FRONT-END ONLY` inside the `<script>` at the bottom of `apply.html`
  and replace that block with your real submit logic (e.g. a `fetch()`
  call to your API).

## Logo

The logo area only ever displays your uploaded image
(`assets/optimizely-logo.png`) — no text is layered on top of it
anywhere on the site, per your instructions.

## Viewing the site

Since the pages load `css/style.css` and `js/*.js` via relative paths,
open `index.html` through a local server rather than double-clicking
the file (some browsers block relative file loads from `file://`).
The simplest way: open a terminal in this folder and run

```
python3 -m http.server 8000
```

then visit `http://localhost:8000` in your browser. If you're
uploading this to any normal web host, it will work immediately with
no changes.
