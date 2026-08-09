> **Grounding** · calc @ `0d8703c49dc3ca79c684d93cc42220c922d7cd15` · view: `testing` · tier: `brief`
> **Generated** 09 August 2026 (2026-08-09T22:30:28Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

This view is for test planning and validation. The repository currently has no automated test harness; it exposes `npm run build` and `npm run lint`, but no `test` script or test files. The highest-value targets are the shared evaluator in `src/utils/evaluator.js`, the root app state in `src/App.jsx`, and feature components such as `FunctionGrapher`, `UnitConverter`, and `FinancialCalculator` that depend on browser APIs and local state. The most common mistake here is assuming build/lint coverage is enough; without tests, calculator regressions and browser-specific issues will slip through.
