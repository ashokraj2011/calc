> **Grounding** · calc @ `1b17ac362bdedf23ef4f7683203fb8e1a715428b` · view: `business` · tier: `brief`
> **Generated** 20 August 2026 (2026-08-20T03:02:27.293Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## Snapshot {#biz.brief}
This view covers the calculator app’s main product capabilities: arithmetic, scientific math, unit conversion, financial planning, and graphing. The most important decisions it informs are whether a change affects the core calculator experience, the scientific math surface, or the finance workflow. The key paths are `src/App.jsx`, `src/utils/evaluator.js`, `src/components/ScientificKeypad.jsx`, and `src/components/FinancialCalculator.jsx`. The most common mistake in this area is to treat the product as a generic UI shell when the business impact actually lives in the shared evaluator and finance formulas.
