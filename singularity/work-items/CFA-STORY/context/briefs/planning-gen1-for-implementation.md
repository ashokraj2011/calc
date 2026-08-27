# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `CFA-STORY`
- Producer: `planning` generation 1
- Consumer: `implementation`
- Source: `singularity/work-items/CFA-STORY/artifacts/planning/plan.md`
- Source SHA-256: `54620920db7ce601094ed4014a2b0472bbd418ace586a300fd028af29f05d8c3`

## Summary from “Agent brief”

<!--
Summarize the selected approach, affected surfaces, sequencing, proof strategy, and principal risks
for downstream agents. Keep exact commands and source paths when they are operationally important.
The complete approved plan remains available through its hash-bound expansion reference.
-->

Add a CFA Level I toolkit mode to the existing React calculator shell. Keep the experience browser-local and visually consistent with the current navigation and calculator layout. Use a data-driven topic and calculation registry so each released calculation declares its inputs, validation domain, formula, result label, and formula context. Start with a core representative set, prioritizing time value of money, financial ratios, bond pricing/yield, CAPM, option payoff, portfolio return/risk, and similarly bounded calculator-friendly formulas; expose all nine required topics even where the first release has no calculation. Prove behavior with evaluator/unit tests, focused component tests, production-build timing checks, accessibility inspection, network inspection, and responsive screenshots. Principal risks are scope ambiguity around the exact representative formulas, stale results after input edits, and responsive or accessibility regressions in the shared app shell.

## Test strategy

Each proof must identify the selected calculation and preserve correction-ready input values.

| Clause | Proof |
|---|---|
| SPEC-001 / AC-001 | Component/UI test reaches the CFA mode from existing navigation and confirms the existing calculator shell remains in use. |
| SPEC-002 / AC-002 | Test asserts the selector exposes exactly the nine mandated topic names and permits selection of each. |
| SPEC-003 / AC-003 | Registry contract tests assert required inputs/domains; formula tests and UI tests assert valid values produce a named, current result and formula context. |
| SPEC-004 / AC-004 | Table-driven tests cover empty, malformed, non-finite, and out-of-domain values; UI assertions require actionable guidance, preserved values, and no numeric result. |
| SPEC-005 / AC-005 | Interaction test changes and clears inputs after a valid calculation and asserts the old result is removed or recalculated from current values. |
| SPEC-006 / AC-006 | Browser evidence captures the selected topic, entered inputs, and result together in the existing visual language. |
| NFR-001 | Production-build browser timing harness records 20 consecutive valid calculations with performance timestamps and verifies each result appears within 250 ms. |
| NFR-002 | Existing automated UI tests plus accessibility-tree inspection verify keyboard reachability and accessible names for topics, inputs, validation, and results. |
| NFR-003 | Browser network inspection during the full flow verifies no endpoint receives inputs or results. |
| NFR-004 | Desktop/mobile screenshots and an overflow assertion verify no horizontal scrolling at supported sizes. |

## Risks and rollback

The largest product risk is an overly broad or inconsistent representative calculation set. Detect it by reviewing the registry against the nine-topic boundary and the approved scope before implementation; mitigate it by keeping the registry explicit and leaving unselected topics navigation-only. A domain or formula error is detected by table-driven unit tests with known values and invalid-domain cases. Stale results are detected by input-change and clear-action tests; the result state must be invalidated synchronously with input updates. Accessibility and layout regressions are detected by keyboard/accessibility-tree checks and desktop/mobile overflow screenshots. Privacy regressions are detected by the browser network inspection. Timing regressions are detected by the 20-run production-build measurement.

Rollback is limited to the feature surfaces: remove the CFA navigation entry, component, registry, and their tests/styles, leaving the existing calculator modes and evaluator behavior unchanged. Because there is no backend migration or persisted CFA data, rollback requires no data migration; any browser-local CFA state should be treated as disposable.
