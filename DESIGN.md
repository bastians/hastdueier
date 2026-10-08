---
name: Hast du Eier?
description: Your verdict as tomorrow's tabloid front page of the EIER-ZEITUNG.
colors:
  tabloid-red: "#d8000f"
  tabloid-red-deep: "#a3000b"
  press-black: "#111111"
  newsprint: "#f4f6f5"
  caption-ink: "#3b3833"
  marker-yellow: "#ffe100"
  white: "#ffffff"
typography:
  masthead:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 11.4vw, 5.5rem)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 100"
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "min(calc(var(--measure) / (var(--len) * var(--fit))), 64svh)"
    fontWeight: 900
    lineHeight: 0.8
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 62"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3.25rem, 17vw, 8.5rem)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 62"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.625rem, 7.4vw, 2.75rem)"
    fontWeight: 900
    lineHeight: 1.02
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 85"
  ticker:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.125rem, 4.6vw, 1.75rem)"
    fontWeight: 800
    letterSpacing: "0.02em"
    fontVariation: "'wdth' 85"
  body:
    fontFamily: "Zeitung Serif, Georgia, serif"
    fontSize: "clamp(1.1875rem, 4.6vw, 1.4375rem)"
    fontWeight: 600
    lineHeight: 1.35
  caption:
    fontFamily: "Zeitung Serif, Georgia, serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.35
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 900
    letterSpacing: "0.04em"
    fontVariation: "'wdth' 85"
  meta:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    letterSpacing: "0.04em"
    fontVariation: "'wdth' 100"
  headline-wide:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(5rem, 9vw, 8.5rem)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 62"
  base:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.45
  badge:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 900
    letterSpacing: "0.04em"
    fontVariation: "'wdth' 85"
  notice:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 900
    lineHeight: 1.1
    fontVariation: "'wdth' 85"
rounded:
  none: "0px"
spacing:
  gutter: "16px"
  gutter-wide: "40px"
  stack: "18px"
  actions: "10px"
  column-gap: "40px"
components:
  masthead:
    backgroundColor: "{colors.tabloid-red}"
    textColor: "{colors.white}"
    typography: "{typography.masthead}"
    rounded: "{rounded.none}"
    padding: "14px 16px 10px"
  ticker:
    backgroundColor: "{colors.press-black}"
    textColor: "{colors.white}"
    typography: "{typography.ticker}"
    padding: "12px 0"
  headline-ja:
    textColor: "{colors.tabloid-red}"
    typography: "{typography.display}"
  headline-nein:
    backgroundColor: "{colors.press-black}"
    textColor: "{colors.white}"
    typography: "{typography.display}"
    padding: ".08em 16px .02em"
  question-marker:
    backgroundColor: "{colors.marker-yellow}"
    textColor: "{colors.press-black}"
    padding: "0 .06em"
  banderole:
    backgroundColor: "{colors.marker-yellow}"
    textColor: "{colors.press-black}"
    rounded: "{rounded.none}"
    padding: "8px 12px 7px"
  button-primary:
    backgroundColor: "{colors.tabloid-red}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: ".85em 1.3em"
    height: "58px"
  button-primary-hover:
    backgroundColor: "{colors.tabloid-red-deep}"
    textColor: "{colors.white}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.press-black}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: ".85em 1.3em"
    height: "58px"
  button-secondary-hover:
    backgroundColor: "{colors.press-black}"
    textColor: "{colors.white}"
  play-badge:
    backgroundColor: "{colors.tabloid-red}"
    textColor: "{colors.white}"
    padding: "12px 18px 12px 14px"
  play-badge-hover:
    backgroundColor: "{colors.press-black}"
    textColor: "{colors.white}"
  toast:
    textColor: "{colors.tabloid-red-deep}"
    typography: "{typography.label}"
---

# Design System: Hast du Eier?

## Overview

**Creative North Star: "Die Titelseite"**

Every verdict is printed as the front page of an invented German Boulevard paper, the EIER-ZEITUNG. The masthead and the desktop table are tabloid red. Black ultra-condensed capitals fill the sheet, and newsprint carries a fine neutral grain. The answer is one word, JA! or NEIN!, set as large as the column allows, so it reads as a headline taller than the paper. The page is loud, flat and printed: hard square edges, solid ink colours, a yellow highlighter, and a serif reserved for reporting. A mobile visit has the density of a real front page: masthead, question, verdict, dek, photo, actions. There is no chrome beyond that.

