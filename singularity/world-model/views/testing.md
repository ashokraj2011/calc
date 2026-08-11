> **Grounding** · calc @ `4294b2b282ef8049f60c94da9db281200f81390d` · view: `testing` · tier: `full`
> **Generated** 11 August 2026 (2026-08-11T03:06:22.858Z) · depth: `standard` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#test.tldr}
The repository currently has no dedicated test harness or `test` script. The practical verification path is build + lint + manual interaction, with the math evaluator and app state transitions as the most natural future test seams. The most valuable regression targets are expression evaluation, keyboard shortcuts, history persistence, mode switching, and grapher error handling. The current build passed, while lint failed and should be considered a known repository defect rather than a new failure. Related domain file: `domains/calculator-engine.md`; evidence: [evidence:repo:package-manifest], [evidence:testing:coverage-gap], [evidence:validation:build-lint].

## Facts {#test.facts}
```yaml
current_test_harness: none
commands_executed:
  - { command: "npm run build", result: "passed", details: "Vite build completed and emitted dist/ assets" }
  - { command: "npm run lint", result: "failed", details: "20 ESLint errors across source files" }
test_targets:
  - { path: src/utils/evaluator.js, reason: "shared calculation logic" }
  - { path: src/App.jsx, reason: "state machine and keyboard interaction" }
  - { path: src/components/FunctionGrapher.jsx, reason: "syntax-error and rendering path" }
coverage_gap: "No application-level tests were found under src/"
```

## Test strategy found in the repository {#test.strategy}
The repository does not define a testing framework or test runner in `package.json:6-10`. The visible verification strategy is build and lint at the repo level, plus manual UI review for calculator behavior. That means automated regression protection is currently absent.

## Current validation commands {#test.commands}
Executed commands:
- `npm run build` — passed.
- `npm run lint` — failed with 20 errors, including unused imports/variables and a React hook warning in `src/components/FunctionGrapher.jsx`.

## Component-to-test mapping {#test.surface}
- `src/utils/evaluator.js` should be the first target for unit tests because it owns calculator logic, number formatting, unit conversion, and financial helpers.
- `src/App.jsx` should be covered for expression state changes, history updates, memory actions, angle-unit toggling, and keyboard shortcuts.
- `src/components/FunctionGrapher.jsx` should be covered for invalid equations and the error state that is surfaced to the UI.

## Critical positive and negative scenarios {#test.scenarios}
Positive scenarios to preserve: empty expressions resolving to zero, successful evaluation appending history entries, percentage handling, factorial handling, conversion behavior, and round-trip mode switching for angle units. Negative scenarios to cover: malformed expressions, invalid grapher syntax, backspace/clear behavior, and keyboard shortcuts when the active element is an input or select.

## Gaps and risks {#test.gaps}
No application tests were found under `src/` and no test script is configured. That leaves arithmetic, keyboard handling, persistence, and grapher error paths unguarded. The current lint failures also create noise that can mask the introduction of new problems.

## Suggested regression suite {#test.selection}
A minimal regression suite should cover: evaluator functions from `src/utils/evaluator.js`, the state transitions in `src/App.jsx`, and the grapher error path in `src/components/FunctionGrapher.jsx`. If the project adopts a test runner later, `npm run build` and `npm run lint` should remain repository-level gates.

## Questions this view does not answer {#test.limits}
This view does not cover browser compatibility beyond the code paths observed here. It also does not claim tests pass because no automated tests were executed.
