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
  '.soin-card, .process-step, .badge, .propos-bio, .contact-item, .gallery-main, .gallery-secondary img'
);

let revealObserver = null;

if ('IntersectionObserver' in window) {
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  revealTargets.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(i % 3) * 80}ms`;
    revealObserver.observe(el);
  });
}

// ═══════════════════════════════════════
// AVIS — chargement JSON, rendu et filtres
// ═══════════════════════════════════════
(async function initAvis() {
  const container = document.getElementById('avis-container');
  if (!container) return;

  let avisData = [];

  try {
    const res = await fetch('./avis.json');
    const data = await res.json();
    avisData = data.avis;
  } catch (e) {
    container.innerHTML = '<p class="avis-empty">Les avis ne peuvent pas être chargés pour le moment.</p>';
    return;
  }

  const filterBtns = document.querySelectorAll('.afb');
  const sortSelect  = document.getElementById('avis-sort');
  let currentFilter = 'all';
  let currentSort   = 'featured';

  // ── Utilitaires ──
  function relativeDate(dateStr) {
    const diff = Date.now() - new Date(dateStr).getTime();
    const days  = Math.floor(diff / 86400000);
    if (days < 1)  return "aujourd'hui";
    if (days < 30) return `il y a ${days} jour${days > 1 ? 's' : ''}`;
    const months = Math.floor(days / 30);
    if (months < 12) return `il y a ${months} mois`;
    const years = Math.floor(months / 12);
    return `il y a ${years} an${years > 1 ? 's' : ''}`;
  }

  function starsHtml(n) {
    return '★'.repeat(n) + (n < 5 ? '☆'.repeat(5 - n) : '');
  }

  function sourceLogo(source) {
    if (source === 'Google') {
      return `<svg class="gc-logo-google" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Google" role="img">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>`;
    }
    return `<span class="gc-source-badge reflex" title="${source}">${source[0]}</span>`;
  }

  const TRUNCATE = 160;

  function renderCard(avis) {
    const isLong = avis.texte.length > TRUNCATE;
    const short  = isLong ? avis.texte.slice(0, TRUNCATE).trimEnd() : avis.texte;

    const textHtml = isLong
      ? `<span class="gc-text-short">${short}<span aria-hidden="true">…</span></span><span class="gc-text-full" hidden>${avis.texte}</span><button class="gc-expand-btn" aria-expanded="false" aria-label="Lire l'avis complet"> Plus</button>`
      : avis.texte;

    return `
      <article class="gc-card" role="listitem"
        data-stars="${avis.etoiles}"
        data-date="${avis.date}"
        data-length="${avis.texte.length}"
        data-featured="${avis.featured}">
        <div class="gc-header">
          <div class="gc-avatar" style="background:${avis.couleur}" aria-hidden="true">${avis.initiales}</div>
          <div class="gc-meta">
            <div class="gc-name">${avis.auteur}</div>
            <div class="gc-rating">
              <span class="gc-stars" aria-label="${avis.etoiles} étoiles sur 5">${starsHtml(avis.etoiles)}</span>
              <span class="gc-date">${relativeDate(avis.date)}</span>
            </div>
          </div>
          <div class="gc-source">${sourceLogo(avis.source)}</div>
        </div>
        <p class="gc-text">${textHtml}</p>
        <div class="gc-footer" aria-label="Source de l'avis">
          <div class="gc-source-dot" aria-hidden="true"></div>
          <span>Avis ${avis.source}</span>
        </div>
      </article>`;
  }

  function applyExpandListeners() {
    container.querySelectorAll('.gc-expand-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const p        = btn.closest('.gc-text');
        const short    = p.querySelector('.gc-text-short');
        const full     = p.querySelector('.gc-text-full');
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        short.hidden   = !expanded;
        full.hidden    = expanded;
        btn.textContent = expanded ? ' Plus' : ' Moins';
        btn.setAttribute('aria-expanded', String(!expanded));
      });
    });
  }

  function applyReveal() {
    if (!revealObserver) return;
    container.querySelectorAll('.gc-card').forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = `${(i % 3) * 60}ms`;
      revealObserver.observe(el);
    });
  }

  function render() {
    const stars   = currentFilter === 'all' ? null : parseInt(currentFilter, 10);
    let filtered  = stars ? avisData.filter(a => a.etoiles === stars) : [...avisData];

    if (currentSort === 'featured') {
      filtered.sort((a, b) => {
        if (a.featured !== b.featured) return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        return b.texte.length - a.texte.length;
      });
    } else if (currentSort === 'recent') {
      filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (currentSort === 'ancien') {
      filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (currentSort === 'long') {
      filtered.sort((a, b) => b.texte.length - a.texte.length);
    }

    if (filtered.length === 0) {
      container.innerHTML = '<p class="avis-empty">Aucun avis pour ce filtre.</p>';
      return;
    }

    container.innerHTML = filtered.map(renderCard).join('');
    applyExpandListeners();
    applyReveal();
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.stars;
      render();
    });
  });

  sortSelect?.addEventListener('change', () => {
    currentSort = sortSelect.value;
    render();
  });

  render();
})();
