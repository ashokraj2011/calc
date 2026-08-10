> **Grounding** · calc @ `e9d82bcdfd4363c98e447b92108203f18828d6ff` · view: `architecture` · tier: `full`
> **Generated** 09 August 2026 (2026-08-09T23:57:03Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#arch.tldr}

The app is a single-page React front end with a thin state shell and many presentational modules. The most important architectural boundary is the split between `src/App.jsx` (state and behavior), `src/components/` (views/panels), and `src/utils/evaluator.js` (numeric logic). The design is simple and cohesive, but visual and interaction changes touch several components because the styling layer is shared.

## Facts {#arch.facts}

```yaml
components: [calculator-shell, calculator-ui, calculator-engine, calculator-theme]
entrypoints:
  - { id: entry-main, path: src/main.jsx, line: 1, invocation: "ReactDOM createRoot" }
key_symbols:
  - { name: App, path: src/App.jsx, line: 14, role: "central state and mode router" }
  - { name: evaluateExpression, path: src/utils/evaluator.js, line: 4, role: "expression evaluation wrapper" }
commands:
  - { command: "npm run build", purpose: "production build", source: "package.json:6-10" }
hotspots:
  - { path: src/App.jsx, reason: "contains the largest state surface and shared handlers" }
```

## System context {#arch.context}

The repository is a front-end-only application. It has no backend service, database, or API layer. The runtime is a browser page served by Vite, and the main app state lives in memory and in browser storage. That makes the system easy to reason about, but it also means all logic is executed client-side.

## Component responsibilities {#arch.components}

- `src/App.jsx` is the orchestration layer. It manages expression/result/history/theme/sound state, keyboard shortcuts, and mode selection. It also routes to the standard, scientific, converter, financial, and grapher views.
- `src/components/` hosts the concrete views. `Display` renders the expression/result area, the keypads render calculator interactions, `FinancialCalculator` and `FunctionGrapher` provide specialized panels, and `Header` provides navigation and settings.
- `src/utils/evaluator.js` isolates arithmetic and financial logic. Its helpers are used by the UI layer and keep numeric formatting and calculation behavior out of the React components.
- `src/index.css` provides the shared design tokens and theme variants for the entire app.

## Dependency graph {#arch.graph}

The app shell depends on UI components and the evaluator. The UI components depend on the theme tokens and shared audio helper. The financial and grapher modules depend on the evaluator helpers rather than on one another. There is no service boundary or cross-module API beyond the React props passed between component layers.

## Interfaces and contracts {#arch.contracts}

The main contract is the prop-based interface between `App` and its child components. Key examples are the keypad props such as `onDigit`, `onOperator`, `onEquals`, and `onMemory`, and the display props such as `expression`, `result`, and `setAngleUnit`. These interfaces are lightweight and simple, but they are the main mechanism for state flow.

## Data ownership {#arch.data}

Expression state, calculation history, and user preference state are owned by `App` and persisted via `localStorage` in the browser. The evaluator module consumes expressions but does not own UI state. The financial and grapher panels hold their own local form state, which is derived from the evaluator outputs.

## Security and trust boundaries {#arch.security}

The main trust boundary is between browser-side user input and the evaluator. The app sanitizes expressions before evaluation, but the runtime still executes math expressions in the client. No secrets, authentication, or external backend trust boundary exists. The browser storage layer is a local persistence boundary only.

## Architectural risks {#arch.risks}

- The app shell is a large hub for state and UI orchestration; future features may increase its complexity.
- The visual design is spread across shared CSS variables and multiple component classes, so style regressions can be hard to isolate.
- The absence of an API layer means the architecture is intentionally simple, but it limits composability for more advanced workflows.

## Where to start {#arch.start}

Start with `src/App.jsx` for state flow, `src/utils/evaluator.js` for numeric behavior, and `src/index.css` for visual implementation.

## Questions this view does not answer {#arch.limits}

This view does not cover business requirements, release process, or detailed test coverage. It also does not attempt to document every component in the tree.
