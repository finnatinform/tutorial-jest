# Step 06: Snapshots
Neben Unit Tests soll natürlich auch die Oberfläche getestet werden.
Bei React kann das durch zwei Arten erfolgen: Vollautomatisierte UI Tests und Rendering Tests der einzelnen Komponenten.

Letzteres kann durch so genannte Snapshots realisiert werden.

## Basic
Ein Snapshot speichert die Ausgabe einer Komponente, sodass das gerenderte Resultat beim nächsten Test auf Änderungen geprüft werden kann.

Dies erfolgt durch die Syntax der expect-Funktionalität, genauer der toMatchSnapshot Methode.

## Interaktion