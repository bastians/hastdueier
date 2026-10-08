---
name: Hast du Eier?
description: The one-question oracle played straight. One enormous word that either has weight or has none.
colors:
  swiss-red: "#e30613"
  ink: "#0a0a0a"
  ink-soft: "#5c5c5c"
  rule: "#0a0a0a"
  white: "#ffffff"
  ink-hover: "#2b2b2b"
typography:
  verdict:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "min(calc(100cqi / (var(--len) * 0.435)), 42svh)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "-0.04em"
  verdict-teaser:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "min(calc(100cqi / (5 * 0.44)), 42svh)"
    fontWeight: 100
    lineHeight: 0.86
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 2.4vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 6.4vw, 2rem)"
    fontWeight: 650
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  lede:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.5
  button:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    letterSpacing: "-0.01em"
  note:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.4
  caption:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.4
  title-wide:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.625rem, 2.2vw, 2.125rem)"
    fontWeight: 650
    lineHeight: 1.15
    letterSpacing: "-0.025em"
rounded:
  none: "0"
spacing:
  margin-phone: "20px"
  margin-desktop: "48px"
  gutter-phone: "20px"
  gutter-desktop: "24px"
  tight: "8px"
  button-gap: "10px"
  rule-pad: "16px"
  block: "24px"
  block-desktop: "28px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0.8em 1.4em"
    height: "56px"
  button-primary-hover:
    backgroundColor: "#2b2b2b"
    textColor: "{colors.white}"
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0.8em 1.4em"
    height: "56px"
  button-secondary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  play-badge:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 18px 12px 14px"
  play-badge-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
---

# Design System: Hast du Eier?

## Overview

**Creative North Star: "The Weight of the Word"**

The category standard for a one-question oracle site, played straight to a Swiss poster and Apple product page bar: a small question, one enormous word, the clip, two actions. The only idea is typographic. The verdict is set on Hanken Grotesk's variable weight axis, so JA! lands at the heaviest weight (900) and NEIN! at the thinnest (100): the word itself either has Eier or has none. Everything else on the page stays out of its way.

The page is white paper with black ink, hairline rules and a single Swiss red. Density is low and the hierarchy is extreme: the verdict is sized to fill the measure, everything beneath it is set at reading sizes in the same family. No props, no costume, no decoration; depth, texture and gradient are absent by design.

Motion is a single event per state. The thin teaser "Ja? Nein?" breathes once while the answer is drawn, then the verdict morphs its weight to the final value. Nothing else enters, slides or fades.

**Key Characteristics:**
- One face (Hanken Grotesk variable, 100-900); hierarchy by size and weight only.
- White, black ink, and one red used in exactly two places.
- Verdict fitted to its container width, capped by viewport height.
- Weight morph as the signature and only entrance motion.
- Square corners, 1px hairline rules, no shadows.
- 12-column desktop grid; single column on phones with 20px margins.

## Colors

Black on white with one Swiss red held back for the frame and the verdict's punctuation.

### Primary
- **Swiss Red** (`swiss-red`): the 6px rule along the top edge of the page and the verdict's exclamation mark. Nowhere else: not on buttons, links, focus rings or states.

### Neutral
- **Ink** (`ink`): all text, the primary button fill, the clip's letterbox background, focus outlines, selection background, scrollbar thumb.
- **Soft Ink** (`ink-soft`): secondary text only: the tagline, clip caption and footer.
- **Rule** (`rule`): 1px hairlines under the header, above the text block, above the desktop actions column and above the footer. Same value as Ink, named separately for its role.
- **White** (`white`): page ground, secondary button fill, play badge, primary button text. Also the `theme-color`.

### Named Rules
**The Two Reds Rule.** Red appears exactly twice on any screen: the 6px top rule and the "!" of the verdict. The teaser ("Ja? Nein?") carries no red. A third red element breaks the system.

**The Hover Inverts Rule.** Interactive states trade ink and white; they never introduce a new hue. The one tonal step is the primary button hover (`#2b2b2b`).

## Typography

**Display Font:** Hanken Grotesk variable (with Helvetica Neue, Helvetica, Arial)
**Body Font:** Hanken Grotesk variable (same file)

