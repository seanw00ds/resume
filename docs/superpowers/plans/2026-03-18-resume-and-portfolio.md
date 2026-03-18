# Resume & Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a polished printable HTML resume and a dark-themed vanilla HTML/CSS/JS portfolio website, both living in `/Users/seanwoods/Documents/resume/`.

**Architecture:** Two independent static deliverables. `resume.html` is a single self-contained file designed for print/PDF export. `portfolio-website/` is a three-file vanilla site (index.html + styles.css + script.js) with no build step, no framework, deployable anywhere.

**Tech Stack:** HTML5, CSS3 (custom properties, grid, flexbox), vanilla JS (Intersection Observer, smooth scroll), Formsubmit.co for contact form, Google Fonts (Inter), no dependencies or build tools.

**Spec:** `/Users/seanwoods/Documents/resume/docs/superpowers/specs/2026-03-18-resume-and-portfolio-design.md`

---

## Chunk 1: Resume HTML File

### Task 1: Create resume.html skeleton

**Files:**
- Create: `/Users/seanwoods/Documents/resume/resume.html`

- [ ] **Step 1: Create the file with full HTML skeleton, CSS variables, and print styles**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sean Woods — Resume</title>
  <style>
    /* ── Variables ─────────────────────────────── */
    :root {
      --accent:   #6366f1;
      --accent-lt:#ede9fe;
      --accent-dk:#4f46e5;
      --pill-text:#5b21b6;
      --text:     #0f172a;
      --muted:    #475569;
      --faint:    #94a3b8;
      --border:   #e0e7ff;
      --sidebar:  200px;
      --gap:      32px;
      --pad:      44px;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
    }

    /* ── Reset ─────────────────────────────────── */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #fff; color: var(--text); font-size: 13px; line-height: 1.4; }
    ul { list-style: none; }

    /* ── Page wrapper ───────────────────────────── */
    .page {
      max-width: 860px;
      margin: 0 auto;
      padding: 40px var(--pad);
    }

    /* ── Section label ──────────────────────────── */
    .section-label {
      font-size: 9px;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--accent);
      border-bottom: 1px solid var(--border);
      padding-bottom: 4px;
      margin-bottom: 10px;
    }

    /* ── Print ──────────────────────────────────── */
    @media print {
      body { font-size: 11px; }
      .page { padding: 20px 28px; max-width: 100%; }
      @page { margin: 0.4in; size: A4; }
    }
  </style>
</head>
<body>
  <div class="page">
    <!-- HEADER -->
    <!-- TWO-COL BODY -->
    <!-- FOOTER -->
  </div>
</body>
</html>
```

- [ ] **Step 2: Open in browser and confirm blank white page loads without errors**

Open `/Users/seanwoods/Documents/resume/resume.html` in Chrome. Should show blank page, no console errors.

- [ ] **Step 3: Commit**

```bash
cd "/Users/seanwoods/Documents/resume"
git init
git add resume.html
git commit -m "feat: resume.html skeleton with CSS variables and print styles"
```

---

### Task 2: Implement resume header

**Files:**
- Modify: `/Users/seanwoods/Documents/resume/resume.html`

- [ ] **Step 1: Add header CSS to the `<style>` block**

```css
/* ── Header ─────────────────────────────────── */
.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 20px;
  margin-bottom: 24px;
  border-bottom: 2px solid var(--accent);
}
.header-name { font-size: 32px; font-weight: 800; letter-spacing: 4px; color: var(--text); }
.header-tagline { font-size: 10px; font-weight: 600; letter-spacing: 2.5px; color: var(--accent); margin-top: 4px; }
.header-contact { text-align: right; font-size: 11px; color: var(--muted); line-height: 1.9; }
.header-contact a { color: var(--accent); text-decoration: none; font-weight: 500; }
.header-contact a:hover { text-decoration: underline; }
```

- [ ] **Step 2: Replace `<!-- HEADER -->` comment with markup**

```html
<header class="header">
  <div>
    <div class="header-name">SEAN WOODS</div>
    <div class="header-tagline">AI · WEB DEVELOPMENT · TECHNOLOGY</div>
  </div>
  <div class="header-contact">
    <div>0490 254 358</div>
    <div>woods04sean@gmail.com</div>
    <div>Kogarah, Sydney</div>
    <div>🌐 <a href="https://seanwoods.com">seanwoods.com</a></div>
  </div>
</header>
```

- [ ] **Step 3: Verify in browser** — header shows name on left, contact on right, indigo border below.

- [ ] **Step 4: Commit**

```bash
git add resume.html
git commit -m "feat: resume header with name, tagline, and contact details"
```

---

### Task 3: Implement two-column body layout and left sidebar

**Files:**
- Modify: `/Users/seanwoods/Documents/resume/resume.html`

- [ ] **Step 1: Add two-column layout and sidebar CSS**

```css
/* ── Two-col body ───────────────────────────── */
.body { display: grid; grid-template-columns: var(--sidebar) 1fr; gap: var(--gap); }

