var dolar = require("../lib/index");
var dol = new dolar;

async function example(a){
     await dol.getDolarHoy("galicia").then(a=>{console.log("compra:"+a.compra +"\nventa:"+a.venta)});
};

example();