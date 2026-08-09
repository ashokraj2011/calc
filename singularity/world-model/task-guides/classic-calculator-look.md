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
