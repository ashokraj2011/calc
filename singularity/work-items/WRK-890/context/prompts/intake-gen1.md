# Active Story phase contract: Intake

- Work ID: `WRK-890`
- Work type: `chore`
- Phase: `intake`
- Generation to author: 1
- Required artifact: `artifacts/intake/intake.md`
- Write scope: `artifact-only`
- Approval authority groups: `product-approvers`
- Minimum distinct approvals: 1

## Configured artifact template

# WRK-890 — Chore Intake

## Objective

TODO: Describe the maintenance outcome.

## Scope and validation

TODO: Define affected areas, constraints, and evidence of completion.

# Human clarification checkpoint

The `intake` phase uses clarification mode `required`.
Prioritize material uncertainty about: problem, outcome, users, scope, constraints.

- This checkpoint is required. Pause for at least one human response before authoring.
- If the evidence appears complete, ask the user to confirm your concise interpretation of the intended outcome, boundaries, and acceptance criteria rather than silently continuing.
- Ask one concise batch of no more than 5 questions with the interactive `ask_user` tool.
- Do not ask for information already established by pinned sources, approved upstream artifacts, or the repository world model.
- For each question, explain briefly why the answer changes the governed output. Offer a recommended/default choice when the evidence supports one.
- Do not infer an answer from generic knowledge. The user may explicitly answer “unknown” or defer a non-blocking decision.
- After the response, incorporate confirmed answers into the phase artifact as decisions. Keep explicitly deferred items in Open questions with their impact and owner.
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

## Repository grounding: singularity/world-model/core/summary.md

