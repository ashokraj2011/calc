> **Grounding** · calc @ `0d8703c49dc3ca79c684d93cc42220c922d7cd15` · view: `domain.calculator` · tier: `full`
> **Generated** 09 August 2026 (2026-08-09T22:30:28Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#domain.calculator.tldr}
This domain model covers the calculator capability surface: arithmetic, scientific functions, unit conversions, financial calculations, and graphing. These capabilities are implemented largely in the same UI shell and share a common evaluation layer in `src/utils/evaluator.js`. The key invariants are expression state, numeric formatting, angle-unit handling, and history persistence. The biggest change risks are regressions in the shared evaluator and mismatches between UI modes and the evaluator’s expectations.

## Facts {#domain.calculator.facts}

```yaml
domain_purpose: calculator experience for browser users
owner_components:
  - { id: app-shell, path: src/App.jsx:14-324 }
  - { id: calculator-engine, path: src/utils/evaluator.js:1-218 }
  - { id: mode-components, path: src/components }
capabilities:
  - arithmetic
  - scientific functions
  - unit conversion
  - financial calculators
  - function graphing
```

## Purpose and terminology {#domain.calculator.purpose}
The calculator domain is the core product capability of the repository. Terms such as expression, result, angle unit, memory, mode, and history are used across the shell and the feature components. Evidence: `e-app-shell`, `e-evaluator`.

## Business rules and invariants {#domain.calculator.rules}
- An expression string and a result string are kept in sync by `App`.
- Successful evaluations are added to a capped history array and persisted to `localStorage`.
- The evaluator returns `Error` for empty, non-finite, or invalid math states.
- Deg/rad behavior is passed from the shell into the evaluator for trig functions. Evidence: `e-app-shell`, `e-browser-storage`, `e-evaluator`.

## Owning components and symbols {#domain.calculator.components}
- `App` holds the state and routes interactions to the correct mode component.
- `evaluateExpression` and `formatNumber` are the core shared semantics.
- `FunctionGrapher`, `UnitConverter`, and `FinancialCalculator` each consume the evaluation layer differently. Evidence: `e-app-shell`, `e-evaluator`, `e-graphing`.

## Main workflows {#domain.calculator.workflows}
- Arithmetic and scientific workflows end at an evaluation result and optional history entry.
- Conversion and financial workflows use the evaluator helpers directly and render the returned values.
- Graphing workflows compile a formula and plot it on a canvas. Evidence: `e-evaluator`, `e-graphing`, `e-history-export`.

## Risks and change impact {#domain.calculator.risks}
The highest-risk changes are those that alter the shared evaluator because all calculator modes depend on it. Browser-specific changes to history or persistence can also create subtle regressions. Evidence: `e-app-shell`, `e-evaluator`, `e-browser-storage`.

## Unknowns {#domain.calculator.unknowns}
The repository does not define product requirements beyond the implemented modes, so the intended completeness of each calculator sub-feature remains partly implicit. Evidence: `e-core-purpose`.
