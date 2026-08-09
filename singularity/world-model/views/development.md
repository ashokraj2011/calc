> **Grounding** · calc @ `8d115da4dc8005b437ccad387db0721b2ab06bd9` · view: `development` · tier: `full`
> **Generated** 9 August 2026 (2026-08-09T18:59:39Z) · depth: `standard` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#dev.tldr}

This view gives developers the practical starting points for changing behavior or appearance in the calculator app. It focuses on the active source tree, the state flow in `App`, the evaluation layer, and the shared styling surface that most affects a “classic calculator” change.

## Facts {#dev.facts}

```yaml
components: [app-shell, display, standard-keypad, scientific-keypad, evaluator, style-system]
entrypoints:
  - { id: app-shell, path: src/App.jsx, line: 14, invocation: "renders all modes and owns state" }
key_symbols:
  - { name: App, path: src/App.jsx, line: 14, role: "top-level state and event handlers" }
  - { name: evaluateExpression, path: src/utils/evaluator.js, line: 4, role: "sanitizes and evaluates expressions" }
commands:
  - { command: "npm run build", purpose: "production build", source: "package.json:6-10" }
  - { command: "npm run lint", purpose: "static validation", source: "package.json:6-10" }
hotspots:
  - { path: src/index.css, reason: "shared visual system used by most UI surfaces" }
  - { path: src/App.jsx, reason: "central state and keyboard workflow" }
```

## Developer setup {#dev.setup}

The repository is already wired for local development with Vite. From the repository root, `npm install` (or `npm ci`) followed by `npm run dev` starts the app locally. The production build path is `npm run build`, and the current lint command is `npm run lint`. The app is a browser-only React front end, so there is no separate server or database to start.

## Source tree map {#dev.tree}

- `src/App.jsx` — root component, state, keyboard shortcuts, mode selection, and persistence.
- `src/components/` — mode-specific presenters: `Display`, `StandardKeypad`, `ScientificKeypad`, `UnitConverter`, `FinancialCalculator`, `FunctionGrapher`, and the header/history/keyboard modal surfaces.
- `src/utils/` — evaluator and audio helpers.
- `src/index.css` — shared visual system and theme variables.
- `index.html` and `src/main.jsx` — bootstrapping and mount point.

## Important modules and symbols {#dev.modules}

`App` in `src/App.jsx` contains handlers for digit input, operators, clear, backspace, negate, percent, equals, and memory operations. The display component in `src/components/Display.jsx` owns copy/clear/backspace and angle-unit toggling. The standard keypad in `src/components/StandardKeypad.jsx` wires button presses to the shared handlers, while the scientific keypad in `src/components/ScientificKeypad.jsx` adds a function toolbar above the standard keypad. `evaluateExpression` and `formatNumber` in `src/utils/evaluator.js` are the functional core for computation and formatting, and they should remain the first place to inspect for any arithmetic change.

## Common implementation flows {#dev.flows}

A standard calculation flow begins in `App` when a button or keyboard shortcut calls a handler. That handler updates `expression` and `result` state, and the `=` path calls `evaluateExpression` before storing a history entry. A classic-style UI change should follow the same flow: change the styling contract in `src/index.css` and then adjust the display/keypad/header components that consume the shared variables. The scientific and non-standard modes are composed through `App` rather than through a separate router or data layer.

## Configuration loading and persistence {#dev.setup}

The app uses browser `localStorage` for `apex_theme`, `apex_sound`, and `apex_history` in `src/App.jsx:22-53`. That means local verification should account for persisted state, especially for theme and history. The styling is applied by setting `data-theme` on `<html>` inside the `useEffect` block in `src/App.jsx:39-43`.

## Error-handling and observability conventions {#dev.flows}

The calculator uses a simple error contract: invalid expressions produce `Error` in the result display, and the evaluator returns an object with `error` data for the caller. The codebase does not define structured logging or monitoring hooks; the practical observability path is the UI itself and the console during manual verification.

## Change-impact guide {#dev.impact}

For a request such as “change the look to match classic calculator,” the safest editing surface is the shared styling layer in `src/index.css`. The next most important surfaces are the display, keypad, and header components that consume those theme tokens. The evaluator in `src/utils/evaluator.js` should stay unchanged unless the UI contract expands to new symbols or a new input format. Because `ScientificKeypad` reuses `StandardKeypad`, a global visual change can affect both modes unless the overrides are scoped carefully.

## Known implementation hotspots {#dev.hotspots}

- `src/index.css` — largest visual surface and the best place for theme-driven changes.
- `src/App.jsx` — central state and keyboard handling, so cross-mode UI changes can have side effects.
- `src/components/Display.jsx` and `src/components/StandardKeypad.jsx` — visually dominant surfaces that define how the calculator feels.
- `src/components/FunctionGrapher.jsx` — a separate but still themed canvas surface that may not need changes for a classic-calculator look.

## Where to start {#dev.start}

Start with `src/index.css`, then inspect `src/components/Display.jsx`, `src/components/StandardKeypad.jsx`, `src/components/ScientificKeypad.jsx`, and `src/components/Header.jsx`. If the change is limited to the look, avoid editing `src/utils/evaluator.js` unless new visible symbols or input semantics are required.

## Questions this view does not answer {#dev.limits}

This view does not provide a complete test plan or a pixel-perfect design spec. It also does not cover deployment or runtime operations because the repository is a single browser app and the inspected snapshot has no operational tooling.
