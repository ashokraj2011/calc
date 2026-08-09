> **Grounding** · calc @ `e9d82bcdfd4363c98e447b92108203f18828d6ff` · view: `architecture` · tier: `brief`
> **Generated** 09 August 2026 (2026-08-09T23:57:03Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## Architecture summary {#arch.brief}

This view is for design and change-impact work. The app is a front-end-only React experience with one stateful shell, many presentational components, and a shared evaluator module. The main architectural boundary is `src/App.jsx` for orchestration, `src/components/` for UI views, `src/utils/evaluator.js` for math and helper logic, and `src/index.css` for theming.

The key design decision is to keep the calculator behavior simple and centralized. Expression state and keyboard handling live in the shell, while the numeric engine stays separate. That makes the app easy to extend, but it also means any visual or interaction change can touch several components because the styling system is shared. If a change affects the calculation engine, start with the evaluator module; if it affects presentation, start with the theme tokens and the relevant component.
