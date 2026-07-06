# Do Step Inn Central — Homepage

**🔗 Live:** https://do-step-inn-central.vercel.app
Branch preview: https://do-step-inn-central-git-claude-dostepinn-homepag-167a38-bandita.vercel.app
Auto-deploys from branch `claude/dostepinn-homepage-strategy-r9krog` via Vercel.

An immersive, scroll-driven homepage for the Vienna hostel **Do Step Inn Central**
(Südtiroler Platz 3, 1040 Vienna — directly above the Hauptbahnhof).

Built in **Design Direction A — "Elevated Traveller"**: a calm neutral gallery
canvas where the property's real colour and character are the content, with big
editorial typography, cinematic video, scroll storytelling and the logo-mint as
the accent that marks the path to booking.

Strategy behind every decision: **`HOMEPAGE-CREATIVE-STRATEGY.md`**.

## Run it
No build step — it's plain HTML/CSS/JS.
```bash
python3 -m http.server 8099
# open http://127.0.0.1:8099
```

## Structure
```
index.html                     8-chapter scroll narrative
assets/css/style.css           Direction A design system + all effects
assets/js/main.js              reveal, parallax, count-up, cursor, daylight, booking panel
assets/logo/dostepinn-central.svg   rebuilt VECTOR wordmark (replaces the raster-only logo)
assets/video/hero-01.mp4       client footage (Arrival hero)
assets/video/hero-02.mp4       client footage (Community)
assets/checkin-form.pdf        the real multilingual self check-in form
assets/img/                    photo slots (see below)
```

## What's implemented
- **8 chapters**: Arrival · The Door · Community · Rooms · Shared Spaces · Why Stay · Vienna · Book.
- **Cinematic hero** with focus-in video, staggered word reveal, scroll cue.
- **Scroll storytelling**: IntersectionObserver reveals, rAF parallax, a "daylight" progress bar and a background that warms across the chapters.
- **Count-up** stats ("3 min", "8.9", "1 stop").
- **Custom cursor** with contextual labels (desktop, motion-safe), **card tilt**, magnetic-feel buttons.
- **Native booking**: sticky "Check availability" pill + accessible booking panel (focus-trap, Esc). The uphotel **IBE** css/js are loaded; `#ibe-widget` is the native mount, with a guaranteed direct-link fallback.
- **Accessibility**: skip link, visible focus rings, `prefers-reduced-motion` fully honoured, semantic landmarks, ARIA on menu/dialog.
- **SEO**: one H1, chaptered H2s, `Hostel` JSON-LD, OG + locale alternates.
- **Language switcher UI** for the 7 launch locales.

## Follow-ups (need client assets / decisions)
1. **Real photography** → drop files into `assets/img/` and replace the `.media` /
   `roomcard__media` / `place` placeholder blocks with `<img>`/`<picture>`.
   Slots are labelled in the markup (e.g. `Façade · Südtiroler Platz`, `Pod dorm · keypad lock`).
2. **Video masters** → replace the "medium" cuts with full-res masters; add
   **poster frames** (`assets/img/hero-poster.jpg`, `community-poster.jpg`) and re-add the
   `poster="…"` attributes for a faster LCP. Add 9:16 crops for the mobile hero.
3. **Logo redraw sign-off** → `assets/logo/dostepinn-central.svg` is the elevated
   vector rebuild; confirm the direction (or supply refinements).
4. **IBE embed** → wire the exact uphotel init snippet in `main.js` (`window.IBE…`)
   once the property confirms the embed API; until then the direct booking link works.
5. **i18n** → add EN/DE/KO/JA/TH/ES/IT content + `hreflang`; load Noto multi-script
   fonts (KR/JP/Thai) so non-Latin locales render cleanly.

## Facts baked in
Südtiroler Platz 3, 1040 Vienna · 3 min from the Hauptbahnhof · U1 · Belvedere ~10 min ·
lockable pod beds · self-catering kitchen · free WiFi · luggage storage · 24h security ·
contactless check-in. **No breakfast** (self-catering kitchen story instead).
