---
name: Hast du Eier?
description: The 10-metre tower at the Freibad. Your verdict either jumps into the pool or climbs back down.
colors:
  tower-blue: "#0a5fa8"
  tower-blue-deep: "#074a85"
  pool-turquoise: "#0b93a3"
  lane-turquoise: "#087a88"
  tile-white: "#f7fbfc"
  grout: "#d3e8ee"
  enamel: "#fdfefe"
  ink-navy: "#062a4d"
  ink-soft: "#2f5878"
  safety-red: "#e2231a"
  sun-yellow: "#ffd400"
  white: "#ffffff"
  overflow-channel: "#0b3a63"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "min(calc(100cqi / (var(--len) * var(--fit))), 40svh)"
    fontWeight: 900
    lineHeight: 0.8
    letterSpacing: "-0.01em"
  countdown:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "min(46cqi, 34svh)"
    fontWeight: 900
    lineHeight: 0.8
  tower-height:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(4.5rem, 26vw, 8rem)"
    fontWeight: 900
    lineHeight: 0.78
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3rem, 15.5vw, 6.5rem)"
    fontWeight: 900
    lineHeight: 0.88
    letterSpacing: "-0.005em"
  title:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.625rem, 7vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  lede:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.1875rem, 4.6vw, 1.375rem)"
    fontWeight: 500
    lineHeight: 1.35
  body:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 500
    lineHeight: 1.45
  button:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 700
    letterSpacing: "0.05em"
  label:
    fontFamily: "Barlow Semi Condensed, Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "0.06em"
  tower-height-wide:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(6rem, 10vw, 9.5rem)"
    fontWeight: 900
    lineHeight: 0.78
  headline-wide:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3.5rem, 6vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.88
  title-wide:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 2.8vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.08
  friend-sign:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.125rem, 4.8vw, 1.375rem)"
    fontWeight: 700
    lineHeight: 1.2
  badge:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    letterSpacing: "0.04em"
  notice:
    fontFamily: "Barlow Semi Condensed, Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    letterSpacing: "0.05em"
  fine-print:
    fontFamily: "Barlow Semi Condensed, Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    letterSpacing: "0.06em"
  noscript:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "2rem"
    fontWeight: 900
    lineHeight: 1
rounded:
  plate: "10px"
  info-sign: "8px"
  tag: "6px"
spacing:
  pair: "10px"
  stack: "18px"
  gutter: "16px"
  gutter-wide: "40px"
components:
  button-primary:
    backgroundColor: "{colors.tower-blue}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.plate}"
    padding: "0.8em 1.3em"
    height: "58px"
  button-primary-hover:
    backgroundColor: "{colors.tower-blue-deep}"
    textColor: "{colors.white}"
  button-secondary:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.ink-navy}"
    typography: "{typography.button}"
    rounded: "{rounded.plate}"
    padding: "0.8em 1.3em"
    height: "58px"
  button-secondary-hover:
    backgroundColor: "#dff1f6"
    textColor: "{colors.ink-navy}"
  enamel-sign:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.ink-navy}"
    typography: "{typography.headline}"
    rounded: "{rounded.plate}"
    padding: "18px 22px 14px"
  friend-sign:
    backgroundColor: "{colors.sun-yellow}"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.plate}"
    padding: "12px 22px 11px"
  info-sign:
    backgroundColor: "{colors.tower-blue}"
    textColor: "{colors.white}"
    rounded: "{rounded.info-sign}"
    padding: "9px"
    width: "clamp(56px, 15vw, 88px)"
  play-badge:
    backgroundColor: "{colors.tower-blue}"
    textColor: "{colors.white}"
    rounded: "{rounded.info-sign}"
    padding: "10px 16px 10px 12px"
  toast:
    backgroundColor: "{colors.sun-yellow}"
    textColor: "{colors.ink-navy}"
    typography: "{typography.label}"
    rounded: "{rounded.tag}"
    padding: "6px 10px 5px"
  clip-frame:
    backgroundColor: "{colors.ink-navy}"
    rounded: "{rounded.plate}"
---

# Design System: Hast du Eier?

## Overview

**Creative North Star: "Der Zehner"**

The page is the 10-metre diving tower at a German Freibad on a sunny day, the Mutprobe every kid knows. The deep tile-blue tower holds the question on a screwed-on enamel sign; the turquoise pool below holds the countdown and then the verdict; the white-tiled pool edge holds the punchline, the clip and the two buttons. Every surface is a physical fitting of that place: painted concrete, tiles and grout, enamel plates, DIN-style blue info signs, the overflow grate and the ladder.

