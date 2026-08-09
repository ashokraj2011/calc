> **Grounding** · calc @ `0d8703c49dc3ca79c684d93cc42220c922d7cd15` · view: `development` · tier: `full`
> **Generated** 09 August 2026 (2026-08-09T22:30:28Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#dev.tldr}
For implementation work, start with the root `App` state controller and the shared evaluator. The app is structured around a single stateful shell (`src/App.jsx`) plus feature components under `src/components/` and a shared logic module (`src/utils/evaluator.js`). The main implementation flows are keypad input → expression state → evaluation → history update, and mode switching → feature component render. The repository is currently linting red and has no test harness, so local validation depends on `npm run build` and `npm run lint` and manual browser verification.

## Facts {#dev.facts}

```yaml
entrypoints:
  - { id: html-entry, path: index.html:1-14, invocation: "browser mount" }
  - { id: app-shell, path: src/App.jsx:14-324, invocation: "root controller" }
  - { id: evaluator, path: src/utils/evaluator.js:1-218, invocation: "shared logic" }
important_symbols:
  - { name: App, path: src/App.jsx:14-324, role: "state and UI orchestrator" }
  - { name: evaluateExpression, path: src/utils/evaluator.js:4-54, role: "expression evaluation" }
  - { name: FunctionGrapher, path: src/components/FunctionGrapher.jsx:14-212, role: "graphing mode" }
commands:
  - { command: "npm run dev", purpose: "start local dev server", source: "package.json:6-10" }
  - { command: "npm run build", purpose: "build for production", source: "package.json:6-10" }
  - { command: "npm run lint", purpose: "lint current tree", source: "package.json:6-10" }
```

## Developer setup {#dev.setup}
The repository is a standard Vite React project. From the repo root, `npm install` is needed before running the local scripts. The main scripts are `npm run dev`, `npm run build`, and `npm run lint`, all defined in `package.json`. Evidence: `e-build`, `e-lint`.

## Source tree map {#dev.tree}
- `src/App.jsx` is the top-level controller for calculator state, mode selection, history, persistence, and overlays.
- `src/components/` contains mode-specific UI modules: `Display`, `StandardKeypad`, `ScientificKeypad`, `UnitConverter`, `FinancialCalculator`, `FunctionGrapher`, `HistoryDrawer`, and `KeyboardShortcutsModal`.
- `src/utils/` contains reusable logic: `evaluator.js` for expressions and helpers, and `audio.js` for Web Audio feedback. Evidence: `e-app-shell`, `e-evaluator`, `e-graphing`.

## Important modules and symbols {#dev.modules}
- `App` owns the keyboard shortcut handling and runtime composition. It routes input from digits/operators to `evaluateExpression` and stores history entries after successful evaluations.
- `evaluateExpression` normalizes symbols such as `×`, `÷`, `%`, `!`, and angle-aware trig calls before delegating to `mathjs`.
- `convertUnits`, `calculateEMI`, `calculateCompoundInterest`, and `calculateTip` are the shared helpers behind the converter and financial modes.
- `FunctionGrapher` uses `math.compile` and a canvas renderer for the graphing mode. Evidence: `e-app-shell`, `e-evaluator`, `e-graphing`.

## Common implementation flows {#dev.flows}
1. User interaction enters through `App` handlers and feature components.
2. The expression string is updated in state and optionally evaluated on `=`.
3. Successful evaluations flow into `history`, and the resulting value is displayed in the UI.
4. Mode switching swaps between component trees without reloading the app.
Evidence: `e-app-shell`, `e-browser-storage`.

## Error handling and browser APIs {#dev.errors}
The evaluator returns `'Error'` for empty input, non-finite results, and syntax errors. The app also uses `localStorage` for preferences and history, `navigator.clipboard` for copy-to-clipboard, and `window.AudioContext` for sound feedback. These integrations should be treated as browser-dependent and tested carefully. Evidence: `e-browser-storage`, `e-evaluator`.

## Validation and debugging starting points {#dev.debug}
- For arithmetic logic, inspect `src/utils/evaluator.js`.
- For mode behavior, inspect `src/App.jsx` and the relevant component under `src/components/`.
- For persistence and UI state issues, inspect the `useEffect` blocks in `src/App.jsx` and `src/components/HistoryDrawer.jsx`.
- For lint issues, `npm run lint` is the first stop; the current report identifies a mix of unused imports and one React rule violation around state updates in `FunctionGrapher`. Evidence: `e-lint`, `e-graphing`.

## Known implementation hotspots {#dev.hotspots}
- `src/App.jsx` is the single biggest hotspot because it carries the app’s state and cross-cutting behavior.
- `src/utils/evaluator.js` is the main shared logic surface and thus a common point of regressions.
- `src/components/FunctionGrapher.jsx` is the most browser-specific and hardest-to-validate module because it renders directly to a canvas. Evidence: `e-app-shell`, `e-evaluator`, `e-graphing`.

## Where to start {#dev.start}
If you are implementing a new feature, start in `src/App.jsx` to understand how modes are composed, then move into `src/utils/evaluator.js` for shared calculator logic. If the change is mode-specific, follow the corresponding component under `src/components/`. Evidence: `e-app-shell`, `e-evaluator`.

## Questions this view does not answer {#dev.limits}
It does not describe deployment, accessibility, or backend contracts because those are not present in the repository snapshot. Evidence: `e-core-purpose`, `e-test-gap`.