/* ── Sidebar sections ───────────────────────── */
.sidebar-section { margin-bottom: 22px; }

/* Pills (tech skills) */
.pills { display: flex; flex-wrap: wrap; gap: 4px; }
.pill {
  background: var(--accent-lt);
  color: var(--pill-text);
  font-size: 9px;
  font-weight: 500;
  padding: 2px 8px;
  border-radius: 10px;
}

/* Strength list */
.strength-list li { font-size: 11px; color: var(--muted); line-height: 2.1; }
.strength-list li::before { content: "→ "; color: var(--accent); font-weight: 700; }

/* Education entries */
.edu-entry { margin-bottom: 12px; }
.edu-entry:last-child { margin-bottom: 0; }
.edu-name { font-weight: 700; font-size: 12px; color: var(--text); line-height: 1.3; }
.edu-sub { font-size: 11px; color: var(--muted); }
.edu-dates { font-size: 10px; color: var(--faint); }
```

- [ ] **Step 2: Replace `<!-- TWO-COL BODY -->` with the grid and full left sidebar**

```html
<div class="body">
  <!-- LEFT SIDEBAR -->
  <aside>
    <!-- Education -->
    <div class="sidebar-section">
      <div class="section-label">Education</div>
      <div class="edu-entry">
        <div class="edu-name">University of Technology Sydney</div>
        <div class="edu-sub">Bachelor of AI</div>
        <div class="edu-dates">2025–2028</div>
      </div>
      <div class="edu-entry">
        <div class="edu-name">Endeavour Sports High School</div>
        <div class="edu-sub">HSC · ATAR 80.05</div>
        <div class="edu-dates">2017–2022</div>
      </div>
    </div>

    <!-- Tech Skills -->
    <div class="sidebar-section">
      <div class="section-label">Tech Skills</div>
      <div class="pills">
        <span class="pill">Next.js</span>
        <span class="pill">TypeScript</span>
        <span class="pill">React</span>
        <span class="pill">Tailwind CSS</span>
        <span class="pill">Supabase</span>
        <span class="pill">Stripe API</span>
        <span class="pill">Git &amp; GitHub</span>
        <span class="pill">Vercel</span>
        <span class="pill">Claude Code</span>
        <span class="pill">VS Code</span>
        <span class="pill">Python</span>
        <span class="pill">HTML &amp; CSS</span>
      </div>
    </div>

    <!-- Strengths -->
    <div class="sidebar-section">
      <div class="section-label">Strengths</div>
      <ul class="strength-list">
        <li>Problem Solving</li>
        <li>Client Communication</li>
        <li>Sales &amp; Negotiation</li>
        <li>Fast Learner</li>
        <li>Adaptability</li>
        <li>Time Management</li>
      </ul>
    </div>
  </aside>

  <main></main>
</div>
```

- [ ] **Step 3: Verify in browser** — two columns visible, sidebar shows education, pills, strength arrows.

- [ ] **Step 4: Commit**

```bash
git add resume.html
git commit -m "feat: two-column layout with education, tech skills, and strengths sidebar"
```

---

### Task 4: Implement right column — About Me and Work Experience

**Files:**
- Modify: `/Users/seanwoods/Documents/resume/resume.html`

- [ ] **Step 1: Add right-column CSS**

```css
/* ── Main content ───────────────────────────── */
.main-section { margin-bottom: 22px; }

