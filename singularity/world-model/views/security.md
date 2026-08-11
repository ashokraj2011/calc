> **Grounding** · calc @ `08aa77072f09d6113acba4f1eb8db27786a97988` · view: `security` · tier: `full`
> **Generated** 11 August 2026 (2026-08-11T05:43:13Z) · depth: `deep` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#sec.tldr}
The repository is a browser-only calculator app with a small attack surface. The main security concerns are client-side state manipulation via `localStorage`, clipboard writes, and optional audio feedback; there is no authentication, backend, or secret handling path. The app does not include a network client or process execution, so the most relevant controls are input validation, safe rendering of user input, and careful handling of browser APIs. The repo also does not currently include dedicated security tests.

## Facts {#sec.facts}
```yaml
surface:
  - { area: browser state, path: src/App.jsx, risk: localStorage persistence }
  - { area: clipboard access, path: src/components/Display.jsx, risk: navigator.clipboard }
  - { area: web audio, path: src/utils/audio.js, risk: browser API usage }
  - { area: math expression evaluation, path: src/utils/evaluator.js, risk: untrusted input must stay contained }
controls:
  - { control: structured evaluator return values, path: src/utils/evaluator.js, status: observed }
  - { control: guarded audio context creation, path: src/utils/audio.js, status: observed }
  - { control: localStorage parse error handling, path: src/App.jsx, status: observed }
```

## Security surface {#sec.surface}
- The app stores history, theme, and sound settings in `localStorage`; there is no server-side secret or token handling. Evidence: `src/App.jsx:23-34`.
- The display component writes copied results to the clipboard via `navigator.clipboard.writeText`; the code does not appear to sanitize or validate the value beyond using the current result or expression. Evidence: `src/components/Display.jsx:17-24`.
- The audio utility creates a Web Audio context and synthesizes tones; it is not a network or command-execution path. Evidence: `src/utils/audio.js:18-107`.
- The evaluator consumes user-entered mathematical expressions and returns a structured error result instead of executing arbitrary code. Evidence: `src/utils/evaluator.js:4-54`.

## Main controls and assumptions {#sec.controls}
- The evaluator sanitizes common operators and constants before passing input to `mathjs`; this reduces the risk of malformed expressions reaching the parser. Evidence: `src/utils/evaluator.js:8-32`.
- The app guards `localStorage` reads with a `try/catch` and falls back to an empty history list if parsing fails. Evidence: `src/App.jsx:28-34`.
- The audio utility catches browser restrictions and exits gracefully if the API is unavailable. Evidence: `src/utils/audio.js:102-107`.
- The repo has no authentication, authorization, or secret-loading mechanism to review. The main risk is not a server-side breach but an untested client-side failure mode.

## Security tests and gaps {#sec.tests}
No dedicated security tests were observed. The existing tests focus on calculator behavior and build output rather than browser API abuse, clipboard safety, or persisted state tampering. Evidence: `src/App.test.jsx:1-200`, `src/utils/evaluator.test.js:1-75`.

## Where to start {#sec.start}
For a security review, start at `src/utils/evaluator.js` for input handling, `src/App.jsx` for persisted state and browser storage, and `src/components/Display.jsx` for clipboard interaction. If the app grows a backend or network layer, re-evaluate the threat model.

## Questions this view does not answer {#sec.limits}
This view does not review network endpoints or backend services because the repository does not contain them. It also does not assess deployment infrastructure or container hardening, which are absent here.
