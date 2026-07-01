# DO STEP INN CENTRAL — Homepage Creative Strategy

### An immersive digital experience for a Vienna hostel

**Prepared for:** Do Step Inn Central · Südtiroler Platz 3, 1040 Vienna, Austria
**Prepared by:** Creative Direction, Art Direction, UX Strategy, Brand, Motion, Frontend, WebGL, Accessibility & Conversion
**Status:** Strategy & creative foundation — *pre-design, pre-development*
**Date:** July 2026

> This document is the thinking that comes **before** the first mockup and long before the first line of code. It defines the idea, the emotion, the architecture and the standards. Nothing here is built yet. Everything here is decided on purpose.

---

## 0. How to read this document

We were asked not to think like a hotel-website designer. So this is not a sitemap with prettier words. It is a **film treatment** for a website — a story with chapters, a mood, a rhythm, and a single job: to make a traveller feel, in the first five seconds, *"this is where my Vienna begins."*

The document moves from **why** (brand, vision, emotion) → **what** (narrative, architecture, sections) → **how** (motion, photography, type, colour, code, accessibility, SEO, conversion) → **proof** (why this beats the current site) → **needs** (assets required from you).

A short note on facts we verified about the property, because the strategy is built on them:

- **Do Step Inn Central sits on Südtiroler Platz, directly above Vienna's Hauptbahnhof (Main Station)** — a 3-minute walk from the platforms, on top of the U1 metro. This is the single most important creative asset we have. *The hostel is literally the first door in Vienna.*
- It is a **self-service hostel** with **contactless, code-based check-in** — no queue, no front desk ritual. Independence is the product.
- Rooms are **4–6 bed dorms with lockable pod beds** (guests repeatedly name the pods as a highlight) and **private rooms with shared bathrooms**.
- Amenities: **communal kitchen** (cozy, large fridge), **lounge**, **free WiFi**, **luggage storage**, **full-day security**, **housekeeping**, **optional buffet breakfast**, parquet floors, work desks.
- Location score ~**8.9**; guests praise **cleanliness, location, easy check-in, and the pod beds**.
- Neighbours: **Belvedere Palace (~10 min walk)**, **Naschmarkt**, **Ringstraße**, **Innere Stadt** — all reachable on foot or one metro stop.
- Booking runs on the **uphotel.agency IBE** engine (`ibe.min.js` / `ibe.min.css`).

Everything below assumes this reality and turns it into an advantage.

---

## 1. Brand Strategy

### 1.1 The one-line positioning
**"Your first door in Vienna."**
Not the cheapest bed. Not a party barn. The literal and emotional threshold between arriving and belonging — a stylish, independent, safe launchpad above the city's Main Station.

### 1.2 What we are NOT
We refuse to look like Booking.com, Hostelworld, or a generic budget listing: no star-rating chrome, no red urgency banners, no stock "smiling receptionist," no clip-art amenity grids, no aggressive discount noise. We also refuse fake luxury — no gold serifs, no marble, no "boutique" cosplay. Pretending to be a five-star hotel would be a lie the price contradicts.

### 1.3 What we ARE
Modern · Social · Stylish · Authentic · Friendly · Safe · **Premium without pretending to be luxury** · Minimal but emotional. Think *the design confidence of Aesop, the warmth of a good neighbourhood café, the wayfinding clarity of an airport that actually works.*

### 1.4 Brand pillars (each pillar earns a chapter later)
1. **Arrival** — you are already here; the journey starts the moment you land.
2. **Independence** — code check-in, self-service, your own rhythm. Freedom, not neglect.
3. **Community** — a kitchen, a lounge, strangers who become the reason you extend your trip.
4. **Craft & Calm** — clean, considered, quiet-luxury materials; a hostel that respects your taste and your sleep.
5. **Vienna, on foot** — the city's culture is walkable from the front door.

### 1.5 Brand voice
Warm, spare, confident, a little wry. Short sentences. Speaks *to* a traveller, never *at* a customer. Never salesy, never corporate. Example register: *"Drop your bag. The city's already outside."* Multilingual-friendly — writes short so it translates cleanly.

### 1.6 Brand promise
*You'll arrive a stranger and leave with a route, a story, and probably a few phone numbers.*

---

## 2. Creative Vision

**The website is the first ten minutes in Vienna, compressed into a scroll.**

We build a **cinematic, scroll-driven arrival sequence**. The visitor doesn't browse a hostel; they *walk into one*. The camera is the scroll. Light changes as they descend. Space opens up. People appear. The city reveals itself through the windows. By the time the booking module arrives, the decision already feels made — because they've emotionally moved in.

Guiding principles:
- **Restraint is the flex.** Big type, big air, big photography. One idea per screen.
- **Every motion is a camera move or a light change** — never decoration.
- **The booking engine is a native citizen**, not an iframe bolted on at the end.
- **Feels expensive, reads friendly, loads fast.** All three, no compromise.

North-star references in spirit (not to copy): Studio Freight/Lenis scroll feel, Locomotive's editorial calm, Apple's product-page choreography, Instrument's typographic confidence, a travel documentary's patience.

---

## 3. Emotional Storytelling Concept

We map the real emotional arc of arriving somewhere new and turn each beat into a chapter:

| Beat | Feeling we induce | How the page delivers it |
|---|---|---|
| Landing | Anticipation, slight adrenaline | Hero: motion-blur arrival, city name resolving into focus |
| Stepping off the train | Orientation, "where am I?" | Station-to-door sequence; you're placed on the map instantly |
| Finding the door | Relief, "oh, it's *right there*" | Proximity reveal — 3 minutes, one staircase |
| Being welcomed | Ease, safety, independence | Code check-in shown as freedom, not absence |
| Meeting people | Warmth, belonging | Community chapter — real faces, real kitchen |
| Seeing your bed | Comfort, "I can sleep here" | Pod bed hero moment; privacy inside a shared world |
| Seeing the city | Desire, momentum | Vienna chapter — walkable culture, golden light |
| Deciding | Confidence, low friction | Booking as the natural next step, not a wall |

The emotional throughline: **anticipation → orientation → relief → belonging → desire → commitment.** Each chapter closes one of the visitor's anxieties (see §25) so that by the end, nothing stands between them and "Book."

---

## 4. Homepage Narrative (the chapters)

We do not build "sections." We build **8 chapters**, each with its own atmosphere, light temperature, and pace.

**Chapter 1 — Arrival.** *You just got off the train.* Cinematic hero. The city name and the promise. A quiet, always-present booking entry.

**Chapter 2 — The Door / The Hostel.** *It's right here.* The 3-minutes-from-the-platform reveal. Contactless check-in reframed as independence. The building, the materials, the calm.

**Chapter 3 — Community.** *You're not alone here.* The kitchen, the lounge, the strangers-to-friends promise. The social heart.

