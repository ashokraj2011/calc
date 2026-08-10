> **Grounding** · calc @ `e9d82bcdfd4363c98e447b92108203f18828d6ff` · view: `security` · tier: `full`
> **Generated** 09 August 2026 (2026-08-09T23:57:03Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#sec.tldr}

The app is browser-only and does not implement authentication or server-side data handling. The main security concerns are client-side execution, local browser storage, and the fact that the calculator evaluator processes user input in the browser. The repo does not expose secrets, but the current design should be treated as a client-side trust boundary rather than a hardened server model.

## Facts {#sec.facts}

```yaml
components: [calculator-shell, calculator-ui, calculator-engine]
entrypoints:
  - { id: entry-app-shell, path: src/App.jsx, line: 14, invocation: "App component" }
key_symbols:
  - { name: evaluateExpression, path: src/utils/evaluator.js, line: 4, role: "sanitizes and evaluates expressions" }
commands:
  - { command: "npm run build", purpose: "build the app", source: "package.json:6-10" }
hotspots:
  - { path: src/utils/evaluator.js, reason: "executes user-entered math expressions client-side" }
  - { path: src/App.jsx, reason: "persists theme/history/sound state in browser storage" }
```

## Trust boundaries {#sec.trust}

The key trust boundary is between user-entered text in the browser and the `mathjs` evaluator. The app does not call a backend or authenticate users, so there is no remote authorization boundary to review. The main risk is that any code path that evaluates user input in the browser could become an XSS or script-execution issue if it is broadened later.

## Secrets and configuration {#sec.config}

No API keys, tokens, or secret values were found in the source tree. The repository uses `localStorage` keys such as `apex_theme`, `apex_sound`, and `apex_history`, but these are not secrets. The current implementation does not load secrets from environment variables.

## Input handling and execution {#sec.input}

The evaluator module sanitizes expressions by replacing calculator symbols with `mathjs` equivalents and by handling percentages, factorials, and angle units. That is a useful guardrail, but it is still client-side evaluation of arbitrary expressions. The app should be treated as a limited execution environment rather than a general-purpose scripting sandbox.

## Client-side storage and privacy {#sec.storage}

The app stores theme, sound, and history data in the browser via `localStorage` in `src/App.jsx`. This data is not transmitted to a backend in the code inspected here, but it remains available to any script running in the browser context. The repository does not include a privacy policy or data retention model.

## Security tests and gaps {#sec.tests}

The repository has no dedicated security tests. The only executed validation was the production build, which succeeded; no security-specific test suite was run. The most significant remaining gap is the absence of hardening or regression tests around expression sanitization and browser-storage handling.

## Where to start {#sec.start}

Start with `src/utils/evaluator.js` for expression handling and `src/App.jsx` for persistence and UI state. Review `src/index.css` only if the change affects styling rather than trust boundaries.

## Questions this view does not answer {#sec.limits}

This view does not evaluate third-party dependency risk beyond the files inspected. It also does not assess runtime infrastructure because the app has no server component in this repository.
