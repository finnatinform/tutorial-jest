# step 05: Mocks
## Generelles
Mit einer Mock-Funktion kann man den Inhalt einer bestehenden Funktion ersetzen, damit dieser nicht aufgerufen wird.
Mit Hilfe des Mocks kann man dann jedoch die Anzahl und Art der Aufrufe prüfen.
Ein Beispiel dazu ist in der mock.test.ts zu finden, die sowohl ein Beispiel für eine konfigurablen, als auch einen ersetzenden Mock enthält.

## Applikationsgrenzen
Ein möglicher Einsatz ist die Grenze der Applikation, beispielsweise das Laden von Daten.
Dies kann durch einen Mock ersetzt werden, der bestimmte Daten zurückgibt.
Siehe dazu die loader.ts und die loader.test.ts.

Die Klasse LoaderClass fragt ab, ob die Applikation online ist und lädt dann ggf. Daten.



## Mock Implementierungen

## Mock Matcher