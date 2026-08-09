> **Grounding** · calc @ `dfeda6775cb0c4abe77e42605fcc6bdd1bf78f3c` · view: `business` · tier: `full`
> **Generated** 09 August 2026 (2026-08-09T21:05:23Z) · depth: `standard` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.


## TL;DR {#biz.tldr}
This view covers the calculator product surface as implemented in the React app. The repository exposes a multi-mode calculator experience with standard arithmetic, scientific functions, unit conversion, financial tools, and a grapher; the visible user experience is centered on the app shell, display, header, and keypad components. The current styling system already includes a `classic` theme and persisted theme state, so a “classic calculator” request is primarily a visual/UX grounding task rather than a calculation-engine change. The main business risk is visual spillover into other modes and themes unless the change is scoped carefully.

## Facts {#biz.facts}
```yaml
capabilities:
  - { name: standard calculator, path: src/App.jsx:243-267 }
  - { name: scientific calculator, path: src/App.jsx:269-293 }
  - { name: converter, path: src/App.jsx:295-295 }
  - { name: financial calculator, path: src/App.jsx:297-297 }
  - { name: grapher, path: src/App.jsx:299-299 }
actors:
  - { type: end user, evidence: "src/components/Header.jsx:33-145" }
workflow:
  - { name: input and evaluate, path: src/App.jsx:55-130 }
rules:
  - { name: persisted theme selection, path: src/App.jsx:22-43 }
```

## Capability map {#biz.capabilities}
The product surface is a calculator app rather than a business workflow platform. Capabilities visible in the code are:
- Standard arithmetic entry and evaluation
- Scientific functions and angle-unit handling
- Unit conversion, financial calculators, and graphing modes
- History tracking and keyboard shortcuts
- Theme selection and sound toggles

## Actors and user archetypes {#biz.actors}
The repository shows one primary end-user actor: a person using the app as a desktop or web calculator. The UI exposes a theme selector and mode tabs, implying a user who may switch among calculator experiences and personalize the look. There is no evidence of separate personas, admin roles, or multi-tenant business actors in this front end.

## Business workflows {#biz.workflows}
1. User chooses a calculator mode from the header tabs.
2. User enters an expression through the keypad or keyboard.
3. App evaluates the expression and stores the result and history state.
4. User can inspect history, clear state, or switch visual themes.

## Entities and vocabulary {#biz.entities}
The implementation uses a small, familiar calculator vocabulary: expression, result, history, theme, sound, angle unit, memory value, and mode. These are not domain entities in a business-data sense; they are UI and calculation state terms.

## Business rules and policy locations {#biz.rules}
The most relevant business-facing rules are the UI policy and experience rules rather than server-side policy. The code shows:
- Persisted theme setting in `src/App.jsx:22-43`
- A `classic` theme and theme selector contract in `src/components/Header.jsx:24-31` and `src/components/Header.jsx:85-103`
- Shared styling tokens for the calculator surface in `src/index.css:3-37` and `src/index.css:305-329`

## User-visible failure behavior {#biz.failure}
The calculator surface handles expression errors by rendering `Error` in the result display, and the evaluator utility returns an explicit error path for malformed expressions. The UI also supports clearing, backspacing, and history clearing; there is no sign of a server-side failure path.

## Compliance or data-sensitivity indicators {#biz.compliance}
The app stores simple local UI state in `localStorage` for theme, sound, and history. There is no evidence of customer records, billing data, or regulated personal data handling in this repository snapshot.

## Business-impact map {#biz.impact}
Visual changes can affect the core user experience, especially if they alter the default appearance of the primary calculator surface. The shared CSS token system means a change can influence the standard keypad, display, header, and other modes at once.

## Unknown business assumptions {#biz.unknowns}
- The request does not identify a specific vintage calculator model.
- It is unclear whether the change is for the default theme only or for the whole app shell.
- The intended business value is assumed to be improved visual affinity with a classic calculator, not a new product capability.

## Suggested questions for domain owners {#biz.questions}
- Is the target “classic” experience a specific physical calculator model or just a general retro feel?
- Should the change affect only the default theme or all theme options and surfaces?
- Should the standard mode be the primary target, or should the header and other modes also align visually?

## Where to start {#biz.start}
Start with `src/index.css` for theme tokens and shared UI classes, then inspect `src/components/Header.jsx`, `src/components/Display.jsx`, and `src/components/StandardKeypad.jsx` to confirm which surfaces consume the shared styling layer.

## Questions this view does not answer {#biz.limits}
This view does not describe implementation details such as symbol names, state transitions, or the full component tree; those are covered by the development and architecture views.
