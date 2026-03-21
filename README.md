# Marvel Studios · ECHOES OF STRUGGLE

An immersive, cinematic scrolling experience showcasing Marvel's iconic heroes. Built with GSAP animations, Locomotive Scroll, and modern CSS for a premium visual experience.

![Marvel Studios](https://img.shields.io/badge/Marvel-Studio-Echoes-purple) ![GSAP](https://img.shields.io/badge/GSAP-3.12.5-green) ![Locomotive-Scroll](https://img.shields.io/badge/Locomotive-Scroll-4.1.4-blue)

## ✨ Features

- **Cinematic Design** — Full-screen character sections with dramatic gradients, vignette overlays, and particle effects
- **Smooth Scrolling** — Powered by Locomotive Scroll for buttery-smooth navigation
- **GSAP Animations** — Complex scroll-triggered animations including:
  - Character reveal animations
  - Parallax effects
  - Glow pulse animations
  - Text split animations
- **Audio Integration** — Ambient character-specific audio with fade transitions
- **Responsive** — Adapts to all screen sizes with fluid typography
- **Character Showcase** — Featuring 8 iconic Marvel characters:
  - Iron Man
  - Spider-Man
  - Thor
  - Doctor Strange
  - Black Panther
  - Captain America
  - Hulk
  - Thanos

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic markup |
| CSS3 | Styling, animations, design system |
| JavaScript (ES6+) | Interactivity, audio management |
| [GSAP 3.12.5](https://greensock.com/gsap/) | Animation engine |
| [ScrollTrigger](https://greensock.com/scrolltrigger/) | Scroll-based animations |
| [Locomotive Scroll 4.1.4](https://locomotivemtl.github.io/locomotive-scroll/) | Smooth scrolling |

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for CDN-loaded libraries)

### Installation

1. Clone or download this repository
2. Open `index.html` in your browser
3. Enjoy the experience!

```bash
# Or serve locally
npx serve .
# or
python -m http.server 8000
```

## 📁 Project Structure

```
├── index.html          # Main HTML file with embedded styles
├── script.js           # JavaScript for animations and interactivity
├── style.css           # Additional styles
├── style_holi.css      # Holiday-themed variant
├── favicon.svg         # Site favicon
└── images/             # Character images (PNG format)
    ├── iron man.png
    ├── spiderman.png
    ├── thor.png
    ├── doctor stranger.png
    ├── black panter.png
    ├── captain America.png
    ├── hulk.png
    ├── thonas.png
    └── main.png
```

## 🎨 Design System

### Color Palette

| Color | Usage |
|-------|-------|
| `--bg-deep: #0a0c0f` | Deep background |
| `--accent-primary: #e62429` | Marvel Red |
| `--accent-secondary: #f5b31c` | Gold accent |
| `--text-light: #f0f3f8` | Primary text |

### Typography

- **Display Font**: Bebas Neue (for character names)
- **Primary Font**: Montserrat (for body text)

## 📱 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

## 🔧 Customization

### Adding New Characters

1. Add character image to the images folder
2. Create a new section in `index.html`:
```html
<section class="section" data-character="character-name">
    <!-- Character content -->
</section>
```

3. Update character colors in `style.css`:
```css
--color-character: #hexcode;
```

### Modifying Animations

Edit animations in `script.js` using GSAP:
```javascript
gsap.from('.element', {
    opacity: 0,
    y: 100,
    duration: 1.2,
    ease: 'power3.out'
});
```

## 📄 License

This project is for educational and demonstration purposes. Marvel characters and imagery are property of Marvel Studios and Disney.

---

