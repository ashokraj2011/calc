> **Grounding** · calc @ `08aa77072f09d6113acba4f1eb8db27786a97988` · view: `core` · tier: `brief`
> **Generated** 11 August 2026 (2026-08-11T05:43:13Z) · depth: `deep` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## Summary {#core.summary}
ApexCalc is a React + Vite single-page calculator app with standard, scientific, converter, financial, and grapher modes. The main implementation is in `src/App.jsx` (mode routing and shared state), `src/utils/evaluator.js` (math, unit conversion, finance, number formatting), and `src/components/` (mode-specific UI). The primary runtime entry points are `src/main.jsx` and `src/App.jsx`. The standard validation commands are `npm test`, `npm run build`, and `npm run lint`; `npm test` and `npm run build` passed during this inspection, while `npm run lint` currently fails with existing issues. The largest risk is that calculator behavior is tightly coupled to UI state and the lint baseline is not currently clean.
