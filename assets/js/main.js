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
  } else {
    // Sub-pages have no hero — keep the bar + pill visible from the start.
    topbar?.classList.add('is-visible');
    pill?.classList.add('is-visible');
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

  /* ---------- Mobile menu ---------- */
  const menuToggle = $('.menu-toggle');
  const mobilemenu = $('#mobilemenu');
  if (menuToggle && mobilemenu) {
    const setMenu = (open) => {
      if (open) mobilemenu.removeAttribute('hidden'); else mobilemenu.setAttribute('hidden', '');
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.classList.toggle('is-open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    };
    menuToggle.addEventListener('click', () => setMenu(mobilemenu.hasAttribute('hidden')));
    mobilemenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !mobilemenu.hasAttribute('hidden')) setMenu(false); });
  }

  /* ---------- Booking: smooth-scroll to the native IBE engine ----------
     The uphotel engine renders inline via <ibe-up> in Chapter 8. Every
     "Check availability / Check dates" control brings the guest to it and
     moves focus there for keyboard/screen-reader users. */
  const bookSection = $('#book');
  const bookHeading = $('#book-heading');
  $$('[data-open-booking]').forEach((b) => b.addEventListener('click', () => {
    bookSection?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    window.setTimeout(() => bookHeading?.focus({ preventScroll: true }), reduce ? 0 : 600);
  }));

  /* ---------- Booking engine health check (hide fallback only once it truly renders) ---------- */
  window.addEventListener('load', () => {
    const w = $('#ibe-widget');
    if (!w) return;
    window.setTimeout(() => {
      const el = w.querySelector('ibe-up');
      const rendered = !!customElements.get('ibe-up') && el && (el.shadowRoot || el.children.length > 0 || el.offsetHeight > 40);
      w.classList.toggle('ibe-ok', !!rendered);
    }, 3500);
  });

  /* ================= FIRST 24 HOURS — live weather + scroll journey ================= */
  const vj = $('.vienna-journey-section');
  if (vj) {
    // --- Live Vienna weather (Open-Meteo, runs in the visitor's browser) ---
    // A curated Vienna activity for every day — deterministic by date, filtered by weather,
    // so the recommendation changes automatically each day.
    const PICKS = {
      warm: ['Rent a bike along the Donaukanal', 'Swim at the Alte Donau', 'Picnic in the Stadtpark', 'Sunset from Kahlenberg', 'A long afternoon in a shady Gastgarten', 'Boat on the Neue Donau'],
      mild: ['Walk the Ring to Belvedere', 'Wander the MuseumsQuartier courtyards', 'Naschmarkt, then a slow stroll', 'A ride and a walk through the Prater', 'Rooftop view from Stephansdom', 'Coffee at Karlsplatz, then Karlskirche'],
      rain: ['The Kunsthistorisches Museum', 'A classic Viennese coffee house', 'The Albertina and a melange', 'MQ galleries out of the rain', 'The indoor stalls at Naschmarkt', 'Time Travel Vienna, then Sachertorte'],
      cold: ['Warm up in a proper Kaffeehaus', 'Schönbrunn halls and winter gardens', 'Hot chocolate and Sachertorte', 'Belvedere — Klimt, indoors', 'An afternoon at the Naturhistorisches Museum', 'A spa & sauna reset'],
    };
    const dayOfYear = () => { const n = new Date(); const s = new Date(n.getFullYear(), 0, 0); return Math.floor((n - s) / 86400000); };
    const pickOfDay = (bucket) => { const a = PICKS[bucket] || PICKS.mild; return a[dayOfYear() % a.length]; };

    const loadViennaWeather = async () => {
      const tempEl = $('#weather-temp', vj);
      const descEl = $('#weather-desc', vj);
      const sugEl = $('#weather-suggestions', vj);
      const pickEl = $('#weather-pick', vj);
      if (!tempEl) return;
      const render = (bucket, desc, sug) => {
        descEl.textContent = desc;
        sugEl.innerHTML = sug.map((s) => `<li>${s}</li>`).join('');
        if (pickEl) pickEl.textContent = pickOfDay(bucket);
      };
      try {
        const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=48.2082&longitude=16.3738&current=temperature_2m,weather_code,is_day&timezone=Europe%2FVienna');
        const d = await res.json();
        const temp = Math.round(d.current.temperature_2m);
        const code = d.current.weather_code;
        let bucket = 'mild', desc = 'Perfect on-foot weather for discovering Vienna.', sug = ['Belvedere', 'City walks', 'Outdoor cafés'];
        if (code >= 51 && code <= 99) { bucket = 'rain'; desc = 'Rainy Vienna. Coffee-house weather — museums, markets and slow mornings.'; sug = ['Museums', 'Coffee houses', 'Indoor markets']; }
        else if (temp >= 25) { bucket = 'warm'; desc = 'Warm and bright. Parks, the Danube and long golden-hour walks.'; sug = ['Danube', 'Parks', 'Sunset walks']; }
        else if (temp >= 16) { bucket = 'mild'; desc = 'Perfect on-foot weather for discovering Vienna.'; sug = ['Belvedere', 'City walks', 'Outdoor cafés']; }
        else if (temp < 8) { bucket = 'cold'; desc = 'Cold outside, cosy inside. Palaces, culture and hot chocolate.'; sug = ['Palaces', 'Museums', 'Hot chocolate']; }
        tempEl.textContent = temp + '°';
        if (!reduce) { tempEl.classList.remove('flip'); void tempEl.offsetWidth; tempEl.classList.add('flip'); }
        render(bucket, desc, sug);
      } catch (e) {
        // Offline / API blocked: still give a real, date-driven recommendation.
        tempEl.textContent = 'Vienna';
        render('mild', 'Live weather is catching up — here’s a plan for today.', ['Belvedere', 'Cafés', 'City walks']);
      }
    };
    loadViennaWeather();

    // --- Live "this week in Vienna" feed (date-driven; swap in a real ICS/API later) ---
    const loadViennaEvents = () => {
      const el = $('#vienna-events', vj);
      if (!el) return;
      // Curated recurring Vienna happenings by weekday (0=Sun … 6=Sat).
      const byDay = {
        0: [{ t: 'Danube Island morning run', time: '09:00' }, { t: 'Karlsplatz & MQ stroll', time: '11:00' }],
        1: [{ t: 'Kunsthistorisches Museum', time: '10:00' }, { t: 'Coffee-house afternoon', time: '15:00' }],
        2: [{ t: 'Belvedere galleries', time: '10:00' }, { t: 'Naschmarkt lunch', time: '13:00' }],
        3: [{ t: 'MuseumsQuartier courtyard', time: '16:00' }, { t: 'Ringstraße tram loop', time: '18:00' }],
        4: [{ t: 'Naschmarkt evening & street food', time: '18:00' }, { t: 'Prater lights', time: '20:00' }],
        5: [{ t: 'Belvedere late-night opening', time: '21:00' }, { t: 'Kärntner Straße night walk', time: '20:00' }],
        6: [{ t: 'Naschmarkt flea market', time: '09:00' }, { t: 'Danube canal bars', time: '19:00' }],
      };
      const dows = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      const now = new Date();
      const rows = [];
      for (let i = 0; i < 5; i++) {
        const d = new Date(now); d.setDate(now.getDate() + i);
        const opts = byDay[d.getDay()];
        const pick = opts[i % opts.length];
        rows.push(`<li><span class="mono">${dows[d.getDay()]} ${d.getDate()}</span><b>${pick.t}</b><span class="mono">${pick.time}</span></li>`);
      }
      el.innerHTML = rows.join('');
    };
    loadViennaEvents();

    // --- Active step highlight ---
    const steps = $$('.journey-step', vj);
    if ('IntersectionObserver' in window && !reduce) {
      const so = new IntersectionObserver((es) => {
        es.forEach((e) => { if (e.isIntersecting) { steps.forEach((s) => s.classList.remove('active')); e.target.classList.add('active'); } });
      }, { threshold: 0.6, rootMargin: '-8% 0px -34% 0px' });
      steps.forEach((s) => so.observe(s));
    } else { steps.forEach((s) => s.classList.add('active')); }

    // --- Scroll-driven Vienna route (the "camera" moving through the day) ---
    const routePath = vj.querySelector('#v24-route') || vj.querySelector('.route-bg');
    const progPath = vj.querySelector('#v24-progress');
    const marker = vj.querySelector('#v24-marker');
    const stopsG = vj.querySelector('#v24-stops');
    const timeline = $('.journey-timeline', vj);
    let len = 0, stopEls = [];
    const buildRoute = () => {
      if (!routePath || typeof routePath.getTotalLength !== 'function') return;
      len = routePath.getTotalLength();
      if (progPath) { progPath.style.strokeDasharray = len; progPath.style.strokeDashoffset = len; }
      if (stopsG && !stopEls.length && steps.length > 1) {
        steps.forEach((_, i) => {
          const pt = routePath.getPointAtLength(len * (i / (steps.length - 1)));
          const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          c.setAttribute('cx', pt.x); c.setAttribute('cy', pt.y); c.setAttribute('r', '0.85');
          c.setAttribute('class', 'map-stop'); stopsG.appendChild(c); stopEls.push(c);
        });
      }
    };
    buildRoute();

    let ticking = false;
    const drawJourney = () => {
      ticking = false;
      if (!len) { buildRoute(); if (!len) return; }
      const r = timeline.getBoundingClientRect();
      const vh = window.innerHeight;
      let p = (vh * 0.55 - r.top) / (r.height * 0.82);
      p = Math.max(0, Math.min(1, p));
      if (progPath) progPath.style.strokeDashoffset = len * (1 - p);
      if (marker) { const pt = routePath.getPointAtLength(len * p); marker.setAttribute('cx', pt.x); marker.setAttribute('cy', pt.y); }
      stopEls.forEach((c, i) => c.classList.toggle('lit', p >= i / (steps.length - 1) - 0.02));
      vj.style.setProperty('--vj-progress', p.toFixed(3));
    };
    if (!reduce) {
      const req = () => { if (!ticking) { requestAnimationFrame(drawJourney); ticking = true; } };
      window.addEventListener('scroll', req, { passive: true });
      window.addEventListener('resize', () => { stopEls.forEach((c) => c.remove()); stopEls = []; len = 0; buildRoute(); drawJourney(); }, { passive: true });
      drawJourney();
    } else if (progPath) { progPath.style.strokeDashoffset = 0; }
  }

  /* ================= LEGAL PAGES ================= */
  if (document.body.classList.contains('legal')) {
    // Estimated reading time
    const content = $('.legal-content');
    const rt = $('#reading-time');
    if (content && rt) {
      const words = content.textContent.trim().split(/\s+/).length;
      rt.textContent = Math.max(1, Math.round(words / 200)) + ' min read';
    }
    // Scrollspy TOC
    const tocLinks = $$('.legal-toc a');
    const sections = tocLinks.map((a) => document.getElementById(a.getAttribute('href').slice(1))).filter(Boolean);
    if (sections.length && 'IntersectionObserver' in window) {
      const spy = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = e.target.id;
            tocLinks.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === '#' + id));
          }
        });
      }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });
      sections.forEach((s) => spy.observe(s));
    }
    // Copy-link on each section heading
    $$('.copylink').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const id = btn.dataset.anchor;
        const url = location.origin + location.pathname + '#' + id;
        try { await navigator.clipboard.writeText(url); } catch (e) { /* ignore */ }
        history.replaceState(null, '', '#' + id);
        btn.classList.add('copied'); btn.setAttribute('aria-label', 'Link copied');
        window.setTimeout(() => { btn.classList.remove('copied'); btn.setAttribute('aria-label', 'Copy link to section'); }, 1400);
      });
    });
    // Back to top
    const toTop = $('.to-top');
    if (toTop) {
      window.addEventListener('scroll', () => { toTop.classList.toggle('is-visible', window.scrollY > 700); }, { passive: true });
      toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }));
    }
  }
})();
