# Active Story phase contract: Intake

- Work ID: `WRK-1978`
- Work type: `feature`
- Phase: `intake`
- Generation to author: 1
- Required artifact: `artifacts/intake/intake.md`
- Write scope: `artifact-only`
- Approval authority groups: `product-approvers`
- Minimum distinct approvals: 1

## Configured artifact template

# WRK-1978 — Feature Intake

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

> **Grounding** · calc @ `e9d82bcdfd4363c98e447b92108203f18828d6ff` · view: `core` · tier: `brief`
> **Generated** 09 August 2026 (2026-08-09T23:57:03Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## Summary {#core.brief}

This repository is a React + Vite calculator web app with a single-page shell in `src/App.jsx` and a shared UI system in `src/components/` and `src/index.css`. The product exposes standard arithmetic, scientific functions, unit conversion, financial calculators, and a grapher mode through one client-side experience.

The main entry point is `src/main.jsx`, which mounts the app into the browser. The most important implementation module is `src/utils/evaluator.js`, which sanitizes expressions and routes calculations through `mathjs`. The default visual style is already a classic desk-calculator look, driven by CSS variables in `src/index.css`.

The standard validation command is `npm run build`; the app also has `npm run lint`, though lint currently reports many pre-existing issues in the source tree. The largest risk is that UI styling and calculator logic are spread across multiple components, so a small visual change can have broad effects. The working tree is not clean because tracked workflow artifacts have been deleted.


## Repository grounding: singularity/world-model/views/business.brief.md

> **Grounding** · calc @ `87231196b8f0573f53136ad26e33c95e6fb0819a` · view: `business` · tier: `brief`
> **Generated** 10 August 2026 (2026-08-10T15:39:47Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

This view is for product-facing change work. The repository is a browser calculator app with five user-facing modes: standard arithmetic, scientific math, unit conversion, financial calculations, and function graphing. The value proposition is not a backend service but a polished single-page calculator experience with memory, history, themes, and keyboard support. The main files to inspect are `src/App.jsx` for the shell, `src/utils/evaluator.js` for the business rules, `src/components/FinancialCalculator.jsx` and `src/components/UnitConverter.jsx` for specialized workflows, and `src/index.css` for the visual system. The most common mistake is to treat this as a trivial arithmetic widget; it also carries domain-specific calculators and experience features that shape how users perceive quality.


## Repository grounding: singularity/world-model/domains/calculator-ui.md

> **Grounding** · calc @ `e9d82bcdfd4363c98e447b92108203f18828d6ff` · view: `domain.calculator-ui` · tier: `full`
> **Generated** 09 August 2026 (2026-08-09T23:57:03Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#domain.calculator-ui.tldr}

The calculator UI domain covers the front-end experience of entering and evaluating expressions, switching modes, and presenting results. The main implementation surface is the shared app shell plus the display/keypad components and the theme system. The domain matters because a classic-calculator visual change touches multiple components and the shared CSS layer.

## Domain purpose {#domain.calculator-ui.purpose}

This domain captures the user-visible calculator experience: expression entry, display rendering, mode switching, and styling. It is relevant to both functional changes and visual work.

## Terminology and vocabulary {#domain.calculator-ui.terms}

- `expression`: the current math string being built by the user.
- `result`: the last computed or displayed output.
- `activeMode`: one of `standard`, `scientific`, `converter`, `financial`, or `grapher`.
- `theme`: the selected visual variant, including `classic`.

## Owning components {#domain.calculator-ui.components}

- `calculator-shell` in `src/App.jsx` owns the shared state and routing.
- `calculator-ui` in `src/components/` renders the actual calculator surfaces.
- `calculator-theme` in `src/index.css` provides shared tokens and theme variants.

## Main workflows {#domain.calculator-ui.workflows}

1. The user presses a keypad key.
2. `App` updates the expression state.
3. The display re-renders the expression and result.
4. The equals action delegates to the evaluator and updates the history.
5. The selected theme is applied through CSS variables.

## UI invariants {#domain.calculator-ui.invariants}

- The display should show the current expression and the latest result.
- The app should remain usable through keyboard shortcuts as well as button taps.
- Theme selection should update the whole shell through CSS variables, not by hand-rolling per-component colors.

## Risks and unknowns {#domain.calculator-ui.risks}

- The visual system is shared and can cause broad regressions.
- There is no automated regression coverage for the UI layer.
- The repo does not include a formal design-system artifact for the calculator surfaces.


## Repository grounding: singularity/world-model/task-guides/classic-calculator-look.md

> **Grounding** · calc @ `e9d82bcdfd4363c98e447b92108203f18828d6ff` · view: `task.classic-calculator-look` · tier: `full`
> **Generated** 09 August 2026 (2026-08-09T23:57:03Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#task.classic-calculator-look.tldr}

The task is to change the look of the calculator to match a classic calculator. The relevant implementation points are the shared theme tokens in `src/index.css`, the header/display/keypad components in `src/components/`, and the shell state in `src/App.jsx`. The safest approach is to adjust the shared theme variables first and then verify that the main calculator surfaces still render correctly.

## Task interpretation {#task.classic-calculator-look.interpretation}

This is a UI-focused task rather than a logic change. The request is about appearance, layout, and interaction cues that evoke a classic desk calculator. It does not require changing calculation semantics.

## Relevant roles {#task.classic-calculator-look.roles}

- Designer or frontend developer: update the theme and layout.
- QA or reviewer: check the classic look across standard and scientific modes.

## Relevant components {#task.classic-calculator-look.components}

- `src/index.css` for shared colors, borders, shadows, and button styling.
- `src/components/Header.jsx` for branding and mode tabs.
- `src/components/Display.jsx` for the display panel and utility buttons.
- `src/components/StandardKeypad.jsx` for the main keypad buttons.
- `src/App.jsx` only if the task requires changing layout containers or introducing new state.

## Relevant domain models {#task.classic-calculator-look.domains}

- `domains/calculator-ui.md`

## Expected change flow {#task.classic-calculator-look.flow}

1. Adjust theme variables in `src/index.css` to match the desired classic calculator palette and spacing.
2. Review `Header`, `Display`, and the keypad components for any color or spacing mismatches.
3. Keep the existing `classic` theme entry point intact unless the task explicitly asks for a new theme.
4. Verify the app builds and that the display and keypad continue to render correctly.

## Contracts and invariants to preserve {#task.classic-calculator-look.invariants}

- The app should continue to support multiple calculator modes.
- The shared CSS variable approach should stay intact so styling changes remain centralized.
- The calculator logic and keyboard behavior should not change unless explicitly requested.

## Tests to add or update {#task.classic-calculator-look.tests}

No automated tests exist today. The minimum regression check is a manual review of standard and scientific views plus a production build.

## Commands to run {#task.classic-calculator-look.commands}

- `npm run build`
- `npm run lint` (expected to report existing lint issues)

## Risks and unknowns {#task.classic-calculator-look.risks}

- The classic look may require changes in multiple components because the theme is shared across the app.
- There is no visual regression suite today, so the task is more manual than automated.
- The exact visual target is not codified in the repository; the implementation will need to infer it from the request.

