> **Grounding** · calc @ `6bbcaf1739e310a06af5eb0a9643a54c511b70f8` · view: `business` · tier: `brief`
> **Generated** 09 August 2026 (2026-08-09T18:15:52Z) · depth: `quick` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.


## Summary {#biz.summary}

This view covers the calculator app’s product-facing capabilities and business implications. It is relevant when deciding how a UI change will affect user trust, usability, and the shared experience across standard, scientific, conversion, financial, and grapher modes. The most important paths are `src/App.jsx`, `src/components/Display.jsx`, `src/components/StandardKeypad.jsx`, and `src/index.css`. The most common mistake is to treat a visual change as isolated styling only; this app’s look is shared by multiple calculator modes and is tied to the same state model and themes.
