> **Grounding** · calc @ `08aa77072f09d6113acba4f1eb8db27786a97988` · view: `core` · tier: `full`
> **Generated** 11 August 2026 (2026-08-11T05:43:13Z) · depth: `deep` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#core.tldr}
ApexCalc is a React + Vite single-page calculator app that combines a classic calculator UI with scientific, converter, financial, and grapher modes. The repo is primarily a frontend application with no backend service; most business behavior lives in the client-side evaluator and mode components. The main runtime path is `src/main.jsx` mounting `src/App.jsx`, which orchestrates state, local history, themes, and keyboard shortcuts. The most important implementation surface is `src/utils/evaluator.js`, which wraps `mathjs` for arithmetic, unit conversion, finance calculations, and display formatting. Standard validation is `npm test`, `npm run build`, and `npm run lint`; the first two passed in this inspection, while lint currently reports pre-existing ESLint issues. The largest risk is that the app is highly UI-coupled and the current lint baseline is not clean.

## Facts {#core.facts}
```yaml
repository:
  kind: application
  languages: [JavaScript, JSX, CSS, HTML]
  package_root: .
entrypoints:
  - { id: app-bootstrap, path: src/main.jsx, line: 1, invocation: "React mount point" }
  - { id: app-shell, path: src/App.jsx, line: 14, invocation: "calculator mode orchestrator" }
components:
  - { id: app-shell, path: src/App.jsx, role: "mode router, state, local persistence" }
  - { id: calculator-engine, path: src/utils/evaluator.js, role: "math evaluation and formatting" }
  - { id: calculator-ui, path: src/components, role: "mode-specific views and interaction surfaces" }
commands:
  - { command: "npm test", purpose: "Vitest suite", source: "package.json:11" }
  - { command: "npm run build", purpose: "Vite production build", source: "package.json:8" }
  - { command: "npm run lint", purpose: "ESLint baseline", source: "package.json:9" }
```

## Repository purpose {#core.purpose}
This repository is a client-side calculator experience for arithmetic, scientific functions, unit conversion, financial calculations, and graphing. Its observable user-facing capabilities are implemented entirely in the browser and stored in `localStorage` for simple persistence of history, theme, and sound settings (see `src/App.jsx:23-34`, `src/components/HistoryDrawer.jsx:15-26`).

## Repository type and languages {#core.type}
The repository is a single React/Vite application in a package-managed workspace. The codebase is primarily JavaScript/JSX with CSS and HTML, using Vite for bundling and Vitest + Testing Library for tests. Evidence: `package.json:1-35`, `vite.config.js:1-12`, `src/App.test.jsx:1-200`.

## Main applications, packages, or services {#core.components}
The main application is the calculator shell in `src/App.jsx`. Supporting modules are:
- `src/components/` — mode-specific UI surfaces (standard, scientific, converter, financial, grapher, history, shortcuts).
- `src/utils/evaluator.js` — shared calculation engine, unit conversion tables, finance helpers, and number formatting.
- `src/utils/audio.js` — optional Web Audio feedback for button presses and mode changes.
- `src/test/setup.js` and `src/**/*.test.*` — test harness and regression coverage.

## High-level component map {#core.map}
The app shell wires mode selection to the selected component and shares expression/result state across the calculator views. The evaluator is a shared dependency used by the standard/scientific keypad path, the converter, and the financial calculator. The graphing view uses `mathjs` directly rather than the shared evaluator to plot equations. Evidence: `src/App.jsx:14-324`, `src/components/UnitConverter.jsx:14-132`, `src/components/FinancialCalculator.jsx:24-241`, `src/components/FunctionGrapher.jsx:14-212`.

## Main entry points {#core.entrypoints}
- `src/main.jsx` bootstraps the React root and imports the app.
- `src/App.jsx` defines the state model, keyboard shortcuts, local storage sync, and mode routing.
- `src/utils/evaluator.js` is the critical shared library for expression evaluation and display formatting.
Evidence: `src/main.jsx:1-8`, `src/App.jsx:14-324`, `src/utils/evaluator.js:1-218`.

## Primary technologies {#core.tech}
The repository uses React 19, Vite 8, mathjs, lucide-react, and Vitest with Testing Library and jsdom. Styling is custom CSS variables and utility classes in `src/index.css`, with the app applying a `data-theme` attribute to switch themes. Evidence: `package.json:13-33`, `src/index.css:1-260`, `vite.config.js:1-12`.

