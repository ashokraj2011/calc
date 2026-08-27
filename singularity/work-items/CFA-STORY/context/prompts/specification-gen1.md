# Active Story phase contract: Specification

- Work ID: `CFA-STORY`
- Work type: `spec-driven-standard`
- Phase: `specification`
- Generation to author: 1
- Repository root: `/Users/ashokraj/Downloads/pocalc/calc--calc-app/.singularity-flow/story-worktrees/CFA-STORY/repos/calc`
- Work-item directory: `singularity/work-items/CFA-STORY`
- Required artifact: `singularity/work-items/CFA-STORY/artifacts/specification/spec.md`
- Authored content: at least 400 UTF-8 bytes; managed metadata and approved-input blocks do not count.
- Required Markdown headings: none beyond the configured template.
- Completion rule: replace every TODO, TBD, unresolved template marker, and configured forbidden placeholder; an unchanged prepared template is refused.
- Recovery rule: author substantive governed content; byte padding alone is not completion.
- Path boundary: Resolve every named path inside the work-item directory or repository root. Never search the filesystem outside this repository.
- Write scope: `artifact-only`
- Intelligence: world-model=`inherit`, AST=`available on request; ordinary repository file access is the default`, agent-briefs=`inherit`
- Approval authority groups: `product-approvers`
- Minimum distinct approvals: 1

## Configured artifact template

# Specification — CFA-STORY

<!--
Scenarios come first, and general requirements come after them `[SPK:REQ-068]`. That ordering is the
template's opinion: a requirement written before anyone has described the situation it serves tends
to describe the system instead of the need, and nobody notices until verification.

Where the current Story evidence leaves something material unknown, say so with a marker rather
than guessing. Use this syntax:

    [NEEDS CLARIFICATION: <one question grounded in the current Story evidence>]

Replace the angle-bracketed placeholder; never copy or ask it as written. The question must be one
non-empty line and must arise from the pinned sources, approved upstream artifacts, repository world
model, or a contradiction among them. Markers are extracted the same way clauses are, so a marker
inside fenced or inline code is ignored `[SPK:REQ-063]`. This phase blocks publication while any
marker is unresolved, and a marker is only resolved when a later generation removes it *and* records
the answer `[SPK:REQ-067]` — deleting the text alone is an integrity failure, not an answer.
-->

## Agent brief

<!--
Summarize the approved intent for downstream agents in a compact, standalone form. Include the
problem, intended outcome, principal actors, most important scenarios, hard constraints, and major
exclusions. Do not introduce claims that are absent from the sections below. Exact requirements and
boundary conditions are preserved separately by the governed projection.
-->

## Actors

Who uses this, and what authority does each hold?

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

### S1 — <the most important situation, in the user's words>

**Priority:** P1
**Actor:** <role>
**Context:** <what is true before this begins>

- **Given** <the starting state>
  **When** <the actor does this>
  **Then** <the observable outcome>

- **Given** <a variation worth stating>
  **When** <…>
  **Then** <…>

### S2 — <the next situation>

**Priority:** P2

- **Given** … **When** … **Then** …

## Failure and empty states

What happens the first time, with nothing there yet, and when each step fails. These are where
specifications are usually silent and implementations usually improvise.

- **Empty:** <no records yet>
- **Failure:** <the dependency is unavailable>
- **Partial:** <some of it worked>

## Permissions

Who may do each thing, and what a reader without that authority sees instead.

## Boundary conditions

Limits, sizes, counts, timeouts, and what happens exactly at and beyond each one.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- **REQ-001** — <requirement>. *(S1)*
- **REQ-002** — <requirement>. *(S1, S2)*

## Non-functional requirements

Latency, throughput, availability, accessibility, privacy, retention. State the number and how it
will be measured; "fast" is not a requirement.

## Constitution articles

Cite the article IDs this specification is bound by `[SPK:REQ-100]`. The kernel validates that each
cited ID exists at the pinned revision before publication `[SPK:REQ-101]`.

- <ART-…>

## Assumptions

