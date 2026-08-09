> **Grounding** · calc @ `e9d82bcdfd4363c98e447b92108203f18828d6ff` · view: `security` · tier: `brief`
> **Generated** 09 August 2026 (2026-08-09T23:57:03Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## Security summary {#sec.brief}

This view is for security review and trust-boundary analysis. The app is browser-only and does not implement authentication, authorization, or server-side secrets. The main sensitive surface is the calculator evaluator in `src/utils/evaluator.js`, which processes user-entered expressions client-side, and the browser storage logic in `src/App.jsx`.

The most common mistake is assuming the app has a backend security model when it does not. The repository has no secrets and no authentication flow, but it still needs careful review around expression sanitization and browser persistence. The best starting points are `src/utils/evaluator.js` and `src/App.jsx`.
