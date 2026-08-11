> **Grounding** · calc @ `4294b2b282ef8049f60c94da9db281200f81390d` · view: `development` · tier: `brief`
> **Generated** 11 August 2026 (2026-08-11T03:06:22.858Z) · depth: `standard` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## Snapshot {#dev.brief}
For implementation work, start in `src/App.jsx` for state and keyboard routing, `src/utils/evaluator.js` for shared calculator semantics, and the target component under `src/components/` for mode-specific UI. The main mistake is changing the UI without checking the shared evaluator or the app shell, because mode state and expression logic are coupled. Build currently passes; lint currently fails, so new work should avoid adding to existing issues.
