# calc-app — deterministic light world model

> Generated 27 August 2026 (2026-08-27T06:40:34.401Z) · source `cb92f58b0eb3e508f5f381f8984e1c8592becde9` · branch `CFA-STORY`

## Repository shape

- Files indexed: 32
- Source-like files: 20
- Test-like files: 4
- Build manifests: 1
- Deployment/operations files: 0
- Languages: JavaScript (20)
- Top-level areas: src (23), (root) (7), public (2)

## Facts {#core.facts}

<!-- singularity-flow:repository-facts:start -->
```yaml
# Derived from the repository, not inferred. Every path and line is checkable.
files: 32
languages_scanned: 20
frameworks: [React, Vite, Vitest]
commands:
  - { run: "npm run dev", at: "package.json:7" }
  - { run: "npm run build", at: "package.json:8" }
  - { run: "npm run lint", at: "package.json:9" }
  - { run: "npm run preview", at: "package.json:10" }
  - { run: "npm run test", at: "package.json:11" }
# What the rest of the repository depends on. A count, not an impression.
most_depended_on:
  - { path: src/utils/audio.js, imported_by: 10 }
  - { path: src/utils/evaluator.js, imported_by: 4 }
  - { path: src/App.jsx, imported_by: 2 }
  - { path: src/components/StandardKeypad.jsx, imported_by: 2 }
  - { path: src/components/CFAStudyToolkit.jsx, imported_by: 1 }
  - { path: src/components/Display.jsx, imported_by: 1 }
  - { path: src/components/FinancialCalculator.jsx, imported_by: 1 }
  - { path: src/components/FunctionGrapher.jsx, imported_by: 1 }
# Commits touching each file in the last year, from Git history.
most_changed:
  - { path: src/components/Header.jsx, commits: 4 }
  - { path: README.md, commits: 3 }
  - { path: src/App.jsx, commits: 3 }
  - { path: src/components/Display.jsx, commits: 3 }
  - { path: src/index.css, commits: 3 }
  - { path: package-lock.json, commits: 2 }
  - { path: package.json, commits: 2 }
  - { path: src/App.test.jsx, commits: 2 }
# 19 exported top-level declarations; the most-depended-on files' are listed.
key_symbols:
  - { name: App, kind: function, at: "src/App.jsx:15" }
  - { name: CFAStudyToolkit, kind: binding, at: "src/components/CFAStudyToolkit.jsx:149" }
  - { name: Display, kind: binding, at: "src/components/Display.jsx:5" }
  - { name: StandardKeypad, kind: binding, at: "src/components/StandardKeypad.jsx:5" }
  - { name: playSound, kind: binding, at: "src/utils/audio.js:18" }
  - { name: evaluateExpression, kind: binding, at: "src/utils/evaluator.js:4" }
  - { name: formatNumber, kind: binding, at: "src/utils/evaluator.js:57" }
  - { name: UNIT_TYPES, kind: binding, at: "src/utils/evaluator.js:75" }
  - { name: convertUnits, kind: binding, at: "src/utils/evaluator.js:140" }
  - { name: calculateEMI, kind: binding, at: "src/utils/evaluator.js:161" }
  - { name: calculateCompoundInterest, kind: binding, at: "src/utils/evaluator.js:181" }
  - { name: calculateTip, kind: binding, at: "src/utils/evaluator.js:200" }
tests: 4
```
<!-- singularity-flow:repository-facts:end -->

## Likely entry points

- `package.json`
- `src/App.jsx`
- `src/main.jsx`

## Observed commands

- `npm run build`
- `npm run dev`
- `npm run lint`
- `npm run preview`
- `npm run test`

## Grounding boundary

This model was generated locally without Copilot or another AI model and consumed **zero model tokens**. It intentionally records only deterministic repository metadata. It does not claim runtime behavior, business meaning, ownership, security, test coverage, or architectural intent. Deeper phases can replace it with a quick, standard, or deep model when semantic analysis is worth the token cost.
