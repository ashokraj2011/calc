<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "WRK-890",
  "workType": "chore",
  "phase": "intake",
  "generation": 1,
  "status": "awaiting_approval",
  "generatedBy": {
    "name": "Ashok Raj",
    "email": "88361104+ashokraj2011@users.noreply.github.com",
    "login": "ashokraj2011"
  },
  "generatedAgent": "product-owner",
  "authorship": {
    "schemaVersion": 1,
    "producer": "governed-agent",
    "channel": "copilot-host",
    "actor": {
      "name": "Ashok Raj",
      "email": "88361104+ashokraj2011@users.noreply.github.com",
      "login": "ashokraj2011"
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
      "filename": "intake.md",
      "mediaType": "text/markdown",
      "sha256": "d98617133a4b9ee6d72b44b4a77d389b627072bf5b62dde2aaa80e3b8247bc52",
      "bytes": 942
    },
    "generation": 1,
    "publishedAt": "2026-08-09T18:20:05.484Z"
  },
  "sourceCommit": "c6030dbb93342312879f5c00e9c04b34d59170b6",
  "generationCommit": "1e7bc5f0e7cd3117cc56b96ea908557a5af7fb89",
  "publicationCommit": "1e7bc5f0e7cd3117cc56b96ea908557a5af7fb89",
  "configSha256": "c71e8d4583a4303c75561c44902b837971681f740cc7025f9b55cb997589424f",
  "sourceSha256": "1d37ac20f77f9ff436d21e5becafb0492d8fb169a0dfeffddc53ad5bf5f6285d",
  "template": {
    "path": "singularity/templates/chore/intake.md",
    "sha256": "6e84e6cee5c5c25c7bad11809f245126b646ad9e4c76503876bd77cfaf08112d"
  },
  "inputs": null,
  "designSources": {
    "sets": [],
    "approved": null
  },
  "remoteAgent": null,
  "telemetry": [
    {
      "generation": 1,
      "path": "singularity/work-items/WRK-890/telemetry/intake-gen1.json",
      "sha256": "b71f0533a41985f5bc1b9d960116d32ed6663385194dd87926379d0cc50dc096",
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
      "inputTokens": null,
      "outputTokens": null,
      "cachedInputTokens": null,
      "cacheWriteInputTokens": null,
      "totalTokens": null,
      "providerCost": null,
      "costStatus": "unavailable",
      "spans": null,
      "startedAt": "2026-08-09T18:20:05.484Z",
      "completedAt": "2026-08-09T18:20:05.484Z",
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

# WRK-890 — Chore Intake

## Objective

Refresh the calculator user interface so it feels like a classic calculator while preserving all existing calculator behavior, navigation, and persistence. The change should focus on the shared visual system for the display, keypad, and header so the experience is consistent across standard and other modes.

## Scope and validation

- Affected areas: the calculator shell, display panel, keypad controls, header/mode switcher, and shared CSS theme tokens in the UI layer.
- Constraints: maintain calculation accuracy, mode switching, keyboard interaction, memory/history behavior, and local persistence; avoid introducing new architecture or changing the evaluator logic.
- Evidence of completion: the calculator renders with a classic look in the browser, the standard/scientific/financial/converter/grapher flows still load and remain usable, and the app builds successfully without regressions.
