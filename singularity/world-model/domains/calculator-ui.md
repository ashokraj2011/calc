> **Grounding** · calc @ `dfeda6775cb0c4abe77e42605fcc6bdd1bf78f3c` · view: `domain.calculator-ui` · tier: `full`
> **Generated** 09 August 2026 (2026-08-09T21:05:23Z) · depth: `standard` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.


## TL;DR {#domain.calculator-ui.tldr}
This domain model covers the calculator UI and theme system that governs the app’s current “classic” appearance and the requested visual alignment task. The core capability is a shared styling system with CSS variables and a theme selector, while the main implementation surfaces are the app shell, display, keypad, and header. A change here should be treated as a cross-cutting UI task because the shared tokens influence multiple modes and components.

## Facts {#domain.calculator-ui.facts}
```yaml
domain: calculator-ui
owners:
  - { component: calculator-shell, path: src/App.jsx }
  - { component: theme-system, path: src/index.css }
key_workflows:
  - { name: select theme, path: src/components/Header.jsx:85-103 }
  - { name: evaluate expression, path: src/App.jsx:115-130 }
state:
  - { name: theme, path: src/App.jsx:22-43 }
```

## Domain purpose {#domain.calculator-ui.purpose}
The calculator UI domain is responsible for how the calculator looks and feels to the end user. It includes the app shell, display, keypad, header, theme selector, and the shared visual primitives that make the UI feel like a classic desk calculator or one of the alternate themes.

## Terminology {#domain.calculator-ui.terminology}
- `theme` — the active visual mode selected by the user.
- `activeMode` — currently selected calculator mode such as standard or scientific.
- `expression` and `result` — the current input and computation output.
- `classic` — one of the theme values already present in the code.

## Business rules {#domain.calculator-ui.rules}
The UI is designed to support a consistent visual language across multiple calculator modes. The theme selection is persisted in local storage, and the theme value is applied to the document root so all components can consume the shared CSS variables.

## Owning components {#domain.calculator-ui.components}
- `src/App.jsx` — state and mode routing
- `src/components/Header.jsx` — theme selector and header layout
- `src/components/Display.jsx` — display panel presentation
- `src/components/StandardKeypad.jsx` — standard keypad surface
- `src/index.css` — theme tokens and shared classes

## Important symbols {#domain.calculator-ui.symbols}
- `App` — top-level state and composition
- `Header` — theme selection and top-level navigation
- `Display` — expression/result presentation
- `StandardKeypad` — shared keypad UI

## Main workflows {#domain.calculator-ui.workflows}
1. The user selects a theme from the header.
2. The app stores the chosen theme and updates the document attribute.
3. Shared CSS variables change the visual treatment of the display, buttons, header, and card shell.

## Data and state {#domain.calculator-ui.state}
The domain relies mainly on React state and browser `localStorage`; the visible state includes `theme`, `soundEnabled`, `history`, and the active calculator mode.

## External integrations {#domain.calculator-ui.integrations}
The UI imports Google Fonts in `src/index.css:1` and uses browser local storage for persistence. There is no remote API in this domain.

## Invariants {#domain.calculator-ui.invariants}
- The theming contract is token-based rather than component-specific.
- Multiple calculator modes share the same visual primitives.
- The theme selector remains part of the header contract.

## Tests {#domain.calculator-ui.tests}
No automated UI tests were found. Manual testing and build validation remain the primary checks.

## Change risks {#domain.calculator-ui.risks}
The greatest risk is visual spillover: CSS variables and classes shared across components can unintentionally affect other calculator modes. Another risk is that the visual change may depend on the Google Fonts import, which could vary by network environment.

## Unknowns {#domain.calculator-ui.unknowns}
- The target appearance is not specified by a screenshot or exact design token set.
- It is unclear whether the requested change should affect just the default theme or all modes.

## Evidence IDs {#domain.calculator-ui.evidence}
- `evi-app-shell-01`
- `evi-theme-01`
- `evi-header-01`
