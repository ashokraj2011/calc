> **Grounding** · calc @ `1b17ac362bdedf23ef4f7683203fb8e1a715428b` · view: `core` · tier: `brief`
> **Generated** 20 August 2026 (2026-08-20T03:02:27.293Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## Snapshot {#core.brief}
This repository is a client-side calculator app built with React and Vite. Its main components are the app shell in `src/App.jsx`, the shared math evaluator in `src/utils/evaluator.js`, the scientific keypad in `src/components/ScientificKeypad.jsx`, and the financial tools in `src/components/FinancialCalculator.jsx`. The primary entry point is the Vite app started by `npm run dev`, and the standard validation commands are `npm test` and `npm run build`. The single largest risk is that the app relies on browser-local state and has no backend or persistence layer beyond `localStorage`.