## Standard build and test commands {#core.commands}
Observed commands and their purpose:
- `npm ci` — install dependencies (completed successfully).
- `npm test` — run the Vitest suite (31 tests passed in this inspection).
- `npm run build` — produce a production bundle (completed successfully).
- `npm run lint` — run ESLint (failed with 20 existing issues).
Evidence IDs: `E-004`, `E-005`, `E-009`.

## Important risks {#core.risks}
- The app’s behavior is tightly coupled to UI state and local browser storage; changes can easily affect multiple modes at once.
- The repository has a non-clean lint baseline and an effect-triggered state pattern in the grapher component that could become fragile.
- The production bundle is relatively large, which may matter if the app is expected to stay lightweight.

## Important unknowns {#core.unknowns}
- No backend, API contract, or deployment pipeline is defined in this repository.
- No explicit accessibility or security review artifacts are stored alongside the app.
- The repository does not declare a release or rollback process beyond Vite build artifacts.

## Commit, generation date, and freshness warning {#core.freshness}
Inspected commit: `08aa77072f09d6113acba4f1eb8db27786a97988`. Generated at `2026-08-11T05:43:13Z`. The working tree was not clean at inspection time because tracked files under `singularity/` were already deleted from the checkout; this grounding therefore describes the repository snapshot as captured from the inspected commit and the current working tree state. Evidence: `git status` from the repository root.

## Recommended next view for each common task {#core.routing}
- Implement or debug calculator behavior: `architecture` + `development`.
- Add or revise tests: `testing`.
- Review UI theming or cross-mode consistency: `architecture` + `development`.
- Review security or data handling assumptions: `security`.

## Deterministic repository facts {#core.deterministic-facts}

<!-- singularity-flow:repository-facts:start -->
```yaml
# Derived from the repository, not inferred. Every path and line is checkable.
files: 31
languages_scanned: 19
frameworks: [React, Vite, Vitest]
commands:
  - { run: "npm run dev", at: "package.json:7" }
  - { run: "npm run build", at: "package.json:8" }
  - { run: "npm run lint", at: "package.json:9" }
  - { run: "npm run preview", at: "package.json:10" }
  - { run: "npm run test", at: "package.json:11" }
# What the rest of the repository depends on. A count, not an impression.
most_depended_on:
  - { path: src/utils/audio.js, imported_by: 10 }
  - { path: src/utils/evaluator.js, imported_by: 4 }
  - { path: src/App.jsx, imported_by: 2 }
  - { path: src/components/StandardKeypad.jsx, imported_by: 2 }
  - { path: src/components/Display.jsx, imported_by: 1 }
  - { path: src/components/FinancialCalculator.jsx, imported_by: 1 }
  - { path: src/components/FunctionGrapher.jsx, imported_by: 1 }
  - { path: src/components/Header.jsx, imported_by: 1 }
# Commits touching each file in the last year, from Git history.
most_changed:
  - { path: README.md, commits: 3 }
  - { path: src/components/Display.jsx, commits: 3 }
  - { path: src/components/Header.jsx, commits: 3 }
  - { path: src/index.css, commits: 3 }
  - { path: package-lock.json, commits: 2 }
  - { path: package.json, commits: 2 }
  - { path: src/App.jsx, commits: 2 }
  - { path: src/components/FinancialCalculator.jsx, commits: 2 }
# 18 exported top-level declarations; the most-depended-on files' are listed.
key_symbols:
  - { name: App, kind: function, at: "src/App.jsx:14" }
  - { name: Display, kind: binding, at: "src/components/Display.jsx:5" }
  - { name: FinancialCalculator, kind: binding, at: "src/components/FinancialCalculator.jsx:6" }
  - { name: StandardKeypad, kind: binding, at: "src/components/StandardKeypad.jsx:5" }
  - { name: playSound, kind: binding, at: "src/utils/audio.js:18" }
  - { name: evaluateExpression, kind: binding, at: "src/utils/evaluator.js:4" }
  - { name: formatNumber, kind: binding, at: "src/utils/evaluator.js:57" }
  - { name: UNIT_TYPES, kind: binding, at: "src/utils/evaluator.js:75" }
  - { name: convertUnits, kind: binding, at: "src/utils/evaluator.js:140" }
  - { name: calculateEMI, kind: binding, at: "src/utils/evaluator.js:161" }
  - { name: calculateCompoundInterest, kind: binding, at: "src/utils/evaluator.js:181" }
  - { name: calculateTip, kind: binding, at: "src/utils/evaluator.js:200" }
tests: 4
```
<!-- singularity-flow:repository-facts:end -->
