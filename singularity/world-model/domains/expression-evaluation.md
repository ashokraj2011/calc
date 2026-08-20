> **Grounding** · calc @ `1b17ac362bdedf23ef4f7683203fb8e1a715428b` · view: `expression-evaluation` · tier: `full`
> **Generated** 20 August 2026 (2026-08-20T03:02:27.293Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#domain.expression-evaluation.tldr}
The expression-evaluation domain is the shared math engine behind the calculator experience. It sanitizes user input, translates notation such as percentages and radicals into executable expressions, applies angle-unit rules for trigonometry, and formats results for display. The domain is central to both the scientific and financial modes and is therefore a high-risk change surface.

## Facts {#domain.expression-evaluation.facts}
```yaml
owned_by: ["src/utils/evaluator.js", "src/App.jsx"]
primary_workflow:
  - "user enters expression"
  - "expression is sanitized and normalized"
  - "mathjs evaluates the expression"
  - "result is formatted and displayed"
key_invariants:
  - "degree-based trig functions are rewritten to use deg units"
  - "invalid or non-finite values return Error"
  - "large or tiny numbers are formatted with scientific notation"
```

## Domain purpose {#domain.expression-evaluation.purpose}
This domain turns user-entered math into a reliable calculation experience. It exists to keep a single expression engine consistent across arithmetic, scientific, and financial features without duplicating business logic.

## Terminology {#domain.expression-evaluation.terminology}
- `expression`: the raw user-entered computation string.
- `angleUnit`: either `DEG` or `RAD`, used for trig evaluation.
- `result` / `rawResult`: the display output and the underlying evaluated value.

## Owning components {#domain.expression-evaluation.components}
- `src/utils/evaluator.js` owns normalization, number formatting, unit conversion, and financial formulas.
- `src/App.jsx` coordinates expression state and dispatches evaluations into the shared engine.
- `src/components/ScientificKeypad.jsx` contributes trig and scientific symbols used by the domain.

## Main workflows {#domain.expression-evaluation.workflows}
1. The calculator stores an expression string in app state.
2. `evaluateExpression` sanitizes symbols such as `π`, `%`, `√`, `!`, and `×`/`÷`.
3. For degree mode, `sin`, `cos`, and `tan` calls are rewritten with `deg` units.
4. The result is formatted and returned to the display.

## Data and state {#domain.expression-evaluation.state}
The domain operates on strings and numeric values rather than a database model. It also coexists with local history and memory state in `src/App.jsx`, but the evaluation logic itself is stateless.

## Invariants and risks {#domain.expression-evaluation.risks}
The most important invariant is that scientific and financial modes share the same evaluation rules. A change to parsing or formatting can affect many surfaces at once. The current code also treats invalid input conservatively, which can be good for UX but may hide upstream errors.

## Tests {#domain.expression-evaluation.tests}
The domain is covered by `src/utils/evaluator.test.js` and by the broader app tests in `src/App.test.jsx`.

## Unknowns {#domain.expression-evaluation.unknowns}
The repository does not define a formal spec for edge cases, locale formatting, or external data sources for this domain.
