> **Grounding** · calc @ `0d8703c49dc3ca79c684d93cc42220c922d7cd15` · view: `security` · tier: `brief`
> **Generated** 09 August 2026 (2026-08-09T22:30:28Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

This view focuses on the security posture of a client-side calculator app. The main concerns are browser-only persistence, user-controlled expression evaluation, and the lack of a dedicated security test suite. The app stores history and preferences in `localStorage` and reuses those values later, so local tampering is a practical risk. The expression evaluator and grapher both execute user input in the browser, and the repository currently has no CSP or explicit security-specific validation workflow. The most important files are `src/App.jsx`, `src/utils/evaluator.js`, `src/components/FunctionGrapher.jsx`, and `index.html`.
