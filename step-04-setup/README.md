# step 04: Setup
## Events
Oft kommt es vor, dass man vor/während/nach Tests Dinge vorbereiten muss.
Dies kann man über Events abfangen.

## Subblöcke
Zur Übersicht bei großen Projekten können in der Testdefinition auch Unterblöcke gebildet werden.
Dies geht mit dem describe-Befehl.

## General Advice (by JEST Team)
If a test is failing, one of the first things to check should be whether the test is failing when it's the only test that runs. In Jest it's simple to run only one test - just temporarily change that test command to a test.only:

```typescript
test.only('this will be the only test that runs', () => {
  expect(true).toBe(false);
});

test('this test will not run', () => {
  expect('A').toBe('A');
});
```