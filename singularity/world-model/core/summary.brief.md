> **Grounding** · calc @ `5bce85ba2c79dc7dbfd36ecac3f10d1233881d4a` · view: `core` · tier: `brief`
> **Generated** 11 August 2026 (2026-08-11T02:51:13Z) · depth: `standard` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.


## Summary {#core.brief}
This repository is a single-page React calculator app built with Vite. Its major pieces are the root app shell in `src/App.jsx`, the shared evaluator in `src/utils/evaluator.js`, mode-specific UI components in `src/components/`, and theme/layout styling in `src/index.css`. The primary entry point is `src/main.jsx`, and the standard validation commands are `npm run dev`, `npm run build`, and `npm run lint`. The largest risk for a Windows-style visual change is that the repo has no built-in automated UI test harness and no explicit Windows Calculator design spec to compare against.