.about-text { font-size: 12px; color: #374151; line-height: 1.6; }

/* Job entries */
.job { margin-bottom: 16px; }
.job:last-child { margin-bottom: 0; }
.job-header { display: flex; justify-content: space-between; align-items: baseline; }
.job-title { font-weight: 700; font-size: 12px; color: var(--text); }
.job-dates { font-size: 10px; color: var(--faint); white-space: nowrap; }
.job-company { font-size: 11px; color: var(--accent); font-weight: 500; margin-bottom: 5px; }
.job-bullets { padding-left: 14px; }
.job-bullets li { font-size: 11px; color: var(--muted); line-height: 1.9; list-style: disc; }
```

- [ ] **Step 2: Replace the empty `<main></main>` tag (exact string from Task 3) with full right-column content**

```html
<main>
  <!-- About Me -->
  <div class="main-section">
    <div class="section-label">About Me</div>
    <p class="about-text">Self-driven developer and AI enthusiast currently completing a Bachelor of Artificial Intelligence at UTS. I build production-grade web applications for real clients — integrating payments, authentication, databases, and APIs from the ground up. Passionate about AI tools, automation, and turning ideas into working products. Bring equal parts technical ability and commercial thinking from hands-on experience in sales and client management.</p>
  </div>

  <!-- Work Experience -->
  <div class="main-section">
    <div class="section-label">Work Experience</div>

    <div class="job">
      <div class="job-header">
        <div class="job-title">Freelance Web Developer</div>
        <div class="job-dates">Jul 2025 – Present</div>
      </div>
      <div class="job-company">Self-Employed</div>
      <ul class="job-bullets">
        <li>Built full-stack web apps for Oven Soccer, Speed and Sport, Kingdom Property Care, and Think Wisdom</li>
        <li>Delivered complete solutions: Next.js + TypeScript front-ends, Supabase databases, Stripe payment integration, Vercel deployment</li>
        <li>Handled end-to-end client work — scoping, design, build, launch, and ongoing support</li>
        <li>Used AI-assisted development (Claude Code) to accelerate delivery without sacrificing code quality</li>
      </ul>
    </div>

    <div class="job">
      <div class="job-header">
        <div class="job-title">Kids Speed Coach</div>
        <div class="job-dates">Oct 2024 – Present</div>
      </div>
      <div class="job-company">Speed In Sport Australia</div>
      <ul class="job-bullets">
        <li>Coached children aged 7–16 in sprint mechanics, movement patterns, and agility training</li>
        <li>Maintained a positive, structured environment focused on development and athletic progression</li>
      </ul>
    </div>

    <div class="job">
      <div class="job-header">
        <div class="job-title">Warehouse &amp; Landscaping Assistant</div>
        <div class="job-dates">Dec 2024 – Present</div>
      </div>
      <div class="job-company">Garden Life</div>
      <ul class="job-bullets">
        <li>Warehousing duties including packing, receiving, stock organisation, and delivery</li>
        <li>Supported landscaping projects involving plant care and site maintenance</li>
      </ul>
    </div>

    <div class="job">
      <div class="job-header">
        <div class="job-title">Internal Sales / Account Manager</div>
        <div class="job-dates">Jan 2024 – Aug 2024</div>
      </div>
      <div class="job-company">Graphic Art Mart</div>
      <ul class="job-bullets">
        <li>Managed client accounts and performed cold outreach to grow business relationships</li>
        <li>Delivered tailored product recommendations, negotiated deals, and ensured high service standards</li>
      </ul>
    </div>

    <div class="job">
      <div class="job-header">
        <div class="job-title">Retail Assistant</div>
        <div class="job-dates">2021 – 2023</div>
      </div>
      <div class="job-company">Bunnings Warehouse</div>
    </div>

  </div>
</main>
```

- [ ] **Step 3: Verify in browser** — both columns render, all jobs show with correct dates, freelance role has four bullets.

- [ ] **Step 4: Commit**

```bash
git add resume.html
git commit -m "feat: about me and full work experience in resume right column"
```

---

### Task 5: Add footer and verify print/PDF output

**Files:**
- Modify: `/Users/seanwoods/Documents/resume/resume.html`

- [ ] **Step 1: Add footer CSS**

```css
/* ── Footer ─────────────────────────────────── */
.resume-footer {
  margin-top: 20px;
  padding-top: 12px;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  color: var(--faint);
}
.resume-footer a { color: var(--accent); text-decoration: none; font-weight: 500; }
```

- [ ] **Step 2: Replace `<!-- FOOTER -->` comment with markup**

```html
<footer class="resume-footer">
  <span><em>Referees available on request</em></span>
  <span>🌐 <a href="https://seanwoods.com">seanwoods.com</a></span>
</footer>
```

- [ ] **Step 3: Verify full resume in browser** — complete layout, all sections present, footer visible.

- [ ] **Step 4: Test print preview** — Chrome → Cmd+P → verify: all five job roles visible, no text clipped, header and footer present, layout fits one page. If content overflows to two pages, reduce `--pad` to `28px` and font-size to `11px` in `@media print` and re-check.

- [ ] **Step 5: Commit**

```bash
git add resume.html
git commit -m "feat: resume footer, print styles verified — resume.html complete"
```

---

## Chunk 2: Portfolio Website

### Task 6: Scaffold portfolio-website directory and base CSS

**Files:**
- Create: `/Users/seanwoods/Documents/resume/portfolio-website/index.html`
- Create: `/Users/seanwoods/Documents/resume/portfolio-website/styles.css`
- Create: `/Users/seanwoods/Documents/resume/portfolio-website/script.js`

- [ ] **Step 1: Create `styles.css` with CSS variables, reset, and base typography**

```css
/* ── Variables ─────────────────────────────── */
:root {
  --bg:        #0a0a0f;
  --bg-card:   #0f0f1a;
  --bg-strip:  #0f0f1a;
  --border:    #1e1e2e;
  --border-card: #2d2d4e;
  --accent:    #6366f1;
  --accent-lt: #a5b4fc;
  --accent-dim: #1e1e3f;
  --text:      #f1f5f9;
  --muted:     #94a3b8;
  --faint:     #475569;
  --glow:      rgba(99,102,241,0.25);
  --radius:    12px;
  --nav-h:     60px;
}

/* ── Reset ─────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 15px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
a { color: inherit; text-decoration: none; }
ul { list-style: none; }
img { display: block; max-width: 100%; }

/* ── Container ──────────────────────────────── */
.container { max-width: 1100px; margin: 0 auto; padding: 0 32px; }

/* ── Section base ───────────────────────────── */
section { padding: 80px 0; }
.section-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 32px;
}

