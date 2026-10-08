# [hastdueier](https://www.hastdueier.de)

Eier, wir brauchen Eier. Hast du Eier?

Eine statische Seite am Zehner im Freibad: Drei, zwei, eins, dann fällt das JA! mit Platsch ins Becken, oder das NEIN! klettert die Leiter wieder runter. Ja und Nein kommen je zur Hälfte, ein Ja ist eine von drei Ja-Antworten.

## Aufbau

- `index.html`: die Seite
- `assets/js/answers.js`: die vier Antworten (Reihenfolge = `?a=` im geteilten Link)
- `assets/js/zehner.js`: Ziehen, Countdown, Sprung oder Abstieg, Teilen, Nochmal (nächster Versuch)
- `assets/js/config.js`: Matomo-URL und Site-ID (leer = kein Tracking)
- `assets/css/zehner.css`: Turm, Becken und Beckenrand
- `assets/fonts/`: Barlow, Barlow Semi Condensed und Barlow Condensed, auf Latin-1 beschnitten, selbst gehostet (SIL OFL, Lizenz liegt daneben)
- `assets/img/og-zehner.jpg`: Vorschaubild für geteilte Links

Geteilte Links haben die Form `/?a=<0–3>` und öffnen genau diesen Sprung mit dem Schild „Dein Kumpel stand schon oben“. `/?og` hält den Countdown bei der 3 an; damit wird das Vorschaubild aufgenommen.

## Lokal starten

Die Seite lädt ES-Module und braucht deshalb einen Webserver, `file://` reicht nicht.

```
python3 -m http.server 8000
open http://localhost:8000
```