**Chapter 4 — Rooms.** *Where you'll sleep.* Pod beds and private rooms. Privacy inside a shared world. Honest, beautiful, restful.

**Chapter 5 — Shared Spaces.** *Where you'll actually live.* Kitchen, lounge, storage, security — the practical magic that makes a long stay easy.

**Chapter 6 — Why Stay Here.** *The quiet proof.* Trust, cleanliness, reviews, the things that make you sure. Delivered without shouting.

**Chapter 7 — Vienna.** *Step outside.* The city as an extension of the hostel. Walkable culture, one-stop metro, golden-hour Ringstraße.

**Chapter 8 — Book Your Adventure.** *Begin.* The booking engine as a calm, premium, native finale — plus everything a nervous first-timer needs (address, map, FAQ, contact) so the last screen answers the last question.

---

## 5. User Journey

### 5.1 Primary personas → dominant need → what convinces them
- **Solo backpacker / Interrailer** → *Is it safe, social, and near the station?* → Chapters 2 (station proximity, security), 3 (community).
- **Digital nomad** → *Can I work, cook, and stay a while?* → Chapters 4 (desk), 5 (kitchen/WiFi), 6 (reliability).
- **Young couple / weekenders** → *Can we get privacy without paying hotel prices?* → Chapter 4 (private rooms), 7 (Vienna in 48h).
- **Erasmus / students** → *Is it cheap, central, and full of people like me?* → Chapters 3, 7, price transparency.
- **International first-timer, anxious about a code-check-in** → *Will I be able to get in with no front desk?* → Chapters 2 & 8 (check-in explained, address, map, contact).

### 5.2 Journey map (entry → conversion)
1. **Enter** (organic search, social, referral) → Hero answers *where/why* in 5 seconds.
2. **Fall into the story** → smooth scroll pulls them chapter to chapter; each screen removes one doubt.
3. **Micro-conversions along the way** → persistent "Check availability" pill; "See dates & prices" invitations at emotional peaks (after Rooms, after Vienna).
4. **Arrive at booking** → dates likely pre-considered; IBE opens inline, styled natively.
5. **Reassurance rail** → address, map, check-in explainer, FAQ, contact sit *beside/after* the engine so no one bounces to find them.
6. **Convert or save** → book now, or leave with the address and an emotional imprint that brings them back.

### 5.3 Exit-risk moments & mitigations
- *"I can't find the price"* → prices/entry point visible early and persistently.
- *"How does code check-in even work?"* → 3-step explainer near booking.
- *"Where exactly is it?"* → map + "3 min from Hauptbahnhof" repeated at decision time.
- *"Is it clean/safe?"* → Chapter 6 proof before the ask.

---

## 6. Information Architecture

Single scrolling homepage, chaptered, with a lightweight sticky utility layer.

```
GLOBAL
├─ Sticky mini-nav (appears after Chapter 1): Logo · Rooms · Vienna · [Check availability]
├─ Persistent booking pill (thumb-reachable on mobile)
└─ Skip-to-content + reduced-motion + language toggle

HOMEPAGE (chaptered scroll)
├─ CH1 Arrival ............ hero, promise, booking entry
├─ CH2 The Door .......... location proof, contactless check-in
├─ CH3 Community ......... social spaces, the people
├─ CH4 Rooms ............. pods + private, honest gallery
├─ CH5 Shared Spaces ..... kitchen, lounge, storage, security
├─ CH6 Why Stay Here ..... trust, cleanliness, reviews, USPs
├─ CH7 Vienna ............ neighbourhood, walkable culture
├─ CH8 Book .............. IBE engine (native) + reassurance rail
└─ FOOTER ................ address, map, contact, hours, legal, socials, sister property

DEEP LINKS (future pages, stubbed): /rooms, /vienna-guide, /how-check-in-works, /contact
```

Heading hierarchy (one H1, chaptered H2s) is defined in §20.

---

## 7. Homepage Wireframe (low-fidelity, annotated)

Text wireframe — layout intent, not visual design.

```
┌───────────────────────────────────────────────┐
│ CH1 ARRIVAL                          [ ● pill ]│
│                                                 │
│      VIENNA                                     │  full-bleed cinematic bg (video/photo)
│      starts here.                               │  H1, oversized editorial
│                                                 │
│   Südtiroler Platz · above the Hauptbahnhof     │  locator line
│   [ Check dates → ]        ↓ scroll to arrive   │  primary CTA + scroll cue
└───────────────────────────────────────────────┘
┌───────────────────────────────────────────────┐
│ CH2 THE DOOR                                    │
│   [ big number ] 3 min          [ station→door ]│  proximity reveal, split layout
│   from the platform to your bed                 │
│   Contactless check-in. Your code, your time.   │  independence reframe (3-step chip)
└───────────────────────────────────────────────┘
┌───────────────────────────────────────────────┐
│ CH3 COMMUNITY                                   │
│   full-bleed kitchen/lounge imagery             │  people-first, warm light
│   "Arrive a stranger. Leave with a route."      │
└───────────────────────────────────────────────┘
┌───────────────────────────────────────────────┐
│ CH4 ROOMS                                       │
│  [ Pod dorm ]        [ Private room ]            │  two honest cards / horizontal reveal
│  lockable pods · 4–6 beds   privacy · shared bath│
│                         [ See dates & prices → ] │  mid-scroll micro-conversion
└───────────────────────────────────────────────┘
┌───────────────────────────────────────────────┐
│ CH5 SHARED SPACES                               │
│  kitchen · lounge · luggage · security · WiFi   │  living-here montage
└───────────────────────────────────────────────┘
┌───────────────────────────────────────────────┐
│ CH6 WHY STAY HERE                               │
│  8.9 location · spotless · easy in · pod love   │  quiet proof, real quotes
└───────────────────────────────────────────────┘
┌───────────────────────────────────────────────┐
│ CH7 VIENNA                                      │
│  Belvedere 10' · Ring · Naschmarkt · 1 stop     │  walkable-culture map/gallery
│                         [ Ready when you are → ] │
└───────────────────────────────────────────────┘
┌───────────────────────────────────────────────┐
│ CH8 BOOK                                        │
│  [ native IBE booking module ]                  │  styled engine, inline
│  address · map · how check-in works · FAQ · @   │  reassurance rail
└───────────────────────────────────────────────┘
```

---

## 8. Section-by-Section Breakdown

For each chapter: **purpose · content · CTA · success signal.**

**CH1 Arrival.** *Purpose:* land the positioning in 5s. *Content:* H1 promise, locator line (Südtiroler Platz / above the Hauptbahnhof), one-line sub, scroll cue, persistent booking pill. *CTA:* Check dates. *Signal:* scroll-past rate, pill engagement.

