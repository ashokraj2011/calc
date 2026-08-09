> **Grounding** · calc @ `dfeda6775cb0c4abe77e42605fcc6bdd1bf78f3c` · view: `core` · tier: `full`
> **Generated** 09 August 2026 (2026-08-09T21:05:23Z) · depth: `standard` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.


## TL;DR {#core.tldr}
This repository is a React/Vite calculator application with a shared theme system, a multi-mode UI, and a lightweight expression evaluator. The app is centered in `src/App.jsx`, with theme tokens and component styling concentrated in `src/index.css`, and the calculator logic isolated in `src/utils/evaluator.js`. The main validation commands are `npm run build` and `npm run lint`; build succeeded after installing dependencies, while lint currently reports existing unused-import and hook-style issues. The working tree is not clean because the app source files already had local edits at inspection time. For styling changes like “match classic calculator”, start in the shared theme tokens and the header/display/keypad components.

## Facts {#core.facts}
```yaml
components:
  - { id: calculator-shell, name: App shell, kind: frontend, path: src/App.jsx }
  - { id: theme-system, name: Shared UI theme system, kind: frontend, path: src/index.css }
  - { id: expression-evaluator, name: Arithmetic evaluator, kind: library, path: src/utils/evaluator.js }
entrypoints:
  - { id: app-entry, path: src/main.jsx:1-10, invocation: "npm run dev" }
commands:
  - { command: "npm run build", purpose: "build the production bundle", source: "package.json:6-10" }
  - { command: "npm run lint", purpose: "run eslint", source: "package.json:6-10" }
risks:
  - { topic: "visual spillover", reason: "theme tokens are shared across all UI modes" }
```

## Repository purpose {#core.purpose}
The repository is a single-page calculator experience that supports standard arithmetic plus scientific, unit conversion, financial, and grapher modes. The implementation is a React front end with Vite tooling and a custom expression evaluator built around `mathjs`.

## Repository type and languages {#core.type}
This is a front-end application repository with JavaScript/JSX and CSS. The package manifest shows React 19, Vite 8, and `mathjs` as the main runtime dependencies, and the UI uses CSS custom properties for theming.

## Main applications, packages, or services {#core.components}
- `src/App.jsx` — main app shell that manages calculator mode, state, keyboard shortcuts, theme persistence, and history.
- `src/index.css` — shared theme tokens and shared UI classes for display, keypad, header, and card styling.
- `src/components/` — feature-specific surfaces for the standard keypad, scientific keypad, display, header, history drawer, and other calculator modes.
- `src/utils/evaluator.js` — expression parsing and formatting logic used by the main app.

## High-level component map {#core.map}
The app bootstraps from `src/main.jsx`, mounts the `App` component, and routes mode-specific UI subcomponents from `App`. The shared visual system is theme-driven via CSS variables in `src/index.css`, while calculation semantics come from the evaluator utility. The history, sound, and keyboard modal features are additional UI state surfaces that sit alongside the main calculator experience.

## Main entry points {#core.entrypoints}
- `src/main.jsx:1-10` — Vite/React root that imports the app stylesheet and mounts the React entry point.
- `src/App.jsx:14-323` — primary calculator UI and state controller.
- `package.json:6-10` — scripts for development, build, lint, and preview.

## Primary technologies {#core.tech}
- React 19 with JSX components
- Vite 8 for build and development tooling
- `mathjs` for expression evaluation
- ESLint + React hooks rules for static validation
- CSS custom properties for theming

## Standard build and test commands {#core.commands}
Observed commands:
- `npm run dev` — start the local Vite development server.
- `npm run build` — produce a production bundle (succeeded after dependencies were installed).
- `npm run lint` — run ESLint (currently fails with existing lint issues in several source files).

## Important risks {#core.risks}
- Visual changes may affect multiple calculator modes because the styling system is shared rather than mode-specific.
- The current lint state is already failing, so new changes should be checked against existing warnings and errors.
- Build validation succeeded, but the repository does not currently expose dedicated automated UI or integration tests.

## Important unknowns {#core.unknowns}
- The intended visual target for “classic calculator” is not pinned to a specific hardware model or screenshot.
- No test suite was found in the repository tree, so visual regressions are currently inferred from build/lint checks and manual review.
- The repository has local uncommitted changes in the app source, so the state at inspection time is not identical to an arbitrary future checkout.

## Commit, generation date, and freshness warning {#core.freshness}
- Inspected commit: `dfeda6775cb0c4abe77e42605fcc6bdd1bf78f3c`
- Generated: `2026-08-09T21:05:23Z` (`09 August 2026`)
- Working tree status: not clean; local edits were present at inspection time.

## Recommended next view for each common task {#core.routing}
- Styling or visual alignment: `views/business.md` and `views/development.md`
- Product or business impact analysis: `views/business.md`
- Implementation or refactoring: `views/development.md`
- Test planning or quality review: `views/testing.md`
