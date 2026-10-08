---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface: Startseite (index.html), branch alternative-welt

Mode: Experience. The visitor is inside the gag; the page is the work.

Audience/job: phone visitor from a shared link, seconds-long visit; gets a verdict, laughs, shares or redraws.
Action: Teilen (Web Share API, copy-link fallback) and Nochmal (redraw without reload, next "Versuch").
Shared link: `?a=<index>` opens that exact verdict with the sign "Dein Kumpel stand schon oben" and "Und du?" as the primary action.
Content: the four answers in assets/js/answers.js, wording verbatim; clips stay third-party embeds. Draw is 50/50 yes/no.
History: Der Eierkarton was rejected (too literal, dull/grey). Die Titelseite is the main design on branch redesign-titelseite; this branch is the alternative world. Avoid tabloid conventions, literal eggs, crude innuendo and muted grey.
Open: Matomo URL/site ID, hosting target, Impressum/Datenschutz.

## Direction contract

THESIS: "Eier haben" is the 10-metre tower at the Freibad, the Mutprobe every German kid knows. JA! means you jumped and it splashes into the pool; NEIN! means you climbed back down. Refuses the centred meme card, the tabloid, and any egg imagery.

OWN-WORLD: Freibad on a sunny day. Deep tile blue (#0a5fa8) owns the tower; turquoise water over a white-grouted tile grid with drifting caustic light owns the pool; white enamel signs with inset blue rule and screw heads; blue square DIN info signs with white pictograms; safety red only on EIER? and alerts; sun yellow for the friend sign. Barlow family (DIN-like signage grotesk): Condensed Black for verdict and question, Bold/Medium for text. Sign-plate corners (10px), no glass, no gradients as decoration.

STORY: The visitor stands on the tower, reads HAST DU EIER? on the sign, counts down 3-2-1 in the water, then sees JA! fall in and splash, or NEIN! climb down rung by rung; reads the line, watches the clip on the pool edge, shares or tries again.

FIRST VIEWPORT: Phone: deep-blue tower band with a painted white "10 m" and "Sprungturm · Versuch n"; the enamel sign with HAST DU EIER?; below, the turquoise pool fills the rest of the screen and holds the countdown, then the verdict at full width with its pictogram sign in the corner; the white-tiled pool edge (dek, clip, actions) starts at the fold. Desktop: tower as a full-height left column (sign, 10 m, ladder rungs), pool and pool edge on the right; verdict, dek and actions visible without scrolling.

FORM: Der Zehner, IMPECCABLE'S PICK (position 1 of the grounded list; roll assigned position 6, Die Böllerpackung), seed key f8063c9f. Signature interaction: JA! drops with gravity, hits the water, splash rings spread and the letters wobble underwater (SVG displacement) until the surface settles; NEIN! descends in hard ladder steps and the water stays still. Motion grammar: gravity in, ripples out, stepped descents; reduced motion gets instant states with the countdown kept.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
