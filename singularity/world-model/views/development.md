> **Grounding** · calc @ `e9d82bcdfd4363c98e447b92108203f18828d6ff` · view: `development` · tier: `full`
> **Generated** 09 August 2026 (2026-08-09T23:57:03Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#dev.tldr}

For implementation work, start in `src/App.jsx` and `src/utils/evaluator.js`. The app shell owns most interaction state, while the evaluator module contains numeric formatting and calculation helpers. The UI is component-based and uses CSS variables for styling, so a visual change often requires editing both component classes and theme tokens.

## Facts {#dev.facts}

```yaml
components: [calculator-shell, calculator-ui, calculator-engine, calculator-theme]
entrypoints:
  - { id: entry-main, path: src/main.jsx, line: 1, invocation: "ReactDOM createRoot" }
key_symbols:
  - { name: App, path: src/App.jsx, line: 14, role: "state and mode coordinator" }
  - { name: evaluateExpression, path: src/utils/evaluator.js, line: 4, role: "parses and evaluates calculator expressions" }
commands:
  - { command: "npm run build", purpose: "build the app", source: "package.json:6-10" }
  - { command: "npm run lint", purpose: "check lint rules", source: "package.json:6-10" }
hotspots:
  - { path: src/App.jsx, reason: "largest shared state surface" }
  - { path: src/index.css, reason: "shared visual tokens for all modes" }
```

## Developer setup {#dev.setup}

The repository is a standard npm/Vite project. Install dependencies from the repo root, then use `npm run dev` for a local preview and `npm run build` for verification. The current environment already has dependencies installed locally in `node_modules/`.

## Source tree map {#dev.tree}

- `src/App.jsx` — top-level state machine and mode routing.
- `src/components/` — feature panels and controls: `Display`, `Header`, `StandardKeypad`, `ScientificKeypad`, `UnitConverter`, `FinancialCalculator`, `FunctionGrapher`, `HistoryDrawer`, and `KeyboardShortcutsModal`.
- `src/utils/` — logic helpers: `evaluator.js` for math and finance; `audio.js` for sounds.
- `src/index.css` and `src/App.css` — shared styling; `src/index.css` is the main styling source for the calculator experience.

## Important modules and symbols {#dev.modules}

- `App` in `src/App.jsx` owns `expression`, `result`, `lastEvaluated`, `angleUnit`, `memoryValue`, `theme`, `soundEnabled`, and `history` state. It also defines handlers like `handleDigit`, `handleOperator`, `handleEquals`, `handleMemory`, and the keyboard listener.
- `Display` in `src/components/Display.jsx` renders the expression/result area and exposes copy/clear/backspace controls.
- `StandardKeypad` and `ScientificKeypad` in `src/components/` render button layouts and forward events to the parent shell.
- `evaluateExpression` and `formatNumber` in `src/utils/evaluator.js` handle sanitization, percentage parsing, trigonometric angle conversion, and numeric formatting.

## Common implementation flows {#dev.flows}

Most calculator input follows the same pattern: a keypad component triggers an event in `App`, the shell updates state, the display re-renders, and `handleEquals` calls the evaluator. The financial and grapher panels use the evaluator helpers directly rather than the main expression state.

## Configuration loading and persistence {#dev.config}

The app reads and writes `localStorage` for theme, sound, and calculation history. That behavior lives in the `useEffect` blocks in `src/App.jsx`. There is no configuration file for runtime settings beyond the browser storage keys.

## Error-handling and conventions {#dev.conventions}

The calculator uses a simple error contract: `evaluateExpression` returns `{ result, rawResult, error }`. The UI renders `Error` when evaluation fails. The code favors functional React patterns and `useCallback` for handlers, but some components still use inline state and local form state. Styling uses CSS custom properties rather than hard-coded color values.

## Change-impact guide {#dev.impact}

If you change arithmetic behavior, inspect `src/utils/evaluator.js` and the `handleEquals` path in `src/App.jsx`. If you change the visual layout, inspect `src/index.css` and the relevant component file. If you change a mode like scientific or financial, inspect the relevant component plus the shared shell logic.

## Known implementation hotspots {#dev.hotspots}

- `src/App.jsx` because it holds most shared state and controls keyboard shortcuts.
- `src/utils/evaluator.js` because it is the logic hub for arithmetic, formatting, and financial helpers.
- `src/index.css` because it controls the shared visual system across modes.

## Where to start {#dev.start}

Start with `src/App.jsx` for an interaction change, `src/utils/evaluator.js` for calculation behavior, and `src/index.css` for a classic-style visual change.

## Questions this view does not answer {#dev.limits}

This view does not provide a full test inventory or a deployment checklist. It focuses on implementation entry points and common change paths.
