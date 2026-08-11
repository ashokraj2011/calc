<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "WRK-1978",
  "workType": "feature",
  "phase": "verification",
  "generation": 1,
  "status": "in_progress",
  "generatedBy": {
    "name": "Ashok Raj",
    "email": "88361104+ashokraj2011@users.noreply.github.com",
    "login": "ashokraj2011"
  },
  "generatedAgent": "developer",
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
      "agentId": "developer"
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
      "filename": "test-evidence.md",
      "mediaType": "text/markdown",
      "sha256": "f613f408d39545818075eea90c56a54976367ea3873db2a10a0c071021cb934c",
      "bytes": 202164
    },
    "generation": 1,
    "publishedAt": "2026-08-11T03:32:58.769Z"
  },
  "sourceCommit": "827474ca3be39eab68e83d246237ff4824bc5e62",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "c71e8d4583a4303c75561c44902b837971681f740cc7025f9b55cb997589424f",
  "sourceSha256": "4e44848b5ace267968bed14bdb47c521769134cacd3d29c03fb325271f373786",
  "template": {
    "path": "singularity/templates/common/verification.md",
    "sha256": "ced4ce8d532e509658558f5bf848bd6df1a03d6c278c84ed8512ac667095fd98"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/WRK-1978/context/inputs-verification-gen1.json",
    "sha256": "a8c326bf7cba9635cbbda1425624372f9e6e00a29b2e75cd9afd94d250929cb6",
    "renderedSha256": "82ab7c655d42542f0dbd5097cb4bd19cefafb548a6a5cccf75f96a0b0d625465",
    "mode": "enforce"
  },
  "designSources": {
    "sets": [],
    "approved": null
  },
  "remoteAgent": null,
  "clarification": null,
  "telemetry": [
    {
      "generation": 1,
      "path": "singularity/work-items/WRK-1978/telemetry/verification-gen1.json",
      "sha256": "1e91993a32b591f6ab86c416aa3fb0c1c1b4980d2ef6edff8abb8ecc7c32d4c9",
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
      "startedAt": "2026-08-11T03:32:58.768Z",
      "completedAt": "2026-08-11T03:32:58.768Z",
      "agent": "developer",
      "generation": 1
    }
  ],
  "sequenceOverrides": [],
  "approvals": [],
  "selfApproval": false,
  "conformanceTree": null
}
-->

# WRK-1978 — Verification Evidence

## Commands and environment

- Environment: macOS, Node/npm as configured in the repository devcontainer, repository root `/Users/ashokraj/Downloads/pocalc/calc--calc-app/repos/calc`, source commit `827474c` (world-model-updated `HEAD` at verification start; app source unchanged since the approved `implementation` generation at `1f47b50`).
- `npm run build` — executed 2026-08-11T03:xx UTC. Result: **succeeded**, `vite build` completed in 317ms, emitted `dist/index.html`, `dist/assets/index-*.css` (10.97 kB), `dist/assets/index-*.js` (885.85 kB); only a pre-existing chunk-size advisory warning (not an error) was reported. [WRK-1978:AC-005]
- `npm run lint` — executed the same session. Result: **20 errors, 0 warnings**, identical file/line/rule set as the `npm run lint` baseline captured against the pre-WRK-1978 commit (`8723119`, the commit immediately preceding `[WRK-1978][init]`), confirmed by running lint on a clean clone checked out to that commit: same 20 findings (`no-unused-vars` for unused `React` imports across 9 files, `App.jsx`'s unused `e`, `audio.js`'s unused `e`, `evaluator.js`'s `\%` `no-useless-escape`, `FunctionGrapher.jsx`'s unused `Play`/`e`/`err` and its `react-hooks/set-state-in-effect`). No new lint errors were introduced by this generation.
- `git diff 8723119 HEAD -- src/App.jsx src/utils/evaluator.js src/utils/audio.js` — **empty**, confirming these three files are byte-identical to the pre-feature baseline (no changes to calculation/handler contracts). [WRK-1978:AC-003] [WRK-1978:IFC-008]
- `git diff 8723119 HEAD --stat -- src/` — confirms the change is confined to `src/index.css` and 9 component files (`Display.jsx`, `FinancialCalculator.jsx`, `FunctionGrapher.jsx`, `Header.jsx`, `HistoryDrawer.jsx`, `KeyboardShortcutsModal.jsx`, `ScientificKeypad.jsx`, `StandardKeypad.jsx`, `UnitConverter.jsx`), consistent with the approved implementation-spec's file-level plan.
- Manual interactive verification was performed against the running `npm run dev` server (Vite, `http://localhost:5183/`) using an integrated browser session, at both a narrow (~260–390px, mobile-equivalent) width and an explicit 1024×900 desktop viewport (opened in a dedicated browser tab to bypass a host-panel width constraint that silently capped `window.innerWidth` in the originally shared tab).

## Acceptance and specification results

| Clause | Result | Evidence |
|---|---|---|
| `WRK-1978:AC-001` (Standard/Scientific match Windows 11 Fluent layout/grid/spacing/colors, light+dark) | **Pass** | Visually confirmed in both `win11-light` and `win11-dark`: memory strip (`MC`/`MR`/`M+`/`M-`) sits above a uniform 4-column digit/operator/equals grid with a single accent-colored (`#0f6cbd`/`#005fb8`-family) equals key, flat button coloring, and Fluent-style corner radii/spacing, in both Standard and Scientific modes (Scientific's function toolbar restyled consistently, verified via screenshot). Per-button-type coloring (digit/operator/function/equals) renders correctly in all 8 themes, confirming the documented Tailwind-inert-class fix took effect. |
| `WRK-1978:AC-002` (Converter/Financial/Grapher restyled with same tokens) | **Pass, with a noted pre-existing-style caveat** | Converter, Financial, and Grapher modes all render using the shared theme tokens (backgrounds, borders, accent colors) in `win11-light`/`win11-dark`/classic alike, and are functionally correct (Length→Kilometers conversion = `0.001`; Loan EMI on $500,000 @ 8.5% / 5yr = `$10,258`/mo, `$115,496` total interest, `$615,496` total payment; Grapher loads with a working `sin(x)` preset). However, these three modes' category-selector rows (e.g. "Length / Weight / Temperature / Digital / Speed") render as a plain inline list with overlapping icon/label spacing rather than the polished pill/card treatment of Standard/Scientific's keypad and nav rail — this rougher appearance is present identically in the pre-WRK-1978 baseline (verified by running the baseline commit `8723119` side-by-side) and is explicitly an accepted, in-scope risk called out in the approved requirements ("Windows 11 Calculator has no native equivalent for [these] screens... raises the risk of visual inconsistency"). Not a regression introduced by this generation. |
| `WRK-1978:AC-003` (all modes/features functionally unchanged: memory, history, sound, keyboard shortcuts) | **Pass** | `App.jsx`, `evaluator.js`, `audio.js` are byte-identical to baseline (see `git diff`, above). Functional spot checks in `win11-dark`: keyboard-entered `7*8` → Enter correctly displayed `7 × 8` / `56`; `M+` then `AC` then `MR` correctly showed `M: 56` indicator and recalled `56` into the expression. Financial and Converter calculations verified correct (above). |
| `WRK-1978:AC-004` (fully responsive at mobile and desktop widths) | **Pass** | At narrow width, the mode selector renders as a compact `<select>` dropdown (`.nav-mobile`) and the keypad grid remains fully usable. At an explicit 1024×900 desktop viewport, the Fluent-style icon nav rail renders (`.nav-rail`) with a working expand/collapse toggle that reveals text labels (`Standard`, `Scientific`, `Converter`, `Financial`, `Grapher`) alongside icons; active-mode highlighting works in both collapsed and expanded states. Both breakpoint layouts were captured via screenshot. |
| `WRK-1978:AC-005` (`npm run build` succeeds, no change to calculation results/error states) | **Pass** | See `npm run build` result above; no build errors. Calculation results (`7×8=56`, unit/financial conversions) match expected values. |

**Traceability to implementation-spec clauses:** `IFC-001` (theme CSS blocks) and `IFC-002` (`THEMES` array entries) — confirmed present (`src/index.css` lines 216, 252; `src/components/Header.jsx` `THEMES` array includes `win11-light`/`win11-dark`). `IFC-003`/`IFC-004` (keypad grid restructuring) — confirmed via visual review and DOM structure (`.memory-strip`, `.keypad-grid` classes present and correctly rendered). `IFC-005` (nav restyle) — confirmed via nav-rail/nav-mobile responsive behavior above. `IFC-006` (Display token adjustments) — confirmed, display panel background correctly uses `var(--display-bg)` in all themes tested (no leftover hardcoded warm-cream background observed in `win11-light`/`win11-dark`). `IFC-007` (Converter/Financial/Grapher shared-token restyle) — confirmed, see AC-002 above. `IFC-008` (no `App.jsx`/`evaluator.js` changes) — confirmed via `git diff`. `IFC-009` (responsive breakpoints) — confirmed. `IFC-010` (`npm run build`) — confirmed.

## Negative, regression, security, and non-functional checks

- **Regression check:** `git diff 8723119 HEAD -- src/App.jsx src/utils/evaluator.js src/utils/audio.js` returns no output — the calculation engine, handler contracts, and audio utility are provably unmodified. All 6 pre-existing `[data-theme='...']` CSS blocks remain present and unrenamed (`classic`, `cyberpunk`, `terminal`, `pastel`, `light`, plus the two new `win11-light`/`win11-dark`).
- **Security:** No new user-input handling paths were introduced; `evaluateExpression` in `src/utils/evaluator.js` is unmodified (confirmed above) and remains the sole expression-processing path. No new dependencies were added (`package.json` unchanged in this diff range beyond what the approved implementation already covered).
- **Non-functional / lint:** `npm run lint` reports the same 20 pre-existing errors as the pre-WRK-1978 baseline (verified by running lint against a clean checkout of commit `8723119`) — no new lint issues introduced by this generation.
- **Defect found — theme-selector legibility regression in `win11-dark` (new, introduced by this generation):** The theme `<select>` dropdown's displayed text ("Windows 11 Dark") is rendered in a near-white color (`--text-main: #f3f3f3`) against the browser's native unstyled white `<select>` background, making it very difficult to read. Root cause: the select's `className` includes `bg-transparent` (an inert, uncompiled Tailwind utility — this repository has no Tailwind installed, per the implementation summary's documented defect) rather than a real background-color utility class, so the element falls back to the browser's default white background instead of the surrounding `u-bg-display-bg`-styled container. This is reproducible at both narrow and 1024px-desktop viewport widths, is specific to `win11-dark` (other themes, including other dark themes like `midnight`/`cyberpunk`/`terminal`, use `--text-main` values dark or saturated enough to stay legible against a native white dropdown background — confirmed by comparing computed `color`/`background-color` across all 8 themes), and affects the mode-selector role only for the theme picker's own text (the mode dropdown at mobile widths uses the same pattern but wasn't separately confirmed to be equally affected — flagged here for reviewer attention). This is a genuine, newly-introduced usability defect against `WRK-1978:AC-001`'s "visually match Windows 11 ... color system" requirement for the `win11-dark` theme specifically, since a user cannot comfortably read which theme is currently selected. **Recommended fix:** add a real, compiled background-color utility (e.g. following the `u-bg-*` convention already used elsewhere in this codebase) to the theme-selector `<select>` in `src/components/Header.jsx`, or set its background via the existing `.calculator-display`/`u-bg-display-bg` mechanism directly on the `<select>` element rather than relying on the inert `bg-transparent` Tailwind class.
- **Residual risks carried over from implementation (re-confirmed, not blocking):** (1) `Header.jsx`'s `THEMES` array includes a `midnight` entry with no matching `[data-theme='midnight']` CSS block — confirmed pre-existing via baseline commit `8723119` (same gap exists there), out of this work item's scope. (2) Converter/Financial/Grapher's category-selector visual roughness — confirmed pre-existing (see AC-002 above), an accepted risk per the approved requirements. (3) No automated test framework or visual-regression tooling exists in this repository; verification here is manual/build-based, consistent with the approved implementation-spec's test specification.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: implementation-spec

<!-- source=artifacts/implementation-spec/implementation-spec.md sha256=01f6628278b6c0046578bbd19f1a9bca8ac2a43e40a7bd44b42efebcb326bc5a status=captured -->

<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "WRK-1978",
  "workType": "feature",
  "phase": "implementation-spec",
  "generation": 1,
  "status": "approved",
  "generatedBy": {
    "name": "Ashok Raj",
    "email": "88361104+ashokraj2011@users.noreply.github.com",
    "login": "ashokraj2011"
  },
  "generatedAgent": "architect",
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
      "agentId": "architect"
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
      "filename": "implementation-spec.md",
      "mediaType": "text/markdown",
      "sha256": "a238f60d9fc1e9455111fa3080eeb19e0e252bfb7978c00007440f879c0a677b",
      "bytes": 65372
    },
    "generation": 1,
    "publishedAt": "2026-08-11T00:20:12.058Z"
  },
  "sourceCommit": "51b44ff6543b763d55e9725397d4ae9866e8dcd2",
  "generationCommit": "be635898ae440a59014950bf66f0019275bb6aa3",
  "publicationCommit": "be635898ae440a59014950bf66f0019275bb6aa3",
  "configSha256": "c71e8d4583a4303c75561c44902b837971681f740cc7025f9b55cb997589424f",
  "sourceSha256": "4e44848b5ace267968bed14bdb47c521769134cacd3d29c03fb325271f373786",
  "template": {
    "path": "singularity/templates/feature/implementation-spec.md",
    "sha256": "f6b06a7e8c8dfa87a7f1289b2a80c0a6e98f5ee8e3cae2fe9faed501c031656c"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/WRK-1978/context/inputs-implementation-spec-gen1.json",
    "sha256": "98907c87e7ab91631c729e04cb3569b6c756e8a1fa27cffa7dd64064cf4f7bf9",
    "renderedSha256": "88156a7369334d34688e3a8b51535ff93dd31170dd2a6e3c13a203257ba9336d",
    "mode": "enforce"
  },
  "designSources": {
    "sets": [],
    "approved": null
  },
  "remoteAgent": null,
  "clarification": null,
  "telemetry": [
    {
      "generation": 1,
      "path": "singularity/work-items/WRK-1978/telemetry/implementation-spec-gen1.json",
      "sha256": "fb466b0beeeaaf4e0e1ff9793b38b8644a14934f4370808f0efaf2db41ab4e0b",
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
      "startedAt": "2026-08-11T00:20:12.058Z",
      "completedAt": "2026-08-11T00:20:12.058Z",
      "agent": "architect",
      "generation": 1
    }
  ],
  "sequenceOverrides": [],
  "approvals": [
    {
      "decision": "approved",
      "phase": "implementation-spec",
      "at": "2026-08-11T00:25:21.552Z",
      "actor": {
        "name": "Ashok Raj",
        "email": "88361104+ashokraj2011@users.noreply.github.com",
        "login": "ashokraj2011"
      },
      "agent": "architect",
      "authorityGroup": "architecture-reviewers",
      "identityAssurance": "configured-local",
      "channel": "copilot-selection-receipt",
      "generation": 1,
      "artifactSha256": [
        {
          "path": "singularity/work-items/WRK-1978/artifacts/implementation-spec/implementation-spec.md",
          "sha256": "48270087a541e741c87b91f62e2c8b14ef9e45c3ee295432aa1b6deb795df20a"
        }
      ],
      "reviewPacketSha256": "d7e7cc085721e6da097cb809ea189284f101c0dae9d92b3f8c2a7b70b8863a5b",
      "actionContext": {
        "phase": "implementation-spec",
        "label": "Implementation specification",
        "generation": 1,
        "submittedAt": "2026-08-11T00:21:33.582Z",
        "artifacts": [
          {
            "path": "singularity/work-items/WRK-1978/artifacts/implementation-spec/implementation-spec.md",
            "sha256": "48270087a541e741c87b91f62e2c8b14ef9e45c3ee295432aa1b6deb795df20a"
          }
        ],
        "reviewPacketSha256": "d7e7cc085721e6da097cb809ea189284f101c0dae9d92b3f8c2a7b70b8863a5b",
        "submittedSourceCommit": "be635898ae440a59014950bf66f0019275bb6aa3",
        "planId": "a4369fa2a5de2a9cc0c91fd0"
      },
      "selfApproval": true
    }
  ],
  "selfApproval": true,
  "conformanceTree": null
}
-->

