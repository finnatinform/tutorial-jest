# step 01: environment
## Projekt
Als erstes erstellen wir eine Umgebung her, in der wir entwickeln und testen können.
Dazu beginnen wir, wenig überraschend, mit einem NPM Projekt.
```
npm init -y
```
Natürlich arbeiten wir auch bei den Tests mit Typescript :)
```
npm install --save-dev typescript
```
Zum Testen werden wir, passend zu react und flux, die Test-Bibliothek von Facebook verwenden: jest.
```
npm install --save-dev jest @types/jest
```

## Konfiguration
Für Typescript  und unseren preprocessor (siehe unten) brauchen wir noch eine tsconfig.json.
Diese halten wir für unseren ersten Test erstmal simpel:
```json
{
  "compilerOptions": {
    "module": "commonjs",
    "jsx": "react"
  }
}
```
Da wir in unserem kleinen Testprojekt erstmal kein Webpack verwenden, brauchen wir noch einen Transpiler.
Dazu erstellen wir uns eine Datei namens preprocessor.js:
```javascript
const tsc = require('typescript');
const tsConfig = require('./tsconfig.json');

module.exports = {
  process(src, path) {
    if (path.endsWith('.ts') || path.endsWith('.tsx')) {
      return tsc.transpile(src, tsConfig.compilerOptions, path, []);
    }
    return src;
  },
};
```
Nun müssen wir node noch mitteilen, dass wir zum Testen gerne jest verwenden wollen.
Dazu rufen wir im test-Befehl das Kommando "jest" auf und konfigurieren jest in einem eigenen Knotenpunkt.

```json
{
  "name": "step-01-environment",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/jest": "^22.1.3",
    "jest": "^22.3.0",
    "typescript": "^2.7.2"
  },
  "jest": {
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js"
    ],
    "transform": {
      "^.+\\.(ts|tsx)$": "<rootDir>/preprocessor.js"
    },
    "testMatch": [
      "**/__tests__/*.(ts|tsx|js)"
    ]
  }
}
```

## Erster Test
Für unseren ersten Test erstellen wir uns einen kleinen Taschenrechner mit statischen Funktionen.
```typescript
export default class Calculator{

    public static add( _A : number , _B : number ):number{
        return _A + _B ;
    }

    public static subtract( _A : number , _B : number ):number{
        return _A - _B ;
    }

    public static multiply( _A : number , _B : number ):number{
        return _A * _B ;
    }

    public static divide( _A : number , _B : number ):number{
        return _A / _B ;
    }

    public static pow( _A : number ):number{
        return _A * _A ;
    }
}
```
Nun legen wir uns einen "\_\_tests\_\_" Ordner an und erstellen darin eine Datei für unseren Unit-Test.
Was die Syntax genau zu bedeuten hat, erkläre ich euch in Step 02.

```typescript
import Calculator from './../calculator' ;

/**
 * TEST DEFINITIONS
 */
it('adds 1 + 2 to equal 3',testSum);


/**
 * TEST IMPLEMENTATIONS
 */
function testSum():void{
    expect( Calculator.add( 1 , 2 ) ).toBe(3);
}
``` 

## Test-Ausführung
Mit der von uns erstellten Konfiguration von Jest führt es alle Testdateien aus, die in einem "\_\_tests\_\_" Ordner liegen.
Den Test starten wir mit dem Befehl
```
npm run test
```