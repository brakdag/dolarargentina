# Dolar Argentina
Values of Dolar in Argentinian Pesos.

# Usage

```javascript
const dolar = require("../lib/index");

console.log(await dol.getDolarHoy("galicia"));


```
# Bank Aliases.

|banco|alias|
|-----|------|
|Banco Galicia|"galicia"|
|Banco Nación'|"bna"|
|Banco Patagonia|"patagonia"|
|Montemar'|"montemar"|
|Santander Rio'|"santanderrio"|
|Banco Provincia |"provincia"|

# Test
Test unitaries are using mocha, you need installed mocha in your system.
The test includen check of all sources of information from others webs.
the test are in the folder ./tests/test.js
```bash
npm i mocha -g
npm test
```

