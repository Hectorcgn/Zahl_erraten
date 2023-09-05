# Zahl eraten

Simples Zahlenratespiel, implementiert in vanilla JavaScript. Für das Styling kommt SCSS/CSS zum Einsatz.

## Funktionen

- Zufällig generierte geheime Zahl zwischen 1 und 100
- Spieler kann Zahlen zwischen 1 und 100 eingeben um die geheime Zahl zu erraten 
- Hinweis ob die eingegebene Zahl zu niedrig oder zu hoch ist
- Anzeige der verbleibenden Versuche 
- Highscore-Liste

## Technologien

- Vanilla JavaScript für die Logik
- SCSS für Styling 
- CSS für Styling
- LocalStorage zur Speicherung des Highscores


## Verwendung 

 Nach dem Start wird eine zufällige geheime Zahl zwischen 1 und 100 generiert.
Der Spieler kann nun versuchen die Zahl in maximal 10 Versuchen zu erraten.
Nach jedem Versuch wird angezeigt, ob die eingegebene Zahl zu niedrig oder zu hoch war.

Wenn die Zahl erraten wurde oder die Versuche aufgebraucht sind, kann ein neues Spiel gestartet werden.

Der Highscore (wenigste Versuche zum Erreichen) wird gespeichert und angezeigt.

## Entwicklung

- Webpack für Bundling
- Babel für ES6+ Support
- ESLint für Linting
- SCSS Kompilierung

## TODO

- Zufällige Hintergrundfarben
- Animiertes Feedback
- Mehrere Schwierigkeitsgrade

## Credits

- [SCSS ↗](https://sass-lang.com/) für Styling

## Aufgabenstellung

- Lass uns noch einmal ein Spiel machen. Ein Spiel, bei dem der Spieler eine Zahl zwischen 1 und 100 erraten soll. 
- Der Spieler kann auch auswählen, wie viele Versuche er braucht, um die richtige Zahl zu finden.

- Verwende eine schöne Schrift, schöne Farben und versuche es schön zu designen.