# WRK-1978 — Implementation Specification

## Traceability

| Clause | Acceptance criteria | Planned code/tests | Status |
|---|---|---|---|
| `WRK-1978:IFC-001` | `WRK-1978:AC-001`, `WRK-1978:AC-004` | `src/index.css` new `[data-theme='win11-light']` / `[data-theme='win11-dark']` blocks; manual visual review | planned |
| `WRK-1978:IFC-002` | `WRK-1978:AC-001` | `src/components/Header.jsx` `THEMES` array — add `win11-light`, `win11-dark` entries | planned |
| `WRK-1978:IFC-003` | `WRK-1978:AC-001` | `src/components/StandardKeypad.jsx` grid restructuring (memory strip + uniform digit/operator grid) | planned |
| `WRK-1978:IFC-004` | `WRK-1978:AC-001` | `src/components/ScientificKeypad.jsx` functions toolbar restyle (inherits `StandardKeypad` grid changes since it wraps `StandardKeypad`) | planned |
| `WRK-1978:IFC-005` | `WRK-1978:AC-001`, `WRK-1978:AC-004` | `src/components/Header.jsx` navigation restyle (desktop slide-out panel / mobile dropdown) | planned |
| `WRK-1978:IFC-006` | `WRK-1978:AC-001` | `src/components/Display.jsx` spacing/corner-radius/token adjustments (no DOM restructuring) | planned |
| `WRK-1978:IFC-007` | `WRK-1978:AC-002` | `src/components/UnitConverter.jsx`, `src/components/FinancialCalculator.jsx`, `src/components/FunctionGrapher.jsx` — shared-token restyling only | planned |
| `WRK-1978:IFC-008` | `WRK-1978:AC-003` | No changes to `src/App.jsx` handler contracts or `src/utils/evaluator.js`; manual regression across all 5 modes | planned |
| `WRK-1978:IFC-009` | `WRK-1978:AC-004` | Responsive breakpoint verification for keypad grid and navigation panel at mobile/desktop widths | planned |
| `WRK-1978:IFC-010` | `WRK-1978:AC-005` | `npm run build` executed after implementation | planned |

## APIs, schemas, and contracts

The implementation MUST preserve the following exact contracts unchanged (see IFC-008 in the file-level plan below):
- `App` component state shape in `src/App.jsx`: `activeMode`, `expression`, `result`, `lastEvaluated`, `angleUnit`, `memoryValue`, `theme`, `soundEnabled`, `history`, `isHistoryOpen`, `isKeyboardOpen`.
- Handler function signatures passed as props: `onDigit(digit)`, `onOperator(op)`, `onEquals()`, `onClear()`, `onBackspace()`, `onNegate()`, `onPercent()`, `onMemory(type)` where `type` is one of `'MC' | 'MR' | 'M+' | 'M-'`.
- `evaluateExpression(expression, angleUnit)` and `formatNumber` exports in `src/utils/evaluator.js`, including the `{ result, rawResult, error }` return contract.
- `localStorage` keys `apex_theme`, `apex_sound`, `apex_history` and their existing value shapes.

The implementation MUST introduce the following new, additive contract (see IFC-001 and IFC-002 in the file-level plan below):
- Two new theme identifiers, `'win11-light'` and `'win11-dark'`, valid wherever the existing `theme` string state is used (the `THEMES` array in `Header.jsx`, the `[data-theme='...']` CSS selector convention in `index.css`, and the `apex_theme` localStorage value). These MUST follow the exact same CSS custom-property set already defined by the six existing themes: `--bg-primary`, `--bg-gradient`, `--card-bg`, `--card-border`, `--glass-blur`, `--shadow-main`, `--text-main`, `--text-muted`, `--text-accent`, `--display-bg`, `--display-border`, `--btn-num-bg/hover/text`, `--btn-op-bg/hover/text`, `--btn-func-bg/hover/text`, `--btn-eq-bg/hover/text/shadow`, `--active-indicator` — no new/renamed custom-property names, so no other component needs to change to consume the new themes.

Any new presentational-only prop needed to support the restructured Standard/Scientific keypad grid or Header navigation (e.g., a boolean/enum layout-variant prop) MUST be additive, optional, and default to preserving current behavior for existing themes; it MUST NOT change the `onDigit`/`onOperator`/etc. handler signatures above (see IFC-003 and IFC-005 in the file-level plan below).

## File-level implementation plan

- **`src/index.css`** — Add two new `[data-theme='win11-light']` and `[data-theme='win11-dark']` blocks (same property list as existing themes), plus new shared rules/variants for the restructured keypad grid and navigation panel if the visual treatment cannot be expressed purely through existing `.calc-btn` / `.glass-card` / `.calculator-display` classes (e.g., a `.calc-btn--win11` modifier or additional utility classes for the memory strip and nav panel). No existing CSS rule, class name, or custom-property name is removed or renamed. [WRK-1978:IFC-001]
- **`src/components/Header.jsx`** — Add `win11-light` and `win11-dark` to the `THEMES` array (id/name pairs). Restyle the `MODES` tab row into a Fluent-style navigation affordance: a slide-out list at desktop widths, a compact dropdown at mobile widths, using a responsive CSS/conditional-render approach consistent with the existing Tailwind-style utility classes already used in this file. No changes to the `activeMode`/`setActiveMode`/`currentTheme`/`setTheme` prop contract. [WRK-1978:IFC-002] [WRK-1978:IFC-005]
- **`src/components/StandardKeypad.jsx`** — Restructure the button grid markup: move `MC`/`MR`/`M+`/`M-` into a slim strip above the main 4-column digit/operator/equals grid (currently they occupy the first grid row as shown in lines 21-47 of the current file). Keep the same `onDigit`/`onOperator`/`onEquals`/`onClear`/`onBackspace`/`onNegate`/`onPercent`/`onMemory` prop contract and the same `handleBtn` sound-dispatch pattern. [WRK-1978:IFC-003]
- **`src/components/ScientificKeypad.jsx`** — No structural change required beyond restyling its own functions toolbar (`2nd`, parentheses, etc.) to match the new token set; it already wraps and reuses `StandardKeypad`, so the keypad-grid restructuring above is inherited automatically. [WRK-1978:IFC-004]
- **`src/components/Display.jsx`** — Adjust token usage, corner radius, and spacing classes only; the existing two-line expression/result DOM structure and `expression`/`result`/`angleUnit`/`setAngleUnit`/`memoryValue`/`onBackspace`/`onClear` prop contract are unchanged. [WRK-1978:IFC-006]
- **`src/components/UnitConverter.jsx`, `src/components/FinancialCalculator.jsx`, `src/components/FunctionGrapher.jsx`** — Restyle using the shared `.calc-btn`/`.glass-card`/`.calculator-display` primitives and the new theme tokens only; no DOM/prop-contract changes. [WRK-1978:IFC-007]
- **`src/App.jsx`** — No changes anticipated. If the navigation restructuring in `Header.jsx` requires new layout-only state (e.g., whether the nav panel is expanded), that state MUST be owned locally within `Header.jsx`, not lifted into `App.jsx`, to avoid touching the existing state/handler contract. [WRK-1978:IFC-008]
- **`src/utils/evaluator.js`, `src/utils/audio.js`** — No changes (per IFC-008).
- **`src/components/HistoryDrawer.jsx`, `src/components/KeyboardShortcutsModal.jsx`** — Restyled via shared tokens only, consistent with `IFC-007`'s treatment of non-primary-mode surfaces; no contract changes.

## Security, observability, migration, and rollback

The implementation MUST satisfy the following obligations, consistent with the approved design's security/observability/migration/rollback section: [WRK-1978:CON-002]

- **Security:** No new user-input handling paths are introduced; `evaluateExpression` in `src/utils/evaluator.js` remains the sole point where user-entered expressions are processed, and it MUST NOT be modified by this change. No new third-party dependencies that process user input may be added as part of this implementation.
- **Observability:** No telemetry exists in this repository and none is introduced by this change. The only observability signal is `npm run build` succeeding and manual visual review; `npm run lint` MAY continue to report its pre-existing, unrelated issues and MUST NOT be treated as a new regression unless the count of lint errors/warnings increases due to this change's own new code.
- **Migration:** Existing `apex_theme` localStorage values (`classic`, `midnight`, `cyberpunk`, `terminal`, `pastel`, `light`) MUST continue to resolve to their current visual themes unchanged; no migration or default-value change is applied to already-stored preferences.
- **Rollback:** Because `IFC-001`/`IFC-002` are additive (new theme blocks/entries) and `IFC-003`/`IFC-004`/`IFC-005` are scoped to specific component files, rollback is a revert of the changed hunks in `src/index.css`, `src/components/Header.jsx`, `src/components/StandardKeypad.jsx`, and `src/components/Display.jsx` — no data migration or backfill is required for rollback since no persisted-data format changes.

## Test specification

The repository has no existing automated test runner or test files (confirmed by the repository testing view: no test framework configuration was discovered). Consistent with that baseline, verification for this change is manual and build-based rather than unit/integration-test based; each clause below maps to a specific manual check or the existing build command.

| Clause | Verification | Planned path |
|---|---|---|
| `WRK-1978:AC-001` | Manual visual review: Standard and Scientific modes rendered in both `win11-light` and `win11-dark` themes, compared against Windows 11 Calculator's published layout/button grid/spacing | `src/components/StandardKeypad.jsx`, `src/components/ScientificKeypad.jsx`, `src/components/Header.jsx`, `src/index.css` |
| `WRK-1978:AC-002` | Manual visual review: Unit Converter, Financial Calculator, and Function Grapher modes rendered in both new themes, confirming consistent token usage (colors/shapes/typography/elevation) with Standard/Scientific | `src/components/UnitConverter.jsx`, `src/components/FinancialCalculator.jsx`, `src/components/FunctionGrapher.jsx` |
| `WRK-1978:AC-003` | Manual functional regression: exercise digit entry, all operators, equals, memory (`MC`/`MR`/`M+`/`M-`), backspace/clear, history add/select/clear, sound toggle, and keyboard shortcuts across all 5 modes and all 8 themes (6 existing + 2 new) | `src/App.jsx` interaction paths; no code changes expected here |
| `WRK-1978:AC-004` | Manual responsive check: resize/emulate viewport from mobile to desktop widths, confirming keypad grid and navigation panel/dropdown remain usable at each breakpoint | `src/components/Header.jsx`, `src/components/StandardKeypad.jsx`, `src/index.css` |
| `WRK-1978:AC-005` | Run `npm run build` after implementation and confirm it exits successfully with no new errors | repository root, `package.json` `build` script |

**Not run / out of scope for this test specification:** unit tests for `evaluateExpression`/`formatNumber` and automated visual regression snapshots — neither exists in the repository today and adding them is not required by the approved requirements or design for this change.

<!-- approved source inputs:start -->

