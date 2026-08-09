> **Grounding** · calc @ `8d115da4dc8005b437ccad387db0721b2ab06bd9` · view: `development` · tier: `brief`
> **Generated** 9 August 2026 (2026-08-09T18:59:39Z) · depth: `standard` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.
This view is the implementation guide for changing the calculator app without guessing. The most important files are `src/index.css` for the shared visual system, `src/App.jsx` for state and keyboard flows, and the display/keypad components for the user-facing surfaces. The most common mistake is editing the wrong layer: visual work should start with CSS variables and components, not with calculator logic. The best validation steps are `npm run build` and, for UI changes, manual browser verification because there is no automated test harness.
