<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "WRK-1978",
  "workType": "feature",
  "phase": "intake",
  "generation": 1,
  "status": "in_progress",
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
      "sha256": "46cc03095cfa8046c414f881b1cc80b7372ca2bf507031da298b14c12030fe14",
      "bytes": 3952
    },
    "generation": 1,
    "publishedAt": "2026-08-10T15:56:06.519Z"
  },
  "sourceCommit": "9fceacba13b7c36032fd0e376aee593e62a00275",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "c71e8d4583a4303c75561c44902b837971681f740cc7025f9b55cb997589424f",
  "sourceSha256": "4e44848b5ace267968bed14bdb47c521769134cacd3d29c03fb325271f373786",
  "template": {
    "path": "singularity/templates/feature/intake.md",
    "sha256": "eb53814f46f12ea3d93d1629164bd7ff22a3a54feceff7f7dd55670caeb5dbab"
  },
  "inputs": null,
  "designSources": {
    "sets": [],
    "approved": null
  },
  "remoteAgent": null,
  "clarification": {
    "generation": 1,
    "path": "singularity/work-items/WRK-1978/context/clarifications-intake-gen1.json",
    "sha256": "439a50d2b544413babf7f69cecbecc4ff0e3602d9248555c792cbd56acc5486e",
    "promptSha256": "ffa092cf5192bb94659215665a3739f2edc0435c83fa47e7b93731d8422820cc",
    "responses": 4,
    "recordedAt": "2026-08-10T15:56:02.695Z",
    "recordedBy": {
      "name": "Ashok Raj",
      "email": "88361104+ashokraj2011@users.noreply.github.com",
      "login": "ashokraj2011"
    }
  },
  "telemetry": [
    {
      "generation": 1,
      "path": "singularity/work-items/WRK-1978/telemetry/intake-gen1.json",
      "sha256": "c1fb06bad752a1144a70d6050e66b12d2555ee4e67b5b718ceb1c53ab6369491",
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
      "startedAt": "2026-08-10T15:56:06.519Z",
      "completedAt": "2026-08-10T15:56:06.519Z",
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

# WRK-1978 — Feature Intake

## User and outcome

The user is anyone using this app's Standard calculator mode as a browser-based calculator (`src/App.jsx`, `src/components/`). Today the Standard mode already uses a `classic` theme with shared CSS tokens (`src/index.css`), but it does not read as a physical desk-calculator: it lacks the raised/beveled button feel, a recessed LCD-style display panel, and a cohesive muted classic color palette.

The problem is that the current visual presentation of Standard mode does not evoke a classic/desk calculator, which is the specific visual affinity the requester wants.

The measurable outcome: after the change, Standard mode's default theme presents raised/beveled keypad buttons, a recessed LCD-style display panel, and a muted grey/beige classic color palette with simple borders/shadows — verifiable by visual review of the Standard mode screen, with `npm run build` still succeeding and no change to calculation behavior, keyboard shortcuts, or non-default themes.

## Proposed capability

Restyle the default/classic theme so the Standard calculator mode looks like a classic desk calculator, specifically:
- Raised/beveled, physical-style keypad buttons.
- A recessed LCD-style display panel for the expression/result area.
- A muted classic color palette (grey/beige tones) with simple borders and shadows, applied through the existing shared CSS variable/theme-token system rather than per-component hard-coded styles.

This is a visual/UX capability only — it does not change calculation logic, keyboard behavior, or the set of supported modes.

## Scope, constraints, and stakeholders

**In scope:**
- The default/classic theme's visual tokens (`src/index.css`) and the Standard mode surfaces that consume them: the shell (`src/App.jsx`), header/mode tabs, the display panel, and the standard keypad (`src/components/Header.jsx`, `src/components/Display.jsx`, `src/components/StandardKeypad.jsx`).

**Out of scope / exclusions:**
- No specific reference calculator model is being matched — this is a general retro/classic aesthetic, not a pixel-accurate skin of one device.
- Only the default/classic theme changes; other theme options (e.g. dark mode) are left as-is.
- Other modes (scientific, converter, financial, grapher) are not explicitly restyled component-by-component; they may passively inherit the shared CSS token changes, but no dedicated work is scoped for them in this change.
- No changes to calculation logic, expression evaluation (`src/utils/evaluator.js`), keyboard shortcuts, or history/memory behavior.

**Dependencies:**
- The existing shared CSS variable/theme-token system in `src/index.css`, which must remain centralized so the change doesn't require per-component styling.

**Constraints:**
- No automated visual regression suite exists; verification is manual review of the Standard mode plus a production build (`npm run build`). `npm run lint` is expected to still report its existing, pre-existing issues.
- Because the CSS token system is shared, changes must be reviewed for unintended spillover into other modes/themes even though they are not the explicit target.

**Stakeholders:**
- End users of the Standard calculator mode (primary beneficiaries of the visual change).
- Frontend developer/designer implementing the theme and layout updates.
- QA/reviewer confirming the classic look renders correctly in Standard mode without regressing other modes or themes.

**Assumptions confirmed with the requester:**
- "Classic" means a general retro/desk-calculator feel, not one specific model.
- Only the default theme changes.
- Standard mode is the primary, explicitly scoped target.
- The defining visual traits are: raised/beveled buttons, a recessed LCD-style display, and a muted classic color palette.

**Open questions:** none blocking — all material ambiguities were resolved in the recorded clarification checkpoint for this generation.
