> **Grounding** · calc @ `8d115da4dc8005b437ccad387db0721b2ab06bd9` · view: `business` · tier: `full`
> **Generated** 9 August 2026 (2026-08-09T18:59:39Z) · depth: `standard` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#biz.tldr}

This view explains what the repository delivers as a product surface, which user-facing behaviors are visible in code, and where business rules and user-visible risks are encoded. It is most useful for planning a change that affects the calculator experience rather than the implementation details of a single component.

## Facts {#biz.facts}

```yaml
components: [calculator-shell, display, standard-keypad, scientific-keypad, converter, financial-calculator, grapher]
entrypoints:
  - { id: app-shell, path: src/App.jsx, line: 14, invocation: "renders all modes" }
key_symbols:
  - { name: App, path: src/App.jsx, line: 14, role: "owns state, mode switching, history, and persistence" }
commands:
  - { command: "npm run build", purpose: "validates the application bundle", source: "package.json:6-10" }
hotspots:
  - { path: src/App.jsx, reason: "central controller for mode switching and user interaction" }
```

## Capability map {#biz.capabilities}

The repository exposes a browser-based calculator experience with multiple user-facing capabilities. The standard mode supports basic arithmetic, decimal input, memory operations, and expression evaluation. The scientific mode adds trig, logarithms, powers, radicals, factorials, and absolute value functions. The converter mode handles common units such as length, weight, temperature, digital data, and speed. The financial mode provides EMI, compound-interest, and tip-split calculations. The grapher mode lets a user render simple functions with an interactive canvas. These capabilities are surfaced through `src/App.jsx` and the mode-specific modules in `src/components/`.

## Actors and user archetypes visible in the code {#biz.workflows}

The code implies a single end user operating the calculator through buttons, keyboard shortcuts, and browser UI. There is a clear distinction between casual users in standard mode and power users in scientific mode, but the repository does not model separate personas, accounts, roles, or external integrations. The user-facing interactions visible in code are: entering expressions, toggling angle units, copying results, clearing history, changing themes, and using the keyboard as a shortcut layer. These behaviors are implemented in `src/App.jsx:55-153`, `src/components/Display.jsx:17-24`, and `src/components/Header.jsx:84-140`.

## Business workflows {#biz.workflows}

The main workflow is calculation-driven: a user enters an expression, triggers evaluation with `=`, and sees the result update in the display while the app stores the result in a history list. The history drawer and local persistence create a lightweight workflow for revisiting previous calculations. The current implementation also supports a secondary workflow of theme customization and audio toggling, though those are not core business capabilities. The keyboard shortcuts in `src/App.jsx:155-225` make the calculator more usable for frequent power users.

## Business rules and policy locations {#biz.rules}

The most important business-like rules are encoded in the evaluator rather than in a separate domain layer. `src/utils/evaluator.js:3-54` handles expression sanitization, percentage semantics, factorial handling, and angle-unit conversions for trig functions. The code also decides how invalid expressions are surfaced: invalid math returns `Error` and the UI shows it in the display. For user-visible state, `src/App.jsx:115-130` and `src/App.jsx:122-128` define the behavior for evaluation and history retention. There is no evidence of financial or legal policy logic beyond the calculator formulas themselves.

## User-visible failure behavior {#biz.impact}

When a user enters an invalid expression, the app surfaces `Error` rather than crashing. The display component can copy the current result or expression, and the app offers clear and backspace actions. The most visible quality risks are that the UI changes may affect multiple modes at once and that there is no automated regression suite defining what a successful change should look like.

## Compliance or data-sensitivity indicators {#biz.impact}

The application stores user preferences and calculation history in browser `localStorage` (`src/App.jsx:22-53`). This is client-side data only; there is no sign of server-side persistence, API calls, or personal data handling beyond the history and preferences that the user creates locally. The repository does not expose customer records or sensitive data.

## Business-impact map {#biz.impact}

A change to the current calculator look is likely to affect all modes because the shared style variables in `src/index.css` and the common display/keypad components are reused by multiple features. For that reason, a classic-calculator redesign would change the product feel across the standard and scientific surfaces, and possibly the header and shell chrome, even if the underlying calculation behavior stays the same.

## Unknown business assumptions {#biz.unknowns}

The repository does not define a target visual brand for “classic calculator” beyond the current modern glass aesthetic. It is also unclear whether the requested change should cover only the standard mode or all calculator modes and shell chrome. These questions should be resolved with product or design ownership before implementation.

## Where to start {#biz.start}

Start with the shared visual system in `src/index.css`, then the user-facing surfaces in `src/components/Display.jsx`, `src/components/StandardKeypad.jsx`, `src/components/ScientificKeypad.jsx`, and `src/components/Header.jsx`. If the goal is to change only the look and not functionality, the evaluator and arithmetic rules in `src/utils/evaluator.js` should be treated as stable.

## Questions this view does not answer {#biz.limits}

This view does not describe the internal architecture of every component, the full test inventory, or low-level styling implementation details. It does not answer whether the current UI should preserve the existing “ApexCalc” branding or adopt a more literal physical-calculator identity.
