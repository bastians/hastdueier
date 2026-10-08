---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface: Startseite (index.html), branch schlicht

Mode: Experience. The visitor is inside the gag; the page is the work.

Audience/job: phone visitor from a shared link, seconds-long visit; gets a verdict, laughs, shares or redraws.
Action: Teilen (Web Share API, copy-link fallback) and Nochmal (redraw without reload).
Shared link: `?a=<index>` opens that exact verdict, marked "Antwort von deinem Kumpel", with "Und du?" as the primary action.
Content: the four answers in assets/js/answers.js, wording verbatim; clips stay third-party embeds. Draw is 50/50 yes/no.
History: Der Eierkarton rejected; Die Titelseite lives on branch redesign-titelseite; Der Zehner on alternative-welt. This branch is the clean third option: the category standard from the shape round ("The one-question oracle site, played straight"), chosen by the user on 2026-10-08. Craft bar named by the user: Swiss poster style and Apple product pages.
Open: Matomo URL/site ID, hosting target, Impressum/Datenschutz.

## Direction contract

THESIS: The one-question oracle played straight: a small question, one enormous word, the clip, two actions. The only idea is typographic: JA! is set at the heaviest weight, NEIN! at the thinnest, so the word itself either has Eier or has none. Refuses metaphor props, costumes and decoration.

OWN-WORLD: White page (#ffffff), black ink (#0a0a0a), one Swiss red (#e30613) for a 6px top rule and the verdict's exclamation mark only. Hanken Grotesk variable (wght 100-900) is the only face. Strict 12-column grid with 48px desktop margins, 20px on phones; square corners; no shadows, no textures, no gradients.

STORY: The visitor reads HAST DU EIER?, watches a thin "Ja? Nein?" breathe for 1.4 s, then sees JA! inflate to weight 900 or NEIN! deflate to weight 100, reads the line, watches the clip, shares or draws again.

FIRST VIEWPORT: Phone: red top rule, h1 "Hast du Eier?" with the tagline beside or under it, then the verdict filling the width, the dek beneath; clip starts at the fold. Desktop: top row h1 left, tagline/friend note right; the verdict centred on the grid axis at up to 50svh (the suspense "Ja? Nein?" in two lines no larger than it); below on the grid: dek and lede (cols 1-4), actions (cols 5-8, on the verdict's axis), clip (cols 9-12), all above the fold at 1440x900. On phones the verdict hangs flush-left with its first stem optically on the margin at every weight.

FORM: The category standard, played straight (standing exit / canon card from shape round 1, seed b608e7a6), chosen by the user for this branch. Signature interaction: the weight morph, JA! inflating from 100 to 900, NEIN! deflating from 900 to 100, on Hanken Grotesk's variable weight axis. Motion grammar: one smooth ease-out per state, nothing else moves; reduced motion jumps to the final weight.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
