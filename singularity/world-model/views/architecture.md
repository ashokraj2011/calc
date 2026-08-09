> **Grounding** · calc @ `0d8703c49dc3ca79c684d93cc42220c922d7cd15` · view: `architecture` · tier: `full`
> **Generated** 09 August 2026 (2026-08-09T22:30:28Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#arch.tldr}
This view summarizes the calculator’s architecture as a single-page client app with one orchestrating root component and several feature-oriented UI modules. The main boundary is `src/App.jsx` for state and navigation; the shared evaluation layer is `src/utils/evaluator.js`; feature UIs are composed around this boundary. The most important runtime relationships are expression state → evaluator → history/localStorage and mode selection → feature component rendering. The architecture is simple and coherent, but it couples browser-specific concerns and stateful UI behavior into the root shell.

## Facts {#arch.facts}

```yaml
components:
  - { id: app-shell, path: src/App.jsx:14-324, role: "root orchestrator" }
  - { id: calculator-engine, path: src/utils/evaluator.js:1-218, role: "shared evaluation logic" }
  - { id: mode-components, path: src/components, role: "feature-specific UI modules" }
entrypoints:
  - { id: html-entry, path: index.html:1-14, invocation: "browser mount" }
  - { id: react-bootstrap, path: src/main.jsx:1-10, invocation: "React bootstrap" }
runtime_flows:
  - { name: arithmetic, path: src/App.jsx:55-130, notes: "expression state flows into evaluation and history" }
  - { name: mode-switching, path: src/App.jsx:227-323, notes: "header selection changes rendered component" }
  - { name: graphing, path: src/components/FunctionGrapher.jsx:21-133, notes: "user-entered formulas compile and draw to canvas" }
```

## System context {#arch.context}
The repository is a single-page browser application rather than a service-oriented system. The HTML shell loads the React entry module, which renders the root `App` component. There is no backend or data store in the repository; state and persistence remain client-side. Evidence: `e-entry-html`, `e-entry-main`, `e-app-shell`.

## Component responsibilities {#arch.components}
- `App` is the architecture center. It owns the current expression, result, calculator mode, history, theme, sound, and modal overlays.
- `src/utils/evaluator.js` is the shared domain engine. It normalizes input symbols, evaluates expressions via `mathjs`, formats numeric output, and provides unit conversion and financial helper functions.
- `src/components/` is the feature composition layer for standard/scientific keypad UIs, unit conversion, financial calculator, graphing, history drawer, and shortcuts modal.
Evidence: `e-app-shell`, `e-evaluator`, `e-graphing`.

## Dependency and data flow {#arch.dependencies}
The strongest architectural dependency is from the root shell into the evaluator and feature components. The arithmetic flow is state-driven: keypad handlers update `expression`, `App` calls `evaluateExpression`, and successful results are pushed into `history` and persisted to `localStorage`. For graphing, the component compiles the user equation and draws directly on a canvas without a dedicated service boundary. Evidence: `e-app-shell`, `e-browser-storage`, `e-graphing`.

## Interfaces and contracts {#arch.contracts}
The most meaningful contracts here are component props and shared utility functions rather than network protocols. `App` passes callbacks into the keypad/display components, and `src/utils/evaluator.js` exposes stable functions such as `evaluateExpression`, `convertUnits`, and the financial helpers. The graphing component receives only the equation string and sound settings; it does not depend on a backend API. Evidence: `e-evaluator`, `e-graphing`.

## Runtime workflows {#arch.runtime}
- Arithmetic workflow: digit/operator/equals actions update state and optionally write history.
- Mode switching workflow: compact header actions switch between feature components without reloading the page.
- History workflow: successful evaluations are stored in a capped array and exported as a text file from the drawer.
Evidence: `e-app-shell`, `e-browser-storage`, `e-history-export`.

## Architectural risks and debt {#arch.risks}
The architecture is intentionally simple, but the main coupling risk is that browser-specific concerns live in the root shell. Theme, sound, history, keyboard shortcuts, and mode selection all share one stateful owner, which makes the component more complex over time. The graphing implementation is also a low-level canvas rendering path embedded in a component rather than a reusable renderer. Evidence: `e-app-shell`, `e-graphing`.

## Where to start {#arch.start}
Start with `src/App.jsx` for end-to-end behavior and `src/utils/evaluator.js` for reusable logic. The feature components under `src/components/` are the right second stop for mode-specific behavior. Evidence: `e-app-shell`, `e-evaluator`.

## Questions this view does not answer {#arch.limits}
It does not define product requirements, deployment topology, or any backend security model because none are present in the repository snapshot. Evidence: `e-core-purpose`, `e-test-gap`.
