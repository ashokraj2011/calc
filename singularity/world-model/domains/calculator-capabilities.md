> **Grounding** · calc @ `6b0100c4e4f6f61b03c4e5fcbf7d58052f63d7f6` · view: `domain.calculator-capabilities` · tier: `full`
> **Generated** 20 August 2026 (2026-08-20T04:09:10Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#domain.calculator.tldr}

This domain file focuses on the repository’s core capability surface: calculation, conversion, financial helpers, and graphing. The business value of the repository is concentrated in accurate, predictable computation and a smooth browser-based experience. The key implementation boundary is the shared evaluator utility in src/utils/evaluator.js, while the mode components give the domain its user-facing forms.

## Facts {#domain.calculator.facts}

```yaml
domain: calculator-capabilities
owner_components: [app-shell, expression-engine, mode-views]
primary_workflows: [expression-evaluation, unit-conversion, financial-helpers, graphing]
state: browser-local
```

## Domain purpose {#domain.calculator.purpose}

The repository exists to let a user perform calculations in a browser without relying on a backend service. Its domain is not a business process or data API; it is a user utility that exposes mathematical operations and lightweight planning tools. Evidence: evidence:repo-purpose, evidence:app-modes.

## Terminology {#domain.calculator.terminology}

- Expression: the user-entered math string or formula.
- Result: the evaluated output shown in the display.
- Angle unit: DEG or RAD, used by trigonometric functions.
- Unit category: length, weight, temperature, digital data, or speed.
- Financial helper: EMI, compound interest, or tip splitting calculation.

## Business rules {#domain.calculator.rules}

The domain follows observable rules for accuracy and usability. Percentage and factorial syntax are normalized before evaluation, degree/radian handling differs for trigonometric functions, and outputs are formatted to avoid floating-point artifacts. Financial helpers calculate EMI, compound interest, and tip-split totals using formulas implemented in the shared evaluator. Evidence: evidence:expression-evaluator, evidence:financial-capabilities.

## Owning components {#domain.calculator.components}

The app shell coordinates the domain experience. The expression engine implements calculation semantics and shared formatting rules. The mode components make the capability surface visible: converter for units, financial calculator for money-related operations, and grapher for function visualization. Evidence: evidence:app-modes, evidence:financial-capabilities, evidence:graphing-capability.

## Main workflows {#domain.calculator.workflows}

1. Input an expression and evaluate it.
2. Switch to the converter mode and convert between units.
3. Use financial helpers for EMI, compound interest, or tip splitting.
4. Plot a simple function and inspect the graph.

## Data and state {#domain.calculator.state}

The domain relies on local state within the React app and browser localStorage for theme, sound, and history. There is no evidence of a server-side state store or database. Evidence: evidence:local-storage.

## Invariants and risks {#domain.calculator.risks}

The domain is most sensitive to calculation correctness and user-visible error clarity. A change to the shared evaluator can alter many modes at once, so regressions are likely to be cross-cutting. Evidence: evidence:expression-evaluator.

## Tests {#domain.calculator.tests}

The repository’s tests cover arithmetic, memory, history, keyboard shortcuts, themes, and responsive navigation. They provide regression protection but do not cover every formula edge case. Evidence: evidence:tests.

## Unknowns {#domain.calculator.unknowns}

The domain does not reveal any external data source, regulatory requirement, or deployment-specific behavior. Evidence: evidence:repo-purpose.
