> **Grounding** · calc @ `5bce85ba2c79dc7dbfd36ecac3f10d1233881d4a` · view: `task.windows-calc-look` · tier: `full`
> **Generated** 11 August 2026 (2026-08-11T02:51:13Z) · depth: `standard` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.


## TL;DR {#task.windows-calc-look.tldr}
For the task “make the app look like windows calc”, start from the theme and layout layer in `src/index.css`, then adjust the primary UI components (`Header`, `Display`, `StandardKeypad`, `ScientificKeypad`) to match the intended layout and typography. Preserve the existing calculator behavior and state flow in `src/App.jsx` and `src/utils/evaluator.js`; styling work should not change how input, evaluation, history, or keyboard shortcuts function. The likely success criteria are visual parity and preserved interactions rather than new business logic or data models.

## Task interpretation {#task.windows-calc-look.intent}
Interpret this as a visual and layout task focused on the calculator UI domain, not a backend or evaluator rewrite. The repo already has a theme system and Windows 11 theme tokens, so the change is probably best implemented as a refinement of existing visual layers rather than a new component architecture.

## Relevant roles {#task.windows-calc-look.roles}
- Development: `views/development.md`.
- Testing: `views/testing.md`.

## Relevant components {#task.windows-calc-look.components}
- `src/index.css` — theme tokens and Windows 11 visual overrides.
- `src/components/Header.jsx` — navigation and theme controls.
- `src/components/Display.jsx` — result and expression area.
- `src/components/StandardKeypad.jsx` and `src/components/ScientificKeypad.jsx` — button layout and visual structure.
- `src/App.jsx` — state and interaction flow to preserve.

## Primary paths and symbols {#task.windows-calc-look.paths}
- `App` in `src/App.jsx`.
- `evaluateExpression` and `formatNumber` in `src/utils/evaluator.js`.
- `Header`, `Display`, `StandardKeypad`, `ScientificKeypad` under `src/components/`.

## Expected change flow {#task.windows-calc-look.flow}
1. Refine the theme tokens and layout classes in `src/index.css`.
2. Adjust component structure and spacing in the display/header/keypad components.
3. Validate the behavior of input, equals, clear, backspace, mode switching, and keyboard shortcuts in the browser.
4. Re-run `npm run build` and `npm run lint` and record manual verification results.

## Contracts and invariants to preserve {#task.windows-calc-look.invariants}
- The evaluator continues to return `result`, `rawResult`, and `error` from `evaluateExpression`.
- History remains capped at 50 entries and persisted to browser storage.
- Theme and sound preferences remain persisted in `localStorage`.

## Tests to add or update {#task.windows-calc-look.tests}
- Manual smoke tests for standard/scientific modes and keyboard input.
- Optional future evaluator/component tests, but no harness exists yet.

## Risks and unknowns {#task.windows-calc-look.risks}
- No repository-defined acceptance checklist for Windows Calculator parity.
- Visual changes may affect keyboard or display behavior if the shared state flow is not preserved.

Evidence: `e:app-shell`, `e:evaluator-core`, `e:theme-system`, `e:ui-components`.
