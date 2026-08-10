> **Grounding** · calc @ `e9d82bcdfd4363c98e447b92108203f18828d6ff` · view: `core` · tier: `brief`
> **Generated** 09 August 2026 (2026-08-09T23:57:03Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.

## Summary {#core.brief}

This repository is a React + Vite calculator web app with a single-page shell in `src/App.jsx` and a shared UI system in `src/components/` and `src/index.css`. The product exposes standard arithmetic, scientific functions, unit conversion, financial calculators, and a grapher mode through one client-side experience.

The main entry point is `src/main.jsx`, which mounts the app into the browser. The most important implementation module is `src/utils/evaluator.js`, which sanitizes expressions and routes calculations through `mathjs`. The default visual style is already a classic desk-calculator look, driven by CSS variables in `src/index.css`.

The standard validation command is `npm run build`; the app also has `npm run lint`, though lint currently reports many pre-existing issues in the source tree. The largest risk is that UI styling and calculator logic are spread across multiple components, so a small visual change can have broad effects. The working tree is not clean because tracked workflow artifacts have been deleted.
