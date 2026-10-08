---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface: Startseite (index.html)

Mode: Experience. The visitor is inside the gag; the front page is the work.

Audience/job: phone visitor from a shared link, seconds-long visit; gets a verdict, laughs, shares or redraws.
Action: Teilen (Web Share API, copy-link fallback) and Nochmal (redraw without reload, next "Ausgabe").
Shared link: `?a=<index>` opens that exact verdict with a "Die Ausgabe von deinem Kumpel" banderole and "Und du?" as the primary action.
Content: the four answers in assets/js/answers.js, wording verbatim; clips stay third-party embeds. Draw is 50/50 yes/no.
History: the first direction (Der Eierkarton) was built and rejected by the user on 2026-10-08 as too literal a pun and too dull/grey. Do not return to egg-object or muted-grey worlds.
Open: Matomo URL/site ID, hosting target, Impressum/Datenschutz.

## Direction contract

THESIS: Your verdict is tomorrow's tabloid front page: JA! or NEIN! as a headline taller than the paper. Refuses the centred meme page and any literal egg imagery.

OWN-WORLD: German Boulevard front page with its own invented masthead (EIER-ZEITUNG, never a real paper's name or logo). Tabloid red owns the masthead and the desktop table; cool newsprint white (#eff1f0, neutral grain); black ultra-condensed headline grotesk (Archivo at its narrowest, heaviest), bold sans deks, a serif for running text and captions; yellow marker highlight; hard square edges, no rounded corners; clips shown clean, no screen overlay. JA! prints red on paper; NEIN! prints white on a black Trauerrand band.

STORY: Visitor sees the paper ask HAST DU EIER?, an EILMELDUNG ticker runs, the verdict headline slams onto the page, the dek, photo and actions print in, then they share the edition or print the next one.

FIRST VIEWPORT: Phone: red masthead strip with date and Ausgabe number; HAST DU EIER? as the h1 at large condensed scale; the ticker band during suspense, then JA!/NEIN! filling the width; the verdict line as the dek beneath; photo starts at the fold. Desktop: paper sheet centred on red with the red masthead inset inside it; verdict-first reading order puts the headline and dek/actions in the left column and the photo on the right (for JA! the photo runs beside the headline and fills the column; NEIN! spans the full sheet on its black band, photo right below). During the ticker the headline slot shows the red teaser JA? NEIN?, which the slam replaces. The friend banderole is a Störer stamped over the photo's top-left corner.

FORM: Die Titelseite, IMPECCABLE'S PICK (position 1 of the grounded list) chosen on re-roll round 1, seed key b608e7a6. Signature interaction: the headline slam (press impact with a short paper jolt) after the EILMELDUNG ticker; Nochmal prints the next Ausgabe (edition number counts up). Motion grammar: hard, fast press hits and top-to-bottom print wipes; reduced motion gets instant states.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