**CH2 The Door.** *Purpose:* kill the "where/how do I get in" anxiety. *Content:* the "3 minutes from the platform" hero stat; contactless check-in as a 3-step chip (Book → Get code → Walk in); building & materials. *CTA:* How check-in works. *Signal:* time-in-view, FAQ opens.

**CH3 Community.** *Purpose:* sell belonging. *Content:* kitchen & lounge life, the strangers-to-friends promise, the little rituals. *CTA:* soft (scroll). *Signal:* dwell time.

**CH4 Rooms.** *Purpose:* let them picture sleeping here. *Content:* pod dorms (lockable, 4–6 beds, the privacy-in-shared story) and private rooms (shared bath, honest framing), materials, light. *CTA:* See dates & prices. *Signal:* first strong click-to-book.

**CH5 Shared Spaces.** *Purpose:* prove day-to-day ease. *Content:* communal kitchen (big fridge), lounge, luggage storage, full-day security, WiFi, housekeeping, work desks. *CTA:* soft. *Signal:* nomad/long-stay engagement.

**CH6 Why Stay Here.** *Purpose:* trust before the ask. *Content:* location 8.9, cleanliness, easy check-in, pod love — real guest quotes, no fake stars. *CTA:* soft. *Signal:* scroll-to-book conversion lift.

**CH7 Vienna.** *Purpose:* turn location into desire. *Content:* Belvedere (~10 min), Naschmarkt, Ringstraße, Innere Stadt one metro stop; walkable-culture map; golden-hour city. *CTA:* Ready when you are. *Signal:* click to booking.

**CH8 Book.** *Purpose:* convert with zero friction. *Content:* native IBE module; reassurance rail = exact address, map/directions, check-in explainer, FAQ, contact, hours, breakfast option. *CTA:* Book. *Signal:* booking completions, engine start→finish rate.

---

## 9. Animation Strategy — for every section

Motion serves story. Global rules in §10. Per chapter:

- **CH1 Arrival.** Hero media resolves from motion-blur/soft-focus to sharp as the page settles (the "train pulling in and stopping" feeling). H1 words rise and settle with slight overshoot inertia. Scroll cue breathes.
- **CH2 The Door.** Scroll-linked **camera push** from station toward the door; the "3 min" number counts/scales on enter; check-in steps stagger in like stamps. Parallax between building foreground and street background.
- **CH3 Community.** Warm crossfades; imagery drifts with gentle parallax; a light-temperature shift toward amber. Faces reveal with a soft image-mask wipe, never a plain fade.
- **CH4 Rooms.** Horizontal reveal / pinned scroll: pods slide in with depth; a "curtain/pod door" mask reveals the interior. Private-room card lifts on hover with real shadow depth.
- **CH5 Shared Spaces.** Montage with scroll-scrubbed sequence; icons draw-on (SVG stroke) as each amenity enters. Subtle.
- **CH6 Why Stay Here.** Quotes fade up with weight; the 8.9 and key numbers tick up once. Calm, editorial, no bounce.
- **CH7 Vienna.** Map points connect with animated lines; landmark images parallax; golden light sweeps. Optional cursor-follow depth on desktop.
- **CH8 Book.** The page *calms* — motion budget drops to near-zero so the engine feels stable and trustworthy. Reassurance items reveal on scroll, gently.

**Page transitions:** smooth, masked, never white-flash. **Between chapters:** background colour/light temperature tweens so the "day" progresses as you scroll (cool arrival → warm community → golden Vienna → calm booking).

---

## 10. Motion Principles

