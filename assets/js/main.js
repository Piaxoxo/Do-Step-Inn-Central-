/* =========================================================
   DO STEP INN CENTRAL — interaction & motion engine
   Vanilla JS · no dependencies · reduced-motion aware
   ========================================================= */
(() => {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- Reveal on scroll ---------- */
  const revealables = $$('[data-reveal]');
  if ('IntersectionObserver' in window && !reduce) {
    const ro = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-in'); ro.unobserve(e.target); }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    revealables.forEach((el) => ro.observe(el));
  } else {
    revealables.forEach((el) => el.classList.add('is-in'));
  }

  /* ---------- Top bar + pill after hero ---------- */
  const topbar = $('#topbar');
  const pill = $('.pill');
  const hero = $('#arrival');
  if (hero && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(([e]) => {
      const past = !e.isIntersecting;
      topbar.classList.toggle('is-visible', past);
      pill.classList.toggle('is-visible', past);
    }, { threshold: 0, rootMargin: '-70% 0px 0px 0px' });
    io.observe(hero);
  }

  /* ---------- Daylight progress + background tween ---------- */
  const daylight = $('.daylight');
  const themes = {
    arrival:'#F6F3EE', door:'#F6F3EE', community:'#211d1a', rooms:'#F1EBE2',
    shared:'#EAE3D8', why:'#F6F3EE', vienna:'#F3E7D6', book:'#17161A'
  };
  const onScroll = () => {
    const h = document.documentElement;
    const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
    if (daylight) daylight.style.width = (p * 100) + '%';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if ('IntersectionObserver' in window) {
    const themeObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const t = e.target.dataset.themeTrigger;
          document.body.dataset.theme = t;
          if (themes[t]) document.body.style.setProperty('--bg', themes[t]);
        }
      });
    }, { threshold: 0.5 });
    $$('[data-theme-trigger]').forEach((el) => themeObs.observe(el));
  }

  /* ---------- Count-up numbers ---------- */
  const countEls = $$('[data-count]');
  const runCount = (el) => {
    const target = parseFloat(el.dataset.count);
    const dec = parseInt(el.dataset.decimals || '0', 10);
    const suffix = el.dataset.suffix || '';
    if (reduce) { el.textContent = target.toFixed(dec) + suffix; return; }
    const dur = 1400; const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = (target * eased).toFixed(dec) + suffix;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if ('IntersectionObserver' in window) {
    const co = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { runCount(e.target); co.unobserve(e.target); } });
    }, { threshold: 0.6 });
    countEls.forEach((el) => co.observe(el));
  } else countEls.forEach(runCount);

  /* ---------- Parallax (rAF, transform only) ---------- */
  const parallaxEls = $$('[data-parallax]');
  if (parallaxEls.length && !reduce) {
    let ticking = false;
    const update = () => {
      const vh = window.innerHeight;
      parallaxEls.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax);
        const rect = el.getBoundingClientRect();
        const offset = (rect.top + rect.height / 2 - vh / 2) * -speed;
        el.style.transform = `translate3d(0,${offset.toFixed(1)}px,0)`;
      });
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  /* ---------- Card tilt (desktop, motion-safe) ---------- */
  if (finePointer && !reduce) {
    $$('[data-tilt]').forEach((card) => {
      card.addEventListener('mousemove', (ev) => {
        const r = card.getBoundingClientRect();
        const px = (ev.clientX - r.left) / r.width - 0.5;
        const py = (ev.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(900px) rotateX(${(-py*4).toFixed(2)}deg) rotateY(${(px*5).toFixed(2)}deg) translateY(-4px)`;
      });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
  }

  /* ---------- Custom cursor ---------- */
  if (finePointer && !reduce) {
    const cursor = $('.cursor');
    const label = $('.cursor__label');
    const labels = { view:'View', link:'', book:'Book' };
    document.body.classList.add('has-cursor');
    cursor.style.display = 'block';
    let cx = 0, cy = 0, x = 0, y = 0;
    document.addEventListener('mousemove', (e) => { cx = e.clientX; cy = e.clientY; });
    const loop = () => {
      x += (cx - x) * 0.2; y += (cy - y) * 0.2;
      cursor.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    };
    loop();
    $$('[data-cursor], a, button').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        const kind = el.dataset.cursor || 'link';
        cursor.classList.add('is-active');
        cursor.classList.toggle('is-book', kind === 'book');
        label.textContent = labels[kind] ?? '';
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('is-active', 'is-book');
        label.textContent = '';
      });
    });
  }

  /* ---------- Lazy community video ---------- */
  const cv = $('[data-lazyvideo]');
  if (cv && 'IntersectionObserver' in window) {
    const vo = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !reduce) { cv.play?.().catch(() => {}); }
        else { cv.pause?.(); }
      });
    }, { threshold: 0.25 });
    vo.observe(cv);
  }

  /* ---------- Language menu ---------- */
  const langBtn = $('.lang__btn');
  const langMenu = $('.lang__menu');
  if (langBtn) {
    const toggle = (open) => {
      langMenu.hidden = !open;
      langBtn.setAttribute('aria-expanded', String(open));
    };
    langBtn.addEventListener('click', () => toggle(langMenu.hidden));
    langMenu.addEventListener('click', (e) => {
      const li = e.target.closest('[role="option"]');
      if (!li) return;
      $$('[role="option"]', langMenu).forEach((o) => o.setAttribute('aria-selected', 'false'));
      li.setAttribute('aria-selected', 'true');
      langBtn.childNodes[langBtn.childNodes.length - 1].textContent = ' ' + li.textContent.slice(0, 2).toUpperCase();
      toggle(false);
      // NOTE: wire real i18n routing (EN/DE/KO/JA/TH/ES/IT) here.
    });
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.lang')) toggle(false);
    });
  }

  /* ---------- Booking panel (open / close / focus trap) ---------- */
  const panel = $('#bookingpanel');
  let lastFocus = null;
  const openBooking = () => {
    lastFocus = document.activeElement;
    panel.hidden = false;
    document.body.style.overflow = 'hidden';
    const focusable = $$('a[href],button', panel).filter((el) => !el.hasAttribute('disabled'));
    focusable[0]?.focus();
    panel._focusable = focusable;
  };
  const closeBooking = () => {
    panel.hidden = true;
    document.body.style.overflow = '';
    lastFocus?.focus();
  };
  $$('[data-open-booking]').forEach((b) => b.addEventListener('click', openBooking));
  $$('[data-close-booking]').forEach((b) => b.addEventListener('click', closeBooking));
  document.addEventListener('keydown', (e) => {
    if (panel.hidden) return;
    if (e.key === 'Escape') closeBooking();
    if (e.key === 'Tab' && panel._focusable?.length) {
      const f = panel._focusable; const first = f[0]; const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ---------- uphotel IBE hook ----------
     The engine (ibe.min.js) is loaded in the page. When its embed API is
     confirmed by the property, initialise it into #ibe-widget /
     .bookingpanel__mount here. Until then, the native fallback button
     links straight to the secure booking URL, so booking always works. */
  window.addEventListener('load', () => {
    if (window.IBE && typeof window.IBE.init === 'function') {
      try { window.IBE.init({ target: '#ibe-widget', property: '78c820ab-21ac-4763-a6d6-767d2e845c89' }); }
      catch (err) { /* keep graceful fallback */ }
    }
  });
})();
