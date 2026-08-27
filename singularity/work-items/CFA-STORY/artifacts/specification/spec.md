<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "CFA-STORY",
  "workType": "spec-driven-standard",
  "phase": "specification",
  "generation": 1,
  "status": "in_progress",
  "generatedBy": {
    "name": "Ashok Raj",
    "email": "88361104+ashokraj2011@users.noreply.github.com",
    "login": "ashokraj2011",
    "githubLookup": "resolved"
  },
  "generatedAgent": "product-owner",
  "authorship": {
    "schemaVersion": 1,
    "producer": "governed-agent",
    "channel": "copilot-host",
    "actor": {
      "name": "Ashok Raj",
      "email": "88361104+ashokraj2011@users.noreply.github.com",
      "login": "ashokraj2011",
      "githubLookup": "resolved"
    },
    "governedAgentContext": {
      "agentId": "product-owner"
    },
    "kernelModel": {
      "invoked": false,
      "status": "exact",
      "invocationIds": []
    },
    "externalAiUse": {
      "value": "unknown",
      "status": "unavailable"
    },
    "source": {
      "kind": "in-place",
      "filename": "spec.md",
      "mediaType": "text/markdown",
      "sha256": "cfb3f7facbf1514ba0b42abbcf2e40801903542c076d10553e29678683e1a57a",
      "bytes": 10481
    },
    "generation": 1,
    "publishedAt": "2026-08-27T04:35:16.326Z"
  },
  "sourceCommit": "307d1aecb0c1cfd0e3494f90e6cb1137524f23c0",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "87be75456efb3109772edfe7165e275f0477ca07d457e4b39cab66d0e30258e2",
  "sourceSha256": "9bf622393e4583d6985423b31f43aff0a4745257daf469e27a55612e3248e70e",
  "template": {
    "path": "singularity/templates/spec-driven/spec.md",
    "sha256": "37c4fb807258773b3944399e2cf8dca7cc375dfcb2d906e0e72a9cae54efd8cf"
  },
  "inputs": null,
  "designSources": {
    "sets": [],
    "approved": null
  },
  "remoteAgent": null,
  "clarification": {
    "generation": 1,
    "path": "singularity/work-items/CFA-STORY/context/clarifications-specification-gen1.json",
    "sha256": "b003bcc262fd1b5fa37d6100c30cd5f0f09b17ca16c10cb474d30b9a8d800bc8",
    "promptSha256": "3049ea83b20320c71a8b4bedfec5814af8ace8621555e94ad9064f9eb74bb53b",
    "responses": 1,
    "markers": [],
    "recordedAt": "2026-08-27T04:34:22.323Z",
    "recordedBy": {
      "name": "Ashok Raj",
      "email": "88361104+ashokraj2011@users.noreply.github.com",
      "login": "ashokraj2011",
      "githubLookup": "resolved"
    }
  },
  "telemetry": [
    {
      "generation": 1,
      "path": "singularity/work-items/CFA-STORY/telemetry/specification-gen1.json",
      "sha256": "91eee692ab0b2cbd893ef99abc63812b30e9e2b41c12c886f3e3cebc2e0c45e7",
      "status": "pending",
      "models": [],
      "providerCost": null
    }
  ],
  "remoteOutputs": [],
  "usage": [
    {
      "status": "unavailable",
      "source": "copilot-otel-unavailable",
      "provider": null,
      "model": null,
      "requestedModel": null,
      "resolvedModel": null,
      "resolvedModelAssurance": "unavailable",
      "inputTokens": null,
      "outputTokens": null,
      "cachedInputTokens": null,
      "cacheWriteInputTokens": null,
      "totalTokens": null,
      "providerCost": null,
      "costStatus": "unavailable",
      "spans": null,
      "startedAt": "2026-08-27T04:35:16.326Z",
      "completedAt": "2026-08-27T04:35:16.326Z",
      "agent": "product-owner",
      "generation": 1
    }
  ],
  "sequenceOverrides": [],
  "approvals": [],
  "selfApproval": false,
  "conformanceTree": null
}
-->

# Specification — CFA-STORY

