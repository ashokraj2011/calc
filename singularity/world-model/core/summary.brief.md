> **Grounding** · calc @ `6bbcaf1739e310a06af5eb0a9643a54c511b70f8` · view: `core` · tier: `brief`
> **Generated** 09 August 2026 (2026-08-09T18:15:52Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.


## Summary {#core.summary}

This repository is a browser-based React calculator app built with Vite. Its main capabilities are standard arithmetic, scientific functions, unit conversion, financial tools, and graphing, all composed through a single `src/App.jsx` shell and modular components under `src/components/`. Calculation semantics come from `src/utils/evaluator.js`, which uses `mathjs` for parsing and formatting. The UI is visually rich and theme-driven via `src/index.css` and component classes; the repo’s standard commands are `npm run dev`, `npm run build`, and `npm run lint`. The biggest risk for changes is that layout and behavior are spread across many UI modules, so visual updates can be easy to miss and cross-cutting regressions are likely.
