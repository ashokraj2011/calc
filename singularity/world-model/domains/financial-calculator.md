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
