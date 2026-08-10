> **Grounding** · calc @ `333a66d35e57d5077d68d4164df9b138b001d0ed` · view: `task.windows-calc-look` · tier: `full`
> **Generated** 10 August 2026 (2026-08-10T23:45:02.386Z) · depth: `standard` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#task.windows-calc-look.tldr}

This guide is for the requested visual task: make the app look like Windows Calculator while preserving the existing calculator behavior. The safest change is a presentation-only pass over the shell, display, keypad, and theme tokens, not a formula or interaction rewrite. Focus on the header, display area, button treatment, spacing, and color system in `src/components/` and `src/index.css` first. Avoid changing calculator semantics in `src/App.jsx` or `src/utils/evaluator.js` unless a visual requirement explicitly depends on it.

## Task interpretation {#task.windows-calc-look.interpretation}

The task is primarily a UI makeover. It should preserve all existing calculator modes and functions while adopting a more Windows-like visual language. The work should be scoped to the presentational layer rather than the business logic layer.

## Relevant roles {#task.windows-calc-look.roles}

- Product owner or designer: confirm the brand direction and acceptable differences from the current theme.
- Front-end engineer: implement the layout, spacing, and visual tokens.
- QA reviewer: verify that modes still work and that the calculator remains readable and usable.

## Relevant components {#task.windows-calc-look.components}

- `src/components/Header.jsx` for the app title, mode tabs, and utility controls.
- `src/components/Display.jsx` for the main output area.
- `src/components/StandardKeypad.jsx` and `src/components/ScientificKeypad.jsx` for button treatment.
- `src/index.css` for theme variables and the shared button/display styling.
- `src/App.jsx` for state flow, but preferably without behavior changes.

## Relevant domain models {#task.windows-calc-look.domains}

- `domains/calculator-ui.md`

## Primary paths and symbols {#task.windows-calc-look.paths}

- `src/components/Header.jsx` (`Header`)
- `src/components/Display.jsx` (`Display`)
- `src/components/StandardKeypad.jsx` (`StandardKeypad`)
- `src/components/ScientificKeypad.jsx` (`ScientificKeypad`)
- `src/index.css` (theme variables and `.calc-btn` styles)
- `src/utils/evaluator.js` (`evaluateExpression`, `formatNumber`)

## Expected change flow {#task.windows-calc-look.flow}

1. Review the current theme variables and component structure.
2. Adjust the shared visual tokens in `src/index.css`.
3. Refine the header, display, and keypad components to match the target aesthetic.
4. Verify that each mode still renders correctly and that calculation results remain unchanged.

## Contracts and invariants to preserve {#task.windows-calc-look.invariants}

- Each calculator mode should remain reachable.
- Calculation semantics should remain unchanged.
- Display formatting and error states should remain consistent.
- The app should remain usable on desktop and mobile widths.

## Tests to add or update {#task.windows-calc-look.tests}

No automated tests exist for this view today. Manual validation should cover standard arithmetic, scientific functions, unit conversion, financial calculations, and graphing after the visual change.

## Commands to run {#task.windows-calc-look.commands}

- `npm run build` to verify the app still compiles.
- `npm run lint` to surface any regressions, but note that lint already has baseline failures.

## Risks {#task.windows-calc-look.risks}

The main risk is accidentally changing calculator semantics while updating the visual system. A second risk is making the UI feel inconsistent across modes if the shared tokens are not updated carefully.

## Unknowns requiring human confirmation {#task.windows-calc-look.unknowns}

- The exact Windows Calculator visual target is not specified in the repository.
- The acceptable level of theme variation versus a more literal recreation is not documented.
