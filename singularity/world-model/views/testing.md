> **Grounding** · calc @ `08aa77072f09d6113acba4f1eb8db27786a97988` · view: `testing` · tier: `full`
> **Generated** 11 August 2026 (2026-08-11T05:43:13Z) · depth: `deep` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#test.tldr}
The repository’s test strategy is mostly UI regression and evaluator regression. The suite is driven by Vitest and Testing Library, with jsdom and canvas stubs in `src/test/setup.js`. In this inspection, `npm test` passed with 31 tests across three files. The most valuable tests are the evaluator regression suite (behaviors that must remain stable) and the app regression suite (mode switching, history, memory, themes, and shortcuts). The gap is that there are no dedicated security or performance tests.

## Facts {#test.facts}
```yaml
framework: Vitest
environment: jsdom
setup: src/test/setup.js
test_files:
  - src/App.test.jsx
  - src/utils/evaluator.test.js
  - src/build.test.js
commands:
  - { command: "npm test", status: observed, result: "31 passed" }
  - { command: "npm run build", status: observed, result: "succeeded" }
coverage_gaps:
  - security tests
  - performance tests
  - accessibility tests
```

## Test strategy {#test.strategy}
The repository follows a layered test approach:
- Unit-style evaluator tests cover arithmetic, percentages, factorials, trig behavior, constants, and formatting.
- UI regression tests cover the app shell, keyboard shortcuts, history drawer, theme selection, mode switching, and memory operations.
- Build verification is covered by `src/build.test.js` to ensure the production bundle can be emitted.
Evidence IDs: `E-004`, `E-005`.

## Test map {#test.map}
- `src/utils/evaluator.test.js` — covers semantics that must remain unchanged, including arithmetic, percentages, factorials, trig conversion, constants, and number formatting.
- `src/App.test.jsx` — covers end-to-end behavior in the UI: arithmetic entry, memory, backspace/clear, history, themes, and keyboard modal.
- `src/build.test.js` — verifies `npm run build` succeeds and produces `dist/index.html`.
- `src/test/setup.js` — stubs `matchMedia`, `AudioContext`, and canvas methods so component tests run in jsdom.

## Commands and observed results {#test.commands}
Executed during inspection:
- `npm test` — passed: 3 files, 31 tests, 0 failures.
- `npm run build` — passed and emitted `dist/index.html` plus asset bundles.
- `npm run lint` — failed with 20 existing ESLint issues; this is a quality baseline issue rather than a test failure.
Evidence: command output from the repository root.

## Critical positive and negative scenarios {#test.gaps}
The current suite explicitly validates the happy path and common regressions, but it does not include dedicated negative tests for security boundaries or resource-heavy inputs. The evaluator tests do include malformed-expression and divide-by-zero-style error handling, which is valuable for regression detection. Evidence: `src/utils/evaluator.test.js:47-57`, `src/App.test.jsx:31-126`.

## Coverage gaps and risk-based regression suite {#test.gaps}
Recommended additions for future confidence:
- Add targeted tests around theme token application and keyboard shortcuts for each mode.
- Add tests for clipboard/history export behavior and storage edge cases.
- Add tests for invalid function syntax in the grapher mode and for audio-disabled behavior.
- Add security-focused tests only if the app gains auth, network, or command-execution paths.

## Where to start {#test.start}
Start with the test file that matches the change area: `src/utils/evaluator.test.js` for the evaluator, `src/App.test.jsx` for shell/UI behavior, and `src/build.test.js` for build regressions.

## Questions this view does not answer {#test.limits}
This view does not attempt to measure coverage percentages or establish a formal release-quality acceptance matrix. It also does not assert that the app is free from untested edge cases beyond the observed suite.