# Approved phase inputs

## Approved phase input: requirements

<!-- source=artifacts/requirements/requirements.md sha256=ab21c30d64ab5306d05a03ce32f81c0ff55a74e9e5b0ca2dba010dc6df5b883b status=captured -->

<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "WRK-1978",
  "workType": "feature",
  "phase": "requirements",
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
      "filename": "requirements.md",
      "mediaType": "text/markdown",
      "sha256": "ea8891bbd8b3f56b1f0457be53ddfa81c86ef82830ade12929eac4b3f1a369df",
      "bytes": 14820
    },
    "generation": 1,
    "publishedAt": "2026-08-10T23:57:19.372Z"
  },
  "sourceCommit": "b3bb251388223ee58b55dd016a0115fb119db5c1",
  "generationCommit": "22a0caa72e70c120ba595ab27003ebb18ed02d8d",
  "publicationCommit": "22a0caa72e70c120ba595ab27003ebb18ed02d8d",
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
  "approvals": [
    {
      "decision": "approved",
      "phase": "requirements",
      "at": "2026-08-11T00:05:43.161Z",
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
          "path": "singularity/work-items/WRK-1978/artifacts/requirements/requirements.md",
          "sha256": "b125d1e96e5608ceed4e08d6955f216f8137be78046950380356578523ae479b"
        }
      ],
      "reviewPacketSha256": "1ec532b617950eeac18211c4f4a9b87e2040e2b0f5f90c76efef0aec62e3146e",
      "actionContext": {
        "phase": "requirements",
        "label": "Requirements",
        "generation": 1,
        "submittedAt": "2026-08-10T23:58:53.432Z",
        "artifacts": [
          {
            "path": "singularity/work-items/WRK-1978/artifacts/requirements/requirements.md",
            "sha256": "b125d1e96e5608ceed4e08d6955f216f8137be78046950380356578523ae479b"
          }
        ],
        "reviewPacketSha256": "1ec532b617950eeac18211c4f4a9b87e2040e2b0f5f90c76efef0aec62e3146e",
        "submittedSourceCommit": "22a0caa72e70c120ba595ab27003ebb18ed02d8d",
        "planId": "f959e3daf28f11e40e2f721a"
      },
      "selfApproval": true
    }
  ],
  "selfApproval": true,
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

<!-- approved source inputs:start -->

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

<!-- approved source inputs:end -->

## Approved phase input: design

<!-- source=artifacts/design/design.md sha256=25a3ca14e26cc3ab5c1678a98defd986491a1b1b2ba7b873c5aeb28f426a6ac0 status=captured -->

<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "WRK-1978",
  "workType": "feature",
  "phase": "design",
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
      "filename": "design.md",
      "mediaType": "text/markdown",
      "sha256": "867b48ea7f4a91dda28f6482c384bafda2d31fd1a9f754391871068147fc64d4",
      "bytes": 29795
    },
    "generation": 1,
    "publishedAt": "2026-08-11T00:11:09.908Z"
  },
  "sourceCommit": "55ab574d7d2e75d1ea40824b8cfaecb17a688a42",
  "generationCommit": "776db5e72a21e9cf00295773676e4e474f1588ab",
  "publicationCommit": "776db5e72a21e9cf00295773676e4e474f1588ab",
  "configSha256": "c71e8d4583a4303c75561c44902b837971681f740cc7025f9b55cb997589424f",
  "sourceSha256": "4e44848b5ace267968bed14bdb47c521769134cacd3d29c03fb325271f373786",
  "template": {
    "path": "singularity/templates/feature/design.md",
    "sha256": "8b7455f464a7025efa92942c272a04e3c0a3ab2a4d3eb438703cc14e230bc856"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/WRK-1978/context/inputs-design-gen1.json",
    "sha256": "6440f9b71115fe490601c1a314db9d6685df86ec63b83b6abe78763a9497c56c",
    "renderedSha256": "8c269b41ed26d1fb882c09faf111aff71c60019372e3e00f174e7d42921510b4",
    "mode": "enforce"
  },
  "designSources": {
    "sets": [],
    "approved": null
  },
  "remoteAgent": null,
  "clarification": null,
  "telemetry": [
    {
      "generation": 1,
      "path": "singularity/work-items/WRK-1978/telemetry/design-gen1.json",
      "sha256": "1034558f141f5c5f034e50383dcddc8bfbd560d6d623f686fd3864a1a0ef22d7",
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
      "startedAt": "2026-08-11T00:11:09.908Z",
      "completedAt": "2026-08-11T00:11:09.908Z",
      "agent": "product-owner",
      "generation": 1
    }
  ],
  "sequenceOverrides": [],
  "approvals": [
    {
      "decision": "approved",
      "phase": "design",
      "at": "2026-08-11T00:15:56.434Z",
      "actor": {
        "name": "Ashok Raj",
        "email": "88361104+ashokraj2011@users.noreply.github.com",
        "login": "ashokraj2011"
      },
      "agent": "architect",
      "authorityGroup": "architecture-reviewers",
      "identityAssurance": "configured-local",
      "channel": "copilot-selection-receipt",
      "generation": 1,
      "artifactSha256": [
        {
          "path": "singularity/work-items/WRK-1978/artifacts/design/design.md",
          "sha256": "ad96df801a5b9334449c06c0ca473e2c8062433409114d56915c603bcab5fe75"
        }
      ],
      "reviewPacketSha256": "f3eaeef8a26fe7b6cc9859627f9084be3f9a1a12adf5362f42d408a3348c88b8",
      "actionContext": {
        "phase": "design",
        "label": "Architecture and design",
        "generation": 1,
        "submittedAt": "2026-08-11T00:12:55.554Z",
        "artifacts": [
          {
            "path": "singularity/work-items/WRK-1978/artifacts/design/design.md",
            "sha256": "ad96df801a5b9334449c06c0ca473e2c8062433409114d56915c603bcab5fe75"
          }
        ],
        "reviewPacketSha256": "f3eaeef8a26fe7b6cc9859627f9084be3f9a1a12adf5362f42d408a3348c88b8",
        "submittedSourceCommit": "776db5e72a21e9cf00295773676e4e474f1588ab",
        "planId": "806976bb4fb625b88f0e16d4"
      },
      "selfApproval": true
    }
  ],
  "selfApproval": true,
  "conformanceTree": null
}
-->

# WRK-1978 — Architecture and Design

## Context and constraints

The approved requirements call for restyling the app to look like Microsoft's Windows 11 Calculator (Fluent Design), applied literally to Standard/Scientific layout and button grid, applied via shared tokens to Unit Converter/Financial Calculator/Function Grapher, in both light and dark themes, fully responsive at desktop and mobile widths, with no change to calculation semantics or existing features. [WRK-1978:REQ-001] [WRK-1978:REQ-002] [WRK-1978:AC-001] [WRK-1978:AC-002] [WRK-1978:AC-003] [WRK-1978:AC-004] [WRK-1978:AC-005]

Current architecture (observed in `src/App.jsx`, `src/components/`, `src/index.css`):
- The app is a single-page, client-only React app with no backend/API (per the repository architecture view). `App.jsx` owns all calculator state (expression, result, history, memory, angle unit, theme, sound) and mode routing (`activeMode`), and passes handlers down as props to `Header`, `Display`, `StandardKeypad`, `ScientificKeypad`, `UnitConverter`, `FinancialCalculator`, `FunctionGrapher`, `HistoryDrawer`, and `KeyboardShortcutsModal`.
- Theming is already implemented as a token-swap mechanism: `App.jsx` sets `document.documentElement.setAttribute('data-theme', theme)` and persists the choice to `localStorage` (`apex_theme`). `src/index.css` defines six themes (`classic` default, `midnight`, `cyberpunk`, `terminal`, `pastel`, `light`) as `[data-theme='...']` blocks of CSS custom properties (`--bg-primary`, `--card-bg`, `--card-border`, `--text-main/muted/accent`, `--display-bg/border`, `--btn-num-*`, `--btn-op-*`, `--btn-func-*`, `--btn-eq-*`, `--active-indicator`, `--shadow-main`, `--glass-blur`). Components consume these exclusively via `var(--token)` in Tailwind-style utility classes — there are no hard-coded per-component colors for the themeable surfaces.
- `Header.jsx` maintains its own `THEMES` array (id/name pairs shown in a `<select>`) and a `MODES` array (id/name/icon) rendered as tab buttons; adding a new theme is additive — one new token block in `index.css` plus one new entry in `THEMES`.
- Shared visual primitives: `.calc-btn` (button base: border, radius, shadow, hover/active transforms), `.glass-card` (outer container), `.calculator-display` (display panel chrome) are defined once in `index.css` and reused across modes.
- `src/utils/evaluator.js` is fully isolated from styling and is out of scope; the security view confirms the only trust boundary (user expression input → evaluator) is unaffected by this change.
- Constraint for this phase: `writeScope` for `design` is `artifact-only` — this document defines architecture and structure; no source code is changed here. Detailed component-level specifics are deferred to `implementation-spec`.

## Proposed design

**Token layer (additive, all modes):** Add two new theme entries, `win11-light` and `win11-dark`, as new `[data-theme='win11-light']` / `[data-theme='win11-dark']` blocks in `src/index.css`, following the exact same custom-property contract as the existing six themes, plus two new entries in `Header.jsx`'s `THEMES` array. This requires zero changes to `App.jsx` state logic, the existing theme-switch mechanism, or `localStorage` persistence — it is a pure extension of the existing pattern. New Fluent-specific values needed within that contract: Windows 11 accent-blue based `--btn-op-bg`/`--active-indicator`, smaller corner radii for controls (Windows 11 uses ~4–8px on buttons vs. the current 12px `.calc-btn` and 28px `.glass-card`), a flatter `--shadow-main` (Windows 11 elevation is subtle, not the current warm drop-shadow), and a Segoe UI Variable-style font stack fallback (`"Segoe UI Variable", "Segoe UI", system-ui, sans-serif` — an approximation, since the actual Microsoft font cannot be bundled; this must be documented as a substitution, not a literal asset match).

