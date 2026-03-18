# Resume & Portfolio Website Design Spec
**Date:** 2026-03-18
**Status:** Approved by user

---

## Overview

Two deliverables, both living in `/Users/seanwoods/Documents/resume/`:

1. **`resume.html`** — A polished, printable HTML resume that exports to PDF. The source of truth for resume content.
2. **`portfolio-website/`** — A vanilla HTML/CSS/JS single-page portfolio site to be hosted at a custom domain (e.g. `seanwoods.com`). Displays resume content in a stylised web format with a contact form and a download button for the PDF resume.

---

## Deliverable 1: Resume HTML File

### File
`/Users/seanwoods/Documents/resume/resume.html`

### Design Direction
- **Style:** Crisp & Modern — white background, indigo/purple (`#6366f1`) accent colour
- **Typography:** System font stack (Inter/system-ui), clean hierarchy
- **Print:** `@media print` CSS to hide browser chrome and preserve layout exactly for PDF export. No responsive/mobile CSS needed — this file is print/PDF only.

### Layout Structure
```
┌─────────────────────────────────────────────────────────┐
│  HEADER (full width): Name + tagline | Contact details  │
│  (separated from body by full-width 2px indigo border)  │
├──────────────────────┬──────────────────────────────────┤
│  LEFT SIDEBAR 200px  │  RIGHT MAIN CONTENT              │
│  - Education         │  - About Me                      │
│  - Tech Skills       │  - Work Experience               │
│  - Strengths         │                                  │
├──────────────────────┴──────────────────────────────────┤
│  FOOTER (full width): referees note + website link      │
└─────────────────────────────────────────────────────────┘
```
The header and footer are full-width elements outside the two-column grid. Implement as: header div, then a two-column CSS grid div for sidebar + main content, then footer div.

### Header (full width, above two columns)
- **Left side:** "SEAN WOODS" (large, bold, spaced) + "AI · WEB DEVELOPMENT · TECHNOLOGY" tagline in indigo below
- **Right side:** Contact details (right-aligned):
  - Phone: 0490 254 358
  - Email: woods04sean@gmail.com
  - Location: Kogarah, Sydney
  - Website: seanwoods.com (styled in indigo accent colour with a globe icon — visually prominent, not tucked away)
- Separated from body by a full-width indigo `2px` bottom border

### Sections (left sidebar)
1. **Education**
   - University of Technology Sydney — Bachelor of AI, 2025–2028
   - Endeavour Sports High School — HSC, ATAR 80.05, 2017–2022
   - Date format: year-only (e.g. `2025–2028`) — consistent for both entries
2. **Tech Skills** — pill tags in indigo/lavender: Next.js, TypeScript, React, Tailwind CSS, Supabase, Stripe API, Git & GitHub, Vercel, Claude Code, VS Code, Python, HTML & CSS
3. **Strengths** — arrow-prefixed list: Problem Solving, Client Communication, Sales & Negotiation, Fast Learner, Adaptability, Time Management

### Sections (right main content)
1. **About Me**
   > "Self-driven developer and AI enthusiast currently completing a Bachelor of Artificial Intelligence at UTS. I build production-grade web applications for real clients — integrating payments, authentication, databases, and APIs from the ground up. Passionate about AI tools, automation, and turning ideas into working products. Bring equal parts technical ability and commercial thinking from hands-on experience in sales and client management."

2. **Work Experience** (in this order):
   - **Freelance Web Developer** — Self-Employed (Jul 2025 – Present)
     - Built full-stack web apps for Oven Soccer, Speed and Sport, Kingdom Property Care, and Think Wisdom
     - Next.js + TypeScript front-ends, Supabase databases, Stripe payment integration, Vercel deployment
     - Handled end-to-end client work — scoping, design, build, launch, and ongoing support
     - Used AI-assisted development (Claude Code) to accelerate delivery without sacrificing code quality
   - **Kids Speed Coach** — Speed In Sport Australia (Oct 2024 – Present)
     - Coached children aged 7–16 in sprint mechanics, movement patterns, and agility training
     - Maintained a positive, structured environment focused on development and athletic progression
   - **Warehouse & Landscaping Assistant** — Garden Life (Dec 2024 – Present)
     - Warehousing duties: packing, receiving, stock organisation, delivery
     - Supported landscaping projects involving plant care and site maintenance
   - **Internal Sales / Account Manager** — Graphic Art Mart (Jan 2024 – Aug 2024)
     - Managed client accounts and performed cold outreach to grow business relationships
     - Delivered tailored product recommendations, negotiated deals, ensured high service standards
   - **Retail Assistant** — Bunnings Warehouse (2021 – 2023)
     - Dates only, no bullet points. Intentional — role is self-explanatory. Year-only dates are acceptable here as months are not known.

### Footer (full width, below two columns)
- "Referees available on request" (italic, centred or left-aligned)
- Website link: `seanwoods.com` (styled in indigo, prominent)

---

## Deliverable 2: Portfolio Website

### Directory
`/Users/seanwoods/Documents/resume/portfolio-website/`

### Files
```
portfolio-website/
├── index.html        # Single page — all sections
├── styles.css        # All styles
├── script.js         # Smooth scroll, animations, form handling
└── resume.pdf        # PDF export of resume.html — copy here after generating PDF from resume.html
                      # Download CV button links to this file. Will 404 until added — this is acceptable.
```