1. **Every animation is a camera move or a light change.** If it's neither, cut it.
2. **No generic fade-ins.** Reveals use masks, clips, depth, or transforms with intent.
3. **Physics, not linear.** Soft inertia, gentle overshoot, mass. Custom easing (roughly `expo.out` / spring-like), never default `ease`.
4. **One hero motion per screen.** Supporting motion is quieter than the lead.
5. **Scroll is the timeline.** Prefer scroll-linked choreography over autoplay; the user directs the film.
6. **Motion budget is real.** Target ≤ a few simultaneous animated properties per frame; transform/opacity only; 60fps or it's cut.
7. **Calm at the point of decision.** Booking chapter is the quietest by design.
8. **Reduced-motion is a first-class path, not a fallback** (see §19).
9. **Inertia everywhere it helps** (smooth scroll via a Lenis-style layer), **nowhere it hurts** (never hijack, never fight the user's scroll speed, always allow instant stop).

---

## 11. Photography Direction

**Overall look:** editorial travel documentary meets Scandinavian calm. Natural light, honest spaces, real people (never stiff models). Warm neutrals, generous negative space, film-like tonality — slightly desaturated highlights, gentle warmth in shadows.

- **Lighting:** golden hour and soft window light; avoid hard flash. Evening = warm amber lamps; morning = cool clean daylight. Light should visibly progress across the page's chapters.
- **Composition:** strong negative space for type overlay; rule-of-thirds; leading lines (platforms, corridors, streets that pull the eye "inward" toward the hostel).
- **Cropping:** cinematic — full-bleed 16:9 / 21:9 for chapter heroes; tall 4:5 / 3:4 portraits for people and rooms on mobile.
- **Mood:** unhurried, warm, real. A place you exhale in.
- **Angles:** low, human-eye-level for arrival and rooms (you're *in* it); wide establishing shots for the building and Vienna; tight detail shots (a key code pad, coffee in the kitchen, a made pod bed, parquet grain).
- **Motion opportunities:** steam off coffee, curtains in a breeze, a train sliding out, people walking through — all candidates for subtle cinemagraph/looping video.
- **Drone opportunities:** one hero shot — the hostel's roof with the Hauptbahnhof and the city skyline behind it, proving "you are on top of the station." Golden hour.
- **Portrait direction:** candid, mid-action, laughing, cooking, reading — diverse, international, unposed. Eyes not always to camera.
- **Lifestyle direction:** the *rituals* — checking in with a code, dropping a bag, cooking together, planning a route on a map, heading out at dusk.
- **Architectural direction:** clean, honest, well-lit interiors that show real scale and materials (parquet, pods, kitchen). No wide-angle distortion lies.

**Shot list → see §30.**

---

## 12. Video Direction

Use short, silent, looping cinematic clips (5–10s, muted, `playsinline`, poster-first) **only where motion adds truth**:

- **Hero (CH1):** train arriving / stepping onto the platform, or a slow push toward the hostel door at dusk. The single most important clip.
- **Entrance / check-in (CH2):** hand entering the door code, door opening — sells contactless independence in 4 seconds.
- **Kitchen & community (CH3/5):** people cooking, laughing, the kettle, the lounge at night.
- **Room (CH4):** a slow reveal of a pod bed; the pod "door" closing for privacy.
- **Vienna (CH7):** Ringstraße trams, Naschmarkt bustle, Belvedere at golden hour, evening city lights.
- **Morning vs evening mood:** two short clips to bookend the "day" arc (clean morning light → warm evening).

**Rules:** every hero video needs a photographic poster fallback; no autoplay video on constrained connections or reduced-motion; total video weight strictly budgeted (§18).

---

## 13. Illustration Strategy

Photography leads; illustration is a **quiet connective tissue**, never a mascot circus.

- **Line-based wayfinding motifs:** a minimal route line "station → door" reused as a visual signature (in CH2, the map, the check-in explainer).
- **Simple map illustration** for Vienna (custom, monoline, on-brand) rather than a raw Google embed styled to match brand tones.
- **Subtle grain/texture overlay** (warm concrete/paper) to unify photography and add tactility.
- No cartoon characters, no clip-art. If in doubt, leave it to the photo and the type.

---

## 14. Iconography Direction

- **Custom monoline set**, ~1.5px optical stroke, rounded joins — friendly but precise. One coherent family for amenities (WiFi, kitchen, lockable pod, luggage, security, key-code, bike, breakfast).
- Icons **support, never replace, words**; always paired with labels for accessibility and clarity.
- Icons may **draw-on** (stroke animation) as amenities enter view (CH5) — subtle, once.
- SVG only, inline where interactive, sprite where static. Decorative icons `aria-hidden`.

---

## 15. Typography System

**Direction:** a large editorial **display serif** for emotion + a clean **grotesque sans** for clarity and UI. International, elegant, modern.

- **Display / Headlines:** a contemporary high-contrast or transitional serif with character — candidates: *GT Sekt, PP Editorial New, Freight Display, Canela,* or a well-hinted open-source alt (e.g. *Fraunces* variable) as a licence-friendly fallback. Used oversized, tight leading, for chapter titles and the H1.
- **Body / UI:** a neutral, highly legible grotesque — candidates: *Neue Haas Grotesk, ABC Diatype, Söhne,* or open-source *Inter / Geist* for a licence-safe fallback. Used for body, labels, booking UI, nav.
- **Optional accent:** a mono (e.g. *ABC Diatype Mono / Geist Mono*) for locators, room codes, distances ("3 MIN", "48.185°N") — reinforces the travel/wayfinding feel.

**Type scale (fluid, `clamp()`):**
```
Display XL  clamp(3rem, 9vw, 8rem)     — H1 / chapter heroes
Display L   clamp(2.25rem, 6vw, 5rem)  — chapter titles
Heading     clamp(1.5rem, 3vw, 2.5rem)
Body L      clamp(1.125rem, 1.4vw, 1.375rem)
Body        1rem–1.125rem  (min 16px, never smaller for content)
Caption/UI  0.875rem  (used sparingly; meets contrast)
```
**Rules:** one H1; variable fonts preferred (one file, many weights) for performance; `font-display: swap` with a metric-matched fallback to prevent layout shift; generous line-length (60–75ch for body); real hanging punctuation and proper quotes for the editorial feel.

---

## 16. Colour System

A new, timeless system inspired by warm concrete, matte black, natural wood, glass, steel, warm light, Vienna at sunset — with restrained **mint** as the single living accent.

```
Base / Canvas
  Soft White      #F6F3EE   (warm paper, primary background)
  Warm Concrete   #E7E1D8   (secondary surfaces)
  Sand Mid        #CFC6B8   (dividers, muted)

Ink
  Matte Black     #17161A   (primary text, near-black not pure)
  Graphite        #3B3A3E   (secondary text)
  Steel           #7A7C82   (captions, disabled)

Warmth (Vienna at sunset — imagery & gradients, used sparingly)
  Amber           #C9853F
  Terracotta      #B4623E
  Warm Wood       #A9805A

Accent (the one living colour — CTAs, focus, key highlights)
  Mint            #9FC7B4    (soft, muted, not neon)
  Mint Deep       #4F8C74    (accessible text/CTA on light)

Utility
  Focus Ring      #4F8C74 (mint deep) — high-contrast, visible on all surfaces
  Error/Success   derived, muted, accessible
```

**Rules:** the site is predominantly **soft white + matte black** (quiet, expensive). Warm tones live mostly *in the photography and gradient washes* that shift by chapter. **Mint is rationed** — it marks the path to booking so the eye always knows where "yes" is. All text/background pairs meet **WCAG AA (4.5:1 body, 3:1 large)**; mint-deep is the accessible action colour, soft mint is decorative only. A dark mode variant (matte black canvas, warm ink) is a fast-follow, not launch-critical.

---

## 17. UI Component Philosophy

- **Quiet until touched, alive when engaged.** Components sit calm, then respond with physical, meaningful feedback.
- **Buttons:** minimal by default; on hover, a soft fill/underline draw or magnetic pull (desktop), never a garish colour flip; clear pressed state; large touch targets (≥44px). The primary "Check availability" always in mint-deep.
- **Cards (rooms, Vienna):** real depth on hover (shadow + slight lift + image scale-within-frame), not a border highlight. Content-first; the image reveals, doesn't just sit.
- **Images:** reveal via mask/clip on enter; lazy-loaded; blur-up placeholder to avoid pop-in and CLS.
- **Cursor (desktop only):** a subtle custom cursor that grows/labels over interactive media ("View", "Book", "Drag"); disabled on touch and for reduced-motion.
- **Forms/booking UI:** generous, calm, single-column, obvious focus states, inline validation, no dark patterns.
- **Consistency:** every component from one token set (colour, type, spacing, radius, motion) so nothing feels "default." Design tokens are the contract between design and code.

---

## 18. Booking Integration Strategy

**Principle: the IBE must feel *built for us*, not embedded.** Think airline app / Apple checkout — calm, native, trustworthy.

- **Assets acknowledged & central to the design:** we design *around* the uphotel.agency engine from day one.
  ```html
  <script type="text/javascript" src="https://ibe.uphotel.agency/ibe.min.js"></script>
  <link href="https://ibe.uphotel.agency/ibe.min.css" rel="stylesheet" />
  ```
  Booking target: `https://ibe-server.myibe.com/ibe-preview/78c820ab-21ac-4763-a6d6-767d2e845c89`
- **Two-tier booking presence:**
  1. **Persistent entry** — a slim, always-reachable "Check availability" pill (sticky, thumb-height on mobile). Optionally a compact date/guests bar that hands off to the engine.
  2. **Native finale (CH8)** — the full IBE rendered inline, wrapped in our design system.
- **Visual native-ization:** we scope and override the engine's CSS to match our tokens (type, colour, spacing, radius, focus rings). We inherit fonts, tune inputs and buttons, and remove any chrome that clashes. Where the engine limits styling, we frame it in our layout (headline, reassurance rail, brand chrome) so context feels seamless even if the widget internals are constrained.
- **Progressive & performant:** the engine's JS/CSS load **deferred / on-interaction or on-approach** (when CH8 nears the viewport), not blocking the hero — so the arrival experience stays instant.
- **Reassurance beside the engine:** exact address, map/directions, "how contactless check-in works," free-cancellation/price clarity, breakfast option, and contact — so no one leaves CH8 to find an answer.
- **Fallback:** if the engine fails to load (network/blocked), show a graceful branded panel with the direct booking link and contact — never a blank box.
- **Measurement:** track engine start → date-select → complete to find and fix friction.

*Constraint honesty:* third-party engines limit deep styling and we cannot control their internal accessibility fully — mitigations and testing are in §19 and §32.

---

## 19. Accessibility Plan (mandatory, first-class)

- **Contrast:** all text meets **WCAG 2.2 AA** (4.5:1 body / 3:1 large & UI). Mint-deep for actionable text; soft mint decorative only. Verified per token pair.
- **Keyboard:** full operability, logical tab order, visible **mint-deep focus ring** on every interactive element, skip-to-content link, no keyboard traps (esp. around the booking widget and any modal).
- **Reduced motion:** `prefers-reduced-motion: reduce` → disable scroll-scrubbing, parallax, autoplay video, custom cursor; replace with instant, tasteful states. The story still reads fully without motion.
- **ARIA strategy:** semantic HTML first; ARIA only to fill gaps. Landmarks (`header/nav/main/section/footer`), labelled sections, `aria-hidden` on decorative media/icons, live-region politeness for booking status, accessible names on all controls.
- **Focus management:** move focus predictably on route/modal changes; return focus on close; never steal focus during scroll animation.
- **Screen readers:** meaningful alt text for content images, empty alt for decorative; captions/labels for icons; the chapter narrative must make sense read linearly. Test with VoiceOver/NVDA.
- **Readable typography:** min 16px body, ample line-height, no low-contrast grey-on-grey, respect user zoom to 200% without breakage.
- **Touch targets:** ≥44×44px, comfortable spacing, thumb-zone primary actions on mobile.
- **Motion safety:** no flashing >3/s; autoplay video muted, pausable, poster-first.
- **Third-party caveat:** we audit the IBE's a11y, apply what overrides allow, and provide an accessible fallback path to book (§18, §32).

---

## 20. SEO Plan

Goal: make the homepage the strongest page for Vienna hostel intent, especially **"hostel near Vienna Hauptbahnhof / Central Station."**

- **Heading hierarchy:** exactly one **H1** ("Vienna starts here" / brand+location promise). Each chapter is an **H2** with keyword-aware but human titles (e.g. "Rooms," "Getting here," "Vienna on foot"). Sub-points H3.
- **Semantic HTML:** proper landmarks, `<figure>/<figcaption>`, `<address>`, real lists for amenities — content is legible without JS (SSR/SSG the copy; hydrate motion on top).
- **Schema (JSON-LD):** `Hostel`/`LodgingBusiness` (name, address, geo, priceRange, amenityFeature, checkinTime, image), `BreadcrumbList`, `FAQPage` (check-in, location, breakfast), `Organization`/`sameAs` (socials, sister property), `Review`/`AggregateRating` if we own rights to display them.
- **Image SEO:** descriptive filenames, alt text, width/height set, modern formats, sitemap for key images.
- **Local/Travel/Hospitality SEO:** NAP consistency (Südtiroler Platz 3, 1040 Wien), Google Business Profile alignment, geo-coordinates, proximity content (Hauptbahnhof, Belvedere, Naschmarkt, Ring), multilingual `hreflang` (EN primary; DE, and consider ES/IT/FR for the Interrail crowd).
- **Core Web Vitals as SEO:** LCP < 2.5s (hero image prioritized, video deferred), CLS < 0.1 (reserved media dimensions, font-metric matching), INP < 200ms (motion off the main thread). See §21.
- **Internal linking:** homepage links to future `/rooms`, `/vienna-guide`, `/how-check-in-works` with descriptive anchors; footer sitewide links.
- **Content depth:** the chapter copy naturally carries the entities Google needs (location, amenities, room types, price signal) without keyword stuffing.

---

## 21. Performance Plan

Target: **feels cinematic, scores like a static site.**

- **Budgets:** LCP < 2.5s (aim < 1.8s), CLS < 0.1, INP < 200ms; initial JS ≤ ~150KB gzip, hero image ≤ ~200KB, total above-the-fold weight tight; **animation budget** = transform/opacity only, GPU-composited, ≤ a handful of animated layers per frame, 60fps.
- **Images:** AVIF/WebP with fallbacks, responsive `srcset`/`sizes`, `loading="lazy"` (except LCP hero = `fetchpriority="high"`, preloaded), blur-up placeholders, explicit dimensions (no CLS).
- **Video:** poster-first, deferred, `preload="none"` until near viewport, muted `playsinline`, capped bitrate, skipped on Save-Data/reduced-motion/slow connections.
- **Code splitting:** ship the hero fast; **lazy-load** WebGL/heavy motion and the **booking engine** on approach/interaction; route-level splitting for future pages.
- **GPU acceleration:** compositor-friendly transforms, `will-change` used surgically, off-main-thread scroll where possible.
- **Progressive enhancement:** content + booking link work without JS; motion is the enhancement layer, not the foundation.
- **Three.js only where it earns it:** WebGL is opt-in per section, lazy-loaded, with a static-image fallback; killed on low-power/reduced-motion. If a section's WebGL doesn't beat a well-shot video, we ship the video.
- **Delivery:** SSG/SSR HTML + CDN, HTTP/2+ , long-cache hashed assets, font subsetting + preload, minimal third parties.
- **Fallbacks:** every enhanced experience degrades to a fast, beautiful static one.
- **Scoring goal:** Lighthouse **90+ across the board on mobile**, green field data on all three Core Web Vitals.

---

## 22. Mobile Experience Strategy (design mobile-first)

Most of this audience arrives on a phone, often on station WiFi. Mobile is the primary design, not a shrink.

- **Reimagined, not reduced:** chapters restructured for portrait; full-bleed 4:5 imagery; type scales fluidly; one idea per thumb-scroll.
- **Thumb-first:** primary "Check availability" pill fixed in the thumb zone; large targets; reachable nav.
- **Exclusive mobile interactions:** swipeable room/Vienna galleries with snap + inertia; a "pull to reveal" arrival moment; haptic-feel micro-feedback (via subtle transforms); tap-to-expand pods; a bottom-sheet booking module (native app feel).
- **Performance-critical:** lightest media path, video only on WiFi/fast connections, motion reduced automatically on low-power.
- **Native feel:** momentum scrolling, bottom sheets, snap points, instant tap response — it should feel like an app, not a page.
- **Fast entry to booking:** never more than a thumb-reach from starting a booking, at any scroll depth.

---

## 23. Desktop Experience Strategy

- **Cinema mode:** big canvas, full-bleed chapters, generous negative space, layered parallax and depth the small screen can't show.
- **Pointer richness:** custom cursor, magnetic buttons, hover-reveal media, cursor-parallax in the Vienna map — all reduced-motion aware, all disabled on touch.
- **Two-column editorial layouts** where they add sophistication (CH2 door, CH4 rooms).
- **Sticky utility:** slim nav + booking pill appear after the hero; never intrusive.
- **Restraint at scale:** more space to fill, so *fewer* elements per screen, bigger, more confident.

---

## 24. Interaction Design Principles

1. **Feedback is physical and immediate** — every interaction acknowledges the user within 100ms.
2. **Nothing is "default."** Buttons, cards, images, cursor all carry the brand's hand.
3. **Depth communicates hierarchy** — elevation and parallax signal what's primary.
4. **The path to booking is always visible** (mint marks it).
5. **Respect the user's control** — never hijack scroll, always allow stop/skip, honour reduced-motion.
6. **Consistency builds trust** — one motion language, one easing family, one feedback vocabulary.
7. **Delight is quiet** — a small surprise (a pod door closing, a route line drawing) beats a loud one.

---

## 25. Scroll Storytelling Plan

Scroll is the film's timeline. As the user scrolls:

- **Background light temperature progresses** cool→warm→golden→calm across CH1→CH8 (the "day" of arrival).
- **Scroll-linked camera moves** carry each chapter (push toward the door in CH2, reveal pods in CH4).
- **Pinned moments** for the biggest beats (the "3 minutes" reveal; the room reveal) — briefly hold, scrub, release.
- **Each chapter closes one anxiety** (the visitor's real questions), in order:
  *Where am I?* (CH1) → *How do I get in / where exactly?* (CH2) → *Who stays here?* (CH3) → *What's my bed like?* (CH4) → *Can I live here / cook / work / store bags / stay safe?* (CH5) → *Can I trust it?* (CH6) → *What will I actually do in Vienna?* (CH7) → *Is booking easy?* (CH8).
- **Smooth-scroll layer** (Lenis-style inertia) unifies the feel; **scroll cues** guide without nagging; **progress is implicit** (the changing light tells you how far into the "day" you are).
- **Reduced-motion path:** same chapters, same order, same copy — delivered as clean static sections. The story never depends on motion to be understood.

---

## 26. Trust-Building Strategy

Budget travellers are cautious. We earn trust *before* we ask for the booking:

- **Radical location honesty:** "3 minutes from the Hauptbahnhof platform," repeated with a map — proximity is the #1 trust and convenience signal.
- **Contactless check-in explained, not hidden:** a clear 3-step chip (Book → Receive code → Walk in) turns a potential worry into a selling point (independence, arrive anytime).
- **Real proof, no fake stars:** genuine guest quotes praising cleanliness, location, easy check-in, pod beds; the 8.9 location score shown with source; no invented rating chrome.
- **Safety made visible:** full-day security, lockable pods, secure entry, luggage storage — stated plainly.
- **Cleanliness shown:** honest, well-lit, uncluttered room/kitchen photography (the #1 review theme).
- **No dark patterns:** transparent pricing entry, clear cancellation, no fake scarcity, no forced pop-ups.
- **Human reachability:** contact, address, map, FAQ all present at the point of decision.
- **Consistency with the world:** the same NAP, photos, and tone as Google/Booking listings so nothing feels "off."

---

## 27. Hospitality UX Improvements

Beyond aesthetics, concrete guest-experience wins the homepage should surface (and set up for later build):

- **"How check-in works" explainer** (mini-page + on-home chip) — the single biggest anxiety for a code-based self-service hostel.
- **Arrival-from-the-station micro-guide:** "Off the train → up to Südtiroler Platz → the door" (map + one photo per step). Reduces day-of stress and support load.
- **Clear self-service expectations:** what "self-service" means (freedom + independence), what's available 24/7 (WiFi, kitchen, security, luggage), what costs extra (breakfast).
- **Practical FAQ at booking:** luggage before check-in / after check-out, breakfast price & hours, kitchen access, quiet hours, private-room bathroom sharing.
- **Long-stay/nomad affordances:** desk, WiFi, kitchen, weekly value — signposted for the digital-nomad persona.
- **Community signposting:** what's on (kitchen nights, the lounge) so social travellers know they'll find people.
- **Post-book reassurance path (future):** confirmation → arrival guide → code → "see you soon."

---

## 28. Why this concept is dramatically stronger than the current homepage

| Dimension | Current site (typical hostel homepage) | New concept |
|---|---|---|
| **Core idea** | Lists rooms & amenities | Tells the story of *arriving in Vienna*; sells a feeling |
| **First 5 seconds** | "It's a budget hostel" | "This is unlike any hostel site I've seen" |
| **Structure** | Stacked generic sections | 8 cinematic chapters, each an atmosphere |
| **Location** | Buried as an address line | The hero asset: *3 minutes above the Hauptbahnhof*, repeated & mapped |
| **Check-in** | Confusing "code" afterthought | Reframed as independence, explained in 3 steps |
| **Booking** | Bolted-on external widget | Native, calm, airline/Apple-grade, styled to brand |
| **Motion** | Static or generic fades | Story-driven, scroll-linked, reduced-motion-safe |
| **Trust** | Star chrome / thin proof | Honest proof: real quotes, cleanliness shown, safety stated |
| **Brand** | Looks like Booking.com | Looks like an awarded creative studio built it |
| **Emotion** | Transactional | Aspirational — "my trip already started" |
| **Accessibility/SEO/Perf** | Usually afterthoughts | First-class, budgeted, measurable (CWV, AA, 90+) |
| **Conversion logic** | Hope they find "book" | Every chapter closes a doubt; the ask feels inevitable |

**In one line:** the current site *informs*; the new one *transports* — and it converts precisely because it makes the traveller feel they've already arrived.

---

## 29. Additional content that should be created

- **Refined homepage copy** per chapter (headlines, sub-copy, CTAs) — written after this structure is approved.
- **"How contactless check-in works"** step content (copy + visuals).
- **Arrival-from-the-station micro-guide** (copy + step photos).
- **Vienna neighbourhood guide** content (Belvedere, Naschmarkt, Ring, day-trip ideas) — seeds the future `/vienna-guide` page and SEO.
- **Room descriptions** — honest, benefit-led copy for pods and private rooms.
- **FAQ** (check-in, luggage, breakfast, kitchen, safety, cancellation).
- **Curated real guest quotes** (with permission/rights) emphasising cleanliness, location, check-in, pods.
- **House rules / self-service expectations** in brand voice.
- **Meta/OG copy** and structured data content.
- **Multilingual translations** (DE + Interrail languages) once EN is locked.
- **Sustainability / values** blurb if applicable (resonates with this audience).

---

## 30. Complete image checklist for the photographer

**Chapter 1 — Arrival / Hero**
- [ ] Hero establishing: hostel + Hauptbahnhof + Vienna skyline, golden hour (drone) — *the signature shot*
- [ ] Train arriving / departing on the platform (motion candidate)
- [ ] Traveller stepping off train onto Südtiroler Platz platform (POV / over-shoulder)
- [ ] Südtiroler Platz street level toward the hostel entrance, dusk

**Chapter 2 — The Door / Check-in**
- [ ] The hostel façade / entrance, human eye-level
- [ ] Hand entering the door code on the keypad (detail, motion candidate)
- [ ] Door opening / first step inside
- [ ] Materials & textures: parquet grain, concrete, wood, steel, warm light
- [ ] The route "station → door" reference shots for the micro-guide (3–4 steps)

**Chapter 3 — Community**
- [ ] Candid group cooking/eating in the kitchen, warm evening light
- [ ] Lounge life — people reading, chatting, planning routes on a map
- [ ] Two travellers meeting / laughing (unposed)
- [ ] Detail: coffee, shared table, a map with notes

**Chapter 4 — Rooms**
- [ ] Pod bed hero — made, lit, inviting (the star)
- [ ] Pod "door" closed showing privacy; open showing space
- [ ] 4- and 6-bed dorm wides (honest scale, no distortion)
- [ ] Private room — bed, desk, window light
- [ ] Shared bathroom / shower (clean, well-lit)
- [ ] Details: reading light, locker, USB/outlet, work desk in use

**Chapter 5 — Shared Spaces**
- [ ] Communal kitchen wide + the "huge fridge" detail
- [ ] Lounge in day and night mood
- [ ] Luggage storage area
- [ ] Security/entry detail (reassuring, not clinical)
- [ ] WiFi/work moment — nomad at the desk
- [ ] Breakfast buffet spread (if offered) — appetising, natural light

**Chapter 6 — Why Stay Here**
- [ ] Clean, styled "proof" shots (spotless bed, tidy kitchen)
- [ ] Portraits of happy guests (for quote pairing, with releases)

**Chapter 7 — Vienna**
- [ ] Belvedere Palace, golden hour
- [ ] Naschmarkt life
- [ ] Ringstraße trams / architecture
- [ ] Innere Stadt streets, cafés, evening lights
- [ ] "One metro stop" reference (U1 at Südtiroler Platz)

**Global**
- [ ] Vertical 4:5 / 3:4 crops of all hero moments for mobile
- [ ] Negative-space compositions for type overlay
- [ ] Morning-light and evening-light pairs for the "day" arc

*All shots: natural light, warm neutral tone, documentary honesty, delivered in high-res + web-optimised derivatives.*

---

## 31. Complete video checklist

- [ ] **Hero clip:** train arriving / slow push to the door at dusk (5–10s loop, muted) — *priority one, with photo poster*
- [ ] **Check-in clip:** hand → code → door opens (4–6s)
- [ ] **Kitchen/community clip:** cooking, laughter, kettle steam (5–8s)
- [ ] **Room clip:** slow pod-bed reveal / pod door closing (5–8s)
- [ ] **Lounge evening clip:** warm night mood (5–8s)
- [ ] **Vienna clips:** Ring trams, Naschmarkt, Belvedere golden hour, evening city lights (3–4 short loops)
- [ ] **Morning-light clip** and **evening-light clip** to bookend the day arc
- [ ] Optional **60–90s brand film** for social + potential hero (future)

*All video: silent, `playsinline`, poster-first, budget-capped, with photographic fallbacks; deliver 16:9 + 9:16 crops.*

---

## 32. Risks and possible improvements

**Risks**
- **Booking engine styling limits.** The uphotel IBE may restrict deep CSS control. *Mitigation:* scope-override what we can, frame the rest in our chrome, provide branded fallback + direct link, and test the engine's own a11y.
- **Performance vs. cinema tension.** Heavy media/WebGL can hurt CWV. *Mitigation:* strict budgets, lazy/deferred loading, WebGL only where it beats video, static fallbacks, mobile-first weight discipline.
- **Motion overwhelming or causing discomfort.** *Mitigation:* one hero motion per screen, reduced-motion first-class, no scroll-hijack.
- **Asset dependency.** The concept lives or dies on great photography/video (esp. the drone hero). *Mitigation:* detailed shot lists (§30–31), and a tasteful "photography-forthcoming" interim design.
- **"Central" vs "Home" brand confusion.** Two Do Step Inn properties exist; listings mix them up. *Mitigation:* crisp naming, clear cross-linking, distinct address/positioning; correct NAP + schema.
- **Third-party a11y/perf we don't own** (engine, maps, fonts). *Mitigation:* audit, self-host fonts, fallback maps, accessible paths.
- **Self-service anxiety** for less confident travellers. *Mitigation:* the check-in explainer and arrival micro-guide (§27).

**Possible improvements (fast-follows)**
- Dark mode; multilingual rollout; `/vienna-guide` content hub for SEO; live availability teaser; guest-photo/UGC gallery; loyalty or "return traveller" nudge; A/B testing on booking-pill copy/placement; email capture for those who don't book today (with an arrival guide as the incentive).

---

## 33. Future ideas for the remaining website pages

- **/rooms** — full room detail with the same pod-reveal language; per-room booking deep-links.
- **/vienna-guide** — the hostel as a *concierge*: curated neighbourhoods, day trips, "48 hours in Vienna," maps — a major SEO and brand asset.
- **/how-check-in-works** — the definitive self-service arrival guide; reduces support load.
- **/community & events** — kitchen nights, what's on, the social proof engine.
- **/about & values** — the story, sustainability, the people behind it.
- **/contact & FAQ** — practical, warm, complete.
- **Booking confirmation & pre-arrival flow** — code delivery, arrival guide, "see you soon" — extending the story past the booking.
- **Sister-property cross-sell** (Do Step Inn Home) — clean, non-confusing.
- **Blog / journal** (optional) — Vienna stories for SEO and brand voice.

---

## ASSETS REQUIRED FROM CLIENT

Nothing gets built until we have these. Grouped by priority.

### A. Brand & identity
- [ ] **Logo** — vector (SVG/AI/EPS), light + dark versions, clear-space rules
- [ ] Any existing **brand guidelines**, fonts, or colour references (even if we're evolving them)
- [ ] Confirmation to **develop a new design system** (colour/type) vs. constraints to respect
- [ ] Official **business/legal name, VAT/registration**, and imprint/Impressum details (required in Austria)

### B. Verified property facts (please confirm/correct)
- [ ] Exact **address & entrance** details, floor, and any access notes
- [ ] Precise **distances/times**: platform → door, to metro (U1), to Belvedere, Naschmarkt, Ring, airport
- [ ] Full **room inventory**: dorm sizes (4/6), pod details, private-room count, bathroom arrangements, capacities
- [ ] **Amenities list** confirmed: kitchen, lounge, WiFi, luggage storage, security hours, housekeeping, breakfast (price & hours), bike rental?, any others
- [ ] **Check-in/out**: exact contactless process, times, code delivery, self-service scope, 24/7 availability
- [ ] **Pricing** guidance / "from" rates and currency (EUR) for on-site signalling
- [ ] **House rules**, quiet hours, cancellation policy, age/ID requirements

### C. Photography & video (see §30–31 for the full shot lists)
- [ ] Any **existing professional photos/videos** we can use now (high-res, with usage rights)
- [ ] Green-light + scheduling for a **new photo/video shoot**, incl. the **drone hero** (station + skyline)
- [ ] **Model/guest releases** for any identifiable people
- [ ] Confirmation on **breakfast/kitchen** shots availability

### D. Booking engine
- [ ] Confirmation of the **live IBE property/booking URL** (we have the preview ID `78c820ab-…`) and the production embed
- [ ] Any **IBE styling/config access** or documentation (theming options, allowed overrides)
- [ ] Contact for the **uphotel.agency** integration if custom styling/support is needed
- [ ] Confirmation of **cancellation/price/breakfast** terms to display beside the engine

### E. Content & proof
- [ ] Permission & source for displaying **guest reviews/ratings** (Google/Booking) and the **8.9** score
- [ ] Preferred **guest quotes** (or approval to curate) — cleanliness, location, check-in, pods
- [ ] **FAQ** answers (check-in, luggage, breakfast, kitchen, safety, cancellation)
- [ ] Any **sustainability/values** content to feature
- [ ] Clarity on **Do Step Inn Central vs. Home** positioning and cross-linking wishes

### F. Technical & operational
- [ ] **Domain/DNS/hosting** access (or preferred stack) for `dostepinncentral.at`
- [ ] **Google Business Profile**, Analytics, Search Console access (for NAP/CWV/SEO)
- [ ] **Social media** handles and any pixels/tracking to include (privacy-compliant)
- [ ] **Languages** required at launch (EN confirmed; DE + others?)
- [ ] **Contact details** for the site: email, phone, WhatsApp?, support hours
- [ ] **GDPR/cookie** requirements, privacy policy, and consent preferences (EU-mandatory)
- [ ] Any **integrations** (channel manager, CRM, email/newsletter) to connect

---

*This document is the foundation. On approval, next steps are: (1) art-direction moodboards + type/colour specimens, (2) key-frame designs for CH1, CH2, CH4, CH8, (3) motion prototypes for the two hero moments, (4) the shoot. Design first. Development after. Nothing built until the story is right.*

---

## ADDENDUM A — Real assets received (July 2026)

The client has now supplied the first real assets. This changes several assumptions above — honestly logged here rather than silently overwritten.

### A.1 What we received
- **Logo:** "Do Step Inn *central*" — a **colourful grunge** mark: green / blue / gold blocks, black high-contrast serif for "Do Step Inn", a hand-painted mint-green script for "central," with paint-splatter texture. Playful, energetic, DIY.
- **Building façade photo:** a worn ochre 1950s–60s apartment block on Südtiroler Platz; ground-floor shopfront reading **"Do Step Inn central — HOSTEL"**; bikes parked out front, bare trees, real street. Honest, un-glamorous, characterful.
- **Interior photos (kitchen, lounge, reception, dorm):** a strong, consistent **upcycled / industrial / travel-collage** identity — reception desk built from **stacked vintage suitcases**, **pallet-wood** benches & bar, **denim** ottomans, exposed **silver ducting**, herb-print kitchen splashback, life-size cutlery wall art, "Reception" sign, recycling station (Plastic/Metal/Glass), brick "book-spine" pillars, big windows onto the square, bright blue/green/yellow accents. Real guests with backpacks at the desk.
- **Dorm photos:** warm-wood **pod bunks**, each with its **own keypad lock** and numbered bed, reading nook, desk, window onto trees — confirms the "lockable private pod inside a shared room" story.
- **Check-in form (PDF):** the self-service **digital check-in form** — multilingual **German / English / Korean** — capturing name, address, passport no., nationality, DOB, fellow travellers / "I travel alone," and a truth declaration + SEND. This is the real "contactless check-in" mechanic.

### A.2 The one strategic tension to resolve (client decision needed)
The draft above proposed a **quiet-luxury, minimal** system (warm concrete, matte black, rationed mint). The **real property is the opposite of minimal**: it is colourful, eclectic, upcycled, warm and playful. These do not automatically fit. Three viable directions:

- **Direction A — Elevated Traveller (recommended).** Keep the property's real soul — vintage suitcases, pallets, travel-collage, the mint-green script — but **art-direct it to feel premium and cinematic**: a calm neutral canvas + big editorial type + beautiful light, letting the *colourful, characterful spaces be the content that pops*. Honest to the building, photos will always match, still award-worthy. Mint (already in the logo) becomes the natural accent.
- **Direction B — Full reinvention to minimal.** The premium-minimal system as drafted. Most "Awwwards," but it **fights the actual interior** — every real photo of pallets/suitcases would feel off-brand, likely forcing restyling/reshoots and a logo redraw.
- **Direction C — Bold & playful, elevated.** Lean *into* the colour and DIY energy (a Mailchimp/Gen-Z-travel register) with refined typography and motion. Fun, on-brand, but hardest to keep feeling "premium/expensive."

**Recommendation: Direction A** — it reconciles the brief's "premium & cinematic" with the property's genuine, lovable character, and it means the photos we already have become assets instead of liabilities. The colour system in §16 should then shift from "warm concrete / rationed mint" to **"warm neutral gallery canvas + the property's own colour + logo mint as the through-line."**

### A.3 Story upgrades unlocked by the real assets
- **Reception & suitcases** = a perfect literal-and-emotional motif: *every traveller who ever passed through, stacked into one desk.* Reuse the suitcase/luggage-sticker motif as a recurring visual signature and micro-interaction (stamps, stickers, tags).
- **Keypad pods** make the "independence / your code, your time" story (CH2) concrete and photogenic — show the actual keypad.
- **Multilingual (incl. Korean) check-in** confirms a real **Asian guest segment** → strengthens the case for `hreflang` beyond DE/EN (add **KO**, likely **ES/IT/FR**) in §20.
- **Big windows onto the square** = built-in "Vienna is right outside" framing for CH2/CH7.

### A.4 Asset checklist — status update
Now **received:** logo (raster — vector still needed), building façade, kitchen, lounge, reception (with guests), dorm/pods, kitchen details, the real check-in flow/content. **Still needed:** see the updated "Assets Required From Client" — the priorities are now **(1) a design-direction decision (A/B/C), (2) vector logo + any brand files, (3) the cinematic hero + drone shot, (4) confirmed facts (distances, room counts, prices, breakfast).**
