> **Grounding** · calc @ `8d115da4dc8005b437ccad387db0721b2ab06bd9` · view: `testing` · tier: `brief`
> **Generated** 9 August 2026 (2026-08-09T18:59:39Z) · depth: `standard` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.
This view summarizes the current testing posture for the calculator app: there is no dedicated test harness today, the build passes, and lint currently fails. The strongest test targets are the evaluator in `src/utils/evaluator.js` and the main interaction flow in `src/App.jsx`. The most common mistake is treating a styling-only task as if it were fully covered by build validation; in this repo, a visual change needs manual browser verification until tests are introduced.