The paper owns the vocabulary and the motion. EILMELDUNG runs as a ticker while the answer is pending, the headline slams onto the sheet with a short paper jolt, and the rest prints in from top to bottom. NEIN! is not just red text in a different colour: it prints as a Trauerrand, white on a black band across the full sheet. A shared link adds a yellow Störer stamped over the photo.

Rejected and not to return: the earlier "Der Eierkarton" egg-carton world (too literal a pun, dull and grey). Also rejected: literal egg imagery, muted grey palettes, and the centred meme-page layout.

**Key Characteristics:**
- Three inks on newsprint: tabloid red, press black and marker yellow. White appears only reversed out of red or black.
- Archivo at its narrowest and heaviest (wdth 62, 900) for the question and the verdict. The headline size is computed to fill the measure.
- Zeitung Serif only for running text and captions.
- Zero radius everywhere. The only off-axis element is the Störer at -4deg.
- Hard, fast press hits and top-to-bottom print wipes. Reduced motion gets instant states.

## Colors

A three-ink tabloid palette on cool newsprint. Saturated red and pure black do the shouting, and yellow is used only as a highlighter.

### Primary
- **Tabloid Red** (`tabloid-red`): the paper's colour. It fills the masthead block, the desktop table behind the sheet, the JA! headline and the "Ja? Nein?" teaser, the primary button and the video play badge. It is also `theme-color`. On newsprint it reaches 4.7:1, so it carries only large display type and filled controls with white text (5.35:1).
- **Deep Tabloid Red** (`tabloid-red-deep`): the pressed or hover state of red controls and the colour of the toast confirmation line ("Link kopiert"), where small red text needs 7.2:1.

### Secondary
- **Marker Yellow** (`marker-yellow`): highlighter only. It marks the word "Eier?" in the question, fills the friend Störer, is the text-selection colour and the inset focus ring on the play badge.

### Neutral
- **Press Black** (`press-black`): all body ink, the ticker band, the NEIN! Trauerrand, button outlines, rules under the caption and above the desktop text column, and the focus outline.
- **Newsprint** (`newsprint`): the sheet. It always carries the grain overlay (`--tex-grain`, fractal noise in a cool grey at about 13% alpha), which brings it to about #eff1f0 on screen. Never show newsprint without the grain.
- **Caption Ink** (`caption-ink`): a softer black for serif photo credits only.
- **White** (`white`): reversed type on red (masthead, primary button, play badge) and on black (ticker, Trauerrand). It is never a surface.

### Named Rules
**The Red Owns The Paper Rule.** Red is the masthead, the table and the good news. Use it as a flat solid fill or as display ink, never as a tint, gradient or body text colour.

**The Highlighter Rule.** Yellow sits behind black text as a marker or a stamped Störer. It is never text on paper and never a background for a whole region.

**The Trauerrand Rule.** Black bands are for bad news and breaking news only: the NEIN! headline and the EILMELDUNG ticker. Both bleed to the sheet edges (negative gutter margins).

## Typography

**Display Font:** Archivo variable (wdth 62–125, wght 100–900), with Helvetica Neue and Arial as fallbacks
**Body Font:** Zeitung Serif: Zeitung Serif, instanced to wght 400–600 / opsz 12–24, subset to Latin-1 and renamed per the OFL Reserved Font Name, with Georgia as fallback

**Character:** a condensed grotesk shouting in capitals over a sober text serif, the voice split of a real tabloid. Width does the work that size cannot: condensed (62%) for the big words, semi-condensed (85%) for deks and labels, normal (100%) for the masthead and dateline.

