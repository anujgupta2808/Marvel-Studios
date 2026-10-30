# Marvel Studios · Cinematic Fan Portal & Multiverse Experience

[![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub%20Pages-brightgreen)](https://anujgupta2808.github.io/Marvel-Studios/)
[![License](https://img.shields.io/badge/License-MIT%20Fan%20Project-blue)](#disclaimer)
[![HTML5](https://img.shields.io/badge/HTML5-Semantic%20Standards-E34F26?logo=html5&logoColor=white)](#tech-stack)
[![CSS3](https://img.shields.io/badge/CSS3-Modern%20Design%20System-1572B6?logo=css3&logoColor=white)](#tech-stack)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+%20Vanilla-F7DF1E?logo=javascript&logoColor=black)](#tech-stack)

> **Live Production Website:** [https://anujgupta2808.github.io/Marvel-Studios/](https://anujgupta2808.github.io/Marvel-Studios/)

A complete, cinematic web application honoring the Marvel Cinematic Universe (MCU). Engineered with modern, vanilla web standards (HTML5, CSS3, ES6+ JavaScript), this responsive portal delivers an immersive fan experience across 6 interconnected pages with zero external runtime dependencies.

---

## 🌟 Key Features Across All 6 Pages

1. **Home (`index.html`)**
   - Panoramic cinematic hero banner with atmospheric nebulae and glowing particle effects.
   - Cinematic **Marvel Studios Loading Page / Preloader Screen** appearing on page reload/refresh with animated progress indicator (seamlessly bypassed during page-to-page navigation).
   - Live MCU statistics counter (34+ Films, 24+ Superheroes, 6 Phases, \$30B+ Box Office).
   - Earth's Mightiest Legends spotlight carousel and cinematic monument teasers with direct HDHub4u links.
   - Dual-mode timeline preview and interactive quiz CTA.

2. **Superheroes (`heroes.html`)**
   - Comprehensive roster of **24+ iconic Marvel heroes, mutants, and cosmic titans** (Iron Man, Captain America, Thor, Spider-Man, Doctor Strange, Black Panther, Hulk, Thanos, Deadpool, Wolverine, Scarlet Witch, Loki, Black Widow, Captain Marvel, Ant-Man, Hawkeye, Winter Soldier, Star-Lord, Shang-Chi, Moon Knight, Vision, Daredevil, Shuri, Namor).
   - Real-time search bar filtering across hero names, secret identities, and superhuman powers.
   - Category filtering: All Legends, Avengers, Mutants & X-Men, Wakanda, Mystic Arts, Cosmic Realm, Villains & Titans.
   - Sorting by Name (A–Z / Z–A) and Combat Power.
   - Detailed Intelligence Dossier Modal featuring struggle quotes, origin biographies, superhuman capability checklists, and power attribute stat bars.

3. **Movies (`movies.html`)**
   - 34+ MCU feature films spanning Phase 1 to Phase 6.
   - Filter by Phase (1 through 6) or Saga (The Infinity Saga, The Multiverse Saga).
   - Sort by Theatrical Release Date, Box Office Gross, or Title.
   - Direct movie stream and download links powered by [HDHub4u](https://hdhub4u.eco/) integrated on every movie card and inside the movie details modal.
   - Cinema Details Modal with embedded YouTube trailer player, box office receipts, runtime, critical ratings, cast, and Infinity Stone nexus points.

4. **MCU Timeline (`timeline.html`)**
   - Seamless dual-mode temporal navigation:
     - **Theatrical Release Order** (2008 – Present)
     - **In-Universe Chronological Canon Order** (1942 – Present)
   - Interactive milestone spine with phase badges, director credits, and direct links to trailers.

5. **Trailers Gallery (`trailers.html`)**
   - High-definition official movie teaser and trailer gallery.
   - Categorized by Phase and Saga with real-time title search.
   - Responsive theater modal player with YouTube embed, autoplay, and close controls.

6. **Marvel Quiz (`quiz.html`)**
   - 20 comprehensive canon trivia questions spanning lore, origins, infinity stones, and Easter eggs.
   - Clearance level selector: All, Rookie (Easy), Avenger (Medium), and Sorcerer Supreme (Hard).
   - Real-time progress tracker and instantaneous canon confirmation / explanations.
   - Dynamic score calculator and superhero rank classification (from S.H.I.E.L.D. Recruit to Living Tribunal).
   - Full post-quiz Answer Debrief mode.

---

## 🎨 Cinematic Visual Identity

- **Primary Background:** `#080808`
- **Secondary Background:** `#111111`
- **Surface / Cards:** `#181818` with subtle glassmorphic blur
- **Marvel Red:** `#E62429` (glows: `rgba(230, 36, 41, 0.35)`)
- **Regal Gold:** `#D6A84B` (glows: `rgba(214, 168, 75, 0.3)`)
- **Text:** `#FFFFFF` (Primary) & `#B8B8B8` (Secondary)
- **Typography:** *Bebas Neue* for high-impact display titles & *Montserrat* for body text.

---

## 🛠️ Project Structure

```
Marvel-Studios/
├── index.html              # Home Page & Cinematic Preloader
├── heroes.html             # 24+ Superheroes & Character Dossiers
├── movies.html             # MCU Feature Films Archive
├── timeline.html           # Interactive Dual-Order Timeline
├── trailers.html           # Official Video Trailers Gallery
├── quiz.html               # 20-Question Canon Trivia Quiz
│
├── css/
│   ├── style.css           # Global tokens, typography, navbar, cards, modals, footer
│   ├── responsive.css      # Ultra-fluid breakpoints (1440px, 1024px, 880px, 640px, 360px)
│   └── animations.css      # Preloader, keyframes, glow pulses, shine effects, reduced-motion
│
├── js/
│   ├── main.js             # Cinematic preloader, sticky nav, mobile drawer, search modal
│   ├── heroes.js           # 24+ character filtering, search, sorting, dossier modal
│   ├── movies.js           # Movie filtering, sorting, trailer modal
│   ├── timeline.js         # Release vs Chronological timeline engine
│   ├── trailers.js         # Trailer gallery & video theater player
│   └── quiz.js             # Trivia quiz engine, timer, scoring, badges, review
│
├── data/
│   ├── characters.js       # Complete 24+ character stats & biographies
│   ├── movies.js           # Complete 34+ movie catalog & box office figures
│   └── questions.js        # 20 trivia questions with canonical explanations
│
├── assets/
│   ├── images/
│   │   ├── hero-banner.jpg # High-resolution cinematic multiverse banner
│   │   ├── main.png
│   │   └── characters/     # Optimized PNG character renders
│   └── icons/
│       └── favicon.svg     # SVG emblem
│
└── README.md
```

---

## 🚀 Local Development

No package managers, build steps, or backend servers are required.

Simply open any `.html` file in your preferred web browser, or launch a lightweight local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx serve .
```

Navigate to `http://localhost:8000/` in your browser.

---

## ⚖️ Legal Disclaimer

This project is an unofficial, non-commercial fan website created strictly for educational, informational, and portfolio demonstration purposes. All characters, names, logos, and related media are registered trademarks and copyrights of **Marvel Characters, Inc.** and **The Walt Disney Company**. All rights reserved to their respective owners.