**Standard and Scientific modes (literal recreation, `StandardKeypad.jsx` / `ScientificKeypad.jsx` / `Header.jsx` / `Display.jsx`):**
- Button grid: restructure the 4-column grid so memory keys (`MC`/`MR`/`M+`/`M-`) sit in a slim horizontal strip docked above the main keypad (matching Windows 11 Calculator's memory row placement) rather than occupying the first grid row as a peer of digit/operator keys. The digit/operator/equals grid itself becomes a uniform 4-column grid of squarer, evenly sized tiles with a single accent-colored equals key, mirroring Windows 11's button proportions and outline style (thin border, no heavy gradients).
- Navigation: Windows 11 Calculator itself uses a hamburger-triggered `NavigationView` panel to switch modes rather than a tab strip. To reconcile that pattern with this app's existing five-mode architecture (which has no Windows 11 equivalent), `Header.jsx`'s mode tabs are restyled as a Fluent-style navigation affordance: a slide-out panel/list at desktop widths and a compact dropdown at narrow/mobile widths, satisfying the full-responsiveness requirement. [WRK-1978:AC-004]
- `Display.jsx` keeps its existing two-line structure (small expression line, large bold result line) since it already matches Windows 11's display layout pattern; changes here are limited to spacing, corner radius, and token values, not DOM restructuring.

**Unit Converter, Financial Calculator, Function Grapher (`UnitConverter.jsx`, `FinancialCalculator.jsx`, `FunctionGrapher.jsx`):** These have no native Windows 11 Calculator equivalent, so per the approved acceptance criteria they inherit the same Fluent tokens and shared primitives (`.calc-btn`, `.glass-card`, `.calculator-display`) for visual consistency, without a mandated layout restructuring. [WRK-1978:AC-002]

**State and contracts:** No changes to `App.jsx` handler contracts (`onDigit`, `onOperator`, `onEquals`, `onMemory`, `onNegate`, `onPercent`, `onBackspace`, `onClear`) or to `evaluateExpression`/`formatNumber` in `evaluator.js`. Any new presentational props needed to support the restructured keypad/navigation layout (e.g., a layout-variant flag) are additive and scoped for `implementation-spec`, not finalized structurally in this document.

**Theme selection UX:** `win11-light` and `win11-dark` become two additional selectable entries in the existing theme dropdown (not a separate light/dark toggle control), keeping the interaction model consistent with the app's current single-dropdown theme picker.

## Security, observability, migration, and rollback

**Security:** No security-relevant boundary changes. This is a presentation-layer-only change; the sole trust boundary identified in the repository's security view (browser-side user expression input into `evaluateExpression`) is untouched, and no new external dependencies process user input as part of this change.

**Observability:** The repository has no existing telemetry/analytics instrumentation; this phase does not introduce any. Verification remains manual visual review across all five modes and both new themes, plus a successful `npm run build` per acceptance criteria. [WRK-1978:AC-005]

**Migration/compatibility:** Additive only — existing `localStorage` theme values (`classic`, `midnight`, `cyberpunk`, `terminal`, `pastel`, `light`) remain valid and unaffected; users keep their current theme unless they explicitly select `win11-light` or `win11-dark`. No stored-data migration is required. No existing theme keys, CSS custom-property names, or component props are removed or renamed.

**Rollback:** Because the change adds new theme blocks/entries and a keypad/navigation layout variant rather than replacing existing ones, rollback is a straightforward revert of the new CSS theme blocks, the two new `THEMES` entries, and any keypad/navigation layout conditional — no persisted-data rollback is needed since existing theme values remain valid throughout.

## Alternatives and decisions

**Alternative A — Token-only reskin** (change only CSS custom-property values within the current DOM structure, no keypad/navigation restructuring): Rejected as the sole approach because the approved acceptance criteria explicitly require a literal recreation of Windows 11 Calculator's layout and button grid for Standard/Scientific modes, not just a color/typography pass. [WRK-1978:AC-001]

**Alternative B — Replace the existing multi-theme system with a single hardcoded Windows 11 style**, removing `classic`/`midnight`/`cyberpunk`/`terminal`/`pastel`/`light`: Rejected because the approved requirements do not ask for removal of existing themes, and replacing the theme system outright would be a larger, less reversible change than adding new theme entries alongside the existing ones, increasing regression risk without a corresponding requirement.

**Decision:** Add `win11-light`/`win11-dark` as new, additive entries in the existing theme-token system, and restructure `StandardKeypad`/`ScientificKeypad`/`Header` navigation to mirror Windows 11 Calculator's button grid and navigation pattern, while restyling Unit Converter/Financial Calculator/Function Grapher via shared tokens only (matching the more relaxed fidelity bar the requirements set for those modes). This keeps the change additive, reversible, and consistent with the existing architecture, and is traceable to [WRK-1978:REQ-001], [WRK-1978:REQ-002], and [WRK-1978:AC-001] through [WRK-1978:AC-005].

**Deferred to implementation-spec (not blocking this phase):** exact grid line counts and pixel/token values for the new themes, whether the memory row renders as an inline strip or a slide-out panel, and the precise breakpoints for the desktop navigation panel vs. mobile dropdown.

<!-- approved source inputs:start -->

# Approved phase inputs

## Approved phase input: requirements

<!-- source=artifacts/requirements/requirements.md sha256=ab21c30d64ab5306d05a03ce32f81c0ff55a74e9e5b0ca2dba010dc6df5b883b status=captured -->

<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "WRK-1978",
  "workType": "feature",
  "phase": "requirements",
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
      "filename": "requirements.md",
      "mediaType": "text/markdown",
      "sha256": "ea8891bbd8b3f56b1f0457be53ddfa81c86ef82830ade12929eac4b3f1a369df",
      "bytes": 14820
    },
    "generation": 1,
    "publishedAt": "2026-08-10T23:57:19.372Z"
  },
  "sourceCommit": "b3bb251388223ee58b55dd016a0115fb119db5c1",
  "generationCommit": "22a0caa72e70c120ba595ab27003ebb18ed02d8d",
  "publicationCommit": "22a0caa72e70c120ba595ab27003ebb18ed02d8d",
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
  "approvals": [
    {
      "decision": "approved",
      "phase": "requirements",
      "at": "2026-08-11T00:05:43.161Z",
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
          "path": "singularity/work-items/WRK-1978/artifacts/requirements/requirements.md",
          "sha256": "b125d1e96e5608ceed4e08d6955f216f8137be78046950380356578523ae479b"
        }
      ],
      "reviewPacketSha256": "1ec532b617950eeac18211c4f4a9b87e2040e2b0f5f90c76efef0aec62e3146e",
      "actionContext": {
        "phase": "requirements",
        "label": "Requirements",
        "generation": 1,
        "submittedAt": "2026-08-10T23:58:53.432Z",
        "artifacts": [
          {
            "path": "singularity/work-items/WRK-1978/artifacts/requirements/requirements.md",
            "sha256": "b125d1e96e5608ceed4e08d6955f216f8137be78046950380356578523ae479b"
          }
        ],
        "reviewPacketSha256": "1ec532b617950eeac18211c4f4a9b87e2040e2b0f5f90c76efef0aec62e3146e",
        "submittedSourceCommit": "22a0caa72e70c120ba595ab27003ebb18ed02d8d",
        "planId": "f959e3daf28f11e40e2f721a"
      },
      "selfApproval": true
    }
  ],
  "selfApproval": true,
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

<!-- approved source inputs:start -->

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

<!-- approved source inputs:end -->

<!-- approved source inputs:end -->

<!-- approved source inputs:end -->

## Approved phase input: implementation

<!-- source=artifacts/implementation/implementation-summary.md sha256=4e86c4183e104f5ed7a74bdcfbddbe41a0568995a8e6c4ba5d989ced7c1623a1 status=captured -->

<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "WRK-1978",
  "workType": "feature",
  "phase": "implementation",
  "generation": 1,
  "status": "approved",
  "generatedBy": {
    "name": "Ashok Raj",
    "email": "88361104+ashokraj2011@users.noreply.github.com",
    "login": "ashokraj2011"
  },
  "generatedAgent": "developer",
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
      "agentId": "developer"
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
      "filename": "implementation-summary.md",
      "mediaType": "text/markdown",
      "sha256": "958e54e4dbcb633c0d07d846475690487eeb44db65d6391f06541f6c48a36ac4",
      "bytes": 113492
    },
    "generation": 1,
    "publishedAt": "2026-08-11T02:27:59.457Z"
  },
  "sourceCommit": "0b735dd79afd7ccb2419a3ac97399de722336ff1",
  "generationCommit": "1f47b502df8aacdc24c770db46bf1396fa41e339",
  "publicationCommit": "1f47b502df8aacdc24c770db46bf1396fa41e339",
  "configSha256": "c71e8d4583a4303c75561c44902b837971681f740cc7025f9b55cb997589424f",
  "sourceSha256": "4e44848b5ace267968bed14bdb47c521769134cacd3d29c03fb325271f373786",
  "template": {
    "path": "singularity/templates/common/implementation.md",
    "sha256": "5d0478b18c8fd14221e14c68e6238b909bccd6802a70262c416005354716c62c"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/WRK-1978/context/inputs-implementation-gen1.json",
    "sha256": "f28f08b8f45bf95314cff0ee2c64ad7fddb67bb9c7d6f0c6e5c47ec4589e2b55",
    "renderedSha256": "7974199cc2dc7b624ed2833685e8df0d60c5866213394cf68e4aef59cd805e4d",
    "mode": "enforce"
  },
  "designSources": {
    "sets": [],
    "approved": null
  },
  "remoteAgent": null,
  "clarification": null,
  "telemetry": [
    {
      "generation": 1,
      "path": "singularity/work-items/WRK-1978/telemetry/implementation-gen1.json",
      "sha256": "e3e80dba3e08e02446fbe7290a4b128bbe954c013dbb3275895abd12f626d348",
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
      "startedAt": "2026-08-11T02:27:59.457Z",
      "completedAt": "2026-08-11T02:27:59.457Z",
      "agent": "developer",
      "generation": 1
    }
  ],
  "sequenceOverrides": [],
  "approvals": [
    {
      "decision": "approved",
      "phase": "implementation",
      "at": "2026-08-11T02:38:35.102Z",
      "actor": {
        "name": "Ashok Raj",
        "email": "88361104+ashokraj2011@users.noreply.github.com",
        "login": "ashokraj2011"
      },
      "agent": "developer",
      "authorityGroup": "engineering-reviewers",
      "identityAssurance": "configured-local",
      "channel": "copilot-selection-receipt",
      "generation": 1,
      "artifactSha256": [
        {
          "path": "singularity/work-items/WRK-1978/artifacts/implementation/implementation-summary.md",
          "sha256": "dbefd795907298eb0c46a246be48e2c3b15226c8bf05cd66b7d17bac81867635"
        },
        {
          "path": "src/components/Display.jsx",
          "sha256": "5f03c1d0683c26ff20d4cacde7e547c6202397bb03c85a18e0796767a62b5b90"
        },
        {
          "path": "src/components/FinancialCalculator.jsx",
          "sha256": "657589607d5babd87dacfb8569acaf3ed639cfcbfcba7a7ecdb2955d94551890"
        },
        {
          "path": "src/components/FunctionGrapher.jsx",
          "sha256": "b3a8f5a9efd46846b941e31ee8286efddecb0af18dad2a30a9768671931d8c48"
        },
        {
          "path": "src/components/Header.jsx",
          "sha256": "d7d34675b07ba58299b96f6ac85414909e238163217b14f3b9b489c358b7f648"
        },
        {
          "path": "src/components/HistoryDrawer.jsx",
          "sha256": "daa55e91e42c345304f5480ed4fe1726621a7b7e035ef801425a12e945fda5e9"
        },
        {
          "path": "src/components/KeyboardShortcutsModal.jsx",
          "sha256": "752b9cf6d661cd5e894ce2ac1c0b90d5d9e599a51f8db8a8db812ca6bd8777cd"
        },
        {
          "path": "src/components/ScientificKeypad.jsx",
          "sha256": "0b815e9330c470b02eda5e77836c6bcdbff6587219f8bfa9b559f28d85aa51a2"
        },
        {
          "path": "src/components/StandardKeypad.jsx",
          "sha256": "1108f94a0c38cb364830d2ddf00e3f573be683be1b8b28e7808f3c3d93cde408"
        },
        {
          "path": "src/components/UnitConverter.jsx",
          "sha256": "b6c56d4eeeb8cba8dc448446443ee5255a6f22e86fddbbe31d0224595ee7543e"
        },
        {
          "path": "src/index.css",
          "sha256": "29815dd9264a94a36b96884a3b967750139c1cae177ef6ddc55920fe4392c7e6"
        }
      ],
      "reviewPacketSha256": "80f66002e400567200cb2a289da09a203e338a6f4875b4e8a5ea5fcfb6dc6618",
      "actionContext": {
        "phase": "implementation",
        "label": "Implementation",
        "generation": 1,
        "submittedAt": "2026-08-11T02:32:02.004Z",
        "artifacts": [
          {
            "path": "singularity/work-items/WRK-1978/artifacts/implementation/implementation-summary.md",
            "sha256": "dbefd795907298eb0c46a246be48e2c3b15226c8bf05cd66b7d17bac81867635"
          },
          {
            "path": "src/components/Display.jsx",
            "sha256": "5f03c1d0683c26ff20d4cacde7e547c6202397bb03c85a18e0796767a62b5b90"
          },
          {
            "path": "src/components/FinancialCalculator.jsx",
            "sha256": "657589607d5babd87dacfb8569acaf3ed639cfcbfcba7a7ecdb2955d94551890"
          },
          {
            "path": "src/components/FunctionGrapher.jsx",
            "sha256": "b3a8f5a9efd46846b941e31ee8286efddecb0af18dad2a30a9768671931d8c48"
          },
          {
            "path": "src/components/Header.jsx",
            "sha256": "d7d34675b07ba58299b96f6ac85414909e238163217b14f3b9b489c358b7f648"
          },
          {
            "path": "src/components/HistoryDrawer.jsx",
            "sha256": "daa55e91e42c345304f5480ed4fe1726621a7b7e035ef801425a12e945fda5e9"
          },
          {
            "path": "src/components/KeyboardShortcutsModal.jsx",
            "sha256": "752b9cf6d661cd5e894ce2ac1c0b90d5d9e599a51f8db8a8db812ca6bd8777cd"
          },
          {
            "path": "src/components/ScientificKeypad.jsx",
            "sha256": "0b815e9330c470b02eda5e77836c6bcdbff6587219f8bfa9b559f28d85aa51a2"
          },
          {
            "path": "src/components/StandardKeypad.jsx",
            "sha256": "1108f94a0c38cb364830d2ddf00e3f573be683be1b8b28e7808f3c3d93cde408"
          },
          {
            "path": "src/components/UnitConverter.jsx",
            "sha256": "b6c56d4eeeb8cba8dc448446443ee5255a6f22e86fddbbe31d0224595ee7543e"
          },
          {
            "path": "src/index.css",
            "sha256": "29815dd9264a94a36b96884a3b967750139c1cae177ef6ddc55920fe4392c7e6"
          }
        ],
        "reviewPacketSha256": "80f66002e400567200cb2a289da09a203e338a6f4875b4e8a5ea5fcfb6dc6618",
        "submittedSourceCommit": "1f47b502df8aacdc24c770db46bf1396fa41e339",
        "planId": "0cc136008266485092e36fe9"
      },
      "selfApproval": true
    }
  ],
  "selfApproval": true,
  "conformanceTree": null
}
-->

# WRK-1978 — Implementation Summary

## Implemented outcome

The app now supports two new, additive Windows 11 Fluent Design themes — `win11-light` and `win11-dark` — selectable from the existing theme dropdown alongside the six original themes (`classic`, `midnight`, `cyberpunk`, `terminal`, `pastel`, `light`), none of which were removed or renamed. [WRK-1978:REQ-001] [WRK-1978:AC-001]

Standard and Scientific modes were restructured to literally mirror Windows 11 Calculator's layout: a slim memory strip (`MC`/`MR`/`M+`/`M-`) now sits above a uniform 4-column digit/operator/equals grid with a single accent-colored equals key, thinner borders, and smaller corner radii, instead of the previous layout where memory keys occupied the first grid row as peers of digit/operator keys. [WRK-1978:AC-001]

Mode navigation (`Header.jsx`) was restyled into a Fluent-style `NavigationView` affordance: a collapsible icon rail at desktop widths and a compact dropdown at mobile widths, satisfying the full-responsiveness requirement. [WRK-1978:AC-004]

Unit Converter, Financial Calculator, Function Grapher, History Drawer, and Keyboard Shortcuts Modal were restyled to consume the same shared `.calc-btn` / `.glass-card` / `.calculator-display` primitives and theme tokens as Standard/Scientific, without any DOM or prop-contract changes. [WRK-1978:AC-002]

All existing calculator modes, memory, history, sound, and keyboard-shortcut behavior continue to work exactly as before; `src/App.jsx`, `src/utils/evaluator.js`, and `src/utils/audio.js` were not modified. [WRK-1978:AC-003]

`npm run build` succeeds with no change to calculation results or error states. [WRK-1978:AC-005]

