> **Grounding** · calc @ `0d8703c49dc3ca79c684d93cc42220c922d7cd15` · view: `testing` · tier: `full`
> **Generated** 09 August 2026 (2026-08-09T22:30:28Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#test.tldr}
This repository does not currently have an automated test harness. The project declares build and lint scripts, but there is no `test` script and no `*.test.*` or `*.spec.*` files in the tree. The most valuable near-term tests would target the evaluator module, the root app state machine, and the mode-specific components that depend on browser APIs such as `localStorage`, canvas, and clipboard. The current evidence supports a manual-verification workflow rather than an automated regression suite.

## Facts {#test.facts}

```yaml
observed_tests: []
entrypoints:
  - { path: package.json:6-10, note: "build and lint scripts only" }
  - { path: src/App.jsx:14-324, note: "stateful UI shell" }
  - { path: src/utils/evaluator.js:4-218, note: "calculator logic" }
commands:
  - { command: "npm run build", purpose: "build validation", status: observed, source: "package.json:6-10" }
  - { command: "npm run lint", purpose: "lint validation", status: observed, source: "package.json:6-10" }
```

## Test strategy found in the repository {#test.strategy}
The repository currently exposes only build and lint commands. There is no test runner configuration, no test script in `package.json`, and no test files under the source tree. That means the current strategy is effectively manual verification plus static checks. Evidence: `e-test-gap`, `e-build`, `e-lint`.

## Component-to-test map {#test.map}
- `src/utils/evaluator.js` is the highest-value unit-test target. It contains logic for arithmetic, percentages, factorials, trig angle units, unit conversion, and financial calculations.
- `src/App.jsx` should be tested for state transitions around expression entry, equals, clear/backspace, memory operations, history updates, and keyboard shortcuts.
- `src/components/Display.jsx`, `src/components/StandardKeypad.jsx`, `src/components/ScientificKeypad.jsx`, `src/components/UnitConverter.jsx`, and `src/components/FinancialCalculator.jsx` are good component-test candidates for render and interaction flows.
- `src/components/FunctionGrapher.jsx` needs focused rendering tests because it depends on canvas rendering and `math.compile`. Evidence: `e-app-shell`, `e-evaluator`, `e-graphing`.

## Workflow-to-test mapping {#test.workflow}
- Arithmetic workflow: digits/operators/equals and error cases.
- Mode switching workflow: standard/scientific/converter/financial/grapher routing.
- Persistence workflow: `localStorage` theme/sound/history behavior.
- History workflow: open drawer, reuse item, export, clear history.
- Graphing workflow: valid and invalid equations, canvas rendering, and error state. Evidence: `e-app-shell`, `e-browser-storage`, `e-history-export`.

## Critical positive and negative scenarios {#test.scenarios}
Positive scenarios include successful arithmetic, trig evaluation in DEG/RAD mode, unit conversions, EMI/compound-interest/tip calculations, and graph rendering for valid expressions. Negative scenarios include invalid syntax, non-finite results, empty expressions, and browser API failures such as missing clipboard or audio context. Evidence: `e-evaluator`, `e-graphing`.

## Validation commands and current status {#test.commands}
- `npm run build`: observed available build path from package metadata; no build artifact validation was performed for this world-model run.
- `npm run lint`: available lint path; the repository currently reports issues in several UI components.
- `npm run test`: not present; no test harness exists. Evidence: `e-build`, `e-lint`, `e-test-gap`.

## Coverage gaps and risk-based regression suite {#test.gaps}
The major coverage gap is that no automated regression suite exists for calculator behavior, browser persistence, or graph rendering. If you add tests, start with evaluator logic and app-level state transitions before moving to canvas and browser-side UI integration. Evidence: `e-test-gap`, `e-graphing`.

## Where to start {#test.start}
Create unit tests around `src/utils/evaluator.js` first, then add component tests for `src/App.jsx` and the mode components that rely on the shared state boundary. Evidence: `e-evaluator`, `e-app-shell`.

## Questions this view does not answer {#test.limits}
It does not describe CI, visual regression, or cross-browser coverage because those are not present in the repository snapshot. Evidence: `e-core-purpose`.
