/**
 * Author:    Gustavo David Ferreyra brakdag@gmail.com
 * Created:   3.10.2018
 * MIT license.
 * Example: dolarargentina library
 **/

var dolar = require("../lib/index"),
dol = new dolar;

dol.getDolarHoy("galicia").then((resp)=>console.log(resp));


/* it' shoud be return 

{ banco: 'Banco Galicia', compra: 36.7, venta: 39.2 }

*/