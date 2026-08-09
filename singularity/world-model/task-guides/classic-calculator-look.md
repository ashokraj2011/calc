> **Grounding** · calc @ `dfeda6775cb0c4abe77e42605fcc6bdd1bf78f3c` · view: `task.classic-calculator-look` · tier: `full`
> **Generated** 09 August 2026 (2026-08-09T21:05:23Z) · depth: `standard` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.


## TL;DR {#task.classic-calculator-look.tldr}
This guide is the smallest grounding package for the request to make the calculator look more like a classic calculator. The most relevant implementation surface is the shared theme system in `src/index.css`, supported by the header, display, and keypad components that consume those tokens. Preserve the existing theme-selection contract and favor scope-limited CSS changes over rewriting the app shell. Validation should rely on `npm run build` plus manual visual inspection because no automated UI tests were found.

## Task interpretation {#task.classic-calculator-look.intent}
The request is primarily a visual styling task. It is not a calculation-logic change, and the code already contains a `classic` theme plus a persisted theme state. The likely goal is to make the primary experience visually match a classic calculator more closely while keeping the app’s other themes and calculator modes intact.

## Relevant roles {#task.classic-calculator-look.roles}
- Product/UX-facing agents: confirm the desired appearance and scope.
- Front-end developers: adjust shared tokens and component classes.
- QA/reviewers: validate the build and inspect the UI manually.

## Relevant components {#task.classic-calculator-look.components}
- `src/index.css` — primary styling authority for the visual system
- `src/components/Header.jsx` — theme selector and top-level shell
- `src/components/Display.jsx` — display panel surface
- `src/components/StandardKeypad.jsx` — keypad surface
- `src/App.jsx` — theme persistence and state flow

## Relevant domain models {#task.classic-calculator-look.domains}
- `domains/calculator-ui.md`

## Primary paths and symbols {#task.classic-calculator-look.paths}
- `src/index.css` — CSS custom properties and shared component classes
- `src/App.jsx` — `theme` state and `data-theme` synchronization
- `src/components/Header.jsx` — `Header`
- `src/components/Display.jsx` — `Display`
- `src/components/StandardKeypad.jsx` — `StandardKeypad`

## Expected change flow {#task.classic-calculator-look.flow}
1. Review the shared tokens in `src/index.css` and decide whether the change belongs in the default theme or the `classic` theme block.
2. Adjust the relevant component classes only if the theme tokens alone do not provide sufficient control.
3. Re-run `npm run build` and inspect the app manually, especially standard mode and theme switching.

## Contracts and invariants to preserve {#task.classic-calculator-look.invariants}
- Keep the existing `theme` persistence contract.
- Preserve the theme selector in the header.
- Avoid breaking the shared visual token pattern in `src/index.css`.

## Tests to add or update {#task.classic-calculator-look.tests}
No automated tests were found; add or update UI regression coverage if the team later introduces a browser test harness. Until then, rely on manual review and build validation.

## Commands to run {#task.classic-calculator-look.commands}
- `npm run build`
- `npm run lint`

## Risks {#task.classic-calculator-look.risks}
- Styling changes may spill over into non-standard modes.
- The change may conflict with the existing `classic` theme tokens if the work is scoped too broadly.

## Unknowns requiring human confirmation {#task.classic-calculator-look.unknowns}
- The exact target aesthetic is not specified.
- Whether the request applies to only the current `classic` theme or the entire app shell is not explicit.

## Evidence IDs {#task.classic-calculator-look.evidence}
- `evi-theme-01`
- `evi-header-01`
- `evi-app-shell-01`
