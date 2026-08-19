# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository

A [Remotion](https://www.remotion.dev) project (React-based programmatic video creation), scaffolded from the `blank` template.

- `src/Root.tsx` registers compositions; `src/index.ts` is the entry point (`registerRoot`).
- `remotion.config.ts` holds bundler/CLI config.
- `src/BigbroxPresale.tsx` — 30s / 1080×1920 / 30fps Instagram Reels composition for the BIGBROX presale promo, built from 7 scenes in `src/scenes/` sequenced with `<Series>`.
- `src/brand/` — BIGBROX design tokens (`tokens.ts`), custom `FontFace` loader for Anton + Pretendard (`loadFonts.ts`), and shared brand components (`components.tsx`: `XMark`, `Wordmark`, `Chip`, `Kicker`).
- `public/fonts/` — bundled Anton + Pretendard font files (not npm-installed; fetched once via the same method as the `bigbrox-carousel` skill's `setup_fonts.sh`).
- `public/images/` — HYROX/boxing/recovery photos used as Scene3 backgrounds (client-supplied, already B&W); darkened in-component per the brand's photo-overlay rule rather than pre-processed.
- This container's headless Chromium isn't at Remotion's default download URL; render/still commands need `--browser-executable=/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell` (container-specific, not committed to config).

### Commands

- `npm install` — install dependencies
- `npm run dev` — open Remotion Studio (preview/editor)
- `npm run build` — bundle the project (`remotion bundle`)
- `npx remotion render` — render a video
- `npm run lint` — eslint + tsc typecheck

## Git Workflow

- Develop on the designated feature branch (e.g., `claude/init-project-dmUtH`)
- Push with: `git push -u origin <branch-name>`
- Branch names must start with `claude/` to avoid push failures