The PDF workflow: open `resume.html` in Chrome → File → Print → Save as PDF → save as `portfolio-website/resume.pdf`.

### Design Direction
- **Theme:** Dark — near-black (`#0a0a0f`) background with indigo/purple (`#6366f1`) accent
- **Feel:** Premium tech portfolio — clean, confident, subtle glow effects
- **Typography:** Inter (Google Fonts) or system-ui fallback

### Page Sections (top to bottom)

#### 1. Sticky Navigation
- Left: `SW` monogram logo
- Right: About · Experience · Skills · Contact · **Download CV** (indigo pill button, always visible)
- All nav links smooth-scroll to their section anchor
- Slight backdrop blur on scroll

#### 2. Hero
- "AVAILABLE FOR INTERNSHIPS · 2026" label in indigo
- Large name: "SEAN **WOODS**" (Woods in indigo)
- Subtitle: "AI Student · Web Developer · Builder"
- Bio: "Self-driven developer and AI enthusiast building production-grade web apps for real clients — Stripe payments, Supabase backends, full deployments. Currently studying a Bachelor of AI at UTS."
- Two CTAs: "VIEW EXPERIENCE ↓" (filled, indigo) smooth-scrolls to the `#experience` section · "GET IN TOUCH" (outlined) smooth-scrolls to the `#contact` section
- Subtle radial gradient glow effects in background

#### 3. Tech Stack Strip
- "TECH STACK" label + pill tags: Next.js, TypeScript, React, Tailwind CSS, Supabase, Stripe API, Claude Code, Git & GitHub, Vercel, VS Code, Python, HTML & CSS
- Dark strip (`#0f0f1a`) separating hero from experience cards

#### 4. Work Experience (id="experience")
- Section heading "WORK EXPERIENCE"
- Card grid: 2 columns on desktop, 1 column on mobile (<768px)
- Freelance Web Developer card has a 3px indigo left border to mark it as the flagship role
- Card content per role:

| Role | Company | Dates | Description | Tech tags |
|------|---------|-------|-------------|-----------|
| Freelance Web Developer | Self-Employed | Jul 2025 – Present | Built full-stack apps for 4 clients: Oven Soccer, Speed and Sport, Kingdom Property Care, Think Wisdom | Next.js, Supabase, Stripe, Vercel |
| Kids Speed Coach | Speed In Sport Australia | Oct 2024 – Present | Coaching children aged 7–16 in sprint mechanics, movement patterns and agility | — |
| Warehouse & Landscaping Assistant | Garden Life | Dec 2024 – Present | Warehousing and landscaping support — packing, stock, plant care, site maintenance | — |
| Internal Sales / Account Manager | Graphic Art Mart | Jan 2024 – Aug 2024 | Cold outreach, client account management, deal negotiation | — |
| Retail Assistant | Bunnings Warehouse | 2021 – 2023 | Customer service, stock management, team collaboration | — |

#### 5. Education (id="skills")
- Two cards side by side (or stacked on mobile):
  - UTS — Bachelor of Artificial Intelligence — 2025–2028
  - Endeavour Sports High School — HSC, ATAR 80.05 — 2017–2022

#### 6. Contact (id="contact")
- Left side:
  - Heading: "Let's talk."
  - Blurb: "Open to tech internships in AI, software, and automation. Reach out and I'll get back to you fast."
  - Email: woods04sean@gmail.com
  - Phone: 0490 254 358
  - Location: Kogarah, Sydney
- Right side: Contact form
  - Fields: Name (required), Email (required), Message (required, textarea)
  - Submit button: "SEND MESSAGE →"
  - Form `action` set to `https://formsubmit.co/woods04sean@gmail.com` (no account needed)
  - Method: POST. Include a hidden honeypot field for spam protection (`<input type="text" name="_honey" style="display:none">`) and `<input type="hidden" name="_captcha" value="false">`.
  - Client-side validation: all three fields required before submit

#### 7. Footer
- Left: © 2026 Sean Woods
- Right: "Built with Claude Code"

### Interactions & Polish
- Smooth scroll for all navigation anchor clicks
- Cards lift on hover: `transform: translateY(-2px)` + subtle indigo box-shadow glow
- Fade-in-up on scroll: Intersection Observer API, each section animates in as it enters viewport
- Download CV: `<a href="resume.pdf" download="Sean_Woods_Resume.pdf">` — will 404 until PDF is placed in the directory; a code comment explains this
- Mobile responsive: single column layout under 768px; nav collapses to icon or stacks
- Form validated client-side before submit (all fields required)

---

## What's Removed vs Current Resume
- ❌ CASP co-founder role
- ❌ Sport & Music section (Semi-pro footballer, Musician)
- ❌ https://sean-woods.lovable.app/ link
- ❌ Generic soft skills as the primary skills section

## What's Added / Changed
- ✅ Freelance Web Developer role (4 clients, full tech stack detail)
- ✅ Tech Skills section with real tools (Next.js, Supabase, Stripe, Claude Code, etc.)
- ✅ About Me rewritten for tech internship positioning
- ✅ Website link (`seanwoods.com`) prominently displayed in resume header
- ✅ Portfolio website with download CV button, contact form, dark premium theme

---

## Out of Scope (for now)
- Custom domain purchase — user to handle separately (seanwoods.com or similar)
- Formspree account setup — user to sign up at formspree.io and paste in their endpoint
- Hosting/deployment — Vercel, Netlify, or GitHub Pages all work for free static hosting
