> **Grounding** · calc @ `08aa77072f09d6113acba4f1eb8db27786a97988` · view: `task.regenerate-conformance` · tier: `full`
> **Generated** 11 August 2026 (2026-08-11T05:43:13Z) · depth: `deep` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#task.regenerate-conformance.tldr}
The task is to regenerate conformance evidence after adding a Vitest suite tagged `@ac:AC-001..AC-005`. In practice, this means reviewing the tests already present in `src/App.test.jsx`, `src/utils/evaluator.test.js`, and `src/build.test.js`, confirming the repository’s current behavior, and updating or re-running the conformance evidence only if the test suite and build behavior still match the documented acceptance criteria. The main change surface is validation and regression evidence rather than application logic.

## Task interpretation {#task.regenerate-conformance.context}
The task text is: “Regenerate conformance after adding Vitest test suite tagged @ac:AC-001..AC-005”. The repository already contains those tags in the test files, so the work is primarily evidence and validation rather than major feature implementation. Evidence: `src/App.test.jsx:25-200`, `src/utils/evaluator.test.js:4-75`, `src/build.test.js:12-23`.

## Relevant roles {#task.regenerate-conformance.roles}
- Testing: validate that the suite and build commands still pass.
- Development: confirm the app and evaluator behavior remain consistent with the existing implementation.
- Security: confirm no new security-relevant behavior was introduced, which is unlikely in this task unless new browser APIs were added.

## Relevant components and domains {#task.regenerate-conformance.impact}
- `src/App.jsx` and `src/components/` — UI behavior under test.
- `src/utils/evaluator.js` — semantics under test.
- Domain: `expression-evaluation`.

## Primary paths and symbols {#task.regenerate-conformance.paths}
- `src/App.test.jsx` — UI regression cases.
- `src/utils/evaluator.test.js` — evaluator semantics.
- `src/build.test.js` — build verification.
- `src/test/setup.js` — test environment stubs.

## Expected change flow {#task.regenerate-conformance.steps}
1. Re-run `npm test` and `npm run build`.
2. Confirm the test tags `@ac:AC-001..AC-005` are represented by the current suite.
3. If conformance artifacts are maintained separately, update them to reflect the observed pass results.
4. Record any mismatch between the intended acceptance criteria and the current tested behavior.

## Contracts and invariants to preserve {#task.regenerate-conformance.contracts}
- Arithmetic and formatting semantics in `src/utils/evaluator.js` must remain unchanged.
- The app shell must continue to support mode switching, memory, history, and shortcuts as tested.
- Build output must still be produced by `npm run build`.

## Tests to add or update {#task.regenerate-conformance.tests}
If the existing conformance artifacts are stale, update the verification record rather than changing app logic. The existing suite already covers the same behavior families. Evidence IDs: `E-004`, `E-005`.

## Commands to run {#task.regenerate-conformance.commands}
- `npm test`
- `npm run build`
- `npm run lint` (for baseline awareness; it currently fails with existing issues)

## Risks and unknowns {#task.regenerate-conformance.risks}
- The task could be blocked by existing lint failures unrelated to the conformance work.
- If the task expects a formal conformance artifact file, the repository currently does not expose one outside the test suite.

## Where to start {#task.regenerate-conformance.start}
Start with the three test files and the package scripts. This task is about verification evidence, not implementation changes.

## Questions this view does not answer {#task.regenerate-conformance.limits}
This guide does not prescribe a particular conformance file format. It assumes the runtime or review workflow already knows how to consume the evidence it observes.
