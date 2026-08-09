> **Grounding** · calc @ `0d8703c49dc3ca79c684d93cc42220c922d7cd15` · view: `security` · tier: `full`
> **Generated** 09 August 2026 (2026-08-09T22:30:28Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#sec.tldr}
The security posture of this repository is that of a browser-only calculator app with no backend, no authentication layer, and no secret-loading infrastructure. The main trust boundary is the browser origin: the app stores theme, sound, and history data in `localStorage`, evaluates user expressions on the client, and exports history to a local file. The main risks are local tampering of persisted state, a heuristic expression evaluator that is not a sandbox, and the lack of a Content Security Policy or dedicated security tests.

## Facts {#sec.facts}

```yaml
trust_boundaries:
  - { name: browser origin, path: src/App.jsx:22-53, notes: "localStorage and document state" }
  - { name: expression evaluator, path: src/utils/evaluator.js:4-54, notes: "client-side math evaluation" }
  - { name: graphing canvas, path: src/components/FunctionGrapher.jsx:93-132, notes: "user expression compiles in the browser" }
sensitive_data:
  - { type: browser cache, path: src/App.jsx:22-53, notes: "history and user preferences" }
commands:
  - { command: "npm run lint", purpose: "available static checks", source: "package.json:6-10" }
  - { command: "npm run build", purpose: "available build validation", source: "package.json:6-10" }
```

## Security posture {#sec.posture}
This repository is a client-side React application with no visible backend, authentication, or authorization flow. Because the app runs entirely in the browser, the principal issues are local data handling and client-side execution rather than server-side authN/authZ. Evidence: `e-core-purpose`, `e-browser-storage`.

## Trust boundaries and attack surface {#sec.boundaries}
The main trust boundaries are the browser runtime, `localStorage`, and the user-controlled expression input. The app accepts text from the user, passes it to `evaluateExpression`, and in the grapher case sends it to `math.compile`. These are not network-facing boundaries, but they are still important because the app executes user-provided syntax in the client. Evidence: `e-browser-storage`, `e-evaluator`, `e-graphing`.

## Data handling and persistence {#sec.data}
The app stores theme, sound, and history state in browser `localStorage` via the root `App` component. History entries are later reused by the drawer without a signature or integrity check; this makes local tampering or invalid data a practical concern if the origin is compromised or storage is modified. Evidence: `e-browser-storage`, `e-history-export`.

## Secrets and sensitive material {#sec.secrets}
The repository does not include obvious secret-loading code, environment variable access, or service credentials. No secrets are present in the inspected source files. The only user-visible data stored locally is calculator history and preferences. Evidence: `e-core-purpose`, `e-browser-storage`.

## Input validation and output safety {#sec.validation}
The evaluator performs some normalization and returns an `Error` string for invalid math states, but it is not a strict sandbox and it should not be treated as a security boundary. The app also lacks a CSP or explicit security headers in the HTML entry point; this increases future risk if untrusted markup or scripts are introduced. Evidence: `e-evaluator`, `e-entry-html`.

## Security tests and coverage gaps {#sec.tests}
No dedicated security tests, fuzzing setup, or dependency scanning configuration was found. The available validation commands are only lint and build, which do not address security posture directly. Evidence: `e-lint`, `e-test-gap`.

## Security risks and recommendations {#sec.risks}
- Treat persisted history as untrusted input when reusing it.
- Keep `mathjs` and React dependencies updated, since client-side evaluation libraries can change behavior over time.
- Consider adding a CSP and reducing reliance on browser-only state if the app later grows beyond this local calculator scope.
Evidence: `e-browser-storage`, `e-evaluator`, `e-graphing`.

## Where to start {#sec.start}
Start with `src/App.jsx` for persistence and trust boundaries, then inspect `src/utils/evaluator.js` and `src/components/FunctionGrapher.jsx` for client-side execution paths. Evidence: `e-app-shell`, `e-evaluator`, `e-graphing`.

## Questions this view does not answer {#sec.limits}
It does not evaluate deployment infrastructure, reverse-proxy policy, or external hosting controls because those files were not inspected. Evidence: `e-core-purpose`.
