> **Grounding** · calc @ `08aa77072f09d6113acba4f1eb8db27786a97988` · view: `architecture` · tier: `full`
> **Generated** 11 August 2026 (2026-08-11T05:43:13Z) · depth: `deep` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#arch.tldr}
The architecture is a layered client-side app: a thin shell in `src/App.jsx` owns shared state, mode selection, and persistence, while feature components delegate to `src/utils/evaluator.js` and `src/utils/audio.js`. The calculator engine is the main cross-cutting dependency and is reused across standard, scientific, converter, and financial modes. The app is deliberately UI-centric: there is no backend, no service boundary, and no persistence beyond browser `localStorage`. The most important design risk is that state and presentation are tightly coupled, so changes to shared input/result handling can ripple across modes.

## Facts {#arch.facts}
```yaml
components:
  - { id: app-shell, path: src/App.jsx, role: "shared state, mode routing, localStorage persistence" }
  - { id: calculator-engine, path: src/utils/evaluator.js, role: "evaluation, unit conversion, finance helpers" }
  - { id: calculator-ui, path: src/components, role: "mode-specific UIs and navigation" }
  - { id: audio-feedback, path: src/utils/audio.js, role: "Web Audio feedback" }
entrypoints:
  - { id: app-bootstrap, path: src/main.jsx, line: 1, invocation: "React mount point" }
  - { id: app-shell, path: src/App.jsx, line: 14, invocation: "mode orchestrator" }
key_symbols:
  - { name: App, path: src/App.jsx, line: 14, role: "root component" }
  - { name: evaluateExpression, path: src/utils/evaluator.js, line: 4, role: "expression evaluation" }
  - { name: UNIT_TYPES, path: src/utils/evaluator.js, line: 75, role: "units catalog" }
commands:
  - { command: "npm run build", purpose: "production bundle", source: "package.json:8" }
hotspots:
  - { path: src/App.jsx, reason: "shared state and cross-mode behavior" }
  - { path: src/utils/evaluator.js, reason: "cross-cutting arithmetic/finance/conversion logic" }
```

## System context {#arch.context}
The repository is a single-page application with one runtime boundary: the browser. There is no server layer, no API client, and no persistence backend beyond `localStorage` and the browser clipboard. User interactions are handled entirely in React components, with shared state flowing through `App` and the evaluator utility. Evidence: `src/App.jsx:23-34`, `src/components/HistoryDrawer.jsx:15-26`, `src/utils/audio.js:18-107`.

## Component responsibilities {#arch.structure}
- `src/App.jsx` is the shell. It owns the active mode, expression/result state, memory, history, theme, sound settings, and keyboard shortcuts. This is the main integration point for every calculator mode.
- `src/components/Header.jsx` provides navigation, theme switching, and access to history/shortcuts, but keeps its state local to the presentational affordance.
- `src/components/StandardKeypad.jsx`, `src/components/ScientificKeypad.jsx`, `src/components/UnitConverter.jsx`, `src/components/FinancialCalculator.jsx`, and `src/components/FunctionGrapher.jsx` provide feature-specific UI surfaces.
- `src/utils/evaluator.js` centralizes all arithmetic, trig/constant handling, percentage semantics, unit conversions, finance formulas, and display formatting; it is reused by several modes and therefore has the broadest interface surface.
- `src/utils/audio.js` is a small side concern used for feedback and is not part of the calculator semantics.

## Dependency relationships {#arch.dependencies}
The important dependency flow is simple and mostly one-way:
- App shell -> feature components -> evaluator/audio helpers
- Feature components -> evaluator for behavior; audio for feedback
- Graphing uses `mathjs` directly rather than the shared evaluator, so it is a minor exception to the dominant pattern
Evidence IDs: `E-001`, `E-002`, `E-006`, `E-008`.

## Interfaces and contracts {#arch.contracts}
The most meaningful contracts are the props and callbacks passed from `App` into the mode components (for example `onDigit`, `onOperator`, `onEquals`, `onClear`, and `soundEnabled`) and the evaluator functions exported from `src/utils/evaluator.js` (`evaluateExpression`, `formatNumber`, `convertUnits`, `calculateEMI`, `calculateCompoundInterest`, `calculateTip`). These contracts are implicit rather than formalized by TypeScript or schema files. Evidence: `src/App.jsx:55-153`, `src/utils/evaluator.js:4-218`.

## Important runtime workflows {#arch.runtime}
1. A user taps a keypad button in a mode; the App shell handler updates expression/result state and optionally plays audio.
2. Pressing Enter/equals invokes `evaluateExpression` and stores a history entry when evaluation succeeds.
3. The history drawer can replay an expression/result pair into the shell state.
4. The grapher mode compiles equations with `mathjs` and draws them on a canvas without using the shared evaluator.
Evidence: `src/App.jsx:115-153`, `src/components/HistoryDrawer.jsx:15-26`, `src/components/FunctionGrapher.jsx:21-133`.

## Architectural risks and invariants {#arch.risks}
- Invariant: the shell is the authoritative source of expression/result state; feature components are mostly stateless views.
- Risk: the app uses browser-side state and not a formal state-management library, so shared state mutations are easy to break during refactors.
- Risk: the app’s theming is token-driven in CSS, but the selected theme is stored in `localStorage`, making theming behavior only partially observable in code.

## Where to start {#arch.start}
Start with `src/App.jsx` to understand the state model and mode routing, then read `src/utils/evaluator.js` for the engine semantics. The feature components are helpful once you know whether the change affects standard/scientific interaction, converter behavior, financial calculations, or graphing.

## Questions this view does not answer {#arch.limits}
This view does not cover UI styling minutiae, individual component implementation details, or non-code operational concerns. It also does not define server-side contracts because the repo does not include them.
