> **Grounding** · calc @ `08aa77072f09d6113acba4f1eb8db27786a97988` · view: `development` · tier: `full`
> **Generated** 11 August 2026 (2026-08-11T05:43:13Z) · depth: `deep` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#dev.tldr}
Development work should start from `src/App.jsx` for shared state and `src/utils/evaluator.js` for expression semantics. The repo uses component-based React with local state and no backend. Most bug fixes land either in the shell (shared state/keyboard handling), in a mode component (UI or feature-specific input), or in the evaluator utility (math semantics, formatting, conversion tables). The app’s most likely hotspot is the shared evaluator because it feeds multiple modes and has the broadest change impact.

## Facts {#dev.facts}
```yaml
components:
  - { id: app-shell, path: src/App.jsx, role: "shared state and handlers" }
  - { id: calculator-engine, path: src/utils/evaluator.js, role: "math and finance logic" }
  - { id: calculator-ui, path: src/components, role: "mode-specific presentation" }
entrypoints:
  - { id: app-bootstrap, path: src/main.jsx, line: 1, invocation: "Vite entry" }
  - { id: app-shell, path: src/App.jsx, line: 14, invocation: "root app component" }
key_symbols:
  - { name: App, path: src/App.jsx, line: 14, role: "root component" }
  - { name: evaluateExpression, path: src/utils/evaluator.js, line: 4, role: "primary evaluator" }
  - { name: calculateEMI, path: src/utils/evaluator.js, line: 161, role: "loan calculation" }
commands:
  - { command: "npm ci", purpose: "install dependencies", source: "package.json" }
  - { command: "npm test", purpose: "run Vitest", source: "package.json:11" }
  - { command: "npm run build", purpose: "verify build", source: "package.json:8" }
  - { command: "npm run lint", purpose: "check lint baseline", source: "package.json:9" }
hotspots:
  - { path: src/utils/evaluator.js, reason: "shared across modes" }
  - { path: src/App.jsx, reason: "cross-mode state orchestration" }
```

## Developer setup {#dev.setup}
Install dependencies with `npm ci`. The repository uses Vite and Vitest, so the common local loop is `npm test` for regression coverage and `npm run build` for packaging. Linting is also available via `npm run lint`, but the current baseline fails. Evidence: `package.json:1-35`, `vite.config.js:1-12`, `src/test/setup.js:1-67`.

## Source tree map {#dev.structure}
- `src/App.jsx` — app shell, state, event handlers, mode selection, persistence, keyboard hooks.
- `src/components/` — feature surfaces. The biggest ones are `Header`, `Display`, `StandardKeypad`, `ScientificKeypad`, `UnitConverter`, `FinancialCalculator`, `FunctionGrapher`, `HistoryDrawer`, and `KeyboardShortcutsModal`.
- `src/utils/` — evaluator and audio utilities.
- `src/test/` — shared test setup for jsdom and canvas stubs.
- `src/**/*.test.*` — regression suites for the UI shell and evaluator.

## Important modules and symbols {#dev.entrypoints}
- `App` in `src/App.jsx` is the root integration point for all calculator modes and the home of handlers for digit, operator, equals, memory, and clear actions. Inspect the handler callbacks at the top of the component and the mode-specific JSX near the bottom.
- `evaluateExpression` in `src/utils/evaluator.js` is the key semantic function. It sanitizes expressions, handles percentages/factorials, converts trig to degree/radian, and formats output.
- `playSound` in `src/utils/audio.js` is side-effectful but separate from calculator semantics.
- `Header` and `Display` are the main UI-adjacent collaborators for theme, keyboard shortcuts, and history.

## Common implementation flows {#dev.flows}
1. A keypad input flows through `App` handlers into expression state and then to `evaluateExpression` on equals.
2. The financial calculator calls `calculateEMI`, `calculateCompoundInterest`, and `calculateTip` directly from the evaluator module.
3. The converter calls `convertUnits` and uses the `UNIT_TYPES` table in the evaluator module.
4. The grapher uses `mathjs.compile` directly for equation rendering, so its error handling is local to the component rather than shared.
Evidence: `src/App.jsx:55-153`, `src/components/FinancialCalculator.jsx:24-241`, `src/components/UnitConverter.jsx:14-133`, `src/components/FunctionGrapher.jsx:14-212`.

## Coding and naming conventions {#dev.conventions}
The codebase is mostly functional React with `useState`/`useEffect`/`useCallback`. File names are descriptive and component exports are named (`export const X = ...`). The code uses plain JavaScript rather than TypeScript, so contracts are often implicit via props and callback shapes. The project uses `lucide-react` for icons and CSS utility classes for layout and theming. Evidence: `src/components/Header.jsx:1-188`, `src/components/Display.jsx:1-97`.

## Error handling and persistence {#dev.debugging}
- The evaluator returns structured results with `{ result, rawResult, error }` rather than throwing for most user input errors.
- The shell persists history, theme, and sound choices with `localStorage` and catches JSON parsing errors. This is a useful starting point when debugging state-related issues.
- The grapher and audio modules guard against browser limitations (canvas context stub, Web Audio restrictions) in tests and runtime code. Evidence: `src/App.jsx:23-34`, `src/utils/evaluator.js:4-54`, `src/components/FunctionGrapher.jsx:21-133`, `src/test/setup.js:1-67`.

## Change-impact guide {#dev.impact}
- Editing `src/utils/evaluator.js` will affect standard/scientific, converter, financial, and possibly grapher semantics.
- Editing `src/App.jsx` can affect keypad behavior, memory, history, theme, shortcuts, and all modes.
- Editing a mode component mostly affects only that mode, but may also change shared styling or component contracts.

## Known implementation hotspots {#dev.hotspots}
- `src/utils/evaluator.js` — broadest change surface; used by multiple calculator modes and by tests.
- `src/App.jsx` — central state orchestration and cross-mode behavior.
- `src/components/FunctionGrapher.jsx` — uses effect-driven canvas rendering and local error handling.

## Where to start {#dev.start}
For a bug fix, inspect the relevant mode component, then trace the handler in `src/App.jsx`, then confirm semantics in `src/utils/evaluator.js`. For a regression or behavior change, start with the matching test in `src/App.test.jsx` or `src/utils/evaluator.test.js`.

## Questions this view does not answer {#dev.limits}
This view does not cover deployment, production observability, or backend implementation because the repo does not contain them. It also does not replace the code itself or the execution output of the current test suite.
