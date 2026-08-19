# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository

A [Remotion](https://www.remotion.dev) project (React-based programmatic video creation), scaffolded from the `blank` template.

- `src/Root.tsx` registers compositions; `src/Composition.tsx` holds the `MyComposition`/`MyComponent` starter.
- `src/index.ts` is the entry point (`registerRoot`).
- `remotion.config.ts` holds bundler/CLI config.

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