**Character:** A plain neo-grotesk with a full 100-900 weight axis, used as a single voice. Its hairline and black extremes carry the whole joke; its middle weights carry everything else without comment. Self-hosted as `assets/fonts/hanken-var.woff2`, subset to Latin-1 plus German punctuation (SIL OFL, no Reserved Font Name), preloaded, `font-display: swap`.

### Hierarchy
- **Verdict** (900 for JA!, 100 for NEIN!, line-height 0.86, tracking -0.04em, no wrap): the answer word. Sized by the fit formula `min(100cqi / (len × fit), cap)`, where `len` is the character count set by script, `fit` is the measured advance per character (0.435 at weight 900), and `cap` is 42svh on phones and 50svh from 900px. The "!" is a separate span in red.
- **Verdict teaser** (100, breathing to 320): "Ja?⏎Nein?" on two forced lines (`white-space: pre-line`), `len` fixed at 5 (the width of "Nein?"), fit 0.44 (measured 0.414 thin, widened for the breath). Cap 42svh on phones, 25svh on desktop so the two lines stand no taller than the landed verdict.
- **Headline** (700, clamp 1.5rem-2.25rem, 1.1, -0.03em): the question "Hast du Eier?" in the header.
- **Title** (650, clamp 1.5rem-2rem on phones, clamp 1.625rem-2.125rem on desktop, 1.15, -0.025em, balanced wrap): the answer line (dek) under the verdict. A non-breaking space keeps the closing emoji off a line of its own.
- **Lede** (400, 1.1875rem, 1.45, max 36ch): the optional second line of an answer.
- **Body** (400, 1.0625rem, 1.5): base text.
- **Button** (600, 1.0625rem, -0.01em): action labels.
- **Note** (400, 0.9375rem, 1.4): the tagline in Soft Ink; the friend note "Antwort von deinem Kumpel" at 600 in Ink. The toast uses this size at 600.
- **Caption** (400, 0.8125rem, 1.4): clip credit and footer, Soft Ink.

### Named Rules
**The Weight Is the Verdict Rule.** Yes is weight 900, no is weight 100, suspense is 100. Never set the verdict at a middle weight at rest, and never signal yes/no with color.

**The Fit, Not Clamp Rule.** The verdict is sized from its container width and its character count, never from a fixed clamp. A new verdict word must set `--len` and, if its weight changes, a re-measured `--fit`.

**The Optical Edge Rule.** On phones the verdict hangs flush-left with its first stem on the margin at every weight. The left side-bearing of the first glyph is a registered custom property (`--lsb`, number, em) animated alongside the weight: J measures 0.042em at 100 and 0.016em at 900; N measures 0.097em at 100 and 0.059em at 900. The verdict's inline-start margin is `-lsb × 1em × trim`, with trim 1 on phones and 0 on desktop, where the word is centred and needs no correction.

## Layout

A single column on phones; a strict 12-column grid from 900px.

