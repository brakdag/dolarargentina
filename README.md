# Dolar Argentina
Values of Dolar in Argentinian Pesos, scraped from original websites banks.

# Usage

```javascript
const dolar = require("../lib/index");
console.log(await dol.getDolarHoy("galicia"));
```

# Running Web Server

```bash
npm install
npm start
Aplicación dolar en Argentina corriendo en - http://localhost:8080
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
#License
MIT

#TODO

* Agregar más bancos.
* Agregar información banco central.
* Controlar mejor los errores.