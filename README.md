# Grow with me

An installable, local-first habit tracker that turns daily progress into a living virtual garden. It is a static Progressive Web App: no login, backend, database, build step, or paid service is required.

## What is included

- Responsive phone-first interface with desktop preview frame
- Watercolor greenhouse-journal visual system with Sprout, Blossom, and Cactus character packs
- Five growth artworks, seven expressions, and six poses per character
- Onboarding and three plant varieties
- Habit creation, editing, deletion, and daily completion
- Persistent plant growth, drops, streaks, settings, and history
- Real monthly progress calendar and seven-day completion chart
- Daily rollover and missed-day recovery
- Optional sound and supported-device haptics
- Offline application shell and install prompt
- Keyboard focus, reduced-motion support, safe-area handling, and live status messages

All personal data stays in the browser's `localStorage`. Clearing site data or using **Profile → Reset local data** removes it.

## Run locally

A service worker requires HTTP rather than opening `index.html` directly. From this folder, run any static server:

```bash
npx serve .
```

Then open the local URL shown in the terminal. Direct file opening still runs the app, but installation and offline caching are disabled.

## Deploy to GitHub Pages

1. Create a GitHub repository and upload this folder's contents to its root.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select `main` and `/ (root)`, then save.

All runtime paths are relative, so project pages such as `https://username.github.io/grow-with-me/` work without configuration.

## Deploy to Netlify

Drag this folder into [Netlify Drop](https://app.netlify.com/drop), or connect the repository. No build command is needed; use the repository root as the publish directory.

## Deploy to Vercel

Import the repository as a new project. Choose **Other** as the framework preset, leave the build command empty, and use `.` as the output directory.

## Project structure

```text
index.html              Application screens and dialogs
css/styles.css          Visual system, responsive layout, and motion
css/theme.css           Greenhouse-journal theme and component restyle
js/storage.js           Versioned local state and daily rollover
js/characters.js        Character asset manifest and state resolver
js/app.js               Rendering and interactions
manifest.webmanifest    Install metadata
sw.js                   Offline application-shell cache
404.html                Static-host fallback
assets/assets.js        Optional custom plant-art mapping
assets/icons/           Install and maskable icons
assets/characters/      Normalized character growth, mood, and pose assets
assets/scenes/          Watercolor habitat backgrounds and provenance
assets/concepts/        Reference artwork
```

## Custom plant artwork

Add transparent PNG, WebP, or SVG files under `assets/plants/`, then map them in `assets/assets.js`. Missing states automatically fall back to the built-in SVG renderer.

## Browser support

The core app works in current Chrome, Edge, Firefox, and Safari. Install prompts and haptics depend on browser and operating-system support. On iOS, install through Safari's **Share → Add to Home Screen**.