## Changed components and decisions

- **`src/index.css`** — Added `[data-theme='win11-light']` and `[data-theme='win11-dark']` blocks using the exact same custom-property set as the six existing themes (Windows-11-accent-blue tokens, flatter shadows, near-black/white neutrals for light, `#202020`-family neutrals for dark), plus a documented `"Segoe UI Variable", "Segoe UI", system-ui, sans-serif` font-stack substitution scoped to the two new themes (the real Microsoft variable font cannot be bundled). Added win11-scoped corner-radius/shadow overrides for `.calc-btn` / `.glass-card` / `.calculator-display` without altering those classes' base values for the six existing themes. Added new, additive structural classes for the restructured components: `.memory-strip`, `.keypad-grid`, `.sci-toolbar`, `.nav-rail` / `.nav-rail-item` / `.nav-rail-label` / `.nav-rail-toggle`, `.nav-mobile` / `.nav-mobile-select` (768px breakpoint for desktop-rail vs. mobile-dropdown). Fixed `.calculator-display`'s background from a hardcoded warm-cream gradient to `var(--display-bg)`, required for the new themes (and the existing dark themes) to render the display panel correctly — within IFC-006's "adjust token usage" scope, but flagged here as it also visually affects the six pre-existing themes' display panel.
- **`src/components/Header.jsx`** — Added `win11-light` / `win11-dark` to `THEMES`. Replaced the mode tab strip with the Fluent NavigationView-style rail/dropdown described above, using new local state `isNavExpanded` kept inside `Header.jsx` (not lifted to `App.jsx`). `activeMode` / `setActiveMode` / `currentTheme` / `setTheme` prop contract unchanged.
- **`src/components/StandardKeypad.jsx`** — Moved `MC`/`MR`/`M+`/`M-` into `.memory-strip`, above a `.keypad-grid` 4-column digit/operator/equals grid with a single accent equals key. Same `onDigit` / `onOperator` / `onEquals` / `onClear` / `onBackspace` / `onNegate` / `onPercent` / `onMemory` contract and `handleBtn` sound-dispatch pattern preserved.
- **`src/components/ScientificKeypad.jsx`** — Only the functions toolbar container was switched to `.sci-toolbar`; still wraps `StandardKeypad` unchanged.
- **`src/components/Display.jsx`** — Same two-line DOM; padding/radius moved into the real `.calculator-display` CSS rule.
- **`src/components/UnitConverter.jsx`, `FinancialCalculator.jsx`, `FunctionGrapher.jsx`, `HistoryDrawer.jsx`, `KeyboardShortcutsModal.jsx`** — Buttons/cards/result panels switched to the shared `.calc-btn` / `.glass-card` / `.calculator-display` primitives and existing theme tokens; no DOM structure or prop changes.
- **`src/index.css` (theme-variable utility classes, discovered defect fix)** — During implementation and visual verification, discovered that this repository has never had Tailwind CSS installed or configured (`package.json`, `vite.config.js` confirmed), yet ~295 call sites across every themed component used Tailwind arbitrary-value classes such as `bg-[var(--btn-eq-bg)]` to apply per-button-type colors (digit/operator/function/equals) and text/border accent colors. Because Tailwind never compiled these classes, they were inert in all 8 themes (the 6 pre-existing ones and both new ones): buttons rendered with the browser's default gray instead of any theme color, and the equals key never showed its accent color. This directly blocked [WRK-1978:AC-001]'s requirement that Standard/Scientific "visually match Windows 11 Calculator's ... color system" (flat white digit keys, gray operator keys, blue accent equals key), so — with explicit human confirmation to proceed given the scope — it was fixed as part of this generation: all 295 occurrences across the 9 themed component files were mechanically replaced with real CSS utility classes (e.g. `u-bg-btn-eq-bg`, `u-text-text-muted`, `u-hbg-btn-func-hover`) added to `src/index.css`, each applying the same CSS custom property directly (using the `background` shorthand rather than `background-color` where a theme's value is a gradient, e.g. the six pre-existing themes' `--btn-eq-bg`). No class name, variable name, or component prop was renamed or removed; only the previously-inert literal strings were substituted for functionally-equivalent real classes. This is a **deviation from the approved implementation-spec's file-level plan** (which anticipated only token-value changes, not fixing a repo-wide non-functional styling mechanism) but was necessary for the approved acceptance criteria to be visually achievable at all, and improves rendering correctness for the six pre-existing themes too (e.g. the classic theme's equals key, which never showed its brown gradient/white icon before, now renders correctly).

## Tests and operational notes

- `npm run build` — succeeds (verified both before and after all changes, and again after the theme-variable utility-class fix). [WRK-1978:AC-005]
- `npm run lint` — 20 pre-existing errors, identical file/line set before and after all changes (unused `React` imports, `evaluator.js`'s `\%` escape, `audio.js`'s unused `e`, `FunctionGrapher.jsx`'s `set-state-in-effect`); no new lint issues introduced by this generation.
- Manual visual verification performed via an integrated browser session at both desktop (1280×900) and mobile (390×844) viewport widths: confirmed Windows 11 Light, Windows 11 Dark, and the pre-existing Classic Desk theme all render correctly across Standard, Scientific, Converter, Financial, and Grapher modes; confirmed the desktop nav rail and mobile nav dropdown both work; confirmed the accent-colored equals key and per-button-type coloring now render in all 8 themes. [WRK-1978:AC-001] [WRK-1978:AC-002] [WRK-1978:AC-004]
- Verified via `git diff` that `src/App.jsx`, `src/utils/evaluator.js`, and `src/utils/audio.js` have zero changes, and that all six pre-existing `[data-theme='...']` CSS blocks remain present and unrenamed. [WRK-1978:AC-003]
- **Residual risks / deviations:**
  - The Fluent "slide-out NavigationView" was implemented as a collapsible icon-rail (toggle-expand) rather than an overlay panel, and Segoe UI Variable is approximated via a font-stack substitution — both anticipated and allowed by the approved design and implementation-spec.
  - A pre-existing, out-of-scope defect was left untouched: `Header.jsx`'s `THEMES` array has always included a `midnight` entry with no matching `[data-theme='midnight']` CSS block (the `pastel` block appears to be the intended "midnight" block). This predates WRK-1978 and is not part of its approved scope.
  - This repository still has no automated test framework or visual-regression tooling (confirmed by the repository's testing world-model view), so the manual browser-based verification above is the same class of evidence anticipated by the approved implementation-spec's test specification; full manual review across all 8 themes × 5 modes × all breakpoints combinatorially was not exhaustively performed, though representative coverage of each theme, each mode, and both viewport tiers was completed.

<!-- approved source inputs:start -->

# Approved phase inputs

## Approved phase input: design

<!-- source=artifacts/design/design.md sha256=25a3ca14e26cc3ab5c1678a98defd986491a1b1b2ba7b873c5aeb28f426a6ac0 status=captured -->

<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "WRK-1978",
  "workType": "feature",
  "phase": "design",
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
      "filename": "design.md",
      "mediaType": "text/markdown",
      "sha256": "867b48ea7f4a91dda28f6482c384bafda2d31fd1a9f754391871068147fc64d4",
      "bytes": 29795
    },
    "generation": 1,
    "publishedAt": "2026-08-11T00:11:09.908Z"
  },
  "sourceCommit": "55ab574d7d2e75d1ea40824b8cfaecb17a688a42",
  "generationCommit": "776db5e72a21e9cf00295773676e4e474f1588ab",
  "publicationCommit": "776db5e72a21e9cf00295773676e4e474f1588ab",
  "configSha256": "c71e8d4583a4303c75561c44902b837971681f740cc7025f9b55cb997589424f",
  "sourceSha256": "4e44848b5ace267968bed14bdb47c521769134cacd3d29c03fb325271f373786",
  "template": {
    "path": "singularity/templates/feature/design.md",
    "sha256": "8b7455f464a7025efa92942c272a04e3c0a3ab2a4d3eb438703cc14e230bc856"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/WRK-1978/context/inputs-design-gen1.json",
    "sha256": "6440f9b71115fe490601c1a314db9d6685df86ec63b83b6abe78763a9497c56c",
    "renderedSha256": "8c269b41ed26d1fb882c09faf111aff71c60019372e3e00f174e7d42921510b4",
    "mode": "enforce"
  },
  "designSources": {
    "sets": [],
    "approved": null
  },
  "remoteAgent": null,
  "clarification": null,
  "telemetry": [
    {
      "generation": 1,
      "path": "singularity/work-items/WRK-1978/telemetry/design-gen1.json",
      "sha256": "1034558f141f5c5f034e50383dcddc8bfbd560d6d623f686fd3864a1a0ef22d7",
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
      "startedAt": "2026-08-11T00:11:09.908Z",
      "completedAt": "2026-08-11T00:11:09.908Z",
      "agent": "product-owner",
      "generation": 1
    }
  ],
  "sequenceOverrides": [],
  "approvals": [
    {
      "decision": "approved",
      "phase": "design",
      "at": "2026-08-11T00:15:56.434Z",
      "actor": {
        "name": "Ashok Raj",
        "email": "88361104+ashokraj2011@users.noreply.github.com",
        "login": "ashokraj2011"
      },
      "agent": "architect",
      "authorityGroup": "architecture-reviewers",
      "identityAssurance": "configured-local",
      "channel": "copilot-selection-receipt",
      "generation": 1,
      "artifactSha256": [
        {
          "path": "singularity/work-items/WRK-1978/artifacts/design/design.md",
          "sha256": "ad96df801a5b9334449c06c0ca473e2c8062433409114d56915c603bcab5fe75"
        }
      ],
      "reviewPacketSha256": "f3eaeef8a26fe7b6cc9859627f9084be3f9a1a12adf5362f42d408a3348c88b8",
      "actionContext": {
        "phase": "design",
        "label": "Architecture and design",
        "generation": 1,
        "submittedAt": "2026-08-11T00:12:55.554Z",
        "artifacts": [
          {
            "path": "singularity/work-items/WRK-1978/artifacts/design/design.md",
            "sha256": "ad96df801a5b9334449c06c0ca473e2c8062433409114d56915c603bcab5fe75"
          }
        ],
        "reviewPacketSha256": "f3eaeef8a26fe7b6cc9859627f9084be3f9a1a12adf5362f42d408a3348c88b8",
        "submittedSourceCommit": "776db5e72a21e9cf00295773676e4e474f1588ab",
        "planId": "806976bb4fb625b88f0e16d4"
      },
      "selfApproval": true
    }
  ],
  "selfApproval": true,
  "conformanceTree": null
}
-->

# WRK-1978 — Architecture and Design

## Context and constraints

The approved requirements call for restyling the app to look like Microsoft's Windows 11 Calculator (Fluent Design), applied literally to Standard/Scientific layout and button grid, applied via shared tokens to Unit Converter/Financial Calculator/Function Grapher, in both light and dark themes, fully responsive at desktop and mobile widths, with no change to calculation semantics or existing features. [WRK-1978:REQ-001] [WRK-1978:REQ-002] [WRK-1978:AC-001] [WRK-1978:AC-002] [WRK-1978:AC-003] [WRK-1978:AC-004] [WRK-1978:AC-005]

Current architecture (observed in `src/App.jsx`, `src/components/`, `src/index.css`):
- The app is a single-page, client-only React app with no backend/API (per the repository architecture view). `App.jsx` owns all calculator state (expression, result, history, memory, angle unit, theme, sound) and mode routing (`activeMode`), and passes handlers down as props to `Header`, `Display`, `StandardKeypad`, `ScientificKeypad`, `UnitConverter`, `FinancialCalculator`, `FunctionGrapher`, `HistoryDrawer`, and `KeyboardShortcutsModal`.
- Theming is already implemented as a token-swap mechanism: `App.jsx` sets `document.documentElement.setAttribute('data-theme', theme)` and persists the choice to `localStorage` (`apex_theme`). `src/index.css` defines six themes (`classic` default, `midnight`, `cyberpunk`, `terminal`, `pastel`, `light`) as `[data-theme='...']` blocks of CSS custom properties (`--bg-primary`, `--card-bg`, `--card-border`, `--text-main/muted/accent`, `--display-bg/border`, `--btn-num-*`, `--btn-op-*`, `--btn-func-*`, `--btn-eq-*`, `--active-indicator`, `--shadow-main`, `--glass-blur`). Components consume these exclusively via `var(--token)` in Tailwind-style utility classes — there are no hard-coded per-component colors for the themeable surfaces.
- `Header.jsx` maintains its own `THEMES` array (id/name pairs shown in a `<select>`) and a `MODES` array (id/name/icon) rendered as tab buttons; adding a new theme is additive — one new token block in `index.css` plus one new entry in `THEMES`.
- Shared visual primitives: `.calc-btn` (button base: border, radius, shadow, hover/active transforms), `.glass-card` (outer container), `.calculator-display` (display panel chrome) are defined once in `index.css` and reused across modes.
- `src/utils/evaluator.js` is fully isolated from styling and is out of scope; the security view confirms the only trust boundary (user expression input → evaluator) is unaffected by this change.
- Constraint for this phase: `writeScope` for `design` is `artifact-only` — this document defines architecture and structure; no source code is changed here. Detailed component-level specifics are deferred to `implementation-spec`.

## Proposed design

