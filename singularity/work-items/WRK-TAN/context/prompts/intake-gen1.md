# Active Story phase contract: Intake

- Work ID: `WRK-TAN`
- Work type: `feature`
- Phase: `intake`
- Generation to author: 1
- Required artifact: `artifacts/intake/intake.md`
- Write scope: `artifact-only`
- Approval authority groups: `product-approvers`
- Minimum distinct approvals: 1

## Configured artifact template

# WRK-TAN — Feature Intake

## User and outcome

TODO: Identify the user, problem, and measurable outcome.

## Proposed capability

TODO: Describe the requested capability without prescribing implementation.

## Scope, constraints, and stakeholders

TODO: Record boundaries, dependencies, urgency, and stakeholders.

# Human clarification checkpoint

The `intake` phase uses clarification mode `required`.
Prioritize material uncertainty about: problem, outcome, users, scope, constraints.

- This checkpoint is required. Pause for at least one human response before authoring.
- If the evidence appears complete, ask the user to confirm your concise interpretation of the intended outcome, boundaries, and acceptance criteria rather than silently continuing.
- Ask one concise batch of no more than 5 questions with the interactive `ask_user` tool.
- Derive every question only from the current Story’s pinned sources, approved upstream artifacts, repository world model, or contradictions among them. Never reuse example questions or placeholder text from templates.
- Do not ask for information already established by pinned sources, approved upstream artifacts, or the repository world model.
- Treat pinned evidence as fact. Label every hypothesis or proposed design explicitly; never convert it into an acceptance or specification decision without human confirmation.
- For each question, explain briefly why the answer changes the governed output. Offer a recommended/default choice when the evidence supports one.
- Do not infer an answer from generic knowledge. The user may explicitly answer “unknown” or defer a non-blocking decision.
- After the response, incorporate confirmed answers into the phase artifact as decisions. Keep explicitly deferred items in Open questions with their impact and owner.
- Record the accepted response batch with `singularity-flow clarification record intake --response-file <json>`. The record is bound to this exact prompt and prospective generation.
- A material unresolved decision remains blocking through specification publication; do not hide it behind a recommendation or placeholder.
- If `ask_user` is unavailable, print the numbered questions and stop before authoring or publication. Never turn missing interactivity into silent assumptions.
- Do not author or publish the governed output until the checkpoint is complete.

# Product owner agent

Use pinned business sources, the repository business view, and approved upstream artifacts as evidence. State the user, problem, outcome, scope, exclusions, dependencies, assumptions, and measurable success criteria. Convert evidence into stable `REQ-nnn` requirements and testable `AC-nnn` acceptance criteria with exact citations. Separate confirmed needs, proposals, and unresolved questions. Do not invent business intent or grant approval.

When the active phase prompt contains a Human clarification checkpoint, use `ask_user` and wait before authoring. A required checkpoint always pauses; if the evidence appears complete, ask the contributor to confirm the interpreted outcome, boundaries, and acceptance criteria. Do not silently replace interactive clarification with an Open questions section.

## Remote skills

| ID | URL | Phases | Optional | Max bytes |
|---|---|---|---|---|

## Remote artifact templates

| ID | URL | Phases | Optional | Max bytes |
|---|---|---|---|---|

## Remote generated artifacts

| ID | URL template | Phase | Target | Optional | Max bytes |
|---|---|---|---|---|---|

<!-- required repository world-model grounding -->

## Repository grounding: singularity/world-model/core/summary.brief.md

> **Grounding** · calc @ `08aa77072f09d6113acba4f1eb8db27786a97988` · view: `core` · tier: `brief`
> **Generated** 11 August 2026 (2026-08-11T05:43:13Z) · depth: `deep` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## Summary {#core.summary}
ApexCalc is a React + Vite single-page calculator app with standard, scientific, converter, financial, and grapher modes. The main implementation is in `src/App.jsx` (mode routing and shared state), `src/utils/evaluator.js` (math, unit conversion, finance, number formatting), and `src/components/` (mode-specific UI). The primary runtime entry points are `src/main.jsx` and `src/App.jsx`. The standard validation commands are `npm test`, `npm run build`, and `npm run lint`; `npm test` and `npm run build` passed during this inspection, while `npm run lint` currently fails with existing issues. The largest risk is that calculator behavior is tightly coupled to UI state and the lint baseline is not currently clean.


