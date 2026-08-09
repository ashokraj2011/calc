> **Grounding** · calc @ `8d115da4dc8005b437ccad387db0721b2ab06bd9` · view: `task.classic-calculator-look` · tier: `full`
> **Generated** 9 August 2026 (2026-08-09T18:59:39Z) · depth: `standard` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#task.classic-calculator-look.tldr}

This guide is the smallest grounding package for the task “Change the look to match classic calculator.” It points to the shared styling contract and the UI surfaces that should be adjusted first, while preserving the current calculation behavior.

## Task interpretation {#task.classic-calculator-look.context}

The task is a presentation change rather than a calculator-behavior change. The implementation should focus on appearance, layout, and visual affordances while preserving the current input, evaluation, and history flows. The precise target style is not encoded in the repository, so the change should be guided by an explicit visual reference if one exists.

## Relevant roles {#task.classic-calculator-look.context}

This task is primarily a product/design implementation task with developer execution. It intersects the business view because the product feel is being changed, the development view because the implementation files are known, and the testing view because the change needs manual verification until tests are added.

## Relevant components {#task.classic-calculator-look.context}

- `src/index.css` — primary styling entry point and theme definitions.
- `src/components/Display.jsx` — display panel and action buttons.
- `src/components/StandardKeypad.jsx` — standard keypad buttons.
- `src/components/ScientificKeypad.jsx` — scientific keypad and function bar.
- `src/components/Header.jsx` — branding and mode chrome.

## Relevant domain models {#task.classic-calculator-look.context}

- `domains/calculator-ui.md` — the shared UI domain for this task.

## Primary paths and symbols {#task.classic-calculator-look.implementation}

Start with CSS custom properties like `--bg-primary`, `--card-bg`, `--display-bg`, `--btn-num-bg`, `--btn-op-bg`, `--btn-func-bg`, and `--btn-eq-bg` in `src/index.css`. Then inspect the reusable components `Display`, `StandardKeypad`, `ScientificKeypad`, and `Header`. Keep the evaluator in `src/utils/evaluator.js` unchanged unless the UI task requires a new symbol or a new input contract.

## Expected change flow {#task.classic-calculator-look.implementation}

1. Decide whether the styling should apply only to standard mode or to the broader calculator shell.
2. Adjust the shared theme tokens in `src/index.css` to establish the classic look.
3. Tune the display and keypad components to match the new palette, spacing, and button treatment.
4. Recheck the header and mode switcher so they still feel coherent with the new style.
5. Verify the core calculator functions still work in the browser.

## Contracts and invariants to preserve {#task.classic-calculator-look.implementation}

Preserve the current expression/evaluation contract, the local storage keys for theme/history/sound, and the existing keyboard shortcuts. Do not change the `data-theme` contract or break the app’s ability to evaluate expressions.

## Tests to add or update {#task.classic-calculator-look.tests}

Because no automated UI tests exist today, add a small manual checklist first: standard mode render, scientific mode render, clear/backspace, equals, theme switching, history drawer, and copy action. If a test harness is introduced later, prioritize a smoke test for `App` and a unit test for `evaluateExpression`.

## Commands to run {#task.classic-calculator-look.tests}

- `npm run build` — verify the app still bundles.
- `npm run lint` — note current repository debt, but avoid conflating pre-existing errors with this UI task.
- `npm run dev` — manual browser verification.

## Risks {#task.classic-calculator-look.risks}

The main risk is that a broad theme change will unintentionally affect scientific mode, the mode tabs, or the grapher surface. Another risk is that design changes will be implemented in the wrong layer, resulting in inconsistent visual behavior.

## Unknowns requiring human confirmation {#task.classic-calculator-look.unknowns}

The exact visual target for “classic calculator” is not encoded in the repository. Confirm whether the task should apply to standard mode only or to the whole calculator shell, including header branding and tabs.
