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