### Hierarchy
- **Display / verdict headline** (900, wdth 62, fitted, line-height 0.8, -0.02em, uppercase, red; white on black for NEIN!): the single answer word. Size = `min(measure / (characters × fit), 64svh)`, where fit is 0.385 per character (0.4 for JA!, whose J and A run wider). `--len` is set from the headline's character count by the script, and `--measure` is the column width (`100vw − 2 × gutter` on phones, `min(1180px, 100vw − 64px) − 2 × gutter` on desktop). On desktop the JA! variant is capped at 48svh so the photo beside it stays landscape. The "Ja? Nein?" teaser uses a virtual length of 5.8 on phones (two lines) and 10.5 on desktop (one line, no wrap).
- **Masthead** (900, wdth 100, clamp(2rem, 11.4vw, 5.5rem), line-height 0.86, -0.035em, uppercase, white on red): the invented paper name only.
- **Headline / question** (900, wdth 62, clamp(3.25rem, 17vw, 8.5rem), on desktop clamp(5rem, 9vw, 8.5rem), line-height 0.86, uppercase, balanced): "HAST DU EIER?", the page's h1.
- **Title / dek** (900, wdth 85, clamp(1.625rem, 7.4vw, 2.75rem), on desktop clamp(2rem, 3.2vw, 2.75rem), line-height 1.02, sentence case, balanced): the verdict line with its emoji. The emoji is bound to the last word with a non-breaking space.
- **Ticker** (800, wdth 85, clamp(1.125rem, 4.6vw, 1.75rem), +0.02em, uppercase, white on black): `+++`-separated breaking-news copy.
- **Body / lede** (Zeitung Serif 600, clamp(1.1875rem, 4.6vw, 1.4375rem), line-height 1.35, max 38ch): the optional punchline under the dek.
- **Caption** (Zeitung Serif 400, 0.875rem, line-height 1.35, caption ink, 1px black rule above): photo and video credits.
- **Label** (900, wdth 85, +0.04em, uppercase): buttons (1.1875rem), the play badge and the toast (1rem), and the Störer (clamp(.8125rem, 3.4vw, 1.125rem), +0.02em, line-height 1.05).
- **Meta / dateline** (700, wdth 100, 0.8125rem, +0.04em, uppercase): the date, edition number and price in the masthead. Short date format on phones, long format from 900px.
- **Base** (Archivo 1.0625rem, line-height 1.45): the inherited default.

### Named Rules
**The Narrowest-Heaviest Rule.** The question and the verdict use Archivo at wdth 62 and weight 900, uppercase, with line-height at most 0.86. Never use a lighter or wider cut for front-page words.

**The Fill-The-Measure Rule.** The verdict headline is sized from its character count, not from a fixed step. A new headline sets `--len` and inherits the formula. It never wraps mid-word, and it is capped by viewport height.

**The Serif Reports Rule.** Zeitung Serif is used only for reported text: the lede and captions. Everything that shouts is Archivo.

## Layout

**Phone (below 900px):** the sheet is the whole viewport (newsprint, min-height 100svh). The red masthead runs full bleed at the top, and the dateline wraps under a 2px white rule spread with `space-between`. Content uses a 16px gutter and an 18px vertical stack. The reading order is a single column: question, ticker (while waiting), headline, dek, lede, photo, actions, toast. Ticker and Trauerrand break out to the sheet edges with negative gutter margins. The two buttons sit side by side when they fit (`flex: 1 1 180px`, 10px gap) and stack otherwise.

**Desktop (900px and up):** the body becomes the red table (40px 32px 64px padding). The sheet is centred at max 1180px and casts the table shadow. The red masthead is inset 16px inside the sheet, with the name on the left and the dateline right-aligned in a column. The gutter grows to 40px. The story is a two-row grid with a 40px column gap:
- **JA!:** columns `auto | 1fr`, areas `"head photo" / "text photo"`. The headline and the text column sit on the left, and the photo fills the right column at 4:3.
- **NEIN!:** columns `5fr | 7fr`, areas `"head head" / "text photo"`. The Trauerrand spans the sheet, and the photo sits right below it on the right.
- The text column starts 24px down under a 3px black rule. Actions stack vertically and are pushed to the column foot (`margin-top: auto`).

During the ticker, the story body is hidden and only the teaser headline holds the slot.

**Media frames:** black boxes at 16:10 (GIF) or 16:9 (video), and 4:3 for JA! on desktop. Media is cropped to cover.

## Elevation & Depth

The page itself is flat printed matter. Depth exists only where a physical object sits on another: the sheet on the table, and the sticker on the photo. Both shadows are soft and tinted toward their ground. Neither is a hard offset.

### Shadow Vocabulary
- **Sheet on table** (`box-shadow: 0 30px 60px -24px rgba(60, 0, 4, .6), 0 2px 4px rgba(60, 0, 4, .25)`): desktop only. Lifts the newsprint off the red table.
- **Stuck-on Störer** (`box-shadow: 0 6px 14px -6px rgba(17, 17, 17, .45)`): the friend banderole over the photo corner.

### Named Rules
**The Printed-Flat Rule.** Nothing printed on the sheet casts a shadow: no headline, button, ticker or photo. Only objects laid on top (the sheet on the table, the Störer on the photo) get depth.

## Shapes

Every edge is square (0 radius), including buttons, media frames, bands, the marker and the masthead. Borders are solid black rules in three weights: 1px (caption rule), 2px (white dateline rule on red) and 3px (button outlines, the desktop text-column rule, focus outline). Icons are inline SVG strokes at 2.6 width with square caps and mitred joins, sized 1.15em. The only rotated shape is the Störer (-4deg), which overhangs the photo's top-left corner by -14px / -8px.

**The Square Edge Rule.** No border-radius anywhere. If a new element needs softness, it does not belong on this paper.