/* ── Fade-in animation ──────────────────────── */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ── Mobile ─────────────────────────────────── */
@media (max-width: 768px) {
  .container { padding: 0 20px; }
  section { padding: 56px 0; }
}
```

- [ ] **Step 2: Create `index.html` skeleton with all section anchors and Google Fonts**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sean Woods — AI & Web Developer</title>
  <meta name="description" content="Sean Woods — AI student and freelance web developer based in Sydney. Building production-grade apps with Next.js, Supabase, and Stripe." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <nav id="nav"><!-- Task 7 --></nav>
  <section id="hero"><!-- Task 7 --></section>
  <div id="stack"><!-- Task 8 --></div>
  <section id="experience"><!-- Task 9 --></section>
  <section id="skills"><!-- Task 10 --></section>
  <section id="contact"><!-- Task 11 --></section>
  <footer id="footer"><!-- Task 11 --></footer>
  <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 3: Create empty `script.js`**

```js
// script.js — interactions loaded after DOM
```

- [ ] **Step 4: Open index.html in browser** — blank dark page, no errors, Inter font loading.

- [ ] **Step 5: Commit**

```bash
cd "/Users/seanwoods/Documents/resume"
git add portfolio-website/
git commit -m "feat: portfolio-website scaffold — HTML skeleton, CSS base, empty script"
```

---

### Task 7: Implement sticky nav and hero section

**Files:**
- Modify: `/Users/seanwoods/Documents/resume/portfolio-website/index.html`
- Modify: `/Users/seanwoods/Documents/resume/portfolio-website/styles.css`

- [ ] **Step 1: Add nav and hero CSS to `styles.css`**

```css
/* ── Nav ─────────────────────────────────────── */
#nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: var(--nav-h);
  background: rgba(10,10,15,0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  z-index: 100;
}
.nav-inner {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-logo {
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #fff;
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
  font-size: 12px;
  font-weight: 500;
  color: var(--muted);
  letter-spacing: 0.5px;
}
.nav-links a:hover { color: #fff; transition: color 0.2s; }
.nav-cta {
  background: var(--accent);
  color: #fff !important;
  padding: 8px 18px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 1px;
  transition: background 0.2s, transform 0.1s !important;
}
.nav-cta:hover { background: #4f46e5 !important; transform: translateY(-1px); }

/* ── Hero ────────────────────────────────────── */
#hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: var(--nav-h);
  position: relative;
  overflow: hidden;
}
.hero-glow-1 {
  position: absolute; top: 10%; right: 10%;
  width: 400px; height: 400px; border-radius: 50%;
  background: radial-gradient(circle, rgba(99,102,241,0.18), transparent 65%);
  pointer-events: none;
}
.hero-glow-2 {
  position: absolute; bottom: 5%; left: 5%;
  width: 300px; height: 300px; border-radius: 50%;
  background: radial-gradient(circle, rgba(139,92,246,0.12), transparent 65%);
  pointer-events: none;
}
.hero-available {
  font-size: 11px; font-weight: 600;
  letter-spacing: 3px; color: var(--accent);
  text-transform: uppercase; margin-bottom: 16px;
}
.hero-name {
  font-size: clamp(42px, 7vw, 72px);
  font-weight: 800;
  letter-spacing: 2px;
  color: #fff;
  line-height: 1.05;
}
.hero-name span { color: var(--accent); }
.hero-sub {
  font-size: 16px; color: var(--muted);
  letter-spacing: 1px; margin-top: 12px;
}
.hero-bio {
  max-width: 520px;
  font-size: 14px; color: #64748b;
  line-height: 1.75; margin-top: 16px;
}
.hero-actions { display: flex; gap: 14px; margin-top: 32px; flex-wrap: wrap; }
.btn-primary {
  background: var(--accent); color: #fff;
  padding: 13px 28px; border-radius: 28px;
  font-size: 12px; font-weight: 700;
  letter-spacing: 1.5px; text-transform: uppercase;
  transition: background 0.2s, transform 0.15s;
  cursor: pointer;
}
.btn-primary:hover { background: #4f46e5; transform: translateY(-2px); }
.btn-outline {
  border: 1px solid var(--border-card); color: var(--muted);
  padding: 13px 28px; border-radius: 28px;
  font-size: 12px; font-weight: 600;
  letter-spacing: 1.5px; text-transform: uppercase;
  transition: border-color 0.2s, color 0.2s, transform 0.15s;
  cursor: pointer;
}
.btn-outline:hover { border-color: var(--accent); color: #fff; transform: translateY(-2px); }

@media (max-width: 768px) {
  .nav-links { gap: 16px; }
  .nav-links a:not(.nav-cta) { display: none; }
  .hero-name { font-size: 40px; }
}
```

- [ ] **Step 2: In `index.html`, replace `<!-- Task 7 -->` inside `<nav id="nav">` with the nav inner HTML, and replace `<!-- Task 7 -->` inside `<section id="hero">` with the hero inner HTML**

Nav markup (replaces `<nav id="nav"><!-- Task 7 --></nav>`):
```html
<nav id="nav">
  <div class="container nav-inner">
    <div class="nav-logo">SW</div>
    <div class="nav-links">
      <a href="#hero">About</a>
      <a href="#experience">Experience</a>
      <a href="#skills">Education</a>
      <a href="#contact">Contact</a>
      <!-- resume.pdf must be generated from resume.html and copied here — see Task 13 -->
      <a href="resume.pdf" download="Sean_Woods_Resume.pdf" class="nav-cta">Download CV</a>
    </div>
  </div>
</nav>
```

Hero markup (replaces `<section id="hero"><!-- Task 7 --></section>`):
```html
<section id="hero">
  <div class="hero-glow-1"></div>
  <div class="hero-glow-2"></div>
  <div class="container">
    <div class="fade-in">
      <div class="hero-available">Available for Internships · 2026</div>
      <h1 class="hero-name">SEAN <span>WOODS</span></h1>
      <div class="hero-sub">AI Student · Web Developer · Builder</div>
      <p class="hero-bio">Self-driven developer and AI enthusiast building production-grade web apps for real clients — Stripe payments, Supabase backends, full deployments. Currently studying a Bachelor of AI at UTS.</p>
      <div class="hero-actions">
        <a href="#experience" class="btn-primary">View Experience ↓</a>
        <a href="#contact" class="btn-outline">Get In Touch</a>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Verify in browser** — dark hero, glow effects, name with purple WOODS, nav fixed at top with Download CV pill.

- [ ] **Step 4: Commit**

```bash
git add portfolio-website/
git commit -m "feat: sticky nav and hero section with glow effects and CTAs"
```

---

### Task 8: Implement tech stack strip

**Files:**
- Modify: `/Users/seanwoods/Documents/resume/portfolio-website/index.html`
- Modify: `/Users/seanwoods/Documents/resume/portfolio-website/styles.css`

- [ ] **Step 1: Add tech strip CSS**

```css
/* ── Tech stack strip ───────────────────────── */
#stack {
  background: var(--bg-strip);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 20px 0;
}
.stack-inner {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
.stack-label {
  font-size: 9px; font-weight: 700;
  letter-spacing: 3px; color: var(--accent);
  text-transform: uppercase;
  margin-right: 6px; white-space: nowrap;
}
.stack-pill {
  background: #1a1a2e;
  color: var(--accent-lt);
  font-size: 10px; font-weight: 500;
  padding: 4px 12px;
  border-radius: 12px;
  border: 1px solid var(--border-card);
  white-space: nowrap;
}
```

- [ ] **Step 2: Replace tech stack comment in `index.html`**

```html
<div id="stack">
  <div class="container">
    <div class="stack-inner fade-in">
      <span class="stack-label">Tech Stack</span>
      <span class="stack-pill">Next.js</span>
      <span class="stack-pill">TypeScript</span>
      <span class="stack-pill">React</span>
      <span class="stack-pill">Tailwind CSS</span>
      <span class="stack-pill">Supabase</span>
      <span class="stack-pill">Stripe API</span>
      <span class="stack-pill">Claude Code</span>
      <span class="stack-pill">Git &amp; GitHub</span>
      <span class="stack-pill">Vercel</span>
      <span class="stack-pill">VS Code</span>
      <span class="stack-pill">Python</span>
      <span class="stack-pill">HTML &amp; CSS</span>
    </div>
  </div>
</div>
```

- [ ] **Step 3: Verify** — dark strip below hero, pills visible.

- [ ] **Step 4: Commit**

```bash
git add portfolio-website/
git commit -m "feat: tech stack strip with pill tags"
```

---

### Task 9: Implement work experience cards

**Files:**
- Modify: `/Users/seanwoods/Documents/resume/portfolio-website/index.html`
- Modify: `/Users/seanwoods/Documents/resume/portfolio-website/styles.css`

- [ ] **Step 1: Add experience section CSS**

```css
/* ── Experience ─────────────────────────────── */
#experience { background: var(--bg); }
.exp-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.exp-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 22px;
  transition: transform 0.2s, box-shadow 0.2s;
}
.exp-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 32px var(--glow);
}
.exp-card.featured { border-left: 3px solid var(--accent); }
.exp-date { font-size: 10px; font-weight: 600; color: var(--accent); margin-bottom: 4px; }
.exp-role { font-weight: 700; color: #fff; font-size: 14px; line-height: 1.3; }
.exp-company { font-size: 11px; color: var(--faint); margin-top: 2px; margin-bottom: 10px; }
.exp-desc { font-size: 12px; color: var(--muted); line-height: 1.65; }
.exp-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 12px; }
.exp-tag {
  font-size: 9px; background: var(--accent-dim);
  color: var(--accent-lt);
  padding: 3px 8px; border-radius: 6px;
}

@media (max-width: 768px) {
  .exp-grid { grid-template-columns: 1fr; }
}
```

- [ ] **Step 2: Replace experience comment in `index.html`**

```html
<section id="experience">
  <div class="container">
    <div class="section-label fade-in">Work Experience</div>
    <div class="exp-grid">

      <div class="exp-card featured fade-in">
        <div class="exp-date">Jul 2025 – Present</div>
        <div class="exp-role">Freelance Web Developer</div>
        <div class="exp-company">Self-Employed</div>
        <div class="exp-desc">Built full-stack apps for 4 clients: Oven Soccer, Speed and Sport, Kingdom Property Care, and Think Wisdom. End-to-end ownership from scoping to deployment — using AI-assisted development to ship fast without cutting corners.</div>
        <div class="exp-tags">
          <span class="exp-tag">Next.js</span>
          <span class="exp-tag">Supabase</span>
          <span class="exp-tag">Stripe</span>
          <span class="exp-tag">Vercel</span>
        </div>
      </div>

      <div class="exp-card fade-in">
        <div class="exp-date">Jan 2024 – Aug 2024</div>
        <div class="exp-role">Internal Sales / Account Manager</div>
        <div class="exp-company">Graphic Art Mart</div>
        <div class="exp-desc">Managed client accounts, cold outreach, and deal negotiation. Collaborated cross-functionally to resolve issues and streamline order fulfilment.</div>
      </div>

      <div class="exp-card fade-in">
        <div class="exp-date">Oct 2024 – Present</div>
        <div class="exp-role">Kids Speed Coach</div>
        <div class="exp-company">Speed In Sport Australia</div>
        <div class="exp-desc">Coaching children aged 7–16 in sprint mechanics, movement patterns, and agility. High-energy structured environment focused on athletic development.</div>
      </div>

      <div class="exp-card fade-in">
        <div class="exp-date">Dec 2024 – Present</div>
        <div class="exp-role">Warehouse &amp; Landscaping Assistant</div>
        <div class="exp-company">Garden Life</div>
        <div class="exp-desc">Warehousing duties including packing, receiving, stock organisation, and delivery. Supported landscaping projects involving plant care and site maintenance.</div>
      </div>

      <div class="exp-card fade-in">
        <div class="exp-date">2021 – 2023</div>
        <div class="exp-role">Retail Assistant</div>
        <div class="exp-company">Bunnings Warehouse</div>
        <div class="exp-desc">Customer service, stock management, and team collaboration in a high-volume retail environment.</div>
      </div>

    </div>
  </div>
</section>
```

- [ ] **Step 3: Verify** — card grid shows all 5 roles (freelance card has indigo left border), hover lifts cards. On desktop the grid shows 2 columns; with 5 cards the last row has one card spanning the left column.

- [ ] **Step 4: Commit**

```bash
git add portfolio-website/
git commit -m "feat: work experience cards with featured freelance role"
```

---

### Task 10: Implement education section

**Files:**
- Modify: `/Users/seanwoods/Documents/resume/portfolio-website/index.html`
- Modify: `/Users/seanwoods/Documents/resume/portfolio-website/styles.css`

- [ ] **Step 1: Add education CSS**

```css
/* ── Education ──────────────────────────────── */
#skills { background: var(--bg-card); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.edu-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.edu-card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  transition: transform 0.2s, box-shadow 0.2s;
}
.edu-card:hover { transform: translateY(-2px); box-shadow: 0 6px 24px var(--glow); }
.edu-year { font-size: 10px; font-weight: 600; color: var(--accent); margin-bottom: 6px; }
.edu-degree { font-size: 15px; font-weight: 700; color: #fff; line-height: 1.3; }
.edu-school { font-size: 12px; color: var(--muted); margin-top: 4px; }
.edu-detail { font-size: 11px; color: var(--faint); margin-top: 2px; }

@media (max-width: 768px) {
  .edu-grid { grid-template-columns: 1fr; }
}
```

- [ ] **Step 2: Replace education comment in `index.html`**

```html
<section id="skills">
  <div class="container">
    <div class="section-label fade-in">Education</div>
    <div class="edu-grid">
      <div class="edu-card fade-in">
        <div class="edu-year">2025 – 2028</div>
        <div class="edu-degree">Bachelor of Artificial Intelligence</div>
        <div class="edu-school">University of Technology Sydney (UTS)</div>
      </div>
      <div class="edu-card fade-in">
        <div class="edu-year">2017 – 2022</div>
        <div class="edu-degree">HSC</div>
        <div class="edu-school">Endeavour Sports High School</div>
        <div class="edu-detail">ATAR 80.05</div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Verify** — two cards side by side, dark card on slightly lighter section background.

- [ ] **Step 4: Commit**

```bash
git add portfolio-website/
git commit -m "feat: education section with UTS and HSC cards"
```

---

### Task 11: Implement contact section and footer

**Files:**
- Modify: `/Users/seanwoods/Documents/resume/portfolio-website/index.html`
- Modify: `/Users/seanwoods/Documents/resume/portfolio-website/styles.css`

- [ ] **Step 1: Add contact and footer CSS**

```css
/* ── Contact ─────────────────────────────────── */
#contact { background: var(--bg); }
.contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; }
.contact-heading { font-size: 28px; font-weight: 800; color: #fff; margin-bottom: 12px; }
.contact-blurb { font-size: 14px; color: var(--faint); line-height: 1.75; margin-bottom: 24px; }
.contact-detail { font-size: 13px; color: var(--accent-lt); margin-bottom: 6px; }
.contact-detail span { color: var(--faint); }

/* Form */
.contact-form { display: flex; flex-direction: column; gap: 12px; }
.form-input, .form-textarea {
  background: #1a1a2e;
  border: 1px solid var(--border-card);
  border-radius: 8px;
  padding: 13px 16px;
  font-size: 13px;
  color: #fff;
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s;
  width: 100%;
}
.form-input:focus, .form-textarea:focus { border-color: var(--accent); }
.form-textarea { height: 120px; resize: vertical; }
.form-input::placeholder, .form-textarea::placeholder { color: var(--faint); }
.form-submit {
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 13px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s;
  font-family: inherit;
}
.form-submit:hover { background: #4f46e5; transform: translateY(-1px); }
.form-error { font-size: 11px; color: #f87171; display: none; margin-top: -6px; }
.form-error.visible { display: block; }

/* Footer */
#footer {
  background: #07070f;
  border-top: 1px solid var(--border);
  padding: 20px 0;
}
.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  color: var(--faint);
}

@media (max-width: 768px) {
  .contact-grid { grid-template-columns: 1fr; gap: 32px; }
}
```

- [ ] **Step 2a: Replace the contact section in `index.html`** — exact old string: `<section id="contact"><!-- Task 11 --></section>`

```html
<section id="contact">
  <div class="container">
    <div class="section-label fade-in">Get In Touch</div>
    <div class="contact-grid">

      <div class="fade-in">
        <div class="contact-heading">Let's talk.</div>
        <p class="contact-blurb">Open to tech internships in AI, software, and automation. Reach out and I'll get back to you fast.</p>
        <div class="contact-detail">woods04sean@gmail.com</div>
        <div class="contact-detail">0490 254 358</div>
        <div class="contact-detail"><span>Kogarah, Sydney</span></div>
      </div>

      <div class="fade-in">
        <form class="contact-form" action="https://formsubmit.co/woods04sean@gmail.com" method="POST">
          <!-- Spam protection -->
          <input type="text" name="_honey" style="display:none" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New contact from seanwoods.com" />

          <input class="form-input" type="text" name="name" placeholder="Your name" />
          <div class="form-error" id="err-name">Please enter your name.</div>

          <input class="form-input" type="email" name="email" placeholder="Your email" />
          <div class="form-error" id="err-email">Please enter a valid email.</div>

          <textarea class="form-textarea" name="message" placeholder="Message..."></textarea>
          <div class="form-error" id="err-message">Please enter a message.</div>

          <button type="submit" class="form-submit">Send Message →</button>
        </form>
      </div>

    </div>
  </div>
</section>
```

- [ ] **Step 2b: Replace the footer in `index.html`** — exact old string: `<footer id="footer"><!-- Task 11 --></footer>`

```html
<footer id="footer">
  <div class="container footer-inner">
    <span>© 2026 Sean Woods</span>
    <span>Built with Claude Code</span>
  </div>
</footer>
```

- [ ] **Step 3: Verify in browser** — contact section shows two columns, form fields styled dark, footer shows at bottom.

- [ ] **Step 4: Commit**

```bash
git add portfolio-website/
git commit -m "feat: contact section with formsubmit form and footer"
```

---

### Task 12: Add JavaScript — scroll animations, smooth nav, form validation

**Files:**
- Modify: `/Users/seanwoods/Documents/resume/portfolio-website/script.js`

- [ ] **Step 1: Write `script.js`**

```js
/* ── Fade-in on scroll ──────────────────────── */
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target); // animate once only
      }
    });
  },
  { threshold: 0.12 }
);
fadeEls.forEach((el) => observer.observe(el));