What this specification takes as true without proving. An assumption that turns out false is a
change request, not a defect — which is only true if it was written down.

## Out of scope

Named explicitly, so the boundary is reviewable rather than inferred.

# Pinned Story source

- Immutable source: `singularity/work-items/CFA-STORY/source.json`
- SHA-256: `9bf622393e4583d6985423b31f43aff0a4745257daf469e27a55612e3248e70e`
- Authority: this is the requested outcome. Later evidence may refine missing detail but may not silently contradict or replace it.
- Conflict recovery: if a human answer or approved artifact conflicts with this source, stop and use `singularity-flow story intent-amendment propose --file <FILE> --reason "<REASON>"`; recompose only after the amendment is governed.

```json
{
  "type": "manual",
  "id": "CFA-STORY",
  "title": "add cfa",
  "description": "add cfa like functions to calc",
  "acceptanceCriteria": "screenshot"
}
```

# Human clarification checkpoint

The `specification` phase uses clarification mode `required`.
Prioritize material uncertainty about: scope, acceptance criteria, actors, boundary conditions, non-functional requirements.

- This checkpoint is required. Pause for at least one human response before authoring.
- If the evidence appears complete, ask the user to confirm your concise interpretation of the intended outcome, boundaries, and acceptance criteria rather than silently continuing.
- Ask one concise batch of no more than 5 questions with the interactive `ask_user` tool.
- Derive every question only from the current Story’s pinned sources, approved upstream artifacts, repository world model, or contradictions among them. Never reuse example questions or placeholder text from templates.
- Do not ask for information already established by pinned sources, approved upstream artifacts, or the repository world model.
- If a proposed answer contradicts the pinned Story source, stop. Do not record it as an ordinary clarification or author over the source; use `singularity-flow story intent-amendment propose --file <FILE> --reason "<REASON>"`, then recompose after governance resolves it.
- Treat pinned evidence as fact. Label every hypothesis or proposed design explicitly; never convert it into an acceptance or specification decision without human confirmation.
- For each question, explain briefly why the answer changes the governed output. Offer a recommended/default choice when the evidence supports one.
- Do not infer an answer from generic knowledge. The user may explicitly answer “unknown” or defer a non-blocking decision.
- After the response, incorporate confirmed answers into the phase artifact as decisions. Keep explicitly deferred items in Open questions with their impact and owner.
- Record the accepted response batch with `singularity-flow clarification record specification --response-file <json>`. The record is bound to this exact prompt and prospective generation.
- A material unresolved decision remains blocking through specification publication; do not hide it behind a recommendation or placeholder.
- If `ask_user` is unavailable, print the numbered questions and stop before authoring or publication. Never turn missing interactivity into silent assumptions.
- Do not author or publish the governed output until the checkpoint is complete.

# Product owner agent

Resolve the active repository with `singularity-flow workspace current --json`; when active, use its absolute `repositoryPath` as cwd for every shell and file tool. Otherwise use `git rev-parse --show-toplevel`; if neither resolves, stop. Never search `$HOME`, a parent directory, or outside that repository. Governed artifacts are under `singularity/work-items/<WORK-ID>/`.

Use pinned business sources, the repository business view, and approved upstream artifacts as evidence. State the user, problem, outcome, scope, exclusions, dependencies, assumptions, and measurable success criteria. Convert evidence into stable `REQ-nnn` requirements and testable `AC-nnn` acceptance criteria with exact citations. Separate confirmed needs, proposals, and unresolved questions. Do not invent business intent or grant approval.

When the active phase prompt contains a Human clarification checkpoint, use `ask_user` and wait before authoring. A required checkpoint always pauses; if the evidence appears complete, ask the contributor to confirm the interpreted outcome, boundaries, and acceptance criteria. Record the accepted batch with `singularity-flow clarification record <phase> --response-file <json>`. Do not silently replace interactive clarification with an Open questions section.

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