**Token layer (additive, all modes):** Add two new theme entries, `win11-light` and `win11-dark`, as new `[data-theme='win11-light']` / `[data-theme='win11-dark']` blocks in `src/index.css`, following the exact same custom-property contract as the existing six themes, plus two new entries in `Header.jsx`'s `THEMES` array. This requires zero changes to `App.jsx` state logic, the existing theme-switch mechanism, or `localStorage` persistence — it is a pure extension of the existing pattern. New Fluent-specific values needed within that contract: Windows 11 accent-blue based `--btn-op-bg`/`--active-indicator`, smaller corner radii for controls (Windows 11 uses ~4–8px on buttons vs. the current 12px `.calc-btn` and 28px `.glass-card`), a flatter `--shadow-main` (Windows 11 elevation is subtle, not the current warm drop-shadow), and a Segoe UI Variable-style font stack fallback (`"Segoe UI Variable", "Segoe UI", system-ui, sans-serif` — an approximation, since the actual Microsoft font cannot be bundled; this must be documented as a substitution, not a literal asset match).

**Standard and Scientific modes (literal recreation, `StandardKeypad.jsx` / `ScientificKeypad.jsx` / `Header.jsx` / `Display.jsx`):**
- Button grid: restructure the 4-column grid so memory keys (`MC`/`MR`/`M+`/`M-`) sit in a slim horizontal strip docked above the main keypad (matching Windows 11 Calculator's memory row placement) rather than occupying the first grid row as a peer of digit/operator keys. The digit/operator/equals grid itself becomes a uniform 4-column grid of squarer, evenly sized tiles with a single accent-colored equals key, mirroring Windows 11's button proportions and outline style (thin border, no heavy gradients).
- Navigation: Windows 11 Calculator itself uses a hamburger-triggered `NavigationView` panel to switch modes rather than a tab strip. To reconcile that pattern with this app's existing five-mode architecture (which has no Windows 11 equivalent), `Header.jsx`'s mode tabs are restyled as a Fluent-style navigation affordance: a slide-out panel/list at desktop widths and a compact dropdown at narrow/mobile widths, satisfying the full-responsiveness requirement. [WRK-1978:AC-004]
- `Display.jsx` keeps its existing two-line structure (small expression line, large bold result line) since it already matches Windows 11's display layout pattern; changes here are limited to spacing, corner radius, and token values, not DOM restructuring.

**Unit Converter, Financial Calculator, Function Grapher (`UnitConverter.jsx`, `FinancialCalculator.jsx`, `FunctionGrapher.jsx`):** These have no native Windows 11 Calculator equivalent, so per the approved acceptance criteria they inherit the same Fluent tokens and shared primitives (`.calc-btn`, `.glass-card`, `.calculator-display`) for visual consistency, without a mandated layout restructuring. [WRK-1978:AC-002]

**State and contracts:** No changes to `App.jsx` handler contracts (`onDigit`, `onOperator`, `onEquals`, `onMemory`, `onNegate`, `onPercent`, `onBackspace`, `onClear`) or to `evaluateExpression`/`formatNumber` in `evaluator.js`. Any new presentational props needed to support the restructured keypad/navigation layout (e.g., a layout-variant flag) are additive and scoped for `implementation-spec`, not finalized structurally in this document.

**Theme selection UX:** `win11-light` and `win11-dark` become two additional selectable entries in the existing theme dropdown (not a separate light/dark toggle control), keeping the interaction model consistent with the app's current single-dropdown theme picker.

## Security, observability, migration, and rollback

**Security:** No security-relevant boundary changes. This is a presentation-layer-only change; the sole trust boundary identified in the repository's security view (browser-side user expression input into `evaluateExpression`) is untouched, and no new external dependencies process user input as part of this change.

**Observability:** The repository has no existing telemetry/analytics instrumentation; this phase does not introduce any. Verification remains manual visual review across all five modes and both new themes, plus a successful `npm run build` per acceptance criteria. [WRK-1978:AC-005]

**Migration/compatibility:** Additive only — existing `localStorage` theme values (`classic`, `midnight`, `cyberpunk`, `terminal`, `pastel`, `light`) remain valid and unaffected; users keep their current theme unless they explicitly select `win11-light` or `win11-dark`. No stored-data migration is required. No existing theme keys, CSS custom-property names, or component props are removed or renamed.

**Rollback:** Because the change adds new theme blocks/entries and a keypad/navigation layout variant rather than replacing existing ones, rollback is a straightforward revert of the new CSS theme blocks, the two new `THEMES` entries, and any keypad/navigation layout conditional — no persisted-data rollback is needed since existing theme values remain valid throughout.

## Alternatives and decisions

**Alternative A — Token-only reskin** (change only CSS custom-property values within the current DOM structure, no keypad/navigation restructuring): Rejected as the sole approach because the approved acceptance criteria explicitly require a literal recreation of Windows 11 Calculator's layout and button grid for Standard/Scientific modes, not just a color/typography pass. [WRK-1978:AC-001]

**Alternative B — Replace the existing multi-theme system with a single hardcoded Windows 11 style**, removing `classic`/`midnight`/`cyberpunk`/`terminal`/`pastel`/`light`: Rejected because the approved requirements do not ask for removal of existing themes, and replacing the theme system outright would be a larger, less reversible change than adding new theme entries alongside the existing ones, increasing regression risk without a corresponding requirement.

**Decision:** Add `win11-light`/`win11-dark` as new, additive entries in the existing theme-token system, and restructure `StandardKeypad`/`ScientificKeypad`/`Header` navigation to mirror Windows 11 Calculator's button grid and navigation pattern, while restyling Unit Converter/Financial Calculator/Function Grapher via shared tokens only (matching the more relaxed fidelity bar the requirements set for those modes). This keeps the change additive, reversible, and consistent with the existing architecture, and is traceable to [WRK-1978:REQ-001], [WRK-1978:REQ-002], and [WRK-1978:AC-001] through [WRK-1978:AC-005].

**Deferred to implementation-spec (not blocking this phase):** exact grid line counts and pixel/token values for the new themes, whether the memory row renders as an inline strip or a slide-out panel, and the precise breakpoints for the desktop navigation panel vs. mobile dropdown.

<!-- approved source inputs:start -->

# Approved phase inputs

## Approved phase input: requirements

<!-- source=artifacts/requirements/requirements.md sha256=ab21c30d64ab5306d05a03ce32f81c0ff55a74e9e5b0ca2dba010dc6df5b883b status=captured -->

<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "WRK-1978",
  "workType": "feature",
  "phase": "requirements",
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
      "filename": "requirements.md",
      "mediaType": "text/markdown",
      "sha256": "ea8891bbd8b3f56b1f0457be53ddfa81c86ef82830ade12929eac4b3f1a369df",
      "bytes": 14820
    },
    "generation": 1,
    "publishedAt": "2026-08-10T23:57:19.372Z"
  },
  "sourceCommit": "b3bb251388223ee58b55dd016a0115fb119db5c1",
  "generationCommit": "22a0caa72e70c120ba595ab27003ebb18ed02d8d",
  "publicationCommit": "22a0caa72e70c120ba595ab27003ebb18ed02d8d",
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
  "approvals": [
    {
      "decision": "approved",
      "phase": "requirements",
      "at": "2026-08-11T00:05:43.161Z",
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
          "path": "singularity/work-items/WRK-1978/artifacts/requirements/requirements.md",
          "sha256": "b125d1e96e5608ceed4e08d6955f216f8137be78046950380356578523ae479b"
        }
      ],
      "reviewPacketSha256": "1ec532b617950eeac18211c4f4a9b87e2040e2b0f5f90c76efef0aec62e3146e",
      "actionContext": {
        "phase": "requirements",
        "label": "Requirements",
        "generation": 1,
        "submittedAt": "2026-08-10T23:58:53.432Z",
        "artifacts": [
          {
            "path": "singularity/work-items/WRK-1978/artifacts/requirements/requirements.md",
            "sha256": "b125d1e96e5608ceed4e08d6955f216f8137be78046950380356578523ae479b"
          }
        ],
        "reviewPacketSha256": "1ec532b617950eeac18211c4f4a9b87e2040e2b0f5f90c76efef0aec62e3146e",
        "submittedSourceCommit": "22a0caa72e70c120ba595ab27003ebb18ed02d8d",
        "planId": "f959e3daf28f11e40e2f721a"
      },
      "selfApproval": true
    }
  ],
  "selfApproval": true,
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

<!-- approved source inputs:start -->

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

<!-- approved source inputs:end -->

<!-- approved source inputs:end -->

## Approved phase input: implementation-spec

<!-- source=artifacts/implementation-spec/implementation-spec.md sha256=01f6628278b6c0046578bbd19f1a9bca8ac2a43e40a7bd44b42efebcb326bc5a status=captured -->

<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "WRK-1978",
  "workType": "feature",
  "phase": "implementation-spec",
  "generation": 1,
  "status": "approved",
  "generatedBy": {
    "name": "Ashok Raj",
    "email": "88361104+ashokraj2011@users.noreply.github.com",
    "login": "ashokraj2011"
  },
  "generatedAgent": "architect",
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
      "agentId": "architect"
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
      "filename": "implementation-spec.md",
      "mediaType": "text/markdown",
      "sha256": "a238f60d9fc1e9455111fa3080eeb19e0e252bfb7978c00007440f879c0a677b",
      "bytes": 65372
    },
    "generation": 1,
    "publishedAt": "2026-08-11T00:20:12.058Z"
  },
  "sourceCommit": "51b44ff6543b763d55e9725397d4ae9866e8dcd2",
  "generationCommit": "be635898ae440a59014950bf66f0019275bb6aa3",
  "publicationCommit": "be635898ae440a59014950bf66f0019275bb6aa3",
  "configSha256": "c71e8d4583a4303c75561c44902b837971681f740cc7025f9b55cb997589424f",
  "sourceSha256": "4e44848b5ace267968bed14bdb47c521769134cacd3d29c03fb325271f373786",
  "template": {
    "path": "singularity/templates/feature/implementation-spec.md",
    "sha256": "f6b06a7e8c8dfa87a7f1289b2a80c0a6e98f5ee8e3cae2fe9faed501c031656c"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/WRK-1978/context/inputs-implementation-spec-gen1.json",
    "sha256": "98907c87e7ab91631c729e04cb3569b6c756e8a1fa27cffa7dd64064cf4f7bf9",
    "renderedSha256": "88156a7369334d34688e3a8b51535ff93dd31170dd2a6e3c13a203257ba9336d",
    "mode": "enforce"
  },
  "designSources": {
    "sets": [],
    "approved": null
  },
  "remoteAgent": null,
  "clarification": null,
  "telemetry": [
    {
      "generation": 1,
      "path": "singularity/work-items/WRK-1978/telemetry/implementation-spec-gen1.json",
      "sha256": "fb466b0beeeaaf4e0e1ff9793b38b8644a14934f4370808f0efaf2db41ab4e0b",
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
      "startedAt": "2026-08-11T00:20:12.058Z",
      "completedAt": "2026-08-11T00:20:12.058Z",
      "agent": "architect",
      "generation": 1
    }
  ],
  "sequenceOverrides": [],
  "approvals": [
    {
      "decision": "approved",
      "phase": "implementation-spec",
      "at": "2026-08-11T00:25:21.552Z",
      "actor": {
        "name": "Ashok Raj",
        "email": "88361104+ashokraj2011@users.noreply.github.com",
        "login": "ashokraj2011"
      },
      "agent": "architect",
      "authorityGroup": "architecture-reviewers",
      "identityAssurance": "configured-local",
      "channel": "copilot-selection-receipt",
      "generation": 1,
      "artifactSha256": [
        {
          "path": "singularity/work-items/WRK-1978/artifacts/implementation-spec/implementation-spec.md",
          "sha256": "48270087a541e741c87b91f62e2c8b14ef9e45c3ee295432aa1b6deb795df20a"
        }
      ],
      "reviewPacketSha256": "d7e7cc085721e6da097cb809ea189284f101c0dae9d92b3f8c2a7b70b8863a5b",
      "actionContext": {
        "phase": "implementation-spec",
        "label": "Implementation specification",
        "generation": 1,
        "submittedAt": "2026-08-11T00:21:33.582Z",
        "artifacts": [
          {
            "path": "singularity/work-items/WRK-1978/artifacts/implementation-spec/implementation-spec.md",
            "sha256": "48270087a541e741c87b91f62e2c8b14ef9e45c3ee295432aa1b6deb795df20a"
          }
        ],
        "reviewPacketSha256": "d7e7cc085721e6da097cb809ea189284f101c0dae9d92b3f8c2a7b70b8863a5b",
        "submittedSourceCommit": "be635898ae440a59014950bf66f0019275bb6aa3",
        "planId": "a4369fa2a5de2a9cc0c91fd0"
      },
      "selfApproval": true
    }
  ],
  "selfApproval": true,
  "conformanceTree": null
}
-->

# WRK-1978 — Implementation Specification

## Traceability

| Clause | Acceptance criteria | Planned code/tests | Status |
|---|---|---|---|
| `WRK-1978:IFC-001` | `WRK-1978:AC-001`, `WRK-1978:AC-004` | `src/index.css` new `[data-theme='win11-light']` / `[data-theme='win11-dark']` blocks; manual visual review | planned |
| `WRK-1978:IFC-002` | `WRK-1978:AC-001` | `src/components/Header.jsx` `THEMES` array — add `win11-light`, `win11-dark` entries | planned |
| `WRK-1978:IFC-003` | `WRK-1978:AC-001` | `src/components/StandardKeypad.jsx` grid restructuring (memory strip + uniform digit/operator grid) | planned |
| `WRK-1978:IFC-004` | `WRK-1978:AC-001` | `src/components/ScientificKeypad.jsx` functions toolbar restyle (inherits `StandardKeypad` grid changes since it wraps `StandardKeypad`) | planned |
| `WRK-1978:IFC-005` | `WRK-1978:AC-001`, `WRK-1978:AC-004` | `src/components/Header.jsx` navigation restyle (desktop slide-out panel / mobile dropdown) | planned |
| `WRK-1978:IFC-006` | `WRK-1978:AC-001` | `src/components/Display.jsx` spacing/corner-radius/token adjustments (no DOM restructuring) | planned |
| `WRK-1978:IFC-007` | `WRK-1978:AC-002` | `src/components/UnitConverter.jsx`, `src/components/FinancialCalculator.jsx`, `src/components/FunctionGrapher.jsx` — shared-token restyling only | planned |
| `WRK-1978:IFC-008` | `WRK-1978:AC-003` | No changes to `src/App.jsx` handler contracts or `src/utils/evaluator.js`; manual regression across all 5 modes | planned |
| `WRK-1978:IFC-009` | `WRK-1978:AC-004` | Responsive breakpoint verification for keypad grid and navigation panel at mobile/desktop widths | planned |
| `WRK-1978:IFC-010` | `WRK-1978:AC-005` | `npm run build` executed after implementation | planned |

