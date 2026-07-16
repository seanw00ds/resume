# seanwoods.work

Personal site + resume. Live at [seanwoods.work](https://seanwoods.work).

## What's here

- `portfolio-website/` — the site: vanilla HTML/CSS/JS, no framework, no build step. IBM Plex Mono + Instrument Sans, warm-paper light theme and dark theme with a persisted toggle, scroll reveals via IntersectionObserver.
- `resume.html` — print-optimised A4 resume in the same design language. Rendered to `portfolio-website/resume.pdf` with headless Chrome:

```sh
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --no-pdf-header-footer \
  --print-to-pdf=portfolio-website/resume.pdf resume.html
```

## Deploy

Pushes to `main` deploy to [seanwoods.work](https://seanwoods.work) via Vercel.

Built with [Claude Code](https://claude.com/claude-code).
