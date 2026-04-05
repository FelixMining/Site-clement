// ═══════════════════════════════════════
// HEADER — scroll shadow + burger menu
// ═══════════════════════════════════════
const header = document.getElementById('header');
const burger = document.querySelector('.header-burger');
const mobileNav = document.querySelector('.mobile-nav');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);

  // Sticky CTA mobile : apparaît après le hero
  const hero = document.getElementById('accueil');
  if (hero) {
    const stickyCta = document.getElementById('sticky-cta');
    if (stickyCta) {
      const heroBottom = hero.getBoundingClientRect().bottom;
      stickyCta.style.display = heroBottom < 0 ? 'flex' : 'none';
      stickyCta.setAttribute('aria-hidden', heroBottom < 0 ? 'false' : 'true');
    }
  }
}, { passive: true });

burger?.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  burger.setAttribute('aria-expanded', isOpen);
});

// Fermer le menu mobile en cliquant sur un lien
mobileNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

// ═══════════════════════════════════════
// FAQ — accordéon accessible
// ═══════════════════════════════════════
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    const answer = btn.nextElementSibling;

    // Fermer tous les autres
    document.querySelectorAll('.faq-question[aria-expanded="true"]').forEach(other => {
      if (other !== btn) {
        other.setAttribute('aria-expanded', 'false');
        const otherAnswer = other.nextElementSibling;
        otherAnswer.hidden = true;
        otherAnswer.style.maxHeight = null;
      }
    });

    // Toggle courant
    btn.setAttribute('aria-expanded', !isExpanded);
    if (isExpanded) {
      answer.hidden = true;
    } else {
      answer.hidden = false;
    }
  });
});

// ═══════════════════════════════════════
// SCROLL REVEAL — animation entrée sections
// ═══════════════════════════════════════
const revealTargets = document.querySelectorAll(
  '.soin-card, .process-step, .avis-card, .badge, .propos-bio, .contact-item, .gallery-main, .gallery-secondary img'
);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealTargets.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(i % 3) * 80}ms`;
    observer.observe(el);
  });
}
