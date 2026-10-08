# [hastdueier](https://www.hastdueier.de)

Eier, wir brauchen Eier. Hast du Eier?

Eine statische Seite im Stil einer Boulevard-Titelseite: Nach der Eilmeldung knallt die Antwort als Schlagzeile aufs Blatt. Ja und Nein kommen je zur Hälfte, ein Ja ist eine von drei Ja-Antworten.

## Aufbau

- `index.html`: die Seite
- `assets/js/answers.js`: die vier Antworten (Reihenfolge = `?a=` im geteilten Link)
- `assets/js/titelseite.js`: Ziehen, Eilmeldung, Schlagzeile, Teilen, Nochmal (nächste Ausgabe)
- `assets/js/config.js`: Matomo-URL und Site-ID (leer = kein Tracking)
- `assets/css/titelseite.css`: die Titelseite
- `assets/fonts/`: Archivo und Zeitung Serif (= Source Serif 4, umbenannt wegen des Reserved Font Name), beide auf Latin-1 und die genutzten Achsen beschnitten, selbst gehostet (SIL OFL, Lizenzen liegen daneben)
- `assets/img/og-titelseite.jpg`: Vorschaubild für geteilte Links

Geteilte Links haben die Form `/?a=<0–3>` und öffnen genau diese Ausgabe mit der Banderole „Die Ausgabe von deinem Kumpel“. `/?og` hält die Eilmeldung an; damit wird das Vorschaubild aufgenommen.

## Lokal starten

Die Seite lädt ES-Module und braucht deshalb einen Webserver, `file://` reicht nicht.

```
python3 -m http.server 8000
open http://localhost:8000
```