- **Page:** max-width 1440px, centred; side margins 20px on phones, 48px on desktop. The page is at least one small-viewport height (100svh minus the 6px top rule), with the answer area flexing to push the footer down.
- **Header:** question left, tagline (and friend note) right on a shared baseline, wrapping beneath on narrow screens; 18px/16px vertical padding on phones, 28px/20px on desktop; closed by a hairline.
- **Phone answer stack:** verdict, text block, clip, actions; 24px between blocks, 20px top and 40px bottom padding. The verdict is the inline-size container for the fit formula.
- **Desktop grid (≥900px):** 12 columns, 24px gutters, 28px row gap. Row 1 is the verdict across all 12 columns, centred on the grid axis. Row 2 is text (columns 1-4), actions (columns 5-8, stacked vertically, on the verdict's axis) and clip (columns 9-12). Text and actions each open with a hairline and 16px of top padding; the clip's top edge aligns with those rules. At 1440×900 everything sits above the fold.
- **Rhythm:** 8px inside blocks (dek to lede, clip to caption), 10px between buttons, 16px under a hairline, 24px between blocks (28px rows on desktop).

**The Answer First Rule.** While the answer is being drawn, text, clip and actions keep their space (`visibility: hidden`) so nothing shifts when the verdict lands.

## Elevation & Depth

Completely flat. No shadows, gradients, textures or translucency anywhere. Separation comes from 1px ink hairlines and from the scale difference between the verdict and everything else. The only layering is the play badge sitting square on the bottom-left corner of the video poster.

**The Paper Rule.** If an element needs to stand apart, give it a hairline or white space, not a shadow or a tint.

## Shapes

Square everything: 0 radius on buttons, the play badge, media frames and focus outlines. Borders are 1px hairlines for structure and 1.5px ink strokes for buttons. The 6px red top rule is the heaviest line in the system. Icons are inline 24-unit SVGs with square caps and mitred joins, stroke 2, sized 1.1em in buttons; the play triangle is a filled 16px SVG.

## Components

### Buttons
Plain, full-bleed slabs; confident without ornament.
- **Shape:** square (0), 1.5px Ink border, min-height 56px, padding 0.8em 1.4em, icon and label with a 0.6em gap.
- **Primary:** Ink fill, White text. Hover steps to `#2b2b2b`.
- **Secondary:** White fill, Ink text. Hover inverts to Ink fill, White text.
- **Transitions:** background and color, 140ms ease-out. Active nudges down 1px. Disabled at 40% opacity with a progress cursor (both buttons disable during a redraw).
- **Layout:** on phones they share a row (`flex: 1 1 160px`, 10px gap); on desktop they stack in columns 5-8.
- **Role swap:** "Teilen" is primary by default. On a shared link (`?a=`), "Und du?" (the redraw button) becomes primary and moves first; after the first redraw the default returns.
- **Focus:** 2px Ink outline, 3px offset (global).

### Toast
A full-width line under the buttons (Note size, 600, min-height 1.5em so nothing jumps) for "Link kopiert" or the fallback link; wraps anywhere.

### Clip
- **Frame:** GIPHY clips at 16:10, YouTube at 16:9, Ink letterbox, object-fit cover, no radius, no border.
- **YouTube click-to-load:** the poster is a button; the White play badge (600, 0.9375rem, filled triangle) sits flush in the bottom-left corner and inverts to Ink on hover (160ms ease-out); focus draws a 2px Ink outline at 2px offset. Clicking swaps in a youtube-nocookie iframe.
- **Caption:** Caption size in Soft Ink, 8px below.
- Clips are third-party embeds, loaded during the suspense so they are ready when the verdict lands.

### Verdict (signature)
The weight morph. One smooth ease-out per state, `cubic-bezier(.16, 1, .3, 1)`:
- **Suspense:** teaser at weight 100 breathes 100 → 320 → 100 over 1400ms (ease-in-out), once. The suspense lasts 1400ms even with reduced motion: it is a pause, not a movement.
- **JA!:** inflates 100 → 900 in 700ms, the side-bearing travelling 0.042 → 0.016em.
- **NEIN!:** deflates 900 → 100 in 1100ms, the side-bearing travelling 0.059 → 0.097em. The deflation is slower than the inflation on purpose.
- **Reduced motion:** no animation; the verdict jumps to its final weight.

### Header and Footer
The header is the question (Headline) plus the tagline in Soft Ink; on a shared link the friend note appears before the tagline in Ink at 600. The footer is the domain in Caption size, Soft Ink, above a hairline. No navigation exists.

## Do's and Don'ts

### Do:
- **Do** keep red to the 6px top rule and the verdict's "!".
- **Do** express yes and no through weight alone: 900 for JA!, 100 for NEIN!, 100 for the teaser.
- **Do** size the verdict with the fit formula and set `--len` per word; re-measure `--fit` for any new weight or word shape.
- **Do** animate `--lsb` with the weight so a flush-left verdict keeps its first stem on the margin at every weight.
- **Do** let the weight morph be the only entrance motion; everything else simply stands there once the answer lands.
- **Do** jump to the final weight under `prefers-reduced-motion`.
- **Do** separate blocks with 1px hairlines and white space on the 12-column grid.
- **Do** keep all corners square and all states inside the ink/white pair.

### Don't:
- **Don't** add a second typeface; Hanken Grotesk carries every role.
- **Don't** use shadows, gradients, textures or rounded corners.
- **Don't** color the verdict or any state green, red or otherwise to mean yes/no.
- **Don't** fade, slide or stagger in the text, clip or buttons.
- **Don't** add props, illustrations or literal eggs; the type is the whole idea.
- **Don't** set the verdict with a fixed clamp or let it wrap (the teaser's two-line break is the only exception).