Density is low and the type is enormous. The verdict fills the water from wall to wall in Barlow Condensed Black, and everything else is set in the Barlow family, a DIN-like signage grotesk, so the page reads like the signs on the tower. Motion follows the physics of the place: gravity in, ripples out, stepped descents. JA! falls into the water, splash rings spread and the letters wobble under the surface until it settles. NEIN! climbs down rung by rung and the water stays still.

Texture is drawn, never photographed: SVG noise for the painted tower, a displaced grout grid for the pool floor, drifting caustic light, slightly uneven deck tiles. The only photographic material is the third-party clip, shown clean in its frame. Literal eggs are out: "Eier haben" means nerve, and the world expresses nerve as the jump.

**Key Characteristics:**
- Two zones, tower and pool: tower blue above (phone) or left (desktop), turquoise water and white tile below or right.
- Enamel sign plates with 10px corners, inset rules, four screw heads and a soft navy depth shadow.
- Barlow Condensed Black for the verdict, question, tower height and countdown; Barlow Medium/Bold for reading text; Barlow Semi Condensed SemiBold for small uppercase signage.
- Safety red appears only on the word EIER?. Sun yellow is reserved for the friend sign, the toast, focus and selection.
- Motion is gravity, ripples and ladder steps, with an instant state under reduced motion and the countdown kept.

## Colors

A sunny-day pool palette: saturated tile blue and turquoise water against near-white tile and enamel, with navy ink and two hard safety accents.

