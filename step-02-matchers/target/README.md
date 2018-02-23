# step 02: matchers
Jest stellt einige Ausdrücke bereit, mit denen wir Ausdrücke testen können.
Folgende Definitionen sind Auszüge aus der jest-Dokumentation.

## Common
### toBe
The simplest way to test a value with exact equality.
### toEqual
toEqual recursively checks every field of an object or array.

## Truthiness
### toBeNull 
toBeNull matches only null
### toBeUndefined 
toBeUndefined matches only undefined
### toBeDefined 
toBeDefined is the opposite of toBeUndefined
### toBeTruthy 
toBeTruthy matches anything that an if statement treats as true
### toBeFalsy
toBeFalsy matches anything that an if statement treats as false

## Numbers
### toBeGreaterThan
Entspricht dem > Operator.
### toBeGreaterThanOrEqual
Entspricht dem >= Operator.
### toBeLessThan
Entspricht dem < Operator.
### toBeLessThanOrEqual
Entspricht dem <= Operator.
### toBeCloseTo 
Um Rundungsfehler zu vermeiden, lohnt es sich manchmal toBeCloseTo zu nutzen anstatt toEqual.

## Strings
### toMatch
You can check strings against regular expressions with toMatch.

## Arrays
### toContain
You can check if an array contains a particular item using toContain.

## Exceptions
### toThrow
If you want to test that a particular function throws an error when it's called, use toThrow.