> **Grounding** · calc @ `6bbcaf1739e310a06af5eb0a9643a54c511b70f8` · view: `core` · tier: `full`
> **Generated** 09 August 2026 (2026-08-09T18:15:52Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.


## TL;DR {#core.tldr}

This repository is a Vite + React calculator application with several modes: standard arithmetic, scientific functions, unit conversion, financial helpers, and a grapher. The app is browser-based and stores user preferences, sound settings, and calculation history in local storage, so it does not depend on a backend service. Main implementation is centered in `src/App.jsx`, `src/components/*`, and `src/utils/evaluator.js`. The current build and lint commands are defined in `package.json`, and the UI is heavily themed through CSS variables in `src/index.css`. The main risk is that presentation and behavior are spread across many small components, so styling changes can be easy to miss and cross-cutting updates could introduce regressions.

## Repository purpose {#core.purpose}

The repository appears to be a single-user calculator product rather than a multi-user business system. Its purpose is to let a person perform calculations in a polished web interface, with extra modes for scientific, unit-conversion, financial, and graphing tasks. The evidence comes from the application entry point and component composition in `src/App.jsx`, the evaluator wrapper in `src/utils/evaluator.js`, and the package manifest in `package.json`.

## Repository type and languages {#core.type}

This is an application repository, not a library or service. The implementation uses JavaScript with React, Vite, and CSS; it also depends on `mathjs` for expression evaluation and `lucide-react` for icons.

## Main applications, packages, or services {#core.components}

- `calculator-ui`: the main web app shell and mode router in `src/App.jsx` and `src/components/*`.
- `evaluation-engine`: expression parsing and formatting logic in `src/utils/evaluator.js`.
- `theme-system`: theme presets and visual styling in `src/index.css` and `src/index.css` variable blocks.

## High-level component map {#core.map}

The app boots from `src/main.jsx`, renders `App`, and then chooses among standard, scientific, converter, financial, or grapher experiences. The display and keypads are modular React components, while the evaluator module handles syntax, percentage, factorial, angle-unit conversion, and error handling. Theme and preference state are driven by `localStorage` and CSS custom properties.

## Main entry points {#core.entrypoints}

- `src/main.jsx:1-10` mounts the React app into the browser.
- `src/App.jsx:14-24` defines the state model for active mode, expression, result, history, and theming.
- `package.json:6-10` exposes the local development, build, lint, and preview commands.

## Primary technologies {#core.tech}

- React 19 and Vite 8 for the UI and build toolchain.
- `mathjs` for expression evaluation.
- CSS custom properties and utility classes for theming.
- Browser `localStorage` for history, sound, and theme preferences.

## Standard build and test commands {#core.commands}

- `npm run dev` — start the local development server.
- `npm run build` — create a production build.
- `npm run lint` — run ESLint.
- No dedicated test script is defined in `package.json`.

## Important risks {#core.risks}

- The visual system is distributed across `src/index.css`, global classes in `src/App.css`, and component-level classes in `src/components/*`, so a style change can require edits in several files.
- The calculator modes share the same state model, which makes layout and interaction changes cross-cutting.
- No automated tests are present in the repository, so UI regressions would be detected only through manual verification.

## Important unknowns {#core.unknowns}

- There is no product roadmap, customer-facing spec, or business requirements document in the repository.
- No backend, authentication layer, or data store beyond browser storage is present.

## Commit, generation date, and freshness warning {#core.freshness}

Inspected commit: `6bbcaf1739e310a06af5eb0a9643a54c511b70f8`. Generated at `2026-08-09T18:43:16.803Z` on `9 August 2026`. The working tree is not clean because the repository currently contains deleted Singularity Flow work-item files; treat this world model as a snapshot of the inspected commit rather than a statement about the current working tree.

## Recommended next view for each common task {#core.routing}

- For product or business framing, start with `views/business.md`.
- For implementation or UI changes, start with `views/business.md` and the task guide for the current task.
- For debugging calculation behavior, inspect `src/utils/evaluator.js` and `src/App.jsx`.


## Repository grounding: singularity/world-model/views/business.md

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


## Repository grounding: singularity/world-model/domains/calculator-ui.md

> **Grounding** · calc @ `6bbcaf1739e310a06af5eb0a9643a54c511b70f8` · view: `domain.calculator-ui` · tier: `full`
> **Generated** 09 August 2026 (2026-08-09T18:15:52Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.


## TL;DR {#domain.calculator-ui.tldr}

The calculator UI is the repository’s primary capability. It combines a single interactive shell with multiple specialized calculator experiences and a shared visual system. The most important design detail for a visual change is that the display, keypad, and global theme tokens are split across several files, while the current application state is centralized in `src/App.jsx`.

## Domain purpose {#domain.calculator-ui.purpose}

This domain covers the calculator’s user-facing experience: arithmetic entry, specialized tools, history, memory, and appearance. It exists because the task concerns appearance and because the UI spans multiple components and modes. Evidence: E1, E3.

## Terminology {#domain.calculator-ui.terminology}

- Expression: the typed calculation string.
- Result: the evaluated output shown in the display.
- Mode: one of standard, scientific, converter, financial, or grapher.
- Theme: a preset visual system applied via CSS variables.

## Business rules {#domain.calculator-ui.rules}

The calculator should produce a predictable result for valid expressions, surface an error state for invalid ones, and preserve context between operations such as memory and history. These rules are implemented in the evaluator and in the app state container. Evidence: E2, E4.

## Owning components {#domain.calculator-ui.components}

- `src/App.jsx` owns state and mode selection.
- `src/components/Display.jsx` owns the result display and utility buttons.
- `src/components/StandardKeypad.jsx` owns the standard keypad layout.
- `src/index.css` owns global visual tokens and theme presets. Evidence: E1, E3.

## Entry points {#domain.calculator-ui.entrypoints}

- `src/main.jsx` mounts the app.
- `src/App.jsx` wires the main calculator shell.

## Main workflows {#domain.calculator-ui.workflows}

1. Select a mode.
2. Enter numbers and operators.
3. Evaluate.
4. Optionally use memory, history, or copy result.

## Data and state {#domain.calculator-ui.state}

The app keeps expression text, result text, active mode, angle unit, sound setting, memory value, theme, and history in React state and browser storage. Evidence: E1, E4.

## Invariants {#domain.calculator-ui.invariants}

- Invalid expressions should resolve to an error state.
- User preferences should persist across reloads via `localStorage`.
- The display and keypad should remain functional across modes. Evidence: E2, E4.

## Change risks {#domain.calculator-ui.risks}

A visual change can break the shared layout if it is applied to only one component. Because the app uses shared CSS variables, changing one theme preset can affect multiple components. Evidence: E3.

## Unknowns {#domain.calculator-ui.unknowns}

The repository does not define a product style guide for a “classic calculator” look, so the implementation must infer the expected visual constraints from the task request.


## Repository grounding: singularity/world-model/task-guides/classic-calculator-look.md

> **Grounding** · calc @ `6bbcaf1739e310a06af5eb0a9643a54c511b70f8` · view: `task.classic-calculator-look` · tier: `full`
> **Generated** 09 August 2026 (2026-08-09T18:15:52Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.


## TL;DR {#task.classic-calculator-look.tldr}

The requested task is to change the calculator’s appearance to feel more like a classic calculator. The work is primarily visual and should be implemented through the shared styling layer and the display/keypad components rather than by introducing a new architecture. The most relevant files are `src/index.css`, `src/components/Display.jsx`, `src/components/StandardKeypad.jsx`, and `src/components/Header.jsx`. The main risk is that the current app uses a modern glassmorphism system across multiple modes, so a classic look likely requires edits in several places to remain consistent.

## Task interpretation {#task.classic-calculator-look.interpretation}

The task is about presentation rather than calculation behavior. The current implementation already supports calculator workflows; the change is to make the UI resemble a classic calculator. The task should therefore preserve existing functions, keyboard handling, and state management while changing the visual language. Evidence: E1, E3.

## Relevant roles {#task.classic-calculator-look.roles}

- UI developer: should edit styles and component classes.
- Product or design reviewer: should confirm that the new look is consistent with the requested “classic calculator” feel.

## Relevant components {#task.classic-calculator-look.components}

- `src/components/Display.jsx`: display panel and utility buttons.
- `src/components/StandardKeypad.jsx`: standard button layout and operators.
- `src/components/Header.jsx`: title bar and mode switcher.
- `src/index.css`: global theme tokens and base button styling. Evidence: E3.

## Relevant domain models {#task.classic-calculator-look.domains}

- `domains/calculator-ui.md` covers the shared UI and state concerns for this change.

## Primary paths and symbols {#task.classic-calculator-look.paths}

- `src/index.css`: global theme variables and shared button classes.
- `src/components/Display.jsx`: `Display` component.
- `src/components/StandardKeypad.jsx`: `StandardKeypad` component.
- `src/components/Header.jsx`: `Header` component.

## Expected change flow {#task.classic-calculator-look.flow}

1. Review the current theme tokens and component class names.
2. Replace or override the modern glassmorphism styling with a flatter, classic calculator palette.
3. Update the display and keypad components to match the new visual language.
4. Verify that the standard, scientific, and other modes still load and remain usable.

## Contracts and invariants to preserve {#task.classic-calculator-look.contracts}

- Existing calculation behavior must remain unchanged.
- The app must keep its current mode switching and keyboard interaction behavior.
- Theme and history persistence remain intact. Evidence: E1, E4.

## Tests to add or update {#task.classic-calculator-look.tests}

No automated tests exist for the UI. The safest validation is a manual run of the app and a review of the rendered calculator in the browser. Evidence: E5.

## Commands to run {#task.classic-calculator-look.commands}

- `npm run dev` to review the UI locally.
- `npm run build` to confirm the app still compiles.

## Risks {#task.classic-calculator-look.risks}

- The current app uses a shared visual system; a classic look may require touching several files.
- If the change is limited to one file, the modern styling may still leak into other calculator modes.

## Unknowns requiring human confirmation {#task.classic-calculator-look.unknowns}

- The repository does not define a classic-calculator visual spec.
- The desired level of fidelity (minimal theme change versus full layout rewrite) is not specified.

## Where to start {#task.classic-calculator-look.start}

Begin with `src/index.css` for the global theme tokens and then inspect `src/components/Display.jsx` and `src/components/StandardKeypad.jsx` to align the display and buttons with the new look.

## Questions this guide does not answer {#task.classic-calculator-look.limits}

This guide does not define the final visual spec or replace design review. It provides the implementation starting points and the most important constraints.

