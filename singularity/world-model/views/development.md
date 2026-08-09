> **Grounding** · calc @ `dfeda6775cb0c4abe77e42605fcc6bdd1bf78f3c` · view: `development` · tier: `full`
> **Generated** 09 August 2026 (2026-08-09T21:05:23Z) · depth: `standard` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.


## TL;DR {#dev.tldr}
This view is the implementation map for developers working on the calculator app. The main entry point is `src/App.jsx`, which owns the calculator workflow and state transitions, while `src/index.css` holds the shared visual tokens that govern the current classic and alternative themes. The standard keypad, display, and header components are the most likely files to touch for styling work. Validation is available via `npm run build` and `npm run lint`; build passed after installing dependencies, while lint still reports existing issues in the repository.

## Facts {#dev.facts}
```yaml
components:
  - { id: calculator-shell, name: app shell and state, path: src/App.jsx:14-323 }
  - { id: theme-system, name: shared theming tokens, path: src/index.css:3-329 }
  - { id: expression-evaluator, name: evaluator utility, path: src/utils/evaluator.js:1-218 }
entrypoints:
  - { id: app-entry, path: src/main.jsx:1-10, invocation: "npm run dev" }
commands:
  - { command: "npm run build", purpose: "production bundle validation", source: "package.json:6-10" }
  - { command: "npm run lint", purpose: "static linting", source: "package.json:6-10" }
hotspots:
  - { path: src/index.css, reason: "shared styling primitives influence all visual surfaces" }
  - { path: src/App.jsx, reason: "central coordinator for state and mode switching" }
```

## Developer setup {#dev.setup}
Install dependencies with `npm install`, then use `npm run dev` for interactive development. The repository is a straightforward Vite React app, so the fastest local loop is editing the relevant component or CSS token file and refreshing the Vite dev server.

## Source tree map {#dev.tree}
- `src/App.jsx` — main application state, handlers, mode routing, theme persistence, history, and modal state.
- `src/components/Display.jsx` — display surface and utility buttons.
- `src/components/Header.jsx` — mode tabs, theme selector, and quick actions.
- `src/components/StandardKeypad.jsx` — standard calculator keypad structure.
- `src/components/ScientificKeypad.jsx`, `UnitConverter.jsx`, `FinancialCalculator.jsx`, `FunctionGrapher.jsx` — mode-specific renderers.
- `src/utils/evaluator.js` — expression normalization, math evaluation, formatting, and unit-conversion utilities.
- `src/index.css` — shared theme variables, layout classes, and calculator visual primitives.

## Important modules and symbols {#dev.symbols}
- `App` in `src/App.jsx:14-323` — orchestrates calculator state, handlers, and mode selection.
- `Header` in `src/components/Header.jsx:33-145` — controls mode switching and theme selection.
- `Display` in `src/components/Display.jsx:5-97` — renders the expression/result surface.
- `StandardKeypad` in `src/components/StandardKeypad.jsx:5-180` — renders the standard keypad grid.
- `evaluateExpression` in `src/utils/evaluator.js:4-54` — evaluates expressions with mathjs and error handling.

## Entry points and initialization {#dev.entrypoints}
The app boots from `src/main.jsx:1-10`, which imports the stylesheet and mounts the `App` component. The `App` component initializes `theme` from `localStorage` and synchronizes it back to the document element, which is how the app applies different themes.

## Common implementation flows {#dev.flows}
- Input flow: keypad or keyboard events call `handleDigit`, `handleOperator`, `handleEquals`, `handleClear`, or `handleBackspace` in `src/App.jsx:55-130`.
- Evaluation flow: `handleEquals` delegates to `evaluateExpression` and then updates the display plus history.
- Theme flow: header selection updates the `theme` state, and `useEffect` in `src/App.jsx:39-43` persists and reapplies it to the document.

## Composition patterns {#dev.patterns}
The app uses component composition rather than a central router; `App` selects a subcomponent based on `activeMode`. Styling is tokenized via CSS variables in `src/index.css`, and the shared classes are consumed by multiple components rather than hard-coded per component.

## Error-handling conventions {#dev.errors}
Expression errors are surfaced as `'Error'` in the result display via the evaluator utility. The UI also contains clear and backspace behaviors for user recovery, but there is no dedicated global error boundary or logging infrastructure visible in the repository snapshot.

## Configuration loading {#dev.config}
The app reads `localStorage` keys `apex_theme`, `apex_sound`, and `apex_history` from `src/App.jsx:22-53`. That is the primary persistence mechanism visible in the code.

## Coding and naming conventions {#dev.conventions}
The codebase uses descriptive React component names and camelCase handler names. UI state values are kept close to the component that renders them, while shared visual variables are centralized in CSS custom properties.

## Generated-code boundaries {#dev.generated}
The repository does not show a generated-code boundary in the app source; the visible build output is created by Vite and not part of the source tree to edit.

## Change-impact guide {#dev.impact}
For a visual class change, the highest-impact files are likely `src/index.css`, `src/components/Header.jsx`, `src/components/Display.jsx`, and `src/components/StandardKeypad.jsx`. For calculator logic changes, the critical file is `src/utils/evaluator.js`.

## Debugging starting points {#dev.debugging}
- Start by inspecting `src/App.jsx` if the UI state or mode selection behaves unexpectedly.
- Inspect `src/utils/evaluator.js` for expression parsing or formatting issues.
- Inspect `src/index.css` for theme-related regressions.

## Validation commands {#dev.commands}
- `npm run build` — succeeded after installing dependencies.
- `npm run lint` — currently fails from existing unused-import and hook-style issues.

## Known implementation hotspots {#dev.hotspots}
- `src/index.css` — centralized theming surface with broad visual impact.
- `src/App.jsx` — central state controller and mode router.
- `src/utils/evaluator.js` — core calculation semantics and formatting.

## Where to start {#dev.start}
For a classic-calculator visual change, open `src/index.css` first, then inspect `src/components/Display.jsx`, `src/components/StandardKeypad.jsx`, and `src/components/Header.jsx` to see how the shared tokens are consumed.

## Questions this view does not answer {#dev.limits}
This view does not document the full behavior of every calculator mode or every component; it focuses on implementation entry points, shared conventions, and the files most relevant to likely changes.
