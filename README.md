# [hastdueier](https://www.hastdueier.de)

Eier, wir brauchen Eier. Hast du Eier?

Eine statische Seite, schlicht gehalten: eine Frage, ein riesiges Wort. Ein Ja bekommt die volle Strichstärke, ein Nein verliert sie bis aufs Haar. Ja und Nein kommen je zur Hälfte, ein Ja ist eine von drei Ja-Antworten.

## Aufbau

- `index.html`: die Seite
- `assets/js/answers.js`: die vier Antworten (Reihenfolge = `?a=` im geteilten Link)
- `assets/js/schlicht.js`: Ziehen, Spannung, Antwort, Teilen, Nochmal
- `assets/js/config.js`: Matomo-URL und Site-ID (leer = kein Tracking)
- `assets/css/schlicht.css`: Raster, Schrift, die eine rote Linie
- `assets/fonts/`: Hanken Grotesk (variable Strichstärke 100–900), auf Latin-1 beschnitten, selbst gehostet (SIL OFL, Lizenz liegt daneben)
- `assets/img/og-schlicht.jpg`: Vorschaubild für geteilte Links

Geteilte Links haben die Form `/?a=<0–3>` und öffnen genau diese Antwort mit dem Hinweis „Antwort von deinem Kumpel“. `/?og` hält die Spannung an; damit wird das Vorschaubild aufgenommen.

## Lokal starten

Die Seite lädt ES-Module und braucht deshalb einen Webserver, `file://` reicht nicht.

```
python3 -m http.server 8000
open http://localhost:8000
```
