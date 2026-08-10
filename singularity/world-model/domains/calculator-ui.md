> **Grounding** · calc @ `333a66d35e57d5077d68d4164df9b138b001d0ed` · view: `domain.calculator-ui` · tier: `full`
> **Generated** 10 August 2026 (2026-08-10T23:45:02.386Z) · depth: `standard` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#domain.calculator-ui.tldr}

This domain captures the calculator experience as a product surface: the visible modes, the shared shell, the display and keypad layout, and the styling system that makes the app feel like a distinct calculator brand. The domain is relevant to visual changes such as a Windows-style makeover because the main implementation points are the shared app shell, the mode-specific components, and the CSS variables that define the look and feel. Preserve the interaction model and the evaluator semantics while replacing or refining the visual language.

## Domain purpose {#domain.calculator-ui.purpose}

The calculator UI domain is the presentation layer and interaction model for the app. It is responsible for the look of the calculator, the arrangement of controls, the display conventions, the navigation between modes, and the user-facing affordances such as history, memory, and sound.

## Terminology {#domain.calculator-ui.terminology}

- Mode: `standard`, `scientific`, `converter`, `financial`, or `grapher`.
- Shell: the shared frame around the calculator, including the header and main content area.
- Display: the expression/result surface and the utility buttons that clear, backspace, or copy results.
- Keypad: the button grid that triggers calculations or navigation.
- Theme: a reusable visual token set that changes the palette and surface treatment.

## Business rules {#domain.calculator-ui.rules}

The visual layer should preserve the existing meaning of calculator controls. Number entry, operator selection, equals, memory operations, history selection, and mode switching should still produce the same semantics as before. A redesign should not silently change the function names, result formatting, or error states that users rely on.

## Owning components {#domain.calculator-ui.components}

- `src/App.jsx`: owns shared state and chooses which mode view to render.
- `src/components/Header.jsx`: mode switcher, theme selector, and utility buttons.
- `src/components/Display.jsx`: expression/result display and display utility actions.
- `src/components/StandardKeypad.jsx` and `src/components/ScientificKeypad.jsx`: keypad layout and button behavior.
- `src/index.css`: shared theme variables and visual system primitives.

## Important symbols {#domain.calculator-ui.symbols}

- `App` in `src/App.jsx` owns the major stateful behaviors.
- `Display` renders the expression/result surface.
- `StandardKeypad` and `ScientificKeypad` compose the button grids.
- `Header` exposes the mode and theme controls.

## Main workflows {#domain.calculator-ui.workflows}

1. User selects a mode from the header.
2. The app shell updates the active view and preserves the current calculation state.
3. User interacts with the display or keypad.
4. The app updates the expression/result and optionally persists history or settings.

## Data and state {#domain.calculator-ui.state}

The UI persists theme, sound preferences, and calculation history in `localStorage`. The current expression and result are held in component state within `src/App.jsx`. These values should remain behaviorally stable when the styling is changed.

## Invariants {#domain.calculator-ui.invariants}

- The app should still support the same modes and controls after a redesign.
- The expression/result surface should remain understandable and easy to read.
- The visual change should not change math semantics or error presentation.

## Tests {#domain.calculator-ui.tests}

No automated UI tests are present in the repository snapshot. Visual work should be validated manually in the browser and checked against the app shell and mode navigation flows.

## Change risks {#domain.calculator-ui.risks}

The most likely risk is confusing users by changing layout conventions too aggressively. A second risk is introducing inconsistent theming tokens that make one mode look considerably different from the rest. The greatest business risk is reducing trust by making the calculator feel less reliable, even if the formulas remain unchanged.

## Unknowns {#domain.calculator-ui.unknowns}

There is no accepted visual specification for the Windows Calculator look in this repository snapshot, so the design intent should be confirmed with the product owner or design owner before implementation.
