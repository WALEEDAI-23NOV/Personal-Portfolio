# Waleed Razaq — Portfolio

A production-ready React portfolio converted from a single JSX file into a clean, modular project structure.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## 📁 Project Structure

```
src/
├── main.jsx                  # React entry point
├── App.jsx                   # Root component — composes all sections
│
├── styles/
│   └── global.css            # CSS variables, resets, shared utilities
│
├── data/
│   └── portfolioData.js      # All static content (skills, projects, posts, nav links)
│
├── hooks/
│   ├── useFadeIn.js          # IntersectionObserver fade-in animation
│   ├── useActiveNav.js       # Scroll-based active nav tracking
│   └── useThreeJS.js         # Dynamically loads Three.js from CDN
│
└── components/
    ├── Navbar.jsx / .css     # Fixed top navigation bar
    ├── Hero.jsx   / .css     # Full-viewport hero with 3D cube + wave text
    ├── GridCanvas.jsx        # Mouse-reactive canvas grid background
    ├── Cube3D.jsx            # Three.js interactive Rubik's cube
    ├── VSCodeTyping.jsx / .css  # Typewriter VS Code animation
    ├── About.jsx  / .css     # Bio + VS Code + stat cards
    ├── Tools.jsx  / .css     # Skill groups with icon grids
    ├── Projects.jsx / .css   # Project cards grid
    ├── Posts.jsx  / .css     # LinkedIn-style post cards
    ├── CTA.jsx    / .css     # Contact call-to-action
    └── Footer.jsx / .css     # Footer with social links
```

## 🛠 Tech Stack

- **React 18** — UI library
- **Vite** — Build tool & dev server
- **Three.js** — 3D Rubik's cube (loaded from CDN)
- **CSS Modules** — Scoped per-component stylesheets
- **Google Fonts** — Poppins + Space Mono

## ✏️ Customising Content

All text, images, and data live in **`src/data/portfolioData.js`**.  
Edit that one file to update nav links, skills, projects, posts, and stats — no need to touch any component.
