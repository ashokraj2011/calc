> **Grounding** · calc @ `e9d82bcdfd4363c98e447b92108203f18828d6ff` · view: `core` · tier: `full`
> **Generated** 09 August 2026 (2026-08-09T23:57:03Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#core.tldr}

This repository is a client-side calculator application built with React, Vite, and `mathjs`. The app combines a standard calculator shell with scientific, converter, financial, and grapher modes, and the UI is driven from a shared theme system in `src/index.css`. The main implementation path is `src/App.jsx` -> component modules -> `src/utils/evaluator.js`.

## Repository purpose {#core.purpose}

The repository implements a single-page calculator experience for arithmetic and selected scientific/financial tasks. It is an application rather than a library; the primary value is in interactive UI state, keyboard handling, expression evaluation, and theming.

## Repository type and languages {#core.type}

Repository kind: application. Primary languages: JavaScript, CSS, HTML. The build system uses Vite and npm scripts from `package.json`.

## Main applications, packages, or services {#core.components}

- `calculator-shell`: the React app shell in `src/App.jsx`, which owns expression state, calculator mode selection, and modal/history drawers.
- `calculator-ui`: the presentational calculator components under `src/components/`, including display, keypad, financial calculator, grapher, and header.
- `calculator-engine`: the evaluator and numeric helpers in `src/utils/evaluator.js`, including unit conversion, EMI, compound-interest, and tip calculations.
- `calculator-theme`: the styling layer in `src/index.css`, which defines the classic and alternate themes through CSS custom properties.

## High-level component map {#core.map}

`src/main.jsx` mounts `App`; `App` wires state and handlers; child components render the UI; `src/utils/evaluator.js` performs expression evaluation and helper calculations. Theme tokens from `src/index.css` flow into components through CSS variables.

## Main entry points {#core.entrypoints}

- `src/main.jsx:1-10` mounts the React root and loads the application shell.
- `src/App.jsx:14-324` owns calculator state, mode switching, keyboard shortcuts, history, and the main render tree.
- `src/utils/evaluator.js` is the main numeric logic module, used by the calculator UI and financial features.

## Primary technologies {#core.tech}

Observed technologies include React 19, Vite 8, `mathjs`, `lucide-react`, and CSS custom properties. The code uses local browser storage (`localStorage`) for theme, sound, and history state.

## Standard build and test commands {#core.commands}

- `npm run dev` — start the Vite development server.
- `npm run build` — create a production bundle; executed successfully in this run.
- `npm run lint` — run ESLint; executed and found existing issues in the source tree.

## Important risks {#core.risks}

- Visual changes can affect multiple components because theming is shared through CSS variables and reused across the UI.
- Calculator logic is centralized in `src/App.jsx` and `src/utils/evaluator.js`, so refactors can ripple through arithmetic and financial modes.
- The working tree is not clean because tracked workflow artifacts have been deleted.

## Important unknowns {#core.unknowns}

- No automated UI or unit test suite exists in the repository.
- No deployment or release workflow is defined in the source tree.
- The repository does not expose a formal design-system document for the calculator UI.

## Commit, generation date, and freshness warning {#core.freshness}

Inspected commit: `e9d82bcdfd4363c98e447b92108203f18828d6ff`. Generated at `2026-08-09T23:57:03Z` on `09 August 2026`. The repository contains uncommitted deletions, so this world model describes the inspected commit plus the current working-tree state, not a clean checkout.

## Recommended next view for each common task {#core.routing}

- UI polish or visual redesign: `architecture` then `development`.
- Calculator logic changes or debugging: `development` then `security`.
- Quality review or regression planning: `testing`.
- Sensitive data or client-side safety review: `security`.
