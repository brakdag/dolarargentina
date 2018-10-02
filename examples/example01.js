var dolar = require("../lib/index");
var dol = new dolar;
(async function example(a){

    console.log(await dol.getDolarHoy("bna"));
})();