> **Grounding** · calc @ `8d115da4dc8005b437ccad387db0721b2ab06bd9` · view: `core` · tier: `full`
> **Generated** 9 August 2026 (2026-08-09T18:59:39Z) · depth: `standard` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#core.tldr}

This repository is a Vite + React calculator app with standard, scientific, converter, financial, and grapher modes. The active implementation surface is `src/App.jsx`, the shared styling system is `src/index.css`, and the arithmetic logic is `src/utils/evaluator.js`. The main boot path is `index.html` → `src/main.jsx` → `src/App.jsx`. The current validation path is `npm run build` and `npm run lint`; build succeeded here, while lint reports existing issues. The main risks are a styling surface spread across multiple files, no automated test harness, and a not-clean working tree.

## Repository purpose {#core.purpose}

ApexCalc is a browser-based calculator app for a single user. The visible product surface is the calculator UI itself rather than a server-backed service; the state and mode selection live in `src/App.jsx`, and the UI is composed from components under `src/components/`.

## Repository type and languages {#core.type}

This is an application bundle, not a library. The observable implementation uses JavaScript/JSX, CSS, `mathjs`, `lucide-react`, React, and Vite. The package manifest at `package.json` shows a private Vite project with `type: module`.

## Main applications, packages, or services {#core.components}

The app shell is the calculator UI. Visible modes are standard arithmetic, scientific math, unit conversion, financial helpers, and function graphing. Styling is centralized in `src/index.css`; calculation behavior is in `src/utils/evaluator.js`.

## High-level component map {#core.map}

`index.html` loads `src/main.jsx`, which mounts `src/App.jsx`. `App` owns state, keyboard handling, history, mode selection, and theme persistence. The display and keypad components provide the calculator surface, and `evaluateExpression`/`formatNumber` power computation and formatting.

## Main entry points {#core.entrypoints}

Primary runtime entry: `index.html:1-14` → `src/main.jsx:1-10` → `src/App.jsx:14-324`. The calculator logic entry points are `src/components/Display.jsx`, `src/components/StandardKeypad.jsx`, `src/components/ScientificKeypad.jsx`, and `src/utils/evaluator.js`.

## Primary technologies {#core.tech}

The repo uses React 19, Vite 8, ESLint 10, `mathjs`, `lucide-react`, and CSS variables with a theme-driven stylesheet. There is no server runtime, database, or deployment configuration in the inspected snapshot.

## Standard build and test commands {#core.commands}

Observed commands from `package.json:6-10` are `npm run dev`, `npm run build`, `npm run lint`, and `npm run preview`. In this environment, `npm run build` succeeded. `npm run lint` currently fails with 20 existing ESLint errors. No dedicated test runner or test script is present.

## Important risks {#core.risks}

The visual design is distributed across `src/index.css`, `src/components/Display.jsx`, `src/components/StandardKeypad.jsx`, `src/components/ScientificKeypad.jsx`, and `src/components/Header.jsx`, so a style change should be planned as a cross-file change. The repo also lacks an automated test harness and has existing lint debt.

## Important unknowns {#core.unknowns}

The repository does not include a formal design spec for a “classic calculator” look, and it does not define acceptance criteria for UI changes beyond the current build and lint commands.

## Commit, generation date, and freshness warning {#core.freshness}

Inspected commit: `8d115da4dc8005b437ccad387db0721b2ab06bd9`. Generated: `2026-08-09T18:59:39Z`. The working tree is not clean, so this model describes the inspected snapshot rather than a fully committed state.

## Recommended next view for each common task {#core.routing}

For business or product interpretation, start with `views/business.md`. For implementation or refactoring, use `views/development.md`. For validation or regression planning, start with `views/testing.md`. For the current styling task, begin with `views/development.md` and `task-guides/classic-calculator-look.md`.
