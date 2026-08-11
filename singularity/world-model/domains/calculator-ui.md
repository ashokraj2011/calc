> **Grounding** · calc @ `5bce85ba2c79dc7dbfd36ecac3f10d1233881d4a` · view: `domain.calculator-ui` · tier: `full`
> **Generated** 11 August 2026 (2026-08-11T02:51:13Z) · depth: `standard` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.


## TL;DR {#domain.calculator-ui.tldr}
The calculator UI domain covers the visible calculator experience: the stateful app shell, the keypad/display surfaces, the scientific and other specialized modes, and the theme system that already contains Windows 11 tokens. The main implementation burden is keeping the visual layer aligned with the interaction layer, because the app shell owns keyboard and state handling while the UI components render presentation. For a Windows-style visual task, the most important constraints are the existing theme variables, the component layout classes, and the evaluator semantics that feed the display.

## Domain purpose {#domain.calculator-ui.purpose}
This domain covers the user-visible calculator experience, including presentation, modes, keyboard shortcuts, history, sounds, and theme selection. It is the relevant capability for a change such as “make the app look like Windows calc”.

## Terminology {#domain.calculator-ui.terminology}
- `activeMode` — current visible mode (`standard`, `scientific`, `converter`, `financial`, `grapher`).
- `expression` / `result` — current input and output state displayed to the user.
- `angleUnit` — degree/radian toggle used by the evaluator.
- `theme` — selected palette, persisted in `localStorage`.

## Business rules and policy locations {#domain.calculator-ui.rules}
- Expression evaluation rules live in `src/utils/evaluator.js`, including sanitization, percent handling, trig angle-unit support, and error results.
- History entries are capped at 50 and persisted under `apex_history` in `src/App.jsx`.
- Theme and sound choices are persisted under `apex_theme` and `apex_sound` in `src/App.jsx`.

## Owning components {#domain.calculator-ui.components}
- `src/App.jsx` — orchestrates the UI domain state and mode switching.
- `src/components/Header.jsx` — controls mode selection, theme selection, history, keyboard modal, and sound.
- `src/components/Display.jsx`, `src/components/StandardKeypad.jsx`, `src/components/ScientificKeypad.jsx` — primary calculator surfaces.
- `src/index.css` — theme tokens and layout classes that shape the visual experience.

## Main workflows {#domain.calculator-ui.workflows}
1. User enters digits or operators and the state updates in `App`.
2. Equals triggers evaluation and updates the display plus history.
3. Theme selection updates the document root’s `data-theme` attribute and persists the selection.
4. Specialized modes mount alternate components without changing the core input model.

## Data and state {#domain.calculator-ui.state}
The visible state is stored in `App` and includes expression, result, pending evaluation state, angle unit, memory value, theme, sound flag, history, and modal toggles. This is intentionally simple and centralized rather than split across multiple stores.

## Invariants and risks {#domain.calculator-ui.risks}
- The evaluator should remain the source of truth for display values; layout changes should not silently bypass it.
- Visual changes should be validated against keyboard handling, because the keyboard shortcuts and the visible buttons share the same state handlers.
- A change to styling should be validated with both the default theme and Windows 11 themes because the CSS layer is theme-driven.

## Tests and validation {#domain.calculator-ui.tests}
- Manual replay of standard/scientific interactions.
- Build and lint checks through `npm run build` and `npm run lint`.
- Browser validation with cleared storage for theme/history/sound state.

## Unknowns {#domain.calculator-ui.unknowns}
- There is no repository-defined Windows Calculator design spec or screenshot reference.
- There is no automated visual regression suite for this domain.

Evidence: `e:app-shell`, `e:evaluator-core`, `e:theme-system`, `e:ui-components`.
