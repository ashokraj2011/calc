> **Grounding** · calc @ `333a66d35e57d5077d68d4164df9b138b001d0ed` · view: `business` · tier: `full`
> **Generated** 10 August 2026 (2026-08-10T23:45:02.386Z) · depth: `standard` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#biz.tldr}

This view captures the calculator app's visible capabilities, the users and workflows implied by the UI, and the business-relevant rules that matter for product or UX changes. The app offers everyday arithmetic plus scientific, conversion, financial, and graphing workflows in one browser experience. The most important business concerns are calculator trust (correct results and clear errors), ease of use (keyboard and mode switching), and feature completeness without making the experience feel cluttered. A Windows-style redesign should preserve the current interaction model while changing the visual language.

## Facts {#biz.facts}

```yaml
components: [app-shell, calculator-ui, expression-engine]
capabilities: [arithmetic, scientific-calculation, unit-conversion, financial-calculation, function-graphing]
actors: [end-user, keyboard-power-user]
state_persisted: [theme, sound, history]
entrypoints:
  - { id: app-root, path: "src/main.jsx:1-10", invocation: "React mount" }
  - { id: app-shell, path: "src/App.jsx:14-323", invocation: "calculator state orchestration" }
```

## Capabilities and value proposition {#biz.capabilities}

The product presents itself as a multi-mode calculator for both casual and advanced users. Its value proposition is a single browser app that covers arithmetic, scientific work, unit conversion, finance, and graphing without requiring multiple specialized tools. The current UI also adds convenience features such as memory, history, sound feedback, keyboard shortcuts, and theme switching, which broaden the product from a simple calculator into a more personalized desktop-like experience. Evidence: `src/App.jsx:14-323`, `src/components/UnitConverter.jsx:14-132`, `src/components/FinancialCalculator.jsx:6-241`, `src/components/FunctionGrapher.jsx:14-212`.

## Actors and user archetypes visible in the code {#biz.actors}

The most visible actor is the end user interacting with the calculator through a browser. The code also implies a second audience: keyboard-driven power users who can trigger operations without clicking buttons. The UI supports a wide range of use cases, from quick arithmetic to more deliberate planning tasks such as loan EMI calculation or unit conversion. Evidence: `src/App.jsx:155-225`, `src/components/Header.jsx:60-142`, `src/components/ScientificKeypad.jsx:15-126`.

## Business workflows {#biz.workflows}

- Everyday arithmetic: enter digits/operators, evaluate, view result, and optionally copy or reuse the result.
- Scientific calculation: switch modes, use functions such as sin/cos/tan, pi, e, square roots, and inverse trig shortcuts.
- Unit conversion: select a category, choose units, enter a value, and see a converted result.
- Financial planning: calculate EMI, compound interest, or tip splits from input fields.
- Graphing: enter a function, inspect the plotted curve, and adjust the view.

These workflows are all implemented in the same shell and can be reached through the header mode switch. Evidence: `src/App.jsx:243-300`, `src/components/Display.jsx:27-95`, `src/components/UnitConverter.jsx:41-131`.

## Entities and vocabulary {#biz.vocabulary}

Key business-facing terms in the interface are expression, result, memory, history entry, angle unit, theme, sound setting, loan amount, interest rate, tenure, bill amount, tip percentage, people count, and function equation. The repository uses these concepts as interface state and user-facing labels rather than as backend entities. Evidence: `src/App.jsx:14-38`, `src/components/FinancialCalculator.jsx:76-238`, `src/components/FunctionGrapher.jsx:14-212`.

## Business rules and policy locations {#biz.rules}

The most important business rules are encoded in the evaluator and financial helpers rather than in a separate policy layer. The evaluator handles percentage conversion, factorial notation, trigonometric angle units, and number formatting; the financial helpers compute EMI, compound interest, and tip splits. Any change that alters their semantics affects user trust. Evidence: `src/utils/evaluator.js:4-218`.

## User-visible failure behavior {#biz.failures}

Invalid expressions surface as an `Error` state. The app also uses the grapher to show an inline syntax error for invalid equations. The history drawer records successful computations but does not save failed ones. These semantics are product-relevant because they shape user confidence. Evidence: `src/App.jsx:115-130`, `src/components/FunctionGrapher.jsx:93-132`, `src/components/Display.jsx:17-24`.

## Compliance and data-sensitivity indicators {#biz.compliance}

The product does not currently appear to collect personal data, authenticate users, or communicate with a remote service. It stores preferences and recent calculations locally in the browser via `localStorage`, so the primary sensitivity concern is local privacy rather than customer-data governance. Evidence: `src/App.jsx:22-34`, `src/App.jsx:39-53`.

## Business-impact map {#biz.impact}

- A visual redesign such as a Windows-style makeover primarily affects perception, usability, and adoption; it should be scoped to the shell, display, buttons, and header.
- Changes to the evaluator or financial formulas affect correctness and trust and should be treated as higher risk than purely aesthetic changes.
- Adding or removing modes changes the scope of the product and should be validated against the existing navigation model.
- Persisted theme, sound, and history settings are convenience features; changing them should not break existing user expectations.

## Unknown business assumptions {#biz.unknowns}

The repository does not document target audiences, desired brand constraints, or success metrics for the calculator experience. The current task says simply to make the app look like Windows Calc, but the repository contains no explicit design spec or acceptance criteria for this visual translation.

## Suggested questions for domain owners {#biz.questions}

- Which visual cues are essential to make the app feel like Windows Calculator without changing the current interactions?
- Which modes or controls are most important for the primary audience?
- Are there specific accessibility or contrast requirements for the new UI?
- Should the app preserve the existing theme options, or should the Windows-style treatment replace them entirely?

## Where to start {#biz.start}

Start with `src/components/Header.jsx`, `src/components/Display.jsx`, and `src/components/StandardKeypad.jsx` for visual polish. Then review `src/index.css` to see the shared theming tokens. Preserve the behavior in `src/App.jsx` and `src/utils/evaluator.js` while changing presentation only.

## Questions this view does not answer {#biz.limits}

This view does not cover implementation details such as file-by-file refactoring plans, test strategy, or runtime deployment concerns. It also does not convert the task into a full visual spec; that remains a design decision for the product or design owner.
