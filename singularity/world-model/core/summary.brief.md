> **Grounding** · calc @ `dfeda6775cb0c4abe77e42605fcc6bdd1bf78f3c` · view: `core` · tier: `brief`
> **Generated** 09 August 2026 (2026-08-09T21:05:23Z) · depth: `standard` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.


## Overview {#core.brief}
This repository is a React/Vite calculator app with a multi-mode UI and a shared visual theme system. The main implementation lives in `src/App.jsx`, theme tokens and component classes are centralized in `src/index.css`, and calculator evaluation is delegated to `src/utils/evaluator.js`. The primary entry point is `src/main.jsx`, and the standard validation commands are `npm run build` and `npm run lint`. The largest practical risk for a styling change is that shared CSS classes and tokens can affect more than one calculator surface unless the change is scoped carefully.
