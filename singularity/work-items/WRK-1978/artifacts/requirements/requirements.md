<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "WRK-1978",
  "workType": "feature",
  "phase": "requirements",
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
      "filename": "requirements.md",
      "mediaType": "text/markdown",
      "sha256": "ea8891bbd8b3f56b1f0457be53ddfa81c86ef82830ade12929eac4b3f1a369df",
      "bytes": 14820
    },
    "generation": 1,
    "publishedAt": "2026-08-10T23:57:19.372Z"
  },
  "sourceCommit": "b3bb251388223ee58b55dd016a0115fb119db5c1",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "c71e8d4583a4303c75561c44902b837971681f740cc7025f9b55cb997589424f",
  "sourceSha256": "4e44848b5ace267968bed14bdb47c521769134cacd3d29c03fb325271f373786",
  "template": {
    "path": "singularity/templates/feature/requirements.md",
    "sha256": "32016db8ed6fadd6596e7dc702647cff95cdee1a203b38395d7ba5626dd8134e"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/WRK-1978/context/inputs-requirements-gen1.json",
    "sha256": "86817bc15571382e319be0a398287d67c4b27a8a47912db91b0d4e7cade62acc",
    "renderedSha256": "d20a3a1de2e754557d60bbaf4a78ec3d00698e917393dc29ea80e9d4e0cfbab2",
    "mode": "enforce"
  },
  "designSources": {
    "sets": [],
    "approved": null
  },
  "remoteAgent": null,
  "clarification": {
    "generation": 1,
    "path": "singularity/work-items/WRK-1978/context/clarifications-requirements-gen1.json",
    "sha256": "4b560f88a927e64d9fdbaa6d871fdacd7159e0e266bb29290b272289f883eb1e",
    "promptSha256": "6af50b8ffe8e9c8857b992c40a0aa0c0b90146efebf54394715649bb7fed6862",
    "responses": 5,
    "recordedAt": "2026-08-10T23:55:54.545Z",
    "recordedBy": {
      "name": "Ashok Raj",
      "email": "88361104+ashokraj2011@users.noreply.github.com",
      "login": "ashokraj2011"
    }
  },
  "telemetry": [
    {
      "generation": 1,
      "path": "singularity/work-items/WRK-1978/telemetry/requirements-gen1.json",
      "sha256": "c9393aabb22ab6e2c0ce2aee8ef0d682e290a4dbf09ab09d7ebfa4dd3dcf7168",
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
      "startedAt": "2026-08-10T23:57:19.372Z",
      "completedAt": "2026-08-10T23:57:19.372Z",
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

# WRK-1978 — Feature Requirements

## Problem and outcome

The approved intake for this work item scoped the visual change as a generic "classic desk-calculator" restyle of Standard mode only, matching no specific reference model. During this phase's required human clarification checkpoint, the requester confirmed a different, more specific direction that supersedes that narrower framing: the app should be restyled to look like Microsoft's **Windows 11 Calculator** (Fluent Design), applied across the whole app rather than Standard mode alone. [WRK-1978:REQ-001]

The measurable outcome: the app's shell, display, and keypads across all existing modes adopt Windows 11 Calculator's Fluent Design language — rounded corners, acrylic/mica-style surfaces, modern accent colors, and Windows 11 typography/spacing/button-grid layout — in both light and dark themes, while every existing calculator mode, feature, and calculation behavior continues to work unchanged. [WRK-1978:REQ-002]

## Scope

**In scope:**
- Restyling to Windows 11 Fluent Design across all existing modes: Standard, Scientific, Unit Converter, Financial Calculator, and Function Grapher (`src/App.jsx`, `src/components/Header.jsx`, `src/components/Display.jsx`, `src/components/StandardKeypad.jsx`, `src/components/ScientificKeypad.jsx`, and other mode components under `src/components/`).
- A literal recreation of Windows 11 Calculator's layout, spacing, and button grid for Standard and Scientific modes, not just a color/typography-inspired reskin.
- Both light and dark theme variants matching Windows 11 Calculator's palettes, implemented through the shared CSS variable/theme-token system (`src/index.css`) rather than per-component hard-coded styles.
- Full responsiveness: the UI must remain usable at both desktop and mobile viewport widths.
- Preservation of all existing features: memory, history, sound feedback, keyboard shortcuts, and every current calculator mode.

**Out of scope / exclusions:**
- No changes to calculation semantics, expression evaluation, or formatting logic (`src/utils/evaluator.js`).
- No removal of modes/features that Windows 11 Calculator itself doesn't have (Unit Converter, Financial Calculator, Function Grapher remain — they are restyled with the same visual language rather than dropped).
- No specific commitment to pixel-perfect parity with Windows 11 Calculator for modes it doesn't include (Unit Converter, Financial Calculator, Function Grapher); those apply the same design tokens without a native reference to copy exactly.

**Supersession note:** This scope explicitly overrides the approved intake artifact's "general retro aesthetic, Standard mode only, no specific reference model" framing, per the requester's confirmation recorded in this generation's clarification checkpoint. [WRK-1978:CON-001]

## Acceptance criteria

- Standard and Scientific modes visually match Windows 11 Calculator's Fluent Design layout, button grid, spacing, and color system, in both light and dark themes. [WRK-1978:AC-001]
- Unit Converter, Financial Calculator, and Function Grapher modes are restyled using the same Windows 11 Fluent Design tokens (colors, shapes, typography, elevation) as Standard/Scientific, even though Windows 11 Calculator has no native screens for them. [WRK-1978:AC-002]
- All existing calculator modes remain reachable and functionally unchanged (arithmetic, scientific, unit conversion, financial, graphing); memory, history, sound, and keyboard shortcut behavior continue to work exactly as before. [WRK-1978:AC-003]
- The UI remains fully responsive and usable at both desktop and mobile viewport widths after the restyle. [WRK-1978:AC-004]
- `npm run build` succeeds after the change, with no change to calculation results or error states. [WRK-1978:AC-005]

## Dependencies, risks, and open questions

**Dependencies:**
- The shared CSS variable/theme-token system in `src/index.css` must be extended (or replaced) to carry Windows 11 Fluent tokens — colors, corner radii, elevation/acrylic effects — for both light and dark themes, so the change stays centralized rather than per-component.

**Risks:**
- Because styling is driven by shared tokens, changes can spill over unintentionally between modes/themes; this requires careful review across all five modes.
- No automated visual regression suite exists; verification is manual review of each mode/theme combination plus a successful `npm run build`. `npm run lint` is expected to still report its existing, pre-existing issues.
- Windows 11 Calculator has no native equivalent for Unit Converter, Financial Calculator, or Function Grapher screens, so applying the Fluent language there is a novel design exercise rather than a direct copy, which raises the risk of visual inconsistency across modes.

**Decisions confirmed via the required clarification checkpoint** (recorded in `singularity/work-items/WRK-1978/context/clarifications-requirements-gen1.json`):
- Target style: Windows 11 (Fluent Design), not Windows 10 or the classic/Windows 7 skeuomorphic style.
- Fidelity: literal recreation of Windows 11 Calculator's layout, spacing, and button grid — not merely an inspired color/typography pass.
- Feature scope: all existing modes and features are preserved and restyled; nothing is trimmed to match Windows 11 Calculator's narrower native feature set.
- Theming: both light and dark themes are required, matching Windows 11 Calculator's palettes.
- Responsiveness: full desktop and mobile support is required; this is not a desktop-only redesign.
- These decisions explicitly supersede the approved intake artifact's narrower "classic desk-calculator, Standard mode only, no specific reference model" framing, per the requester's explicit confirmation during this phase.

**Open questions:** none blocking — all material ambiguities for this generation were resolved in the recorded clarification checkpoint.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: intake

<!-- source=artifacts/intake/intake.md sha256=c441d5e46aae87c3a575fe3f10b733a1ac23f5e06db1ede1829df28f36ddb612 status=captured -->

<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "WRK-1978",
  "workType": "feature",
  "phase": "intake",
  "generation": 1,
  "status": "approved",
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
  "generationCommit": "110176019d1a0f0d720e7f33e189a6081c5de8d2",
  "publicationCommit": "110176019d1a0f0d720e7f33e189a6081c5de8d2",
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
  "approvals": [
    {
      "decision": "approved",
      "phase": "intake",
      "at": "2026-08-10T16:03:54.902Z",
      "actor": {
        "name": "Ashok Raj",
        "email": "88361104+ashokraj2011@users.noreply.github.com",
        "login": "ashokraj2011"
      },
      "agent": "product-owner",
      "authorityGroup": "product-approvers",
      "identityAssurance": "configured-local",
      "channel": "copilot-selection-receipt",
      "generation": 1,
      "artifactSha256": [
        {
          "path": "singularity/work-items/WRK-1978/artifacts/intake/intake.md",
          "sha256": "7003783ee4a01ce031607eb13a2e0c1831f81983d6279150b119683cf6363a6c"
        }
      ],
      "reviewPacketSha256": "e06cd64d5312be3b7ec81cd571061eb6e67c5e9146bb806b5df3fd30c95d2c00",
      "actionContext": {
        "phase": "intake",
        "label": "Intake",
        "generation": 1,
        "submittedAt": "2026-08-10T15:57:26.487Z",
        "artifacts": [
          {
            "path": "singularity/work-items/WRK-1978/artifacts/intake/intake.md",
            "sha256": "7003783ee4a01ce031607eb13a2e0c1831f81983d6279150b119683cf6363a6c"
          }
        ],
        "reviewPacketSha256": "e06cd64d5312be3b7ec81cd571061eb6e67c5e9146bb806b5df3fd30c95d2c00",
        "submittedSourceCommit": "110176019d1a0f0d720e7f33e189a6081c5de8d2",
        "planId": "535f2ec19e73fcdf7be3ccd3"
      },
      "selfApproval": true
    }
  ],
  "selfApproval": true,
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

<!-- singularity-flow:inputs:end -->
