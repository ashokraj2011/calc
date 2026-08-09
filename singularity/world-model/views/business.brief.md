> **Grounding** · calc @ `8d115da4dc8005b437ccad387db0721b2ab06bd9` · view: `business` · tier: `brief`
> **Generated** 9 August 2026 (2026-08-09T18:59:39Z) · depth: `standard` · builder `2.0`
> **Authoritative for:** file locations, entry points, commands, structural relationships as of the commit above.
> **Not authoritative for:** current file contents. If this document conflicts with code you have read, trust the code and say so explicitly in your output.
> **Unknowns are marked.** Do not resolve them by inference. If the repository has changed since the date above, treat locations as hints, not facts.
This view describes the calculator app as a user-facing product: what it can do, which workflows matter, and where a UI change would affect the experience. The key capabilities are standard arithmetic, scientific math, unit conversion, financial calculations, and function graphing. The most important workflows are entering expressions, evaluating them, checking history, and switching modes. The most common mistake is assuming a visual change only affects the keypad; in this codebase the shared styling system and the shell chrome also shape the experience.
