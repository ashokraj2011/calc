> **Grounding** · calc @ `dfeda6775cb0c4abe77e42605fcc6bdd1bf78f3c` · view: `testing` · tier: `brief`
> **Generated** 09 August 2026 (2026-08-09T21:05:23Z) · depth: `standard` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.


## Overview {#test.brief}
This view captures the current test posture for the calculator app. The repository exposes build and lint scripts but no dedicated automated tests for UI, integration, or calculator behaviors. The actionable guidance is to use `npm run build` for compile verification and pair it with manual visual review for any styling change. The most common mistake is assuming that a passing build means the UI is fully validated when no scripted UI tests are present.