## APIs, schemas, and contracts

The implementation MUST preserve the following exact contracts unchanged (see IFC-008 in the file-level plan below):
- `App` component state shape in `src/App.jsx`: `activeMode`, `expression`, `result`, `lastEvaluated`, `angleUnit`, `memoryValue`, `theme`, `soundEnabled`, `history`, `isHistoryOpen`, `isKeyboardOpen`.
- Handler function signatures passed as props: `onDigit(digit)`, `onOperator(op)`, `onEquals()`, `onClear()`, `onBackspace()`, `onNegate()`, `onPercent()`, `onMemory(type)` where `type` is one of `'MC' | 'MR' | 'M+' | 'M-'`.
- `evaluateExpression(expression, angleUnit)` and `formatNumber` exports in `src/utils/evaluator.js`, including the `{ result, rawResult, error }` return contract.
- `localStorage` keys `apex_theme`, `apex_sound`, `apex_history` and their existing value shapes.

The implementation MUST introduce the following new, additive contract (see IFC-001 and IFC-002 in the file-level plan below):
- Two new theme identifiers, `'win11-light'` and `'win11-dark'`, valid wherever the existing `theme` string state is used (the `THEMES` array in `Header.jsx`, the `[data-theme='...']` CSS selector convention in `index.css`, and the `apex_theme` localStorage value). These MUST follow the exact same CSS custom-property set already defined by the six existing themes: `--bg-primary`, `--bg-gradient`, `--card-bg`, `--card-border`, `--glass-blur`, `--shadow-main`, `--text-main`, `--text-muted`, `--text-accent`, `--display-bg`, `--display-border`, `--btn-num-bg/hover/text`, `--btn-op-bg/hover/text`, `--btn-func-bg/hover/text`, `--btn-eq-bg/hover/text/shadow`, `--active-indicator` — no new/renamed custom-property names, so no other component needs to change to consume the new themes.

Any new presentational-only prop needed to support the restructured Standard/Scientific keypad grid or Header navigation (e.g., a boolean/enum layout-variant prop) MUST be additive, optional, and default to preserving current behavior for existing themes; it MUST NOT change the `onDigit`/`onOperator`/etc. handler signatures above (see IFC-003 and IFC-005 in the file-level plan below).

## File-level implementation plan

- **`src/index.css`** — Add two new `[data-theme='win11-light']` and `[data-theme='win11-dark']` blocks (same property list as existing themes), plus new shared rules/variants for the restructured keypad grid and navigation panel if the visual treatment cannot be expressed purely through existing `.calc-btn` / `.glass-card` / `.calculator-display` classes (e.g., a `.calc-btn--win11` modifier or additional utility classes for the memory strip and nav panel). No existing CSS rule, class name, or custom-property name is removed or renamed. [WRK-1978:IFC-001]
- **`src/components/Header.jsx`** — Add `win11-light` and `win11-dark` to the `THEMES` array (id/name pairs). Restyle the `MODES` tab row into a Fluent-style navigation affordance: a slide-out list at desktop widths, a compact dropdown at mobile widths, using a responsive CSS/conditional-render approach consistent with the existing Tailwind-style utility classes already used in this file. No changes to the `activeMode`/`setActiveMode`/`currentTheme`/`setTheme` prop contract. [WRK-1978:IFC-002] [WRK-1978:IFC-005]
- **`src/components/StandardKeypad.jsx`** — Restructure the button grid markup: move `MC`/`MR`/`M+`/`M-` into a slim strip above the main 4-column digit/operator/equals grid (currently they occupy the first grid row as shown in lines 21-47 of the current file). Keep the same `onDigit`/`onOperator`/`onEquals`/`onClear`/`onBackspace`/`onNegate`/`onPercent`/`onMemory` prop contract and the same `handleBtn` sound-dispatch pattern. [WRK-1978:IFC-003]
- **`src/components/ScientificKeypad.jsx`** — No structural change required beyond restyling its own functions toolbar (`2nd`, parentheses, etc.) to match the new token set; it already wraps and reuses `StandardKeypad`, so the keypad-grid restructuring above is inherited automatically. [WRK-1978:IFC-004]
- **`src/components/Display.jsx`** — Adjust token usage, corner radius, and spacing classes only; the existing two-line expression/result DOM structure and `expression`/`result`/`angleUnit`/`setAngleUnit`/`memoryValue`/`onBackspace`/`onClear` prop contract are unchanged. [WRK-1978:IFC-006]
- **`src/components/UnitConverter.jsx`, `src/components/FinancialCalculator.jsx`, `src/components/FunctionGrapher.jsx`** — Restyle using the shared `.calc-btn`/`.glass-card`/`.calculator-display` primitives and the new theme tokens only; no DOM/prop-contract changes. [WRK-1978:IFC-007]
- **`src/App.jsx`** — No changes anticipated. If the navigation restructuring in `Header.jsx` requires new layout-only state (e.g., whether the nav panel is expanded), that state MUST be owned locally within `Header.jsx`, not lifted into `App.jsx`, to avoid touching the existing state/handler contract. [WRK-1978:IFC-008]
- **`src/utils/evaluator.js`, `src/utils/audio.js`** — No changes (per IFC-008).
- **`src/components/HistoryDrawer.jsx`, `src/components/KeyboardShortcutsModal.jsx`** — Restyled via shared tokens only, consistent with `IFC-007`'s treatment of non-primary-mode surfaces; no contract changes.

## Security, observability, migration, and rollback

The implementation MUST satisfy the following obligations, consistent with the approved design's security/observability/migration/rollback section: [WRK-1978:CON-002]

- **Security:** No new user-input handling paths are introduced; `evaluateExpression` in `src/utils/evaluator.js` remains the sole point where user-entered expressions are processed, and it MUST NOT be modified by this change. No new third-party dependencies that process user input may be added as part of this implementation.
- **Observability:** No telemetry exists in this repository and none is introduced by this change. The only observability signal is `npm run build` succeeding and manual visual review; `npm run lint` MAY continue to report its pre-existing, unrelated issues and MUST NOT be treated as a new regression unless the count of lint errors/warnings increases due to this change's own new code.
- **Migration:** Existing `apex_theme` localStorage values (`classic`, `midnight`, `cyberpunk`, `terminal`, `pastel`, `light`) MUST continue to resolve to their current visual themes unchanged; no migration or default-value change is applied to already-stored preferences.
- **Rollback:** Because `IFC-001`/`IFC-002` are additive (new theme blocks/entries) and `IFC-003`/`IFC-004`/`IFC-005` are scoped to specific component files, rollback is a revert of the changed hunks in `src/index.css`, `src/components/Header.jsx`, `src/components/StandardKeypad.jsx`, and `src/components/Display.jsx` — no data migration or backfill is required for rollback since no persisted-data format changes.

## Test specification

The repository has no existing automated test runner or test files (confirmed by the repository testing view: no test framework configuration was discovered). Consistent with that baseline, verification for this change is manual and build-based rather than unit/integration-test based; each clause below maps to a specific manual check or the existing build command.

| Clause | Verification | Planned path |
|---|---|---|
| `WRK-1978:AC-001` | Manual visual review: Standard and Scientific modes rendered in both `win11-light` and `win11-dark` themes, compared against Windows 11 Calculator's published layout/button grid/spacing | `src/components/StandardKeypad.jsx`, `src/components/ScientificKeypad.jsx`, `src/components/Header.jsx`, `src/index.css` |
| `WRK-1978:AC-002` | Manual visual review: Unit Converter, Financial Calculator, and Function Grapher modes rendered in both new themes, confirming consistent token usage (colors/shapes/typography/elevation) with Standard/Scientific | `src/components/UnitConverter.jsx`, `src/components/FinancialCalculator.jsx`, `src/components/FunctionGrapher.jsx` |
| `WRK-1978:AC-003` | Manual functional regression: exercise digit entry, all operators, equals, memory (`MC`/`MR`/`M+`/`M-`), backspace/clear, history add/select/clear, sound toggle, and keyboard shortcuts across all 5 modes and all 8 themes (6 existing + 2 new) | `src/App.jsx` interaction paths; no code changes expected here |
| `WRK-1978:AC-004` | Manual responsive check: resize/emulate viewport from mobile to desktop widths, confirming keypad grid and navigation panel/dropdown remain usable at each breakpoint | `src/components/Header.jsx`, `src/components/StandardKeypad.jsx`, `src/index.css` |
| `WRK-1978:AC-005` | Run `npm run build` after implementation and confirm it exits successfully with no new errors | repository root, `package.json` `build` script |

**Not run / out of scope for this test specification:** unit tests for `evaluateExpression`/`formatNumber` and automated visual regression snapshots — neither exists in the repository today and adding them is not required by the approved requirements or design for this change.

<!-- approved source inputs:start -->

# Approved phase inputs

## Approved phase input: requirements

<!-- source=artifacts/requirements/requirements.md sha256=ab21c30d64ab5306d05a03ce32f81c0ff55a74e9e5b0ca2dba010dc6df5b883b status=captured -->

<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "WRK-1978",
  "workType": "feature",
  "phase": "requirements",
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
      "filename": "requirements.md",
      "mediaType": "text/markdown",
      "sha256": "ea8891bbd8b3f56b1f0457be53ddfa81c86ef82830ade12929eac4b3f1a369df",
      "bytes": 14820
    },
    "generation": 1,
    "publishedAt": "2026-08-10T23:57:19.372Z"
  },
  "sourceCommit": "b3bb251388223ee58b55dd016a0115fb119db5c1",
  "generationCommit": "22a0caa72e70c120ba595ab27003ebb18ed02d8d",
  "publicationCommit": "22a0caa72e70c120ba595ab27003ebb18ed02d8d",
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
  "approvals": [
    {
      "decision": "approved",
      "phase": "requirements",
      "at": "2026-08-11T00:05:43.161Z",
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
          "path": "singularity/work-items/WRK-1978/artifacts/requirements/requirements.md",
          "sha256": "b125d1e96e5608ceed4e08d6955f216f8137be78046950380356578523ae479b"
        }
      ],
      "reviewPacketSha256": "1ec532b617950eeac18211c4f4a9b87e2040e2b0f5f90c76efef0aec62e3146e",
      "actionContext": {
        "phase": "requirements",
        "label": "Requirements",
        "generation": 1,
        "submittedAt": "2026-08-10T23:58:53.432Z",
        "artifacts": [
          {
            "path": "singularity/work-items/WRK-1978/artifacts/requirements/requirements.md",
            "sha256": "b125d1e96e5608ceed4e08d6955f216f8137be78046950380356578523ae479b"
          }
        ],
        "reviewPacketSha256": "1ec532b617950eeac18211c4f4a9b87e2040e2b0f5f90c76efef0aec62e3146e",
        "submittedSourceCommit": "22a0caa72e70c120ba595ab27003ebb18ed02d8d",
        "planId": "f959e3daf28f11e40e2f721a"
      },
      "selfApproval": true
    }
  ],
  "selfApproval": true,
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

<!-- approved source inputs:start -->

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

<!-- approved source inputs:end -->

## Approved phase input: design

<!-- source=artifacts/design/design.md sha256=25a3ca14e26cc3ab5c1678a98defd986491a1b1b2ba7b873c5aeb28f426a6ac0 status=captured -->