/* Trigger hero fade-in immediately (already in viewport) */
document.querySelectorAll('#hero .fade-in, #stack .fade-in').forEach((el) => {
  el.classList.add('visible');
});

/* ── Nav backdrop on scroll ─────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.borderBottomColor = window.scrollY > 20 ? '#2d2d4e' : '#1e1e2e';
}, { passive: true });

/* ── Contact form validation ────────────────── */
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    const name    = form.querySelector('[name="name"]');
    const email   = form.querySelector('[name="email"]');
    const message = form.querySelector('[name="message"]');
    let valid = true;

    const showErr = (id, show) => {
      document.getElementById(id).classList.toggle('visible', show);
    };

    if (!name.value.trim())    { showErr('err-name', true);    valid = false; } else { showErr('err-name', false); }
    if (!/\S+@\S+\.\S+/.test(email.value)) { showErr('err-email', true);   valid = false; } else { showErr('err-email', false); }
    if (!message.value.trim()) { showErr('err-message', true); valid = false; } else { showErr('err-message', false); }

    if (!valid) e.preventDefault();
  });
}
```

- [ ] **Step 2: Verify in browser** — scroll down: cards fade in. Scroll back up on hero: hero already visible. Try submitting empty form: red error messages appear.

- [ ] **Step 3: Test contact form end-to-end** — fill in name, email, message and submit. Formsubmit.co will ask for email confirmation on first use — check woods04sean@gmail.com inbox and confirm.

- [ ] **Step 4: Commit**

```bash
git add portfolio-website/script.js
git commit -m "feat: scroll fade-in, nav scroll effect, contact form validation"
```

---

### Task 13: Final polish and PDF linking

**Files:**
- Modify: `/Users/seanwoods/Documents/resume/resume.html` (if print adjustments needed)
- Create: `/Users/seanwoods/Documents/resume/portfolio-website/resume.pdf`

- [ ] **Step 1: Generate PDF from resume.html**

1. Open `/Users/seanwoods/Documents/resume/resume.html` in Chrome
2. Cmd+P → "Save as PDF"
3. Paper size: A4. Margins: None (or Default). Background graphics: ON.
4. Save as `Sean_Woods_Resume.pdf`
5. Move/copy to `/Users/seanwoods/Documents/resume/portfolio-website/resume.pdf`

- [ ] **Step 2: Test download button** — open portfolio in browser, click "Download CV" in nav — PDF downloads with filename `Sean_Woods_Resume.pdf`.

- [ ] **Step 3: Full cross-browser visual check**
  - Open both `resume.html` and `portfolio-website/index.html` in Chrome
  - Check all sections render correctly
  - Resize browser to 375px width — verify mobile layout stacks to single column
  - Verify all nav anchor links scroll to correct sections

- [ ] **Step 4: Confirm website link placeholder** — `seanwoods.com` appears in `resume.html` header and footer. No action required now. Once the domain is purchased, do a find-and-replace of `seanwoods.com` with the real URL in `resume.html` and `portfolio-website/index.html`.

- [ ] **Step 5: Final commit**

```bash
cd "/Users/seanwoods/Documents/resume"
git add portfolio-website/resume.pdf
git commit -m "feat: resume PDF added — portfolio website complete"
git log --oneline
```

Expected output: 10–12 commits showing incremental feature additions.

---

## Done

Both deliverables are complete:
- `resume.html` — open in Chrome, Cmd+P to export PDF anytime
- `portfolio-website/` — ready to deploy to Vercel/Netlify/GitHub Pages with custom domain

**Next steps (out of scope for this plan):**
1. Buy domain (seanwoods.com or similar) — check availability at namecheap.com
2. Deploy `portfolio-website/` to Vercel (drag-and-drop or `vercel --cwd portfolio-website`)
3. Sign up at formsubmit.co (optional — it works without an account, just confirm the email they send on first submission)
