/* ── Theme toggle (persisted, defaults to light) ── */
const root = document.documentElement;
const stored = localStorage.getItem('theme');
if (stored) {
  root.dataset.theme = stored;
}

document.getElementById('themeToggle').addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  localStorage.setItem('theme', next);
});

/* ── Reveal sections on scroll ────────────────────────────── */
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);
revealEls.forEach((el) => observer.observe(el));

/* ── Phone click-to-reveal ────────────────────────────────── */
const phoneBtn = document.getElementById('phoneReveal');
if (phoneBtn) {
  phoneBtn.addEventListener('click', () => {
    const dd = phoneBtn.parentElement;
    const link = document.createElement('a');
    link.href = 'tel:+61490254358';
    link.textContent = '0490 254 358';
    dd.replaceChildren(link);
  });
}
