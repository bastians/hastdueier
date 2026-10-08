# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS (user decision, 2026-10-08). The former PHP implementation was removed on 2026-10-08. The answer is picked client-side from `assets/js/answers.js`.

Consequence to respect: a static page serves one fixed set of Open Graph and Twitter tags, so link previews can no longer show the specific answer a visitor got. Shares should carry the answer in the share text or URL instead.

## Users

Anyone who gets the link from a friend, in a group chat, on social media or before a match. They know, or quickly pick up, Oliver Kahn's "Eier, wir brauchen Eier!" quote. They spend a few seconds on the page: they read the question, get a verdict, laugh, and send it on.

## Product Purpose

A pure-fun, shareable gag. The site asks one question, "Hast du Eier?", and answers it at random with a yes or a no, a punchline and a GIF or video clip. Success means people laugh and share it. There is no business goal.

## Positioning

A one-question oracle built on a specific, well-known German football meme. The joke is the whole product: one question, a random verdict, a fitting clip, and nothing else to do except try again or share it.

## Operating Context

- Visitors arrive mostly on phones, from shared links in messengers and social feeds.
- A visit lasts seconds. Reloading for a new verdict and sharing the result are the only follow-up actions.
- Domain: hastdueier.de (canonical `https://www.hastdueier.de/`).

## Capabilities and Constraints

Keep:
- **Random verdict with media.** Yes and no are equally likely (50/50); within yes, one of the three yes answers is picked evenly. Each visit draws a random answer: `found` (yes/no), a headline with emoji, an optional description and a GIF or YouTube clip. Answers live in `assets/js/answers.js`.
- **Social sharing.** Visitors can share their result. The current Twitter widget and Facebook like iframe are outdated and should be replaced with current share mechanisms, not copied.
- **Analytics via Matomo.** This replaces Google Analytics (`UA-3029030-17`, which is defunct).

Drop:
- AdSense. Ads are not part of the product any more.
- The public JSON API (`/api/answer.php`). It was not kept and nothing must preserve its response shape.

Undecided:
- Matomo instance URL and site ID.
- Whether the answer set grows beyond the current four, and whether the media should still come from third-party embeds (Giphy, YouTube) or be self-hosted.
- Hosting target for the static build.

## Brand Commitments

- Name and question: **"Hast du Eier?"**. Tagline: **"Eier, wir brauchen Eier."**
- Language: German only. Voice is cheeky and informal: "du", locker-room humour, emoji in the verdicts.
- Existing verdict copy in `assets/js/answers.js` is the established tone, e.g. "Ja, riesen Kawenzmänner! 😎" or "Nein. 😔 Schade! Denn: Eier! Wir brauchen Eier!"
- Existing asset: `favicon.ico`.

## Evidence on Hand

- The four answers in `assets/js/answers.js` are confirmed as the canonical set. Each comes with a GIF or video:
  1. "Ja, riesen Kawenzmänner! 😎" (yes)
  2. "Ja, aber schwer zu finden. 😏" (yes)
  3. "Ja! 😃" (yes)
  4. "Nein. 😔", with the line "Schade! Denn: Eier! Wir brauchen Eier!" (no)
- Media is third-party: Giphy GIFs and a YouTube clip of the Kahn quote. No rights to self-host these have been confirmed.
- There are no traffic numbers, testimonials or press in the repo, and none should be invented.

## Product Principles

1. **The joke is the product.** Everything on the page serves the question, the verdict and the punchline. Nothing should compete with them.
2. **Seconds to the laugh.** The verdict and its clip should land at once on a phone, without waiting for heavy embeds or ad scripts.
3. **Made to be passed on.** Sharing your verdict is the main next step and should be effortless.
4. **Stay true to the meme.** The voice is cheeky, German and inside-joke. It should not be sanitized, explained or turned into a generic yes/no app.
5. **Lean and private by default.** No ads. Analytics run on self-hostable Matomo, not third-party trackers.
