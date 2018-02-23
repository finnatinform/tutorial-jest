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
Um dieses Problem zu lösen, gibt es verschieden Möglichkeiten.

### Done 

### Promises
### Async Await

