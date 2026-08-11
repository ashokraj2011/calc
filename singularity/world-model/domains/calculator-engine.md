> **Grounding** · calc @ `4294b2b282ef8049f60c94da9db281200f81390d` · view: `domain.calculator-engine` · tier: `full`
> **Generated** 11 August 2026 (2026-08-11T03:06:22.858Z) · depth: `standard` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#domain.calculator-engine.tldr}
The calculator-engine domain is the shared logic layer that turns button presses and keyboard input into computed results for standard/scientific, converter, financial, and grapher modes. The core semantics are implemented in `src/utils/evaluator.js`, while the app shell coordinates them. The main risk is semantic drift: if a change alters the evaluator without checking the app shell or mode components, the UI can become inconsistent even when it builds.

## Facts {#domain.calculator-engine.facts}
```yaml
owner: calculator-engine
primary_file: src/utils/evaluator.js
consumers: [src/App.jsx, src/components/UnitConverter.jsx, src/components/FinancialCalculator.jsx, src/components/FunctionGrapher.jsx]
state: local-only
```

## Domain purpose {#domain.calculator-engine.purpose}
The domain exists to provide consistent calculation behavior across calculator modes and user input methods: keypad, keyboard shortcuts, and mode-specific controls.

## Terminology {#domain.calculator-engine.terminology}
- `expression`: the current typed input string.
- `result`: the last computed display value.
- `angleUnit`: the shared `DEG`/`RAD` toggle that affects trig evaluation.
- `history`: browser-persisted list of successful evaluations.

## Owning components {#domain.calculator-engine.owners}
`src/utils/evaluator.js` owns evaluator semantics. `src/App.jsx` consumes those results and persists history. Mode-specific components consume the shared semantics indirectly through the app shell or directly through evaluator utilities.

## Main workflows {#domain.calculator-engine.workflows}
- Standard/scientific workflow: button or keyboard input -> evaluation -> result update -> history append.
- Converter workflow: selection -> unit conversion -> formatted output.
- Financial workflow: form input -> EMI/interest/tip calculation.
- Grapher workflow: equation input -> compile -> render or error state.

## Invariants {#domain.calculator-engine.invariants}
- Blank expressions should resolve to a neutral result rather than throw.
- Successful evaluations should update history; errors should not corrupt the current result state.
- Angle-unit toggling should affect trig evaluation.

## Tests and change risks {#domain.calculator-engine.risks}
There is no automated regression suite for this domain yet, so behavior changes are riskier than they appear. The shared evaluator is a high-impact surface that can affect several modes at once.
