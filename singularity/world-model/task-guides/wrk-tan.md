> **Grounding** · calc @ `04535497a8ba0260c3e84e702f45d2ab13f18742` · branch: `unknown` · worktree: `dirty` · view: `task-guides` · tier: `full`
> **Generated** 17 August 2026 (2026-08-17T21:58:44Z) · depth: `quick` · builder `2.0` · prompt `unknown` · views `core,business`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#task.wrk-tan.tldr}
This task guide supports preparing an intake artifact for WRK-TAN with grounded workflow inputs. The relevant repository grounding is the calculator app’s business capabilities, especially the shared evaluator logic and the financial calculator experience. The minimal change flow is: confirm the task narrative against the repository’s observed features, reference the relevant source locations and tests, and record the grounded assumptions for review. Evidence: `evidence-core-purpose`, `evidence-business-capabilities`, `evidence-financial-workflows`.

## Task interpretation {#task.wrk-tan.task}
The requested work is a workflow intake and review preparation task. In this repository, that means grounding the artifact in the observed calculator product capabilities rather than inferring a backend or enterprise workflow that is not present in source.

## Relevant roles {#task.wrk-tan.roles}
- Product owner or business analyst: use `views/business.md`.
- Developer or reviewer: use the shared evaluator and financial UI locations.

## Relevant components {#task.wrk-tan.components}
- `src/App.jsx` for the product shell and mode selection.
- `src/components/FinancialCalculator.jsx` for the business-facing financial workflows.
- `src/utils/evaluator.js` for the shared rules that should be preserved.

## Primary paths and symbols {#task.wrk-tan.paths}
- `App` in `src/App.jsx`.
- `FinancialCalculator` in `src/components/FinancialCalculator.jsx`.
- `evaluateExpression`, `calculateEMI`, `calculateCompoundInterest`, `calculateTip` in `src/utils/evaluator.js`.

## Expected change flow {#task.wrk-tan.flow}
1. Confirm the intake narrative against the calculator’s observed capabilities.
2. Reference the user-visible workflows and the shared evaluator logic.
3. Record any unknowns or assumptions for human review.
4. Keep the artifact focused on the user experience and business-facing rules that are observable in code.

## Contracts and invariants to preserve {#task.wrk-tan.invariants}
Preserve the existing mode-switching behavior, the shared evaluator semantics, and the current financial-calculation outputs. Avoid introducing backend dependencies or implying regulatory authority.

## Tests and commands {#task.wrk-tan.tests}
- `npm test` to confirm the existing suite remains green.
- `src/App.test.jsx` and `src/utils/evaluator.test.js` should guide any additional validation notes.

## Risks and unknowns {#task.wrk-tan.risks}
The main risk is over-claiming business depth or implying that financial outputs are advisory. The repository does not define compliance requirements or product disclaimers for that domain.
