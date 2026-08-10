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
