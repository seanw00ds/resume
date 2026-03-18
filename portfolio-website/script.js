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

/* Trigger hero + stack fade-in immediately (already in viewport on load) */
document.querySelectorAll('#hero .fade-in, #stack .fade-in').forEach((el) => {
  el.classList.add('visible');
});

/* ── Nav border on scroll ───────────────────── */
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

    if (!name.value.trim())                    { showErr('err-name', true);    valid = false; } else { showErr('err-name', false); }
    if (!/\S+@\S+\.\S+/.test(email.value))     { showErr('err-email', true);   valid = false; } else { showErr('err-email', false); }
    if (!message.value.trim())                 { showErr('err-message', true); valid = false; } else { showErr('err-message', false); }

    if (!valid) e.preventDefault();
  });
}
