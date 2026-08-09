> **Grounding** · calc @ `8d115da4dc8005b437ccad387db0721b2ab06bd9` · view: `domain.calculator-ui` · tier: `full`
> **Generated** 9 August 2026 (2026-08-09T18:59:39Z) · depth: `standard` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#domain.calculator-ui.tldr}

This domain covers the calculator UI surface and the shared styling contract that makes the app feel like a calculator rather than a generic web app. It is the right grounding package for any task that changes look, interaction, branding, or the visible layout of the calculator.

## Facts {#domain.calculator-ui.facts}

```yaml
owned_by: [src/App.jsx, src/components/, src/index.css]
primary_states: [expression, result, activeMode, angleUnit, memoryValue, theme, history]
main_surfaces: [display, standard-keypad, scientific-keypad, header, history-drawer, keyboard-modal]
```

## Domain purpose {#domain.calculator-ui.purpose}

The calculator UI domain defines how users enter expressions, see results, switch among calculator modes, and interact with the app shell. It binds the visual language to the functional core: the evaluator computes values, while the UI surfaces decide how those values feel to the user.

## Terminology {#domain.calculator-ui.terminology}

- `activeMode` — the currently selected calculator surface (`standard`, `scientific`, `converter`, `financial`, `grapher`).
- `expression` and `result` — the current input and the last displayed output.
- `angleUnit` — DEG/RAD toggle used by scientific trig functions.
- `memoryValue` — state used by memory operations (MC/MR/M+/M-).
- `data-theme` — attribute applied to `<html>` that selects a theme.

## Owning components {#domain.calculator-ui.ownership}

The domain is owned by the app shell in `src/App.jsx`, the mode-specific components in `src/components/`, and the shared visual system in `src/index.css`. The functional core in `src/utils/evaluator.js` is related but not the owner of the UI experience; it should remain stable unless the visible calculator semantics change.

## Main workflows {#domain.calculator-ui.workflows}

The main user workflow is keyboard/button-driven input followed by evaluation and display. The secondary workflow is theme selection, sound toggling, and history review. The current design uses a modern glass-card aesthetic and a shared token system rather than component-local styling.

## Data and state {#domain.calculator-ui.state}

The UI domain state is held in `App` and is persisted to browser storage. Relevant state values include `expression`, `result`, `lastEvaluated`, `angleUnit`, `memoryValue`, `theme`, `soundEnabled`, `history`, and modal visibility flags. A visual style change should preserve these state values and not alter their semantics.

## Entry points and change surfaces {#domain.calculator-ui.entrypoints}

The most relevant entry points for a UI task are `src/index.css`, `src/components/Display.jsx`, `src/components/StandardKeypad.jsx`, `src/components/ScientificKeypad.jsx`, `src/components/Header.jsx`, and `src/App.jsx`. The classic-calculator change should start with the CSS variables and the display/keypad surfaces.

## Tests {#domain.calculator-ui.tests}

The current repository has no dedicated automated test suite for this domain. The available validation is build and lint, and the current manual verification path should include the standard mode surface, scientific mode surface, theme switching, and keyboard input.

## Change risks {#domain.calculator-ui.risks}

A visual change can unintentionally affect all modes because the shared style tokens are reused by multiple surfaces. The scientific keypad also reuses the standard keypad, so a style override that is too broad could change both modes at once.

## Unknowns {#domain.calculator-ui.unknowns}

The repository does not define a design token set or a screenshot reference for the intended classic calculator look. That means any implementation should be treated as a design decision that needs explicit confirmation from the product owner or designer.
