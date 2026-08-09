> **Grounding** · calc @ `0d8703c49dc3ca79c684d93cc42220c922d7cd15` · view: `development` · tier: `brief`
> **Generated** 09 August 2026 (2026-08-09T22:30:28Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

This view is for implementation and debugging work. Start in `src/App.jsx` for the app shell, then use `src/utils/evaluator.js` for shared calculator semantics and `src/components/` for mode-specific UI. The main workflow is keypad input → expression state → evaluation → history update, while mode selection swaps between components. The most common mistakes in this area are changing the root shell without considering cross-mode state, and editing the evaluator without checking the graphing, converter, or financial modes that all depend on it. `npm run build` and `npm run lint` are the current validation commands; the repo currently has no test harness.
