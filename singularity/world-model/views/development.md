> **Grounding** · calc @ `5bce85ba2c79dc7dbfd36ecac3f10d1233881d4a` · view: `development` · tier: `full`
> **Generated** 11 August 2026 (2026-08-11T02:51:13Z) · depth: `standard` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.


## TL;DR {#dev.tldr}
For implementation work, start with `src/App.jsx` for state and event flow, `src/utils/evaluator.js` for expression semantics, and `src/index.css` for the visual system that already contains Windows 11-specific overrides. The app uses a single root state container and passes handlers to child components, so changes to layout or interaction usually touch the shell plus one or two presentation components. The main risk is that visual work can regress keyboard handling or the evaluator, because those paths are coupled by shared state and shared CSS utility classes. For a Windows Calculator style change, the safest approach is to adjust theme tokens and layout classes first, then validate interactions manually.

## Facts {#dev.facts}
```yaml
components: [app-shell, calculator-engine, theme-system, ui-components]
entrypoints:
  - { id: app-main, path: "src/main.jsx:1-10", invocation: "npm run dev" }
  - { id: app-state, path: "src/App.jsx:14-324", invocation: "App" }
key_symbols:
  - { name: App, path: "src/App.jsx:14", role: "owns calculator state and delegates handlers" }
  - { name: evaluateExpression, path: "src/utils/evaluator.js:4", role: "parses and formats expressions" }
  - { name: Header, path: "src/components/Header.jsx:36", role: "mode/theme/history controls" }
  - { name: StandardKeypad, path: "src/components/StandardKeypad.jsx:5", role: "standard keypad layout" }
  - { name: ScientificKeypad, path: "src/components/ScientificKeypad.jsx:5", role: "scientific toolbar and keypad" }
commands:
  - { command: "npm run dev", purpose: "local iteration", source: "package.json:7" }
  - { command: "npm run build", purpose: "build verification", source: "package.json:8" }
  - { command: "npm run lint", purpose: "static validation", source: "package.json:9" }
hotspots:
  - { path: "src/App.jsx", reason: "core state orchestration and keyboard wiring" }
  - { path: "src/utils/evaluator.js", reason: "shared computation semantics including formatting and unit conversion" }
  - { path: "src/index.css", reason: "theme tokens and Windows-specific layout overrides" }
```

## Where to start {#dev.start}
- For visual changes: start in `src/index.css` for theme variables and Windows-specific overrides, then inspect `src/components/Header.jsx`, `src/components/Display.jsx`, `src/components/StandardKeypad.jsx`, and `src/components/ScientificKeypad.jsx` for layout structure.
- For interaction changes: start in `src/App.jsx` because it owns the input handlers (`handleDigit`, `handleOperator`, `handleEquals`, `handleBackspace`, `handleNegate`, `handlePercent`) and keyboard shortcuts.
- For expression semantics: start in `src/utils/evaluator.js` because it sanitizes input, evaluates expressions with mathjs, and formats results.

## Source tree map {#dev.tree}
- `src/App.jsx` — centralized state, persistence, mode switch, keyboard events, and composition of the active mode panel.
- `src/components/` — presentation components keyed by capability: header, display, keypad, unit converter, financial calculator, function grapher, history drawer, and shortcuts modal.
- `src/utils/` — evaluator and audio utilities. The evaluator is shared by the calculator shell and modal/standalone components.
- `src/index.css` — theme variables and CSS classes used by the components; this is the main place for Windows UI styling.

## Important modules and symbols {#dev.symbols}
- `App` (`src/App.jsx:14`) owns the calculator state (`expression`, `result`, `lastEvaluated`, `angleUnit`, `memoryValue`, `theme`, `soundEnabled`, `history`).
- `evaluateExpression` and `formatNumber` (`src/utils/evaluator.js:4-72`) are the main computation and formatting entry points.
- `Header` (`src/components/Header.jsx:36`) controls mode selection, theme selection, shortcuts, history, and sound toggle.
- `Display` (`src/components/Display.jsx:5`) renders the expression/result line and the display utility actions.
- `StandardKeypad` (`src/components/StandardKeypad.jsx:5`) and `ScientificKeypad` (`src/components/ScientificKeypad.jsx:5`) define the visible keypad layouts and button actions.
- `UNIT_TYPES` and `convertUnits` (`src/utils/evaluator.js:75-158`) support converter mode; `calculateEMI`, `calculateCompoundInterest`, and `calculateTip` provide financial mode helpers.

## Common implementation flows {#dev.flows}
1. A button press in `StandardKeypad` or `ScientificKeypad` calls a handler from `App`, which updates the expression or result state.
2. Pressing equals triggers `evaluateExpression` in `src/utils/evaluator.js`; the result is written back to `App` and optionally pushed into history.
3. Theme changes update the `data-theme` attribute on the document root and persist selections to `localStorage` via `src/App.jsx:39-53`.
4. The visual system is theme-driven, but the component structure remains mostly unchanged; Windows-style changes can be localized to `src/index.css` and a small number of layout components.

## Change-impact guide {#dev.impact}
- Changing keypad layout or display spacing is likely to affect `src/components/StandardKeypad.jsx`, `src/components/ScientificKeypad.jsx`, `src/components/Display.jsx`, and `src/index.css`.
- Changing the active theme or adding Windows-specific buttons is likely to affect `src/components/Header.jsx` and the `data-theme` logic in `src/App.jsx`.
- Changing expression semantics is likely to affect `src/utils/evaluator.js` and any mode that depends on the evaluator, including the main calculator and scientific mode.
- Adding or removing persisted state should be checked against the `localStorage` key handling in `src/App.jsx:39-53`.

## Known implementation hotspots {#dev.hotspots}
- `src/App.jsx` — most state, input handlers, keyboard shortcuts, and persistence live here.
- `src/utils/evaluator.js` — shared computation semantics; a small change here can affect several modes.
- `src/index.css` — the existing Windows 11 overrides and utility classes are concentrated here, making it the most likely place for a visual parity change.

## Validation commands {#dev.validation}
- `npm run dev` for local manual verification.
- `npm run build` for a production build check.
- `npm run lint` for static validation; this repo currently reports existing lint issues in the app source.

## Questions this view does not answer {#dev.limits}
- It does not specify Windows Calculator design acceptance criteria.
- It does not provide a full test matrix or visual baseline beyond the current code structure and CSS hooks.

Evidence: `e:app-shell`, `e:evaluator-core`, `e:theme-system`, `e:ui-components`, `e:package-scripts`.
