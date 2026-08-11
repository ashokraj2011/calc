> **Grounding** · calc @ `4294b2b282ef8049f60c94da9db281200f81390d` · view: `security` · tier: `brief`
> **Generated** 11 August 2026 (2026-08-11T03:06:22.858Z) · depth: `standard` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## Snapshot {#sec.brief}
This repository is a front-end-only calculator app, so the security story is mostly about browser-side input handling, persisted state, and dependency exposure. The main risks are untrusted expression strings, browser `localStorage` persistence, and the evaluator’s use of `math.evaluate` on sanitized input. No secrets or auth flows were observed in the inspected source.
