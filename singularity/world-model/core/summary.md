> **Grounding** · calc @ `6bbcaf1739e310a06af5eb0a9643a54c511b70f8` · view: `core` · tier: `full`
> **Generated** 09 August 2026 (2026-08-09T18:15:52Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.


## TL;DR {#core.tldr}

This repository is a Vite + React calculator application with several modes: standard arithmetic, scientific functions, unit conversion, financial helpers, and a grapher. The app is browser-based and stores user preferences, sound settings, and calculation history in local storage, so it does not depend on a backend service. Main implementation is centered in `src/App.jsx`, `src/components/*`, and `src/utils/evaluator.js`. The current build and lint commands are defined in `package.json`, and the UI is heavily themed through CSS variables in `src/index.css`. The main risk is that presentation and behavior are spread across many small components, so styling changes can be easy to miss and cross-cutting updates could introduce regressions.

## Repository purpose {#core.purpose}

The repository appears to be a single-user calculator product rather than a multi-user business system. Its purpose is to let a person perform calculations in a polished web interface, with extra modes for scientific, unit-conversion, financial, and graphing tasks. The evidence comes from the application entry point and component composition in `src/App.jsx`, the evaluator wrapper in `src/utils/evaluator.js`, and the package manifest in `package.json`.

## Repository type and languages {#core.type}

This is an application repository, not a library or service. The implementation uses JavaScript with React, Vite, and CSS; it also depends on `mathjs` for expression evaluation and `lucide-react` for icons.

## Main applications, packages, or services {#core.components}

- `calculator-ui`: the main web app shell and mode router in `src/App.jsx` and `src/components/*`.
- `evaluation-engine`: expression parsing and formatting logic in `src/utils/evaluator.js`.
- `theme-system`: theme presets and visual styling in `src/index.css` and `src/index.css` variable blocks.

## High-level component map {#core.map}

The app boots from `src/main.jsx`, renders `App`, and then chooses among standard, scientific, converter, financial, or grapher experiences. The display and keypads are modular React components, while the evaluator module handles syntax, percentage, factorial, angle-unit conversion, and error handling. Theme and preference state are driven by `localStorage` and CSS custom properties.

## Main entry points {#core.entrypoints}

- `src/main.jsx:1-10` mounts the React app into the browser.
- `src/App.jsx:14-24` defines the state model for active mode, expression, result, history, and theming.
- `package.json:6-10` exposes the local development, build, lint, and preview commands.

## Primary technologies {#core.tech}

- React 19 and Vite 8 for the UI and build toolchain.
- `mathjs` for expression evaluation.
- CSS custom properties and utility classes for theming.
- Browser `localStorage` for history, sound, and theme preferences.

## Standard build and test commands {#core.commands}

- `npm run dev` — start the local development server.
- `npm run build` — create a production build.
- `npm run lint` — run ESLint.
- No dedicated test script is defined in `package.json`.

## Important risks {#core.risks}

- The visual system is distributed across `src/index.css`, global classes in `src/App.css`, and component-level classes in `src/components/*`, so a style change can require edits in several files.
- The calculator modes share the same state model, which makes layout and interaction changes cross-cutting.
- No automated tests are present in the repository, so UI regressions would be detected only through manual verification.

## Important unknowns {#core.unknowns}

- There is no product roadmap, customer-facing spec, or business requirements document in the repository.
- No backend, authentication layer, or data store beyond browser storage is present.

## Commit, generation date, and freshness warning {#core.freshness}

Inspected commit: `6bbcaf1739e310a06af5eb0a9643a54c511b70f8`. Generated at `2026-08-09T18:43:16.803Z` on `9 August 2026`. The working tree is not clean because the repository currently contains deleted Singularity Flow work-item files; treat this world model as a snapshot of the inspected commit rather than a statement about the current working tree.

## Recommended next view for each common task {#core.routing}

- For product or business framing, start with `views/business.md`.
- For implementation or UI changes, start with `views/business.md` and the task guide for the current task.
- For debugging calculation behavior, inspect `src/utils/evaluator.js` and `src/App.jsx`.
