> **Grounding** · calc @ `5bce85ba2c79dc7dbfd36ecac3f10d1233881d4a` · view: `core` · tier: `full`
> **Generated** 11 August 2026 (2026-08-11T02:51:13Z) · depth: `standard` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.


## TL;DR {#core.tldr}
This repository is a compact Vite + React calculator app with a single app shell, a custom evaluator, themed UI components, and browser persistence. The main entry points are `src/main.jsx` and `src/App.jsx`; the calculator logic is split between the shell and `src/utils/evaluator.js`. The UI already has a theme-driven CSS layer with Windows 11 light and dark palettes, so visual work should start there. The current worktree is not clean, so treat this grounding as a snapshot of the inspected commit rather than a claim about the current filesystem.

## Facts {#core.facts}
```yaml
repository_kind: application
languages: [JavaScript, CSS, HTML]
package_roots: [.] 
entrypoints:
  - { id: app-main, path: src/main.jsx, line: 1, invocation: "npm run dev" }
  - { id: app-shell, path: src/App.jsx, line: 14, invocation: "App" }
standard_commands:
  - { command: "npm run dev", purpose: "start Vite dev server", source: "package.json:7" }
  - { command: "npm run build", purpose: "build production bundle", source: "package.json:8" }
  - { command: "npm run lint", purpose: "run ESLint", source: "package.json:9" }
  - { command: "npm run preview", purpose: "serve built bundle", source: "package.json:10" }
```

## Repository purpose {#core.purpose}
The repository hosts a single-page calculator application with standard, scientific, converter, financial, and grapher modes. The app is intended to be a self-contained front-end experience rather than a backend service or multi-package monorepo.

## Repository type and languages {#core.type}
Observed type: application. Primary languages are JavaScript (React components and state logic), CSS (theme variables and layout styling), and HTML (Vite entry page). The project uses Vite as the build tool and React as the UI framework.

## Main applications, packages, or services {#core.components}
- `src/App.jsx` — root calculator shell and state orchestration.
- `src/utils/evaluator.js` — shared expression parser, formatter, unit conversion helpers, and financial calculations.
- `src/components/*` — mode-specific UI components such as `Header`, `Display`, `StandardKeypad`, `ScientificKeypad`, `UnitConverter`, `FinancialCalculator`, `FunctionGrapher`, and modal/drawer overlays.
- `src/index.css` — global theme tokens, button styling, layout classes, and Windows 11 visual overrides.

## High-level component map {#core.map}
The root `App` component owns calculator state and delegates rendering to mode components. Interaction handlers are passed down from `App` into child components. The evaluator is a shared utility module used by the main app and several mode components. The CSS layer exposes theme variables that are consumed by components via utility classes, so visual changes can often be made without touching the JavaScript state layer unless the layout changes need new structure.

## Main entry points {#core.entrypoints}
- `src/main.jsx` mounts the React app through `createRoot(...).render(<App />)`.
- `src/App.jsx` defines the main state model and mode-switching logic.
- `src/utils/evaluator.js` is the core computation surface used by the calculator and some specialized modes.

## Primary technologies {#core.tech}
Observed stack: React 19, Vite 8, ESLint, mathjs, lucide-react, and CSS custom properties. The app uses `localStorage` for theme, sound, and history persistence.

## Standard build and test commands {#core.commands}
- `npm run dev` — start local dev server.
- `npm run build` — create production build.
- `npm run lint` — run ESLint.
- No `test` script is declared in `package.json`, so there is no automated test command to invoke yet.

## Important risks {#core.risks}
- The repository has no dedicated automated UI or unit test harness declared, so visual changes are harder to verify safely.
- The task “make the app look like Windows calc” is under-specified in-repo; there is no product spec or acceptance checklist to compare against.
- The current worktree is not clean, so any file-level claim should be checked against the inspected commit and current code.

## Important unknowns {#core.unknowns}
- There is no design spec, screenshot, or documented parity checklist for Windows Calculator visuals.
- The repository does not declare a test runner or existing test snapshots.

## Commit, generation date, and freshness warning {#core.freshness}
Inspected commit: `5bce85ba2c79dc7dbfd36ecac3f10d1233881d4a`.
Generated: `11 August 2026`.
Working tree status: not clean. The repository contains deleted Singularity workflow artifacts in the worktree, so this material describes the inspected commit rather than an exact current working tree snapshot.

## Recommended next view for each common task {#core.routing}
- Visual or layout change: `views/development.md` and `views/testing.md`.
- Behavior change in expression handling: `views/development.md`.
- Regression or UI validation planning: `views/testing.md`.

## Deterministic repository facts {#core.deterministic-facts}

<!-- singularity-flow:repository-facts:start -->
```yaml
# Derived from the repository, not inferred. Every path and line is checkable.
files: 27
languages_scanned: 15
frameworks: [React, Vite]
commands:
  - { run: "npm run dev", at: "package.json:7" }
  - { run: "npm run build", at: "package.json:8" }
  - { run: "npm run lint", at: "package.json:9" }
  - { run: "npm run preview", at: "package.json:10" }
# What the rest of the repository depends on. A count, not an impression.
most_depended_on:
  - { path: src/utils/audio.js, imported_by: 10 }
  - { path: src/utils/evaluator.js, imported_by: 3 }
  - { path: src/components/StandardKeypad.jsx, imported_by: 2 }
  - { path: src/App.jsx, imported_by: 1 }
  - { path: src/components/Display.jsx, imported_by: 1 }
  - { path: src/components/FinancialCalculator.jsx, imported_by: 1 }
  - { path: src/components/FunctionGrapher.jsx, imported_by: 1 }
  - { path: src/components/Header.jsx, imported_by: 1 }
# Commits touching each file in the last year, from Git history.
most_changed:
  - { path: README.md, commits: 3 }
  - { path: src/App.jsx, commits: 2 }
  - { path: src/components/Display.jsx, commits: 2 }
  - { path: src/components/Header.jsx, commits: 2 }
  - { path: src/index.css, commits: 2 }
  - { path: .gitignore, commits: 1 }
  - { path: eslint.config.js, commits: 1 }
  - { path: index.html, commits: 1 }
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
tests: 0
```
<!-- singularity-flow:repository-facts:end -->
