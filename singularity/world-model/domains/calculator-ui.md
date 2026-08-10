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
