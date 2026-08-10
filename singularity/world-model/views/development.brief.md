> **Grounding** · calc @ `e9d82bcdfd4363c98e447b92108203f18828d6ff` · view: `development` · tier: `brief`
> **Generated** 09 August 2026 (2026-08-09T23:57:03Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## Development summary {#dev.brief}

This view is for implementation and code-review work. The main entry points are `src/App.jsx` for calculator state and interaction flow, `src/components/` for feature-specific UI, and `src/utils/evaluator.js` for calculation behavior. The most common mistake is changing the UI in one component without also checking the shared theme tokens in `src/index.css`.

The standard validation commands are `npm run build` and `npm run lint`. Build succeeded in this run, while lint reported a broad set of pre-existing issues. For a visual change like a classic calculator skin, the likely edit points are the shared theme variables, `Header`, `Display`, and the keypad components. For a logic change, focus on the evaluator module and the equals-handler path in `App`.
