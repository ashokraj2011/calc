> **Grounding** · calc @ `04535497a8ba0260c3e84e702f45d2ab13f18742` · branch: `unknown` · worktree: `dirty` · view: `business` · tier: `brief`
> **Generated** 17 August 2026 (2026-08-17T21:58:44Z) · depth: `quick` · builder `2.0` · prompt `unknown` · views `core,business`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## Orientation {#biz.orientation}
This view covers the calculator app’s product-facing capabilities: arithmetic, scientific operations, unit conversion, financial estimation, and function graphing. The main decision areas are the user workflows exposed in `src/App.jsx`, the shared business rules in `src/utils/evaluator.js`, and the financial workflow UI in `src/components/FinancialCalculator.jsx`. The most common mistake is to treat the financial features as authoritative financial products; they are lightweight estimator experiences. Evidence: `evidence-core-purpose`, `evidence-financial-workflows`.
