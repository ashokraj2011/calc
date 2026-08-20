> **Grounding** · calc @ `1b17ac362bdedf23ef4f7683203fb8e1a715428b` · view: `add-tan-operator` · tier: `full`
> **Generated** 20 August 2026 (2026-08-20T03:02:27.293Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#task.add-tan-operator.tldr}
The inspected commit already includes tan support in the calculator UI and evaluator. If this task is being reintroduced or revalidated, the relevant change surface is the scientific keypad, the app keyboard shortcut handling, and the shared evaluator. The safest implementation is to keep a single expression path for trigonometric functions so that `tan(` behaves consistently in the display, keyboard interactions, and test suite.

## Task interpretation {#task.add-tan-operator.interpretation}
This task is best understood as a change to the calculator’s expression-evaluation domain rather than a standalone UI tweak. The user-visible requirement is that the app should recognize and evaluate a tangent operation in the same way it handles `sin` and `cos`.

## Relevant roles {#task.add-tan-operator.roles}
- Product/UX: verify that a tan entry point is visible and understandable.
- Developer: implement or confirm the change in evaluator and UI wiring.
- QA: test degree/radian behavior and invalid input handling.

## Relevant components {#task.add-tan-operator.components}
- `src/components/ScientificKeypad.jsx` exposes scientific buttons and the tan affordance.
- `src/App.jsx` wires keyboard shortcuts, including `t` for `tan(`.
- `src/utils/evaluator.js` rewrites trig calls for degree-based evaluation.

## Relevant domain models {#task.add-tan-operator.domains}
- `domains/expression-evaluation.md`

## Primary paths and symbols {#task.add-tan-operator.paths}
- `src/utils/evaluator.js:23-30` – trig replacement logic for `sin`, `cos`, `tan`.
- `src/components/ScientificKeypad.jsx:58-76` – scientific button labels and handlers.
- `src/App.jsx:193-206` – keyboard shortcuts for `t` and other functions.

## Expected change flow {#task.add-tan-operator.flow}
1. Confirm the tan entry point in the scientific interface and keyboard shortcuts.
2. Ensure the evaluator rewrites `tan(` consistently for the selected angle unit.
3. Add or update tests around scientific expression evaluation and keyboard entry.
4. Re-run `npm test` and `npm run build`.

## Contracts and invariants to preserve {#task.add-tan-operator.contracts}
- Trig functions must preserve degree/radian behavior.
- Invalid expressions should still surface `Error` rather than crash.
- The public calculator experience should not regress for existing functions such as `sin` and `cos`.

## Tests to add or update {#task.add-tan-operator.tests}
Use the existing Vitest suite in `src/utils/evaluator.test.js` and `src/App.test.jsx` as the primary verification targets. If the task is being implemented from scratch, add a case that exercises `tan(` and verifies it produces a result for a known input (for example a degree-based tangent calculation).

## Commands to run {#task.add-tan-operator.validation}
- `npm test`
- `npm run build`

## Risks and unknowns {#task.add-tan-operator.risks}
The main risk is that tan support could be wired at the UI layer without the evaluator handling the same normalization path, causing inconsistent behavior. Since the inspected commit already contains tan support, a fresh change should verify that behavior rather than assume it is missing.
