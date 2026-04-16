# Cyber Fish Lab

Cyber Fish Lab is a browser-based cyber aquarium game prototype built with React, Vite, and TypeScript.

It focuses on a premium neon bio-lab atmosphere: a large living tank in the center, live fish motion, direct decoration changes, and bilingual Chinese/English UI.

## Current Features

- Large central cyber fish tank scene
- Natural fish movement with layered 3D-style highlights and particle glow
- Left-click feeding interaction
- Direct decoration editing without entering a separate edit mode
- Collapsible left decoration dock and right status dock
- Chinese-first interface with English toggle
- Game-style project boundaries: scene, entities, data, systems, hooks, and UI

## Tech Stack

- React 19
- Vite 7
- TypeScript
- CSS modules organized by base, layout, UI, scene, and fish layers

## Project Structure

```text
src/
  game/
    data/        static fish, decor, scene, and UI data
    entities/    fish and decor renderers
    hooks/       runtime hooks
    scene/       tank scene composition
    systems/     simulation logic
    utils/       math helpers
  ui/            top bar, docks, and summary panels
  styles/        split visual layers
```

## Getting Started

```bash
npm install
npm run dev
```

Default local ports:

- Dev: `4173`
- Preview: `4174`

If `4173` is already occupied, Vite will automatically try the next available port.

## Build

```bash
npm run build
```

## GitHub Pages

This repo is configured for GitHub Pages deployment through GitHub Actions.

After pushing to `main`, GitHub will build and publish the site to:

- `https://vihuela.github.io/cyber-fish-lab/`

## Docs

- [Product Plan](./docs/product-plan.md)
- [Game Systems](./docs/game-systems.md)
- [Roadmap](./docs/roadmap.md)

## Vision

The player is not just keeping fish. They are curating a futuristic living display tank inside a neon research facility, with layout, decor, ambiance, and species choice all shaping the experience.
