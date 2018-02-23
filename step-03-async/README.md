# step 03: Asynchrone Funktionen
## Einleitung
Der Test von asynchrone Funktionen stellt sich ein bisschen schwieriger dar, als zunächst vielleicht angenommen.

Als einfachste Möglichkeit stellt man sich vielleicht so etwas wie den folgenden Code vor:

```typescript
test('the data is peanut butter', () => {
  function callback(data) {
    expect(data).toBe('peanut butter');
  }

  fetchData(callback);
});
```

Das Problem dabei ist, dass jest den Test als Abgeschlossen ansieht, ohne dass die callback Funktionalität aufgerufen wurde.
Um dieses Problem zu lösen, gibt es verschieden Möglichkeiten:

### Done 
Eine sehr simple Möglichkeit ist die Verwendung von dem von jest bereitgestellten DoneCallback.

Der Test wird erst beendet, wenn die Done Variable (kann als Funktion ausgeführt werden) aufgelöst wird. Alternativ kann diese Variable natürlich auch gefailt werden. 

Bei zeitaufwendigen Tests sollte man ggf. den jest-Timeout erhöhen, der das Notfall-Abbruchkriterium darstellt.

### Assertions
Eine weitere Möglichkeit ist auch die vorherige Deklaration, wieviele Expect-Assertions aufgerufen werden müssen, bevor der Test beendet ist. Dies ist zum Beispiel praktisch, wenn zwei Callbacks in einer undefinierten Reihenfolge aufgerufen werden müssen.

### Promises
Werden im Quellcode Promises verwendet, lassen sich diese einfach testen, indem sie aus der testRoutine zurückgegeben werden

### Async Await
Jest unterstützt auch die async/await Syntax.
Dies funktioniert natürlich nur in asynchronen Methoden.