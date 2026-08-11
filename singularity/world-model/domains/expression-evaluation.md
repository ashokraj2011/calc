> **Grounding** · calc @ `08aa77072f09d6113acba4f1eb8db27786a97988` · view: `domain.expression-evaluation` · tier: `full`
> **Generated** 11 August 2026 (2026-08-11T05:43:13Z) · depth: `deep` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#domain.expression-evaluation.tldr}
The expression-evaluation domain is the shared calculator engine represented by `src/utils/evaluator.js`. It defines how the app parses arithmetic, percentages, factorials, constants, trig, unit conversions, and finance formulas; the same semantics underpin the standard/scientific, converter, and financial modes. The main risk is that a change here can silently alter behavior across every calculator mode, so tests should be updated in parallel.

## Domain purpose {#domain.expression-evaluation.purpose}
This domain captures the calculator’s core semantics: turning user-entered expressions into values, formatting them for display, and exposing helper functions for unit conversion and finance. It is the main place where business-like behavior is encoded in the client.

## Terminology {#domain.expression-evaluation.terms}
- Expression: a string entered by the user or created by a keypad action.
- Result: the formatted display output returned by the evaluator.
- Raw result: the numeric value before formatting.
- Unit conversion: a conversion between categories such as length, weight, temperature, digital data, or speed.

## Business rules and implementation points {#domain.expression-evaluation.rules}
- Empty input returns a zero result.
- Percent signs are converted into a division-by-100 expression.
- Factorials are converted into `factorial(n)`.
- Trig functions are wrapped for degree or radian mode.
- Finance helpers return rounded numeric values for EMI, compound interest, and tip splitting.
Evidence: `src/utils/evaluator.js:4-218`.

## Owning components {#domain.expression-evaluation.ownership}
- `src/utils/evaluator.js` — primary implementation.
- `src/App.jsx` — calls the evaluator on equals and stores history.
- `src/components/FinancialCalculator.jsx` and `src/components/UnitConverter.jsx` — use the evaluator helpers directly.

## Main workflows {#domain.expression-evaluation.workflows}
1. User enters an expression and hits equals.
2. `App` calls `evaluateExpression`.
3. The evaluator sanitizes and evaluates the expression.
4. The app stores history and displays the formatted result.

## Data and state {#domain.expression-evaluation.state}
The domain produces a result object rather than mutating long-lived state. The app uses the returned value to update display and history.

## Invariants and change risks {#domain.expression-evaluation.risks}
- The evaluator’s output format is an explicit contract used by the UI tests.
- Changes here can affect arithmetic semantics, rounding, and finance calculations across multiple modes.
- Tests should be updated whenever a behavior change or bug fix touches this domain.

## Tests {#domain.expression-evaluation.tests}
- `src/utils/evaluator.test.js` covers arithmetic, percentages, factorials, trig, constants, and formatting.
- `src/App.test.jsx` covers integration via the shell and keyboard input.

## Unknowns {#domain.expression-evaluation.unknowns}
- No server-side or distributed version of this evaluator exists in the repository.
- No formal schema or API contract defines how the evaluator should behave beyond the tests and implementation.
