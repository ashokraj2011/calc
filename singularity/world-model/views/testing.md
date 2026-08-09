> **Grounding** · calc @ `8d115da4dc8005b437ccad387db0721b2ab06bd9` · view: `testing` · tier: `full`
> **Generated** 9 August 2026 (2026-08-09T18:59:39Z) · depth: `standard` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#test.tldr}

This view records what is tested today, what is not tested, and the smallest regression suite that would make a visual change like a “classic calculator” redesign safer. The repository currently supports build and lint validation, but it has no dedicated test runner or test directory.

## Facts {#test.facts}

```yaml
components: [app-shell, display, keypad, evaluator, history, theme]
entrypoints:
  - { id: build-check, path: package.json, line: 6, invocation: "npm run build" }
  - { id: lint-check, path: package.json, line: 6, invocation: "npm run lint" }
key_symbols:
  - { name: App, path: src/App.jsx, line: 14, role: "state and keyboard workflows" }
  - { name: evaluateExpression, path: src/utils/evaluator.js, line: 4, role: "calculation contract" }
commands:
  - { command: "npm run build", purpose: "current passing validation path", source: "package.json:6-10" }
  - { command: "npm run lint", purpose: "current static check", source: "package.json:6-10" }
hotspots:
  - { path: src/App.jsx, reason: "many state transitions and side effects" }
  - { path: src/index.css, reason: "visual system shared by multiple components" }
```

## Test strategy found in the repository {#test.strategy}

The repository does not currently define a formal automated test strategy. There is no `test` script in `package.json`, no dedicated test directory, and no configured unit or browser-test runner. The only validation currently available is build and lint. For that reason, the existing test posture is lightweight and manual: the build command checks the app can bundle, while the lint command exposes code quality issues that are not specific to the UI change.

## Test map {#test.map}

- `src/App.jsx` — the main state and keyboard surface; a regression suite should cover the core interaction flow for digits, operators, equals, clear, percent, and memory actions.
- `src/utils/evaluator.js` — the calculator contract; this is the best unit-test target because it contains arithmetic, percentage, factorial, and angle-unit handling.
- `src/components/Display.jsx` and `src/components/StandardKeypad.jsx` — UI surfaces for standard mode; these should be covered by a browser-level test once a runner is introduced.
- `src/index.css` — shared styling layer; current repo evidence does not include snapshot tests, so visual acceptance should be documented as a manual checklist until a test framework is added.

## Commands and observed outcomes {#test.commands}

Observed command: `npm run build` — succeeded in this environment and emitted a production bundle in `dist/`. Observed command: `npm run lint` — failed with 20 ESLint errors, mostly unused imports/variables and one React hook warning in `src/components/FunctionGrapher.jsx`. These failures should be treated as pre-existing repository debt unless the task specifically requires cleaning them.

## Critical positive scenarios {#test.strategy}

For a visual change, the critical positive scenarios are: standard mode renders correctly, scientific mode still renders, equals evaluates a simple expression, clear resets state, backspace removes the most recent input, and the display shows the expected result. For a classic-calculator style change, the UI should also preserve the existing interaction flow and not break theme switching.

## Critical negative and failure scenarios {#test.strategy}

The most important negative tests are invalid expressions returning `Error`, empty expressions remaining a no-op, and history not growing indefinitely. Because the app uses local storage, a test should also confirm that theme and history updates do not crash when storage is empty or partially invalid.

## Gaps and risk-based regression suite {#test.gaps}

The biggest gap is the absence of an automated harness. A minimal regression suite would cover: evaluating `2 + 3`, clearing the display, toggling the angle unit, and applying a theme change. A more complete suite would add a browser-level check for standard and scientific mode rendering, but that requires introducing a test runner such as Vitest or Playwright.

## Where to start {#test.start}

Start with a unit test around `evaluateExpression` and one smoke test around the main `App` render path. If the goal is specifically a classic-calculator visual change, also prepare a manual checklist for standard-mode display, scientific-mode display, keyboard input, theme switching, history drawer behavior, and copy action.

## Questions this view does not answer {#test.limits}

This view does not provide a comprehensive end-to-end regression suite, because none exists in the repository today. It also does not define pixel-perfect acceptance criteria for a visual redesign because the repository does not include a formal design spec.