<!--
Scenarios come first, and general requirements come after them `[SPK:REQ-068]`. That ordering is the
template's opinion: a requirement written before anyone has described the situation it serves tends
to describe the system instead of the need, and nobody notices until verification.

Where the current Story evidence leaves something material unknown, say so with a marker rather
than guessing. Use this syntax:

    [NEEDS CLARIFICATION: a question grounded in the current Story evidence]

Replace the angle-bracketed placeholder; never copy or ask it as written. The question must be one
non-empty line and must arise from the pinned sources, approved upstream artifacts, repository world
model, or a contradiction among them. Markers are extracted the same way clauses are, so a marker
inside fenced or inline code is ignored `[SPK:REQ-063]`. This phase blocks publication while any
marker is unresolved, and a marker is only resolved when a later generation removes it *and* records
the answer `[SPK:REQ-067]` — deleting the text alone is an integrity failure, not an answer.
-->

## Agent brief

<!--
Summarize the approved intent for downstream agents in a compact, standalone form. Include the
problem, intended outcome, principal actors, most important scenarios, hard constraints, and major
exclusions. Do not introduce claims that are absent from the sections below. Exact requirements and
boundary conditions are preserved separately by the governed projection.
-->

The calculator will add a CFA Level I study toolkit to the existing browser calculator. A learner
can select a Level I topic, enter the inputs for a supported calculation, and receive a clearly
formatted result with the formula context needed to check their work. The first release covers
Quantitative Methods, Economics, Financial Statement Analysis, Corporate Issuers, Equity, Fixed
Income, Derivatives, Alternative Investments, and Portfolio Management. It remains client-side,
uses the existing calculator visual language, and excludes authenticated learning content,
question-bank delivery, and server-backed progress tracking.

## Actors

The primary actor is a CFA Level I learner who may use every study-tool function and enter or clear
their own calculation inputs. A reviewer or instructor may inspect a learner's visible result but
has no additional application authority. There is no sign-in or privileged role in this release.

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

### S1 — A learner practices a CFA Level I calculation

**Priority:** P1
**Actor:** CFA Level I learner
**Context:** The learner is using the calculator in a browser and wants to practice a calculation
from one of the nine Level I topic areas.

- **Given** the CFA toolkit is open and no calculation has been entered
  **When** the learner selects a topic and enters valid inputs for a supported calculation
  **Then** the app displays the calculated result, the selected topic or calculation name, and the
  inputs used without navigating away from the calculator.

- **Given** a completed calculation is visible
  **When** the learner changes an input or clears the form
  **Then** the result is recalculated from the current inputs or removed, and no stale result is
  shown as current.

### S2 — A learner checks an invalid or incomplete calculation

**Priority:** P2
**Actor:** CFA Level I learner
**Context:** The learner has selected a calculation but has omitted an input or entered a value
outside its valid domain.

- **Given** one or more required inputs are empty, malformed, or outside the calculation's valid
  domain
  **When** the learner requests a result
  **Then** the app shows an actionable validation message, does not show a numeric result, and
  keeps the entered values available for correction.

### S3 — A learner captures the completed study flow

**Priority:** P2
**Actor:** CFA Level I learner
**Context:** The learner has selected a topic, entered inputs, and received a result.

- **Given** a valid result is visible in the existing calculator interface
  **When** the completed flow is captured for acceptance review
  **Then** the screenshot shows the selected CFA topic, the relevant inputs, and the resulting
  value in the existing app style.

## Failure and empty states

What happens the first time, with nothing there yet, and when each step fails. These are where
specifications are usually silent and implementations usually improvise.

- **Empty:** On first use, no topic or calculation is selected and no result is displayed. The
  learner can start by selecting one of the nine Level I topic areas.
- **Failure:** If inputs cannot be parsed or a calculation is undefined, the app displays a
  validation or calculation error instead of a misleading numeric value. The learner can correct
  the inputs without losing the current form state.
- **Partial:** If a supported calculation has valid values for some fields but not all required
  fields, the app displays field-level guidance and withholds the result until all required values
  are valid.

## Permissions

All visitors may select topics, enter inputs, calculate, clear, and review results. No operation
requires authentication, and this release exposes no private or role-restricted data.

## Boundary conditions

