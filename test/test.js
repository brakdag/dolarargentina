/**
 * Author:    Gustavo David Ferreyra brakdag@gmail.com
 * Created:   3.10.2018
 * MIT license.
 * dolarargentina library
 **/

const assert = require("assert");
const async = require("async");
const dolar =  require("../lib/index");
const dol = new dolar();

describe("Bancos", function () {
    this.timeout(15000);
    it(dol.bank["galicia"].name, async function () { console.log(await dol.getDolarHoy("galicia")) });
    it(dol.bank["montemar"].name, async function () { console.log(await dol.getDolarHoy("montemar")) });
    it(dol.bank["provincia"].name, async function () { console.log(await dol.getDolarHoy("provincia")) });
    it(dol.bank["patagonia"].name, async function () { console.log(await dol.getDolarHoy("patagonia")) });
    it(dol.bank["santanderrio"].name, async function () { console.log(await dol.getDolarHoy("santanderrio")) });
});
