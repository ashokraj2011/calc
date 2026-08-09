> **Grounding** · calc @ `dfeda6775cb0c4abe77e42605fcc6bdd1bf78f3c` · view: `development` · tier: `brief`
> **Generated** 09 August 2026 (2026-08-09T21:05:23Z) · depth: `standard` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.


## Overview {#dev.brief}
This view is the implementation-oriented grounding for day-to-day changes. It identifies the main entry point (`src/App.jsx`), the shared visual system (`src/index.css`), and the expression evaluator (`src/utils/evaluator.js`). It also clarifies the most likely files to change for a classic-style visual update and warns that build validation is available while lint currently fails on existing issues. The most common mistake is editing a single component when the real styling contract is shared through CSS variables and component classes.
