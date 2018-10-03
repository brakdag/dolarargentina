const assert = require("assert");
const dolar = require("../lib/index");
const async = require("async");
var dol = new dolar;


describe("Bancos", function(){
    this.timeout(15000);
 /*   it('Bancos Cargados:', function() {
        var list = dol.getBanklist();
        console.log( list);
    });
    it(dol.bank["galicia"].name,async function() {console.log(await dol.getDolarHoy("galicia"))});
    it(dol.bank["montemar"].name,async function() {console.log(await dol.getDolarHoy("montemar"))});
    it(dol.bank["provincia"].name,async function() {console.log(await dol.getDolarHoy("provincia"))});
    it(dol.bank["patagonia"].name,async function() {console.log(await dol.getDolarHoy("patagonia"))});
    it(dol.bank["santanderrio"].name,async function() {console.log(await dol.getDolarHoy("santanderrio"))});
   */ it(dol.bank["santanderrio"].name,dol.getDolarHoy("santanderrio").then((resp)=>console.log(resp)));
  
    
    //it(dol.bank["bna"].name,async function() {console.log(await dol.getDolarHoy("bna"))});
});