### Primary
- **Tower Blue** (#0a5fa8): The tower band and full-height desktop column (under SVG paint noise), primary buttons, blue info signs and the play badge, the inset rule on enamel signs, the blue edge tiles, the scrollbar and `theme-color`. White on it is 6.5:1.
- **Tower Blue Deep** (#074a85): Hover state for primary buttons and the play badge only.

### Secondary
- **Pool Turquoise** (#0b93a3): The water. It carries only display-size white text (verdict, countdown, noscript line) because white on it is 3.67:1.
- **Lane Turquoise** (#087a88): The single 44px lane stripe down the centre of the pool floor.
- **Overflow Channel** (#0b3a63): The dark ground of the overflow grate strip at the top of the pool edge, under the navy slots.

### Tertiary
- **Safety Red** (#e2231a): The word EIER? on the question sign (4.6:1 on enamel at display size). Nowhere else.
- **Sun Yellow** (#ffd400): The friend sign, the toast, the focus outline and text selection. Always with navy ink (10:1), never as a text colour.

### Neutral
- **Tile White** (#f7fbfc): Page background and the base of the deck tile texture, whose 16 tiles vary slightly between #eef6f8 and #fbfefe on #c4dce3 grout.
- **Grout** (#d3e8ee): Screw heads on enamel plates.
- **Enamel** (#fdfefe): Sign plates, secondary buttons, the desktop ladder.
- **Ink Navy** (#062a4d): All text on light surfaces, the friend sign rule, the clip frame, the grate slots on the overflow channel.
- **Ink Soft** (#2f5878): Captions and the "Springen auf eigene Gefahr." footer (7.2:1 on tile).
- **White** (#ffffff): Text and pictograms on blue and turquoise, splash rings, the info sign rule.

### Named Rules
**The Safety Red Rule.** Red marks danger, so it marks only EIER? (and future alerts). It never fills a surface or a button.

**The Deep Water Rule.** White text goes on the pool only at display size. Body, captions and buttons live on the tiled edge or the tower.

## Typography

**Display Font:** Barlow Condensed Black 900 (with Arial Narrow, sans-serif)
**Body Font:** Barlow Medium 500 / Bold 700 (with Helvetica Neue, Arial, sans-serif)
**Label Font:** Barlow Semi Condensed SemiBold 600 (with Barlow, Helvetica Neue, Arial, sans-serif)

**Character:** One signage family in three widths, like the lettering on a pool's rules board. Self-hosted WOFF2 subset to Latin-1 plus German punctuation, SIL OFL (licence in `assets/fonts/OFL-barlow.txt`, no Reserved Font Name). Condensed Black and Bold are preloaded.

### Hierarchy
- **Display** (900, `min(calc(100cqi / (len × fit)), 40svh)`, 0.8, uppercase): The verdict JA! / NEIN!, sized from its character count against the pool's container width; `--fit` is 0.4 for NEIN!, 0.42 for JA!; cap rises to 48svh at 900px+. Soft text shadow `0 .03em .12em rgba(4,50,60,.45)` keeps it legible over caustics.
- **Countdown** (900, `min(46cqi, 34svh)`, 0.8): 3-2-1 in the water.
- **Tower height** (900, `clamp(4.5rem, 26vw, 8rem)`, 0.78, -0.02em; desktop `clamp(6rem, 10vw, 9.5rem)`): The painted "10 m", unit at 0.42em.
- **Headline** (900, `clamp(3rem, 15.5vw, 6.5rem)`, 0.88, uppercase, balanced; desktop `clamp(3.5rem, 6vw, 6rem)`): HAST DU EIER? on the enamel sign.
- **Title** (700, `clamp(1.625rem, 7vw, 2.5rem)`, 1.08, -0.01em; desktop `clamp(2rem, 2.8vw, 2.75rem)`): The verdict line with its emoji (the dek).
- **Lede** (500, `clamp(1.1875rem, 4.6vw, 1.375rem)`, 1.35, max 38ch): The optional punchline.
- **Body** (500, 1.0625rem, 1.45): Base text, friend sign at 700 `clamp(1.125rem, 4.8vw, 1.375rem)`.
- **Button** (700, 1.1875rem, 0.05em, uppercase): Button labels.
- **Label** (Semi Condensed 600, 0.8125–0.9375rem, 0.05–0.06em, uppercase): Tower meta "Sprungturm / Versuch n", toast, footer rules sign. Clip captions use the same face at 0.875rem in sentence case.

### Named Rules
**The Signboard Rule.** Anything shouted is Barlow Condensed Black in uppercase; anything read is Barlow in sentence case. No second family.

## Layout

Phone first, one column: the tower band (14px top padding, 16px gutter) with "10 m" and the meta to its right, then the question sign, which hangs 56px down over the pool's top edge. The pool fills `clamp(300px, 54svh, 560px)` and centres the countdown and verdict in one grid cell; the info sign sits bottom-right. The pool edge below stacks dek, lede, clip, actions and toast with an 18px gap; buttons sit in a wrapping row with a 10px gap, each `flex: 1 1 180px`.

At 900px and up the gutter becomes 40px and the page splits into two full-height columns: the tower at `minmax(340px, 34vw)` on the left, holding height, sign, friend sign and a 92px enamel ladder that fills the remaining height; the pool (60svh) and pool edge on the right. The pool edge becomes a 5fr / 6fr grid with text and stacked full-width buttons left and the clip right, 40px column gap. Verdict, dek and actions are visible without scrolling.

While counting, the pool edge contents are hidden with `visibility` so nothing shifts when the verdict lands.

## Elevation & Depth

Mostly flat, with one physical depth: enamel plates hang off the tower and cast a soft navy shadow onto what is behind them. Depth inside the pool comes from texture (caustics over a displaced grout grid) rather than shadow.

### Shadow Vocabulary
- **Plate shadow** (`box-shadow: 0 10px 18px -10px rgba(2,24,48,.55), 0 2px 3px rgba(2,24,48,.2)`): Enamel question sign, friend sign, info sign, clip frame.
- **Enamel rule** (`box-shadow: inset 0 0 0 5px <plate>, inset 0 0 0 8px <rule>`): The inset frame on sign plates; 8px tower-blue on enamel, 7px navy on the yellow friend sign, 3px/5px white-on-blue on info signs, 2px/4px on the play badge.
- **Waterline text shadow** (`text-shadow: 0 .03em .12em rgba(4,50,60,.45)`): Verdict only.

### Named Rules
**The Hanging Plate Rule.** Only screwed-on signs and the clip frame cast shadows, always the plate shadow, always downward. Buttons, tiles and text stay flat.

## Shapes

Sign-plate geometry: rectangles with modestly rounded corners, 10px on enamel plates, buttons and the clip frame, 8px on the square blue info signs and the play badge, 6px on the toast. Enamel plates carry four screw heads drawn with radial gradients 12px from each corner. Splash rings are the only ellipses. Repeating stripes draw real fittings only: the 30px overflow channel (navy grate slots, then 34px blue edge tiles with 2px grout) along the top of the pool edge, and the 8px ladder rungs every 46px.

## Components

### Buttons
- **Shape:** sign-plate corners (10px), 3px tower-blue border, min height 58px, label with a 1.15em inline stroke icon (2.6 stroke).
- **Primary:** tower blue fill, white label. The action the visitor most likely wants (Teilen after their own jump; "Und du?" when they arrived via a friend's link) is primary, the other secondary.
- **Hover / Focus:** primary deepens to tower blue deep; secondary washes to #dff1f6. Press drops 2px. Focus is a 3px outline offset 3px, navy on buttons, sun yellow elsewhere. Transitions 140ms ease-out.
- **Secondary:** enamel fill, navy label, same blue border.
- **Disabled:** 50% opacity with a progress cursor during a jump.

### Enamel sign (question)
White enamel plate, inset tower-blue rule, four screws, plate shadow, Condensed Black uppercase in navy with EIER? in safety red. On phones it hangs 56px over the pool. While counting it bobs like a diving board (1400ms).

### Friend sign
Same plate in sun yellow with a navy rule and Barlow Bold sentence-case text. Appears only when a visitor arrives from a shared link and disappears on their own first jump.

### Info sign (pictogram)
Square blue DIN-style sign with a white inset rule and a white stroke pictogram (jumper over water for JA, figure on a ladder for NEIN). Fades and scales in from 0.6 after the verdict settles, 260ms.

### Clip
Third-party media in a navy frame with plate corners and plate shadow, 16:10 for GIFs, 16:9 for YouTube. YouTube loads from youtube-nocookie only after a click on the poster; the play badge is a small blue info-sign button labelled VIDEO MIT TON. Caption below in Semi Condensed. No overlays or filters on the media.

### Toast
A small sun-yellow tag with Semi Condensed uppercase navy text ("Link kopiert"), 6px corners, below the actions.

### Pool and verdict motion
- **Countdown tick** (420ms ease-out `cubic-bezier(.16,1,.3,1)`): each number lands from 1.35 scale and zero opacity.
- **JA! fall** (420ms ease-in `cubic-bezier(.55,0,1,.45)`): drops 70svh while scaling 0.7 to 1, then three splash rings expand and thin (1600ms, staggered 0/140/300ms) and an SVG displacement filter wobbles verdict and rings, decaying from scale 38 to 0 over 1200ms.
- **NEIN! climb** (1000ms, `steps(4)`): descends 200px in four rungs; caustics pause and dim to 0.3.
- **Caustics**: drift 320px diagonally over 16s, linear, endless, at 0.36 opacity.
- **Reduced motion**: all of the above become instant states; the countdown and its pacing remain.

### Imagery and raster provenance
The only shipped raster is `assets/img/og-zehner.jpg` (1200×630). It is not generated: it is a self-screenshot of `index.html?og` (countdown frozen at 3, reduced motion) taken in headless Chrome on 2026-10-08 with the overrides `.wasser{min-height:630px} .rand,.regeln{display:none} .zaehler{font-size:420px}`; the provenance is also embedded in the JPEG. All clips are third-party embeds (GIPHY mp4/gif, YouTube via youtube-nocookie after a click), not shipped rasters. All textures are inline SVG.

## Do's and Don'ts

### Do:
- **Do** build every new surface from fittings of the Freibad: tower blue (#0a5fa8) paint, turquoise water (#0b93a3), white tile with grout, enamel plates, blue info signs, grate and ladder.
- **Do** put question-level statements on enamel plates with 10px corners, an inset rule, four screw heads and the plate shadow.
- **Do** size the verdict from its character count so it fills the pool wall to wall in Barlow Condensed Black, uppercase, line height 0.8.
- **Do** keep motion physical: gravity in (ease-in fall), ripples out (expanding, thinning rings), stepped descents (`steps(4)`), each with an instant reduced-motion state.
- **Do** use inline SVG for icons and pictograms, stroked in white or currentColor with round caps.
- **Do** keep the third-party clip clean in its navy frame and load YouTube from youtube-nocookie only after a click.

### Don't:
- **Don't** use egg imagery of any kind; "Eier" means nerve, and the jump is the image for it.
- **Don't** use safety red (#e2231a) for anything but EIER? and alerts, and don't use sun yellow (#ffd400) as a text colour.
- **Don't** set body, captions or buttons in white on the turquoise water; it is 3.67:1 and holds display type only.
- **Don't** use gradients, glows or glass as decoration. Gradients may only draw real fittings (lane line, grate, edge tiles, ladder, screws).
- **Don't** introduce a second type family; width and weight within Barlow carry the hierarchy.
- **Don't** put filters, tints or overlays on the clips.