<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "WRK-1978",
  "workType": "feature",
  "phase": "design",
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
      "filename": "design.md",
      "mediaType": "text/markdown",
      "sha256": "867b48ea7f4a91dda28f6482c384bafda2d31fd1a9f754391871068147fc64d4",
      "bytes": 29795
    },
    "generation": 1,
    "publishedAt": "2026-08-11T00:11:09.908Z"
  },
  "sourceCommit": "55ab574d7d2e75d1ea40824b8cfaecb17a688a42",
  "generationCommit": "776db5e72a21e9cf00295773676e4e474f1588ab",
  "publicationCommit": "776db5e72a21e9cf00295773676e4e474f1588ab",
  "configSha256": "c71e8d4583a4303c75561c44902b837971681f740cc7025f9b55cb997589424f",
  "sourceSha256": "4e44848b5ace267968bed14bdb47c521769134cacd3d29c03fb325271f373786",
  "template": {
    "path": "singularity/templates/feature/design.md",
    "sha256": "8b7455f464a7025efa92942c272a04e3c0a3ab2a4d3eb438703cc14e230bc856"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/WRK-1978/context/inputs-design-gen1.json",
    "sha256": "6440f9b71115fe490601c1a314db9d6685df86ec63b83b6abe78763a9497c56c",
    "renderedSha256": "8c269b41ed26d1fb882c09faf111aff71c60019372e3e00f174e7d42921510b4",
    "mode": "enforce"
  },
  "designSources": {
    "sets": [],
    "approved": null
  },
  "remoteAgent": null,
  "clarification": null,
  "telemetry": [
    {
      "generation": 1,
      "path": "singularity/work-items/WRK-1978/telemetry/design-gen1.json",
      "sha256": "1034558f141f5c5f034e50383dcddc8bfbd560d6d623f686fd3864a1a0ef22d7",
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
      "startedAt": "2026-08-11T00:11:09.908Z",
      "completedAt": "2026-08-11T00:11:09.908Z",
      "agent": "product-owner",
      "generation": 1
    }
  ],
  "sequenceOverrides": [],
  "approvals": [
    {
      "decision": "approved",
      "phase": "design",
      "at": "2026-08-11T00:15:56.434Z",
      "actor": {
        "name": "Ashok Raj",
        "email": "88361104+ashokraj2011@users.noreply.github.com",
        "login": "ashokraj2011"
      },
      "agent": "architect",
      "authorityGroup": "architecture-reviewers",
      "identityAssurance": "configured-local",
      "channel": "copilot-selection-receipt",
      "generation": 1,
      "artifactSha256": [
        {
          "path": "singularity/work-items/WRK-1978/artifacts/design/design.md",
          "sha256": "ad96df801a5b9334449c06c0ca473e2c8062433409114d56915c603bcab5fe75"
        }
      ],
      "reviewPacketSha256": "f3eaeef8a26fe7b6cc9859627f9084be3f9a1a12adf5362f42d408a3348c88b8",
      "actionContext": {
        "phase": "design",
        "label": "Architecture and design",
        "generation": 1,
        "submittedAt": "2026-08-11T00:12:55.554Z",
        "artifacts": [
          {
            "path": "singularity/work-items/WRK-1978/artifacts/design/design.md",
            "sha256": "ad96df801a5b9334449c06c0ca473e2c8062433409114d56915c603bcab5fe75"
          }
        ],
        "reviewPacketSha256": "f3eaeef8a26fe7b6cc9859627f9084be3f9a1a12adf5362f42d408a3348c88b8",
        "submittedSourceCommit": "776db5e72a21e9cf00295773676e4e474f1588ab",
        "planId": "806976bb4fb625b88f0e16d4"
      },
      "selfApproval": true
    }
  ],
  "selfApproval": true,
  "conformanceTree": null
}
-->

# WRK-1978 — Architecture and Design

## Context and constraints

The approved requirements call for restyling the app to look like Microsoft's Windows 11 Calculator (Fluent Design), applied literally to Standard/Scientific layout and button grid, applied via shared tokens to Unit Converter/Financial Calculator/Function Grapher, in both light and dark themes, fully responsive at desktop and mobile widths, with no change to calculation semantics or existing features. [WRK-1978:REQ-001] [WRK-1978:REQ-002] [WRK-1978:AC-001] [WRK-1978:AC-002] [WRK-1978:AC-003] [WRK-1978:AC-004] [WRK-1978:AC-005]

Current architecture (observed in `src/App.jsx`, `src/components/`, `src/index.css`):
- The app is a single-page, client-only React app with no backend/API (per the repository architecture view). `App.jsx` owns all calculator state (expression, result, history, memory, angle unit, theme, sound) and mode routing (`activeMode`), and passes handlers down as props to `Header`, `Display`, `StandardKeypad`, `ScientificKeypad`, `UnitConverter`, `FinancialCalculator`, `FunctionGrapher`, `HistoryDrawer`, and `KeyboardShortcutsModal`.
- Theming is already implemented as a token-swap mechanism: `App.jsx` sets `document.documentElement.setAttribute('data-theme', theme)` and persists the choice to `localStorage` (`apex_theme`). `src/index.css` defines six themes (`classic` default, `midnight`, `cyberpunk`, `terminal`, `pastel`, `light`) as `[data-theme='...']` blocks of CSS custom properties (`--bg-primary`, `--card-bg`, `--card-border`, `--text-main/muted/accent`, `--display-bg/border`, `--btn-num-*`, `--btn-op-*`, `--btn-func-*`, `--btn-eq-*`, `--active-indicator`, `--shadow-main`, `--glass-blur`). Components consume these exclusively via `var(--token)` in Tailwind-style utility classes — there are no hard-coded per-component colors for the themeable surfaces.
- `Header.jsx` maintains its own `THEMES` array (id/name pairs shown in a `<select>`) and a `MODES` array (id/name/icon) rendered as tab buttons; adding a new theme is additive — one new token block in `index.css` plus one new entry in `THEMES`.
- Shared visual primitives: `.calc-btn` (button base: border, radius, shadow, hover/active transforms), `.glass-card` (outer container), `.calculator-display` (display panel chrome) are defined once in `index.css` and reused across modes.
- `src/utils/evaluator.js` is fully isolated from styling and is out of scope; the security view confirms the only trust boundary (user expression input → evaluator) is unaffected by this change.
- Constraint for this phase: `writeScope` for `design` is `artifact-only` — this document defines architecture and structure; no source code is changed here. Detailed component-level specifics are deferred to `implementation-spec`.

## Proposed design

**Token layer (additive, all modes):** Add two new theme entries, `win11-light` and `win11-dark`, as new `[data-theme='win11-light']` / `[data-theme='win11-dark']` blocks in `src/index.css`, following the exact same custom-property contract as the existing six themes, plus two new entries in `Header.jsx`'s `THEMES` array. This requires zero changes to `App.jsx` state logic, the existing theme-switch mechanism, or `localStorage` persistence — it is a pure extension of the existing pattern. New Fluent-specific values needed within that contract: Windows 11 accent-blue based `--btn-op-bg`/`--active-indicator`, smaller corner radii for controls (Windows 11 uses ~4–8px on buttons vs. the current 12px `.calc-btn` and 28px `.glass-card`), a flatter `--shadow-main` (Windows 11 elevation is subtle, not the current warm drop-shadow), and a Segoe UI Variable-style font stack fallback (`"Segoe UI Variable", "Segoe UI", system-ui, sans-serif` — an approximation, since the actual Microsoft font cannot be bundled; this must be documented as a substitution, not a literal asset match).

**Standard and Scientific modes (literal recreation, `StandardKeypad.jsx` / `ScientificKeypad.jsx` / `Header.jsx` / `Display.jsx`):**
- Button grid: restructure the 4-column grid so memory keys (`MC`/`MR`/`M+`/`M-`) sit in a slim horizontal strip docked above the main keypad (matching Windows 11 Calculator's memory row placement) rather than occupying the first grid row as a peer of digit/operator keys. The digit/operator/equals grid itself becomes a uniform 4-column grid of squarer, evenly sized tiles with a single accent-colored equals key, mirroring Windows 11's button proportions and outline style (thin border, no heavy gradients).
- Navigation: Windows 11 Calculator itself uses a hamburger-triggered `NavigationView` panel to switch modes rather than a tab strip. To reconcile that pattern with this app's existing five-mode architecture (which has no Windows 11 equivalent), `Header.jsx`'s mode tabs are restyled as a Fluent-style navigation affordance: a slide-out panel/list at desktop widths and a compact dropdown at narrow/mobile widths, satisfying the full-responsiveness requirement. [WRK-1978:AC-004]
- `Display.jsx` keeps its existing two-line structure (small expression line, large bold result line) since it already matches Windows 11's display layout pattern; changes here are limited to spacing, corner radius, and token values, not DOM restructuring.

**Unit Converter, Financial Calculator, Function Grapher (`UnitConverter.jsx`, `FinancialCalculator.jsx`, `FunctionGrapher.jsx`):** These have no native Windows 11 Calculator equivalent, so per the approved acceptance criteria they inherit the same Fluent tokens and shared primitives (`.calc-btn`, `.glass-card`, `.calculator-display`) for visual consistency, without a mandated layout restructuring. [WRK-1978:AC-002]

**State and contracts:** No changes to `App.jsx` handler contracts (`onDigit`, `onOperator`, `onEquals`, `onMemory`, `onNegate`, `onPercent`, `onBackspace`, `onClear`) or to `evaluateExpression`/`formatNumber` in `evaluator.js`. Any new presentational props needed to support the restructured keypad/navigation layout (e.g., a layout-variant flag) are additive and scoped for `implementation-spec`, not finalized structurally in this document.

**Theme selection UX:** `win11-light` and `win11-dark` become two additional selectable entries in the existing theme dropdown (not a separate light/dark toggle control), keeping the interaction model consistent with the app's current single-dropdown theme picker.

## Security, observability, migration, and rollback

**Security:** No security-relevant boundary changes. This is a presentation-layer-only change; the sole trust boundary identified in the repository's security view (browser-side user expression input into `evaluateExpression`) is untouched, and no new external dependencies process user input as part of this change.

**Observability:** The repository has no existing telemetry/analytics instrumentation; this phase does not introduce any. Verification remains manual visual review across all five modes and both new themes, plus a successful `npm run build` per acceptance criteria. [WRK-1978:AC-005]

**Migration/compatibility:** Additive only — existing `localStorage` theme values (`classic`, `midnight`, `cyberpunk`, `terminal`, `pastel`, `light`) remain valid and unaffected; users keep their current theme unless they explicitly select `win11-light` or `win11-dark`. No stored-data migration is required. No existing theme keys, CSS custom-property names, or component props are removed or renamed.

**Rollback:** Because the change adds new theme blocks/entries and a keypad/navigation layout variant rather than replacing existing ones, rollback is a straightforward revert of the new CSS theme blocks, the two new `THEMES` entries, and any keypad/navigation layout conditional — no persisted-data rollback is needed since existing theme values remain valid throughout.

## Alternatives and decisions

**Alternative A — Token-only reskin** (change only CSS custom-property values within the current DOM structure, no keypad/navigation restructuring): Rejected as the sole approach because the approved acceptance criteria explicitly require a literal recreation of Windows 11 Calculator's layout and button grid for Standard/Scientific modes, not just a color/typography pass. [WRK-1978:AC-001]

**Alternative B — Replace the existing multi-theme system with a single hardcoded Windows 11 style**, removing `classic`/`midnight`/`cyberpunk`/`terminal`/`pastel`/`light`: Rejected because the approved requirements do not ask for removal of existing themes, and replacing the theme system outright would be a larger, less reversible change than adding new theme entries alongside the existing ones, increasing regression risk without a corresponding requirement.

**Decision:** Add `win11-light`/`win11-dark` as new, additive entries in the existing theme-token system, and restructure `StandardKeypad`/`ScientificKeypad`/`Header` navigation to mirror Windows 11 Calculator's button grid and navigation pattern, while restyling Unit Converter/Financial Calculator/Function Grapher via shared tokens only (matching the more relaxed fidelity bar the requirements set for those modes). This keeps the change additive, reversible, and consistent with the existing architecture, and is traceable to [WRK-1978:REQ-001], [WRK-1978:REQ-002], and [WRK-1978:AC-001] through [WRK-1978:AC-005].

**Deferred to implementation-spec (not blocking this phase):** exact grid line counts and pixel/token values for the new themes, whether the memory row renders as an inline strip or a slide-out panel, and the precise breakpoints for the desktop navigation panel vs. mobile dropdown.

<!-- approved source inputs:start -->

# Approved phase inputs

## Approved phase input: requirements

<!-- source=artifacts/requirements/requirements.md sha256=ab21c30d64ab5306d05a03ce32f81c0ff55a74e9e5b0ca2dba010dc6df5b883b status=captured -->

<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "WRK-1978",
  "workType": "feature",
  "phase": "requirements",
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
      "filename": "requirements.md",
      "mediaType": "text/markdown",
      "sha256": "ea8891bbd8b3f56b1f0457be53ddfa81c86ef82830ade12929eac4b3f1a369df",
      "bytes": 14820
    },
    "generation": 1,
    "publishedAt": "2026-08-10T23:57:19.372Z"
  },
  "sourceCommit": "b3bb251388223ee58b55dd016a0115fb119db5c1",
  "generationCommit": "22a0caa72e70c120ba595ab27003ebb18ed02d8d",
  "publicationCommit": "22a0caa72e70c120ba595ab27003ebb18ed02d8d",
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
  "approvals": [
    {
      "decision": "approved",
      "phase": "requirements",
      "at": "2026-08-11T00:05:43.161Z",
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
          "path": "singularity/work-items/WRK-1978/artifacts/requirements/requirements.md",
          "sha256": "b125d1e96e5608ceed4e08d6955f216f8137be78046950380356578523ae479b"
        }
      ],
      "reviewPacketSha256": "1ec532b617950eeac18211c4f4a9b87e2040e2b0f5f90c76efef0aec62e3146e",
      "actionContext": {
        "phase": "requirements",
        "label": "Requirements",
        "generation": 1,
        "submittedAt": "2026-08-10T23:58:53.432Z",
        "artifacts": [
          {
            "path": "singularity/work-items/WRK-1978/artifacts/requirements/requirements.md",
            "sha256": "b125d1e96e5608ceed4e08d6955f216f8137be78046950380356578523ae479b"
          }
        ],
        "reviewPacketSha256": "1ec532b617950eeac18211c4f4a9b87e2040e2b0f5f90c76efef0aec62e3146e",
        "submittedSourceCommit": "22a0caa72e70c120ba595ab27003ebb18ed02d8d",
        "planId": "f959e3daf28f11e40e2f721a"
      },
      "selfApproval": true
    }
  ],
  "selfApproval": true,
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

<!-- approved source inputs:start -->

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

<!-- approved source inputs:end -->

<!-- approved source inputs:end -->

<!-- approved source inputs:end -->

<!-- approved source inputs:end -->

<!-- singularity-flow:inputs:end -->
