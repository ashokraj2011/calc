> **Grounding** · calc @ `1b17ac362bdedf23ef4f7683203fb8e1a715428b` · view: `core` · tier: `full`
> **Generated** 20 August 2026 (2026-08-20T03:02:27.293Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#core.tldr}
This repository is a React/Vite single-page calculator application with standard, scientific, converter, financial, and grapher modes. The main app shell in `src/App.jsx` coordinates mode switching and calculator state, while `src/utils/evaluator.js` performs expression parsing, unit conversion, and financial calculations. The project is lightweight and client-side: it uses browser `localStorage` for history, theme, and sound preferences, and there is no backend service or database. The most important validation commands are `npm test` and `npm run build`, both defined in `package.json`. The current working tree is not clean, so grounding should be read as a snapshot of the inspected commit plus the current uncommitted deletions in `singularity/`.

## Facts {#core.facts}
```yaml
repository_kind: application
languages: [JavaScript, JSX, CSS, JSON]
package_roots: [.]
entrypoints:
  - { id: app-shell, path: "src/App.jsx:14-324", invocation: "Vite client app" }
  - { id: package-scripts, path: "package.json:6-11", invocation: "npm test / npm run build" }
key_symbols:
  - { name: App, path: "src/App.jsx:14", role: "mode router and calculator state" }
  - { name: evaluateExpression, path: "src/utils/evaluator.js:4", role: "expression parsing and unit-aware evaluation" }
commands:
  - { command: "npm test", purpose: "run Vitest suite", source: "package.json:11" }
  - { command: "npm run build", purpose: "build production bundle", source: "package.json:8" }
hotspots:
  - { path: "src/App.jsx", reason: "cross-cutting UI state and mode routing" }
  - { path: "src/utils/evaluator.js", reason: "shared math engine for expression evaluation, trigonometry, and finance" }
```

## Repository purpose {#core.purpose}
The repository implements a calculator experience for everyday arithmetic, scientific math, unit conversion, financial planning, and graphing. The business value is primarily user productivity and quick decision support, not a multi-user platform. The visible capabilities are all rendered in the browser and driven by local client state.

## Repository type and languages {#core.type}
This is a single-page React application built on Vite. The codebase mixes JavaScript, JSX, CSS, and package metadata. The dependency manifest also includes `mathjs`, `lucide-react`, Vitest, Testing Library, and Vite.

## Main applications, packages, or services {#core.components}
- `src/App.jsx` is the main application shell and mode router.
- `src/components/ScientificKeypad.jsx` and `src/components/StandardKeypad.jsx` expose calculator controls.
- `src/components/FinancialCalculator.jsx` adds loan EMI, compound interest, and tip-splitting workflows.
- `src/components/UnitConverter.jsx` and `src/components/FunctionGrapher.jsx` provide specialized calculators.
- `src/utils/evaluator.js` is the shared engine for parsing expressions, formatting numbers, and computing financial formulas.

## High-level component map {#core.map}
The app state in `src/App.jsx` is the hub. It delegates UI to mode-specific components and sends evaluations to `evaluateExpression` from `src/utils/evaluator.js`. `Display.jsx` renders the expression/result view, `HistoryDrawer.jsx` stores recent calculations, and `audio.js` provides optional sound feedback. The financial and unit-converter features are separate mode components but share the evaluator and the same display shell.

## Main entry points {#core.entrypoints}
- `src/App.jsx:14` is the app component that creates the main calculator experience.
- `src/main.jsx` mounts the React app into the DOM.
- `package.json:6-11` defines the standard commands for development, build, lint, preview, and tests.

## Primary technologies {#core.tech}
The repository uses React 19, Vite 8, Vitest, Testing Library, and `mathjs` for expression evaluation. Styling is component-driven and uses CSS classes plus Tailwind-like utility classes embedded in JSX.

## Standard build and test commands {#core.commands}
- `npm test` runs the Vitest suite; it passed during inspection.
- `npm run build` creates a production bundle; it succeeded during inspection.
- `npm run dev` starts the local Vite dev server.
- `npm run lint` runs ESLint.

## Important risks {#core.risks}
The most important risk is overreliance on client-side logic and browser storage. The app does not expose a backend or shared state, so errors, history, and preferences are local to the browser and may be lost or inconsistent across devices. Another risk is that financial calculations are implemented as UI helpers rather than domain modules with formal validation.

## Important unknowns {#core.unknowns}
The repository does not expose a product roadmap, customer segmentation, or external integrations. It also does not define an authoritative domain model for finance or expression evaluation beyond the code itself.

## Commit, generation date, and freshness warning {#core.freshness}
Inspected commit: `1b17ac362bdedf23ef4f7683203fb8e1a715428b`. Generated at `2026-08-20T03:02:27.293Z` on `20 August 2026`. The repository working tree is not clean, so the current state may differ from the inspected commit.

## Recommended next view for each common task {#core.routing}
- Product behavior or business impact: `views/business.md`
- Implementation or debugging: `views/development.md` (not generated in this quick pass)
- Test creation or regression analysis: `views/testing.md` (not generated in this quick pass)

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
