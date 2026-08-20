> **Grounding** · calc @ `6b0100c4e4f6f61b03c4e5fcbf7d58052f63d7f6` · view: `task.wrk-tan` · tier: `full`
> **Generated** 20 August 2026 (2026-08-20T04:09:10Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## TL;DR {#task.wrk-tan.tldr}

This guide is for the intake artifact work item WRK-TAN. The task is process-oriented rather than source-code implementation: prepare the intake artifact and move the work item to the next valid workflow step. In this repository, the governing workflow file shows that a feature work item progresses from intake to requirements, so the next valid step after intake is requirements unless the workflow state has already been advanced. The repository evidence for the task is the calculator capability surface, the app shell, and the workflow phase definitions.

## Facts {#task.wrk-tan.facts}

```yaml
current_task: "Prepare the intake artifact for WRK-TAN and advance it to the next valid step."
relevant_views: [business]
relevant_domains: [calculator-capabilities]
workflow_hint: "feature intake -> requirements" 
```

## Task interpretation {#task.wrk-tan.interpretation}

The request is to prepare or refresh the intake artifact for WRK-TAN and then advance the work item to the next valid workflow step. This is not an application feature change, so the relevant grounding comes from the repository’s business view and the governed workflow definition rather than implementation changes. Evidence: evidence:workflow-phases.

## Relevant roles {#task.wrk-tan.roles}

- Product-owner or intake agent: responsible for clarifying purpose, users, and scope.
- Repository grounding agent: responsible for aligning the artifact with repository capabilities and workflow phase rules.

## Relevant components and paths {#task.wrk-tan.paths}

- src/App.jsx: the user-facing calculator app shell and mode orchestration.
- src/utils/evaluator.js: the shared math, conversion, and financial calculation semantics.
- singularity/workflow.yml: the authoritative phase sequence for feature work items.

## Primary repository facts to preserve {#task.wrk-tan.facts-preserve}

- The repository is a browser-based calculator utility with standard/scientific math, unit conversion, financial helpers, and function graphing.
- The app does not show a backend service or a customer-data system in the inspected snapshot.
- The workflow sequence for feature work items is intake -> requirements -> design -> implementation-spec -> implementation -> verification -> conformance. Evidence: evidence:workflow-phases.

## Expected change flow {#task.wrk-tan.flow}

1. Draft or update the intake artifact so it reflects the repository’s actual capability surface.
2. Use the business view and calculator domain model to keep the artifact grounded in the app’s observable capabilities.
3. Advance the work item to the next valid phase. In the observed workflow, the next phase after intake is requirements for a feature work item. Confirm the work item’s actual phase state before mutating it.

## Contracts and invariants to preserve {#task.wrk-tan.invariants}

- Do not change application source code as part of this task.
- Do not invent customer or deployment facts that do not appear in the repository.
- Keep the artifact aligned with the repository’s observed capabilities and the governed workflow sequence.

## Tests or validation to consider {#task.wrk-tan.validation}

- If a workflow artifact is generated or updated, verify that the content still matches the repository’s observed capabilities.
- If the task changes the workflow state, confirm the phase transition against singularity/workflow.yml before publishing.

## Risks and unknowns {#task.wrk-tan.risks}

- The exact current phase of WRK-TAN is not visible from the repository snapshot alone.
- The governed workflow may have additional branch- or approval-specific constraints that are not visible in the repository files.

## Evidence IDs {#task.wrk-tan.evidence}

- evidence:repo-purpose
- evidence:app-modes
- evidence:workflow-phases
