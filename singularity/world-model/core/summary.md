> **Grounding** · calc @ `0d8703c49dc3ca79c684d93cc42220c922d7cd15` · view: `core` · tier: `full`
> **Generated** 09 August 2026 (2026-08-09T22:30:28Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#core.tldr}
This repository is a browser-based calculator app named ApexCalc. The implementation is a single-page React + Vite application with five modes: standard, scientific, converter, financial, and grapher. The root shell in `src/App.jsx` centralizes state and event handling, while `src/utils/evaluator.js` holds shared arithmetic, unit-conversion, and financial logic. The app persists theme, sound, and history in browser `localStorage`, and its most important risks are missing automated tests, browser-only persistence, and a somewhat heuristic expression evaluator. The working tree is not clean because tracked Singularity Flow files are currently deleted in this checkout.

## Facts {#core.facts}

```yaml
repository_kind: application
languages: [javascript, jsx]
package_roots: [.] 
entrypoints:
  - { id: html-entry, path: index.html:1-14, invocation: "open index.html or run npm run dev" }
  - { id: react-bootstrap, path: src/main.jsx:1-10, invocation: "Vite loads this module" }
  - { id: app-shell, path: src/App.jsx:14-324, invocation: "main UI controller" }
components:
  - { id: app-shell, path: src/App.jsx, purpose: "mode routing, state, history, and keyboard handling" }
  - { id: calculator-engine, path: src/utils/evaluator.js, purpose: "shared evaluation and calculator helpers" }
  - { id: mode-components, path: src/components, purpose: "mode-specific UI surfaces" }
standard_commands:
  - { command: "npm run dev", purpose: "local development server", source: "package.json:6-10" }
  - { command: "npm run build", purpose: "production build", source: "package.json:6-10" }
  - { command: "npm run lint", purpose: "lint validation", source: "package.json:6-10" }
```

## Repository purpose {#core.purpose}
ApexCalc is a feature-rich calculator experience packaged as a single-page React app. The product surface is primarily user-driven interaction in the browser: users enter expressions, switch modes, inspect history, and view graphs or conversion results without any backend service in this repository. Evidence: `e-core-purpose`.

## Repository type and languages {#core.type}
The repository is a client-side application rather than a multi-service system. The visible implementation is JavaScript/JSX with React, Vite, and `mathjs`; the app shell and UI live under `src/`, while the package metadata is in `package.json`. Evidence: `e-core-purpose`, `e-app-shell`.

## Major applications and services {#core.components}
The main application is a single UI shell with five feature modes. In practice these are: a standard/scientific calculator, a unit converter, a financial calculator, and a function grapher. Shared logic is centralized in `src/utils/evaluator.js`, and mode-specific presentation components live in `src/components/`. Evidence: `e-app-shell`, `e-evaluator`, `e-graphing`.

## High-level component map {#core.map}
- `index.html` and `src/main.jsx` bootstrap the browser app.
- `src/App.jsx` owns the main state model, keyboard handling, mode switching, theme/sound/history persistence, and modal/drawer composition.
- `src/utils/evaluator.js` provides the reusable evaluation layer for arithmetic, scientific functions, unit conversion, and financial formulas.
- `src/components/` hosts feature-specific UI panels such as `FunctionGrapher`, `UnitConverter`, `FinancialCalculator`, `HistoryDrawer`, and the keypad/display widgets.
Evidence: `e-app-shell`, `e-evaluator`, `e-components`.

## Main entry points {#core.entrypoints}
- Browser entry: `index.html:1-14`.
- React bootstrap: `src/main.jsx:1-10`.
- Main runtime controller: `src/App.jsx:14-324`.
- Shared calculator logic: `src/utils/evaluator.js:1-218`.
These entry points are the best starting places for change impact analysis. Evidence: `e-entry-html`, `e-entry-main`, `e-app-shell`.

## Primary technologies {#core.tech}
The repository uses Vite for bundling and development, React 19 for UI, `mathjs` for expression evaluation and graphing compilation, and CSS variables for theming. Browser-only APIs also matter here: `localStorage`, Web Audio, and `<canvas>` are all used by the app. Evidence: `e-app-shell`, `e-evaluator`, `e-graphing`.

## Standard build and test commands {#core.commands}
- `npm run dev` starts the Vite dev server.
- `npm run build` produces a production build.
- `npm run lint` runs ESLint.
The repository does not currently define a dedicated test script and no test files were found in the source tree. Evidence: `e-build`, `e-lint`, `e-test-gap`.

## Important risks {#core.risks}
1. The app relies on browser state (`localStorage`) and client-side execution, so persistence and behavior can vary by environment.
2. The evaluator uses string sanitization and `mathjs` rather than a strict sandbox or allow-list, so future changes could widen the attack surface.
3. The repository lacks automated regression tests, so behavior changes are currently validated mainly by manual use and build/lint checks.
4. The working tree is not clean because tracked Singularity Flow world-model and work-item files are currently deleted in this checkout. Evidence: `e-browser-storage`, `e-lint`, `e-test-gap`.

## Important unknowns {#core.unknowns}
- No backend/API contract, authentication model, or deployment configuration was inspected.
- No product requirements document or UX specification was found beyond the implemented UI.
- No test harness or CI workflow beyond Vite/ESLint scripts was observed. Evidence: `e-core-purpose`, `e-test-gap`.

## Commit, generation date, and freshness warning {#core.freshness}
Inspected commit: `0d8703c49dc3ca79c684d93cc42220c922d7cd15`.
Generated at: `2026-08-09T22:30:28Z` (`09 August 2026`).
The repository working tree is not clean, so this grounding reflects the inspected snapshot but not a pristine checkout. If you need current behavior after local edits, re-run this builder against the latest tree. Evidence: `e-core-purpose`.

## Recommended next view {#core.routing}
- For implementation or debugging, start with `views/development.md`.
- For architecture or dependency concerns, start with `views/architecture.md`.
- For security review, start with `views/security.md`.
- For test planning or validation work, start with `views/testing.md`.
