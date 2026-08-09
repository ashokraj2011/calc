> **Grounding** · calc @ `6bbcaf1739e310a06af5eb0a9643a54c511b70f8` · view: `business` · tier: `full`
> **Generated** 09 August 2026 (2026-08-09T18:15:52Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.


## TL;DR {#biz.tldr}

This repository supports a single-user calculator experience with several user-facing capabilities: basic arithmetic, scientific calculations, unit conversion, financial calculations, and graphing. The product intent is primarily utility and personal productivity rather than a transaction or workflow system. The most important business implications are that the app is local-first, browser-based, and highly visual, and that a change to the interface can affect all calculator modes at once. The business risks are mostly around trust in calculation accuracy, usability, and consistency of the experience.

## Facts {#biz.facts}

```yaml
capabilities:
  - standard arithmetic
  - scientific calculations
  - unit conversion
  - financial calculators
  - function graphing
actors:
  - end-user: uses the calculator directly in the browser
  - power-user: relies on keyboard shortcuts, scientific functions, and history
workflows:
  - enter expression and evaluate
  - use memory and history for repeated calculations
  - switch between calculator modes
rules:
  - percentage and factorial semantics are handled in the evaluator
  - degree/radian handling changes trig behavior
  - invalid expressions display an error state
state:
  - theme, sound, and history persist in browser storage
```

## Capability map {#biz.capabilities}

The repository’s primary business capability is providing calculations in a polished, interactive web app. The visible features are implemented as distinct modes in `src/App.jsx:14-24` and rendered through components such as `Header`, `Display`, `StandardKeypad`, `ScientificKeypad`, `UnitConverter`, `FinancialCalculator`, and `FunctionGrapher`. In practical terms, the application serves a personal productivity need rather than a multi-user workflow. Evidence: E1, E2, E3.

## Actors and user archetypes {#biz.actors}

The code suggests a single end user interacting directly with a browser-based calculator. Two visible user archetypes are present in the UI: a casual user who needs standard arithmetic and a power user who uses scientific functions, memory, keyboard shortcuts, or history. The app does not appear to include sign-in, role-based access, or shared state, so there are no business actors like customers, admins, or support teams encoded in the product. Evidence: E1, E4.

## Business workflows {#biz.workflows}

The main workflows are straightforward and repetitive: enter an expression, evaluate it, inspect the result, and optionally use memory and history for follow-up operations. The repo also supports mode-switching between calculator functions and specialized calculators, which implies a workflow of “choose tool, solve task, keep result.” For a visual redesign task, the key business concern is that the interface feels familiar and trustworthy across these workflows. Evidence: E1, E3.

## Business entities and vocabulary {#biz.entities}

The repository uses a small vocabulary: expression, result, angle unit, memory value, history entry, mode, and theme. These align with the calculator’s user-facing actions rather than a domain model with customers, orders, or transactions. Evidence: E1, E2.

## Business rules and policy locations {#biz.rules}

The rules that affect how the product behaves are implemented in the evaluator rather than in a separate rules engine. The evaluator module handles percentage conversion, factorial parsing, degree/radian trig behavior, and error handling. The UI also imposes a visible rule that calculation history is kept locally and can be cleared. Evidence: E2, E4.

## User-visible failure behavior {#biz.failure}

When an expression is invalid or impossible, the application surfaces an `Error` result and preserves the error state in the UI. The UI also provides clear affordances for backspace, clear-all, and copy result, but there is no evidence of complex retry or recovery flows. Evidence: E2, E3.

## Compliance, data sensitivity, and trust indicators {#biz.compliance}

The product appears low-risk from a compliance perspective. It does not implement authentication, payments, or customer data entry; it stores local preferences and history in browser storage, and it uses clipboard access for copy-result actions. The main trust concern is calculation correctness and predictability, not privacy or regulated data handling. Evidence: E4, E2.

## Business-impact map {#biz.impact}

A change to the look and feel of the calculator is likely to affect the entire product surface because the same shell and state model are reused across modes. A styling change can improve or harm perceived trust and usability in the standard arithmetic flow, scientific mode, and financial mode alike. A change to evaluator semantics would have broader product risk than a change to presentation. Evidence: E1, E3, E2.

## Unknown business assumptions {#biz.unknowns}

The repository does not contain a product requirement document, stakeholder list, or roadmap. As a result, the business intent behind the “classic calculator” look is not encoded in the code; it must be inferred from the UI and the current task phrasing. Evidence: E1, E3.

## Suggested questions for domain owners {#biz.questions}

- Which calculator modes must feel “classic” versus modern?
- Are there any accessibility or usability constraints that a visual redesign must preserve?
- Should the new look remain consistent with the current mode-switching and theme system?

## Where to start {#biz.start}

Start with `src/components/Display.jsx`, `src/components/StandardKeypad.jsx`, and `src/index.css` when working on the calculator’s appearance. These files define the visible display, button layout, and the global visual variables that shape the overall look. Evidence: E3.

## Questions this view does not answer {#biz.limits}

This view does not describe every implementation detail, build pipeline nuance, or non-UI behavior. It also does not resolve product-level requirements beyond what is visible in the code.