- The first release must expose exactly these nine topic areas: Quantitative Methods, Economics,
  Financial Statement Analysis, Corporate Issuers, Equity, Fixed Income, Derivatives, Alternative
  Investments, and Portfolio Management.
- Each calculation must declare its required inputs and valid domain before calculation. Empty,
  malformed, non-finite, or out-of-domain values must be rejected with an actionable message.
- Results are browser-local and do not require a backend, account, or network request.
- The user flow must remain usable in the existing responsive calculator layout; no new flow may
  require horizontal scrolling at the app's supported mobile breakpoint.
- A calculation must not replace a valid result with a stale value after an input changes or is
  cleared.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- **SPEC-001** — The app must provide a CFA Level I toolkit entry point using the existing
  calculator navigation and visual language. *(S1, S3)*
- **AC-001** — A learner can reach the toolkit from the app, and the completed flow uses the
  existing calculator layout without a separate authenticated surface. *(S1, S3)*
- **SPEC-002** — The toolkit must expose the nine Level I topic areas named in the boundary
  conditions. *(S1)*
- **AC-002** — A topic selector or equivalent visible navigation presents all nine named topics and
  allows the learner to select one. *(S1)*
- **SPEC-003** — Every released calculation must declare its required inputs, calculate from the
  current input values, and display the calculation name and result together. *(S1)*
- **AC-003** — For each released calculation, valid inputs produce a visible result that reflects
  the current values and identifies the calculation used. *(S1)*
- **SPEC-004** — The toolkit must validate empty, malformed, non-finite, and out-of-domain inputs
  before displaying a numeric result. *(S2)*
- **AC-004** — Invalid or incomplete input produces actionable guidance, preserves correction-ready
  values, and displays no numeric result. *(S2)*
- **SPEC-005** — Changing or clearing an input must invalidate or recalculate the displayed result
  so that it never represents superseded values. *(S1, S2)*
- **AC-005** — After an input change or clear action, the visible result is recalculated from the
  new values or removed. *(S1, S2)*
- **SPEC-006** — The completed user flow must show the selected topic, relevant inputs, and result
  in a screenshot using the existing app style. *(S3)*
- **AC-006** — Acceptance evidence includes a screenshot containing the selected Level I topic,
  entered inputs, and resulting value in the completed flow. *(S3)*

## Non-functional requirements

- **NFR-001 — Responsiveness:** For a valid local calculation, the result must appear within 250 ms
  of the calculation action in a production build, measured with browser performance timestamps
  across 20 consecutive runs on the supported development machine.
- **NFR-002 — Accessibility:** Topic controls, inputs, validation messages, and results must be
  keyboard reachable and have accessible names; verify with the existing automated UI test setup
  and an accessibility-tree inspection of the completed flow.
- **NFR-003 — Privacy:** Inputs and results must remain client-side and must not be sent to a
  network endpoint; verify with a browser network inspection during the completed flow.
- **NFR-004 — Layout:** The completed flow must render without horizontal overflow at the supported
  mobile and desktop viewport sizes; verify with responsive browser screenshots.

## Constitution articles

Cite the article IDs this specification is bound by `[SPK:REQ-100]`. The kernel validates that each
cited ID exists at the pinned revision before publication `[SPK:REQ-101]`.

- No additional constitution article was supplied by the Story inputs. Publication must rely on
  the configured specification policy and the acceptance criteria above; this is an explicit
  source limitation, not an inferred exemption.

## Assumptions

- “CFA” means Chartered Financial Analyst examination preparation, as confirmed at the human
  clarification checkpoint.
- The first release is CFA Level I core coverage, as confirmed at the human clarification
  checkpoint.
- “All the things used in CFA exam” is interpreted as calculator-oriented study tools and
  calculations, not a complete learning curriculum or licensed exam content.
- The existing calculator style and responsive behavior are the design baseline.
- The existing client-side evaluator and test tooling remain available to implement and verify the
  feature.

## Out of scope

- CFA Level II or Level III functionality.
- A question bank, mock exam engine, curriculum text, licensed CFA Institute content, or answer
  explanations beyond calculation context.
- User accounts, cloud synchronization, saved study progress, instructor dashboards, or backend
  services.
- Changes to unrelated calculator modes or a visual redesign of the existing application.