## Components

### Masthead
A red block with the invented paper name EIER-ZEITUNG in white Archivo 900, plus the dateline (date · Ausgabe n · 0,00 €). The edition number counts up with every Nochmal. Never use a real paper's name or logo.

### Question with marker
The h1 "HAST DU EIER?". "Eier?" carries the yellow marker (padding 0 .06em, clone decoration so it survives line breaks).

### EILMELDUNG ticker
A black, full-bleed band with white condensed capitals and `+++` separators. It scrolls right to left (6s linear, infinite) and is shown only while the stage is "waiting" (1400ms suspense before each verdict). It is hidden from assistive tech.

### Verdict headline
- **JA!:** red on newsprint, fitted to the measure.
- **NEIN! (Trauerrand):** white on a black band bleeding to both sheet edges (padding .08em gutter .02em).
- **Teaser:** "Ja? Nein?" in red while the ticker runs. It is replaced by the slam.

### Dek and lede
The dek is the verdict line in bold semi-condensed sans, with its emoji. The optional lede follows in serif 600, tucked 6px closer on phones.

### Photo and caption
A black media frame with a serif credit under a 1px black rule. GIFs play as muted looping video and fall back to the GIF image. YouTube loads as a poster with a red **play badge** ("Video mit Ton", play triangle, bottom-left; black on hover, yellow inset focus ring). The privacy-friendly embed replaces it on click.

### Störer (friend banderole)
A yellow, black-type, uppercase stamp ("Die Ausgabe von deinem Kumpel") rotated -4deg, overhanging the photo's top-left corner (max-width 78%). It appears only on shared links (`?a=`). The photo gains 16px top margin so the stamp clears the line above.

### Buttons
- **Shape:** square (0 radius), 3px border, min-height 58px, padding .85em 1.3em, stroke icon before the label.
- **Primary:** solid red with white label. Hover turns it deep red. It is "Teilen" by default and "Und du?" (redraw) on a friend's edition, moved to first position.
- **Secondary:** transparent with a black outline and black label. Hover inverts it to a black fill with white label.
- **Active:** nudges down 2px. **Disabled:** 45% opacity with progress cursor (while a new edition prints).
- **Focus:** 3px black outline at 3px offset (global `:focus-visible`).
- Transitions use 140ms ease-out on colour and translate.

### Toast
A status line under the actions in deep-red uppercase label type ("Link kopiert", or the raw link if copying fails). It holds 1.4em of height so the layout does not jump.

### Motion grammar
- **Slam** (380ms, `cubic-bezier(.2, .9, .2, 1)`): the headline drops from scale 1.45, blurred 6px and transparent, overshoots to 0.97 at 60%, and settles at 1.
- **Paper jolt** (220ms ease-out, fired 220ms after the slam starts): the whole sheet dips 5px, rebounds 2px and settles.
- **Print wipe** (420ms, `cubic-bezier(.16, 1, .3, 1)`): dek, lede, photo and actions reveal top to bottom with a clip-path inset staggered at 260 / 340 / 420 / 520ms. The clip ends 40px outside the box so the Störer can overhang.
- **Reduced motion:** slam, jolt and print are instant, and scroll-to-top is not smooth. The ticker stops and shows static text, but the 1400ms suspense remains because it is pacing, not movement.

## Do's and Don'ts

### Do:
- **Do** print every verdict as a front-page headline sized by the Fill-The-Measure formula, at Archivo wdth 62 / 900, uppercase.
- **Do** keep the ink set to tabloid red, press black and marker yellow on grained newsprint. White appears only reversed out of red or black.
- **Do** set bad news on a full-bleed black Trauerrand band in white, and good news in red on the paper.
- **Do** reserve Zeitung Serif for the lede and photo credits.
- **Do** keep motion to hard press hits (slam, jolt) and top-to-bottom print wipes, each with an instant reduced-motion state.
- **Do** keep every corner square and every rule solid black at 1px, 2px or 3px.

### Don't:
- **Don't** return to the rejected Eierkarton world: no egg-carton or literal egg imagery, and no muted grey palettes.
- **Don't** use a real newspaper's name, logo or masthead lettering. The paper is always the invented EIER-ZEITUNG.
- **Don't** round corners or add drop shadows to anything printed on the sheet.
- **Don't** use yellow as text colour or as a surface fill beyond the marker and the Störer.
- **Don't** put filters, scanlines or screen overlays on the clips. Media is shown clean in a black frame.
- **Don't** centre the page as a meme card. The front page reads top-down on phones and verdict-first in two columns on desktop.