> **Grounding** · calc @ `1b17ac362bdedf23ef4f7683203fb8e1a715428b` · view: `core` · tier: `brief`
> **Generated** 20 August 2026 (2026-08-20T03:02:27.293Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## Snapshot {#core.brief}
This repository is a client-side calculator app built with React and Vite. Its main components are the app shell in `src/App.jsx`, the shared math evaluator in `src/utils/evaluator.js`, the scientific keypad in `src/components/ScientificKeypad.jsx`, and the financial tools in `src/components/FinancialCalculator.jsx`. The primary entry point is the Vite app started by `npm run dev`, and the standard validation commands are `npm test` and `npm run build`. The single largest risk is that the app relies on browser-local state and has no backend or persistence layer beyond `localStorage`.


## Repository grounding: singularity/world-model/views/business.md

# business — light repository view

> Generated 27 August 2026 (2026-08-27T04:25:38.452Z) · deterministic light mode · source `7e3cf961b5090100014667d750e2b6b3efc4e81b`

## Observed

1 documentation path(s) and 19 source path(s) were indexed. Product intent must be confirmed from governed requirements.

- `README.md`
- `package.json`
- `src/App.jsx`
- `src/main.jsx`

## Commands observed in package metadata

- `npm run build`
- `npm run dev`
- `npm run lint`
- `npm run preview`
- `npm run test`

## Limits

This view was generated without an AI model and consumed **zero model tokens**. It is a repository inventory, not semantic analysis. Confirm behavior, ownership, contracts, risks, and test sufficiency against source and approved artifacts before making a governed decision.


## Repository grounding: singularity/world-model/domains/expression-evaluation.md

> **Grounding** · calc @ `1b17ac362bdedf23ef4f7683203fb8e1a715428b` · view: `expression-evaluation` · tier: `full`
> **Generated** 20 August 2026 (2026-08-20T03:02:27.293Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#domain.expression-evaluation.tldr}
The expression-evaluation domain is the shared math engine behind the calculator experience. It sanitizes user input, translates notation such as percentages and radicals into executable expressions, applies angle-unit rules for trigonometry, and formats results for display. The domain is central to both the scientific and financial modes and is therefore a high-risk change surface.

## Facts {#domain.expression-evaluation.facts}
```yaml
owned_by: ["src/utils/evaluator.js", "src/App.jsx"]
primary_workflow:
  - "user enters expression"
  - "expression is sanitized and normalized"
  - "mathjs evaluates the expression"
  - "result is formatted and displayed"
key_invariants:
  - "degree-based trig functions are rewritten to use deg units"
  - "invalid or non-finite values return Error"
  - "large or tiny numbers are formatted with scientific notation"
```

## Domain purpose {#domain.expression-evaluation.purpose}
This domain turns user-entered math into a reliable calculation experience. It exists to keep a single expression engine consistent across arithmetic, scientific, and financial features without duplicating business logic.

## Terminology {#domain.expression-evaluation.terminology}
- `expression`: the raw user-entered computation string.
- `angleUnit`: either `DEG` or `RAD`, used for trig evaluation.
- `result` / `rawResult`: the display output and the underlying evaluated value.

## Owning components {#domain.expression-evaluation.components}
- `src/utils/evaluator.js` owns normalization, number formatting, unit conversion, and financial formulas.
- `src/App.jsx` coordinates expression state and dispatches evaluations into the shared engine.
- `src/components/ScientificKeypad.jsx` contributes trig and scientific symbols used by the domain.

## Main workflows {#domain.expression-evaluation.workflows}
1. The calculator stores an expression string in app state.
2. `evaluateExpression` sanitizes symbols such as `π`, `%`, `√`, `!`, and `×`/`÷`.
3. For degree mode, `sin`, `cos`, and `tan` calls are rewritten with `deg` units.
4. The result is formatted and returned to the display.

## Data and state {#domain.expression-evaluation.state}
The domain operates on strings and numeric values rather than a database model. It also coexists with local history and memory state in `src/App.jsx`, but the evaluation logic itself is stateless.

## Invariants and risks {#domain.expression-evaluation.risks}
The most important invariant is that scientific and financial modes share the same evaluation rules. A change to parsing or formatting can affect many surfaces at once. The current code also treats invalid input conservatively, which can be good for UX but may hide upstream errors.

## Tests {#domain.expression-evaluation.tests}
The domain is covered by `src/utils/evaluator.test.js` and by the broader app tests in `src/App.test.jsx`.

## Unknowns {#domain.expression-evaluation.unknowns}
The repository does not define a formal spec for edge cases, locale formatting, or external data sources for this domain.


## Repository grounding: singularity/world-model/domains/calculator-capabilities.md

> **Grounding** · calc @ `6b0100c4e4f6f61b03c4e5fcbf7d58052f63d7f6` · view: `domain.calculator-capabilities` · tier: `full`
> **Generated** 20 August 2026 (2026-08-20T04:09:10Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#domain.calculator.tldr}

This domain file focuses on the repository’s core capability surface: calculation, conversion, financial helpers, and graphing. The business value of the repository is concentrated in accurate, predictable computation and a smooth browser-based experience. The key implementation boundary is the shared evaluator utility in src/utils/evaluator.js, while the mode components give the domain its user-facing forms.

## Facts {#domain.calculator.facts}

```yaml
domain: calculator-capabilities
owner_components: [app-shell, expression-engine, mode-views]
primary_workflows: [expression-evaluation, unit-conversion, financial-helpers, graphing]
state: browser-local
```

## Domain purpose {#domain.calculator.purpose}

The repository exists to let a user perform calculations in a browser without relying on a backend service. Its domain is not a business process or data API; it is a user utility that exposes mathematical operations and lightweight planning tools. Evidence: evidence:repo-purpose, evidence:app-modes.

## Terminology {#domain.calculator.terminology}

- Expression: the user-entered math string or formula.
- Result: the evaluated output shown in the display.
- Angle unit: DEG or RAD, used by trigonometric functions.
- Unit category: length, weight, temperature, digital data, or speed.
- Financial helper: EMI, compound interest, or tip splitting calculation.

## Business rules {#domain.calculator.rules}

The domain follows observable rules for accuracy and usability. Percentage and factorial syntax are normalized before evaluation, degree/radian handling differs for trigonometric functions, and outputs are formatted to avoid floating-point artifacts. Financial helpers calculate EMI, compound interest, and tip-split totals using formulas implemented in the shared evaluator. Evidence: evidence:expression-evaluator, evidence:financial-capabilities.

## Owning components {#domain.calculator.components}

The app shell coordinates the domain experience. The expression engine implements calculation semantics and shared formatting rules. The mode components make the capability surface visible: converter for units, financial calculator for money-related operations, and grapher for function visualization. Evidence: evidence:app-modes, evidence:financial-capabilities, evidence:graphing-capability.

## Main workflows {#domain.calculator.workflows}

1. Input an expression and evaluate it.
2. Switch to the converter mode and convert between units.
3. Use financial helpers for EMI, compound interest, or tip splitting.
4. Plot a simple function and inspect the graph.

## Data and state {#domain.calculator.state}

The domain relies on local state within the React app and browser localStorage for theme, sound, and history. There is no evidence of a server-side state store or database. Evidence: evidence:local-storage.

## Invariants and risks {#domain.calculator.risks}

The domain is most sensitive to calculation correctness and user-visible error clarity. A change to the shared evaluator can alter many modes at once, so regressions are likely to be cross-cutting. Evidence: evidence:expression-evaluator.

## Tests {#domain.calculator.tests}

The repository’s tests cover arithmetic, memory, history, keyboard shortcuts, themes, and responsive navigation. They provide regression protection but do not cover every formula edge case. Evidence: evidence:tests.

## Unknowns {#domain.calculator.unknowns}

The domain does not reveal any external data source, regulatory requirement, or deployment-specific behavior. Evidence: evidence:repo-purpose.

## Capability world model: calc — singularity/world-model/core/summary.md

<!-- sha256=04fb9b363437f060397ff24a5ecdd5d4cb2bd65afd33ba6328ea91973f7995c0 capability=calc-app -->

> **Grounding** · calc @ `1b17ac362bdedf23ef4f7683203fb8e1a715428b` · view: `core` · tier: `full`
> **Generated** 20 August 2026 (2026-08-20T03:02:27.293Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#core.tldr}
This repository is a React/Vite single-page calculator application with standard, scientific, converter, financial, and grapher modes. The main app shell in `src/App.jsx` coordinates mode switching and calculator state, while `src/utils/evaluator.js` performs expression parsing, unit conversion, and financial calculations. The project is lightweight and client-side: it uses browser `localStorage` for history, theme, and sound preferences, and there is no backend service or database. The most important validation commands are `npm test` and `npm run build`, both defined in `package.json`. The current working tree is not clean, so grounding should be read as a snapshot of the inspected commit plus the current uncommitted deletions in `singularity/`.

## Facts {#core.facts}
```yaml
repository_kind: application
languages: [JavaScript, JSX, CSS, JSON]
package_roots: [.]
entrypoints:
  - { id: app-shell, path: "src/App.jsx:14-324", invocation: "Vite client app" }
  - { id: package-scripts, path: "package.json:6-11", invocation: "npm test / npm run build" }
key_symbols:
  - { name: App, path: "src/App.jsx:14", role: "mode router and calculator state" }
  - { name: evaluateExpression, path: "src/utils/evaluator.js:4", role: "expression parsing and unit-aware evaluation" }
commands:
  - { command: "npm test", purpose: "run Vitest suite", source: "package.json:11" }
  - { command: "npm run build", purpose: "build production bundle", source: "package.json:8" }
hotspots:
  - { path: "src/App.jsx", reason: "cross-cutting UI state and mode routing" }
  - { path: "src/utils/evaluator.js", reason: "shared math engine for expression evaluation, trigonometry, and finance" }
```

## Repository purpose {#core.purpose}
The repository implements a calculator experience for everyday arithmetic, scientific math, unit conversion, financial planning, and graphing. The business value is primarily user productivity and quick decision support, not a multi-user platform. The visible capabilities are all rendered in the browser and driven by local client state.

## Repository type and languages {#core.type}
This is a single-page React application built on Vite. The codebase mixes JavaScript, JSX, CSS, and package metadata. The dependency manifest also includes `mathjs`, `lucide-react`, Vitest, Testing Library, and Vite.

## Main applications, packages, or services {#core.components}
- `src/App.jsx` is the main application shell and mode router.
- `src/components/ScientificKeypad.jsx` and `src/components/StandardKeypad.jsx` expose calculator controls.
- `src/components/FinancialCalculator.jsx` adds loan EMI, compound interest, and tip-splitting workflows.
- `src/components/UnitConverter.jsx` and `src/components/FunctionGrapher.jsx` provide specialized calculators.
- `src/utils/evaluator.js` is the shared engine for parsing expressions, formatting numbers, and computing financial formulas.

## High-level component map {#core.map}
The app state in `src/App.jsx` is the hub. It delegates UI to mode-specific components and sends evaluations to `evaluateExpression` from `src/utils/evaluator.js`. `Display.jsx` renders the expression/result view, `HistoryDrawer.jsx` stores recent calculations, and `audio.js` provides optional sound feedback. The financial and unit-converter features are separate mode components but share the evaluator and the same display shell.

## Main entry points {#core.entrypoints}
- `src/App.jsx:14` is the app component that creates the main calculator experience.
- `src/main.jsx` mounts the React app into the DOM.
- `package.json:6-11` defines the standard commands for development, build, lint, preview, and tests.

## Primary technologies {#core.tech}
The repository uses React 19, Vite 8, Vitest, Testing Library, and `mathjs` for expression evaluation. Styling is component-driven and uses CSS classes plus Tailwind-like utility classes embedded in JSX.

## Standard build and test commands {#core.commands}
- `npm test` runs the Vitest suite; it passed during inspection.
- `npm run build` creates a production bundle; it succeeded during inspection.
- `npm run dev` starts the local Vite dev server.
- `npm run lint` runs ESLint.

## Important risks {#core.risks}
The most important risk is overreliance on client-side logic and browser storage. The app does not expose a backend or shared state, so errors, history, and preferences are local to the browser and may be lost or inconsistent across devices. Another risk is that financial calculations are implemented as UI helpers rather than domain modules with formal validation.

## Important unknowns {#core.unknowns}
The repository does not expose a product roadmap, customer segmentation, or external integrations. It also does not define an authoritative domain model for finance or expression evaluation beyond the code itself.

## Commit, generation date, and freshness warning {#core.freshness}
Inspected commit: `1b17ac362bdedf23ef4f7683203fb8e1a715428b`. Generated at `2026-08-20T03:02:27.293Z` on `20 August 2026`. The repository working tree is not clean, so the current state may differ from the inspected commit.

## Recommended next view for each common task {#core.routing}
- Product behavior or business impact: `views/business.md`
- Implementation or debugging: `views/development.md` (not generated in this quick pass)
- Test creation or regression analysis: `views/testing.md` (not generated in this quick pass)

## Deterministic repository facts {#core.deterministic-facts}

<!-- singularity-flow:repository-facts:start -->
```yaml
# Derived from the repository, not inferred. Every path and line is checkable.
files: 31
languages_scanned: 19
frameworks: [React, Vite, Vitest]
commands:
  - { run: "npm run dev", at: "package.json:7" }
  - { run: "npm run build", at: "package.json:8" }
  - { run: "npm run lint", at: "package.json:9" }
  - { run: "npm run preview", at: "package.json:10" }
  - { run: "npm run test", at: "package.json:11" }
# What the rest of the repository depends on. A count, not an impression.
most_depended_on:
  - { path: src/utils/audio.js, imported_by: 10 }
  - { path: src/utils/evaluator.js, imported_by: 4 }
  - { path: src/App.jsx, imported_by: 2 }
  - { path: src/components/StandardKeypad.jsx, imported_by: 2 }
  - { path: src/components/Display.jsx, imported_by: 1 }
  - { path: src/components/FinancialCalculator.jsx, imported_by: 1 }
  - { path: src/components/FunctionGrapher.jsx, imported_by: 1 }
  - { path: src/components/Header.jsx, imported_by: 1 }
# Commits touching each file in the last year, from Git history.
most_changed:
  - { path: README.md, commits: 3 }
  - { path: src/components/Display.jsx, commits: 3 }
  - { path: src/components/Header.jsx, commits: 3 }
  - { path: src/index.css, commits: 3 }
  - { path: package-lock.json, commits: 2 }
  - { path: package.json, commits: 2 }
  - { path: src/App.jsx, commits: 2 }
  - { path: src/components/FinancialCalculator.jsx, commits: 2 }
# 18 exported top-level declarations; the most-depended-on files' are listed.
key_symbols:
  - { name: App, kind: function, at: "src/App.jsx:14" }
  - { name: Display, kind: binding, at: "src/components/Display.jsx:5" }
  - { name: FinancialCalculator, kind: binding, at: "src/components/FinancialCalculator.jsx:6" }
  - { name: StandardKeypad, kind: binding, at: "src/components/StandardKeypad.jsx:5" }
  - { name: playSound, kind: binding, at: "src/utils/audio.js:18" }
  - { name: evaluateExpression, kind: binding, at: "src/utils/evaluator.js:4" }
  - { name: formatNumber, kind: binding, at: "src/utils/evaluator.js:57" }
  - { name: UNIT_TYPES, kind: binding, at: "src/utils/evaluator.js:75" }
  - { name: convertUnits, kind: binding, at: "src/utils/evaluator.js:140" }
  - { name: calculateEMI, kind: binding, at: "src/utils/evaluator.js:161" }
  - { name: calculateCompoundInterest, kind: binding, at: "src/utils/evaluator.js:181" }
  - { name: calculateTip, kind: binding, at: "src/utils/evaluator.js:200" }
tests: 4
```
<!-- singularity-flow:repository-facts:end -->