## Repository grounding: singularity/world-model/views/business.brief.md

> **Grounding** · calc @ `04535497a8ba0260c3e84e702f45d2ab13f18742` · branch: `unknown` · worktree: `dirty` · view: `business` · tier: `brief`
> **Generated** 17 August 2026 (2026-08-17T21:58:44Z) · depth: `quick` · builder `2.0` · prompt `unknown` · views `core,business`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## Orientation {#biz.orientation}
This view covers the calculator app’s product-facing capabilities: arithmetic, scientific operations, unit conversion, financial estimation, and function graphing. The main decision areas are the user workflows exposed in `src/App.jsx`, the shared business rules in `src/utils/evaluator.js`, and the financial workflow UI in `src/components/FinancialCalculator.jsx`. The most common mistake is to treat the financial features as authoritative financial products; they are lightweight estimator experiences. Evidence: `evidence-core-purpose`, `evidence-financial-workflows`.


## Repository grounding: singularity/world-model/domains/financial-calculator.md

> **Grounding** · calc @ `04535497a8ba0260c3e84e702f45d2ab13f18742` · branch: `unknown` · worktree: `dirty` · view: `domains` · tier: `full`
> **Generated** 17 August 2026 (2026-08-17T21:58:44Z) · depth: `quick` · builder `2.0` · prompt `unknown` · views `core,business`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#domain.financial-calculator.tldr}
The financial-calculator domain in this repository is built around a compact set of estimator workflows: loan EMI, compound interest, and tip splitting. The logic is shared through `src/utils/evaluator.js`, while the UI is concentrated in `src/components/FinancialCalculator.jsx`. The domain is important because it is one of the repository’s clearest business-facing capabilities and it should be treated as a planning aid rather than a regulated financial service. Evidence: `evidence-financial-workflows`, `evidence-evaluator-rules`.

## Facts {#domain.financial-calculator.facts}
```yaml
domain_purpose: estimate common financial planning scenarios for users in a browser calculator app
owning_components:
  - { id: financial-tools, path: "src/components/FinancialCalculator.jsx:6-241" }
  - { id: expression-engine, path: "src/utils/evaluator.js:160-218" }
terminology:
  - principal
  - annual rate
  - tenure years
  - bill amount
  - tip percentage
  - people count
```

## Domain purpose {#domain.financial-calculator.purpose}
This domain exists to make simple financial planning calculations available within the app without a backend. It supports common estimation tasks that users might perform quickly while shopping, comparing loans, or splitting a bill.

## Terminology {#domain.financial-calculator.terms}
The core terms are loan amount, interest rate, tenure, initial deposit, annual return, bill total, tip percentage, and people count. The UI renders these as labels and input fields, while the evaluator module converts them into results.

## Business rules {#domain.financial-calculator.rules}
The domain uses straightforward formulas for EMI, compound interest, and tip splitting. The repository does not show rounding rules beyond the values produced by the evaluator; the formulas are observable in `src/utils/evaluator.js` and should be preserved if the UI is changed.

## Owning components {#domain.financial-calculator.components}
- `src/components/FinancialCalculator.jsx`: hosts the three sub-tabs and their input controls.
- `src/utils/evaluator.js`: computes the actual financial results and formats their output.

## Main workflows {#domain.financial-calculator.workflows}
1. Loan EMI estimation.
2. Compound interest projection.
3. Tip splitting and per-person total.

## Invariants and risks {#domain.financial-calculator.risks}
The most important invariant is that the UI and calculator logic remain aligned around the same inputs and output labels. The main risk is overstating precision or implying that a result is authoritative financial advice.

## Tests {#domain.financial-calculator.tests}
The behavioral regression tests in `src/utils/evaluator.test.js` cover basic arithmetic and evaluator formatting, but not the financial sub-tabs directly. The app-level tests in `src/App.test.jsx` exercise mode switching and general UI behavior.

## Unknowns {#domain.financial-calculator.unknowns}
The repository does not define product disclaimers, rounding policy, or compliance expectations for the financial calculations.


## Repository grounding: singularity/world-model/task-guides/wrk-tan.md

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

